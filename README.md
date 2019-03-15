# Información
`md-links` herramienta que lee y analiza archivos en formato Markdown, para verificar los links que contengan y reportar algunas estadísticas.

## Instalación

Para instalar esta librería debemos ejecutar el siguiente comando

`npm install SolangeSalvatierra/md-links`

![md-links](https://user-images.githubusercontent.com/45084376/54441960-c19cc580-470b-11e9-85f9-2efaa6286eae.png)

## Uso en la línea de comandos

El ejecutable podra ejecutarse de la siguiente manera a través de la terminal:

md-links <path-to-file> [options]

Por ejemplo:

$ md-links ./some/example.md --validate
$ md-links ./some/example.md --stats
$ md-links ./some/example.md --v --s
$ md-links ./some/example.md

![md-links](https://user-images.githubusercontent.com/45084376/54440906-97e29f00-4709-11e9-8bb7-cf961d360a4f.png)

## Opciones

`--validate o --v`

Si pasamos la opción --validate o --v, el módulo debe hacer una petición HTTP para averiguar si el link funciona o no. Si el link resulta en una redirección a una URL que responde ok, entonces consideraremos el link como ok.

![md-links](https://user-images.githubusercontent.com/45084376/54440911-987b3580-4709-11e9-8a1d-ee4acd6b11dd.png)

El output en este caso incluye la palabra ok o fail después de la URL, así como el status de la respuesta recibida a la petición HTTP a dicha URL.

`--stats o --s`

Si pasamos la opción --stats o --s el output (salida) será un texto con estadísticas básicas sobre los links.

![md-links](https://user-images.githubusercontent.com/45084376/54440909-987b3580-4709-11e9-8bca-fc952eb5f537.png)

`--stats --validate`

También podemos combinar --stats y --validate para obtener estadísticas que necesiten de los resultados de la validación.

![md-links](https://user-images.githubusercontent.com/45084376/54440908-97e29f00-4709-11e9-8756-60231bbe86a7.png)

## Ejecutable
El módulo puede importarse en otros scripts de Node.js a travéz de:

`require('md-links')`

#### `mdLinks(path, options)`

Argumentos

`path`: Ruta absoluta o relativa al archivo o directorio
`options`: Un objeto con las siguientes propiedades:
`validate`: Booleano que determina si se desea validar los links encontrados.

#### Implemetación de la librería

Se crea el flujograma para tener una guía de la implementación del proyecto 

![md-links](https://user-images.githubusercontent.com/45084376/53305558-e7435700-3850-11e9-99b5-e79640edbc97.jpg)

Adicionalmente se crea el pseudocodigo para crear las funciones y saber su input, output y los posibles métodos a implementar 


### 1.1. evaluatePath
* Ingresa: Ruta (string)
* Proceso: Utilizar método path.isAbsolute para reconocer si la ruta es absoluta
* Salida: true/false (booleano)

### 1.2. transformToAbsPath
* Ingresa: Ruta (string)
* Proceso: Utilizar método path.resolve para convertir ruta relativa a absoluta
* Salida: Ruta absoluta (string)

### 1.5. validateExtMD
Ingresa: Ruta absoluta absoluta (string)
Proceso: verifica si es un archivo MD utilizando la librería path.extname
Salida: true/false (booleano)

### 1.6. contenFileMD
* Ingresa: Ruta (string)
* Proceso: verifica si es direcctorio o archivo y valida si tiene extenciones MD pusheandolas a un nuevo array
* Salida: Array con todos las rutas MD (array)

### 2.1. getMDContent
* Ingresa: Array de objetos con archivos MD (array)
* Proceso: Extraer href de cada objeto que esta dentro del array y guardarlo en un nuevo array
* Salida: Array de objetos con href de cada links (array)

### 2.2. validateLinks
* Ingresa: Array de objetos con href de cada link(array)
* Proceso: Utilizar método fetch para verificar si href es valido o no, guardar cada ok o fail dentro de un array.
* Salida: Array de objetos con status ok o fail de cada links (array)

### 2.3. statsLinks
* Ingresa: Array de objetos con href de cada link(array)
* Proceso: Calcular total de links, cuantos son unicos, y en caso a que se ingrese array con status de los links entonces calcular tambien los links que están rotos. 
* Salida: links unicos y totales (string)

### 3.1. statLinksBroken
* Ingresa: Array de objetos con href de cada link(array)
* Proceso: Calcular total de links rotos.
* Salida:links rotos (string)