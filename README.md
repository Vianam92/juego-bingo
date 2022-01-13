# El bingo

## Vamos a echar una partidita de bingo casero!!!

Este juego es un ejercicio extra y lo realice una vez concluido el módulo 2 aplicando los conocimientos obtenidos.

## Funcionalidad

- Al arrancar la página:
  - La parte superior "Bolitas" debe aparecer vacía.
  - En la parte inferior "Mi cartón" deben aparecer 20 números generados aleatoriamente entre el 1 y el 100.
- A continuación:
  - Cada vez que pulsemos el botón "Saca una bolita" debemos generar y mostrar un nuevo número aleatorio del 1 al 100 en la parte "Bolitas".
  - Y destacar con un fondo verde el número de nuestro cartón que coincida con la bolita sacada. Si no coincide pues nada.
  - Como pulsar un montón de veces el botón de "Saca una bolita" es muy muy cansado, vamos a hacer que si se pulsa una vez el botón de play ► se generará una bolita nueva cada un segundo. Por supuesto también se tendrán que mostrar con fondo las bolitas de mi cartón que vayan saliendo.
- Cuando hayan aparecido todas las bolitas de los números de nuestro cartón debemos mostrar el mensaje "Han cantado bingo!!!" y ocultar los botones de "Saca una bolita" y Play.

##### Instalación de Gulp para entrar al código 

###### Guía de inicio rápido

> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/) para trabajar con este Starter Kit:

*Pasos a seguir cada vez que queremos arrancar un proyecto desde cero:*

1. **Clona esta repositorio desde GitHub**.
1. **Abre una terminal** en la carpeta raíz del repositorio.
1. **Instala las dependencias** locales ejecutando en la terminal el comando:

```bash
npm install
```

**Pasos para arrancar el proyecto:**

Una vez hemos instalado las dependencias, vamos a arrancar el proyecto. **El proyecto hay que arrancarlo cada vez desees verlo desde tu computador** Para ello ejecuta el comando:

```bash
npm start
```

Este comando:

- **Abre una ventana de tu navegador y muestra la página web**, al igual que hace el plugin de VS Code Live Server (Go live).
- También **observa** todos los ficheros que hay dentro de la carpeta `src/`, para que cada vez que modifiques un fichero **refresca tu página en el navegador**.
- También **procesa los ficheros** HTML, SASS / CSS y JS y los **genera y guarda en la carpeta `public/`**. Por ejemplo:
   - Convierte los ficheros SASS en CSS.
   - Combina los diferentes ficheros de HTML y los agrupa en uno o varios ficheros HTML.

Si deseas editar mi evaluación después de ejecutar `npm start` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta `src/` y programar cómodamente.

**Para generar mi página para producción ejecute el comando:**

```bash
npm run docs
```
Y a continuación:

1. Subi a mi repositorio la carpeta `docs/` que se te acaba de generar.
1. Entre en la pestaña `settings` de mi repositorio b.
1. Y en el apartado de GitHub Pages activa la opción **master branch /docs folder**.
1. Y ya está

Tal vez quieras cojer el código de esta evaluación entonces estas en libertad de hacer los mismos pasos que hice yo para tu repo. Recuerda que deberias copiarlo (descargarlo como un zip) y no clonarlo si es lo que deseas. 

Además, los comandos:

```bash
npm run push-docs
```
o

```bash
npm run deploy
```

son un atajo que nos genera la versión de producción y hace push de la carpeta `docs/` del tirón. Te recomendamos ver el fichero `package.json` para aprender cómo funciona.

