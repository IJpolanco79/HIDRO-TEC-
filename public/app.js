const translations = {
  es: {
    skipLink: "Saltar al contenido", workspace: "MI ESPACIO", navOverview: "Resumen", navGuide: "Guía inicial", navPlants: "Cultivos",
    navCompatibility: "Mezclas", navControls: "Controles", helpTitle: "¿Primera cosecha?",
    helpText: "Empieza con plantas fáciles de cuidar.", explorePlants: "Ver guía inicial", profileName: "Mi huerto",
    profilePlan: "Espacio personal", breadcrumbHome: "Mi espacio", breadcrumbPage: "Resumen", demoMode: "Modo demostración",
    languageLabel: "Idioma", voice: "Escuchar", todayLabel: "MIÉRCOLES, 7 DE OCTUBRE", welcome: "Tu huerto, <span>a tu ritmo.</span>",
    voiceCloudConsent: "Usar voz Gemini para escuchar (envía el texto a Google)",
    voiceReady: "La voz usa los servicios disponibles en este dispositivo.",
    voiceSpeaking: "Preparando voz…", voiceCompleted: "Lectura finalizada.",
    voiceCloudRequired: "No hay una voz instalada para este idioma. Activa voz Gemini y vuelve a pulsar Escuchar.",
    voiceCloudUnavailable: "La voz Gemini no está disponible. Revisa el servidor y la clave GEMINI_API_KEY.",
    voiceCloudRateLimit: "Se alcanzó el límite temporal de voz. Espera un minuto e inténtalo de nuevo.",
    voiceCloudError: "No se pudo generar la voz Gemini. Revisa la conexión o inténtalo de nuevo.",
    voicePlaybackError: "No se pudo reproducir el audio. Revisa la salida de sonido del dispositivo.",
    odamOption: "O’dam · en preparación",
    odamPending: "La traducción al O’dam (tepehuano del sur) y su lectura por voz están en preparación; por ahora el contenido se muestra en español.",
    intro: "Todo lo que tus plantas necesitan, en un solo lugar.", readSummary: "Leer resumen",
    guideEyebrow: "DE LA SEMILLA A LA PRIMERA COSECHA", guideTitle: "Tu primera siembra, paso a paso",
    guideIntro: "Una ruta práctica para empezar con cultivos de hoja y aprender a leer tu sistema sin apresurarte.",
    guideBeginner: "NIVEL INICIAL", guideProgress: "Paso {current} de {total}",
    guideCompleted: "{count} completados", guideStepLabel: "PASO", guidePrevious: "← Anterior",
    guideMarkComplete: "Marcar paso como completado", guideMarkedComplete: "Paso completado · pulsar para deshacer",
    guideNext: "Siguiente paso", guideFinish: "Terminar guía",
    guideProgressAria: "Progreso de la guía", guideStepsAria: "Pasos de la guía",
    guideStepDone: "Completado", guideStepPending: "Pendiente", guideAnnouncement: "Paso {current} de {total}: {title}",
    guideFinishedAnnouncement: "¡Guía completada! Ya puedes volver a consultar cualquier paso.",
    guideDisclaimer: "Los tiempos y rangos dependen de variedad, clima, equipo y nutrientes. Prioriza la etiqueta de tus semillas, la solución nutritiva y las instrucciones del fabricante; las lecturas de esta web son demostrativas.",
    guideStep1Title: "Elige un cultivo sencillo",
    guideStep1Body: "Empieza con pocas plantas de hoja: la lechuga suele ser una primera opción manejable. Añade albahaca cuando ya conozcas el comportamiento de tu sistema.",
    guideStep1Check1: "Revisa que las semillas sean aptas para la temporada y las condiciones de tu espacio.",
    guideStep1Check2: "Comienza con un solo cultivo y anota la variedad y la fecha de siembra.",
    guideStep1Tip: "¿Quieres comparar objetivos? Consulta la ficha del cultivo en el catálogo; sus valores son referencias, no una garantía de cosecha.",
    guideStep2Title: "Germina con limpieza y humedad",
    guideStep2Body: "Usa una charola y un medio limpio apropiado para hidroponía. Sigue las indicaciones del sobre de semillas para profundidad y temperatura.",
    guideStep2Check1: "Humedece el medio de forma uniforme; evita dejar las semillas sumergidas.",
    guideStep2Check2: "Etiqueta variedad y fecha; mantén la charola protegida y revisa a diario.",
    guideStep2Tip: "No todas las semillas germinan a la misma velocidad. Guíate por la etiqueta y por raíces y brotes sanos, no por un día fijo.",
    guideStep3Title: "Trasplanta cuando la plántula esté lista",
    guideStep3Body: "Espera a que tenga raíces visibles y firmes, y hojas verdaderas suficientes para manipularla sin dañar el tallo.",
    guideStep3Check1: "Toma la plántula por el medio o las hojas; no pellizques el tallo.",
    guideStep3Check2: "Asegura que las raíces alcancen la humedad o película nutritiva del módulo.",
    guideStep3Tip: "Si las raíces están débiles, la plántula marchita o el medio se deshace, espera y corrige las condiciones antes de moverla.",
    guideStep4Title: "Prepara y mide la solución",
    guideStep4Body: "Usa agua y nutrientes formulados para hidroponía. Añade el producto siguiendo su etiqueta y mide EC y pH con instrumentos calibrados.",
    guideStep4Check1: "Registra la fuente de agua, el producto y la cantidad indicada por su fabricante.",
    guideStep4Check2: "Compara pH y EC con el objetivo del cultivo y la tolerancia indicada por el proveedor.",
    guideStep4Tip: "No ajustes a ciegas ni mezcles concentrados. Corrige de forma gradual sólo según las instrucciones del producto y vuelve a medir.",
    guideStep5Title: "Instala y verifica cada módulo",
    guideStep5Body: "Coloca las plantas según su tamaño y necesidades. En las torres verifica el retorno de agua; en la balsa confirma la aireación y el contacto de raíces con la solución.",
    guideStep5Check1: "Antes de plantar, prueba circulación, fugas, nivel del depósito y estabilidad eléctrica.",
    guideStep5Check2: "Comprueba que el agua no se estanque y que las raíces no se sequen.",
    guideStep5Tip: "Para el primer ciclo evita mezclar cultivos en un mismo circuito si sus objetivos de pH, EC o clima no coinciden.",
    guideStep6Title: "Observa, registra y cosecha",
    guideStep6Body: "Haz una inspección breve cada día y registra mediciones con fecha. Al cosechar, anota peso y módulo para aprender del ciclo.",
    guideStep6Check1: "Observa hojas, raíces, flujo, nivel y aireación; busca cambios respecto al día anterior.",
    guideStep6Check2: "Limpia herramientas y superficies; registra cosecha y cualquier ajuste realizado.",
    guideStep6Tip: "Si ves una alarma o síntomas persistentes, pausa cambios bruscos, confirma la medición y consulta a una persona especialista.",
    guideCropCatalog: "Ver {crop} en el catálogo",
    guideStepNav: "Ir al paso {step}: {title}",
    pitchLabel: "HIDRO TEC · AGRICULTURA HÍBRIDA",
    pitchTitle: "Dos métodos. Una arquitectura modular.",
    pitchBody: "Integra torres verticales y raíces flotantes en un mismo sistema en L, con monitoreo y riesgos diferenciados por subsistema.",
    pitchModuleOne: "Torres: flujo y nivel", pitchModuleTwo: "Balsa: oxígeno y aireación",
    pitchExplore: "Explorar arquitectura", pitchTry: "Probar escenarios",
    pitchDiagramTitle: "Esquema conceptual del sistema híbrido",
    pitchDiagramDesc: "Torres verticales y balsa de raíces flotantes representadas como módulos separados con una solución de diseño en L.",
    pitchDiagramCaption: "ESQUEMA CONCEPTUAL · NO A ESCALA",
    authKicker: "ESPACIO PERSONAL", authTitle: "Bienvenido a tu huerto",
    authIntro: "Inicia sesión o crea una cuenta para guardar tu historial por separado.",
    authUsername: "Usuario", authPassword: "Contraseña", authConfirmPassword: "Confirma tu contraseña",
    authLogin: "Iniciar sesión", authRegister: "Crear cuenta", authGoRegister: "¿No tienes cuenta? Regístrate",
    authGoLogin: "¿Ya tienes cuenta? Inicia sesión", authLogout: "Cerrar sesión",
    authPrivacy: "La sesión se recuerda durante 30 días en este equipo. La contraseña se almacena con hash seguro, nunca como texto legible. No hay recuperación automática.",
    authAsideLabel: "DISEÑO HÍBRIDO · DATOS POR CUENTA", authAsideTitle: "Tu cultivo, tus registros.",
    authAsideBody: "Consulta tus lecturas y calibraciones guardadas en una base de datos independiente.",
    authPasswordHint: "Usa al menos 10 caracteres.", authUsernameTaken: "Ese usuario ya está registrado. Elige otro.",
    authUsernameFormat: "Usa de 3 a 32 letras, números o guion bajo para el usuario.",
    authInvalidCredentials: "Usuario o contraseña incorrectos.", authRateLimit: "Demasiados intentos. Espera un minuto e inténtalo de nuevo.",
    authPasswordMismatch: "Las contraseñas no coinciden.",
    authServerUnavailable: "No se pudo conectar al servidor. En PowerShell, ejecuta npm.cmd start y abre http://127.0.0.1:3000. Deja abierta la terminal.",
    authOpenThroughServer: "Abriste el archivo directamente. Para iniciar sesión y guardar datos, ejecuta npm.cmd start en PowerShell y abre http://127.0.0.1:3000.",
    authUnexpectedError: "No se pudo completar el acceso. Inténtalo de nuevo.",
    authDataLoadError: "No se pudieron cargar tus datos. Comprueba tu conexión antes de continuar.",
    authLoginSuccess: "Sesión iniciada.", authRegisterSuccess: "Cuenta creada. Sesión iniciada.",
    authSessionExpired: "Tu sesión terminó. Inicia sesión de nuevo.",
    accountReadingsLimit: "Se alcanzó el límite de registros de esta cuenta.",
    accountSynced: "Cuenta · datos guardados",
    authSaving: "Verificando…",
    scenarioEyebrow: "INTERACCIÓN PARA EVALUACIÓN", scenarioTitle: "Prueba una condición del sistema",
    scenarioIntro: "Activa un caso simulado y observa cómo cambia el diagnóstico de cada módulo. No modifica hardware.",
    scenarioStable: "Operación estable", scenarioFlow: "Flujo bajo en torres", scenarioOxygen: "Oxígeno bajo en balsa",
    scenarioStableDetail: "Todos los valores de ejemplo están dentro de las referencias mostradas.",
    scenarioFlowDetail: "El flujo de retorno de las torres cae a 0.2 L/min: el panel alerta únicamente el subsistema afectado.",
    scenarioOxygenDetail: "El oxígeno disuelto de la balsa cae a 3.2 mg/L: el panel marca la condición aunque la bomba figure activa.",
    scenarioCustomDetail: "Lecturas personalizadas: edita los campos para explorar cómo cambian los avisos por módulo.",
    scenarioGroup: "Escenarios de demostración",
    demoNoticeTitle: "Vista de demostración", demoNoticeBody: "Los sensores y controles son simulados. Conecta un controlador compatible para operar tu instalación real.",
    dismiss: "Cerrar aviso", metricPH: "pH del agua", ideal: "ideal", phRange: "Rango óptimo 5.5–6.5", sampleReading: "Lectura de demostración",
    metricEC: "Nutrientes · EC", ecStatus: "Bien para tus cultivos", metricTemp: "Temperatura exterior", tempStatus: "Consulta tu ubicación",
    metricLight: "Luz solar local", hoursOf: "/ día", lightStatus: "Consulta tu ubicación", hoursRemaining: "horas restantes", growTogether: "CRECEN JUNTAS",
    locationTitle: "Clima local y luz solar", locationPrivacy: "Al continuar, el navegador pedirá tu ubicación y enviaremos las coordenadas a Open-Meteo para consultar el clima. No las guardamos.",
    locationLimit: "La ubicación no mide el pH ni la EC de tu solución, ni la temperatura o luz dentro del cultivo. Para eso se requieren sensores locales.",
    weatherSource: "Fuente meteorológica: Open-Meteo",
    noWeatherData: "Sin datos meteorológicos",
    locationAction: "Permitir ubicación y consultar clima", locationStatus: "Aún no se ha consultado tu ubicación.",
    locationLoading: "Obteniendo ubicación y consultando Open-Meteo…", locationSuccess: "Clima exterior actualizado: {temp} °C, humedad {humidity}%, luz solar estimada {daylight} h/día. Precisión de ubicación ±{accuracy} m. No es una medición del invernadero.",
    locationDenied: "No se concedió acceso a la ubicación. Puedes cambiar el permiso en la configuración del navegador.",
    locationUnavailable: "El navegador no pudo determinar la ubicación. Inténtalo de nuevo o revisa el GPS.",
    locationTimeout: "La solicitud de ubicación tardó demasiado. Inténtalo de nuevo.",
    locationUnsupported: "La geolocalización no está disponible. Abre la página en un contexto seguro (HTTPS o localhost).",
    weatherError: "No se pudo consultar Open-Meteo. Revisa tu conexión e inténtalo de nuevo.",
    weatherInvalid: "El servicio meteorológico no devolvió datos utilizables. Inténtalo de nuevo.",
    externalHumidity: "Humedad exterior: {humidity}%", sunlightDuration: "{daylight} h de luz solar estimada",
    plantsTitle: "Elige tus cultivos", viewAll: "Ver catálogo", filterAll: "Todas", filterLeafy: "Hojas", filterFruit: "Frutos",
    filterHerb: "Hierbas", plantFootnote: "pH y EC son objetivos orientativos; los requisitos cambian con variedad y etapa de crecimiento.",
    smartPairing: "BUENAS VECINAS", compatibilityTitle: "¿Quién va con quién?",
    matchLabel: "compatibles", compatibilityIntro: "Combina plantas con necesidades de agua y nutrientes parecidas.",
    pairOne: "Lechuga", pairTwo: "Albahaca", pairThree: "Tomate", pairFour: "Albahaca", and: "y",
    pairOneNote: "Comparten un rango de pH similar y aprovechan bien el espacio.",
    pairTwoNote: "Buena combinación si ajustas nutrientes para cada etapa.",
    compatibilityCaution: "Compatibilidad orientativa; considera el espacio y las variedades.",
    systemLabel: "TU INSTALACIÓN", controlsTitle: "Controles", simulatedTag: "SIMULADO", pump: "Bomba de agua",
    growLight: "Luz de cultivo", ventilation: "Ventilación", stateOn: "Activa · ciclo automático", stateOff: "En pausa",
    controlFeedback: "Cambios solo en modo demostración.", footer: "Cultivar bien empieza por observar.",
    footerMade: "Cultiva a tu manera", plantReady: "En crecimiento", pH: "pH", ec: "EC", days: "días", temp: "Temp.", lightValue: "Luz",
    regionLabel: "Macroregión geográfica", stateLabel: "Estado", anyRegion: "Todo México", selectState: "Todos los estados",
    regionHelp: "Agrupación geográfica orientativa, no clasificación climática. Cada estado contiene distintos climas y alturas.",
    regionalPick: "Afinidad regional", nationalPick: "Cultivable en hidroponía", stateSelectHint: "Elige región y estado para ordenar sugerencias.",
    toleranceNote: "pH y EC: objetivo ±0.5. Temperatura y luz son rangos orientativos, no una precisión del sensor.",
    regionNoroeste: "Noroeste", regionNoreste: "Noreste", regionOccidente: "Occidente", regionCentronorte: "Centronorte",
    regionCentrosur: "Centrosur", regionOriente: "Oriente", regionSuroeste: "Suroeste", regionSureste: "Sureste",
    addPlant: "Seleccionar", selectRegion: "Selecciona una región",
    categories: "Filtrar cultivos", countUnit: "cultivos",
    mixLabel: "ANÁLISIS DE CULTIVOS", mixTitle: "¿Pueden compartir circuito?", selectedLabel: "seleccionados",
    mixIntro: "Selecciona cultivos del catálogo para comparar sus objetivos y tus lecturas.",
    emptySelection: "Aún no seleccionas cultivos. Activa “Agregar al análisis” en cada planta.",
    addToMix: "Agregar al análisis", removeFromMix: "Quitar del análisis", noSelectionTitle: "Elige uno o más cultivos",
    noSelectionBody: "Agrega cultivos desde el catálogo. Compararemos sus rangos de pH, EC, temperatura y luz.",
    feasibleTitle: "Viable en un mismo circuito (por parámetros)", separateTitle: "No conviene compartir la solución",
    targetsOverlapTitle: "Objetivos compatibles; valida las lecturas",
    readingsNeedAdjustmentTitle: "Los objetivos coinciden, pero hay lecturas fuera de rango",
    oneCropTitle: "Cultivo individual", feasibleBody: "Los rangos orientativos se traslapan. Ajusta el manejo por etapa y observa cada cultivo.",
    separateBody: "Al menos un parámetro clave no tiene un rango común suficiente; usa depósitos independientes.",
    singleBody: "Compara las lecturas del sistema con los objetivos de este cultivo.",
    targetsOverlapBody: "Los objetivos se traslapan, pero falta una lectura válida; corrígela antes de decidir el manejo.",
    readingsNeedAdjustmentBody: "Los cultivos podrían compartir solución según sus objetivos, pero ajusta las lecturas fuera de rango antes de operarlo.",
    currentReadings: "Lecturas actuales", recommendedRange: "Rango común sugerido",
    statusOk: "Dentro del rango", statusOut: "Fuera del rango", statusNoCommon: "Sin rango común",
    sharedRisk: "Riesgo de transferencia por circuito compartido",
    separateRisk: "Retornos separados reducen la vía de propagación por agua",
    contaminationTitle: "Riesgo por agua compartida",
    contaminationBody: "Un circuito recirculante común puede transportar patógenos de raíz entre plantas. Separar cultivos reduce esa vía, pero no garantiza inocuidad del alimento.",
    contaminationAdviceOne: "Usa agua potable y evita estiércol o insumos sin tratar.",
    contaminationAdviceTwo: "Desinfecta herramientas y superficies; evita salpicaduras entre cultivos.",
    contaminationAdviceThree: "Cosecha y manipula alimentos con higiene; lava antes de consumir.",
    sharedRiskDetail: "El agua y el retorno comunes pueden mover microorganismos entre raíces; esto es distinto de contaminación alimentaria y no se descarta con este análisis.",
    separateRiskDetail: "Mantén tanque, bomba, retorno y herramientas separados. Esto reduce una ruta entre raíces, pero no evita todos los riesgos de inocuidad.",
    measureLabel: "LO QUE MEDIMOS", measureTitle: "Lecturas del sistema",
    measureIntro: "Edita las lecturas de ejemplo; el resultado compara estos valores con los cultivos elegidos.",
    waterPH: "pH de solución", nutrientEC: "Conductividad EC", solutionTemp: "Temperatura de solución",
    airTemp: "Temperatura del aire", relativeHumidity: "Humedad relativa", lightHours: "Fotoperiodo diario",
    dissolvedOxygen: "Oxígeno disuelto", reservoirLevel: "Nivel del depósito",
    waterCircuit: "Circuito de riego", sharedLoop: "Solución recirculante compartida",
    separateLoops: "Circuitos y retornos separados",
    measurementNote: "pH/EC ±0.5 es la tolerancia de referencia, no la precisión del sensor. Temperatura, humedad, oxígeno y luz son criterios orientativos; 50–70% de humedad y >5 mg/L de oxígeno son referencias amplias, no diagnósticos.",
    navHybrid: "Sistema híbrido", hybridEyebrow: "EL DISEÑO QUE NOS DIFERENCIA", hybridTitle: "Sistema híbrido en L",
    hybridIntro: "Supervisa por separado las torres verticales y la balsa de raíz flotante: sus riesgos y necesidades no son iguales.",
    towerTitle: "Torres verticales", raftTitle: "Balsa de raíz flotante",
    towerFocus: "Punto crítico: detectar a tiempo falta de flujo y nivel bajo para proteger las plantas de arriba.",
    raftFocus: "Punto crítico: conservar oxígeno disuelto suficiente y verificar la aireación de las raíces.",
    flowRate: "Flujo de retorno", towerPumpState: "Bomba de recirculación", airPumpState: "Bomba de aire",
    demoStateOn: "Activa · demo", demoStateOff: "Apagada · demo", towerPumpOff: "Torres verticales: la bomba de recirculación está apagada (simulación).",
    raftAirOff: "Balsa de raíz flotante: la bomba de aire está apagada (simulación).", subsystemOk: "En rango · demo", subsystemWarning: "Revisar · demo",
    alertEyebrow: "SUPERVISIÓN LOCAL", alertsTitle: "Alertas por subsistema", onScreenOnly: "SOLO PANTALLA",
    alertSummaryOk: "Sin alertas en las lecturas de ejemplo.", alertSummaryCount: "Alertas que requieren revisión: {count}.", alertLimit: "Los umbrales son ejemplos orientativos y deben validarse para cada cultivo y equipo. Estos avisos no llegan al celular o correo; eso requiere conectar un servicio de notificaciones.",
    alertInvalid: "{system}: revisa la lectura de {metric}.", alertOut: "{system}: {metric} fuera del rango de referencia ({value} {unit}).",
    sendAlertsToSupport: "Enviar estos errores a soporte técnico", supportEyebrow: "ASISTENCIA TÉCNICA IA",
    supportTitle: "Soporte especializado HIDRO TEC", supportChecking: "CONECTANDO…", supportOffline: "IA NO CONFIGURADA",
    supportReady: "IA DISPONIBLE", supportUnavailable: "NO DISPONIBLE",
    supportIntro: "Pregunta sobre hidroponía, cultivos, plagas y enfermedades, calidad del agua, sensores, electrónica, bombas, controles o uso de esta plataforma.",
    supportQuestion: "¿Qué problema necesitas resolver?", supportPlaceholder: "Describe qué observas, desde cuándo y qué valores mediste.",
    plantPhoto: "Foto de la planta (opcional)", supportImageHint: "Para analizar posibles plagas, adjunta una foto nítida de la planta y de cerca de la zona afectada. JPG, PNG o WebP; máximo 5 MB.",
    supportConsent: "Acepto enviar mi consulta y, si adjunto una foto, esa imagen a Google Gemini para obtener una respuesta. No incluyas datos personales.",
    supportSend: "Consultar soporte IA", supportSending: "Consultando Gemini…", supportClear: "Nueva consulta",
    supportDisclaimer: "La IA ofrece orientación inicial, no confirma diagnósticos ni reemplaza a un agrónomo, técnico o especialista fitosanitario.",
    supportImageOnly: "Adjunta una foto o escribe una consulta antes de enviar.", supportConsentRequired: "Confirma el envío a Google Gemini para continuar.",
    supportImageType: "Formato no admitido. Usa una imagen JPG, PNG o WebP.", supportImageSize: "La imagen supera el máximo de 5 MB.",
    supportApiOffline: "No se pudo conectar al servidor de soporte. Inicia la aplicación con npm start.",
    supportNotConfigured: "El servidor está activo, pero falta configurar GEMINI_API_KEY.",
    supportRateLimited: "Se alcanzó el límite temporal de consultas. Espera un minuto e inténtalo de nuevo.",
    supportServiceError: "Gemini no pudo completar la consulta. Inténtalo más tarde o contacta a un especialista.",
    supportResponseError: "No se recibió una respuesta utilizable. Inténtalo de nuevo.",
    supportUserLabel: "Tú", supportAssistantLabel: "Asistencia técnica IA",
    supportImageName: "Imagen adjunta: {name}", supportAlertContext: "Necesito ayuda para revisar estas alertas del sistema. Son lecturas manuales/de demostración, no sensores conectados:\n{alerts}\nMis valores: {readings}",
    supportPhotoCaution: "La identificación visual de plagas o enfermedades puede equivocarse. Aísla una planta solo si el riesgo lo justifica; confirma síntomas y no apliques plaguicidas basándote únicamente en la IA.",
    historyEyebrow: "REGISTRO LOCAL", historyTitle: "Historial por subsistema", sampleData: "DATOS DE EJEMPLO",
    historyChartTitle: "Historial guardado de pH", historyChartDesc: "Gráfica de las lecturas guardadas en tu cuenta.",
    historyDay1: "Día 1", historyDay4: "Día 4", historyDay7: "Día 7", historyLimit: "Las lecturas manuales se guardan en la cuenta iniciada; los sensores aún no están conectados.",
    demoReading: "Lectura de demostración", bothSystems: "Torres + balsa", kpiDisclaimer: "Indicadores editables de demostración; no provienen de sensores conectados.",
    cropAlertRange: "Cultivo para ajustar alertas", cropRangeSummary: "Referencias {crop}: pH {ph}; EC {ec} mS/cm (±0.5); aire {temp}. Rangos orientativos.",
    lightIntensity: "Intensidad de luz por zona", historyPeriod: "Periodo", lastDay: "Últimas 24 h", lastWeek: "Últimos 7 días", lastCycle: "Ciclo · 90 días",
    saveReading: "Guardar lectura", exportCSV: "Exportar CSV", historyEmpty: "Guarda lecturas para crear el historial",
    historySaved: "Lectura guardada en tu cuenta.", historyStorageError: "No se pudo guardar en la base de datos de la cuenta. Comprueba el servidor.",
    exportEmpty: "Aún no hay lecturas ni calibraciones que exportar.", exportDone: "CSV descargado.", recordEyebrow: "DATOS DEL PROTOTIPO",
    calibrationTitle: "Calibración de sensores", subsystem: "Subsistema", sensor: "Sensor", calibrationDate: "Fecha", responsible: "Responsable",
    saveCalibration: "Guardar calibración", calibrationSaved: "Calibración guardada en tu cuenta.",
    calibrationMissing: "Escribe el nombre de la persona responsable.",
    localStorageNote: "Las calibraciones se guardan en la base de datos de tu cuenta y se incluyen en el CSV.",
    combinedSystem: "Sistema completo (torres + balsa)", systemArea: "Área total", systemDensity: "Densidad total",
    totalInvestment: "Inversión de módulos", combinedCostPerPlant: "Costo de módulo por planta",
    nextPhase: "SIGUIENTE FASE", roadmapTitle: "Funciones que requieren infraestructura", notImplemented: "NO IMPLEMENTADO",
    roadmapBody: "Notificaciones al celular, QR público y control remoto real aún requieren hosting, integraciones y controlador conectado; no se presentan como funciones activas.",
    comparisonEyebrow: "EL VALOR DEL DISEÑO HÍBRIDO", comparisonTitle: "Compara producción y eficiencia",
    comparisonIntro: "Edita datos de cosecha y consumos para contrastar ambos módulos. Sustituye los ejemplos por mediciones del mismo periodo.",
    growingArea: "Área ocupada", plantCount: "Plantas", harvestWeight: "Cosecha acumulada", waterUse: "Agua consumida",
    energyUse: "Energía consumida", systemCost: "Costo del módulo", density: "Densidad", waterPerKg: "Agua por kg cosechado",
    energyPerKg: "Energía por kg cosechado", costPerPlant: "Costo del módulo por planta",
    comparisonLimit: "No compares módulos con periodos, cultivos o etapas diferentes. Los cálculos no incluyen todavía mano de obra ni costos operativos.",
    invalidReading: "Revisa las lecturas resaltadas: deben estar dentro de los límites indicados.",
    readPlant: "Requisitos de", selectedPlant: "seleccionada. pH", selectPlant: "Seleccionar",
    categoryLeafy: "hojas", categoryFruit: "frutos", categoryHerb: "hierbas",
    controlOn: "activada · simulación", controlOff: "en pausa · simulación", summaryAnnouncement: "Resumen del sistema.",
    speechUnavailable: "La lectura por voz no está disponible en este navegador.", voiceOff: "Lectura por voz desactivada."
  },
  en: {
    skipLink: "Skip to content", workspace: "MY SPACE", navOverview: "Overview", navGuide: "Getting started", navPlants: "Crops",
    navCompatibility: "Crop mix", navControls: "Controls", helpTitle: "First harvest?",
    helpText: "Start with plants that are easy to care for.", explorePlants: "View starter guide", profileName: "My garden",
    profilePlan: "Personal space", breadcrumbHome: "My space", breadcrumbPage: "Overview", demoMode: "Demo mode",
    languageLabel: "Language", voice: "Listen", todayLabel: "WEDNESDAY, OCTOBER 7", welcome: "Your garden, <span>your pace.</span>",
    voiceCloudConsent: "Use Gemini voice (text is sent to Google)",
    voiceReady: "Voice uses services available on this device.",
    voiceSpeaking: "Preparing voice…", voiceCompleted: "Reading finished.",
    voiceCloudRequired: "No voice is installed for this language. Enable Gemini voice and press Listen again.",
    voiceCloudUnavailable: "Gemini voice is unavailable. Check the server and GEMINI_API_KEY.",
    voiceCloudRateLimit: "The temporary voice request limit was reached. Wait a minute and try again.",
    voiceCloudError: "Gemini voice could not be generated. Check your connection or try again.",
    voicePlaybackError: "Audio could not be played. Check this device's sound output.",
    odamOption: "O’dam · in preparation",
    odamPending: "O’dam (Southern Tepehuan) translation and voice reading are in preparation; content is currently shown in English.",
    intro: "Everything your plants need, all in one place.", readSummary: "Read summary",
    guideEyebrow: "FROM SEED TO FIRST HARVEST", guideTitle: "Your first planting, step by step",
    guideIntro: "A practical path to start with leafy crops and learn to read your system at a steady pace.",
    guideBeginner: "BEGINNER", guideProgress: "Step {current} of {total}",
    guideCompleted: "{count} completed", guideStepLabel: "STEP", guidePrevious: "← Previous",
    guideMarkComplete: "Mark step complete", guideMarkedComplete: "Step completed · click to undo",
    guideNext: "Next step", guideFinish: "Finish guide",
    guideProgressAria: "Guide progress", guideStepsAria: "Guide steps",
    guideStepDone: "Completed", guideStepPending: "Not completed", guideAnnouncement: "Step {current} of {total}: {title}",
    guideFinishedAnnouncement: "Guide complete! You can revisit any step at any time.",
    guideDisclaimer: "Timing and ranges depend on variety, climate, equipment, and nutrients. Follow seed and nutrient labels and manufacturer instructions; readings on this website are demonstrations.",
    guideStep1Title: "Choose an easy first crop",
    guideStep1Body: "Start with a few leafy plants: lettuce is often a manageable first choice. Add basil once you understand how your system behaves.",
    guideStep1Check1: "Check that the seeds suit the season and conditions in your growing space.",
    guideStep1Check2: "Begin with one crop and record its variety and sowing date.",
    guideStep1Tip: "Want to compare targets? Open the crop card in the catalog; values are references, not a harvest guarantee.",
    guideStep2Title: "Germinate cleanly and evenly",
    guideStep2Body: "Use a clean seed tray and a medium suitable for hydroponics. Follow the seed packet for sowing depth and temperature.",
    guideStep2Check1: "Moisten the medium evenly; do not leave seeds submerged.",
    guideStep2Check2: "Label the variety and date; protect the tray and check it daily.",
    guideStep2Tip: "Seeds germinate at different rates. Follow the packet and look for healthy roots and shoots rather than a fixed day.",
    guideStep3Title: "Transplant when seedlings are ready",
    guideStep3Body: "Wait until roots are visible and firm, with enough true leaves to handle the seedling without damaging its stem.",
    guideStep3Check1: "Hold the seedling by its medium or leaves; do not pinch the stem.",
    guideStep3Check2: "Make sure roots can reach moisture or the nutrient film in the module.",
    guideStep3Tip: "If roots are weak, the seedling is wilted, or the medium crumbles, wait and improve conditions before moving it.",
    guideStep4Title: "Prepare and measure the solution",
    guideStep4Body: "Use water and nutrients made for hydroponics. Add the product according to its label and measure EC and pH with calibrated instruments.",
    guideStep4Check1: "Record the water source, product, and amount stated by its manufacturer.",
    guideStep4Check2: "Compare pH and EC with the crop target and the supplier's stated tolerance.",
    guideStep4Tip: "Do not adjust blindly or mix concentrates. Make gradual corrections only as the product directs, then measure again.",
    guideStep5Title: "Set up and check each module",
    guideStep5Body: "Place crops according to their size and needs. Check water return in the towers; in the raft, verify aeration and root contact with solution.",
    guideStep5Check1: "Before planting, test circulation, leaks, reservoir level, and electrical safety.",
    guideStep5Check2: "Check that water is not stagnant and roots do not dry out.",
    guideStep5Tip: "For your first cycle, avoid mixing crops in one circuit when their pH, EC, or climate targets differ.",
    guideStep6Title: "Observe, record, and harvest",
    guideStep6Body: "Do a brief inspection each day and record dated readings. At harvest, note weight and module to learn from the cycle.",
    guideStep6Check1: "Observe leaves, roots, flow, level, and aeration; look for changes since the previous day.",
    guideStep6Check2: "Clean tools and surfaces; record harvest and any adjustments.",
    guideStep6Tip: "If an alert or persistent symptoms appear, avoid sudden changes, confirm the reading, and ask a qualified specialist.",
    guideCropCatalog: "View {crop} in the catalog",
    guideStepNav: "Go to step {step}: {title}",
    pitchLabel: "HIDRO TEC · HYBRID AGRICULTURE",
    pitchTitle: "Two growing methods. One modular design.",
    pitchBody: "Vertical towers and floating roots come together in one L-shaped system, with monitoring and risks distinguished by subsystem.",
    pitchModuleOne: "Towers: flow and level", pitchModuleTwo: "Raft: oxygen and aeration",
    pitchExplore: "Explore the architecture", pitchTry: "Try scenarios",
    pitchDiagramTitle: "Conceptual diagram of the hybrid system",
    pitchDiagramDesc: "Vertical towers and a floating-root raft shown as separate modules in an L-shaped design.",
    pitchDiagramCaption: "CONCEPTUAL DIAGRAM · NOT TO SCALE",
    authKicker: "YOUR PERSONAL SPACE", authTitle: "Welcome to your garden",
    authIntro: "Sign in or create an account to keep your history separate.",
    authUsername: "Username", authPassword: "Password", authConfirmPassword: "Confirm password",
    authLogin: "Sign in", authRegister: "Create account", authGoRegister: "New here? Create an account",
    authGoLogin: "Already have an account? Sign in", authLogout: "Sign out",
    authPrivacy: "Your session is remembered on this device for 30 days. Your password is stored as a secure hash, never readable text. Password recovery is not available.",
    authAsideLabel: "HYBRID DESIGN · ACCOUNT-SCOPED DATA", authAsideTitle: "Your garden, your records.",
    authAsideBody: "Access your readings and calibration records in a separate database.",
    authPasswordHint: "Use at least 10 characters.", authUsernameTaken: "That username is already registered. Choose another.",
    authUsernameFormat: "Use 3–32 letters, numbers, or underscores for the username.",
    authInvalidCredentials: "Incorrect username or password.", authRateLimit: "Too many attempts. Wait a minute and try again.",
    authPasswordMismatch: "Passwords do not match.",
    authServerUnavailable: "Could not connect to the server. Run npm start in a terminal, then open http://127.0.0.1:3000. Keep the terminal running.",
    authOpenThroughServer: "You opened the file directly. To sign in and save data, run npm start in a terminal and open http://127.0.0.1:3000.",
    authUnexpectedError: "Could not complete sign-in. Please try again.",
    authDataLoadError: "Could not load your data. Check your connection before continuing.",
    authLoginSuccess: "Signed in.", authRegisterSuccess: "Account created. Signed in.",
    authSessionExpired: "Your session ended. Please sign in again.",
    accountReadingsLimit: "This account has reached its record limit.",
    accountSynced: "Account · data saved",
    authSaving: "Verifying…",
    scenarioEyebrow: "JUDGE INTERACTION", scenarioTitle: "Test a system condition",
    scenarioIntro: "Activate a simulated case and see how each module's diagnosis changes. No hardware is controlled.",
    scenarioStable: "Stable operation", scenarioFlow: "Low tower flow", scenarioOxygen: "Low raft oxygen",
    scenarioStableDetail: "All sample values are within the displayed reference ranges.",
    scenarioFlowDetail: "Tower return flow drops to 0.2 L/min: the dashboard alerts only the affected subsystem.",
    scenarioOxygenDetail: "Raft dissolved oxygen drops to 3.2 mg/L: the dashboard flags it even while the pump is shown as on.",
    scenarioCustomDetail: "Custom readings: edit the fields to explore how alerts change by subsystem.",
    scenarioGroup: "Demonstration scenarios",
    demoNoticeTitle: "Demo view", demoNoticeBody: "Sensors and controls are simulated. Connect a compatible controller to operate your real setup.",
    dismiss: "Dismiss notice", metricPH: "Water pH", ideal: "ideal", phRange: "Optimal range 5.5–6.5", sampleReading: "Demo reading",
    metricEC: "Nutrients · EC", ecStatus: "Good for your crops", metricTemp: "Outdoor temperature", tempStatus: "Request location",
    metricLight: "Local daylight", hoursOf: "/ day", lightStatus: "Request location", hoursRemaining: "hours remaining", growTogether: "GROWING TOGETHER",
    locationTitle: "Local weather and daylight", locationPrivacy: "Continue to let your browser request your location and send coordinates to Open-Meteo for weather. We do not store them.",
    locationLimit: "Location does not measure solution pH or EC, or temperature or light inside the growing area. Local sensors are needed for those.",
    weatherSource: "Weather source: Open-Meteo",
    noWeatherData: "No weather data",
    locationAction: "Allow location and get weather", locationStatus: "Location has not been requested.",
    locationLoading: "Getting location and checking Open-Meteo…", locationSuccess: "Outdoor weather updated: {temp} °C, humidity {humidity}%, estimated daylight {daylight} h/day. Location accuracy ±{accuracy} m. This is not a greenhouse measurement.",
    locationDenied: "Location access was not granted. You can change permission in your browser settings.",
    locationUnavailable: "The browser could not determine your location. Try again or check GPS.",
    locationTimeout: "The location request timed out. Please try again.",
    locationUnsupported: "Geolocation is unavailable. Open this page in a secure context (HTTPS or localhost).",
    weatherError: "Could not check Open-Meteo. Check your connection and try again.",
    weatherInvalid: "The weather service returned unusable data. Please try again.",
    externalHumidity: "Outdoor humidity: {humidity}%", sunlightDuration: "{daylight} h estimated daylight",
    plantsTitle: "Choose your crops", viewAll: "View catalog", filterAll: "All", filterLeafy: "Leafy", filterFruit: "Fruit",
    filterHerb: "Herbs", plantFootnote: "pH and EC are suggested targets; needs vary by variety and growth stage.",
    smartPairing: "GOOD NEIGHBORS", compatibilityTitle: "Who grows well together?",
    matchLabel: "compatible", compatibilityIntro: "Pair plants with similar water and nutrient needs.",
    pairOne: "Lettuce", pairTwo: "Basil", pairThree: "Tomato", pairFour: "Basil", and: "and",
    pairOneNote: "They share a similar pH range and make good use of space.",
    pairTwoNote: "A good pairing when nutrients are adjusted for each growth stage.",
    compatibilityCaution: "Compatibility is a guide; consider space and plant varieties.",
    systemLabel: "YOUR SETUP", controlsTitle: "Controls", simulatedTag: "SIMULATED", pump: "Water pump",
    growLight: "Grow light", ventilation: "Ventilation", stateOn: "On · automatic cycle", stateOff: "Paused",
    controlFeedback: "Changes are demo-only.", footer: "Good growing starts with observation.",
    footerMade: "Grow your way", plantReady: "Growing", pH: "pH", ec: "EC", days: "days", temp: "Temp.", lightValue: "Light",
    regionLabel: "Geographic macroregion", stateLabel: "State", anyRegion: "All Mexico", selectState: "All states",
    regionHelp: "An approximate geographic grouping, not a climate classification. Each state has varied climates and elevations.",
    regionalPick: "Regional fit", nationalPick: "Hydroponic crop", stateSelectHint: "Choose a region and state to sort suggestions.",
    toleranceNote: "pH and EC: target ±0.5. Temperature and light ranges are guidance, not sensor accuracy.",
    regionNoroeste: "Northwest", regionNoreste: "Northeast", regionOccidente: "West", regionCentronorte: "North-Central",
    regionCentrosur: "South-Central", regionOriente: "East", regionSuroeste: "Southwest", regionSureste: "Southeast",
    selectRegion: "Select a region", categories: "Filter crops", countUnit: "crops",
    mixLabel: "CROP ANALYSIS", mixTitle: "Can they share a system?", selectedLabel: "selected",
    mixIntro: "Select crops in the catalog to compare their targets with your readings.",
    emptySelection: "No crops selected yet. Use “Add to analysis” on each crop.",
    addToMix: "Add to analysis", removeFromMix: "Remove from analysis", noSelectionTitle: "Choose one or more crops",
    noSelectionBody: "Add crops from the catalog. We'll compare their pH, EC, temperature, and light ranges.",
    feasibleTitle: "Suitable for one circuit (by parameters)", separateTitle: "Do not share the nutrient solution",
    targetsOverlapTitle: "Targets overlap; verify readings",
    readingsNeedAdjustmentTitle: "Targets overlap, but readings are out of range",
    oneCropTitle: "Single crop", feasibleBody: "The reference ranges overlap. Adjust management by growth stage and monitor each crop.",
    separateBody: "At least one key parameter has no adequate common range; use independent reservoirs.",
    singleBody: "Compare system readings with this crop's targets.",
    targetsOverlapBody: "Targets overlap, but a valid reading is missing; correct it before deciding how to manage the system.",
    readingsNeedAdjustmentBody: "These crops may share solution based on their targets, but correct out-of-range readings before operating.",
    currentReadings: "Current readings", recommendedRange: "Suggested shared range",
    statusOk: "In range", statusOut: "Out of range", statusNoCommon: "No common range",
    sharedRisk: "Shared-loop transfer risk",
    separateRisk: "Separate returns reduce the waterborne spread route",
    contaminationTitle: "Risk from shared water",
    contaminationBody: "A shared recirculating loop can carry root pathogens between plants. Separate systems reduce this route but do not guarantee food safety.",
    contaminationAdviceOne: "Use potable water; avoid untreated manure or inputs.",
    contaminationAdviceTwo: "Sanitize tools and surfaces; prevent splash between crops.",
    contaminationAdviceThree: "Harvest and handle food hygienically; wash before eating.",
    sharedRiskDetail: "Shared water and returns can move microorganisms between roots; this differs from food contamination and is not ruled out by this analysis.",
    separateRiskDetail: "Keep tanks, pumps, returns, and tools separate. This reduces one root-to-root route but does not eliminate all food-safety risks.",
    measureLabel: "WHAT WE MEASURE", measureTitle: "System readings",
    measureIntro: "Edit the sample readings; results compare them with your selected crops.",
    waterPH: "Solution pH", nutrientEC: "EC conductivity", solutionTemp: "Solution temperature",
    airTemp: "Air temperature", relativeHumidity: "Relative humidity", lightHours: "Daily photoperiod",
    dissolvedOxygen: "Dissolved oxygen", reservoirLevel: "Reservoir level",
    waterCircuit: "Irrigation circuit", sharedLoop: "Shared recirculating solution",
    separateLoops: "Separate circuits and returns",
    measurementNote: "pH/EC ±0.5 is the reference tolerance, not sensor accuracy. Temperature, humidity, oxygen, and light are guidance; 50–70% humidity and >5 mg/L oxygen are broad references, not diagnoses.",
    navHybrid: "Hybrid system", hybridEyebrow: "WHAT SETS THIS DESIGN APART", hybridTitle: "L-shaped hybrid system",
    hybridIntro: "Monitor vertical towers and the floating-root raft separately: their risks and needs are different.",
    towerTitle: "Vertical towers", raftTitle: "Floating-root raft",
    towerFocus: "Critical point: catch low flow or low reservoir level early to protect plants at the top.",
    raftFocus: "Critical point: maintain dissolved oxygen and verify aeration around the roots.",
    flowRate: "Return flow", towerPumpState: "Recirculation pump", airPumpState: "Air pump",
    demoStateOn: "On · demo", demoStateOff: "Off · demo", towerPumpOff: "Vertical towers: the recirculation pump is off (simulation).",
    raftAirOff: "Floating-root raft: the air pump is off (simulation).", subsystemOk: "In range · demo", subsystemWarning: "Check · demo",
    alertEyebrow: "LOCAL MONITORING", alertsTitle: "Alerts by subsystem", onScreenOnly: "ON SCREEN ONLY",
    alertSummaryOk: "No alerts in the sample readings.", alertSummaryCount: "Alerts requiring review: {count}.", alertLimit: "Thresholds are illustrative and must be validated for each crop and system. These alerts are not sent to a phone or email; that requires a connected notification service.",
    alertInvalid: "{system}: check the {metric} reading.", alertOut: "{system}: {metric} is outside the reference range ({value} {unit}).",
    sendAlertsToSupport: "Send these issues to technical support", supportEyebrow: "AI TECHNICAL SUPPORT",
    supportTitle: "HIDRO TEC specialized support", supportChecking: "CONNECTING…", supportOffline: "AI NOT CONFIGURED",
    supportReady: "AI AVAILABLE", supportUnavailable: "UNAVAILABLE",
    supportIntro: "Ask about hydroponics, crops, pests and diseases, water quality, sensors, electronics, pumps, controls, or this platform.",
    supportQuestion: "What problem do you need help with?", supportPlaceholder: "Describe what you observe, when it started, and what readings you measured.",
    plantPhoto: "Plant photo (optional)", supportImageHint: "To check for possible pests, attach a clear photo of the whole plant and a close-up of the affected area. JPG, PNG, or WebP; max 5 MB.",
    supportConsent: "I agree to send my question and, if attached, the image to Google Gemini for a response. Do not include personal data.",
    supportSend: "Ask AI support", supportSending: "Consulting Gemini…", supportClear: "New question",
    supportDisclaimer: "AI provides initial guidance; it cannot confirm a diagnosis or replace an agronomist, technician, or plant-health specialist.",
    supportImageOnly: "Attach a photo or enter a question before sending.", supportConsentRequired: "Confirm sending to Google Gemini to continue.",
    supportImageType: "Unsupported format. Use a JPG, PNG, or WebP image.", supportImageSize: "The image exceeds the 5 MB limit.",
    supportApiOffline: "Could not connect to support. Start the application with npm start.",
    supportNotConfigured: "The server is running, but GEMINI_API_KEY is not configured.",
    supportRateLimited: "The temporary request limit was reached. Wait a minute and try again.",
    supportServiceError: "Gemini could not complete the request. Try later or contact a specialist.",
    supportResponseError: "No usable response was received. Please try again.",
    supportUserLabel: "You", supportAssistantLabel: "AI technical support",
    supportImageName: "Attached image: {name}", supportAlertContext: "Help me review these system alerts. These are manual/demo readings, not connected sensor data:\n{alerts}\nMy readings: {readings}",
    supportPhotoCaution: "Visual pest or disease identification may be wrong. Confirm symptoms and never apply pesticides based only on AI advice.",
    historyEyebrow: "LOCAL LOG", historyTitle: "History by subsystem", sampleData: "SAMPLE DATA",
    historyChartTitle: "Saved pH history", historyChartDesc: "Chart of readings saved to your account.",
    historyDay1: "Day 1", historyDay4: "Day 4", historyDay7: "Day 7", historyLimit: "Manual readings are stored in the signed-in account; sensors are not connected yet.",
    demoReading: "Demo reading", bothSystems: "Towers + raft", kpiDisclaimer: "Editable demo indicators; these are not readings from connected sensors.",
    cropAlertRange: "Crop used for alert ranges", cropRangeSummary: "References for {crop}: pH {ph}; EC {ec} mS/cm (±0.5); air {temp}. Indicative ranges.",
    lightIntensity: "Zone light intensity", historyPeriod: "Period", lastDay: "Last 24 hours", lastWeek: "Last 7 days", lastCycle: "Cycle · 90 days",
    saveReading: "Save reading", exportCSV: "Export CSV", historyEmpty: "Save readings to start the history",
    historySaved: "Reading saved to your account.", historyStorageError: "Could not save to the account database. Check the server.",
    exportEmpty: "There are no readings or calibrations to export yet.", exportDone: "CSV downloaded.", recordEyebrow: "PROTOTYPE DATA",
    calibrationTitle: "Sensor calibration", subsystem: "Subsystem", sensor: "Sensor", calibrationDate: "Date", responsible: "Responsible person",
    saveCalibration: "Save calibration", calibrationSaved: "Calibration saved to your account.",
    calibrationMissing: "Enter the responsible person's name.",
    localStorageNote: "Calibrations are stored in your account database and included in the CSV.",
    combinedSystem: "Full system (towers + raft)", systemArea: "Total area", systemDensity: "Total density",
    totalInvestment: "Module investment", combinedCostPerPlant: "Module cost per plant",
    nextPhase: "NEXT PHASE", roadmapTitle: "Features that need infrastructure", notImplemented: "NOT IMPLEMENTED",
    roadmapBody: "Phone notifications, a public QR, and real remote control still require hosting, integrations, and a connected controller; they are not presented as active features.",
    comparisonEyebrow: "THE VALUE OF A HYBRID DESIGN", comparisonTitle: "Compare yield and efficiency",
    comparisonIntro: "Edit harvest and resource-use figures to compare both modules. Replace samples with measurements from the same period.",
    growingArea: "Occupied area", plantCount: "Plants", harvestWeight: "Cumulative harvest", waterUse: "Water used",
    energyUse: "Energy used", systemCost: "Module cost", density: "Density", waterPerKg: "Water per kg harvested",
    energyPerKg: "Energy per kg harvested", costPerPlant: "Module cost per plant",
    comparisonLimit: "Do not compare modules across different periods, crops, or growth stages. Labor and operating costs are not included yet.",
    invalidReading: "Check highlighted readings; they must be within the stated limits.",
    readPlant: "Growing requirements for", selectedPlant: "selected. pH", selectPlant: "Select",
    categoryLeafy: "leafy", categoryFruit: "fruit", categoryHerb: "herbs",
    controlOn: "on · simulated", controlOff: "paused · simulated", summaryAnnouncement: "System summary.",
    speechUnavailable: "Voice reading is not available in this browser.", voiceOff: "Voice reading turned off."
  },
  fr: {
    skipLink: "Aller au contenu", workspace: "MON ESPACE", navOverview: "Aperçu", navGuide: "Guide de départ", navPlants: "Cultures",
    navCompatibility: "Associations", navControls: "Commandes", helpTitle: "Première récolte ?",
    helpText: "Commencez avec des plantes faciles à entretenir.", explorePlants: "Voir le guide de départ", profileName: "Mon jardin",
    profilePlan: "Espace personnel", breadcrumbHome: "Mon espace", breadcrumbPage: "Aperçu", demoMode: "Mode démo",
    languageLabel: "Langue", voice: "Écouter", todayLabel: "MERCREDI 7 OCTOBRE", welcome: "Votre jardin, <span>à votre rythme.</span>",
    voiceCloudConsent: "Utiliser la voix Gemini (le texte est envoyé à Google)",
    voiceReady: "La voix utilise les services disponibles sur cet appareil.",
    voiceSpeaking: "Préparation de la voix…", voiceCompleted: "Lecture terminée.",
    voiceCloudRequired: "Aucune voix n’est installée pour cette langue. Activez la voix Gemini puis appuyez de nouveau sur Écouter.",
    voiceCloudUnavailable: "La voix Gemini est indisponible. Vérifiez le serveur et GEMINI_API_KEY.",
    voiceCloudRateLimit: "La limite temporaire de requêtes vocales est atteinte. Attendez une minute et réessayez.",
    voiceCloudError: "Impossible de générer la voix Gemini. Vérifiez la connexion ou réessayez.",
    voicePlaybackError: "Impossible de lire l’audio. Vérifiez la sortie sonore de l’appareil.",
    odamOption: "O’dam · en préparation",
    odamPending: "La traduction et la lecture vocale en O’dam (tepehuano du Sud) sont en préparation ; le contenu reste affiché en français.",
    intro: "Tout ce dont vos plantes ont besoin, au même endroit.", readSummary: "Lire le résumé",
    guideEyebrow: "DE LA GRAINE À LA PREMIÈRE RÉCOLTE", guideTitle: "Votre première plantation, étape par étape",
    guideIntro: "Un parcours pratique pour débuter avec des cultures feuillues et apprendre à observer votre système à votre rythme.",
    guideBeginner: "DÉBUTANT", guideProgress: "Étape {current} sur {total}",
    guideCompleted: "{count} terminées", guideStepLabel: "ÉTAPE", guidePrevious: "← Précédente",
    guideMarkComplete: "Marquer l’étape comme terminée", guideMarkedComplete: "Étape terminée · cliquer pour annuler",
    guideNext: "Étape suivante", guideFinish: "Terminer le guide",
    guideProgressAria: "Progression du guide", guideStepsAria: "Étapes du guide",
    guideStepDone: "Terminée", guideStepPending: "Non terminée", guideAnnouncement: "Étape {current} sur {total} : {title}",
    guideFinishedAnnouncement: "Guide terminé ! Vous pouvez revenir à chaque étape à tout moment.",
    guideDisclaimer: "Les délais et plages dépendent de la variété, du climat, du matériel et des nutriments. Suivez les étiquettes des semences et des nutriments ainsi que les instructions du fabricant ; les mesures du site sont des exemples.",
    guideStep1Title: "Choisir une culture facile",
    guideStep1Body: "Commencez avec quelques plantes feuillues : la laitue est souvent un premier choix accessible. Ajoutez du basilic lorsque vous connaissez le fonctionnement de votre système.",
    guideStep1Check1: "Vérifiez que les semences conviennent à la saison et aux conditions de votre espace.",
    guideStep1Check2: "Commencez par une seule culture et notez la variété et la date du semis.",
    guideStep1Tip: "Comparer les objectifs ? Consultez la fiche de culture dans le catalogue ; ce sont des références, pas une garantie de récolte.",
    guideStep2Title: "Faire germer proprement et régulièrement",
    guideStep2Body: "Utilisez un plateau propre et un support adapté à l’hydroponie. Suivez les indications du sachet pour la profondeur et la température.",
    guideStep2Check1: "Humidifiez le support uniformément ; ne laissez pas les graines immergées.",
    guideStep2Check2: "Notez la variété et la date ; protégez le plateau et vérifiez-le chaque jour.",
    guideStep2Tip: "La germination varie selon les graines. Suivez le sachet et observez les racines et pousses plutôt qu’un jour fixe.",
    guideStep3Title: "Repiquer lorsque les plants sont prêts",
    guideStep3Body: "Attendez des racines visibles et fermes, ainsi que suffisamment de vraies feuilles pour manipuler le plant sans abîmer la tige.",
    guideStep3Check1: "Tenez le plant par son support ou ses feuilles ; ne pincez pas la tige.",
    guideStep3Check2: "Vérifiez que les racines atteignent l’humidité ou le film nutritif du module.",
    guideStep3Tip: "Si les racines sont faibles, le plant flétri ou le support friable, attendez et améliorez les conditions.",
    guideStep4Title: "Préparer et mesurer la solution",
    guideStep4Body: "Utilisez de l’eau et des nutriments conçus pour l’hydroponie. Ajoutez le produit selon son étiquette et mesurez EC et pH avec des instruments calibrés.",
    guideStep4Check1: "Notez la source d’eau, le produit et la quantité indiquée par le fabricant.",
    guideStep4Check2: "Comparez pH et EC à l’objectif de la culture et à la tolérance du fournisseur.",
    guideStep4Tip: "Ne corrigez pas à l’aveugle et ne mélangez pas les concentrés. Procédez progressivement selon les instructions puis mesurez à nouveau.",
    guideStep5Title: "Installer et vérifier chaque module",
    guideStep5Body: "Placez les cultures selon leur taille et leurs besoins. Vérifiez le retour d’eau des tours ; dans le radeau, contrôlez l’aération et le contact des racines avec la solution.",
    guideStep5Check1: "Avant de planter, testez la circulation, les fuites, le niveau du réservoir et la sécurité électrique.",
    guideStep5Check2: "Vérifiez que l’eau ne stagne pas et que les racines ne sèchent pas.",
    guideStep5Tip: "Pour le premier cycle, évitez de mélanger dans un circuit les cultures aux objectifs pH, EC ou climatiques différents.",
    guideStep6Title: "Observer, noter et récolter",
    guideStep6Body: "Inspectez brièvement chaque jour et notez les mesures datées. À la récolte, pesez et indiquez le module pour tirer des enseignements du cycle.",
    guideStep6Check1: "Observez feuilles, racines, débit, niveau et aération ; repérez les changements.",
    guideStep6Check2: "Nettoyez outils et surfaces ; notez la récolte et les ajustements.",
    guideStep6Tip: "En cas d’alerte ou de symptômes persistants, évitez les changements brusques, confirmez la mesure et consultez un spécialiste.",
    guideCropCatalog: "Voir {crop} dans le catalogue",
    guideStepNav: "Aller à l’étape {step} : {title}",
    pitchLabel: "HIDRO TEC · AGRICULTURE HYBRIDE",
    pitchTitle: "Deux méthodes. Une architecture modulaire.",
    pitchBody: "Les tours verticales et les racines flottantes sont réunies dans un système en L, avec une surveillance et des risques différenciés par sous-système.",
    pitchModuleOne: "Tours : débit et niveau", pitchModuleTwo: "Radeau : oxygène et aération",
    pitchExplore: "Explorer l’architecture", pitchTry: "Tester des scénarios",
    pitchDiagramTitle: "Schéma conceptuel du système hybride",
    pitchDiagramDesc: "Tours verticales et radeau à racines flottantes représentés comme modules distincts dans une configuration en L.",
    pitchDiagramCaption: "SCHÉMA CONCEPTUEL · NON À L’ÉCHELLE",
    authKicker: "ESPACE PERSONNEL", authTitle: "Bienvenue dans votre jardin",
    authIntro: "Connectez-vous ou créez un compte pour conserver votre historique séparément.",
    authUsername: "Nom d’utilisateur", authPassword: "Mot de passe", authConfirmPassword: "Confirmer le mot de passe",
    authLogin: "Se connecter", authRegister: "Créer un compte", authGoRegister: "Nouveau ? Créer un compte",
    authGoLogin: "Déjà inscrit ? Se connecter", authLogout: "Se déconnecter",
    authPrivacy: "Votre session est conservée 30 jours sur cet appareil. Le mot de passe est stocké sous forme de hachage sécurisé, jamais en texte lisible. Aucune récupération automatique.",
    authAsideLabel: "DESIGN HYBRIDE · DONNÉES PAR COMPTE", authAsideTitle: "Votre culture, vos données.",
    authAsideBody: "Consultez vos mesures et calibrations dans une base de données distincte.",
    authPasswordHint: "Utilisez au moins 10 caractères.", authUsernameTaken: "Ce nom d’utilisateur est déjà utilisé. Choisissez-en un autre.",
    authUsernameFormat: "Utilisez 3 à 32 lettres, chiffres ou traits de soulignement.",
    authInvalidCredentials: "Nom d’utilisateur ou mot de passe incorrect.", authRateLimit: "Trop de tentatives. Attendez une minute puis réessayez.",
    authPasswordMismatch: "Les mots de passe ne correspondent pas.",
    authServerUnavailable: "Connexion au serveur impossible. Exécutez npm start dans un terminal, puis ouvrez http://127.0.0.1:3000. Laissez le terminal actif.",
    authOpenThroughServer: "Le fichier a été ouvert directement. Pour vous connecter et enregistrer vos données, exécutez npm start dans un terminal et ouvrez http://127.0.0.1:3000.",
    authUnexpectedError: "La connexion a échoué. Veuillez réessayer.",
    authDataLoadError: "Impossible de charger vos données. Vérifiez votre connexion.",
    authLoginSuccess: "Session ouverte.", authRegisterSuccess: "Compte créé. Session ouverte.",
    authSessionExpired: "Votre session a expiré. Veuillez vous reconnecter.",
    accountReadingsLimit: "Ce compte a atteint sa limite d’enregistrements.",
    accountSynced: "Compte · données enregistrées",
    authSaving: "Vérification…",
    scenarioEyebrow: "INTERACTION POUR LE JURY", scenarioTitle: "Tester une condition du système",
    scenarioIntro: "Activez un cas simulé et observez l’évolution du diagnostic de chaque module. Aucun matériel n’est commandé.",
    scenarioStable: "Fonctionnement stable", scenarioFlow: "Débit faible des tours", scenarioOxygen: "Oxygène faible du radeau",
    scenarioStableDetail: "Toutes les valeurs d’exemple sont dans les plages de référence affichées.",
    scenarioFlowDetail: "Le débit de retour des tours baisse à 0,2 L/min : seul le sous-système concerné est signalé.",
    scenarioOxygenDetail: "L’oxygène dissous du radeau baisse à 3,2 mg/L : le tableau le signale même si la pompe est active.",
    scenarioCustomDetail: "Lectures personnalisées : modifiez les champs pour voir l’évolution des alertes par sous-système.",
    scenarioGroup: "Scénarios de démonstration",
    demoNoticeTitle: "Vue de démonstration", demoNoticeBody: "Les capteurs et commandes sont simulés. Connectez un contrôleur compatible pour piloter votre installation.",
    dismiss: "Fermer l’avis", metricPH: "pH de l’eau", ideal: "idéal", phRange: "Plage optimale 5,5–6,5", sampleReading: "Mesure de démonstration",
    metricEC: "Nutriments · EC", ecStatus: "Bon pour vos cultures", metricTemp: "Température extérieure", tempStatus: "Demandez votre position",
    metricLight: "Lumière du jour locale", hoursOf: "/ jour", lightStatus: "Demandez votre position", hoursRemaining: "heures restantes", growTogether: "ELLES POUSSENT ENSEMBLE",
    locationTitle: "Météo locale et lumière du jour", locationPrivacy: "En continuant, le navigateur demandera votre position et transmettra les coordonnées à Open-Meteo pour la météo. Nous ne les conservons pas.",
    locationLimit: "La position ne mesure pas le pH ni l’EC de la solution, ni la température ou la lumière dans la zone de culture. Des capteurs locaux sont nécessaires.",
    weatherSource: "Source météo : Open-Meteo",
    noWeatherData: "Aucune donnée météo",
    locationAction: "Autoriser la position et consulter la météo", locationStatus: "La position n’a pas encore été demandée.",
    locationLoading: "Obtention de la position et consultation d’Open-Meteo…", locationSuccess: "Météo extérieure actualisée : {temp} °C, humidité {humidity} %, durée estimée {daylight} h/jour. Précision de la position ±{accuracy} m. Ce n’est pas une mesure de serre.",
    locationDenied: "L’accès à la position n’a pas été accordé. Vous pouvez modifier l’autorisation dans les paramètres du navigateur.",
    locationUnavailable: "Le navigateur n’a pas pu déterminer votre position. Réessayez ou vérifiez le GPS.",
    locationTimeout: "La demande de position a expiré. Veuillez réessayer.",
    locationUnsupported: "La géolocalisation n’est pas disponible. Ouvrez la page dans un contexte sécurisé (HTTPS ou localhost).",
    weatherError: "Impossible de consulter Open-Meteo. Vérifiez votre connexion puis réessayez.",
    weatherInvalid: "Le service météo n’a pas renvoyé de données utilisables. Veuillez réessayer.",
    externalHumidity: "Humidité extérieure : {humidity} %", sunlightDuration: "{daylight} h de lumière estimée",
    plantsTitle: "Choisir vos cultures", viewAll: "Voir le catalogue", filterAll: "Toutes", filterLeafy: "Feuilles", filterFruit: "Fruits",
    filterHerb: "Aromates", plantFootnote: "Le pH et l’EC sont des objectifs indicatifs ; les besoins varient selon la variété et le stade.",
    smartPairing: "BONNES VOISINES", compatibilityTitle: "Qui pousse bien ensemble ?",
    matchLabel: "compatibles", compatibilityIntro: "Associez des plantes aux besoins en eau et nutriments similaires.",
    pairOne: "Laitue", pairTwo: "Basilic", pairThree: "Tomate", pairFour: "Basilic", and: "et",
    pairOneNote: "Elles partagent un pH similaire et optimisent l’espace.",
    pairTwoNote: "Une bonne association en adaptant les nutriments à chaque stade.",
    compatibilityCaution: "Compatibilité indicative ; tenez compte de l’espace et des variétés.",
    systemLabel: "VOTRE INSTALLATION", controlsTitle: "Commandes", simulatedTag: "SIMULÉ",
    pump: "Pompe à eau", growLight: "Lampe de culture", ventilation: "Ventilation",
    stateOn: "Active · cycle automatique", stateOff: "En pause", controlFeedback: "Changements en mode démo uniquement.",
    footer: "Bien cultiver commence par l’observation.", footerMade: "Cultivez à votre façon",
    plantReady: "En croissance", pH: "pH", ec: "EC", days: "jours", temp: "Temp.", lightValue: "Lumière",
    regionLabel: "Macro-région géographique", stateLabel: "État", anyRegion: "Tout le Mexique", selectState: "Tous les États",
    regionHelp: "Regroupement géographique indicatif, pas une classification climatique. Chaque État présente des climats et altitudes variés.",
    regionalPick: "Affinité régionale", nationalPick: "Culture hydroponique", stateSelectHint: "Choisissez une région et un État pour trier les conseils.",
    toleranceNote: "pH et EC : objectif ±0,5. Température et lumière : plages indicatives, pas la précision du capteur.",
    regionNoroeste: "Nord-Ouest", regionNoreste: "Nord-Est", regionOccidente: "Ouest", regionCentronorte: "Centre-Nord",
    regionCentrosur: "Centre-Sud", regionOriente: "Est", regionSuroeste: "Sud-Ouest", regionSureste: "Sud-Est",
    selectRegion: "Choisir une région", categories: "Filtrer les cultures", countUnit: "cultures",
    mixLabel: "ANALYSE DES CULTURES", mixTitle: "Peuvent-elles partager le circuit ?", selectedLabel: "sélectionnées",
    mixIntro: "Sélectionnez des cultures pour comparer leurs objectifs aux mesures du système.",
    emptySelection: "Aucune culture sélectionnée. Utilisez « Ajouter à l’analyse » sur chaque plante.",
    addToMix: "Ajouter à l’analyse", removeFromMix: "Retirer de l’analyse", noSelectionTitle: "Choisissez une ou plusieurs cultures",
    noSelectionBody: "Ajoutez des cultures du catalogue. Nous comparerons le pH, l’EC, la température et la lumière.",
    feasibleTitle: "Adaptées à un même circuit (selon ces paramètres)", separateTitle: "Ne pas partager la solution nutritive",
    targetsOverlapTitle: "Objectifs compatibles ; vérifiez les mesures",
    readingsNeedAdjustmentTitle: "Objectifs compatibles, mais mesures hors plage",
    oneCropTitle: "Culture individuelle", feasibleBody: "Les plages de référence se chevauchent. Adaptez la conduite au stade et surveillez chaque culture.",
    separateBody: "Au moins un paramètre clé n’a pas de plage commune suffisante ; utilisez des réservoirs séparés.",
    singleBody: "Comparez les mesures du système aux objectifs de cette culture.",
    targetsOverlapBody: "Les objectifs se chevauchent, mais une mesure valide manque ; corrigez-la avant de décider.",
    readingsNeedAdjustmentBody: "Les cultures pourraient partager la solution selon leurs objectifs, mais corrigez les mesures hors plage avant utilisation.",
    currentReadings: "Mesures actuelles", recommendedRange: "Plage commune suggérée",
    statusOk: "Dans la plage", statusOut: "Hors plage", statusNoCommon: "Aucune plage commune",
    sharedRisk: "Risque de transfert par circuit partagé",
    separateRisk: "Des retours séparés réduisent la propagation par l’eau",
    contaminationTitle: "Risque lié à l’eau partagée",
    contaminationBody: "Un circuit recirculant commun peut transporter des agents pathogènes racinaires. Séparer les cultures réduit cette voie sans garantir l’innocuité alimentaire.",
    contaminationAdviceOne: "Utilisez de l’eau potable et évitez les intrants non traités.",
    contaminationAdviceTwo: "Désinfectez outils et surfaces ; évitez les éclaboussures entre cultures.",
    contaminationAdviceThree: "Récoltez et manipulez les aliments proprement ; lavez-les avant consommation.",
    sharedRiskDetail: "L’eau et les retours partagés peuvent déplacer des micro-organismes entre racines ; ce risque diffère de la contamination alimentaire et n’est pas écarté par cette analyse.",
    separateRiskDetail: "Séparez réservoirs, pompes, retours et outils. Cela réduit une voie entre racines sans éliminer tous les risques sanitaires.",
    measureLabel: "CE QUE NOUS MESURONS", measureTitle: "Mesures du système",
    measureIntro: "Modifiez les valeurs d’exemple ; le résultat les compare aux cultures choisies.",
    waterPH: "pH de la solution", nutrientEC: "Conductivité EC", solutionTemp: "Température de solution",
    airTemp: "Température de l’air", relativeHumidity: "Humidité relative", lightHours: "Photopériode quotidienne",
    dissolvedOxygen: "Oxygène dissous", reservoirLevel: "Niveau du réservoir",
    waterCircuit: "Circuit d’irrigation", sharedLoop: "Solution recirculée partagée",
    separateLoops: "Circuits et retours séparés",
    measurementNote: "pH/EC ±0,5 est la tolérance de référence, pas la précision du capteur. Température, humidité, oxygène et lumière sont indicatifs ; 50–70 % d’humidité et >5 mg/L d’oxygène sont des références générales, pas un diagnostic.",
    navHybrid: "Système hybride", hybridEyebrow: "LA PARTICULARITÉ DU DESIGN", hybridTitle: "Système hybride en L",
    hybridIntro: "Surveillez séparément les tours verticales et le radeau à racines flottantes : leurs risques et besoins diffèrent.",
    towerTitle: "Tours verticales", raftTitle: "Radeau à racines flottantes",
    towerFocus: "Point critique : détecter tôt le manque de débit ou un niveau bas pour protéger les plantes en hauteur.",
    raftFocus: "Point critique : maintenir l’oxygène dissous et vérifier l’aération des racines.",
    flowRate: "Débit de retour", towerPumpState: "Pompe de recirculation", airPumpState: "Pompe à air",
    demoStateOn: "Active · démo", demoStateOff: "Arrêtée · démo", towerPumpOff: "Tours verticales : la pompe de recirculation est arrêtée (simulation).",
    raftAirOff: "Radeau à racines flottantes : la pompe à air est arrêtée (simulation).", subsystemOk: "Dans la plage · démo", subsystemWarning: "À vérifier · démo",
    alertEyebrow: "SURVEILLANCE LOCALE", alertsTitle: "Alertes par sous-système", onScreenOnly: "À L’ÉCRAN",
    alertSummaryOk: "Aucune alerte dans les valeurs d’exemple.", alertSummaryCount: "Alertes à vérifier : {count}.", alertLimit: "Les seuils sont indicatifs et doivent être validés pour chaque culture et équipement. Ces alertes ne sont pas envoyées au téléphone ou par courriel ; un service connecté est nécessaire.",
    alertInvalid: "{system} : vérifiez la mesure de {metric}.", alertOut: "{system} : {metric} hors de la plage de référence ({value} {unit}).",
    sendAlertsToSupport: "Envoyer ces erreurs au support technique", supportEyebrow: "ASSISTANCE TECHNIQUE IA",
    supportTitle: "Support spécialisé HIDRO TEC", supportChecking: "CONNEXION…", supportOffline: "IA NON CONFIGURÉE",
    supportReady: "IA DISPONIBLE", supportUnavailable: "INDISPONIBLE",
    supportIntro: "Posez vos questions sur l’hydroponie, les cultures, les ravageurs et maladies, l’eau, les capteurs, l’électronique, les pompes et cette plateforme.",
    supportQuestion: "Quel problème souhaitez-vous résoudre ?", supportPlaceholder: "Décrivez les symptômes, leur apparition et les mesures relevées.",
    plantPhoto: "Photo de la plante (facultatif)", supportImageHint: "Pour examiner d’éventuels ravageurs, joignez une photo nette de la plante et un gros plan de la zone atteinte. JPG, PNG ou WebP ; 5 Mo max.",
    supportConsent: "J’accepte d’envoyer ma question et, le cas échéant, la photo à Google Gemini. N’incluez pas de données personnelles.",
    supportSend: "Consulter l’assistance IA", supportSending: "Consultation de Gemini…", supportClear: "Nouvelle question",
    supportDisclaimer: "L’IA fournit une première orientation ; elle ne confirme pas un diagnostic et ne remplace pas un agronome, technicien ou spécialiste phytosanitaire.",
    supportImageOnly: "Joignez une photo ou écrivez une question avant l’envoi.", supportConsentRequired: "Confirmez l’envoi à Google Gemini pour continuer.",
    supportImageType: "Format non pris en charge. Utilisez une image JPG, PNG ou WebP.", supportImageSize: "L’image dépasse la limite de 5 Mo.",
    supportApiOffline: "Impossible de joindre le serveur d’assistance. Démarrez l’application avec npm start.",
    supportNotConfigured: "Le serveur fonctionne, mais GEMINI_API_KEY n’est pas configurée.",
    supportRateLimited: "La limite temporaire est atteinte. Attendez une minute et réessayez.",
    supportServiceError: "Gemini n’a pas pu traiter la demande. Réessayez plus tard ou contactez un spécialiste.",
    supportResponseError: "Aucune réponse exploitable reçue. Réessayez.",
    supportUserLabel: "Vous", supportAssistantLabel: "Assistance technique IA",
    supportImageName: "Image jointe : {name}", supportAlertContext: "Aidez-moi à examiner ces alertes. Ce sont des mesures saisies/de démonstration, pas des données de capteurs connectés :\n{alerts}\nMes valeurs : {readings}",
    supportPhotoCaution: "L’identification visuelle peut se tromper. Confirmez les symptômes et n’appliquez jamais de pesticide sur la seule base de l’IA.",
    historyEyebrow: "JOURNAL LOCAL", historyTitle: "Historique par sous-système", sampleData: "DONNÉES D’EXEMPLE",
    historyChartTitle: "Historique enregistré du pH", historyChartDesc: "Graphique des mesures enregistrées dans votre compte.",
    historyDay1: "Jour 1", historyDay4: "Jour 4", historyDay7: "Jour 7", historyLimit: "Les mesures manuelles sont enregistrées dans le compte connecté ; les capteurs ne sont pas encore connectés.",
    demoReading: "Mesure de démonstration", bothSystems: "Tours + bassin", kpiDisclaimer: "Indicateurs modifiables de démonstration ; aucune mesure de capteur connecté.",
    cropAlertRange: "Culture pour régler les alertes", cropRangeSummary: "Références {crop} : pH {ph} ; EC {ec} mS/cm (±0,5) ; air {temp}. Plages indicatives.",
    lightIntensity: "Intensité lumineuse par zone", historyPeriod: "Période", lastDay: "Dernières 24 h", lastWeek: "7 derniers jours", lastCycle: "Cycle · 90 jours",
    saveReading: "Enregistrer la mesure", exportCSV: "Exporter CSV", historyEmpty: "Enregistrez des mesures pour créer l’historique",
    historySaved: "Mesure enregistrée dans votre compte.", historyStorageError: "Impossible d’enregistrer dans la base du compte. Vérifiez le serveur.",
    exportEmpty: "Aucune mesure ni calibration à exporter.", exportDone: "CSV téléchargé.", recordEyebrow: "DONNÉES DU PROTOTYPE",
    calibrationTitle: "Calibration des capteurs", subsystem: "Sous-système", sensor: "Capteur", calibrationDate: "Date", responsible: "Responsable",
    saveCalibration: "Enregistrer la calibration", calibrationSaved: "Calibration enregistrée dans votre compte.",
    calibrationMissing: "Saisissez le nom de la personne responsable.",
    localStorageNote: "Les calibrations sont conservées dans la base du compte et incluses dans le CSV.",
    combinedSystem: "Système complet (tours + bassin)", systemArea: "Surface totale", systemDensity: "Densité totale",
    totalInvestment: "Investissement des modules", combinedCostPerPlant: "Coût du module par plante",
    nextPhase: "PHASE SUIVANTE", roadmapTitle: "Fonctions nécessitant une infrastructure", notImplemented: "NON IMPLÉMENTÉ",
    roadmapBody: "Les notifications mobiles, un QR public et le contrôle distant réel nécessitent encore un hébergement, des intégrations et un contrôleur connecté ; ces fonctions ne sont pas présentées comme actives.",
    comparisonEyebrow: "L’INTÉRÊT DU DESIGN HYBRIDE", comparisonTitle: "Comparer rendement et efficacité",
    comparisonIntro: "Modifiez les données de récolte et de consommation pour comparer les deux modules. Utilisez des mesures de la même période.",
    growingArea: "Surface occupée", plantCount: "Plantes", harvestWeight: "Récolte cumulée", waterUse: "Eau consommée",
    energyUse: "Énergie consommée", systemCost: "Coût du module", density: "Densité", waterPerKg: "Eau par kg récolté",
    energyPerKg: "Énergie par kg récolté", costPerPlant: "Coût du module par plante",
    comparisonLimit: "Ne comparez pas des périodes, cultures ou stades différents. La main-d’œuvre et les coûts de fonctionnement ne sont pas encore inclus.",
    invalidReading: "Vérifiez les mesures en surbrillance ; elles doivent respecter les limites indiquées.",
    readPlant: "Besoins de culture de", selectedPlant: "sélectionnée. pH", selectPlant: "Sélectionner",
    categoryLeafy: "feuilles", categoryFruit: "fruits", categoryHerb: "aromates",
    controlOn: "activée · simulation", controlOff: "en pause · simulation", summaryAnnouncement: "Résumé du système.",
    voiceOff: "Lecture vocale désactivée.", speechUnavailable: "La lecture vocale n’est pas disponible dans ce navigateur."
  }
};

