# Inicialización, Agregado y Subida de Archivos a GitHub con Git

## Introducción

Git es un sistema de control de versiones que permite a los desarrolladores rastrear y gestionar cambios en sus proyectos. GitHub es una plataforma que aloja repositorios de Git y facilita la colaboración entre desarrolladores de todo el mundo. Versionar archivos en un repositorio es crucial para mantener un historial de cambios, colaborar eficazmente, y prevenir la pérdida de datos. En este tutorial, aprenderás cómo inicializar un repositorio Git, agregar archivos, realizar commits, vincular el repositorio local con GitHub y subir los cambios.

## Paso 1: Inicializar un Repositorio Git

Para comenzar a usar Git en un proyecto, primero necesitas inicializar un repositorio en tu máquina local. Esto se hace con el comando `git init`, que crea un nuevo repositorio vacío en la carpeta actual.

>git ´init´

## Paso 2: Agregar Archivos al Área de Preparación (Staging Area)

Antes de poder guardar los cambios en el repositorio, debes agregar los archivos al área de preparación. Esto se hace con el comando git add, que especifica qué archivos serán incluidos en el próximo commit.

>git add nombre-del-archivo
>git add

## Paso 3: Realizar un Commit de los Archivos Agregados

Un commit es un punto de control que guarda los cambios realizados en el repositorio. Para realizar un commit, utiliza el comando git commit junto con la opción -m para proporcionar un mensaje que describa los cambios.

>git commit -m "Descripción clara de los cambios realizados"

## Paso 4: Vincular tu Repositorio Local con un Repositorio Remoto en GitHub

Para subir los cambios a GitHub, primero necesitas vincular tu repositorio local con un repositorio remoto en GitHub. Utiliza el comando git remote add origin seguido de la URL de tu repositorio en GitHub.

>git remote add origin <URL_del_repositorio_en_GitHub>

Reemplaza <URL_del_repositorio_en_GitHub> con la URL real de tu repositorio de GitHub.

## Paso 5: Subir los Cambios a GitHub

Una vez que hayas vinculado tu repositorio local con GitHub, puedes subir los cambios al repositorio remoto usando el comando git push. La opción -u se utiliza para establecer la rama remota de seguimiento para la rama actual.

>git push -u origin main
---
pasos básicos para inicializar un repositorio, agregar archivos, realizar commits, vincular tu repositorio local con GitHub y subir cambios al repositorio remoto. Estos comandos básicos de Git son fundamentales para cualquier desarrollador que trabaje con código. Practicar estos comandos te ayudará a dominar el flujo de trabajo de Git y a colaborar eficientemente con otros desarrolladores.
