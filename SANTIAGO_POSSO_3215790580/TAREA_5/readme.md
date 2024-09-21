# Tutorial: Inicialización, Agregado y Subida de Archivos a GitHub con Git

## Introducción

El control de versiones es una parte crucial del desarrollo de software moderno. Git, junto con plataformas como GitHub, proporciona una manera poderosa y eficiente de versionar y colaborar en proyectos. Este tutorial te guiará a través de los pasos básicos para iniciar un repositorio Git, agregar archivos y subirlos a GitHub.

## Paso 1: Inicializar un Repositorio Git

Para comenzar a versionar tus archivos con Git, primero debes inicializar un repositorio en tu máquina local.

1. Abre tu terminal o línea de comandos.
2. Navega al directorio de tu proyecto usando el comando `cd`:
   ```
   cd ruta/a/tu/proyecto
   ```
3. Inicializa el repositorio Git con el siguiente comando:
   ```
   git init
   ```

Este comando creará un subdirectorio oculto `.git` que contiene toda la información necesaria para el control de versiones de tu proyecto.

## Paso 2: Agregar Archivos al Área de Preparación

Una vez que has inicializado tu repositorio, puedes comenzar a agregar archivos al área de preparación (staging area).

1. Para agregar un archivo específico:
   ```
   git add nombre_del_archivo.extension
   ```
2. Para agregar todos los archivos en el directorio actual:
   ```
   git add .
   ```

**Ejemplo práctico:**
Supongamos que tienes un archivo `index.html` en tu proyecto:
```
git add index.html
```

## Paso 3: Realizar un Commit

Después de agregar tus archivos al área de preparación, es hora de hacer un commit. Un commit es una instantánea de tus cambios en un punto específico del tiempo.

```
git commit -m "Tu mensaje de commit aquí"
```

**Ejemplo práctico:**
```
git commit -m "Agregado archivo index.html inicial"
```

## Paso 4: Vincular con un Repositorio Remoto en GitHub

Para colaborar y respaldar tu trabajo, es una buena práctica vincular tu repositorio local con uno remoto en GitHub.

1. Crea un nuevo repositorio en GitHub.
2. Copia la URL del repositorio.
3. En tu terminal, ejecuta el siguiente comando:
   ```
   git remote add origin URL_del_repositorio_en_GitHub
   ```

**Ejemplo práctico:**
```
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
```

## Paso 5: Subir Cambios a GitHub

Finalmente, puedes subir tus cambios locales al repositorio remoto en GitHub.

```
git push -u origin master
```

Este comando sube tus commits al repositorio remoto en la rama `master`. El flag `-u` establece la rama upstream, lo que significa que en futuros pushes solo necesitarás escribir `git push`.

## Conclusión

¡Felicidades! Has aprendido los pasos básicos para inicializar un repositorio Git, agregar archivos, hacer commits y subir tus cambios a GitHub. Estos comandos forman la base del flujo de trabajo con Git y GitHub. Practica estos pasos regularmente para familiarizarte con el proceso y explora más características avanzadas de Git para mejorar tu flujo de trabajo de desarrollo.

## Recursos Adicionales

- [Documentación oficial de Git](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Interactive Git Branching Tutorial](https://learngitbranching.js.org/)

Recuerda, la práctica constante es clave para dominar Git y GitHub. ¡Buena suerte en tu viaje de aprendizaje!