const regions = [
  { id: "noroeste", states: ["Baja California", "Baja California Sur", "Sinaloa", "Sonora"] },
  { id: "noreste", states: ["Chihuahua", "Coahuila", "Durango", "Nuevo León", "Tamaulipas"] },
  { id: "occidente", states: ["Colima", "Jalisco", "Michoacán", "Nayarit"] },
  { id: "centronorte", states: ["Aguascalientes", "Guanajuato", "Querétaro", "San Luis Potosí", "Zacatecas"] },
  { id: "centrosur", states: ["Ciudad de México", "Estado de México", "Morelos"] },
  { id: "oriente", states: ["Hidalgo", "Puebla", "Tlaxcala", "Veracruz"] },
  { id: "suroeste", states: ["Chiapas", "Guerrero", "Oaxaca"] },
  { id: "sureste", states: ["Campeche", "Quintana Roo", "Tabasco", "Yucatán"] }
];

const plants = [
  { id: "lettuce", category: "leafy", names: { es: "Lechuga", en: "Lettuce", fr: "Laitue" }, latin: "Lactuca sativa", emoji: "🥬", ph: 6.0, ec: 1.2, temp: "15–22 °C", light: "10–14 h", days: "30–45", regions: ["noroeste", "noreste", "occidente", "centronorte", "centrosur", "oriente"] },
  { id: "arugula", category: "leafy", names: { es: "Arúgula", en: "Arugula", fr: "Roquette" }, latin: "Eruca vesicaria", emoji: "🥬", ph: 6.2, ec: 1.4, temp: "15–22 °C", light: "10–14 h", days: "25–40", regions: ["noroeste", "noreste", "occidente", "centronorte", "centrosur", "oriente"] },
  { id: "spinach", category: "leafy", names: { es: "Espinaca", en: "Spinach", fr: "Épinard" }, latin: "Spinacia oleracea", emoji: "🥬", ph: 6.2, ec: 1.8, temp: "15–22 °C", light: "10–14 h", days: "35–50", regions: ["noreste", "occidente", "centronorte", "centrosur", "oriente"] },
  { id: "chard", category: "leafy", names: { es: "Acelga", en: "Swiss chard", fr: "Blette" }, latin: "Beta vulgaris var. cicla", emoji: "🥬", ph: 6.2, ec: 1.8, temp: "15–24 °C", light: "10–14 h", days: "35–55", regions: ["noroeste", "noreste", "occidente", "centronorte", "centrosur", "oriente", "suroeste"] },
  { id: "watercress", category: "leafy", names: { es: "Berro", en: "Watercress", fr: "Cresson" }, latin: "Nasturtium officinale", emoji: "🌱", ph: 6.5, ec: 1.4, temp: "10–22 °C", light: "10–14 h", days: "30–45", regions: ["occidente", "centrosur", "oriente", "suroeste", "sureste"] },
  { id: "basil", category: "herb", names: { es: "Albahaca", en: "Basil", fr: "Basilic" }, latin: "Ocimum basilicum", emoji: "🌿", ph: 6.0, ec: 1.6, temp: "20–28 °C", light: "12–16 h", days: "28–45", regions: ["noroeste", "occidente", "oriente", "suroeste", "sureste"] },
  { id: "cilantro", category: "herb", names: { es: "Cilantro", en: "Cilantro", fr: "Coriandre" }, latin: "Coriandrum sativum", emoji: "🌿", ph: 6.2, ec: 1.4, temp: "15–22 °C", light: "10–14 h", days: "30–50", regions: ["noroeste", "noreste", "occidente", "centronorte", "centrosur", "oriente", "suroeste"] },
  { id: "parsley", category: "herb", names: { es: "Perejil", en: "Parsley", fr: "Persil" }, latin: "Petroselinum crispum", emoji: "🌿", ph: 6.2, ec: 1.8, temp: "15–22 °C", light: "10–14 h", days: "55–75", regions: ["noroeste", "noreste", "occidente", "centronorte", "centrosur", "oriente"] },
  { id: "epazote", category: "herb", names: { es: "Epazote", en: "Epazote", fr: "Épazote" }, latin: "Dysphania ambrosioides", emoji: "🌿", ph: 6.0, ec: 1.6, temp: "18–28 °C", light: "10–14 h", days: "35–60", regions: ["noroeste", "occidente", "oriente", "suroeste", "sureste"] },
  { id: "mint", category: "herb", names: { es: "Menta", en: "Mint", fr: "Menthe" }, latin: "Mentha spicata", emoji: "🌱", ph: 6.0, ec: 1.6, temp: "18–24 °C", light: "10–14 h", days: "30–45", regions: ["noroeste", "noreste", "occidente", "centronorte", "centrosur", "oriente", "sureste"] },
  { id: "oregano", category: "herb", names: { es: "Orégano", en: "Mexican oregano", fr: "Origan mexicain" }, latin: "Lippia graveolens", emoji: "🌿", ph: 6.2, ec: 1.6, temp: "18–28 °C", light: "10–14 h", days: "45–70", regions: ["noroeste", "noreste", "centronorte", "centrosur", "suroeste"] },
  { id: "chives", category: "herb", names: { es: "Cebollín", en: "Chives", fr: "Ciboulette" }, latin: "Allium schoenoprasum", emoji: "🌱", ph: 6.2, ec: 1.8, temp: "15–24 °C", light: "10–14 h", days: "45–65", regions: ["noreste", "occidente", "centronorte", "centrosur", "oriente"] },
  { id: "tomato", category: "fruit", names: { es: "Jitomate", en: "Tomato", fr: "Tomate" }, latin: "Solanum lycopersicum", emoji: "🍅", ph: 6.0, ec: 2.5, temp: "18–26 °C", light: "12–16 h", days: "65–90", regions: ["noroeste", "noreste", "occidente", "centronorte", "centrosur", "oriente", "suroeste", "sureste"] },
  { id: "cherry-tomato", category: "fruit", names: { es: "Jitomate cherry", en: "Cherry tomato", fr: "Tomate cerise" }, latin: "Solanum lycopersicum var. cerasiforme", emoji: "🍅", ph: 6.0, ec: 2.4, temp: "18–26 °C", light: "12–16 h", days: "55–75", regions: ["noroeste", "noreste", "occidente", "centronorte", "centrosur", "oriente", "suroeste", "sureste"] },
  { id: "cucumber", category: "fruit", names: { es: "Pepino", en: "Cucumber", fr: "Concombre" }, latin: "Cucumis sativus", emoji: "🥒", ph: 6.0, ec: 2.0, temp: "20–28 °C", light: "12–16 h", days: "50–70", regions: ["noroeste", "occidente", "oriente", "suroeste", "sureste"] },
  { id: "jalapeno", category: "fruit", names: { es: "Chile jalapeño", en: "Jalapeño pepper", fr: "Piment jalapeño" }, latin: "Capsicum annuum", emoji: "🌶️", ph: 6.0, ec: 2.4, temp: "20–28 °C", light: "12–16 h", days: "70–100", regions: ["noreste", "oriente", "sureste"] },
  { id: "serrano", category: "fruit", names: { es: "Chile serrano", en: "Serrano pepper", fr: "Piment serrano" }, latin: "Capsicum annuum", emoji: "🌶️", ph: 6.0, ec: 2.4, temp: "20–28 °C", light: "12–16 h", days: "75–100", regions: ["noreste", "centrosur", "oriente", "suroeste"] },
  { id: "poblano", category: "fruit", names: { es: "Chile poblano", en: "Poblano pepper", fr: "Piment poblano" }, latin: "Capsicum annuum", emoji: "🌶️", ph: 6.0, ec: 2.2, temp: "18–26 °C", light: "12–16 h", days: "75–100", regions: ["occidente", "centronorte", "centrosur", "oriente"] },
  { id: "habanero", category: "fruit", names: { es: "Chile habanero", en: "Habanero pepper", fr: "Piment habanero" }, latin: "Capsicum chinense", emoji: "🌶️", ph: 6.0, ec: 2.4, temp: "22–30 °C", light: "12–16 h", days: "90–120", regions: ["oriente", "suroeste", "sureste"] },
  { id: "strawberry", category: "fruit", names: { es: "Fresa", en: "Strawberry", fr: "Fraise" }, latin: "Fragaria × ananassa", emoji: "🍓", ph: 6.0, ec: 1.6, temp: "15–24 °C", light: "10–14 h", days: "60–90", regions: ["noroeste", "occidente", "centronorte", "centrosur"] },
  { id: "zucchini", category: "fruit", names: { es: "Calabacita", en: "Summer squash", fr: "Courgette" }, latin: "Cucurbita pepo", emoji: "🥒", ph: 6.0, ec: 2.0, temp: "18–28 °C", light: "12–16 h", days: "45–65", regions: ["noroeste", "noreste", "occidente", "centronorte", "oriente", "sureste"] },
  { id: "purslane", category: "leafy", names: { es: "Verdolaga", en: "Purslane", fr: "Pourpier" }, latin: "Portulaca oleracea", emoji: "🌱", ph: 6.2, ec: 1.6, temp: "20–30 °C", light: "10–14 h", days: "30–50", regions: ["noroeste", "noreste", "centronorte", "centrosur", "suroeste", "sureste"] }
];

