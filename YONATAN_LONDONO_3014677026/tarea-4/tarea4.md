# Inicialización, Agregado y subida de Archivos a GitHub con Git



Es muy importante tener un control de versiones de archivos en un repositorio ya que permite a los desarrolladores rastrear los cambios en sus proyectos de software. Con Git los cambios en los archivos se registran en un historial, lo que facilita la colaboración entre equipos y la gestión de proyectos.
Tambien permite saber quien ha hecho un cambio o ha agreagado una nueva funcionalidad en un determinado momento del tiempo.

## Paso a paso para inicializar un repositorio Git en tu máquina:

1. Crear carpeta en el computador y arrastrar al WorkSpace de VS code.
 
2. En la barra de tareas abrir nueva terminal.
[![terminal.png](https://i.postimg.cc/HnmwbyhH/terminal.png)](https://postimg.cc/k6jRmBCh)

3. escribir **git init** esto inicializa carpeta para repositorio. 
[![git-init.png](https://i.postimg.cc/d3nydSCm/git-init.png)](https://postimg.cc/QK9CZm0H)

4. **git add nombre del archivo**  Es para mover los cambios del directorio al area de ensayo solo de ese archivo o **git add .** Es para mover TODOS los cambios del directorio al area de ensayo.
[![git-add.png](https://i.postimg.cc/FRNzZVNP/git-add.png)](https://postimg.cc/R3pvCf3f)

5. **git status** Se utiliza para verificr el estado de los cambios.
[![git-status.png](https://i.postimg.cc/0Nqyk0M8/git-status.png)](https://postimg.cc/cvXSTYBj)

6. **git commit -m "comentario"** Es para confirmar los cambios a nivel local.
[![git-commit-m.png](https://i.postimg.cc/PrgtyQMm/git-commit-m.png)](https://postimg.cc/tYzQCPwT)

7. En gitHub creamos un nuevo repositorio con nombre, especificando si va a ser púbico o privado y creamos el repo sin ReadMe.
[![repositorio.png](https://i.postimg.cc/TY6xW329/repositorio.png)](https://postimg.cc/WtXCBjkF)

8. Si e la extensión de la terminal nos aparece como rama principal **MASTER**, debemos cambirlo a **MAIN** como se describe en el próximo paso.
[![master.png](https://i.postimg.cc/HWQDH107/master.png)](https://postimg.cc/Lh60B7bH)

9. **git branch -M main**
[![main.png](https://i.postimg.cc/DwpR5vhR/main.png)](https://postimg.cc/JsJTzWGQ)

10. **git remote add origin URL de tu repositorio remoto** Es para vincular local con remoto.
[![git-remote.png](https://i.postimg.cc/26rdZWJY/git-remote.png)](https://postimg.cc/FfCJtYNC)

11. **git push -u origin nombre de la rama** Es para enviar los cambios del local a remoto, o sea de Git a GitHub.
[![git-push.png](https://i.postimg.cc/KYyB6LmT/git-push.png)](https://postimg.cc/fVBVXVtW)

## CONCLUSION:
A continuación vamos a listar los comandos que acabamos de explicar:
* *git init*
* *git add nombre del archivo*
* *git add .*
* *git status*
* *git commit -m "comentario"*
* *git branch -M main*
* *git remote add origin URL de tu repositorio remoto*
* *git push -u origin nombre de la rama*

Es muy importante la práctica de estos comandos ya que el uso de Git y GitHub es una herramienta indispensable para desarrolladores.