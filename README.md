# Provincia seguros Challenge

[![Netlify Status](https://api.netlify.com/api/v1/badges/b974aa6d-ba08-4cd9-86a4-d6731911a826/deploy-status)](https://app.netlify.com/sites/provincia-seguros-challenge/deploys)

Este proyecto es un challenge para Provincia seguros, esta dividido en 3 partes: 
- Login: Se debe loguear con un usuario y contraseña. (Para usos practicos se puede usar el usuario: admin y contraseña: admin)
- Home: Es una vista muy similar a la de Provincia Seguros.
- Sucursales: Es una vista que muestra las sucursales de Provincia Seguros en Buenos Aires, Neuquén, Tierra del fuego, Córdoba, Misiones y Santa Fe.

### Demo del proyecto [aquí](https://provincia-seguros-challenge.netlify.app/).

## Tecnologías utilizadas

- **Vue 3**: Framework para la construcción de interfaces de usuario.
- **TypeScript**: Superset de JavaScript para mayor seguridad en el tipo de datos.
- **Tailwind CSS**: Framework de CSS para diseño responsivo y personalizable.
- **Vue Router**: Para la gestión de rutas.
- **Vite**: Herramienta de construcción rápida para aplicaciones Vue.
- **Axios**: Cliente HTTP para realizar peticiones.
- **Pinia**: Store para la gestión de estados.
- **Google places API**: Obtener direcciones de Provincia Seguros en diferentes provincias de la Argentina (Se termino obtando por esta solución, ya que, la [Georef API](https://www.argentina.gob.ar/georef) no brinda soporte para la query solicitada en el ejercicio)

## Instalación

### Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (recomendado v14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

### Pasos para la instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/EliasLeguizamon123/provincia-seguros-challenge.git
   ```

2. **Instalar las dependencias:**

    ```bash
    cd provincia-seguros-challenge
    npm install
    o
    yarn install
    ```

3. **Iniciar el servidor de desarrollo:**

    ```bash
    npm run dev
    o
    yarn dev
    ```

## Explicacion de la arquitectura

Este proyecto sigue los principios de la [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) (Arquitectura Limpia), que organiza el código en capas con responsabilidades bien definidas. Esto facilita la mantenibilidad, escalabilidad y testabilidad del código.

## Estructura de carpetas

```
src/
├── assets/             # Archivos estáticos
├── components/         # Componentes reutilizables
├── pages/              # Vistas de la aplicación
├── router/             # Configuración de rutas
├── services/           # Servicios para realizar peticiones HTTP
├── store/              # Store de Pinia
├── models/             # Tipos de TypeScript
├── utilities/          # Funciones de utilidad
```