const cropPhotos = {
  lettuce: "1556801712-76c8eb07bbc9",
  arugula: "1576045057995-568f588f82fb",
  spinach: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Spinach_leaves.jpg",
  chard: "1576045057995-568f588f82fb",
  watercress: "1628556270448-4d4e4148e1b1",
  basil: "1618375569909-3c8616cf7733",
  cilantro: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Coriander_Leaves.jpg",
  parsley: "https://upload.wikimedia.org/wikipedia/commons/4/4c/A_carton_of_parsley_leaves_1.jpg",
  epazote: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Dysphania_ambrosioides_NRCS-1.jpg",
  mint: "1628556270448-4d4e4148e1b1",
  oregano: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Mexican_Oregano_%285200441431%29.jpg",
  chives: "https://upload.wikimedia.org/wikipedia/commons/7/74/Allium_schoenoprasum_J1.JPG",
  tomato: "1546094096-0df4bcaaa337",
  "cherry-tomato": "1546094096-0df4bcaaa337",
  cucumber: "1449300079323-02e209d9d3a6",
  jalapeno: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Ripe_jalapeno_pepper.jpg",
  serrano: "https://upload.wikimedia.org/wikipedia/commons/1/15/Serranochilis.jpg",
  poblano: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Poblano_Pepper.jpg",
  habanero: "https://upload.wikimedia.org/wikipedia/commons/1/1d/ARS-habanero.jpg",
  strawberry: "1464965911861-746a04b4bca6",
  zucchini: "https://upload.wikimedia.org/wikipedia/commons/5/51/Courgette_Cucurbita_pepo_2.jpg",
  purslane: "1576045057995-568f588f82fb"
};

