# MIDI Básico con 9 Botones

Este proyecto consiste en un MIDI básico que consta de 9 botones, cada uno generando un sonido diferente al ser presionado. Los sonidos disponibles son POM, CLAP, TIM, PUFF, SPLASH, TOIM, PSH, TIC y TOM.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript

## Estructura del proyecto

- **index.html**: Contiene la estructura HTML de la página web y los botones.
- **styles.css**: Archivo de estilos CSS para el diseño y la apariencia de la interfaz.
- **script.js**: Archivo JavaScript que maneja la lógica de reproducción de sonidos al hacer clic en los botones.
- **audios/**: Carpeta que contiene los archivos de audio para cada sonido.

## Contribución

Si deseas contribuir a este proyecto, ¡eres bienvenido! Puedes hacer un fork del repositorio, realizar tus cambios y enviar un pull request.

## Lógica de Funcionamiento

El código proporcionado implementa la funcionalidad principal del proyecto MIDI básico con 9 botones. A continuación se detalla cómo opera esta funcionalidad:

- **Selección de Botones**: Selecciona todos los elementos HTML con la clase .tecla, que representan los botones del MIDI.
- **Evento Click**: Para cada botón seleccionado, se agrega un evento de clic. Cuando se hace clic en un botón, se obtiene el atributo data-sound que contiene el identificador del sonido asociado al botón. Luego, se localiza el elemento de audio correspondiente utilizando este identificador y se reproduce el sonido.
- **Eventos de Teclado**: Además del clic, se agregan eventos de teclado para cada botón. Cuando se presiona la tecla "Enter" o "Space", se agrega la clase activa al botón, lo que proporciona un efecto visual para indicar que el botón está presionado. Cuando se suelta la tecla "Enter" o "Space", se elimina la clase activa, restaurando el estado visual del botón.
- **Console Log**: Se imprime en la consola del navegador si se presiona "Enter" o "Space".

Esta lógica permite al usuario interactuar con los botones tanto haciendo clic en ellos como presionando las teclas "Enter" o "Space" en el teclado. Cada interacción produce un sonido asociado al botón correspondiente.

