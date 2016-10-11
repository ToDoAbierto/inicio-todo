# Prácticas con node.js y todomvc-common

## PASOS SEGUIDOS:

### Crear y entrar en la carpeta raiz del proyecto
mkdir inicio-todo
cd inicio-todo

### Generar la estructura con yeoman y su generador webapp
yo webapp

### Instalar el paquete todoMVC
npm install --save todomvc-common
npm install

### Modificar app/index.html
Para que también enlace con los nuevos archivos:
<!-- Nuevos estilos -->
  <link rel="stylesheet" href="styles/css/estilos.css">
  <link rel="stylesheet" href="styles/css/animaciones.css">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet">
<!-- Nuevos scrips -->
<script src="scripts/animaciones.js"></script>

### Añadir contenido en app/index.html
<body> contenido </body>

# Comandos gulp
Ejecutar en el servidor: gulp serve
