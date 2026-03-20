# Mastermind: System Override

> Proyecto colaborativo de desarrollo web con Git y GitHub  
> Asignatura: Lenguajes de Marcas (LM) · ASIX

---

## Descripción del Proyecto

**Mastermind: System Override** es un juego de lógica con estética de terminal hacker. El objetivo es adivinar un código secreto de 4 dígitos en un máximo de 5 intentos, recibiendo pistas en cada ronda.

### Símbolos de pista
| Símbolo | Significado |
|---------|-------------|
| `1` | Número correcto en la posición correcta |
| `Ø` | Número correcto pero en posición incorrecta |
| `×` | El número no existe en el código secreto |

---

## Reparto de Tareas

### Estudiante A — Carlos (`feature-ui-logic`):
Carlos se encargó de toda la interfaz visual y la experiencia del usuario:
- Creó el sistema de terminal para mostrar los mensajes y la lógica de los selectores (inputs del 0 al 9).
- Gestionó el control de intentos (el contador de vidas) y los mensajes de victoria/derrota.
- Añadió una función de "limpieza" (`resetearInterfaz`) para que los números vuelvan a 0 automáticamente después de cada fallo.

### Estudiante B — Josep (`feature-game-engine`):
Josep se encargó del "cerebro" del juego:
- Desarrolló el algoritmo de validación en dos pasadas: la primera para buscar números exactos (`1`) y la segunda para los mal colocados (`Ø`).
- Creó la función de generación de código aleatorio y la lógica que decide si el estado actual es de victoria o derrota.

---

## Resolución de Conflictos (Integración):

Al unir las ramas con merge, nos encontramos con algunos problemas que tuvimos que resolver juntos:

1. **Sincronización de Funciones:** Al principio, la interfaz intentaba llamar a una función que no existía. Tuvimos que conectar el botón de enviar para que pasara los datos correctamente a la función `validarIntento`.
2. **El Problema de las Pistas:** El motor calculaba las pistas pero la terminal no las mostraba. Modificamos el evento del botón para capturar el resultado del algoritmo y mostrarlo con `logTerminal`.
3. **Unificación de Nombres:** Ajustamos los nombres de las variables para que ambas partes del código hablaran el mismo idioma y no dieran errores de ejecución.
4. **Solucion de bugs:** Al arreglar las variables salieron a la luz unos bugs en la segunda funcion que hacia que las pistas estuvieran bien pero no a la vez, ya que un par de errores en el codigo hacia que a: no se pusieran en una posicion correcta y b: el 0 a veces lo pillaba y otras no ya que al poner el valor null contemplaba el 0 a veces como correcto y otras como incorrecto, al cambiar esto y poner -1 que es un valor que esta fuera de los valores que usamos en el juego este error desaparece.
---

## 🚀 Resultado Final

Logramos un código limpio donde la UI (Carlos) y el Motor (Josep) trabajan juntos en tiempo real, ofreciendo una experiencia de "hackeo" fluida y sin errores de lógica.

---

## Estructura del Proyecto

 0376-Ra4Pr2-ProyectoJosepArtisCarlosGomez
  index.html
  styles.css
  script.js
  README.md
---

# Preguntas sobre Git y GitHub

---

## 1. Utilidad de las aplicaciones de ofimática web

### ¿Por qué se puede considerar GitHub una aplicación web de trabajo colaborativo?
Porque permite que muchas personas trabajen en el mismo código a la vez. Es como un **Google Docs, pero para programadores**: todos pueden aportar sin pisarse el trabajo de los demás.

### ¿Qué ventajas tiene usar GitHub en lugar de guardar los archivos de un proyecto solo en un ordenador local?
Aporta muchos beneficios tanto en la **portabilidad como en la seguridad**, ya que si nuestro ordenador se rompe o lo perdemos, nuestro código estará a salvo en la nube y podemos acceder a él desde cualquier parte del mundo.

### ¿Cómo puede ayudar GitHub a gestionar versiones de un proyecto web o de una aplicación?
**GitHub es como una máquina del tiempo:** si hoy borramos algo por error y el código deja de funcionar, podemos volver exactamente a la versión de ayer o de hace una semana. Esto se logra gracias a los **commits**, que nos permiten comparar visualmente lo que hemos cambiado. También podemos trabajar en **ramas diferentes** y experimentar sin romper la rama principal `main`.

### ¿En qué tipos de proyectos es especialmente útil usar Git y GitHub?
Git y GitHub son útiles en cualquier tipo de proyecto, pero donde realmente brillan es en aquellos con más de una persona o que van a durar mucho tiempo. Actúan como un **seguro de vida** que permite viajar al pasado si algo falla y mantener un historial claro de cómo ha evolucionado el proyecto.

### ¿Qué diferencias hay entre un sistema de control de versiones como Git y un sistema tradicional de almacenamiento de archivos?
Un sistema tradicional como Google Drive o Dropbox solo guarda la última versión de un archivo, machacando la anterior. Git y GitHub, en cambio, funcionan con **inteligencia y memoria**: permiten que todo un equipo trabaje a la vez fusionando los cambios de forma ordenada. Además, en lugar de guardar copias pesadas de todo el proyecto, Git solo registra los **deltas** (cambios específicos línea por línea).

---

## 2. Clasificación según funcionalidad y prestaciones

### ¿Cuál es la diferencia entre Git y GitHub?
**Git es la herramienta o el motor** que instalamos en el PC para guardar cambios localmente, mientras que **GitHub es la plataforma en internet** donde subimos esos cambios y los compartimos con los demás.

