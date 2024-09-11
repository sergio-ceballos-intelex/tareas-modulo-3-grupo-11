# Inicializacion, Agregado y Subida de Archivos a GitHub con Git

Un fundamento para el desarrollo de software colaborativo y gestion de proyectos es el versionar
archivos, algunos de sus puntos clave son:

1. **Historial de cambios:** Git mantiene registro de las modificaciones realizadas, esto permite
    * Revision de cambios
    * Identificacion de errores
    * Comprension del proceso
2. **Colaboracion efectiva:** Varios desarrolladore4s pueden trabajar al mismo tiempo en diferentes
partes del codigo sin dañar el trabajo de los demas.
3. **Revision y recuperacion:** Git permite revertir cambios de archivos e incluso todo un proyecto
de ser necesario, esto lo hace mediante las versiones anteriores llamadas "commit".
4. **Experimentacion segura:** Mediante el uso de ramas (Branches), los desarrolladores pueden probar
caracteristicas o realizar experimentos en el codigo sin temor a dañar la rama principal "main" o 
"master".
5. **Seguimiento de responsabilidad:** Los cambios de Git estan atados a un usuario especifico, lo que
permite llevar un proyecto transparente.

## Iniciacion de un repositorio en Git

Para comenzar a versionar se debe utilizar un commando llamado ```git init``` el cual permite inicial 
el proceso, esto se hace de la siguienmte forma:
1. Abrir la terminal y entrar en el modo "Bash"
2. Escribir el comando ```git init```
```bash
git init
```

Esto crea un nuevo repositorio de Git dentro de la carpeta seleccionada, es en este repositorio en el 
que se pueden crear y modificar archivos que posteriormente estaran en Git.

## Agregar al area de programacion o staging area
Cuando se realizan modificaciones en los archivos, estos deben subirse por medio de la funcion commit,
pero para llegar a este punto primero se debe pasar por el area de preparacion o staging area, esta 
permite que los cambios realizados se incluyan en el procimo commit, se realiza de la siguiente forma:

* En el modo bas de la terminal

```bash
git add .
```
> **El punto debe ir separado del add**, esto indica que todos los cambios que se realizaron seran subidos al staging area

## Realizar un commit

Una vez se han generado los cambios al staging area estos pueden ser consolidados en un commit
> Un commit en Git representa un punto en la historia del proyecto, esto siempre lleva un mensaje descriptivo que explica los cambios realizados

* commit de archivos agregados:
```bash
git commit -m "mensaje_descriptivo"
```

Por ejemplo al hacer cambios en un archivo JS se realizaria de la siguiente forma:

```bash
git commit -m "Agrego archivo nombre_del_archivo"
```
## Vincular un repositorio local con GitHub

Para conectar un repositorio local (esta en el pc), a un repositorio en GitHub (esta en internet),
es necesario establecer un vinculo mendiante el commando **git remote add**, y tener el URL del 
repositorio de GitHub, esto se hace de la siguiente manera:

```bash
remote add origin https://github.com/KambcodeLatam/FullStack_Javascript_G11_JUN_2024.git:
```

## Subir cambios a GitHub

Para finalizar el proceso se deben subir los cambios finales a GitHub, con el comando ```git push```,
a su vez se usa la funcion **-u origin master**, con el fin de declarar que la rama "master" o "main"
sera donde se apliquen los cambios, se hace de la siguiente forma:

```bash
git push -u origin master
```
> Esto envia los commit locales de la rama **master o main** a GitHub, el cual es el repositorio remoto, esto permite que los demas desarrollados puedan ver los cambios y trabajar sobre los mismos de ser necesario.

## Conclusion

En este corto tutorial se han cubierto los pasos basicos para utilizar Git y GitHub, desde la inicializacion
de un repositorio, hasta la subida de cambios a GitHub, los comandos vistos son vitales para colaborar o 
desarrollar proyectos de software de la manera adecuada.

> Abajo encuentras algunos links de apoyo

[video tutorial](https://www.youtube.com/watch?v=eQMcIGVc8N0 "🚀Como crear un Repositorio y Subir Proyecto a 👉GITHUB👈 Paso a Paso💻")
[Paso a paso](https://www.youtube.com/watch?v=WlEHStRYbJA "Como Subir y Crear un Repositorio en GitHub con GIT 2024 Sube Archivos y Proyectos con VSCode 👌")



