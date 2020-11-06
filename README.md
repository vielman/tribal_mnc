### Ducumentación

Evaluación de competencias técnicas para conocer la experiencia, conocimiento y habilidad de desarrollo 

## API Test 
Es una API que centraliza otros servicios de búsqueda para que quién consuma el servicio tenga un solo endpoint en donde coloque su criterio de búsqueda y esta API realice búsquedas en otros servicios, las consolide, las ordene y les coloque un solo formato de resultado indicando cuál es el origen en donde se encontró la coincidencia. 

### Fuentes 
Las fuentes de búsqueda son los endpoints: 
[http://api.tvmaze.com/](http://api.tvmaze.com/)
[https://itunes.apple.com/](https://itunes.apple.com/search?term=queen)

####Instalación

Clonar repositorio en linea de comandos
`$ git@github.com:vielman/tribal_mnc.git`

Ingresar al directorio API Test
`$ cd api_test`

Instalar dependencias
`$ npm install`

Iniciar servidor en puerto 3000
`$ npm start`

## Web Test 

Es una interfaz visual para el API descrita anteriormente que permita al usuario realizar una búsqueda basado en un criterio que despliegue todas las coincidencias de los servicios encapsulados en el API. 
• Un solo campo de búsqueda 
• Un área de resultados que desplegará la información ordenada alfabéticamente mostrando una imagen que identifique de donde obtuvo el resultado. 

Para ejecutar el archivo Web debe ingresar al directorio web_test y abrir el archivo index.html y ingresar un criterio de búsqueda




###Vista del búscardor

Image:

![](https://raw.githubusercontent.com/vielman/tribal_mnc/master/api_test/public/images/web_test.PNG)
