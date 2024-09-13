# Inicialización, Agregado y Subida de Archivos a GitHub con Git

## Introducción

En el desarrollo de software, el versionamiento de archivos es una práctica esencial que permite a los desarrolladores rastrear cambios, colaborar de manera eficiente y mantener un historial del proyecto.  
Git es una de las herramientas más populares para gestionar versiones, y GitHub facilita el alojamiento y la colaboración en repositorios remotos. En este *tutorial*, aprenderás a inicializar un repositorio Git, agregar archivos, realizar commits, vincular tu repositorio local con GitHub y subir tus cambios a un repositorio remoto.

## Paso 1: Inicializar un repositorio Git

Para comenzar a utilizar Git en tu proyecto, debes inicializar un repositorio en tu máquina local. Esto se hace con el comando `git init`, lo anterior estando ubicado en la ruta que requieres sea monitorizada como repositorio. A continuación, se describe cómo inicializarlo:

* Navega al directorio de tu proyecto  
    Ubica la terminal de tu visual estudio al directorio donde requieres inicializar el proceso de monitorización, para ello utiliza el siguiente comando:

    ```bash
    cd /ruta/de_tu_proyecto
    ```

* Inicializa un repositorio Git
    Utiliza el siguiente comando para indicarle a Git que vasa inicializar el repositorio

    ```bash
    git init
    ```
Este comando crea un directorio oculto `.git` en tu proyecto, donde Git almacenará el historial de versiones.

>**Nota:**
> 
>Es importante garantizar que la Terminal (cosola) se este ejecutando en modo Bash, ver el detalle en [configura la consola Bash](https://www.youtube.com/shorts/IElqYvFt_oU)  


## Paso 2: Agregar archivos al área de preparación (staging area)

Una vez que has creado o modificado archivos en tu proyecto, el siguiente paso es agregarlos al área de preparación. Esto es necesario **antes de realizar un commit**. Utiliza el comando `git add` para hacerlo:

* Agrega un archivo específico al área de preparación
    ```bash
    git add [nombre_del_archivo.extensión]
    ```

* Agrega todos los archivos modificados al área de preparación
   ```bash
    git add .
   ```

    El punto `.` indica que todos los archivos modificados en el directorio actual deben ser agregados al área de preparación.

## Paso 3: Realizar un commit de los archivos agregados

Después de preparar los archivos, es hora de crear un commit. Un commit es un punto en el historial del proyecto que describe los cambios realizados. Utiliza el comando `git commit`:


* Realiza un commit con un mensaje descriptivo
    ```bash
    git commit -m "Descripción de los cambios realizados"
    ```


>**Nota:**
> 
>Asegúrate de que el mensaje del commit sea claro y conciso, ya que esto te ayudará a recordar qué cambios se realizaron en cada commit.

## Paso 4: Vincular tu repositorio local con un repositorio remoto en GitHub

Para colaborar con otros o simplemente almacenar tu código de manera segura, debes vincular tu repositorio local con un repositorio remoto en GitHub. Esto se hace con el comando `git remote add origin` seguido de la URL de tu repositorio en GitHub:

* Vincula el repositorio local con el repositorio remoto en GitHub
    ```bash
    git remote add origin https://github.com/tu_usuario/nombre_del_repositorio.git
    ```

Este comando indica a Git que el repositorio remoto se encuentra en la URL especificada.

>**Nota:**
> 
>Asegúrate de que el repositorio este previamente creado en la URL especificada

## Paso 5: Subir los cambios a GitHub

Finalmente, para subir tus cambios al repositorio remoto en GitHub, utiliza el comando `git push`. El flag `-u` le dice a Git que recuerde esta configuración para futuros push:


* Sube los cambios al repositorio remoto en GitHub
```bash
git push -u origin [rama]
```
es importante escribir en `[rama]` el nombre de la rama en la que deseas llevar los cambios.

>**Nota:**
> 
>1. Si estás utilizando la rama principal con un nombre diferente, como `main`, reemplaza `master` con `main` usando  el comando.  
>
>    ```bash
>    Git branch - M main
>    ```
>2. Si ya existe la rama donde vas a realizar el Push, es decir ya habias usado el comando anterior, solamente  requeriras usar Push, asi:  
>   ```bash
>   Git push 
>   ```


## Ejemplo Práctico

Supongamos que has creado un archivo llamado `main.js` en tu proyecto. Aquí están los comandos que seguirías para subir este archivo a GitHub:

* inicializar tu repo
    ```bash
    cd /ruta/de/tu/proyecto
    git init
    ```
* Adicionar a Staging y confirmar cambios en Git 
    ```bash
    git add main.js
    git commit -m "Añadir archivo index.html"
    ```
* Conectar con el repositorio remoto( GitHub ) 
    ```bash
    git remote add origin https://github.com/tu_usuario/mi_proyecto.git
    ```
* Garantizar que la rama principal sea main no Master
    ```bash
    Git branch - M main
    ```
* Confirmar los cambios entre Git y Github
    ```bash
       git push -u origin [Rama]]
    ```
    
 
## Recursos Adicionales

- [Documentación oficial de Git](https://git-scm.com/doc)
- [Documentación Github](https://docs.github.com/en/get-started/start-your-journey/about-github-and-git)


## Conclusión

En este tutorial, hemos cubierto los pasos fundamentales para trabajar con Git y GitHub, desde la inicialización de un repositorio hasta la publicación de cambios a un repositorio remoto. Practicar estos comandos te ayudará a integrarlos en tu flujo de trabajo diario, lo que resultará en un manejo más eficiente de tus proyectos y colaboraciones.