let language = "es";
let activeFilter = "all";
let activeRegion = "all";
let activeState = "";
let weatherData = null;
let speechCloudConfigured = false;
let activeDemoScenario = "stable";
let locationState = "idle";
let locationErrorKey = "";
let supportConversation = [];
let supportImage = null;
let supportServiceState = "checking";
let supportStatusTranslationKey = "supportChecking";
let voiceStatusTranslationKey = "voiceReady";
let currentAccount = null;
let accountRecords = { readings: [], calibrations: [] };
let authMode = "login";
let authStatusTranslationKey = "";
let voiceAudioContext = null;
let activeGuideStep = 0;
const completedGuideSteps = new Set();
let activeVoiceSource = null;
let activeVoiceUtterance = null;
let voiceRequestId = 0;
const selectedPlantIds = new Set();

const measurementLimits = {
  ph: [0, 14],
  ec: [0, 10],
  waterTemp: [0, 40],
  airTemp: [0, 50],
  humidity: [0, 100],
  light: [0, 24],
  oxygen: [0, 20],
  level: [0, 100]
};

const readingUnits = {
  ph: "pH",
  ec: "mS/cm",
  waterTemp: "°C",
  airTemp: "°C",
  humidity: "%",
  light: "h",
  oxygen: "mg/L",
  level: "%"
};