### ¿Qué funcionalidades ofrece GitHub además del control de versiones del código?
Aparte de guardar código, GitHub ofrece foros de discusión, herramientas para organizar tareas, alojamiento de webs (GitHub Pages) y un portafolio profesional para buscar trabajo.

### Funcionalidades según su uso

- **Repositorios:** Es la carpeta de nuestro proyecto en la nube.
- **Issues:** Es una lista de tareas o errores por arreglar. Como una alerta que avisa que falta agregar código o que algo se ha roto, permitiendo saber exactamente qué parte ha provocado el problema.
- **Pull requests:** Es una solicitud para fusionar cambios de código de una rama a otra dentro de un repositorio.
- **GitHub Pages:** Es un servicio para publicar páginas web directamente desde un repositorio.

### ¿Qué función tienen las ramas (branches) en Git?
Sirven para trabajar en distintas versiones del proyecto de forma paralela sin afectar el código principal.

### ¿Para qué sirven las pull requests en un proyecto colaborativo?
Nos ayudan a fusionar todos los cambios realizados de una rama a otra (normalmente hacia `main`). Además, permiten revisar, discutir y fusionar cambios de manera segura en proyectos colaborativos.

---

## 3. Gestión de cuentas de usuario

### ¿Qué es una cuenta de usuario en GitHub?
Es un perfil personal que nos permite identificarnos y autenticarnos en la plataforma para poder trabajar con repositorios.

### Diferencia entre un repositorio público y uno privado
Un repositorio **público** puede verlo cualquier persona y se usa para proyectos abiertos. Un repositorio **privado** solo lo pueden ver los usuarios autorizados, ideal para proyectos personales o confidenciales.

### ¿Cómo se puede añadir un colaborador?
1. Entrar en el repositorio e ir a **Settings**.
2. Seleccionar **Manage access** (o *Collaborators*).
3. Hacer clic en **Invite a collaborator**.
4. Escribir el nombre de usuario o correo y enviar la invitación.

### ¿Qué roles o permisos puede tener un usuario?
- **Propietario/Administrador:** Control total y gestión de configuraciones.
- **Escritura:** Pueden subir cambios y crear pull requests.
- **Lectura:** Solo pueden ver y clonar el repositorio.
- **Otros:** Roles como *triage* (gestión de issues) y *maintain* (administración de configuraciones).

### ¿Por qué es importante gestionar correctamente los permisos?
Garantiza que cada persona solo pueda hacer lo que le corresponde, evitando errores o modificaciones no deseadas. Ayuda a proteger la información confidencial y facilita la colaboración organizada.

---

## 4. Criterios de seguridad en el acceso de usuarios

### Riesgos de compartir un repositorio con demasiados permisos
Cualquier persona podría modificar o borrar código importante, lo que provocaría errores o pérdida de información. Aumenta el riesgo de filtraciones de datos sensibles y genera conflictos si varias personas cambian lo mismo al mismo tiempo.

### ¿Por qué usar autenticación segura (Tokens o SSH)?
Garantiza que solo los usuarios autorizados puedan acceder. Los tokens y las claves SSH son más difíciles de comprometer que una contraseña normal y permiten una conexión automática y segura entre el ordenador y GitHub.

### ¿Qué pasaría si se publican contraseñas o claves privadas?
Cualquier persona podría usarlas para acceder a cuentas, robar información o modificar el proyecto. Pone en riesgo la seguridad del código y puede causar problemas legales o afectar la reputación del equipo.

### Buenas prácticas de seguridad
1. **Usar autenticación segura:** Tokens o claves SSH.
2. **No subir información sensible:** Nunca incluir contraseñas o datos confidenciales.
3. **Gestionar permisos:** Dar a cada colaborador solo lo necesario.
4. **Mantener el repositorio actualizado:** Actualizar dependencias para evitar vulnerabilidades.
5. **Revisar pull requests:** Analizar cambios antes de fusionar.
6. **Usar ramas para desarrollo:** No trabajar directamente sobre la versión estable.

### ¿Por qué controlar quién hace push directamente a la rama principal (main)?
Porque esta rama contiene la versión estable. Al restringir el acceso, se asegura que los cambios pasen primero por revisiones, manteniendo la estabilidad y seguridad del proyecto.

---

## 5. Uso de las aplicaciones de forma cooperativa

### ¿Cómo pueden trabajar varias personas en el mismo proyecto?
Creando primero una copia del repositorio, cada uno trabaja en su propia rama, hace cambios y los guarda con commits. Luego abren un **pull request** para que el equipo revise y apruebe los cambios antes de unirlos a la rama principal.

### ¿Por qué es útil trabajar con ramas?
Permite hacer cambios de forma segura y organizada. Cada desarrollador puede probar funcionalidades o corregir errores sin afectar la versión estable en `main`. Ayuda a proteger el proyecto y a colaborar de manera ordenada.

---

## 6. Elaboración de documentación

### ¿Por qué es importante el archivo README.md?
Sirve como **guía principal**. Explica de qué trata el proyecto, cómo instalarlo y cómo usarlo. Mejora la organización, la presentación y ayuda a que sea más fácil de mantener y compartir.

### Ventajas de usar Markdown
Es fácil de aprender, permite dar formato (títulos, listas, imágenes) y se ve bien directamente en los repositorios. Sigue siendo legible incluso en editores de texto plano.

### ¿Cómo ayuda la documentación a otros desarrolladores?
Les explica cómo funciona el proyecto, cómo instalarlo y cómo contribuir correctamente. Permite que otros programadores entiendan el proyecto rápidamente y colaboren de forma más eficiente sin tener que adivinar la estructura.

---

*Proyecto realizado por Carlos y Josep · ASIX · Lenguajes de Marcas*