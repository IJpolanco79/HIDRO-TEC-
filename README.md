# HIDRO TEC · Panel hidropónico

Prototipo web accesible para explorar cultivos, comparar sus valores de referencia y probar los controles de un huerto hidropónico.

## Usar

Requiere Node.js 22.13 o superior. Abre una terminal en la carpeta del proyecto, ejecuta `npm.cmd start` en PowerShell de Windows (`npm start` en otros shells), deja esa terminal abierta y visita `http://127.0.0.1:3000`. El inicio de sesión, el registro y el guardado de datos requieren abrir la aplicación mediante este servidor; no abras `index.html` directamente (`file://`).

En la primera visita, selecciona **Crear cuenta** y registra un usuario (3–32 letras, números o guion bajo) y una contraseña de al menos 10 caracteres. Después puedes iniciar sesión; la sesión se recuerda hasta 30 días en ese equipo. No hay recuperación automática de contraseña, así que guárdala en un administrador de contraseñas.

## Incluye

- Logotipo HIDRO TEC proporcionado por el usuario, mostrado en la navegación junto al nombre de la plataforma.
- Interfaz con la paleta del logotipo: azul marino y azul agua con acentos verdes; las alertas conservan colores diferenciados.
- Portada de presentación con un esquema animado de la arquitectura híbrida y accesos directos al monitoreo y a los escenarios de evaluación.
- Guía interactiva de seis pasos para iniciar los primeros cultivos: elección de cultivo, germinación, trasplante, preparación de solución, comprobación de módulos y cosecha. Permite navegar, marcar el avance y abrir lechuga o albahaca en el catálogo sin agregarlas a la mezcla; disponible en español, inglés y francés. Es una guía orientativa y no sustituye las instrucciones de semillas, nutrientes ni equipo.
- Catálogo visual de 22 cultivos y alimentos, con valores de referencia de pH, EC, temperatura, horas de luz y días estimados a cosecha.
- Selector de ocho macroregiones geográficas de México y sus 32 entidades federativas, con cada estado asignado una sola vez. Al seleccionar una región, las sugerencias afines aparecen primero sin ocultar otros cultivos hidropónicos.
- Fotografías de alimentos y cultivos desde Unsplash; se requiere conexión a internet para verlas. Si una foto no carga, aparece un icono de respaldo.
- Objetivos de pH y EC con margen operativo de ±0.5 alrededor del objetivo sugerido. La temperatura y las horas de luz se muestran como rangos agronómicos de referencia.
- Apartado de mediciones editables para pH, EC, temperatura de solución y aire, humedad relativa, fotoperiodo, oxígeno disuelto y nivel del depósito. Las lecturas de ejemplo actualizan el resumen y se comparan con los cultivos seleccionados.
- Consulta climática opcional: sólo al pulsar el botón, el navegador solicita permiso de ubicación y la página envía latitud/longitud a [Open-Meteo](https://open-meteo.com/) para obtener temperatura y humedad exteriores actuales y duración astronómica estimada del día. La aplicación no guarda las coordenadas. La temperatura y humedad exteriores no sustituyen mediciones del invernadero, y las horas de luz solar no son PAR/irradiancia ni el fotoperiodo de las lámparas.
- La ubicación no determina el pH ni la EC del agua/nutrientes. Esos valores requieren sensores calibrados en la solución; en esta demostración siguen siendo lecturas editables/simuladas. Los datos meteorológicos tampoco controlan equipos físicos.
- Panel diferenciado para el sistema híbrido en L: cinco indicadores clave, lecturas de ejemplo separadas para torres (flujo y nivel) y balsa flotante (oxígeno disuelto y nivel), además de temperatura/humedad del aire e intensidad de luz por zona. Se puede elegir un cultivo por subsistema para ajustar las alertas de pH y EC a objetivo ±0.5 y la temperatura del aire al rango del catálogo. Los demás umbrales son referencias generales que requieren validación para cada equipo.
- Escenarios demostrativos interactivos para operación estable, flujo bajo en torres y oxígeno bajo en la balsa. Las lecturas modificadas activan alertas localizadas por módulo y pueden restaurarse a sus valores iniciales; son simulaciones de interfaz, no fallas detectadas ni acciones sobre el hardware.
- Registro manual de lecturas con fecha/hora, historial gráfico de pH por 24 horas, 7 o 90 días y exportación de lecturas, comparativos y calibraciones a CSV. Las lecturas se guardan en la base de datos del servidor bajo la cuenta iniciada. La gráfica empieza vacía y no crea mediciones automáticamente.
- Formulario para anotar fecha, sensor y responsable de calibraciones; la bitácora se guarda en la misma base de datos, separada por cuenta, y se exporta en el CSV.
- Comparación editable de densidad, cosecha, agua, energía y costo entre módulos, con totales del sistema híbrido. Calcula plantas/m², litros y kWh por kg cosechado y costo de módulo por planta. Los ejemplos son demostrativos; compara mediciones reales sólo si corresponden al mismo periodo, cultivo y etapa.
- Hoja de ruta visible para notificaciones remotas, QR público y control remoto real. Estas integraciones requieren hosting y controlador conectado. La comparación con cultivo en suelo se omite hasta contar con un ensayo comparable y medido.
- Asistente técnico con Gemini para preguntas sobre cultivos hidropónicos, patología vegetal, solución nutritiva, sensores, electrónica y la aplicación. Puede recibir imágenes JPG/PNG/WebP (máximo 5 MB) para describir señales visibles de posibles plagas; el resultado es orientativo, no diagnostica ni sustituye a un especialista.
- Cuando las lecturas del panel híbrido activan alertas, aparece una acción para llevar esas alertas y lecturas al formulario de soporte IA; la persona debe revisar y enviar la consulta.
- Evaluador de mezcla: al seleccionar varias plantas calcula los intervalos comunes de pH/EC (objetivo ±0.5), temperatura del aire y luz. Si no existe intersección suficiente, recomienda depósitos independientes; también señala cuando los objetivos sí coinciden pero las lecturas actuales necesitan ajuste.
- Advertencia fitosanitaria separada del resultado agronómico: el agua recirculante común puede transportar patógenos entre raíces; aislar retornos reduce esa vía, pero no garantiza la inocuidad del alimento. Incluye recordatorios de agua potable, limpieza y manejo higiénico.
- Filtros por tipo de cultivo y selección con teclado o ratón.
- Consejos orientativos para combinar cultivos.
- Interfaz en español, inglés y francés. O’dam (tepehuano del sur) aparece en el selector como idioma en preparación; sus traducciones y lectura por voz requieren revisión de una persona hablante antes de publicarse.
- Lectura por voz mediante la síntesis de voz del navegador; las voces disponibles dependen del dispositivo.
- Interruptores interactivos de bomba, luz y ventilación.
- Registro e inicio de sesión con usuarios separados y sesiones persistentes. La base de datos SQLite (`data/hidro-tec-accounts.sqlite`) guarda nombres de usuario, hashes scrypt de las contraseñas, sesiones y registros asociados a cada cuenta; nunca almacena contraseñas en texto legible. La carpeta de datos está excluida del control de versiones.

## Importante

Este prototipo no está conectado a sensores ni a equipos físicos. Los valores iniciales del panel y las respuestas de los controles son de demostración; las entradas pueden editarse y guardarse manualmente. Para operar una instalación real se necesita definir e integrar un controlador y su protocolo de comunicación; no uses los controles de esta página como confirmación de que un equipo físico está encendido o apagado.

## Activar soporte de IA

1. Instala Node.js 22.13 o superior.
2. Copia `.env.example` como `.env` y configura `GEMINI_API_KEY` con una clave de Google AI Studio. En PowerShell puedes ejecutar `Copy-Item .env.example .env` y editar `.env`. No publiques ni compartas esa clave; `.env` está excluido de Git.
3. Ejecuta `npm.cmd start` en PowerShell de Windows (`npm start` en otros shells) y abre `http://127.0.0.1:3000`.
4. El servidor Node mantiene la clave fuera del navegador y reenvía las consultas a Gemini. Si no se configura la clave, el estado de soporte lo indica y la función no responde como si la IA estuviera activa.

El texto y las imágenes se envían a Google Gemini sólo después de marcar el consentimiento y pulsar consultar. La aplicación no persiste la imagen ni la conversación: la conversación vive en memoria del navegador hasta cerrar o reiniciar la vista. El backend limita el tamaño y frecuencia de solicitudes y no guarda el contenido. Revisa las condiciones de privacidad y retención del proveedor antes de usar información sensible. En despliegue público, usa HTTPS, protege el servidor y la clave, añade controles de acceso y configura límites/costos adecuados; el servidor de muestra escucha sólo en `127.0.0.1`.

La IA puede equivocarse al interpretar fotografías, plagas, enfermedades y parámetros. No aplica tratamientos, no controla el equipo, no llama a soporte humano y no reemplaza la inspección de una persona técnica/agronómica. Para una falla crítica o un diagnóstico fitosanitario, contacta al especialista local.

El botón **Escuchar** usa primero la voz instalada en el dispositivo para el idioma elegido. Si no hay una, habilita “Usar voz Gemini” y vuelve a pulsarlo: el texto se enviará a Google para generar audio en español (voz Kore), inglés (Aoede) o francés (Sulafat). La voz Gemini requiere el backend y la misma `GEMINI_API_KEY`; consume cuota del proveedor. Sin consentimiento usa solo voces locales y no envía el texto. O’dam aún no tiene traducción ni voz configurada. La generación en la nube tiene un límite de solicitudes y duración por petición.

## Cuentas y datos

El servidor crea automáticamente una base SQLite local en `data/hidro-tec-accounts.sqlite` para cuentas, sesiones, lecturas y calibraciones. Puedes cambiar su ubicación con `HIDRO_TEC_DB_PATH`. La contraseña se deriva con scrypt y salt aleatorio; la cookie de sesión es `HttpOnly`, `SameSite=Strict` y permanece válida hasta 30 días. En conexiones HTTPS se marca además `Secure`; detrás de un proxy TLS configura `COOKIE_SECURE=true`. No existe correo registrado ni flujo de recuperación: perder la contraseña implica perder el acceso a esa cuenta.

Esta implementación local es para prototipo. Antes de exponerla a Internet, usa HTTPS, respalda y protege la carpeta `data`, restringe el registro público según tu proyecto, y despliega detrás de un proxy de confianza. El límite de intentos de autenticación se mantiene en memoria y se reinicia al reiniciar el proceso; no sustituye una defensa de producción contra abuso.

Las lecturas y calibraciones se guardan en SQLite en el servidor, asociadas a la cuenta iniciada, y no se comparten entre cuentas. La base pertenece a esta instalación: para migrarla o protegerla, respalda `data/hidro-tec-accounts.sqlite`; no hay réplica o copia de respaldo automática. El CSV es una descarga local. Las alertas son visuales dentro de la página, no notificaciones al celular. Los lux registrados por zona no se convierten automáticamente a PAR ni a horas de fotoperiodo.

La consulta de ubicación/clima es opcional y sólo ocurre tras pulsar el botón y conceder permiso. En ese momento se envían las coordenadas al servicio Open-Meteo; el proyecto no las persiste. El navegador debe permitir geolocalización y acceso de red (puede ser necesario abrir la página desde HTTPS o `localhost`; el comportamiento con `file://` depende del navegador). Si falla la ubicación o el servicio, la interfaz muestra el error y no presenta datos simulados como si fueran actuales.

Los valores por cultivo y las sugerencias regionales son referencias generales, no instrucciones universales. Las macroregiones no describen el microclima de cada municipio: considera altitud, estación, temperatura interior del cultivo y variedad. El margen de ±0.5 expresa una tolerancia objetivo para pH y EC, no la precisión de sensores, ni se extiende a temperatura o luz. Verifica la calibración y especificaciones de los sensores antes de usar umbrales en un sistema real.

El evaluador solo compara rangos orientativos del catálogo: no detecta plagas, microorganismos, residuos ni contaminación química, y no certifica compatibilidad biológica o seguridad alimentaria. La temperatura del agua usa como referencia general 18–22 °C, el oxígeno disuelto >5 mg/L y la humedad de 50–70 %; son señales de referencia y no un diagnóstico ni un umbral universal para toda etapa o instalación. El resultado no sustituye asesoría agronómica, análisis de agua ni prácticas de inocuidad.

## Criterio geográfico

La asignación estatal usa una agrupación geográfica educativa de ocho regiones, como la descrita en [Regiones de México, repositorio de la UAEH](https://dspace.uaeh.edu.mx/server/api/core/bitstreams/22f3ee20-f8c1-4154-91f7-4cd06bb6484a/content); no existe una única clasificación oficial de macroregiones agrícolas o climáticas para todo México. Los límites de otras regionalizaciones varían según el propósito. Para datos locales, consulta [INEGI: climatología](https://www.inegi.org.mx/temas/climatologia/) y [Marco Geoestadístico](https://www.inegi.org.mx/temas/mg/), y para producción por cultivo consulta [SIAP: cierre agrícola](https://nube.agricultura.gob.mx/cierre_agricola/). La región solo ordena sugerencias generales; no predice si un cultivo prosperará en un municipio ni sustituye datos de temperatura, altitud, estación y condiciones del invernadero.

Agrupación del selector: Noroeste (Baja California, Baja California Sur, Sinaloa, Sonora); Noreste (Chihuahua, Coahuila, Durango, Nuevo León, Tamaulipas); Occidente (Colima, Jalisco, Michoacán, Nayarit); Centronorte (Aguascalientes, Guanajuato, Querétaro, San Luis Potosí, Zacatecas); Centrosur (Ciudad de México, Estado de México, Morelos); Oriente (Hidalgo, Puebla, Tlaxcala, Veracruz); Suroeste (Chiapas, Guerrero, Oaxaca); Sureste (Campeche, Quintana Roo, Tabasco, Yucatán).

## Despliegue en Vercel

1. Importa el repositorio en Vercel (sin framework, sin build command).
2. Define las variables de entorno `GEMINI_API_KEY` (y opcionalmente `GEMINI_MODEL`, `GEMINI_TTS_MODEL`).
3. Despliega. `vercel.json` redirige todo a `api/index.js`, que reutiliza `server.js`.

Nota: en Vercel el sistema de archivos es efímero; la base SQLite de cuentas se guarda en `/tmp` y se reinicia entre instancias. Para cuentas persistentes hay que migrar a una base externa.