const hybridReadingRules = {
  towerPH: { system: "towerTitle", metric: "waterPH", min: 5.5, max: 6.5, unit: "pH" },
  towerEC: { system: "towerTitle", metric: "nutrientEC", min: 1, max: 2.5, unit: "mS/cm" },
  towerTemp: { system: "towerTitle", metric: "solutionTemp", min: 18, max: 22, unit: "°C" },
  towerLevel: { system: "towerTitle", metric: "reservoirLevel", min: 20, max: 100, unit: "%" },
  towerFlow: { system: "towerTitle", metric: "flowRate", min: 0.5, max: 100, unit: "L/min" },
  raftPH: { system: "raftTitle", metric: "waterPH", min: 5.5, max: 6.5, unit: "pH" },
  raftEC: { system: "raftTitle", metric: "nutrientEC", min: 1, max: 2.5, unit: "mS/cm" },
  raftTemp: { system: "raftTitle", metric: "solutionTemp", min: 18, max: 22, unit: "°C" },
  raftLevel: { system: "raftTitle", metric: "reservoirLevel", min: 20, max: 100, unit: "%" },
  raftOxygen: { system: "raftTitle", metric: "dissolvedOxygen", min: 5, max: 20, unit: "mg/L" },
  towerAirTemp: { system: "towerTitle", metric: "airTemp", min: 12, max: 35, unit: "°C", cropTemperature: true },
  towerHumidity: { system: "towerTitle", metric: "relativeHumidity", min: 50, max: 70, unit: "%" },
  towerLight: { system: "towerTitle", metric: "lightIntensity", min: 0, max: 200000, unit: "lux", alert: false },
  raftAirTemp: { system: "raftTitle", metric: "airTemp", min: 12, max: 35, unit: "°C", cropTemperature: true },
  raftHumidity: { system: "raftTitle", metric: "relativeHumidity", min: 50, max: 70, unit: "%" },
  raftLight: { system: "raftTitle", metric: "lightIntensity", min: 0, max: 200000, unit: "lux", alert: false }
};

const localRecordKeys = { readings: "readings", calibrations: "calibrations" };

function translate(key) {
  return translations[language][key] || translations.es[key] || key;
}

function plantPhotoUrl(plant) {
  const photo = cropPhotos[plant.id];
  return photo.startsWith("https://") ? photo : `https://images.unsplash.com/photo-${photo}?auto=format&fit=crop&w=480&h=300&q=82`;
}

function renderPlants() {
  const container = document.querySelector("#plant-list");
  const visiblePlants = activeFilter === "all" ? plants : plants.filter((plant) => plant.category === activeFilter);
  const orderedPlants = activeRegion === "all"
    ? visiblePlants
    : [...visiblePlants].sort((a, b) => Number(b.regions.includes(activeRegion)) - Number(a.regions.includes(activeRegion)));
  document.querySelector("#plant-count").textContent = String(orderedPlants.length).padStart(2, "0");
  document.querySelector("#plant-count-heading").textContent = String(orderedPlants.length).padStart(2, "0");
  container.innerHTML = orderedPlants.map((plant) => `
    <article class="plant-card${selectedPlantIds.has(plant.id) ? " selected" : ""}" data-plant-id="${plant.id}" tabindex="0" role="checkbox" aria-checked="${selectedPlantIds.has(plant.id)}" aria-label="${selectedPlantIds.has(plant.id) ? translate("removeFromMix") : translate("addToMix")}: ${plant.names[language]}, ${translate("pH")} ${formatTarget(plant.ph)}, EC ${formatTarget(plant.ec)} mS/cm">
      <div class="plant-image-wrap">
        <div class="plant-image-fallback" aria-hidden="true">${plant.emoji}</div>
        <img class="plant-image" src="${plantPhotoUrl(plant)}" alt="${plant.names[language]}" loading="lazy" />
        <span class="plant-status"><span class="mini-dot"></span> ${selectedPlantIds.has(plant.id) ? translate("selectedLabel") : activeRegion !== "all" && plant.regions.includes(activeRegion) ? translate("regionalPick") : translate("addToMix")}</span>
      </div>
      <div class="plant-card-body">
        <div class="plant-title-row"><h3>${plant.names[language]}</h3><span class="plant-emoji" aria-hidden="true">${plant.emoji}</span></div>
        <p class="plant-latin">${plant.latin}</p>
        <div class="plant-specs">
          <span class="spec">${translate("pH")}<strong>${formatTarget(plant.ph)}</strong></span>
          <span class="spec">${translate("ec")}<strong>${formatTarget(plant.ec)}</strong></span>
          <span class="spec">${translate("temp")}<strong>${plant.temp}</strong></span>
          <span class="spec">${translate("lightValue")}<strong>${plant.light}</strong></span>
          <span class="spec">⏱<strong>${plant.days} ${translate("days")}</strong></span>
        </div>
      </div>
    </article>`).join("");

  container.querySelectorAll(".plant-card").forEach((card, index) => {
    const announcePlant = () => {
      const plant = orderedPlants[index];
      const selected = selectedPlantIds.has(plant.id);
      if (selected) selectedPlantIds.delete(plant.id);
      else selectedPlantIds.add(plant.id);
      renderPlants();
      renderMixResult();
      const details = `${plant.names[language]} ${selected ? translate("removeFromMix") : translate("addToMix")}. ${translate("pH")} ${formatTarget(plant.ph)}. EC ${formatTarget(plant.ec)} mS/cm.`;
      document.querySelector("#live-region").textContent = details;
      if (voiceEnabled) speak(details);
    };
    card.addEventListener("click", announcePlant);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        announcePlant();
      }
    });
  });
  container.querySelectorAll(".plant-image").forEach((image) => {
    image.addEventListener("error", () => image.closest(".plant-image-wrap").classList.add("image-error"), { once: true });
  });
}

function renderStarterGuide() {
  const total = 6;
  const step = activeGuideStep + 1;
  const completed = completedGuideSteps.has(activeGuideStep);
  const title = translate(`guideStep${step}Title`);
  const crops = activeGuideStep === 0 ? ["lettuce", "basil"] : [];
  document.querySelector("#guide-current-number").textContent = String(step).padStart(2, "0");
  document.querySelector("#guide-step-title").textContent = title;
  document.querySelector("#guide-step-body").textContent = translate(`guideStep${step}Body`);
  document.querySelector("#guide-step-checklist").innerHTML = [1, 2]
    .map((item) => `<li>${translate(`guideStep${step}Check${item}`)}</li>`).join("");
  document.querySelector("#guide-step-tip").textContent = translate(`guideStep${step}Tip`);

  const cropLinks = document.querySelector("#guide-step-crops");
  cropLinks.hidden = crops.length === 0;
  cropLinks.replaceChildren(...crops.map((id) => {
    const plant = plants.find((item) => item.id === id);
    const link = document.createElement("button");
    link.type = "button";
    link.className = "guide-crop-link";
    link.textContent = fillTranslation("guideCropCatalog", { crop: plant.names[language] });
    link.addEventListener("click", () => {
      activeFilter = "all";
      document.querySelectorAll(".filter-chip").forEach((chip) => {
        chip.classList.toggle("selected", chip.dataset.filter === activeFilter);
      });
      renderPlants();
      document.querySelector("#plants").scrollIntoView({ behavior: "smooth", block: "start" });
      const card = [...document.querySelectorAll(".plant-card")].find((item) => item.dataset.plantId === id);
      if (card) card.focus({ preventScroll: true });
    });
    return link;
  }));

  const progressTrack = document.querySelector("#guide-progress-track");
  document.querySelector("#guide-progress-label").textContent = fillTranslation("guideProgress", { current: step, total });
  document.querySelector("#guide-completed-count").textContent = fillTranslation("guideCompleted", { count: completedGuideSteps.size });
  progressTrack.setAttribute("aria-label", translate("guideProgressAria"));
  progressTrack.setAttribute("aria-valuenow", String(completedGuideSteps.size));
  document.querySelector("#guide-step-nav").setAttribute("aria-label", translate("guideStepsAria"));
  document.querySelector("#guide-progress-fill").style.width = `${completedGuideSteps.size / total * 100}%`;
  document.querySelector("#guide-step-nav").replaceChildren(...Array.from({ length: total }, (_, index) => {
    const number = index + 1;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `guide-step-dot${index === activeGuideStep ? " active" : ""}${completedGuideSteps.has(index) ? " completed" : ""}`;
    button.textContent = String(number).padStart(2, "0");
    button.setAttribute("aria-label", fillTranslation("guideStepNav", {
      step: number,
      title: translate(`guideStep${number}Title`)
    }));
    button.setAttribute("aria-current", index === activeGuideStep ? "step" : "false");
    button.setAttribute("aria-pressed", String(index === activeGuideStep));
    button.title = `${translate(`guideStep${number}Title`)} · ${translate(completedGuideSteps.has(index) ? "guideStepDone" : "guideStepPending")}`;
    button.addEventListener("click", () => {
      activeGuideStep = index;
      renderStarterGuide();
    });
    return button;
  }));
  const completeButton = document.querySelector("#guide-complete");
  completeButton.setAttribute("aria-pressed", String(completed));
  document.querySelector("#guide-complete-label").textContent = translate(completed ? "guideMarkedComplete" : "guideMarkComplete");
  document.querySelector("#guide-previous").disabled = activeGuideStep === 0;
  document.querySelector("#guide-next-label").textContent = translate(step === total ? "guideFinish" : "guideNext");
}

