# Ejercicio 9: Encabezado, párrafos, listas anidadas, cursiva, negrita, subrayado

## Objetivo
Utilizando la estructura base del ejercicio 8 vamos a agregar nuevas carácterísticas.
Utilizar encabezado, párrafos, listas anidadas, cursiva, negrita, subrayado.

## Instrucciones

1. En la carpeta `docs`, es la raíz del proyecto.
2. Dentro de `docs`, verificar la existencia de la subcarpeta `images`
3. Dentro de `docs`, verificar la existencia de la subcarpeta `js`
4. Dentro de `docs`, verificar la existencia de la subcarpeta `css`
5. Verificar la existencia de un archivo `docs/index.html`.
6. Crear un archivo `docs/servicios.html`.
6. En el archivo `docs/servicios.html`, agregar:
   - Un encabezado de nivel 1 con el texto "Documentación del Proyecto"
  - Un párrafo introductorio que describa brevemente el propósito del proyecto, utilizando **texto en negrita**, *texto en cursiva* y <ins>texto subrayado</ins>.
   - Un encabezado de nivel 2 con el texto "Secciones Principales"
   - Una lista ordenada con los siguientes elementos:
     1. **Introducción** - Información general del proyecto
     2. *Instalación* - Pasos para configurar el proyecto
     3. Uso - Instrucciones de uso con sublista:
        - Comandos básicos
        - Opciones avanzadas
        - Ejemplos prácticos
     4. <ins>Contribución</ins>- Guías para colaboradores
     5. Licencia
   - Un encabezado de nivel 3 con el texto "Información Adicional"
   - Una lista desordenada con los siguientes elementos y sublistas anidadas:
      - **Requisitos previos**
        - Node.js versión 16 o superior
        - npm o yarn instalado
      - *Dependencias*
        - Dependencias de producción
        - Dependencias de desarrollo
      - <ins>Contacto</ins>
        - Email del equipo
        - Enlaces a redes sociales
## Requisitos
- Utilizar solo HTML y comandos de terminal.
- No utilizar frameworks ni librerías.
- Asegurarse de que la estructura de carpetas y el contenido del archivo HTML sean correctos.  
- Estructura HTML básica válida (`DOCTYPE, html, head, body`).
- Presencia de etiqueta `title`.
- Implementar correctamente los elementos de formato de texto:
  - **Negrita** usando `strong` o `b`
  - *Cursiva* usando `em` o `i`
  - <u>Subrayado</u> usando `<u>`
- Crear listas anidadas correctamente estructuradas con sublistas
- Utilizar diferentes niveles de encabezados (h1, h2, h3)

## Estructura final esperada

```
├── docs/
│   ├── images/
│   └── js/
│   └── css/
│   └── index.html
│   └── servicios.html
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
npm test tests/ejercicio/9-fundamentos-texto-2.test.js
```
Si pasa todos los test, haz commit de tus cambios y súbelos a tu repositorio de GitHub.   

¡Buena suerte y diviértete programando!