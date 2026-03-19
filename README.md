# Bateria de preguntes sobre Git i GitHub

En aquest document es recullen les respostes detallades sobre el funcionament, seguretat i gestió col·laborativa utilitzant Git i GitHub.

---

## 1. Reconeix la utilitat de les aplicacions d’ofimàtica web

### Explica per què GitHub es pot considerar una aplicació web de treball col·laboratiu.
Porque permite que muchas personas trabajen en el mismo código a la vez. Es como un **Google Docs, pero para programadores**: todos pueden aportar sin pisarse el trabajo de los demás.

### Quins avantatges té utilitzar GitHub en lloc de guardar els fitxers d’un projecte només en un ordinador local?
Aporta muchos beneficios tanto en la **portabilidad como en la seguridad** ya que si nuestro ordenador se rompe o lo perdemos nuestro código estará a salvo en la nube y podemos acceder a él desde cualquier parte del mundo.

### Com pot ajudar GitHub a gestionar versions d’un projecte web o d’una aplicació?
> **GitHub es como una máquina del tiempo:** por ejemplo si hoy borro algo por error y el código deja de funcionar, puedo volver exactamente a la versión de ayer o de hace una semana con un clic y esto se logra gracias a los **commits** que nos permiten comparar visualmente lo que hemos cambiado, también podemos trabajar en **ramas diferentes** y experimentar sin romper la rama principal “main”.

### En quins tipus de projectes és especialment útil utilitzar Git i GitHub?
Yo diría que Git y GitHub que podemos utilizar en cualquier tipo de proyecto pero sí que es verdad que en aquellos proyectos en los que hay más de una persona o proyectos que van a durar mucho tiempo y necesitan organización es aquí donde realmente brillan, ya que actúan como un **seguro de vida** que te permite viajar al pasado si algo falla y mantener un historial claro de cómo ha evolucionado el proyecto paso a paso.

### Quines diferències hi ha entre un sistema de control de versions com Git i un sistema tradicional d’emmagatzematge de fitxers?
Un sistema de almacenamiento tradicional como Google Drive o Dropbox, que se limita a guardar la última versión de un archivo machacando la anterior, Git y GitHub funcionan con **inteligencia y memoria**. Mientras que en un sistema normal si dos personas editan lo mismo se crean conflictos y archivos duplicados, Git permite que todo un equipo trabaje a la vez fusionando los cambios de forma ordenada. Además, en lugar de guardar copias pesadas de todo el proyecto, Git solo registra los **deltas** o cambios específicos línea por línea.

---

## 2. Classifica segons la funcionalitat i prestacions específiques

### Explica quina és la diferència entre Git i GitHub.
Podriamos decir que **Git es la herramienta o el motor** que instalamos en el pc para guardar cambios mientras que **GitHub es la estacion de internet** donde nosotros subimos los cambios donde podemos compartirlo con los demás.

### Quines funcionalitats ofereix GitHub a més del control de versions del codi?
Aparte de guardar código, GitHub ofrece foros de discusión, herramientas para organizar tareas, alojamiento de webs y hasta un portafolio para buscar trabajo.

### Funcionalitats segons el seu ús:
* **Repositoris:** Es la carpeta de nuestro proyecto en la nube.
* **Issues:** Es una lista de tareas o errores por arreglar. Como un alerta que nos avisa que falta agregar código o que se ha roto y esto nos permite saber exactamente qué parte ha provocado el problema sin perdernos en el código.
* **Pull requests:** Es una solicitud para fusionar cambios de código de una rama a otra dentro de un repositorio.
* **GitHub Pages:** Es un servicio para publicar páginas web directamente desde un repositorio.

### Quina funció tenen les branques (branches) en Git?
Sirven para trabajar en distintas versiones del proyecto de forma paralela sin afectar el código principal.

### Per a què serveixen les pull requests en un projecte col·laboratiu?
Nos ayudan a fusionar todos los cambios que hemos realizado de una rama a otra que normalmente es hacia *main* ademas nos permite revisar, discutir y fusionar cambios de manera segura en proyectos colaborativos.

---

## 3. Gestiona els comptes d’usuari

### Què és un compte d’usuari a GitHub?
Es un perfil personal que nos permite identificarnos y autenticarnos en la plataforma para poder trabajar con repositorios.