function formatTarget(value) {
  return `${new Intl.NumberFormat(language, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(value)} ±${new Intl.NumberFormat(language, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(0.5)}`;
}

function formatNumber(value) {
  return new Intl.NumberFormat(language, { maximumFractionDigits: 1 }).format(value);
}

function readInterval(value) {
  const values = value.match(/[\d.]+/g)?.map(Number);
  return values?.length === 2 ? values : null;
}

function intersectIntervals(intervals) {
  const low = Math.max(...intervals.map(([minimum]) => minimum));
  const high = Math.min(...intervals.map(([, maximum]) => maximum));
  return low <= high ? [low, high] : null;
}

function selectedPlants() {
  return plants.filter((plant) => selectedPlantIds.has(plant.id));
}

function currentReadings() {
  const readings = {};
  for (const input of document.querySelectorAll("[data-reading]")) {
    const key = input.dataset.reading;
    const value = input.valueAsNumber;
    const [minimum, maximum] = measurementLimits[key];
    const isValid = input.value.trim() !== "" && Number.isFinite(value) && value >= minimum && value <= maximum;
    input.setAttribute("aria-invalid", String(!isValid));
    readings[key] = isValid ? value : null;
  }
  return readings;
}

function syncDashboard(readings) {
  syncHybridKpis();
}

function populateCropSelectors() {
  for (const system of ["tower", "raft"]) {
    const select = document.querySelector(`#${system}-crop`);
    const selectedId = select.value || (system === "tower" ? "tomato" : "basil");
    select.replaceChildren(...plants.map((plant) => new Option(plant.names[language], plant.id)));
    select.value = plants.some((plant) => plant.id === selectedId) ? selectedId : (system === "tower" ? "tomato" : "basil");
  }
}

function cropRange(system) {
  const cropId = document.querySelector(`#${system}-crop`).value;
  return plants.find((plant) => plant.id === cropId) || plants[0];
}

function renderCropRangeSummaries() {
  for (const system of ["tower", "raft"]) {
    const crop = cropRange(system);
    const temperature = readInterval(crop.temp);
    document.querySelector(`#${system}-crop-range-help`).textContent = fillTranslation("cropRangeSummary", {
      crop: crop.names[language],
      ph: `${formatNumber(crop.ph - 0.5)}–${formatNumber(crop.ph + 0.5)}`,
      ec: `${formatNumber(crop.ec - 0.5)}–${formatNumber(crop.ec + 0.5)}`,
      temp: temperature ? `${formatNumber(temperature[0])}–${formatNumber(temperature[1])} °C` : crop.temp
    });
  }
}

function effectiveHybridRule(key, rule) {
  const system = key.startsWith("tower") ? "tower" : "raft";
  const crop = cropRange(system);
  if (key.endsWith("PH")) return { ...rule, min: crop.ph - 0.5, max: crop.ph + 0.5 };
  if (key.endsWith("EC")) return { ...rule, min: crop.ec - 0.5, max: crop.ec + 0.5 };
  if (rule.cropTemperature) {
    const range = readInterval(crop.temp);
    if (range) return { ...rule, min: range[0], max: range[1] };
  }
  return rule;
}

function syncHybridKpis() {
  const value = (key) => {
    const input = document.querySelector(`[data-hybrid-reading="${key}"]`);
    return input && input.value.trim() !== "" && Number.isFinite(input.valueAsNumber)
      ? formatNumber(input.valueAsNumber)
      : "—";
  };
  document.querySelector("#kpi-ph").textContent = value("towerPH");
  document.querySelector("#kpi-ec").textContent = value("towerEC");
  document.querySelector("#kpi-water-temp").textContent = value("towerTemp");
  const towerLevel = document.querySelector('[data-hybrid-reading="towerLevel"]').valueAsNumber;
  const raftLevel = document.querySelector('[data-hybrid-reading="raftLevel"]').valueAsNumber;
  document.querySelector("#kpi-level").textContent = Number.isFinite(towerLevel) && Number.isFinite(raftLevel)
    ? formatNumber(Math.min(towerLevel, raftLevel))
    : "—";
  document.querySelector("#kpi-oxygen").textContent = value("raftOxygen");
}

function renderHybridStatus() {
  const alerts = [];
  const systemHasAlerts = { towerTitle: false, raftTitle: false };

  for (const input of document.querySelectorAll("[data-hybrid-reading]")) {
    const key = input.dataset.hybridReading;
    const baseRule = hybridReadingRules[key];
    const rule = effectiveHybridRule(key, baseRule);
    const value = input.valueAsNumber;
    const valid = input.value.trim() !== "" && Number.isFinite(value) && value >= 0 && value <= Number(input.max);
    input.setAttribute("aria-invalid", String(!valid));
    if (!valid) {
      alerts.push(fillTranslation("alertInvalid", {
        system: translate(rule.system),
        metric: translate(rule.metric)
      }));
      systemHasAlerts[rule.system] = true;
      continue;
    }
    if (rule.alert !== false && (value < rule.min || value > rule.max)) {
      alerts.push(fillTranslation("alertOut", {
        system: translate(rule.system),
        metric: translate(rule.metric),
        value: formatNumber(value),
        unit: rule.unit
      }));
      systemHasAlerts[rule.system] = true;
    }
  }

  const towerPumpOn = document.querySelector('[data-subsystem-switch="towerPump"]').getAttribute("aria-checked") === "true";
  const raftAirOn = document.querySelector('[data-subsystem-switch="raftAirPump"]').getAttribute("aria-checked") === "true";
  if (!towerPumpOn) {
    alerts.push(translate("towerPumpOff"));
    systemHasAlerts.towerTitle = true;
  }
  if (!raftAirOn) {
    alerts.push(translate("raftAirOff"));
    systemHasAlerts.raftTitle = true;
  }

  for (const [system, id] of [["towerTitle", "tower-status"], ["raftTitle", "raft-status"]]) {
    const status = document.querySelector(`#${id}`);
    status.textContent = translate(systemHasAlerts[system] ? "subsystemWarning" : "subsystemOk");
    status.classList.toggle("warning", systemHasAlerts[system]);
    status.classList.toggle("healthy", !systemHasAlerts[system]);
  }

  const alertList = document.querySelector("#subsystem-alerts");
  alertList.replaceChildren();
  for (const alert of alerts) {
    const item = document.createElement("li");
    item.textContent = alert;
    alertList.append(item);
  }
  document.querySelector("#alert-summary").textContent = alerts.length
    ? fillTranslation("alertSummaryCount", { count: alerts.length })
    : translate("alertSummaryOk");
  document.querySelector("#support-alerts-button").hidden = alerts.length === 0;
  renderCropRangeSummaries();
  syncHybridKpis();
}

function renderPerformanceComparison() {
  const moduleValues = {};
  for (const module of ["tower", "raft"]) {
    const values = {};
    for (const input of document.querySelectorAll(`[data-performance^="${module}"]`)) {
      const value = input.valueAsNumber;
      const minimum = Number(input.min || 0);
      const valid = input.value.trim() !== "" && Number.isFinite(value) && value >= minimum;
      input.setAttribute("aria-invalid", String(!valid));
      values[input.dataset.performance.slice(module.length).toLowerCase()] = valid ? value : null;
    }

    const results = {
      Density: values.plants !== null && values.area > 0 ? `${formatNumber(values.plants / values.area)} plantas/m²` : "—",
      WaterPerKg: values.water !== null && values.harvest > 0 ? `${formatNumber(values.water / values.harvest)} L/kg` : "—",
      EnergyPerKg: values.energy !== null && values.harvest > 0 ? `${formatNumber(values.energy / values.harvest)} kWh/kg` : "—",
      CostPerPlant: values.cost !== null && values.plants > 0 ? `${formatNumber(values.cost / values.plants)} MXN` : "—"
    };
    for (const [key, value] of Object.entries(results)) {
      document.querySelector(`[data-result="${module}${key}"]`).textContent = value;
    }
    moduleValues[module] = values;
  }
  const sum = (key) => {
    const values = [moduleValues.tower?.[key], moduleValues.raft?.[key]];
    return values.every((value) => Number.isFinite(value)) ? values[0] + values[1] : null;
  };
  const combined = {
    area: sum("area"),
    plants: sum("plants"),
    harvest: sum("harvest"),
    water: sum("water"),
    energy: sum("energy"),
    cost: sum("cost")
  };
  const setTotal = (id, value, digits = 1) => {
    document.querySelector(`#${id}`).textContent = value === null
      ? "—"
      : new Intl.NumberFormat(language, { maximumFractionDigits: digits }).format(value);
  };
  setTotal("combined-harvest", combined.harvest);
  setTotal("combined-water", combined.water);
  setTotal("combined-energy", combined.energy);
  setTotal("combined-area", combined.area);
  setTotal("combined-density", combined.area > 0 && combined.plants !== null ? combined.plants / combined.area : null);
  setTotal("combined-water-per-kg", combined.harvest > 0 && combined.water !== null ? combined.water / combined.harvest : null);
  setTotal("combined-energy-per-kg", combined.harvest > 0 && combined.energy !== null ? combined.energy / combined.harvest : null);
  setTotal("combined-cost", combined.cost);
  setTotal("combined-cost-per-plant", combined.plants > 0 && combined.cost !== null ? combined.cost / combined.plants : null);
}

function readLocalRecords(key) {
  if (!Object.hasOwn(accountRecords, key)) throw new Error("Unknown account record collection.");
  return accountRecords[key];
}

async function saveLocalRecord(key, record) {
  if (!currentAccount || !Object.hasOwn(accountRecords, key)) return false;
  if (accountRecords[key].length >= 3000) return false;
  const nextRecords = [...accountRecords[key], record];
  const nextData = { ...accountRecords, [key]: nextRecords };
  try {
    const response = await fetch("/api/account/data", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(nextData)
    });
    if (response.status === 401) {
      currentAccount = null;
      accountRecords = { readings: [], calibrations: [] };
      setAuthStatus("authSessionExpired");
      updateAccountInterface();
      return false;
    }
    if (!response.ok) throw new Error(`account-data-save-${response.status}`);
    accountRecords = nextData;
    return true;
  } catch (error) {
    console.error("Could not save account data.", error.message);
    return false;
  }
}

function renderHistory() {
  let records;
  try {
    records = readLocalRecords(localRecordKeys.readings);
  } catch (error) {
    console.error("Could not read the local reading history.", error);
    document.querySelector("#history-status").textContent = translate("historyStorageError");
    return;
  }
  const period = document.querySelector("#history-period").value;
  const duration = period === "day" ? 24 * 60 * 60 * 1000 : period === "week" ? 7 * 24 * 60 * 60 * 1000 : 90 * 24 * 60 * 60 * 1000;
  const cutoff = Date.now() - duration;
  const visibleRecords = records
    .filter((record) => Number.isFinite(Date.parse(record.timestamp)) && Date.parse(record.timestamp) >= cutoff)
    .sort((first, second) => Date.parse(first.timestamp) - Date.parse(second.timestamp));
  document.querySelector("#history-count").textContent = String(visibleRecords.length);
  document.querySelector("#history-tower-line").setAttribute("d", historyPath(visibleRecords, "towerPH"));
  document.querySelector("#history-raft-line").setAttribute("d", historyPath(visibleRecords, "raftPH"));
  document.querySelector("#history-empty").style.display = visibleRecords.length ? "none" : "";
}

function historyPath(records, key) {
  const values = records.map((record) => record.readings?.[key]).filter(Number.isFinite);
  if (!values.length) return "";
  return values.map((value, index) => {
    const x = values.length === 1 ? 222 : 34 + index * (376 / (values.length - 1));
    const y = 94 - (Math.min(7, Math.max(5, value)) - 5) * 36;
    return `${index ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ");
}

function performanceSnapshot() {
  return Object.fromEntries([...document.querySelectorAll("[data-performance]")].map((input) => [
    input.dataset.performance,
    input.value.trim() !== "" && Number.isFinite(input.valueAsNumber)
      && input.valueAsNumber >= Number(input.min || 0)
      ? input.valueAsNumber
      : null
  ]));
}

async function saveCurrentReadings() {
  const readings = Object.fromEntries([...document.querySelectorAll("[data-hybrid-reading]")].map((input) => [
    input.dataset.hybridReading,
    input.value.trim() !== "" && Number.isFinite(input.valueAsNumber)
      && input.valueAsNumber >= Number(input.min || 0)
      && input.valueAsNumber <= Number(input.max)
      ? input.valueAsNumber
      : null
  ]));
  const record = {
    timestamp: new Date().toISOString(),
    crops: { tower: cropRange("tower").id, raft: cropRange("raft").id },
    readings,
    performance: performanceSnapshot()
  };
  const status = document.querySelector("#history-status");
  if (!await saveLocalRecord(localRecordKeys.readings, record)) {
    status.textContent = translate(accountRecords.readings.length >= 3000
      ? "accountReadingsLimit"
      : currentAccount ? "historyStorageError" : "authSessionExpired");
    return;
  }
  status.textContent = translate("historySaved");
  renderHistory();
}

function csvCell(value) {
  let text = value === null || value === undefined ? "" : String(value);
  if (/^[\t\r ]*[=+\-@]/.test(text)) text = `'${text}`;
  return `"${text.replaceAll('"', '""')}"`;
}

function exportRecords() {
  let readings;
  let calibrations;
  try {
    readings = readLocalRecords(localRecordKeys.readings);
    calibrations = readLocalRecords(localRecordKeys.calibrations);
  } catch (error) {
    console.error("Could not read local records for CSV export.", error);
    document.querySelector("#history-status").textContent = translate("historyStorageError");
    return;
  }
  if (!readings.length && !calibrations.length) {
    document.querySelector("#history-status").textContent = translate("exportEmpty");
    return;
  }
  const rows = [["type", "timestamp", "subsystem", "crop", "field", "value", "unit", "responsible"]];
  const keyUnits = {
    towerPH: "pH", raftPH: "pH", towerEC: "mS/cm", raftEC: "mS/cm",
    towerTemp: "°C", raftTemp: "°C", towerAirTemp: "°C", raftAirTemp: "°C",
    towerLevel: "%", raftLevel: "%", towerHumidity: "%", raftHumidity: "%",
    towerFlow: "L/min", raftOxygen: "mg/L", towerLight: "lux", raftLight: "lux",
    towerArea: "m²", raftArea: "m²", towerPlants: "plants", raftPlants: "plants",
    towerHarvest: "kg", raftHarvest: "kg", towerWater: "L", raftWater: "L",
    towerEnergy: "kWh", raftEnergy: "kWh", towerCost: "MXN", raftCost: "MXN"
  };
  for (const record of readings) {
    for (const [key, value] of Object.entries(record.readings || {})) {
      const subsystem = key.startsWith("tower") ? "tower" : "raft";
      rows.push(["reading", record.timestamp, subsystem, record.crops?.[subsystem] || "", key, value, keyUnits[key] || "", ""]);
    }
    for (const [key, value] of Object.entries(record.performance || {})) {
      const subsystem = key.startsWith("tower") ? "tower" : "raft";
      rows.push(["performance", record.timestamp, subsystem, record.crops?.[subsystem] || "", key, value, keyUnits[key] || "", ""]);
    }
  }
  for (const record of calibrations) {
    rows.push(["calibration", record.timestamp, record.subsystem, "", record.sensor, record.date, "", record.responsible]);
  }
  const csv = `\uFEFF${rows.map((row) => row.map(csvCell).join(",")).join("\r\n")}`;
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "hidro-futuro-360-registros.csv";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  document.querySelector("#history-status").textContent = translate("exportDone");
}

function addSupportMessage(role, content, imageName = "") {
  const message = document.createElement("article");
  message.className = `support-message ${role === "user" ? "support-message-user" : "support-message-assistant"}`;
  const label = document.createElement("strong");
  label.textContent = translate(role === "user" ? "supportUserLabel" : "supportAssistantLabel");
  const body = document.createElement("p");
  body.textContent = content;
  message.append(label, body);
  if (imageName) {
    const attachment = document.createElement("small");
    attachment.textContent = fillTranslation("supportImageName", { name: imageName });
    message.append(attachment);
  }
  document.querySelector("#support-messages").append(message);
  message.scrollIntoView({ block: "nearest" });
  return message;
}

function supportErrorMessage(errorCode) {
  const keys = {
    ai_not_configured: "supportNotConfigured",
    rate_limited: "supportRateLimited",
    unsupported_image: "supportImageType",
    image_too_large: "supportImageSize",
    payload_too_large: "supportImageSize",
    gemini_unavailable: "supportServiceError",
    invalid_gemini_response: "supportResponseError",
    invalid_request: "supportResponseError"
  };
  return translate(keys[errorCode] || "supportServiceError");
}

async function checkSupportService() {
  const status = document.querySelector("#support-connection");
  try {
    const response = await fetch("/api/health", { cache: "no-store" });
    if (!response.ok) throw new Error("health-check-failed");
    const data = await response.json();
    supportServiceState = data.configured ? "ready" : "offline";
    supportStatusTranslationKey = data.configured ? "supportReady" : "supportOffline";
    status.textContent = translate(supportStatusTranslationKey);
    speechCloudConfigured = Boolean(data.speechConfigured);
    document.querySelector("#voice-cloud-consent").disabled = !speechCloudConfigured;
    status.classList.toggle("support-online", Boolean(data.configured));
    status.classList.toggle("support-offline", !data.configured);
    return Boolean(data.configured);
  } catch (error) {
    console.warn("Technical support service is unavailable.", error.message);
    supportServiceState = "unavailable";
    supportStatusTranslationKey = "supportUnavailable";
    status.textContent = translate(supportStatusTranslationKey);
    status.classList.add("support-offline");
    speechCloudConfigured = false;
    document.querySelector("#voice-cloud-consent").disabled = true;
    return false;
  }
}

function imageToBase64(file) {
  return file.arrayBuffer().then((buffer) => {
    const bytes = new Uint8Array(buffer);
    let binary = "";
    const chunkSize = 0x8000;
    for (let offset = 0; offset < bytes.length; offset += chunkSize) {
      binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
    }
    return btoa(binary);
  });
}

function measuredSupportContext() {
  const values = [...document.querySelectorAll("[data-hybrid-reading]")].map((input) => {
    const rule = hybridReadingRules[input.dataset.hybridReading];
    const system = translate(rule.system);
    return `${system} ${translate(rule.metric)}: ${input.value || "—"} ${rule.unit}`;
  }).join("; ");
  const alerts = [...document.querySelectorAll("#subsystem-alerts li")].map((item) => item.textContent).join("\n");
  return fillTranslation("supportAlertContext", {
    alerts: alerts || translate("alertSummaryOk"),
    readings: values
  });
}

async function submitSupportQuestion(event) {
  event.preventDefault();
  const messageField = document.querySelector("#support-message");
  const status = document.querySelector("#support-status");
  const message = messageField.value.trim();
  if (!message && !supportImage) {
    status.textContent = translate("supportImageOnly");
    messageField.focus();
    return;
  }
  if (!document.querySelector("#support-consent").checked) {
    status.textContent = translate("supportConsentRequired");
    document.querySelector("#support-consent").focus();
    return;
  }
  if (supportServiceState !== "ready") {
    status.textContent = translate(supportServiceState === "offline" ? "supportNotConfigured" : "supportApiOffline");
    return;
  }
  const submitButton = document.querySelector("#support-send");
  submitButton.disabled = true;
  submitButton.textContent = translate("supportSending");
  status.textContent = translate("supportSending");
  let currentImage;
  try {
    if (supportImage) currentImage = {
      mimeType: supportImage.type,
      data: await imageToBase64(supportImage)
    };
    const response = await fetch("/api/support", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        message,
        image: currentImage || null,
        history: supportConversation.slice(-8),
        language
      })
    });
    const result = await response.json();
    if (!response.ok) {
      status.textContent = supportErrorMessage(result.error);
      return;
    }
    const userMessage = message || translate("plantPhoto");
    addSupportMessage("user", userMessage, supportImage?.name || "");
    supportConversation.push({ role: "user", content: userMessage.slice(0, 1500) });
    addSupportMessage("assistant", result.answer);
    supportConversation.push({ role: "assistant", content: result.answer.slice(0, 1500) });
    supportConversation = supportConversation.slice(-12);
    if (currentImage) {
      const caution = document.createElement("p");
      caution.className = "support-photo-caution";
      caution.textContent = translate("supportPhotoCaution");
      document.querySelector("#support-messages").append(caution);
    }
    status.textContent = translate("supportDisclaimer");
    messageField.value = "";
    document.querySelector("#support-image").value = "";
    document.querySelector("#support-image-name").hidden = true;
    supportImage = null;
  } catch (error) {
    console.error("Technical support request failed.", error.message);
    status.textContent = translate("supportApiOffline");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = translate("supportSend");
  }
}

