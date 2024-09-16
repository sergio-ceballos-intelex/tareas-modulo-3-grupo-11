# Como usar Github En tu propio pc y para subirlo en Github.

## Introducción
Como colaborar con otros desarroladores y que un jefe lo apruebe y lo ponga en la rama principal de un proyecto para entregarlo al cliente.
En el siguiende archivo md o MARKDOWN vamos a aprender a iniciar repositorio git en nuesto PC, agregar archivos, hacer commits y mandar nuestros cambios a GitHub para que el jefe o el profesor lo apruebe o nos mande a corregir.


## Paso 1: Inicializar un Repositorio Git

Para comenzar, abre tu terminal y navega hasta el directorio donde deseas crear tu repositorio. Luego, ejecuta los siguientes comandos:

```Bash ```

```git init```

## Paso 2: Agregar Archivos al Staging Area

Cada vez que modifiques un archivo hay que tomarle una foto para que se vaya de "change" a "Staging". Esto se hace con los siguientes comandos:

**Para subir un archivo a la vez:**

```git add nombre del archivo```

**Para subir todos los archivos a la vez:**

```git add . ```

## Paso 3: Realizar un Commit:

En este paso vamos a subir a las personas que estan en la parada del bus al bus. Esto se hace con los siguientes comandos:

```git commit -m "Mensaje descriptivo del commit"```

## Paso 4:  Vincular el Repositorio Local con un Repositorio Remoto en GitHub:

Para subir tus cambios a GitHub, primero necesitas vincular tu repositorio local con un repositorio remoto. Usa el siguiente comando, reemplazando <URL_del_repositorio_en_GitHub> con la URL de tu repositorio en GitHub:

```git remote add origin <URL_del_repositorio_en_GitHub>```


## Paso 5: Subir los Cambios a GitHub :

```git push -u origin master```




