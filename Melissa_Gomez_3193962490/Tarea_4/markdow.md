## **Inicialización, Agregado y Subida de Archivos a GitHub con Git**

## Introducción

Versionar archivos en un repositorio es una práctica esencial para el desarrollo de software. Permite rastrear los cambios en el código, colaborar con otros desarrolladores, y mantener un historial detallado del proyecto. Git es una herramienta poderosa para el control de versiones, y GitHub es una plataforma popular para alojar y compartir repositorios Git. Este tutorial te guiará a través del proceso de inicialización de un repositorio Git, adición de archivos, y subida de estos archivos a un repositorio en GitHub.

## Paso 1: Instalación de Git

Antes de comenzar, asegúrate de que tienes Git instalado en tu sistema. Puedes verificar si Git está instalado ejecutando el siguiente comando en la terminal:

```bash git --version```

## Paso 2: Iniciar un Repositorio Git

Para comenzar a usar Git en un proyecto, primero necesitas inicializar un repositorio en tu directorio de trabajo. Navega al directorio del proyecto y ejecuta:

```git init```
Este comando crea un nuevo repositorio Git vacío en el directorio actual.

## Paso 3: Configurar Git (Opcional)

Configura tu nombre y correo electrónico, que se asociarán con tus commits. Ejecuta los siguientes comandos, reemplazando con tu información:

git config --global user.name "Tu Nombre"
git config --global user.email "tu.email@example.com"

## Paso 4: Agregar Archivos al Repositorio

Para agregar archivos al repositorio, primero debes decirle a Git qué archivos deseas seguir. Usa el comando **git add** para agregar archivos específicos o todos los archivos en el directorio actual:

```git add nombre-del-archivo.txt```

O para agregar todos los archivos:

```git add .```

## Paso 5: Realizar un Commit

Un commit en Git es una instantánea del estado de tu proyecto en un momento dado. Después de agregar archivos, realiza un commit para guardar los cambios en el historial del repositorio:

```git commit -m "Mensaje de commit que describe los cambios"```

## Paso 6: Crear un Repositorio en GitHub
- Inicia sesión en tu cuenta de GitHub.
- Haz clic en el botón "New repository".
- Rellena la información del repositorio y haz clic en "Create repository".

## Paso 7: Conectar el Repositorio Local con GitHub
Para conectar tu repositorio local con el repositorio en GitHub, agrega la URL del repositorio remoto. Usa el comando git remote add seguido de la URL del repositorio en GitHub:

```git remote add origin https://github.com/tu-usuario/nombre-del-repositorio.git```

## Paso 8: Subir Archivos a GitHub
Finalmente, empuja (push) tus commits locales al repositorio remoto en GitHub:

```git push -u origin master```
Para ramas distintas a master, usa el nombre de la rama en lugar de master.

#### Ejemplo práctico:

```git push -u origin master```

### Recursos Adicionales
- Guía oficial de Git
- Documentación de GitHub
- Tutorial de Git en GitHub

#### Conclusión
En este tutorial, hemos cubierto los pasos básicos para inicializar un repositorio Git, agregar archivos, y subirlos a GitHub. Estas habilidades son fundamentales para trabajar con control de versiones y colaborar en proyectos de software. Te animo a que practiques estos comandos y experimentes con diferentes configuraciones y opciones. Familiarizarte con Git y GitHub te ayudará a gestionar tus proyectos de manera más eficiente y a colaborar de forma efectiva con otros desarrolladores.