function fillTranslation(key, values) {
  return Object.entries(values).reduce((text, [name, value]) => text.replaceAll(`{${name}}`, value), translate(key));
}

function renderLocationStatus() {
  const status = document.querySelector("#location-status");
  if (locationState === "loading") {
    status.textContent = translate("locationLoading");
    return;
  }
  if (locationState === "error") {
    status.textContent = translate(locationErrorKey);
    return;
  }
  if (locationState === "success" && weatherData) {
    status.textContent = fillTranslation("locationSuccess", {
      temp: formatNumber(weatherData.temperature),
      humidity: formatNumber(weatherData.humidity),
      daylight: formatNumber(weatherData.daylightHours),
      accuracy: formatNumber(weatherData.accuracy)
    });
    return;
  }
  status.textContent = translate("locationStatus");
}

function renderWeatherData() {
  const temperature = document.querySelector("#metric-air-value");
  const humidity = document.querySelector("#weather-humidity");
  const daylight = document.querySelector("#metric-light-value");
  const daylightStatus = document.querySelector("#light-status");
  const temperatureBar = temperature.closest(".metric-card").querySelector(".metric-line span");
  const daylightBar = daylight.closest(".metric-card").querySelector(".metric-line span");
  temperatureBar.style.width = "0";

  if (!weatherData) {
    temperature.textContent = "—";
    humidity.textContent = translate("noWeatherData");
    daylight.textContent = "—";
    daylightStatus.textContent = translate("lightStatus");
    daylightBar.style.width = "0";
    return;
  }

  temperature.textContent = formatNumber(weatherData.temperature);
  humidity.textContent = fillTranslation("externalHumidity", { humidity: formatNumber(weatherData.humidity) });
  daylight.textContent = formatNumber(weatherData.daylightHours);
  daylightStatus.textContent = fillTranslation("sunlightDuration", { daylight: formatNumber(weatherData.daylightHours) });
  daylightBar.style.width = `${Math.min(100, weatherData.daylightHours / 24 * 100)}%`;
}

function renderLocation() {
  renderLocationStatus();
  renderWeatherData();
  const button = document.querySelector("#location-button");
  button.disabled = locationState === "loading";
  button.setAttribute("aria-busy", String(locationState === "loading"));
}

function setLocationError(key) {
  locationState = "error";
  locationErrorKey = key;
  renderLocation();
}

function getLocationErrorKey(error) {
  if (error.code === 1) return "locationDenied";
  if (error.code === 3) return "locationTimeout";
  return "locationUnavailable";
}

async function fetchWeather(latitude, longitude, accuracy) {
  if (!Number.isFinite(latitude) || latitude < -90 || latitude > 90 ||
      !Number.isFinite(longitude) || longitude < -180 || longitude > 180) {
    throw new Error("weather-response-invalid");
  }
  const endpoint = new URL("https://api.open-meteo.com/v1/forecast");
  endpoint.search = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    current: "temperature_2m,relative_humidity_2m",
    daily: "daylight_duration",
    forecast_days: "1",
    timezone: "auto"
  });

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  let response;
  try {
    response = await fetch(endpoint, { signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
  if (!response.ok) throw new Error("weather-request-failed");
  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error("weather-response-invalid");
  }
  const temperature = data?.current?.temperature_2m;
  const humidity = data?.current?.relative_humidity_2m;
  const daylightSeconds = data?.daily?.daylight_duration?.[0];
  if (!Number.isFinite(temperature) || temperature < -90 || temperature > 60 ||
      !Number.isFinite(humidity) ||
      humidity < 0 || humidity > 100 || !Number.isFinite(daylightSeconds) ||
      daylightSeconds <= 0 || daylightSeconds > 86400) {
    throw new Error("weather-response-invalid");
  }

  weatherData = {
    temperature,
    humidity,
    daylightHours: daylightSeconds / 3600,
    accuracy
  };
  locationState = "success";
  locationErrorKey = "";
  renderLocation();
}

document.querySelector("#location-button").addEventListener("click", () => {
  if (!navigator.geolocation) {
    setLocationError("locationUnsupported");
    return;
  }

  locationState = "loading";
  locationErrorKey = "";
  weatherData = null;
  renderLocation();
  try {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        fetchWeather(coords.latitude, coords.longitude, coords.accuracy).catch((error) => {
          setLocationError(error.message === "weather-response-invalid" ? "weatherInvalid" : "weatherError");
        });
      },
      (error) => setLocationError(getLocationErrorKey(error)),
      { enableHighAccuracy: false, timeout: 15000, maximumAge: 30000 }
    );
  } catch {
    setLocationError("locationUnsupported");
  }
});

function evaluateMix() {
  const crops = selectedPlants();
  const readings = currentReadings();
  const ranges = crops.length ? {
    ph: intersectIntervals(crops.map((plant) => [plant.ph - 0.5, plant.ph + 0.5])),
    ec: intersectIntervals(crops.map((plant) => [plant.ec - 0.5, plant.ec + 0.5])),
    airTemp: intersectIntervals(crops.map((plant) => readInterval(plant.temp))),
    light: intersectIntervals(crops.map((plant) => readInterval(plant.light)))
  } : {};
  const canShare = crops.length > 0 && Object.values(ranges).every(Boolean);
  const details = ["ph", "ec", "airTemp", "light"].map((key) => {
    const range = ranges[key];
    const reading = readings[key];
    const overlaps = Boolean(range);
    const isWithinRange = overlaps && reading !== null && reading >= range[0] && reading <= range[1];
    return { key, range, reading, overlaps, isWithinRange };
  });
  const allReadingsValid = Object.values(readings).every((reading) => reading !== null);
  const waterTempOk = readings.waterTemp !== null && readings.waterTemp >= 18 && readings.waterTemp <= 22;
  const humidityOk = readings.humidity !== null && readings.humidity >= 50 && readings.humidity <= 70;
  const oxygenOk = readings.oxygen !== null && readings.oxygen > 5;
  const readingsFit = details.every((item) => item.isWithinRange) && waterTempOk && humidityOk && oxygenOk;
  return { crops, readings, ranges, canShare, details, allReadingsValid, readingsFit, waterTempOk, humidityOk, oxygenOk };
}

function renderMixResult() {
  const result = evaluateMix();
  syncDashboard(result.readings);
  const list = document.querySelector("#selected-plants");
  const output = document.querySelector("#mix-result");
  const details = document.querySelector("#mix-details");
  const count = document.querySelector("#selection-count");
  const loopType = document.querySelector("#loop-type").value;
  count.innerHTML = `${result.crops.length} <span>${translate("selectedLabel")}</span>`;
  list.replaceChildren();

  if (!result.crops.length) {
    const empty = document.createElement("p");
    empty.className = "empty-selection";
    empty.textContent = translate("emptySelection");
    list.append(empty);
    output.className = "mix-result";
    output.innerHTML = `<strong>${translate("noSelectionTitle")}</strong><p>${translate("noSelectionBody")}</p>`;
    details.replaceChildren();
    return;
  }

  for (const plant of result.crops) {
    const chip = document.createElement("span");
    chip.className = "selected-crop";
    const name = document.createElement("span");
    name.textContent = plant.names[language];
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "×";
    remove.setAttribute("aria-label", `${translate("removeFromMix")}: ${plant.names[language]}`);
    remove.addEventListener("click", () => {
      selectedPlantIds.delete(plant.id);
      renderPlants();
      renderMixResult();
    });
    chip.append(name, remove);
    list.append(chip);
  }

  const title = result.crops.length === 1
    ? translate("oneCropTitle")
    : !result.canShare ? translate("separateTitle")
      : !result.allReadingsValid ? translate("targetsOverlapTitle")
        : !result.readingsFit ? translate("readingsNeedAdjustmentTitle")
          : translate("feasibleTitle");
  const message = result.crops.length === 1
    ? translate("singleBody")
    : !result.canShare ? translate("separateBody")
      : !result.allReadingsValid ? translate("targetsOverlapBody")
        : !result.readingsFit ? translate("readingsNeedAdjustmentBody")
          : translate("feasibleBody");
  const statusClass = !result.canShare || (result.allReadingsValid && !result.readingsFit) ? "not-feasible" : "feasible";
  output.className = `mix-result ${statusClass}`;
  const groupNames = result.crops.map((plant) => plant.names[language]).join(", ");
  const location = activeState ? ` · ${activeState}` : activeRegion !== "all" ? ` · ${translate(`region${activeRegion[0].toUpperCase()}${activeRegion.slice(1)}`)}` : "";
  const invalidReadings = !result.allReadingsValid;
  output.innerHTML = `<strong>${title}</strong><p>${message}</p><span class="analysis-crops">${groupNames}${location}</span>`;

  const listItems = result.details.map(({ key, range, reading, overlaps, isWithinRange }) => {
    const rangeText = overlaps ? `${formatNumber(range[0])}–${formatNumber(range[1])} ${readingUnits[key]}` : translate("statusNoCommon");
    const readingText = reading === null ? "—" : `${formatNumber(reading)} ${readingUnits[key]}`;
    const status = !overlaps ? translate("statusNoCommon") : reading === null ? translate("invalidReading") : isWithinRange ? translate("statusOk") : translate("statusOut");
    const statusClass = !overlaps || (reading !== null && !isWithinRange) ? "out" : reading === null ? "pending" : "ok";
    return `<li class="${statusClass}"><span>${translate(key === "ph" ? "waterPH" : key === "ec" ? "nutrientEC" : key === "airTemp" ? "airTemp" : "lightHours")}</span><strong>${readingText}</strong><small>${translate("recommendedRange")}: ${rangeText} · ${status}</small></li>`;
  }).join("");
  const solutionTemp = result.readings.waterTemp;
  const humidity = result.readings.humidity;
  const waterTempOk = result.waterTempOk;
  const humidityOk = result.humidityOk;
  const sharedCircuit = loopType === "shared";
  details.innerHTML = `
    <h3>${translate("currentReadings")}</h3>
    <ul class="parameter-list">${listItems}</ul>
    <div class="environment-checks">
      <span class="${waterTempOk ? "ok" : "out"}">${translate("solutionTemp")}: ${solutionTemp === null ? "—" : `${formatNumber(solutionTemp)} °C`} · ${waterTempOk ? translate("statusOk") : translate("statusOut")} (18–22 °C*)</span>
      <span class="${humidityOk ? "ok" : "out"}">${translate("relativeHumidity")}: ${humidity === null ? "—" : `${formatNumber(humidity)}%`} · ${humidityOk ? translate("statusOk") : translate("statusOut")} (50–70%*)</span>
      <span class="${result.oxygenOk ? "ok" : "out"}">${translate("dissolvedOxygen")}: ${result.readings.oxygen === null ? "—" : `${formatNumber(result.readings.oxygen)} mg/L`} · ${result.oxygenOk ? translate("statusOk") : translate("statusOut")} (&gt;5 mg/L*)</span>
      <span>${translate("reservoirLevel")}: ${result.readings.level === null ? "—" : `${formatNumber(result.readings.level)}%`}</span>
    </div>
    <p class="risk-line ${sharedCircuit ? "risk-high" : "risk-reduced"}"><strong>${sharedCircuit ? translate("sharedRisk") : translate("separateRisk")}</strong><span>${sharedCircuit ? translate("sharedRiskDetail") : translate("separateRiskDetail")}</span></p>
    ${invalidReadings ? `<p class="invalid-reading">${translate("invalidReading")}</p>` : ""}
    <p class="reference-note">* ${translate("measurementNote")}</p>`;
}

function initializeRegions() {
  const regionSelect = document.querySelector("#region-select");
  const stateSelect = document.querySelector("#state-select");
  for (const region of regions) {
    const option = document.createElement("option");
    option.value = region.id;
    option.textContent = translate(`region${region.id[0].toUpperCase()}${region.id.slice(1)}`);
    regionSelect.append(option);
  }
  stateSelect.disabled = true;
}

function updateStates() {
  const region = regions.find((item) => item.id === activeRegion);
  const stateSelect = document.querySelector("#state-select");
  stateSelect.replaceChildren();
  const allStates = document.createElement("option");
  allStates.value = "";
  allStates.textContent = translate("selectState");
  stateSelect.append(allStates);
  for (const state of region ? region.states : []) {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateSelect.append(option);
  }
  stateSelect.disabled = !region;
  stateSelect.value = activeState;
}

function setAuthStatus(key) {
  authStatusTranslationKey = key;
  document.querySelector("#auth-status").textContent = key ? translate(key) : "";
}

function serverAccessHelpKey() {
  return window.location.protocol === "file:" ? "authOpenThroughServer" : "authServerUnavailable";
}

function updateAuthMode() {
  const registering = authMode === "register";
  const confirmField = document.querySelector("#auth-confirm-field");
  confirmField.hidden = !registering;
  confirmField.querySelector("input").required = registering;
  document.querySelector("#auth-password").autocomplete = registering ? "new-password" : "current-password";
  document.querySelector("#auth-submit").dataset.i18n = registering ? "authRegister" : "authLogin";
  document.querySelector("#auth-mode-switch").dataset.i18n = registering ? "authGoLogin" : "authGoRegister";
  updateTranslations();
}

function updateAccountInterface() {
  const authenticated = Boolean(currentAccount);
  document.querySelector("#app-shell").inert = !authenticated;
  document.querySelector("#auth-screen").hidden = authenticated;
  document.querySelector("#account-badge").hidden = !authenticated;
  document.querySelector("#logout-button").hidden = !authenticated;
  if (authenticated) {
    document.querySelector("#account-badge-name").textContent = currentAccount.username;
    document.querySelector("#profile-name").textContent = currentAccount.username;
    document.querySelector("#profile-username").textContent = translate("accountSynced");
    document.querySelector(".avatar").textContent = currentAccount.username[0].toUpperCase();
  }
}

async function loadAccountData() {
  const response = await fetch("/api/account/data", { cache: "no-store" });
  if (response.status === 401) throw new Error("authentication_required");
  if (!response.ok) throw new Error("account_data_unavailable");
  const data = await response.json();
  if (!Array.isArray(data.readings) || !Array.isArray(data.calibrations)) {
    throw new Error("invalid_account_data");
  }
  accountRecords = { readings: data.readings, calibrations: data.calibrations };
}

async function openAccount(user, successMessage = "") {
  await loadAccountData();
  currentAccount = user;
  setAuthStatus(successMessage);
  updateAccountInterface();
  updateTranslations();
  renderHistory();
}

async function restoreAccountSession() {
  try {
    const response = await fetch("/api/auth/session", { cache: "no-store" });
    if (!response.ok) throw new Error("session_check_failed");
    const session = await response.json();
    if (session.authenticated) await openAccount(session.user);
  } catch (error) {
    console.error("Could not restore the account session.", error.message);
    setAuthStatus(serverAccessHelpKey());
  }
}

document.querySelector("#auth-mode-switch").addEventListener("click", () => {
  authMode = authMode === "login" ? "register" : "login";
  setAuthStatus("");
  updateAuthMode();
  document.querySelector("#auth-username").focus();
});