### Diferència entre un repositori públic i un privat
La diferencia que tienen es que un repositorio **público** puede verlo cualquier persona y se usa para proyectos abiertos, mientras que un repositorio **privado** solo lo pueden ver los usuarios que yo autorice, ideal para proyectos personales o confidenciales.

### Com es pot afegir un col·laborador?
Primero debemos entrar en el repositorio e ir a la sección de **Settings**; después seleccionamos **Manage access** (o *Collaborators*) y hacemos clic en **Invite a collaborator**. Escribimos el nombre de usuario o el correo y le enviamos la invitación.

### Quins rols o permisos pot tenir un usuari?
* **Propietario/Administrador:** Control total y gestión de configuraciones.
* **Escritura:** Pueden subir cambios y crear pull requests.
* **Lectura:** Solo pueden ver y clonar el repositorio.
* **Otros:** Roles como *triage* (gestión de issues) y *maintain* (administración de configuraciones).

### Per què és important gestionar correctament els permisos?
Garantiza que cada persona solo pueda hacer lo que le corresponde, evitando errores o modificaciones no deseadas. Ayuda a proteger la información confidencial y facilita la colaboración organizada.

---

## 4. Aplica criteris de seguretat en l’accés dels usuaris

### Riscos de compartir un repositori amb massa permisos
Cualquier persona podría modificar o borrar código importante, lo que provocaría errores o pérdida de información. Aumenta el riesgo de filtraciones de datos sensibles y genera conflictos si varias personas cambian lo mismo al mismo tiempo.

### Per què utilitzar autenticació segura (Tokens o SSH)?
Garantiza que solo los usuarios autorizados puedan acceder. Los tokens y las claves SSH son más difíciles de comprometer que una contraseña normal y permiten una conexión automática y segura entre tu ordenador y GitHub.

### Què passaria si es publiquen contrasenyes o claus privades?
Cualquier persona podría usarlas para acceder a cuentas, robar información o modificar el proyecto. Pone en riesgo la seguridad del código y puede causar problemas legales o afectar la reputación del equipo.

### Bones pràctiques de seguretat
1. **Usar autenticación segura:** Tokens o claves SSH.
2. **No subir información sensible:** Nunca incluir contraseñas o datos confidenciales.
3. **Gestionar permisos:** Dar a cada colaborador solo lo necesario.
4. **Mantener el repositorio actualizado:** Actualizar dependencias para evitar vulnerabilidades.
5. **Revisar pull requests:** Analizar cambios antes de fusionar.
6. **Usar ramas para desarrollo:** No trabajar directamente sobre la versión estable.

### Per què controlar qui fa push directament a la branca principal (main)?
Porque esta rama contiene la versión estable. Al restringir el acceso, se asegura que los cambios pasen primero por revisiones, manteniendo la estabilidad y seguridad del proyecto.

---

## 5. Utilitza les aplicacions de forma cooperativa

### Com poden treballar diverses persones al mateix projecte?
Creando primero una copia del repositorio. Cada uno trabaja en su propia rama, hace cambios y los guarda con commits. Luego abren un **pull request** para que el equipo revise y apruebe los cambios antes de unirlos a la rama principal.

### Per què és útil treballar amb branques?
Nos permite hacer cambios de forma segura y organizada. Cada desarrollador puede probar funcionalidades o corregir errores sin afectar la versión estable en *main*. Ayuda a proteger el proyecto y a colaborar de manera ordenada.

---

## 6. Elabora documentació relativa a l’ús i la gestió

### Per què és important el fitxer README.md?
Sirve como **guía principal**. Explica de qué trata el proyecto, cómo instalarlo y cómo usarlo. Mejora la organización, la presentación y ayuda a que sea más fácil de mantener y compartir.

### Avantatges d’utilitzar Markdown
Es fácil de aprender, permite dar formato (títulos, listas, imágenes) y se ve bien directamente en los repositorios. Sigue siendo legible incluso en editores de texto plano.

### Com ajuda la documentació a altres desenvolupadors?
Les explica cómo funciona el proyecto, cómo instalarlo y cómo contribuir correctamente. Permite que otros programadores entiendan el proyecto rápidamente y colaboren de forma más eficiente sin tener que adivinar la estructura.