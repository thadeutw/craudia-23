### Proyecto Íris
Íris es un bot en inglés, español y portugués creado y actualizado por Lucas R. - KillovSky para el grupo "Legião Z", tiene más de 200 comandos y actualizaciones frecuentes con correcciones y novedades.

### Otros idiomas
if you want a English tutorial, open this [English Tutorial](https://github.com/KillovSky/iris/blob/main/.readme/en/README.md), para um português use o [Tutorial PT-BR](https://github.com/KillovSky/iris/blob/main/README.md).
Para dejar su bot completamente en otro idioma, abra la configuración de [Idioma aquí](https://github.com/KillovSky/iris/blob/main/lib/config/config.json#2) y cambie el "pt" por "en" que es inglés o "es" para español, no hay otros idiomas que estos.

### Nota personal 
Este software funciona bajo la licencia [MIT](https://eligelicencia.github.io/eligeUnaLicencia/licenses/mit/), teniendo prohibido retirar créditos, y recuerda, paso MUCHO tiempo ayudando a todos los que tienen dudas y mejorando el BOT, pero sin ganar nada en esto, por favor no quites los créditos.
Si ves a alguien robando o que ha robado, muéstrales la verdad, diles que es plagio, es el único deseo que tengo.

### Errores
Si observa errores, lea el [Discussions](https://github.com/KillovSky/iris/discussions), si no resuelve, háblame por los medios que se encuentran en la parte inferior de la página o infórmalo en [Issues](https://github.com/KillovSky/iris/issues), y por supuesto, asegúrese de haber instalado Chrome y leer TODO lo escrito abajo.
Descarga Chrome en Windows por [aqui](https://www.google.com/chrome), en linux use los siguientes comandos. 

```bash
> wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
> sudo apt install ./google-chrome-stable_current_amd64.deb
```

### Funciones (+200)
| Función | Contiene|
| ------------- | ------------- |
| Ejecute Wa-Automate/Functions dentro de WhatsApp |✅|
| Administrar Grupos |✅|
| Apuestas/Casino/Otros juegos |✅|
| Anti Porno - Imagen +18/Enlaces de Chat |✅|
| Ataques SMS/CALL/EMAIL |✅|
| Bienvenido/Adiós/Anti-Fake/Blacklist |✅|
| Bloquear/Desbloquear/Rastrear personas |✅|
| Buscar Anime/Letra de Música/Twitter/Instagram |✅|
| Mandar mensagens a otros grupos |✅|
| Conversa por texto/voz Sim-Simi/Local (ilimitado) |✅|
| Eliminar mensajes del BOT |✅|
| Descargas (Redes-Sociales y YouTube) |✅|
| Hablar 51 idiomas/Tradutor |✅|
| Generación de Textos/Diário |✅|
| Google/Google Play/Pinterest |✅|
| Información de Grupo/Perfil |✅|
| Marcar todo/Prohibir todo |✅|
| Memes/Hacer Memes |✅|
| Nasa, Brainly, Wikipédia |✅|
| Pausar/Salir de Tudo/Transmitir/Eliminar Tudo |✅|
| Pesquisa Fotos/Datos/Covid |✅|
| Printar Pantalla/Sitios WEB |✅||
| Sticker GIF/Sin-Fondo/URLS/Palabras |✅|
| Uploads de Fotos |✅|
| Use CMD/Terminal en WhatsApp |✅|
| XP/Ranking/Level/Votaciónes |✅|
| Outros |✅|

### Requisitos
- Dos números en WhatsApp, uno para propietario y otro para BOT.
- [NodeJS](https://nodejs.org) - Recomiendo la LTS.
- [Git](https://git-scm.com) - Para las Unix-Tools - Cuidado.
- [FFmpeg](https://ffmpeg.org) - Para conversiones.
- [Libwebp](https://developers.google.com/speed/webp/download) - Ayuda en FFmpeg y otras cosas.
- Para um tutorial de instalação do FFmpeg no Windows 7/8, veja [WikiHow](https://pt.wikihow.com/Instalar-o-FFmpeg-no-Windows), en el caso de Windows 10 vea al [SoundArtifacts](https://soundartifacts.com/pt/how-to/186-how-to-install-ffmpeg-on-windows-10-amp-add-ffmpeg-to-windows-path.html).
- Para instalar LibWebP sigue los mismos pasos, pero cambiando el nombre de la carpeta a LibWebP en lugar de FFmpeg.

Para la instalación de todo en Linux, puede usar el siguiente comando:

```bash
> sudo apt install nodejs git ffmpeg libwebp -y
```

Si obtiene errores con la versión del node en su repositorio de Linux, use el [Node Source](https://github.com/nodesource/distributions), recuerde, LTS (14).

### Instalación 
Necesita tener este repositorio, es simple, ejecute los comandos abajo, en caso de errores, intente como sudo/administrador o vea los [Tutoriales](https://github.com/KillovSky/iris/discussions/28).

```bash
> git clone https://github.com/KillovSky/iris.git
> cd iris
> npm i
```

### Cambios OBLIGATORIOS
Edite las API que se encuentran en: 

- [Lenguaje](https://github.com/KillovSky/iris/blob/main/lib/config/Bot/config.json#2)
- [Número](https://github.com/KillovSky/iris/blob/main/lib/config/Bot/config.json#3)
- [DDI](https://github.com/KillovSky/iris/blob/main/lib/config/Bot/config.json#4)
- [Prefix](https://github.com/KillovSky/iris/blob/main/lib/config/Bot/config.json#5)
- [API 1 - API-Flash](https://github.com/KillovSky/iris/blob/main/lib/config/Bot/config.json#6)
- [API 2 - RemoveBG](https://github.com/KillovSky/iris/blob/main/lib/config/Bot/config.json#7)
- [API 3 - WallHaven](https://github.com/KillovSky/iris/blob/main/lib/config/Bot/config.json#8)
- [API 4 - Deep-AI](https://github.com/KillovSky/iris/blob/main/lib/config/Bot/config.json#9)
- [Limite de Grupos](https://github.com/KillovSky/iris/blob/main/lib/config/Bot/config.json#10)
- [Requisito de miembros](https://github.com/KillovSky/iris/blob/main/lib/config/Bot/config.json#11)
- [Sticker-Autor](https://github.com/KillovSky/iris/blob/main/lib/config/Bot/config.json#12)
- [Sticker-Pack](https://github.com/KillovSky/iris/blob/main/lib/config/Bot/config.json#13)
- [User-Agent](https://github.com/KillovSky/iris/blob/main/lib/config/Bot/config.json#14)
- [Playing Time](https://github.com/KillovSky/iris/blob/main/lib/config/Bot/config.json#15)
- [Anti-Flood](https://github.com/KillovSky/iris/blob/main/lib/config/Bot/config.json#16)
- [Max-Size](https://github.com/KillovSky/iris/blob/main/lib/config/Bot/config.json#17)
- [Win-Time](https://github.com/KillovSky/iris/blob/main/lib/config/Bot/config.json#18)
- Elas são referentes aos sites [RemoveBG](https://www.remove.bg/pt-br), [API-Flash](https://apiflash.com), [WallHaven](https://wallhaven.cc/settings/account) & [Deep-AI](https://deepai.org).
- La DDI y Idioma solo son necesarios si es de fuera de Brasil, los idiomas disponibles son "en" de inglés, "pt" de portugués y "es" de español y afectan todos los diálogos y akinator.
- Puede ingresar dos o más números de propietario, si no quiere esto, simplemente deje el segundo como está, el tiempo de juego debe ingresarse en MINUTOS, limitará el tiempo para cada juego, Anti-Flood debe ser en SEGUNDOS, limita los comandos, el User-Agent es opcional, Max-Size es para descargas, pona entre 1 a 64 (Propongo 16) y Win-Time es el tiempo de gano de XP para cada mensaje.

### Comenzar
Después de editar los archivos necesarios, ejecute el siguiente comando y espere para comenzar, luego escane el código QR.

```bash
> npm start
```

### Ver todos los comandos
Escriba en su chat el mensaje, si editó su prefijo, cambie la '/' al carácter que usará.

```bash
> /menu
```

### Crea tus comandos
Hay una base simple para sus creaciones por [aqui](https://github.com/KillovSky/iris/blob/main/config.js#L4026), sin Prefix [here](https://github.com/KillovSky/iris/blob/main/config.js#L304), solo tienes que quitar el "/\*" e la "\*/" para usarlo, si necesita otros tipos, puede ver sobre ellos para [aqui](https://docs.openwa.dev/classes/api_client.client.html), si tienes dificultades llámame por [aqui](https://bit.ly/3owVJoB) o [aqui](https://wa.me/+5518998044132).

### Alertas en WhatsApp
Para recibir también mensajes de error de Iris a través de WhatsApp, elimine el "//" de la línea [Catch](https://github.com/KillovSky/iris/blob/main/config.js#L4038).

### Agradecimientos:
- [Open-WA](https://github.com/open-wa)
- [ArugaZ](https://github.com/ArugaZ)
- [MhankBarBar](https://github.com/MhankBarBar)
- [SlavyanDesu](https://github.com/SlavyanDesu)
- [Contribuidores](https://github.com/KillovSky/iris/graphs/contributors)
- Les agradezco calurosamente a todos!

### Donar y Apoyo
- [Doações] - Este proyecto se mantiene sólo por mí de forma gratuita y sin cobrar nada, si es posible, dona algo ❤️ - [Doar](https://picpay.me/userlucas123)
- [PIX] - fc270199-2d55-4d91-be5c-bfbd431cfad4
- [Grupo Oficial](https://bit.ly/3owVJoB)
- [Dono] - Si necesitas hablar conmigo (siempre respondo lo más rápido posible) - [Falar](https://wa.me/+5518998044132)