document.querySelector("#auth-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const usernameField = document.querySelector("#auth-username");
  const passwordField = document.querySelector("#auth-password");
  const username = usernameField.value.trim();
  const password = passwordField.value;
  if (!/^[A-Za-z0-9_]{3,32}$/.test(username)) {
    setAuthStatus("authUsernameFormat");
    usernameField.focus();
    return;
  }
  if (Array.from(password).length < 10) {
    setAuthStatus("authPasswordHint");
    passwordField.focus();
    return;
  }
  if (authMode === "register" && password !== document.querySelector("#auth-confirm-password").value) {
    setAuthStatus("authPasswordMismatch");
    document.querySelector("#auth-confirm-password").focus();
    return;
  }

  const submitButton = document.querySelector("#auth-submit");
  submitButton.disabled = true;
  setAuthStatus("authSaving");
  try {
    const response = await fetch(`/api/auth/${authMode}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    let result;
    try {
      result = await response.json();
    } catch {
      throw new Error("unexpected");
    }
    if (!response.ok) {
      const errorKeys = {
        username_unavailable: "authUsernameTaken",
        invalid_credentials: "authInvalidCredentials",
        invalid_credentials_format: "authPasswordHint",
        rate_limited: "authRateLimit"
      };
      setAuthStatus(errorKeys[result.error] || "authUnexpectedError");
      return;
    }
    await openAccount(result.user, authMode === "register" ? "authRegisterSuccess" : "authLoginSuccess");
    document.querySelector("#auth-form").reset();
    authMode = "login";
    updateAuthMode();
  } catch (error) {
    console.error("Account sign-in or registration failed.", error.message);
    setAuthStatus(error.message === "authentication_required" || error.message === "account_data_unavailable"
      ? "authDataLoadError"
      : error.message === "Failed to fetch" || error instanceof TypeError
        ? serverAccessHelpKey()
        : "authUnexpectedError");
  } finally {
    submitButton.disabled = false;
  }
});

document.querySelector("#logout-button").addEventListener("click", async () => {
  const button = document.querySelector("#logout-button");
  button.disabled = true;
  try {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({})
    });
    if (!response.ok) throw new Error("logout_failed");
    currentAccount = null;
    accountRecords = { readings: [], calibrations: [] };
    document.querySelector("#auth-form").reset();
    authMode = "login";
    setAuthStatus("");
    updateAuthMode();
    updateAccountInterface();
    document.querySelector("#auth-username").focus();
  } catch (error) {
    console.error("Could not close the account session.", error.message);
    document.querySelector("#history-status").textContent = translate("authUnexpectedError");
  } finally {
    button.disabled = false;
  }
});

function updateTranslations() {
  document.documentElement.lang = language;
  document.querySelector("#language-select").setAttribute("aria-label", translate("languageLabel"));
  document.querySelector("#auth-language-select").value = language;
  document.querySelector("#auth-submit").dataset.i18n = authMode === "register" ? "authRegister" : "authLogin";
  document.querySelector("#auth-mode-switch").dataset.i18n = authMode === "register" ? "authGoLogin" : "authGoRegister";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translate(element.dataset.i18n);
    if (value.includes("<span>")) element.innerHTML = value;
    else element.textContent = value;
  });
  document.querySelector("#support-connection").textContent = translate(supportStatusTranslationKey);
  document.querySelector("#voice-status").textContent = translate(voiceStatusTranslationKey);
  document.querySelector("#auth-status").textContent = authStatusTranslationKey ? translate(authStatusTranslationKey) : "";
  document.querySelector("#scenario-feedback").textContent = translate(activeDemoScenario
    ? { stable: "scenarioStableDetail", flow: "scenarioFlowDetail", oxygen: "scenarioOxygenDetail" }[activeDemoScenario]
    : "scenarioCustomDetail");
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nAria));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", translate(element.dataset.i18nPlaceholder));
  });
  for (const input of document.querySelectorAll("[data-reading]")) {
    input.setAttribute("aria-label", translate(input.dataset.reading === "ph" ? "waterPH" : input.dataset.reading === "ec" ? "nutrientEC" : input.dataset.reading === "waterTemp" ? "solutionTemp" : input.dataset.reading === "airTemp" ? "airTemp" : input.dataset.reading === "humidity" ? "relativeHumidity" : input.dataset.reading === "oxygen" ? "dissolvedOxygen" : input.dataset.reading === "level" ? "reservoirLevel" : "lightHours"));
  }
  const regionSelect = document.querySelector("#region-select");
  const selectedRegion = regionSelect.value;
  regionSelect.replaceChildren(new Option(translate("anyRegion"), "all"));
  for (const region of regions) {
    regionSelect.add(new Option(translate(`region${region.id[0].toUpperCase()}${region.id.slice(1)}`), region.id));
  }
  regionSelect.value = selectedRegion || activeRegion;
  updateStates();
  document.querySelectorAll(".toggle-button").forEach((button) => {
    button.setAttribute("aria-label", translate(button.dataset.control === "pump" ? "pump" : button.dataset.control === "light" ? "growLight" : "ventilation"));
    const state = document.querySelector(`#${button.dataset.control}-state`);
    state.textContent = button.getAttribute("aria-checked") === "true" ? translate("controlOn") : translate("controlOff");
  });
  document.querySelectorAll(".subsystem-switch").forEach((button) => {
    const isOn = button.getAttribute("aria-checked") === "true";
    button.textContent = translate(isOn ? "demoStateOn" : "demoStateOff");
    button.setAttribute("aria-label", `${translate(button.dataset.subsystemSwitch === "towerPump" ? "towerPumpState" : "airPumpState")}: ${button.textContent}`);
  });
  const loopSelect = document.querySelector("#loop-type");
  const loopValue = loopSelect.value || "shared";
  loopSelect.replaceChildren(
    new Option(translate("sharedLoop"), "shared"),
    new Option(translate("separateLoops"), "separate")
  );
  loopSelect.value = loopValue;
  populateCropSelectors();
  renderPlants();
  renderStarterGuide();
  renderMixResult();
  renderLocation();
  renderHybridStatus();
  renderPerformanceComparison();
  renderHistory();
  updateAccountInterface();
}

function setVoiceStatus(key) {
  voiceStatusTranslationKey = key;
  document.querySelector("#voice-status").textContent = translate(key);
  document.querySelector("#live-region").textContent = translate(key);
}

function finishVoicePlayback() {
  document.querySelector("#voice-button").setAttribute("aria-pressed", "false");
  activeVoiceSource = null;
  activeVoiceUtterance = null;
  setVoiceStatus("voiceCompleted");
}

function stopVoicePlayback() {
  voiceRequestId += 1;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  if (activeVoiceSource) {
    activeVoiceSource.onended = null;
    activeVoiceSource.stop();
  }
  activeVoiceSource = null;
  activeVoiceUtterance = null;
  document.querySelector("#voice-button").setAttribute("aria-pressed", "false");
  setVoiceStatus("voiceOff");
}

function findDeviceVoice(locale) {
  const voices = window.speechSynthesis.getVoices();
  const languageTag = locale.toLowerCase();
  const languageCode = languageTag.split("-")[0];
  return voices.find((voice) => voice.lang.toLowerCase() === languageTag)
    || voices.find((voice) => voice.lang.toLowerCase().startsWith(`${languageCode}-`))
    || voices.find((voice) => voice.lang.toLowerCase() === languageCode);
}

function waitForDeviceVoices(timeout = 700) {
  if (!("speechSynthesis" in window)) return Promise.resolve([]);
  const current = window.speechSynthesis.getVoices();
  if (current.length) return Promise.resolve(current);
  return new Promise((resolve) => {
    let completed = false;
    const finish = () => {
      if (completed) return;
      completed = true;
      clearTimeout(timer);
      window.speechSynthesis.removeEventListener("voiceschanged", finish);
      resolve(window.speechSynthesis.getVoices());
    };
    const timer = setTimeout(finish, timeout);
    window.speechSynthesis.addEventListener("voiceschanged", finish);
    window.speechSynthesis.getVoices();
  });
}

async function speakWithGemini(text, locale, requestId) {
  if (!voiceAudioContext) {
    voiceAudioContext = new AudioContext();
  }
  await voiceAudioContext.resume();
  const response = await fetch("/api/speech", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ text, language: locale })
  });
  let result;
  try {
    result = await response.json();
  } catch {
    throw new Error("speech_unavailable");
  }
  if (!response.ok) throw new Error(result.error || "speech_unavailable");
  if (result.mimeType !== "audio/wav" || typeof result.data !== "string") {
    throw new Error("invalid_speech_response");
  }
  if (requestId !== voiceRequestId) return;
  const binary = atob(result.data);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  let audioBuffer;
  try {
    audioBuffer = await voiceAudioContext.decodeAudioData(bytes.buffer);
  } catch {
    throw new Error("speech_playback_error");
  }
  if (requestId !== voiceRequestId) return;
  const source = voiceAudioContext.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(voiceAudioContext.destination);
  source.onended = finishVoicePlayback;
  activeVoiceSource = source;
  source.start();
}

async function speak(text) {
  const requestId = ++voiceRequestId;
  const locale = { es: "es-MX", en: "en-US", fr: "fr-FR" }[language];
  const useGemini = document.querySelector("#voice-cloud-consent").checked;
  document.querySelector("#voice-button").setAttribute("aria-pressed", "true");
  setVoiceStatus("voiceSpeaking");

  if (useGemini) {
    try {
      await speakWithGemini(text, locale, requestId);
      return;
    } catch (error) {
      console.error("Gemini speech generation failed.", error.message);
      if (requestId !== voiceRequestId) return;
      document.querySelector("#voice-button").setAttribute("aria-pressed", "false");
      const errorKey = error.message === "ai_not_configured"
        ? "voiceCloudUnavailable"
        : error.message === "rate_limited"
          ? "voiceCloudRateLimit"
          : error.message === "speech_playback_error"
            ? "voicePlaybackError"
            : "voiceCloudError";
      setVoiceStatus(errorKey);
      return;
    }
  }

  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    document.querySelector("#voice-button").setAttribute("aria-pressed", "false");
    setVoiceStatus("speechUnavailable");
    return;
  }
  await waitForDeviceVoices();
  if (requestId !== voiceRequestId) return;
  const voice = findDeviceVoice(locale);
  if (!voice) {
    document.querySelector("#voice-button").setAttribute("aria-pressed", "false");
    setVoiceStatus(speechCloudConfigured ? "voiceCloudRequired" : "voiceCloudUnavailable");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voice;
  utterance.lang = voice.lang || locale;
  utterance.rate = 0.92;
  utterance.onend = finishVoicePlayback;
  utterance.onerror = (event) => {
    if (event.error === "canceled" || event.error === "interrupted") return;
    document.querySelector("#voice-button").setAttribute("aria-pressed", "false");
    setVoiceStatus("speechUnavailable");
  };
  activeVoiceUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

document.querySelector("#language-select").addEventListener("change", (event) => {
  const notice = document.querySelector("#language-status");
  if (event.target.value === "stp") {
    notice.hidden = false;
    notice.textContent = translate("odamPending");
    document.querySelector("#live-region").textContent = notice.textContent;
    return;
  }
  notice.hidden = true;
  language = event.target.value;
  updateTranslations();
});

document.querySelector("#auth-language-select").addEventListener("change", (event) => {
  language = event.currentTarget.value;
  document.querySelector("#language-select").value = language;
  document.querySelector("#language-status").hidden = true;
  updateTranslations();
});

document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.toggle("selected", chip === button));
    renderPlants();
  });
});

document.querySelector("#region-select").addEventListener("change", (event) => {
  activeRegion = event.target.value;
  activeState = "";
  updateStates();
  renderPlants();
  renderMixResult();
});

document.querySelector("#state-select").addEventListener("change", (event) => {
  activeState = event.target.value;
  renderPlants();
  renderMixResult();
});

document.querySelectorAll("[data-reading]").forEach((input) => {
  input.addEventListener("input", renderMixResult);
  input.addEventListener("change", renderMixResult);
});

document.querySelectorAll("[data-hybrid-reading]").forEach((input) => {
  input.addEventListener("input", () => {
    clearDemoScenarioSelection();
    renderHybridStatus();
  });
  input.addEventListener("change", () => {
    clearDemoScenarioSelection();
    renderHybridStatus();
  });
});

document.querySelectorAll("#tower-crop, #raft-crop").forEach((select) => {
  select.addEventListener("change", renderHybridStatus);
});

document.querySelectorAll("[data-performance]").forEach((input) => {
  input.addEventListener("input", renderPerformanceComparison);
  input.addEventListener("change", renderPerformanceComparison);
});

document.querySelector("#record-readings").addEventListener("click", saveCurrentReadings);
document.querySelector("#export-csv").addEventListener("click", exportRecords);
document.querySelector("#history-period").addEventListener("change", renderHistory);
document.querySelector("#support-form").addEventListener("submit", submitSupportQuestion);
document.querySelector("#support-image").addEventListener("change", (event) => {
  const file = event.currentTarget.files[0];
  const status = document.querySelector("#support-status");
  const filename = document.querySelector("#support-image-name");
  if (!file) {
    supportImage = null;
    filename.hidden = true;
    return;
  }
  if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
    supportImage = null;
    event.currentTarget.value = "";
    status.textContent = translate("supportImageType");
    filename.hidden = true;
    return;
  }
  if (file.size > 5 * 1024 * 1024) {
    supportImage = null;
    event.currentTarget.value = "";
    status.textContent = translate("supportImageSize");
    filename.hidden = true;
    return;
  }
  supportImage = file;
  filename.textContent = fillTranslation("supportImageName", { name: file.name });
  filename.hidden = false;
});

document.querySelector("#support-alerts-button").addEventListener("click", () => {
  document.querySelector("#support-message").value = measuredSupportContext();
  document.querySelector("#technical-support").scrollIntoView({ behavior: "smooth" });
  document.querySelector("#support-message").focus({ preventScroll: true });
});

document.querySelector("#support-clear").addEventListener("click", () => {
  supportConversation = [];
  document.querySelector("#support-messages").replaceChildren();
  document.querySelector("#support-message").value = "";
  document.querySelector("#support-consent").checked = false;
  document.querySelector("#support-image").value = "";
  document.querySelector("#support-image-name").hidden = true;
  supportImage = null;
  document.querySelector("#support-status").textContent = translate("supportDisclaimer");
});

const calibrationDate = document.querySelector('#calibration-form [name="date"]');
const localToday = new Date();
calibrationDate.value = new Date(localToday.getTime() - localToday.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
document.querySelector("#calibration-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const values = new FormData(form);
  const record = {
    timestamp: new Date().toISOString(),
    subsystem: String(values.get("subsystem")),
    sensor: String(values.get("sensor")),
    date: String(values.get("date")),
    responsible: String(values.get("responsible")).trim()
  };
  const status = document.querySelector("#calibration-status");
  if (!record.date || !record.responsible) {
    status.textContent = translate("calibrationMissing");
    form.elements.responsible.focus();
    return;
  }
  if (!await saveLocalRecord(localRecordKeys.calibrations, record)) {
    status.textContent = translate(accountRecords.calibrations.length >= 3000
      ? "accountReadingsLimit"
      : currentAccount ? "historyStorageError" : "authSessionExpired");
    return;
  }
  status.textContent = translate("calibrationSaved");
  form.elements.responsible.value = "";
  form.elements.responsible.focus();
});

document.querySelectorAll(".subsystem-switch").forEach((button) => {
  button.addEventListener("click", () => {
    clearDemoScenarioSelection();
    const isOn = button.getAttribute("aria-checked") !== "true";
    button.setAttribute("aria-checked", String(isOn));
    button.classList.toggle("on", isOn);
    button.textContent = translate(isOn ? "demoStateOn" : "demoStateOff");
    button.setAttribute("aria-label", `${translate(button.dataset.subsystemSwitch === "towerPump" ? "towerPumpState" : "airPumpState")}: ${button.textContent}`);
    renderHybridStatus();
  });
});

const defaultHybridReadings = new Map([...document.querySelectorAll("[data-hybrid-reading]")].map((input) => [
  input.dataset.hybridReading,
  input.value
]));

function clearDemoScenarioSelection() {
  activeDemoScenario = null;
  document.querySelectorAll(".scenario-button").forEach((button) => {
    button.classList.remove("selected");
    button.setAttribute("aria-pressed", "false");
  });
  document.querySelectorAll(".subsystem-card").forEach((card) => card.classList.remove("scenario-focus"));
  document.querySelector("#scenario-feedback").textContent = translate("scenarioCustomDetail");
}

function applyDemoScenario(scenario) {
  activeDemoScenario = scenario;
  for (const input of document.querySelectorAll("[data-hybrid-reading]")) {
    input.value = defaultHybridReadings.get(input.dataset.hybridReading);
  }
  for (const button of document.querySelectorAll(".subsystem-switch")) {
    button.setAttribute("aria-checked", "true");
    button.classList.add("on");
    button.textContent = translate("demoStateOn");
    button.setAttribute("aria-label", `${translate(button.dataset.subsystemSwitch === "towerPump" ? "towerPumpState" : "airPumpState")}: ${button.textContent}`);
  }
  document.querySelectorAll(".subsystem-card").forEach((card) => card.classList.remove("scenario-focus"));
  let targetId = "";
  if (scenario === "flow") {
    document.querySelector('[data-hybrid-reading="towerFlow"]').value = "0.2";
    targetId = "tower-heading";
  } else if (scenario === "oxygen") {
    document.querySelector('[data-hybrid-reading="raftOxygen"]').value = "3.2";
    targetId = "raft-heading";
  }
  document.querySelectorAll(".scenario-button").forEach((button) => {
    const selected = button.dataset.scenario === scenario;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  document.querySelector("#scenario-feedback").textContent = translate(
    { stable: "scenarioStableDetail", flow: "scenarioFlowDetail", oxygen: "scenarioOxygenDetail" }[scenario]
  );
  if (targetId) document.querySelector(`#${targetId}`).closest(".subsystem-card").classList.add("scenario-focus");
  renderHybridStatus();
}

document.querySelectorAll(".scenario-button").forEach((button) => {
  button.addEventListener("click", () => applyDemoScenario(button.dataset.scenario));
});

document.querySelector("#loop-type").addEventListener("change", renderMixResult);

document.querySelectorAll(".toggle-button").forEach((button) => {
  button.addEventListener("click", () => {
    const isOn = button.getAttribute("aria-checked") !== "true";
    button.setAttribute("aria-checked", String(isOn));
    button.classList.toggle("on", isOn);
    document.querySelector(`#${button.dataset.control}-state`).textContent = isOn ? translate("controlOn") : translate("controlOff");
    document.querySelector("#control-feedback").textContent = translate("controlFeedback");
    document.querySelector("#live-region").textContent = `${button.getAttribute("aria-label")}: ${isOn ? translate("controlOn") : translate("controlOff")}`;
  });
});

document.querySelector("#voice-button").addEventListener("click", (event) => {
  if (event.currentTarget.getAttribute("aria-pressed") === "true") {
    stopVoicePlayback();
  } else {
    const readings = currentReadings();
    const text = `${translate("summaryAnnouncement")} ${translate("metricPH")}: ${readings.ph}, ${translate("metricEC")}: ${readings.ec}, ${translate("airTemp")}: ${readings.airTemp} degrees Celsius. ${plants.length} ${translate("navPlants")}.`;
    speak(text);
  }
});

document.querySelector("#read-summary").addEventListener("click", () => {
  const readings = currentReadings();
  speak(`${translate("summaryAnnouncement")} ${translate("metricPH")}: ${readings.ph}, ${translate("metricEC")}: ${readings.ec} millisiemens per centimeter. ${translate("airTemp")}: ${readings.airTemp} degrees Celsius. ${plants.length} ${translate("navPlants")}.`);
});

document.querySelector(".notice-close").addEventListener("click", () => {
  document.querySelector(".demo-notice").remove();
});

document.querySelector("#guide-previous").addEventListener("click", () => {
  if (activeGuideStep === 0) return;
  activeGuideStep -= 1;
  renderStarterGuide();
  document.querySelector("#live-region").textContent = fillTranslation("guideAnnouncement", {
    current: activeGuideStep + 1,
    total: 6,
    title: translate(`guideStep${activeGuideStep + 1}Title`)
  });
});

document.querySelector("#guide-complete").addEventListener("click", () => {
  if (completedGuideSteps.has(activeGuideStep)) completedGuideSteps.delete(activeGuideStep);
  else completedGuideSteps.add(activeGuideStep);
  renderStarterGuide();
  document.querySelector("#live-region").textContent = fillTranslation("guideCompleted", {
    count: completedGuideSteps.size
  });
});

document.querySelector("#guide-next").addEventListener("click", () => {
  if (activeGuideStep === 5) {
    completedGuideSteps.add(activeGuideStep);
    renderStarterGuide();
    document.querySelector("#live-region").textContent = translate("guideFinishedAnnouncement");
    return;
  }
  activeGuideStep += 1;
  renderStarterGuide();
  document.querySelector("#live-region").textContent = fillTranslation("guideAnnouncement", {
    current: activeGuideStep + 1,
    total: 6,
    title: translate(`guideStep${activeGuideStep + 1}Title`)
  });
});

document.querySelectorAll(".main-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".main-nav .nav-link").forEach((item) => {
      item.classList.toggle("active", item === link);
      if (item === link) item.setAttribute("aria-current", "page");
      else item.removeAttribute("aria-current");
    });
  });
});

initializeRegions();
updateTranslations();
checkSupportService();
restoreAccountSession();
