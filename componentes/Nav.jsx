
import Link from "next/link"
export default function Nav(){
    return <div class="navegación">
        <nav>
            <ul class="nav">
                <li> <Link href="/Acerca">Acerca</Link></li>
                <li> <Link href="/Inicio">Inicio</Link></li>
               <li><div class="dropdown">
                <button class="dropbtn">Categorias</button>
               <div class="dropdown-content">
               <Link href="/Categorias">Lacteos</Link>
               <Link href="#">Reposteria</Link>
             </div>
             
             </div>
             </li> 
                <li> <div class="dropdown">
                <button class="dropbtn">Deporte-Salud</button>
               <div class="dropdown-content">
               <Link href="#">Atletismo</Link>
               <Link href="#">Gym</Link>
             </div>
             
             </div></li>
            </ul>
        </nav>
    </div>
}