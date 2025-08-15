# Ejercicio 8: Crear carpetas, encabezado, párrafos, listas

## Objetivo
Crear la estructura de carpetas base, necesarias para el proyecto.
Utilizar encabezado, párrafos y listas.

## Instrucciones

1. Crear en la carpeta principal (root) del espacio de trabajo, la carpeta `docs` en la raíz del proyecto.
2. Dentro de `docs`, crear la subcarpeta `images`
3. Dentro de `docs`, crear la subcarpeta `js`
4. Dentro de `docs`, crear la subcarpeta `css`
5. Crear un archivo `docs/index.html`.
6. En el archivo `docs/index.html`, agregar:
   - Un encabezado de nivel 1 con el texto "Documentación del Proyecto"
   - Un párrafo introductorio que describa brevemente el propósito del proyecto.
   - Una lista ordenada con los siguientes elementos:
     1. Introducción
     2. Instalación
     3. Uso
     4. Contribución
     5. Licencia
    - Una lista desordenada con los siguientes elementos:
      - Requisitos previos
      - Dependencias
      - Contacto
## Requisitos
- Utilizar solo HTML y comandos de terminal.
- No utilizar frameworks ni librerías.
- Asegurarse de que la estructura de carpetas y el contenido del archivo HTML sean correctos.  
- Estructura HTML básica válida (`DOCTYPE, html, head, body`).
- Presencia de etiqueta `title`.

## Estructura final esperada

```
├── docs/
│   ├── images/
│   └── js/
│   └── css/
│   └── index.html    

```

## Verificación

Puedes verificar que las carpetas se crearon correctamente ejecutando:

```bash
tree docs/
```

O usando:

```bash
ls -la docs/
```

Una vez que hayas completado el ejercicio ejecuta: 
``` npm
npm test tests/ejercicio/8-fundamentos-texto.test.js
```
Si pasa todos los test, haz commit de tus cambios y súbelos a tu repositorio de GitHub.   

¡Buena suerte y diviértete programando!