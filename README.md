# API de Inventario - Limones 

Este proyecto es una API RESTful en Node.js para la gestión de un inventario. Incluye un pipeline DevSecOps automatizado con GitHub Actions que valida SAST, SCA y Seguridad de Contenedores.

## Instrucciones para ejecutar localmente
1. Clonar este repositorio.
2. Construir la imagen: `docker build -t api-limones:latest .`
3. Ejecutar el contenedor: `docker run -p 3000:3000 api-limones:latest`
4. Probar la API en `http://localhost:3000/api/limones`