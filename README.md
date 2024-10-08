This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
<h1 align="center">Comelones Fitt Store</h1> <p align="center"> <img alt="Github top language" src="https://img.shields.io/github/languages/top/ilesandres/Tienda-React-sql-node?color=56BEB8"> <img alt="Github language count" src="https://img.shields.io/github/languages/count/ilesandres/Tienda-React-sql-node?color=56BEB8"> </p> <!-- Status --> <!-- <h4 align="center"> 🚧 Proyecto en construcción... 🚧 </h4> --> <p align="center"> <a href="#dart-about">Acerca del Proyecto</a> &#xa0; | &#xa0; <a href="#sparkles-features">Características</a> &#xa0; | &#xa0; <a href="#rocket-technologies">Tecnologías</a> &#xa0; | &#xa0; <a href="#white_check_mark-requirements">Requisitos</a> &#xa0; | &#xa0; <a href="#checkered_flag-starting">Iniciar Proyecto</a> &#xa0; | &#xa0; <a href="#memo-license">Licencia</a> &#xa0; | &#xa0; <a href="https://github.com/ilesandres" target="_blank">Autor</a> </p> <br>
#dart-about <br/>
##Acerca del Proyecto <br/>
ComelonesFitt es una aplicación web desarrollada con React para el frontend y alojada en Vercel. Su objetivo principal es [describir el objetivo de la aplicación].<br/>
<p align='center'>
<img alt='React' src='https://www.angleritech.com/wp-content/uploads/2020/10/reactjs-web-development-company.png'>
</p>


El backend está desarrollado con Firebase, que maneja la base de datos Firestore, funciones en la nube (Cloud Functions), y autenticación (Firebase Authentication).

:sparkles: Características<br/>
Registro e inicio de sesión de usuarios.
Subida y gestión de productos.
Integración de una pasarela de pago (en proceso).
[Otras características que desees destacar].
:rocket: Tecnologías
Frontend: React
Backend: Firebase (Firestore, Cloud Functions, Authentication)
Hosting: Vercel
Pasarela de pago: [Por definir]
:white_check_mark: Requisitos
Antes de iniciar, asegúrate de cumplir con los siguientes requisitos:

Node.js instalado
Firebase CLI instalado
Cuenta en Firebase y proyecto configurado
:checkered_flag: Iniciar Proyecto
Sigue los siguientes pasos para ejecutar el proyecto localmente:

bash
Copiar código
# Clona el repositorio
````
    git clone https://github.com/ilesandres/[nombreRepo]

````

# Instala las dependencias del cliente
````
cd client
npm install
````

# Instala las dependencias de Firebase Functions
````
cd ../functions
npm install
````
Configuración de Firebase:
Crea un proyecto en la Consola de Firebase.
Configura las variables de entorno locales (puedes utilizar un archivo .env).
Inicia el desarrollo:`
````
bash
````
Copiar código
# En una terminal:`
````
cd client
npm start`
````

# En otra terminal:
````
cd functions
firebase emulators:start
````
Implementar la Pasarela de Pago:
Selecciona una pasarela de pago (como Stripe o PayPal).
Integra la API de la pasarela en Firebase Cloud Functions.
Actualiza la interfaz de usuario en React para procesar pagos.
:memo: Licencia
Este proyecto está bajo la MIT License.
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
