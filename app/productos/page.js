'use client'

import React,{useState} from 'react';
import Image from 'next/image';

const Page = () => {

    const imagenGeneral='https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png';

    const [productos, setProductos] = useState([
        {
          name: "Producto 1",
          description: "Descripción del producto 1",
          price: 20.99,
          likes: 250,
          image: imagenGeneral
        },
        {
          name: "Producto 2",
          description: "Descripción del producto 2",
          price: 15.50,
          likes: 340,
          image: imagenGeneral
        },
        {
          name: "Producto 3",
          description: "Descripción del producto 3",
          price: 15.50,
          likes: 340,
          image: imagenGeneral
        },
        {
          name: "Producto 4",
          description: "Descripción del producto 4",
          price: 15.50,
          likes: 340,
          image: imagenGeneral
        },
        {
          name: "Producto 5",
          description: "Descripción del producto 5",
          price: 15.50,
          likes: 340,
          image: imagenGeneral
        },
        {
          name: "Producto 6",
          description: "Descripción del producto 6",
          price: 15.50,
          likes: 340,
          image: imagenGeneral
        },
        {
          name: "Producto 7",
          description: "Descripción del producto 7",
          price: 15.50,
          likes: 340,
          image: imagenGeneral
        },
        {
          name: "Producto 8",
          description: "Descripción del producto 8",
          price: 15.50,
          likes: 340,
          image: imagenGeneral
        },
        {
          name: "Producto 9",
          description: "Descripción del producto 9",
          price: 15.50,
          likes: 340,
          image: imagenGeneral
        },
      
      ]);
      

    return (
        <div>

            <h1 className='titleProduct'>hola</h1>
            <div className='container-product'>
                {productos.map((producto,index)=>(
                        <div key={index} className='product-card'>
                            <div className='product-image'>
                                {/*imagen de produto */}
                                <img src={producto.image} />
                            </div>
                            <div className='product-info'>
                                <h3>{producto.name}</h3>
                                <p>{producto.description}</p>
                                <div className='product-details'>
                                    <span>{producto.likes} likes</span>
                                    <span>{producto.price} USD</span>
                                </div>
                            </div>

                        </div>
                    ))}

            </div>
            

        </div>
    );
}

export default Page;
