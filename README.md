Necesitas tener instalado Node y git.

Clonas el repositorio con:

```
git clone https://github.com/Brunao77/bot-entrada-seleccion.git
```

Luego debes moverte a la carpeta donde fue clonado y ejecutar el siguiente comando:

```
npm install
```

Si deseas que te envie una notificacion por whatsapp deberas vincularla con Twilio en la seccion comentada del index.js
De caso contrario, al ejecutar: 

```
node index.js
```

El bot ya funcionaria y mostrara en consola si cambia con el respectivo horario.
El intervalo en el que se ejecuta el codigo es de 30 secs, se puede modificar en la linea 96.