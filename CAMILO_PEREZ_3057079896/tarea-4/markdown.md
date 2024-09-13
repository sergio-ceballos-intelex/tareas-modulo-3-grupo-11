
# Inicialización, Agregado y Subida de Archivos a GitHub con Git

En programación es recomendable estar familiarizado con la tarea de *versionar archivos*, puesto que da solución a la necesidad de **registrar** y **gestionar** los cambios de un proyecto a medida que nuevas ***funcionalidades***, ***sentencias*** de código y ***modificaciones*** en el algoritmo son realizadas, negadas y/o aprobadas por ti y tu equipo de trabajo.

Imagina que deseas crear un e-commerce. Dentro de las funcionalidades necesitarás una ***página web*** que oferte los productos, unos ***estilos*** que sean llamativos, una ***lógica*** de funcionamiento y navegación, y sobre todo; permitir de manera ágil, cómoda y oportuna la elección, compra y transacción con el cliente.  

Como ves, son múltiples las tareas a realizar y en cada paso del proyecto serán varias las personas ayudándote. Esta es la razón fundamental de rastrear ***qué*** y ***quién*** hace cambios, sugerencias y actualizaciones a tu página. Cada una de estas acciones representará una nueva *versión* y su registro es la acción de *versionar el archivo*. 

Una solución para versionar archivos es [Github](https://github.com/). Para utilizarla, necesitarás un ***repositorio***, el cual es un espacio de almacenamiento para la colección de archivos y directorios. Comencemos por cómo inicializar un repositorio:

### 1. Inicializar un repositorio.

* Una vez estés en **VS Code**, selecciona la opción de *Open Folder* :  

    ![VS-Code-Open-folder](/tareas-modulo-3-grupo-11/CAMILO_PEREZ_3057079896/tarea-4/images/VS-CODE-OPEN-FOLDER.jpg)


* Crea o selecciona una carpeta y ve a Seleccionar carpeta :


    ![Folder-Opt-In](/tareas-modulo-3-grupo-11/CAMILO_PEREZ_3057079896/tarea-4/images/FOLDER-OPT-IN.jpg)


* Crea un nuevo archivo README.md y a continuación click derecho > Open in integrated terminal :


    ![README.md-File-Right-Click](/tareas-modulo-3-grupo-11/CAMILO_PEREZ_3057079896/tarea-4/images/README-FILE-RIGHT-CLICK.jpg)


* En la terminal escribe *git init* para inicializar tu repositorio :


    ![GIT-init](/tareas-modulo-3-grupo-11/CAMILO_PEREZ_3057079896/tarea-4/images/GIT_INIT.jpg)


* Recibirás este mensaje de confirmación :

    ![GIT-init-2](/tareas-modulo-3-grupo-11/CAMILO_PEREZ_3057079896/tarea-4/images/GIT_INIT_2.jpg)

*Ahora que creamos el repositorio de manera local, es necesario agregar archivos al *área de staging*. En esta área los archivos son preparados para subir al repositorio.*

### 2. Agregar archivos al área de staging :

* Agrega al área de staging el archivo README.md que creamos anteriormente con el código *git add nombre_del_archivo* :

    ![VS-Code - Select Folder](/tareas-modulo-3-grupo-11/CAMILO_PEREZ_3057079896/tarea-4/images/README_FILE_ADD.jpg)

*Alternativamente puedes usar* *git add .* *para subir más de un archivo a la vez.*


### 3. Confirmar el estado de los archivos (OPCIONAL) :

* Para confirmar el estado de tus archivos en el repositorio, escribe *git status* en tu consola :

    ![README-FILE-ADD-STATUS](/tareas-modulo-3-grupo-11/CAMILO_PEREZ_3057079896/tarea-4/images/README-FILE-ADD-STATUS.jpg)

*Muy bien. El siguiente paso será realizar un *commit*. Los commit guardan los cambios en el repositorio. Recuerda agregar un mensaje explicando qué cambios realizaste.*

### 4. Realizar un commit:

* Escribe *git commit -m "tu_mensaje_aquí" :*

    ![README-FILE-ADD-STATUS](/tareas-modulo-3-grupo-11/CAMILO_PEREZ_3057079896/tarea-4/images/GIT_COMMIT.jpg)

*Debes ver un mensaje de confirmación del commit.*

*Ahora debes vincular tu repositorio local con un repositorio remoto en Github. Para eso sigue estos pasos.*

### 5. Crear un repositorio remoto en Github:

* En [Github](https://github.com/) selecciona la opción de ***Start a new repository for*** *Your_Username* :

    ![NEW-REPOSITORY](/tareas-modulo-3-grupo-11/CAMILO_PEREZ_3057079896/tarea-4/images/NEW-REPOSITORY.jpg)

*Asigna el nombre que quieras al repositorio en* ***Repository name***. 

* Confirma que el repositorio fue creado al ver esta página : 

    ![NEW-REPOSITORY-SETUP](/tareas-modulo-3-grupo-11/CAMILO_PEREZ_3057079896/tarea-4/images/NEW-REPOSITORY-SETUP.jpg)

*Para vincular tu repositorio remoto al local sigue este paso.*

### 6. Vincular el repositorio remoto al local:

* Copia el siguiente link dentro de tu repositorio :

    ![NEW-REPOSITORY-CLONE](/tareas-modulo-3-grupo-11/CAMILO_PEREZ_3057079896/tarea-4/images/NEW-REPOSITORY-CLONE.jpg)

* Escribe *git remote add origin URL_del_repositorio_en_GitHub* en la terminal :

    ![NEW-REPOSITORY-CLONE](/tareas-modulo-3-grupo-11/CAMILO_PEREZ_3057079896/tarea-4/images/NEW-REPOSITORY-CLONE-SETUP.jpg)

*Para terminar, sigue este último paso y sube los cambios a tu repositorio.*

### 7. Subir los cambios al repositorio:

* Escribe *git push -u origin master* para subir tus cambios del repositorio local al repositorio remoto. Recuerda, los cambios van del repositorio local -> área de staging -> repositorio remoto :

    ![NEW-REPOSITORY-SUBMITTED](/tareas-modulo-3-grupo-11/CAMILO_PEREZ_3057079896/tarea-4/images/NEW-REPOSITORY-SUBMITTED.jpg)

* ¡Felicitaciones! Creaste tu primer repositorio, subiste tu primer archivo y sabes cómo versionar. Recuerda revisar el repositorio en tu perfil de Github. Tanto el local como el remoto deben verse igual :

    ![REPOSITORY-CONFIRMATION](/tareas-modulo-3-grupo-11/CAMILO_PEREZ_3057079896/tarea-4/images/REPOSITORY-CONFIRMATION.jpg)

Para concluir, Github nos ayuda a versionar nuestros archivos al programar. Es importante realizar este proceso porque nos permite guardar cambios, comentarios, correciones y así mismo regresar a versiones anteriores de nuestro código al crear logs de los avances.

Sigue aprendiendo sobre Github en [Github-Explore](https://github.com/explore) y no dejes de practicar pues solamente así lograrás el éxito.

