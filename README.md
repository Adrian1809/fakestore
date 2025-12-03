# E-commerce shop

Este repositorio contiene el código de la aplicación web de comercio electrónico construida con Next.js. El proyecto utiliza diversas tecnologías y herramientas como Husky, TypeScript, Redux Toolkit, ESLint y Tailwind CSS.

## Tabla de contenidos

- [Features](#features)
- [Roadmap](#roadmap)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Technology Stack](#technology-stack)
- [Folder Structure](#folder-structure)
- [Acknowledgements](#acknowledgements)

## Caracteristicas

- **Página principal:** Lista productos y enlaces para navegar en el sitio.
- **Carrito:** Ver/Editar/Eliminar artículos del carrito.
- **Wishlist:** Ver/Editar/Eliminar artículos de la lista de deseos.
- **Filtros:** Filtrar productos basados en categorías.


## Roadmap

- [x] ~navbar~
- [x] ~home page~
- [x] ~my cart~
- [x] ~my wishlist~
- [x] ~product detail page~

## Requisitos previos
Antes de configurar el proyecto, asegúrate de tener instalado en tu máquina lo siguiente::

- Node.js (version >= 16.14.0)
- npm (version > 7.0.0)

## Instalación

#### Instalar Node.js y npm en Ubuntu

1. Actualiza los paquetes del sistema:

```bash
sudo apt Update
```

2. Instala Node.js:

```bash
sudo apt install nodejs
```

3. Instala npm ubuntu con el siguiente comando.

```bash
sudo apt install npm
```

4. Verifica la instalación revisando las versiones de Node.js y npm:

```bash
node --version
npm --version
```

#### Instalar Node.js y npm en Windows

1. Visita el sitio oficial [Node.js website ](https://nodejs.org)
2. Descarga la versión LTS más reciente para Windows.
3. Ejecuta el instalador y sigue el asistente de instalación.
4. Después de instalar, abre Command Prompt o PowerShell y verifica las versiones de Node.js y npm:

```bash
node --version
npm --version
```

#### Ejecutar el proyecto localmente

Para ejecutar este proyecto de manera local, sigue estos pasos:

1. Clona el repositorio usando HTTPS

```bash
git clone https://github.com/Adrian1809/FakeStore.git
```

o

Clona el repositorio usando SSH (si ya configuraste una clave SSH):

```bash
git clone git@github.com:Adrian1809/FakeStore.git
```

2. Navega al directorio del proyecto::

```bash
cd FakeStore
```

3. Instala las dependencias:

```bash
npm install
```

## Uso

Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:

```bash
npm run dev
```

Abre tu navegador web y visita http://localhost:3000 para acceder a la aplicación.

> Mientras ejecutes el proyecto de forma local, si encuentras el siguiente error, considera actualizar tu versión de nodejs.
>
> ```bash
> showAll: args["--show-all"] ?? false,
>                                         ^
> SyntaxError: Unexpected token '?'
>    at wrapSafe (internal/modules/cjs/loader.js:915:16)
>    at Module._compile (internal/modules/cjs/loader.js:963:27)
>     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
>     at Module.load (internal/modules/cjs/loader.js:863:32)
>     at Function.Module._load (internal/modules/cjs/loader.js:708:14)
>     at Module.require (internal/modules/cjs/loader.js:887:19)
>     at require (internal/modules/cjs/helpers.js:74:18)
> ```

## Stack tecnologico

- [Next.js](https://nextjs.org): Un framework de React para construir aplicaciones renderizadas en servidor.
- [TypeScript](https://www.typescriptlang.org): Un superset tipado de JavaScript que mejora la calidad del código y la productividad del desarrollador.
- [Redux Toolkit](https://redux-toolkit.js.org/): Una herramienta poderosa para la gestión de estado.
- [ESLint](https://eslint.org): Un linter de JavaScript que ayuda a identificar y corregir problemas comunes en el código.
- [Tailwind CSS](https://tailwindcss.com): Un framework CSS utility-first para construir interfaces personalizadas.
- [Shadcn UI](https://ui.shadcn.com/): Una colección de componentes reutilizables construidos con Radix UI y Tailwind CSS.

## Estructura de carpetas

El proyecto sigue una estructura común de carpetas para una aplicación Next.js:

- `/components`: Contiene componentes reutilizables de React.
- `/app`: Contiene rutas/páginas
- `/public`: Almacena archivos estáticos como imágenes y fuentes.
- `/app/globals.css`: Contiene estilos globales y la configuración de Tailwind CSS..
- `/redux`: Contiene los estados de la aplicación.

## Acknowledgements

- [Next.js Dcoumentación](https://nextjs.org/docs)
- [Tailwind CSS Documentación](https://tailwindcss.com/docs)
- [Shadcn UI Documentación](https://ui.shadcn.com/docs)
