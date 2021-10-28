# apiRestLocal
API REST para probar
## Introducción
API REST en Node JS con la librería Express, para probar en frontends locales, los verbos GET y POST mediante Ajax o Fetch API

## Para iniciar
0. Descargar Node JS en https://nodejs.org/es/
1. Descargar/clonar el repositorio
2. Posicionarse en la carpeta del repositorio
3. Ejecutar npm install
4. Ejecutar npm start
5. Abrir el navegador local y verificar que la api está funcionando en
  http://localhost:8080/
  http://localhost:8080/ejemploGet
  http://localhost:8080/productos

## Endpoints
GET
  http://localhost:8080/ - Para verificar el funcionamiento del servidor 
  http://localhost:8080/ejemploGet - Para verificar el funcionamiento del servidor
  http://localhost:8080/productos - Productos aleatorios. De modificar las líneas 40 a 145 con un objeto, pueden personalizar este endpoint
  
POST
  http://localhost:8080/ejemploPost - Para verificar el funcionamiento del servidor 
  http://localhost:8080/form - Para verificar el funcionamiento del servidor. Devuelve el objeto JSON que es enviado
  
  
