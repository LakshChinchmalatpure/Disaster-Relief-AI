// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('[PWA] Service Worker registered successfully.'))
      .catch(err => console.error('[PWA] Service Worker registration failed:', err));
  });
}

// ----------------------------------------------------
// 1. DATA DICTIONARIES & TRANSLATIONS
// ----------------------------------------------------

const TRANSLATIONS = {
  en: {
    app_title: "Disaster Relief AI",
    app_subtitle: "Emergency Assistant",
    status_online: "Online",
    status_offline: "Offline Mode",
    active_alert: "ACTIVE ALERT:",
    alert_none: "No Active Warning (Simulation Mode)",
    alert_flood: "Flood Evacuation Advisory - River Red Level",
    alert_earthquake: "Aftershock Alert - Seek sturdy shelter",
    alert_cyclone: "Category 3 Cyclone Warning - Move Inland",
    alert_instructions_none: "Select a simulated alert to test responsive workflows.",
    alert_instructions_flood: "WARNING: River levels rising. Evacuate to designated high grounds immediately. Avoid basements and low-lying areas.",
    alert_instructions_earthquake: "CAUTION: Strong aftershocks expected. Stand clear of glass, facades, and heavy items. Stay inside safe structures.",
    alert_instructions_cyclone: "DANGER: High winds & storm surge expected. Secure loose items. Shelter in windproof rooms or head to community storm shelters.",
    tab_dashboard: "Dashboard",
    tab_map: "Shelters",
    tab_chat: "AI Triage",
    tab_firstaid: "First Aid",
    tab_checklist: "Checklists",
    tab_tools: "Beacon",
    sos_actions: "SOS Fast Actions",
    sos_description: "Instantly alert rescuers or prepare emergency communication.",
    btn_sound_siren: "Sound Audio Siren",
    btn_generate_sos: "Generate SOS Message",
    safety_status_title: "My Safety Status",
    safety_status_desc: "Mark your safety status locally for quick messaging templates.",
    status_safe: "Safe & Well",
    status_injured: "Injured / Sick",
    status_stranded: "Stranded / Trapped",
    contacts_title: "Emergency Directory",
    tip_title: "Offline Disaster Tip",
    next_tip_btn: "Next Survival Tip",
    shelter_finder_title: "Find Emergency Shelter",
    shelter_finder_desc: "Locate the nearest high-ground shelters and triage medical facilities.",
    location_placeholder: "Enter city (e.g. Mumbai, Tokyo, San Francisco)",
    search_btn: "Search",
    gps_btn: "GPS",
    nearest_shelters_title: "Nearest Safe Shelter Points",
    nearest_hospitals_title: "Medical Emergency Facilities",
    map_offline_title: "Map Visuals Unavailable Offline",
    map_offline_desc: "Leaflet maps cannot display tile imagery without network. Please refer to the text list on the left for exact distances and navigation instructions.",
    chat_title: "Emergency AI Assistant",
    chat_status: "Online & Local Offline Engine Ready",
    chat_welcome: "Welcome to the Emergency AI Agent. Ask any questions about first-aid, evacuation preparation, water safety, or survival instructions. This AI runs entirely inside your device and works without internet.",
    chip_bleeding: "🩸 Stop Bleeding",
    chip_cpr: "🫀 CPR Steps",
    chip_earthquake: "🫨 Earthquake Action",
    chip_burn: "🔥 Burn Treatment",
    chip_water: "💧 Clean Water",
    chat_input_placeholder: "Type survival question (e.g. CPR steps)...",
    chat_send_btn: "Ask AI",
    clear_chat_btn: "Clear",
    firstaid_title: "First-Aid Handbook",
    firstaid_desc: "Quick, high-contrast, offline medical guidance before rescue teams arrive.",
    topic_cpr: "CPR (Cardiopulmonary Resuscitation)",
    topic_bleeding: "Severe Bleeding Control",
    topic_burns: "Heat & Chemical Burns",
    topic_fractures: "Fractures & Bone Splinting",
    topic_choking: "Choking Rescue (Heimlich)",
    checklist_title: "Survival Checklists",
    checklist_desc: "Tick items as you prepare. Progress is automatically saved locally.",
    check_opt_general: "General Family Grab-Bag",
    check_opt_flood: "Flood Evacuation Prep",
    check_opt_earthquake: "Earthquake Home Safety",
    check_opt_cyclone: "Cyclone / Hurricane Prep",
    checklist_progress_label: "Preparation Progress:",
    reset_check_btn: "Reset Checklist",
    audio_beacon_title: "Acoustic Locator Beacon",
    audio_beacon_desc: "Emits a high-frequency, high-volume alarm sound to guide search teams to your coordinates.",
    siren_toggle_play: "START SOS SIREN",
    siren_toggle_stop: "STOP SOS SIREN",
    siren_volume_label: "Siren Pitch / Intensity:",
    visual_beacon_title: "Visual Rescue Strobe",
    visual_beacon_desc: "Rapidly flashes your screen with neon yellow and white light. Hold your phone high in darkness or ruins to attract rescue helicopters or teams.",
    strobe_preview_text: "STROBE DISENGAGED",
    strobe_preview_active: "STROBE FLASHING",
    strobe_toggle_start: "ACTIVATE VISUAL FLASHER",
    strobe_toggle_stop: "DEACTIVATE VISUAL FLASHER",
    compass_title: "Survival Compass",
    compass_desc: "Navigate safely without cellular networks. Shows direction based on your phone's internal sensors.",
    heading_label: "Heading Angle:",
    compass_permission_btn: "Grant Sensor Permission",
    sos_builder_title: "SOS Alert Message Builder",
    sos_builder_desc: "Automatically compiles your status details and GPS coordinate locations into a clean SMS/WhatsApp message.",
    sos_phone_label: "Recipient Contact Number (Family / Services):",
    sos_custom_text_label: "Brief Current Situation / Needs:",
    sos_preview_label: "Generated Message Preview:",
    btn_copy: "Copy Message",
    btn_send_whatsapp: "Send WhatsApp",
    btn_send_sms: "Send via SMS"
  },
  es: {
    app_title: "IA de Alivio de Desastres",
    app_subtitle: "Asistente de Emergencia",
    status_online: "En línea",
    status_offline: "Modo sin conexión",
    active_alert: "ALERTA ACTIVA:",
    alert_none: "Sin advertencia activa (Modo simulación)",
    alert_flood: "Aviso de evacuación por inundación - Nivel río rojo",
    alert_earthquake: "Alerta de réplicas - Busque refugio resistente",
    alert_cyclone: "Advertencia de ciclón categoría 3 - Muévase tierra adentro",
    alert_instructions_none: "Seleccione una alerta simulada para probar flujos de respuesta.",
    alert_instructions_flood: "ADVERTENCIA: Niveles de ríos subiendo. Evacue a zonas altas de inmediato. Evite sótanos y áreas bajas.",
    alert_instructions_earthquake: "PRECAUCIÓN: Se esperan fuertes réplicas. Manténgase alejado de vidrios, fachadas y objetos pesados.",
    alert_instructions_cyclone: "PELIGRO: Vientos fuertes y marejada ciclónica. Asegure objetos sueltos. Refúgiese en habitaciones resistentes.",
    tab_dashboard: "Panel",
    tab_map: "Refugios",
    tab_chat: "Triage IA",
    tab_firstaid: "Primeros Auxilios",
    tab_checklist: "Listas de Control",
    tab_tools: "Baliza",
    sos_actions: "Acciones rápidas de SOS",
    sos_description: "Alerte instantáneamente a rescatistas o prepare comunicación de emergencia.",
    btn_sound_siren: "Activar sirena de audio",
    btn_generate_sos: "Generar mensaje SOS",
    safety_status_title: "Mi estado de seguridad",
    safety_status_desc: "Marque su estado localmente para plantillas de mensajería rápida.",
    status_safe: "A salvo y bien",
    status_injured: "Herido / Enfermo",
    status_stranded: "Atrapado / Aislado",
    contacts_title: "Directorio de Emergencia",
    tip_title: "Consejo de supervivencia",
    next_tip_btn: "Siguiente consejo",
    shelter_finder_title: "Buscar refugio de emergencia",
    shelter_finder_desc: "Localice los refugios altos y centros médicos de triaje más cercanos.",
    location_placeholder: "Ingrese ciudad (ej. Mumbai, Tokio, San Francisco)",
    search_btn: "Buscar",
    gps_btn: "GPS",
    nearest_shelters_title: "Refugios seguros más cercanos",
    nearest_hospitals_title: "Instalaciones médicas de emergencia",
    map_offline_title: "Mapa visual no disponible sin conexión",
    map_offline_desc: "Los mapas de Leaflet no pueden cargar imágenes sin red. Consulte la lista de texto a la izquierda para ver distancias y navegación.",
    chat_title: "Asistente IA de Emergencia",
    chat_status: "Motor local sin conexión listo",
    chat_welcome: "Bienvenido a la IA de Emergencia. Realice preguntas sobre primeros auxilios, evacuación, agua segura o supervivencia. Funciona 100% sin internet.",
    chip_bleeding: "🩸 Detener Sangrado",
    chip_cpr: "🫀 Pasos de RCP",
    chip_earthquake: "🫨 Acción en Terremoto",
    chip_burn: "🔥 Tratar Quemaduras",
    chip_water: "💧 Agua Segura",
    chat_input_placeholder: "Escriba su pregunta (ej. pasos de RCP)...",
    chat_send_btn: "Preguntar a IA",
    clear_chat_btn: "Limpiar",
    firstaid_title: "Manual de Primeros Auxilios",
    firstaid_desc: "Guía médica rápida sin conexión antes de que lleguen los rescatistas.",
    topic_cpr: "RCP (Reanimación Cardiopulmonar)",
    topic_bleeding: "Control de sangrado severo",
    topic_burns: "Quemaduras térmicas y químicas",
    topic_fractures: "Fracturas y entablillado",
    topic_choking: "Rescate por asfixia (Heimlich)",
    checklist_title: "Listas de supervivencia",
    checklist_desc: "Marque elementos mientras se prepara. El progreso se guarda localmente.",
    check_opt_general: "Mochila de emergencia familiar",
    check_opt_flood: "Preparación ante inundaciones",
    check_opt_earthquake: "Seguridad hogareña para terremotos",
    check_opt_cyclone: "Preparación ante ciclón / huracán",
    checklist_progress_label: "Progreso de preparación:",
    reset_check_btn: "Reiniciar lista",
    audio_beacon_title: "Baliza acústica de localización",
    audio_beacon_desc: "Emite una alarma de alto volumen y alta frecuencia para guiar a los rescatistas a sus coordenadas.",
    siren_toggle_play: "INICIAR SIRENA SOS",
    siren_toggle_stop: "DETENER SIRENA SOS",
    siren_volume_label: "Tono / Intensidad de sirena:",
    visual_beacon_title: "Estroboscopio visual de rescate",
    visual_beacon_desc: "Parpadea rápidamente la pantalla con luz amarilla y blanca. Sostenga su teléfono en alto en la oscuridad para atraer rescatistas.",
    strobe_preview_text: "ESTROBOSCOPIO APAGADO",
    strobe_preview_active: "ESTROBOSCOPIO ACTIVO",
    strobe_toggle_start: "ACTIVAR LUZ ESTROBOSCÓPICA",
    strobe_toggle_stop: "DESACTIVAR LUZ ESTROBOSCÓPICA",
    compass_title: "Brújula de supervivencia",
    compass_desc: "Navegue de forma segura sin redes móviles. Muestra la dirección según los sensores internos.",
    heading_label: "Ángulo de rumbo:",
    compass_permission_btn: "Permitir Sensores",
    sos_builder_title: "Creador de mensajes SOS",
    sos_builder_desc: "Compila su ubicación GPS y estado en un mensaje de texto listo para enviar por SMS o WhatsApp.",
    sos_phone_label: "Número de teléfono de contacto (Familia / Servicios):",
    sos_custom_text_label: "Breve descripción de situación / necesidades:",
    sos_preview_label: "Vista previa del mensaje:",
    btn_copy: "Copiar mensaje",
    btn_send_whatsapp: "Enviar WhatsApp",
    btn_send_sms: "Enviar por SMS"
  },
  hi: {
    app_title: "आपदा राहत एआई",
    app_subtitle: "आपातकालीन सहायक",
    status_online: "ऑनलाइन",
    status_offline: "ऑफ़लाइन मोड",
    active_alert: "सक्रिय चेतावनी:",
    alert_none: "कोई सक्रिय चेतावनी नहीं (सिमुलेशन मोड)",
    alert_flood: "बाढ़ निकासी सलाह - नदी लाल स्तर",
    alert_earthquake: "भूकंप के झटके की चेतावनी - मजबूत आश्रय खोजें",
    alert_cyclone: "श्रेणी 3 चक्रवात चेतावनी - अंतर्देशीय जाएं",
    alert_instructions_none: "प्रतिक्रियाशील वर्कफ़्लो का परीक्षण करने के लिए एक सिमुलेटेड अलर्ट चुनें।",
    alert_instructions_flood: "चेतावनी: नदी का जल स्तर बढ़ रहा है। तुरंत ऊंचे स्थानों पर जाएं। बेसमेंट और निचले इलाकों से बचें।",
    alert_instructions_earthquake: "सावधानी: तेज झटके आने की आशंका है। कांच, खिड़कियों और भारी सामानों से दूर रहें। सुरक्षित भवनों में रहें।",
    alert_instructions_cyclone: "खतरा: तेज हवाएं और तूफानी लहरें आने की आशंका है। खुली वस्तुओं को बांधें। सुरक्षित कमरों या सामुदायिक आश्रयों में शरण लें।",
    tab_dashboard: "डैशबोर्ड",
    tab_map: "आश्रय",
    tab_chat: "एआई जांच",
    tab_firstaid: "प्राथमिक चिकित्सा",
    tab_checklist: "चेकलिस्ट",
    tab_tools: "बीकन",
    sos_actions: "एसओएस त्वरित कार्रवाइयां",
    sos_description: "बचाव दल को तुरंत सूचित करें या आपातकालीन संदेश तैयार करें।",
    btn_sound_siren: "आयरन सायरन बजाएं",
    btn_generate_sos: "एसओएस संदेश बनाएं",
    safety_status_title: "मेरी सुरक्षा स्थिति",
    safety_status_desc: "त्वरित संदेशों के लिए अपनी स्थिति को स्थानीय रूप से सहेजें।",
    status_safe: "सुरक्षित और ठीक हूँ",
    status_injured: "घायल / बीमार",
    status_stranded: "फंसा हुआ / अटका हुआ",
    contacts_title: "आपातकालीन निर्देशिका",
    tip_title: "ऑफ़लाइन उत्तरजीविता टिप",
    next_tip_btn: "अगली उत्तरजीविता टिप",
    shelter_finder_title: "आपातकालीन आश्रय खोजें",
    shelter_finder_desc: "निकटतम सुरक्षित आश्रय स्थलों और चिकित्सा सुविधाओं का पता लगाएं।",
    location_placeholder: "शहर का नाम दर्ज करें (जैसे मुंबई, टोक्यो, सैन फ्रांसिस्को)",
    search_btn: "खोजें",
    gps_btn: "जीपीएस",
    nearest_shelters_title: "निकटतम सुरक्षित आश्रय स्थल",
    nearest_hospitals_title: "चिकित्सा आपातकालीन सुविधाएं",
    map_offline_title: "ऑफ़लाइन होने के कारण नक्शा उपलब्ध नहीं है",
    map_offline_desc: "इंटरनेट के बिना नक्शा लोड नहीं किया जा सकता। कृपया दूरी और दिशा के लिए बाईं ओर दी गई सूची देखें।",
    chat_title: "आपातकालीन एआई सहायक",
    chat_status: "स्थानीय ऑफ़लाइन इंजन तैयार है",
    chat_welcome: "आपातकालीन एआई सहायक में आपका स्वागत है। प्राथमिक चिकित्सा, निकासी, स्वच्छ पानी या जीवित रहने के बारे में कोई भी प्रश्न पूछें। यह बिना इंटरनेट के चलता है।",
    chip_bleeding: "🩸 रक्तस्राव रोकें",
    chip_cpr: "🫀 सीपीआर प्रक्रिया",
    chip_earthquake: "🫨 भूकंप में बचाव",
    chip_burn: "🔥 जलने का इलाज",
    chip_water: "💧 साफ पानी",
    chat_input_placeholder: "उत्तरजीविता प्रश्न लिखें (जैसे सीपीआर के चरण)...",
    chat_send_btn: "पूछें",
    clear_chat_btn: "साफ करें",
    firstaid_title: "प्राथमिक चिकित्सा पुस्तिका",
    firstaid_desc: "बचाव दल के आने से पहले त्वरित, स्पष्ट प्राथमिक चिकित्सा निर्देश।",
    topic_cpr: "सीपीआर (हृदय-फेफड़े पुनर्जीवन)",
    topic_bleeding: "गंभीर रक्तस्राव नियंत्रण",
    topic_burns: "गर्मी और रासायनिक जलन",
    topic_fractures: "हड्डी टूटना और खपच्ची बांधना",
    topic_choking: "दम घुटने से बचाव (हेमलिच)",
    checklist_title: "उत्तरजीविता चेकलिस्ट",
    checklist_desc: "तैयारी करते समय वस्तुओं पर टिक करें। प्रगति स्वतः सुरक्षित हो जाती है।",
    check_opt_general: "सामान्य पारिवारिक बैग",
    check_opt_flood: "बाढ़ निकासी की तैयारी",
    check_opt_earthquake: "भूकंप गृह सुरक्षा",
    check_opt_cyclone: "चक्रवात / तूफान की तैयारी",
    checklist_progress_label: "तैयारी की प्रगति:",
    reset_check_btn: "चेकलिस्ट रीसेट करें",
    audio_beacon_title: "ध्वनिक लोकेटर बीकन",
    audio_beacon_desc: "बचाव दलों को आपके पास लाने के लिए एक तेज आवाज वाला सायरन बजाता है।",
    siren_toggle_play: "एसओएस सायरन शुरू करें",
    siren_toggle_stop: "एसओएस सायरन बंद करें",
    siren_volume_label: "सायरन की पिच / तीव्रता:",
    visual_beacon_title: "दृश्य बचाव स्ट्रोब",
    visual_beacon_desc: "आपकी स्क्रीन को पीली और सफेद रोशनी से तेजी से चमकाता है। बचाव दल का ध्यान आकर्षित करने के लिए फोन को ऊपर उठाएं।",
    strobe_preview_text: "स्ट्रोब बंद है",
    strobe_preview_active: "स्ट्रोब सक्रिय है",
    strobe_toggle_start: "स्ट्रेब लाइट चालू करें",
    strobe_toggle_stop: "स्ट्रेब लाइट बंद करें",
    compass_title: "उत्तरजीविता कम्पास",
    compass_desc: "बिना नेटवर्क के सुरक्षित रूप से नेविगेट करें। यह आपके फोन के सेंसर पर आधारित है।",
    heading_label: "दिशा कोण:",
    compass_permission_btn: "सेंसर अनुमति दें",
    sos_builder_title: "एसओएस अलर्ट संदेश निर्माता",
    sos_builder_desc: "आपके जीपीएस निर्देशांक और स्थिति को एसएमएस या व्हाट्सएप संदेश में बदलता है।",
    sos_phone_label: "प्राप्तकर्ता का फोन नंबर (परिवार / सेवाएं):",
    sos_custom_text_label: "वर्तमान स्थिति / आवश्यकताएं:",
    sos_preview_label: "संदेश का पूर्वावलोकन:",
    btn_copy: "संदेश कॉपी करें",
    btn_send_whatsapp: "व्हाट्सएप भेजें",
    btn_send_sms: "एसएमएस से भेजें"
  },
  ja: {
    app_title: "防災AIエージェント",
    app_subtitle: "緊急アシスタント",
    status_online: "オンライン",
    status_offline: "オフラインモード",
    active_alert: "現在のアラート:",
    alert_none: "警報なし（シミュレーションモード）",
    alert_flood: "避難勧告 - 河川危険水位超過",
    alert_earthquake: "余震注意報 - 頑丈な建物へ避難",
    alert_cyclone: "大型台風警報 - 屋内の安全な場所へ",
    alert_instructions_none: "シミュレーション用アラートを選択して動作テストを行ってください。",
    alert_instructions_flood: "警報：河川の水位が急上昇しています。ただちに指定された高台へ避難してください。地下室等は避けてください。",
    alert_instructions_earthquake: "注意：強い余震が想定されます。ガラス窓、外壁、不安定な家具から離れてください。",
    alert_instructions_cyclone: "危険：猛烈な風と高潮の恐れがあります。屋外の物を固定し、頑丈な部屋か避難所で待機してください。",
    tab_dashboard: "ダッシュボード",
    tab_map: "避難所",
    tab_chat: "AIトリアージ",
    tab_firstaid: "応急処置",
    tab_checklist: "準備リスト",
    tab_tools: "ビーコン",
    sos_actions: "SOS緊急操作",
    sos_description: "救助隊への合図の送出や緊急連絡用のメッセージを作成します。",
    btn_sound_siren: "サイレン音を鳴らす",
    btn_generate_sos: "SOSメッセージ作成",
    safety_status_title: "安否状況の登録",
    safety_status_desc: "緊急メッセージに反映する自身の安否情報を選択します。",
    status_safe: "無事・安全",
    status_injured: "怪我・病気",
    status_stranded: "避難不可・孤立状態",
    contacts_title: "緊急連絡先ダイヤル",
    tip_title: "オフライン防災知識",
    next_tip_btn: "次の知識を表示",
    shelter_finder_title: "緊急避難所・病院の検索",
    shelter_finder_desc: "現在地から最も近い高台の避難所や災害拠点病院をリストアップします。",
    location_placeholder: "都市名を入力 (例: Tokyo, Mumbai, San Francisco)",
    search_btn: "検索",
    gps_btn: "GPS取得",
    nearest_shelters_title: "最寄りの安全避難所",
    nearest_hospitals_title: "最寄りの災害医療機関",
    map_offline_title: "オフラインのため地図非表示",
    map_offline_desc: "ネット接続がないため地図画像は表示できません。左のテキストリストに記載の距離と道順を参照してください。",
    chat_title: "緊急対話防災AI",
    chat_status: "ローカル端末内オフライン応答エンジン起動中",
    chat_welcome: "防災AIエージェントへようこそ。応急処置、避難行動、水の確保などについて質問してください。ネット環境がなくても動作します。",
    chip_bleeding: "🩸 止血方法",
    chip_cpr: "🫀 CPRの手順",
    chip_earthquake: "🫨 地震時の行動",
    chip_burn: "🔥 火傷の処置",
    chip_water: "💧 飲料水の確保",
    chat_input_placeholder: "質問を入力 (例: CPRの手順)...",
    chat_send_btn: "送信",
    clear_chat_btn: "クリア",
    firstaid_title: "応急処置ハンドブック",
    firstaid_desc: "救助隊や医師が到着する前に可能な、応急処置の手順です。",
    topic_cpr: "CPR (心肺蘇生法)",
    topic_bleeding: "大出血の止血処置",
    topic_burns: "熱傷・化学火傷の処置",
    topic_fractures: "骨折と添え木の当て方",
    topic_choking: "誤嚥・窒息時の処置 (ハイムリック法)",
    checklist_title: "非常用持ち出しチェックリスト",
    checklist_desc: "チェック状態はローカルストレージへ自動的に保存されます。",
    check_opt_general: "非常用持ち出し袋",
    check_opt_flood: "水害・洪水避難準備",
    check_opt_earthquake: "地震対策・家具固定",
    check_opt_cyclone: "台風・強風接近時の備え",
    checklist_progress_label: "現在の準備状況:",
    reset_check_btn: "リストをリセット",
    audio_beacon_title: "救助要請用音響ビーコン",
    audio_beacon_desc: "居場所を周囲や捜索チームに知らせるため、大音量の高周波アラームを鳴らします。",
    siren_toggle_play: "SOSサイレン鳴動開始",
    siren_toggle_stop: "SOSサイレン鳴動停止",
    siren_volume_label: "サイレン音調・高低調整:",
    visual_beacon_title: "夜間・暗所用発光ストローブ",
    visual_beacon_desc: "画面をネオンイエローとホワイトで超高速点滅させ、ヘリや捜索隊に位置を知らせます。",
    strobe_preview_text: "ストロボ停止中",
    strobe_preview_active: "ストロボ点滅中",
    strobe_toggle_start: "ビジュアルストロボ起動",
    strobe_toggle_stop: "ビジュアルストロボ停止",
    compass_title: "生存ナビゲーションコンパス",
    compass_desc: "携帯電波が途絶した環境でも方位を確認できます（スマートフォンの地磁気センサーを利用）。",
    heading_label: "進行方位角:",
    compass_permission_btn: "センサーのアクセス許可",
    sos_builder_title: "SOSメッセージ作成ツール",
    sos_builder_desc: "現在のGPS座標、安否状況、不足物資をまとめ、SMSやWhatsAppのテキストメッセージを自動生成します。",
    sos_phone_label: "送信先電話番号 (家族・救急ダイヤル等):",
    sos_custom_text_label: "現在の詳しい状況・支援要請:",
    sos_preview_label: "送信メッセージプレビュー:",
    btn_copy: "メッセージをコピー",
    btn_send_whatsapp: "WhatsAppで送信",
    btn_send_sms: "SMSで送信"
  }
};

// Checklists Structure
const CHECKLISTS_DATA = {
  general: {
    en: [
      { id: "gen_water", title: "Drinking Water", desc: "3 Gallons per person (lasts 3 days)" },
      { id: "gen_food", title: "Non-Perishable Food", desc: "Canned goods, energy bars, dry fruits" },
      { id: "gen_med", title: "First-Aid Kit", desc: "Bandages, antiseptics, crucial prescriptions" },
      { id: "gen_light", title: "Flashlight & Batteries", desc: "LED flashlight with spare cell batteries" },
      { id: "gen_radio", title: "Crank/Battery Radio", desc: "To receive local emergency alerts offline" },
      { id: "gen_power", title: "Power Bank", desc: "Fully charged portable phone chargers" },
      { id: "gen_docs", title: "Important Documents", desc: "Passports, IDs, insurance in sealed plastic zipbag" },
      { id: "gen_whistle", title: "Emergency Whistle", desc: "To signal rescuers acoustically" }
    ],
    es: [
      { id: "gen_water", title: "Agua Potable", desc: "12 litros por persona (duración para 3 días)" },
      { id: "gen_food", title: "Comida no perecedera", desc: "Enlatados, barras de energía, frutos secos" },
      { id: "gen_med", title: "Botiquín de primeros auxilios", desc: "Vendas, antisépticos, recetas importantes" },
      { id: "gen_light", title: "Linterna y baterías", desc: "Linterna LED con baterías de repuesto" },
      { id: "gen_radio", title: "Radio de batería o manivela", desc: "Para recibir boletines de emergencia sin red" },
      { id: "gen_power", title: "Cargador portátil", desc: "Power banks totalmente cargadas para móviles" },
      { id: "gen_docs", title: "Documentos importantes", desc: "Pasaporte, DNI, seguros en bolsa plástica hermética" },
      { id: "gen_whistle", title: "Silbato de emergencia", desc: "Para hacer señales acústicas a los rescatistas" }
    ],
    hi: [
      { id: "gen_water", title: "पीने का पानी", desc: "प्रति व्यक्ति 3 गैलन (3 दिन के लिए पर्याप्त)" },
      { id: "gen_food", title: "जल्दी खराब न होने वाला भोजन", desc: "डिब्बाबंद सामान, ऊर्जा बार, सूखे मेवे" },
      { id: "gen_med", title: "प्राथमिक चिकित्सा किट", desc: "पट्टियां, एंटीसेप्टिक, आवश्यक दवाएं" },
      { id: "gen_light", title: "टॉर्च और बैटरी", desc: "अतिरिक्त बैटरी के साथ एलईडी टॉर्च" },
      { id: "gen_radio", title: "बैटरी वाला रेडियो", desc: "ऑफ़लाइन आपातकालीन अलर्ट प्राप्त करने के लिए" },
      { id: "gen_power", title: "पावर बैंक", desc: "पूरी तरह से चार्ज पोर्टेबल चार्जर" },
      { id: "gen_docs", title: "महत्वपूर्ण दस्तावेज", desc: "प्लास्टिक बैग में पासपोर्ट, आईडी, बीमा दस्तावेज" },
      { id: "gen_whistle", title: "आपातकालीन सीटी", desc: "बचाव दल को संकेत भेजने के लिए" }
    ],
    ja: [
      { id: "gen_water", title: "飲料水", desc: "1人あたり9L以上（最低3日分として目安）" },
      { id: "gen_food", title: "非常食（保存食）", desc: "レトルト、缶詰、乾パン、高カロリーゼリー" },
      { id: "gen_med", title: "救急用品・常備薬", desc: "絆創膏、消毒薬、持病の処方薬" },
      { id: "gen_light", title: "懐中電灯・予備電池", desc: "高輝度LEDライトと十分な予備乾電池" },
      { id: "gen_radio", title: "防災ラジオ", desc: "停電時にも情報収集ができる電池式ラジオ" },
      { id: "gen_power", title: "モバイルバッテリー", desc: "あらかじめ満充電にした予備電源と充電コード" },
      { id: "gen_docs", title: "貴重品・身分証コピー", desc: "健康保険証、免許証、通帳控等を防水袋に" },
      { id: "gen_whistle", title: "ホイッスル（呼び笛）", desc: "閉じ込められた際に肺活量を使わず音を鳴らすため" }
    ]
  },
  flood: {
    en: [
      { id: "fl_high", title: "Identify High Ground", desc: "Map out routes to nearby multi-story concrete structures" },
      { id: "fl_power", title: "Shut Off Utilities", desc: "Turn off electricity breaker and gas valves if ordered" },
      { id: "fl_val", title: "Elevate Valuable Items", desc: "Move critical electronics & rugs to upper floors" },
      { id: "fl_water", title: "Fill Tubs & Jugs", desc: "Store tap water before supply lines are shut down/contaminated" },
      { id: "fl_toxic", title: "Store Poisons High", desc: "Secure insecticides and household chemicals on high shelves" }
    ],
    es: [
      { id: "fl_high", title: "Identificar zonas altas", desc: "Trazar rutas a estructuras de concreto de varios pisos" },
      { id: "fl_power", title: "Apagar los servicios", desc: "Cortar el interruptor eléctrico y las llaves de gas" },
      { id: "fl_val", title: "Elevar objetos valiosos", desc: "Llevar productos electrónicos y alfombras al piso superior" },
      { id: "fl_water", title: "Llenar tinas y garrafas", desc: "Almacenar agua limpia antes de que se contamine la red" },
      { id: "fl_toxic", title: "Sustancias químicas en alto", desc: "Colocar insecticidas y solventes en estantes superiores" }
    ],
    hi: [
      { id: "fl_high", title: "ऊंचे स्थानों की पहचान", desc: "बहुमंजिला कंक्रीट संरचनाओं के मार्गों का नक्शा बनाएं" },
      { id: "fl_power", title: "बिजली और गैस बंद करें", desc: "आदेश मिलने पर मुख्य बिजली स्विच और गैस वाल्व बंद करें" },
      { id: "fl_val", title: "मूल्यवान वस्तुएं ऊपर रखें", desc: "महत्वपूर्ण इलेक्ट्रॉनिक्स और दस्तावेज ऊपरी मंजिलों पर ले जाएं" },
      { id: "fl_water", title: "पानी का भंडारण करें", desc: "आपूर्ति बंद या प्रदूषित होने से पहले नल का पानी स्टोर करें" },
      { id: "fl_toxic", title: "कीटनाशक ऊंचाई पर रखें", desc: "कीटनाशकों और रसायनों को सुरक्षित रूप से ऊंचे स्थानों पर रखें" }
    ],
    ja: [
      { id: "fl_high", title: "高台避難ルートの確認", desc: "鉄筋コンクリート造の頑丈な建物（垂直避難先）への道を確認" },
      { id: "fl_power", title: "ライフラインの遮断", desc: "避難指示が出た場合、ブレーカーを落とし、ガスの元栓を閉める" },
      { id: "fl_val", title: "貴重品の上階への移動", desc: "電化製品、アルバム、重要書類を2階などの高い場所へ退避" },
      { id: "fl_water", title: "生活用水の貯留", desc: "断水に備え、浴槽やバケツに水を張って確保しておく" },
      { id: "fl_toxic", title: "危険物の高所保管", desc: "家庭用洗剤、殺虫剤など流出すると有害な化学物質を上棚へ" }
    ]
  },
  earthquake: {
    en: [
      { id: "eq_drop", title: "Drop, Cover, Hold On", desc: "Identify safe spots under sturdy tables or inner walls" },
      { id: "eq_sec", title: "Secure Heavy Furniture", desc: "Anchor bookcases, wardrobes, and heavy appliances" },
      { id: "eq_clear", title: "Clear Exit Pathways", desc: "Ensure corridors and doors are clear of clutter" },
      { id: "eq_glass", title: "Anti-Shatter Film", desc: "Check glass windows and mirrors have safety films" },
      { id: "eq_fire", title: "Fire Extinguishers", desc: "Place fire extinguishers near kitchen and verify charge status" }
    ],
    es: [
      { id: "eq_drop", title: "Agacharse, Cubrirse, Sujetarse", desc: "Identificar sitios seguros bajo mesas fuertes o muros internos" },
      { id: "eq_sec", title: "Asegurar muebles pesados", desc: "Anclar libreros, armarios y electrodomésticos pesados" },
      { id: "eq_clear", title: "Despejar vías de salida", desc: "Asegurar que pasillos y puertas estén libres de obstáculos" },
      { id: "eq_glass", title: "Película protectora en vidrios", desc: "Colocar protección adhesiva en ventanas y espejos" },
      { id: "eq_fire", title: "Extintores de incendios", desc: "Colocar un extintor en la cocina y comprobar su carga" }
    ],
    hi: [
      { id: "eq_drop", title: "झुकें, ढकें, पकड़े रहें", desc: "मजबूत मेजों या आंतरिक दीवारों के नीचे सुरक्षित स्थान खोजें" },
      { id: "eq_sec", title: "भारी फर्नीचर सुरक्षित करें", desc: "बुककेस, अलमारी और भारी उपकरणों को दीवार से बांधें" },
      { id: "eq_clear", title: "निकासी मार्गों को साफ रखें", desc: "सुनिश्चित करें कि गलियारे और दरवाजे बाधाओं से मुक्त हों" },
      { id: "eq_glass", title: "कांच पर सुरक्षा फिल्म", desc: "जांचें कि कांच की खिड़कियों और शीशों पर सुरक्षा फिल्म लगी हो" },
      { id: "eq_fire", title: "अग्निशामक यंत्र", desc: "रसोई के पास अग्निशामक यंत्र रखें और उसकी जांच करें" }
    ],
    ja: [
      { id: "eq_drop", title: "まず低く、頭を守り、動かない", desc: "机の下など、落下物から身を守る安全な退避行動の確認" },
      { id: "eq_sec", title: "大型家具・家電の固定", desc: "本棚、タンス、冷蔵庫等のL字金具等による耐震転倒防止" },
      { id: "eq_clear", title: "避難経路の確保", desc: "廊下や玄関ドア付近に障害物となる靴や荷物を置かない" },
      { id: "eq_glass", title: "ガラス飛散防止対策", desc: "窓ガラスや食器棚のガラス面へ飛散防止フィルムを貼る" },
      { id: "eq_fire", title: "消火器の設置と点検", desc: "初期消火のため台所等に住宅用消火器を置き、期限を確認" }
    ]
  },
  cyclone: {
    en: [
      { id: "cy_shut", title: "Secure Storm Shutters", desc: "Board up windows or tape large glass planes" },
      { id: "cy_loose", title: "Bring Outdoor Items In", desc: "Secure bikes, chairs, trash cans, and garden tools" },
      { id: "cy_evac", title: "Locate Evacuation Zone", desc: "Know your area's local evacuation level and community center" },
      { id: "cy_fuel", title: "Fill Vehicle Tanks", desc: "Ensure your car has a full tank of fuel in case of road blocks" },
      { id: "cy_prep", title: "Prepare Emergency Kit", desc: "Bring grab-bag indoors and keep it near the evacuation exit" }
    ],
    es: [
      { id: "cy_shut", title: "Asegurar persianas / ventanas", desc: "Tapar ventanas o colocar cinta en cristales grandes" },
      { id: "cy_loose", title: "Meter objetos del exterior", desc: "Guardar bicicletas, sillas, botes de basura y macetas" },
      { id: "cy_evac", title: "Conocer la zona de evacuación", desc: "Identificar el nivel de riesgo y centro de evacuación local" },
      { id: "cy_fuel", title: "Llenar tanque del vehículo", desc: "Asegurar combustible por si hay bloqueos de carreteras" },
      { id: "cy_prep", title: "Preparar mochila de mano", desc: "Tener la mochila de emergencia cerca de la salida principal" }
    ],
    hi: [
      { id: "cy_shut", title: "खिड़कियां सुरक्षित करें", desc: "खिड़कियों को बंद करें या बड़े शीशों पर सुरक्षा टेप लगाएं" },
      { id: "cy_loose", title: "बाहर का सामान अंदर लाएं", desc: "साइकिल, कुर्सियाँ, कचरा डिब्बे और बागवानी उपकरण अंदर रखें" },
      { id: "cy_evac", title: "निकासी क्षेत्र का पता लगाएं", desc: "अपने क्षेत्र के स्थानीय निकासी स्तर और राहत शिविर को जानें" },
      { id: "cy_fuel", title: "वाहनों में ईंधन भरें", desc: "सड़कें बंद होने की स्थिति के लिए वाहन में पूरा ईंधन रखें" },
      { id: "cy_prep", title: "आपातकालीन किट तैयार रखें", desc: "बैग को घर के अंदर और निकासी द्वार के करीब रखें" }
    ],
    ja: [
      { id: "cy_shut", title: "窓ガラス・雨戸の補強", desc: "雨戸やシャッターを閉める。ガラス面に飛散防止テープを十字に貼る" },
      { id: "cy_loose", title: "屋外設置物の屋内退避", desc: "植木鉢、物干し竿、自転車など風で飛ばされやすい物を屋内に入れる" },
      { id: "cy_evac", title: "ハザードマップでの避難所確認", desc: "自治体が指定する台風・風水害用の避難所の場所と避難経路の確認" },
      { id: "cy_fuel", title: "車のガソリン満タン化", desc: "停電等でガソリンスタンドが休業したり、車中避難する場合の準備" },
      { id: "cy_prep", title: "避難バッグをドア付近に配置", desc: "夜間の突発的な避難指示に備え、玄関等に防災袋をセット" }
    ]
  }
};

// First Aid Handbook Details
const FIRSTAID_DATA = {
  cpr: {
    en: {
      title: "Cardiopulmonary Resuscitation (CPR)",
      warning: "⚠ Use CPR only when a person is unresponsive and NOT breathing normally. Call emergency services immediately first.",
      steps: [
        { num: 1, title: "Check Response", desc: "Tap the shoulders, shout 'Are you okay?' to check for any movements." },
        { num: 2, title: "Open Airway", desc: "Tilt head back gently, lift chin up to clear the tongue pathway." },
        { num: 3, title: "Check Breathing", desc: "Look at the chest for rise and fall. Listen for breathing sounds for 10 seconds." },
        { num: 4, title: "Perform Chest Compressions", desc: "Place heel of one hand in the center of the chest. Push hard and fast (100-120 per minute) to a depth of 2 inches." },
        { num: 5, title: "Give Rescue Breaths", desc: "Pinch the nose shut, seal your mouth over theirs, and give 2 breaths (if trained). Cycle: 30 compressions to 2 breaths." }
      ]
    },
    es: {
      title: "Reanimación Cardiopulmonar (RCP)",
      warning: "⚠ Utilice RCP solo cuando una persona no responde y NO respira normalmente. Llame primero a emergencias.",
      steps: [
        { num: 1, title: "Verificar respuesta", desc: "Toque los hombros y grite '¿Está bien?' para verificar si se mueve." },
        { num: 2, title: "Abrir vía aérea", desc: "Incline la cabeza hacia atrás suavemente y levante la barbilla." },
        { num: 3, title: "Verificar respiración", desc: "Observe el movimiento del pecho. Escuche si hay respiración durante 10 segundos." },
        { num: 4, title: "Realizar compresiones torácicas", desc: "Coloque el talón de una mano en el centro del pecho. Empuje rápido y fuerte (100-120 por minuto) a 5 cm de profundidad." },
        { num: 5, title: "Dar respiración de rescate", desc: "Selle la boca e insufle aire 2 veces (si está entrenado). Ciclo: 30 compresiones por 2 insuflaciones." }
      ]
    },
    hi: {
      title: "सीपीआर (कार्डियोपल्मोनरी पुनर्जीवन)",
      warning: "⚠ सीपीआर का उपयोग केवल तभी करें जब व्यक्ति बेहोश हो और सामान्य रूप से सांस न ले रहा हो। सबसे पहले तुरंत आपातकालीन सेवाओं को कॉल करें।",
      steps: [
        { num: 1, title: "प्रतिक्रिया की जांच करें", desc: "कंधों को थपथपाएं, 'क्या आप ठीक हैं?' चिल्लाकर जांचें कि क्या कोई हलचल है।" },
        { num: 2, title: "श्वसन मार्ग खोलें", desc: "सिर को धीरे से पीछे झुकाएं, जीभ के रास्ते को साफ करने के लिए ठुड्डी को ऊपर उठाएं।" },
        { num: 3, title: "सांस की जांच करें", desc: "छाती के उतार-चढ़ाव को देखें। 10 सेकंड तक सांस की आवाजें सुनें।" },
        { num: 4, title: "छाती को दबाएं (Compressions)", desc: "छाती के बीच में एक हाथ की हथेली रखें। 2 इंच की गहराई तक जोर से और तेजी से (100-120 प्रति मिनट) दबाएं।" },
        { num: 5, title: "सांस दें (Rescue Breaths)", desc: "नाक बंद करें, अपने मुंह को उनके मुंह पर रखें और 2 बार सांस दें (यदि प्रशिक्षित हों)। चक्र: 30 बार दबाना और 2 बार सांस देना।" }
      ]
    },
    ja: {
      title: "心肺蘇生法 (CPR)",
      warning: "⚠ 相手の意識（反応）がなく、普段通りの呼吸をしていない場合にのみ実施します。まずただちに119番通報を行ってください。",
      steps: [
        { num: 1, title: "反応の確認", desc: "肩を優しく叩きながら「大丈夫ですか？」と大声で呼びかけ、動きがあるか確認します。" },
        { num: 2, title: "気道確保", desc: "片手で額を抑え、もう片方の手で顎先を持ち上げて空気の通り道をまっすぐにします。" },
        { num: 3, title: "呼吸の確認", desc: "胸や腹部の上下動（呼吸の有無）を、自分の耳・顔を近づけ10秒以内で確認します。" },
        { num: 4, title: "胸骨圧迫（心臓マッサージ）", desc: "胸の真ん中を、両手を重ねて垂直に強く（約5cm沈むまで）、速く（1分間に100〜120回）絶え間なく圧迫します。" },
        { num: 5, title: "人工呼吸", desc: "鼻をつまんで口を覆い、胸が上がるまで息を約1秒間吹き込みます（2回）。胸骨圧迫30回：人工呼吸2回を繰り返します（未訓練なら圧迫のみ継続）。" }
      ]
    }
  },
  bleeding: {
    en: {
      title: "Severe Bleeding Control",
      warning: "⚠ Stop the bleeding immediately. Wear protective gloves if available. Protect wound from soil.",
      steps: [
        { num: 1, title: "Apply Direct Pressure", desc: "Place a sterile gauze or clean cloth firmly over the bleeding wound. Press down hard with both hands." },
        { num: 2, title: "Elevate Wound", desc: "Raise the bleeding limb above the level of the heart, unless a fracture is suspected." },
        { num: 3, title: "Keep Pressure Applied", desc: "Do not remove the bandage if blood seeps through. Put another layer of cloth over the first one and press harder." },
        { num: 4, title: "Apply Tourniquet (If Trained)", desc: "For life-threatening limb bleeding, tie a tourniquet 2-3 inches above the wound (never on joints). Tighten until bleeding stops." }
      ]
    },
    es: {
      title: "Control de sangrado severo",
      warning: "⚠ Detenga el sangrado de inmediato. Use guantes de protección si los tiene a mano.",
      steps: [
        { num: 1, title: "Presión directa", desc: "Coloque una gasa estéril o tela limpia firmemente sobre la herida. Presione fuerte con ambas manos." },
        { num: 2, title: "Elevar la extremidad", desc: "Eleve la extremidad herida por encima del nivel del corazón, a menos que sospeche de fractura." },
        { num: 3, title: "Mantener la presión", desc: "No retire el vendaje si se empapa de sangre. Coloque otra capa encima y presione con más fuerza." },
        { num: 4, title: "Aplicar torniquete (Si está entrenado)", desc: "Para sangrado crítico de extremidades, coloque un torniquete 5-7 cm por encima de la herida (nunca en articulaciones)." }
      ]
    },
    hi: {
      title: "गंभीर रक्तस्राव नियंत्रण",
      warning: "⚠ रक्तस्राव को तुरंत रोकें। यदि उपलब्ध हो तो सुरक्षात्मक दस्ताने पहनें। घाव को मिट्टी से बचाएं।",
      steps: [
        { num: 1, title: "सीधा दबाव डालें", desc: "घाव पर एक साफ कपड़ा या स्टेराइल पट्टी मजबूती से रखें। दोनों हाथों से जोर से दबाएं।" },
        { num: 2, title: "घाव को ऊपर उठाएं", desc: "रक्तस्राव वाले अंग को दिल के स्तर से ऊपर उठाएं, जब तक कि फ्रैक्चर का संदेह न हो।" },
        { num: 3, title: "लगातार दबाव बनाए रखें", desc: "यदि खून पट्टी से बाहर निकले, तो उसे न निकालें। पहली पट्टी के ऊपर ही दूसरा कपड़ा रखें और अधिक जोर से दबाएं।" },
        { num: 4, title: "टूर्निकेट (Tourniquet) का प्रयोग करें", desc: "अत्यधिक जानलेवा रक्तस्राव के लिए, घाव से 2-3 इंच ऊपर एक मजबूत पट्टी बांधें (जोड़ों पर कभी नहीं)। बहाव रुकने तक कसें।" }
      ]
    },
    ja: {
      title: "大出血の止血処置",
      warning: "⚠ 迅速に止血を行います。感染を防ぐため、可能であればビニール袋や手袋を使用してください。",
      steps: [
        { num: 1, title: "直接圧迫止血", desc: "傷口にきれいなガーゼや厚手の布を当て、その上から両手で力強く体重をかけて圧迫します。" },
        { num: 2, title: "患部の挙上", desc: "骨折の疑いがない場合は、傷口のある手や足を心臓より高い位置に持ち上げます。" },
        { num: 3, title: "圧迫の継続", desc: "血液が布に染み出ても、最初の布を剥がさず、さらに布を重ねて強く圧迫し続けます。" },
        { num: 4, title: "止血帯の使用（最終手段）", desc: "四肢の生命に関わる出血で直接圧迫では止まらない場合、傷口から5〜8cm近位（心臓寄り・関節は避ける）をベルト等で強く縛ります。" }
      ]
    }
  },
  burns: {
    en: {
      title: "Heat & Chemical Burns",
      warning: "⚠ Do NOT apply ice, butter, or ointments to severe burns. Do NOT pop blisters.",
      steps: [
        { num: 1, title: "Cool the Burn", desc: "Hold the burned area under cool running tap water for 10-20 minutes. Do not use freezing ice water." },
        { num: 2, title: "Remove Tight Items", desc: "Gently slip off rings, bracelets, or shoes before the skin swells." },
        { num: 3, title: "Cover Loosely", desc: "Protect the skin with a clean, dry, sterile non-stick bandage or plastic cling wrap." },
        { num: 4, title: "Seek Medical Help", desc: "If burn is large, on face/hands, or causes charred/white skin, go to a medical triage center immediately." }
      ]
    },
    es: {
      title: "Quemaduras térmicas y químicas",
      warning: "⚠ NO aplique hielo, mantequilla o ungüentos en quemaduras graves. NO reviente las ampollas.",
      steps: [
        { num: 1, title: "Enfriar la quemadura", desc: "Coloque la quemadura bajo agua corriente fresca durante 10-20 minutos. No use agua helada." },
        { num: 2, title: "Quitar objetos ajustados", desc: "Retire con cuidado anillos, pulseras u objetos que puedan apretar la zona antes de que se hinche." },
        { num: 3, title: "Cubrir holgadamente", desc: "Proteja la piel con una venda limpia, estéril y seca sin apretar." },
        { num: 4, title: "Ayuda médica", desc: "Si la quemadura es extensa, está en la cara/manos o presenta piel carbonizada, busque atención médica." }
      ]
    },
    hi: {
      title: "गर्मी और रासायनिक जलन",
      warning: "⚠ गंभीर रूप से जलने पर बर्फ, मक्खन या मलम न लगाएं। छालों को न फोड़ें।",
      steps: [
        { num: 1, title: "जलन को ठंडा करें", desc: "जले हुए हिस्से को 10-20 मिनट के लिए बहते ठंडे पानी के नीचे रखें। बहुत ठंडे बर्फ के पानी का उपयोग न करें।" },
        { num: 2, title: "तंग वस्तुएं निकालें", desc: "त्वचा में सूजन आने से पहले धीरे से अंगूठी, कंगन या जूते उतार दें।" },
        { num: 3, title: "हल्की पट्टी लपेटें", desc: "त्वचा को साफ, सूखी, नॉन-स्टिक पट्टी या साफ प्लास्टिक रैप से ढीले ढंग से ढकें।" },
        { num: 4, title: "चिकित्सीय मदद लें", desc: "यदि घाव बड़ा है, चेहरे/हाथ पर है, या त्वचा सफेद/काली हो गई है, तो तुरंत डॉक्टर के पास जाएं।" }
      ]
    },
    ja: {
      title: "熱傷・化学火傷の処置",
      warning: "⚠ 重度の火傷には氷、バター、油性クリーム等を塗らないでください。水疱（水ぶくれ）を破ってはいけません。",
      steps: [
        { num: 1, title: "流水で冷却", desc: "すぐに水道水などの清潔な冷水で、患部を15〜20分以上冷やします。氷水を直接あてるのは避けます。" },
        { num: 2, title: "衣類やアクセサリの処理", desc: "患部が腫れあがる前に、リングや時計、衣類をそっと取り除きます。衣類が貼り付いている場合は無理に剥がさず、服ごと冷やします。" },
        { num: 3, title: "清潔な保護", desc: "冷却後、清潔なガーゼやラップで患部をふわっと覆い、空気の接触を防ぎます（きつく巻かない）。" },
        { num: 4, title: "医療機関受診", desc: "火傷の範囲が広い場合、顔や手、陰部に火傷を負った場合、あるいは皮膚が白く変色・炭化している場合は救急外来を受診します。" }
      ]
    }
  },
  fractures: {
    en: {
      title: "Fractures & Bone Splinting",
      warning: "⚠ Do NOT attempt to realign or push a bone back into place. Keep the limb completely immobile.",
      steps: [
        { num: 1, title: "Control Any Bleeding", desc: "If the bone broke through the skin (open fracture), apply pressure around the wound, not directly on the bone." },
        { num: 2, title: "Immobilize the Limb", desc: "Find sturdy items (wood planks, rolled newspapers, thick cardboard) to act as splints." },
        { num: 3, title: "Tie Securely", desc: "Tie the splint to the limb above and below the fracture site using bandage, cloth, or belts. Tie firmly but do not cut off circulation." },
        { num: 4, title: "Apply Cold Compress", desc: "Wrap ice in a cloth and apply to the swelling. Do not apply ice directly on the skin." }
      ]
    },
    es: {
      title: "Fracturas y entablillado",
      warning: "⚠ NO intente reajustar o empujar un hueso roto. Mantenga la extremidad completamente inmóvil.",
      steps: [
        { num: 1, title: "Controlar sangrado", desc: "Si el hueso perforó la piel, aplique presión alrededor del hueso, no directamente sobre este." },
        { num: 2, title: "Inmovilizar", desc: "Busque soportes rígidos (tablas de madera, periódicos enrollados, cartón grueso) para entablillar." },
        { num: 3, title: "Atar firmemente", desc: "Ate la tablilla por encima y debajo de la fractura con vendas o tela. No apriete tanto como para cortar la circulación." },
        { num: 4, title: "Aplicar frío", desc: "Coloque hielo envuelto en un paño sobre la inflamación para aliviar el dolor." }
      ]
    },
    hi: {
      title: "हड्डी टूटना और खपच्ची बांधना (Fractures)",
      warning: "⚠ हड्डी को वापस अपनी जगह पर धकेलने का प्रयास न करें। अंग को पूरी तरह से स्थिर रखें।",
      steps: [
        { num: 1, title: "रक्तस्राव को नियंत्रित करें", desc: "यदि हड्डी त्वचा से बाहर आ गई है (ओपन फ्रैक्चर), तो घाव के आस-पास दबाव डालें, सीधे हड्डी पर नहीं।" },
        { num: 2, title: "अंग को स्थिर करें (Immobilize)", desc: "खपच्ची (splint) के रूप में उपयोग करने के लिए मजबूत चीजें (लकड़ी के तख्ते, मुड़े हुए समाचार पत्र, मोटा कार्डबोर्ड) खोजें।" },
        { num: 3, title: "मजबूती से बांधें", desc: "पट्टी, कपड़े या बेल्ट का उपयोग करके खपच्ची को टूटे स्थान के ऊपर और नीचे बांधें। कसकर बांधें लेकिन रक्त संचार बाधित न हो।" },
        { num: 4, title: "ठंडी सिकाई करें", desc: "एक कपड़े में बर्फ लपेटें और सूजन वाले स्थान पर लगाएं। बर्फ को सीधे त्वचा पर न लगाएं।" }
      ]
    },
    ja: {
      title: "骨折と添え木の当て方",
      warning: "⚠ 折れた骨を無理に元に戻そうとしたり、引っ張ったりしないでください。患部を完全に固定して動かさないようにします。",
      steps: [
        { num: 1, title: "傷口の止血", desc: "骨が皮膚を突き破っている場合（開放骨折）、飛び出た骨には触れず、周囲をきれいな布で押さえて止血します。" },
        { num: 2, title: "添え木（副子）の準備", desc: "身近にある板、傘、雑誌、頑丈な段ボールなどを骨折部位の上下の関節をカバーできる長さで用意します。" },
        { num: 3, title: "固定と縛り付け", desc: "布や包帯、ベルト等を使って、骨折部の上下を添え木にしっかりと結びつけます。きつすぎて血流が止まらないよう指先の体温を確認します。" },
        { num: 4, title: "冷却と挙上", desc: "可能であれば、患部を冷やし、心臓より高い位置に保つことで腫れと痛みを和らげます。" }
      ]
    }
  },
  choking: {
    en: {
      title: "Choking Rescue (Heimlich Maneuver)",
      warning: "⚠ Only perform abdominal thrusts if the person cannot breathe, cough, or speak.",
      steps: [
        { num: 1, title: "Encourage Coughing", desc: "If the victim can cough or speak, encourage them to cough hard to clear the block." },
        { num: 2, title: "Give 5 Back Blows", desc: "Lean the person forward. Give 5 firm blows between their shoulder blades using the heel of your hand." },
        { num: 3, title: "Perform 5 Abdominal Thrusts", desc: "Stand behind the person. Wrap arms around their waist. Make a fist, grasp it with your other hand, and press into the abdomen with quick, upward thrusts." },
        { num: 4, title: "Repeat Cycle", desc: "Alternate 5 back blows and 5 abdominal thrusts. If the person loses consciousness, lower them to the ground and start CPR." }
      ]
    },
    es: {
      title: "Rescate por asfixia (Maniobra de Heimlich)",
      warning: "⚠ Realice compresiones abdominales solo si la persona no puede hablar, toser o respirar.",
      steps: [
        { num: 1, title: "Animar a toser", desc: "Si la víctima puede toser o hablar, anímela a seguir haciéndolo con fuerza." },
        { num: 2, title: "Dar 5 golpes en la espalda", desc: "Incline a la persona y dé 5 golpes firmes entre los omóplatos con el talón de su mano." },
        { num: 3, title: "Dar 5 compresiones abdominales", desc: "Colóquese detrás de la persona. Rodee su cintura. Haga un puño y tire hacia adentro y arriba firmemente." },
        { num: 4, title: "Repetir", desc: "Alterne 5 golpes y 5 compresiones. Si la persona se desmaya, inicie RCP." }
      ]
    },
    hi: {
      title: "दम घुटने से बचाव (Heimlich Maneuver)",
      warning: "⚠ पेट को दबाने (Abdominal thrusts) की क्रिया केवल तभी करें जब व्यक्ति सांस न ले पा रहा हो, खांस न पा रहा हो या बोल न पा रहा हो।",
      steps: [
        { num: 1, title: "खांसने के लिए प्रेरित करें", desc: "यदि पीड़ित खांस या बोल सकता है, तो उन्हें रुकावट दूर करने के लिए जोर से खांसने के लिए कहें।" },
        { num: 2, title: "पीठ पर 5 बार थपथपाएं", desc: "व्यक्ति को आगे झुकाएं। अपने हाथ की हथेली से उनके कंधों के बीच पीठ पर 5 बार जोर से थपथपाएं।" },
        { num: 3, title: "5 बार पेट दबाएं (Abdominal Thrusts)", desc: "व्यक्ति के पीछे खड़े हो जाएं। उनके पेट के चारों ओर अपने हाथ लपेटें। एक मुट्ठी बनाएं, उसे दूसरे हाथ से पकड़ें और अंदर एवं ऊपर की तरफ झटका दें।" },
        { num: 4, title: "चक्र दोहराएं", desc: "5 बार पीठ थपथपाने और 5 बार पेट दबाने की क्रिया को बारी-बारी से करें। यदि व्यक्ति बेहोश हो जाए, तो उन्हें जमीन पर लिटाएं और सीपीआर शुरू करें।" }
      ]
    },
    ja: {
      title: "誤嚥・窒息時の処置 (ハイムリック法)",
      warning: "⚠ 相手が声を出せず、呼吸が困難で、喉をかきむしる（窒息のサイン）動作を示している場合のみ実施します。",
      steps: [
        { num: 1, title: "咳を促す", desc: "意識があり、咳をすることができる場合は、強く咳をするように促して異物の排出を試みます。" },
        { num: 2, title: "背部叩打法", desc: "相手の後ろに立ち、前傾姿勢にさせます。手のひらの付け根（手根部）で、左右の肩甲骨の間を力強く5回叩きます。" },
        { num: 3, title: "腹部突き上げ法（ハイムリック）", desc: "背後から相手の腰回りに腕を回し、片手で拳を作ってへその上に置き、もう片方の手で包むように握ります。素早く手前上方に向けて、引き上げるように5回圧迫します。" },
        { num: 4, title: "交互の繰り返し", desc: "背部叩打と腹部突き上げを異物が取れるか、意識を失うまで交互に繰り返します。意識を失った場合はただちにCPRを開始します。" }
      ]
    }
  }
};

// ----------------------------------------------------
// 2. OFFLINE EMERGENCY TIPS LIST
// ----------------------------------------------------
const SURVIVAL_TIPS = {
  en: [
    "Clean Drinking Water: Boil water for at least 1 minute to kill microbes, or add 8 drops of regular household bleach per gallon.",
    "During an Earthquake: DROP to the ground, COVER under a heavy table, and HOLD ON until shaking stops. Avoid staying near windows.",
    "Fleeing Floods: Never walk or drive through flowing water. Just 6 inches of rushing water can sweep you off your feet.",
    "Carbon Monoxide Hazard: Never run gas generators or barbecues inside rooms or garages. They create lethal invisible fumes.",
    "Radio Updates: Use a wind-up or battery radio to tune to emergency broadcast channels. Cell towers are often first to fail.",
    "Hygiene: Clean hands with alcohol gel if clean tap water is scarce. Keep open wounds dry, sanitized, and sealed."
  ],
  es: [
    "Agua potable: Hierva el agua al menos 1 minuto para eliminar bacterias, o agregue 8 gotas de cloro por cada galón.",
    "Durante Terremotos: AGACHESE, CUBRASE bajo una mesa resistente y SUJETESE hasta que cese el movimiento.",
    "Inundaciones: Nunca camine o conduzca por corrientes de agua. Solo 15 cm de agua en movimiento pueden derribarlo.",
    "Monóxido de carbono: No encienda generadores a gasolina ni fogatas en interiores. Generan gases invisibles y mortales.",
    "Información por radio: Sintonice boletines oficiales en radios a batería. Las antenas móviles suelen caer primero.",
    "Higiene de heridas: Limpie con gel antibacterial si escasea el agua limpia. Proteja heridas abiertas de humedad y lodo."
  ],
  hi: [
    "पीने का पानी: रोगाणुओं को मारने के लिए पानी को कम से कम 1 मिनट तक उबालें, या प्रति गैलन पानी में 8 बूंद ब्लीच मिलाएं।",
    "भूकंप के दौरान: जमीन पर झुकें, एक भारी मेज के नीचे खुद को ढकें, और कंपन रुकने तक मजबूती से पकड़े रहें।",
    "बाढ़ से बचना: बहते पानी में कभी भी पैदल न चलें या गाड़ी न चलाएं। मात्र 6 इंच पानी आपको बहा सकता है।",
    "कार्बन मोनोऑक्साइड का खतरा: कमरे या गैरेज के अंदर कभी भी गैस जनरेटर या बारबेक्यू न चलाएं। यह जानलेवा गैस बनाता है।",
    "रेडियो समाचार: आपातकालीन समाचार प्राप्त करने के लिए बैटरी वाले रेडियो का उपयोग करें। मोबाइल नेटवर्क अक्सर फेल हो जाते हैं।",
    "स्वच्छता: यदि साफ पानी कम हो, तो हाथों को साफ करने के लिए सैनिटाइजर का उपयोग करें। खुले घावों को सूखा और साफ रखें।"
  ],
  ja: [
    "飲料水の確保: 水は最低1分間沸騰させるか、水道水なら水1Lに対し家庭用塩素系漂白剤を1〜2滴混ぜて消毒します。",
    "地震発生時: まず身を低くし、机の下など頭を守れる場所に入り、揺れが完全に収まるまで足などをしっかり握って耐えます。",
    "水害時の避難: 冠水した道路を歩く際は水面下のマンホール等に注意し、流れる水には絶対に入らない（水深15cmでも歩行困難になります）。",
    "一酸化炭素中毒注意: 発電機や炭火などを閉め切った屋内や車内で絶対に使用しないでください。無臭の有毒ガスが充満します。",
    "ラジオ情報の活用: 停電時はバッテリー式のFM/AMラジオが最も確実な情報源です。基地局損壊でスマホは繋がりにくくなります。",
    "傷口の保護: 断水時はアルコールジェルで手指を消毒し、傷口は細菌が入らないよう清潔な包帯やフィルムで乾いた状態を保ちます。"
  ]
};

// ----------------------------------------------------
// 3. EMERGENCY CONTACTS DATABASE
// ----------------------------------------------------
const CONTACTS_DB = {
  us: [
    { label: "Emergency Services", name: "Police / Fire / Medical", dial: "911" },
    { label: "FEMA Helpline", name: "Federal Emergency Management", dial: "1-800-621-3362" },
    { label: "Poison Control Center", name: "Toxic Substance Treatment", dial: "1-800-222-1222" }
  ],
  in: [
    { label: "National Emergency Number", name: "Unified Services Help", dial: "112" },
    { label: "Disaster Management (NDMA)", name: "National Relief Force", dial: "1078" },
    { label: "Ambulance / Medical", name: "Medical Aid Service", dial: "102" },
    { label: "Police Helpline", name: "Police Emergency", dial: "100" }
  ],
  jp: [
    { label: "Fire / Ambulance", name: "消防・救急要請", dial: "119" },
    { label: "Police Patrol", name: "警察事件事故通報", dial: "110" },
    { label: "Coast Guard Rescue", name: "海上保安庁（水難救助）", dial: "118" }
  ],
  es: [
    { label: "Emergencias Generales", name: "Servicios integrados de ayuda", dial: "112" },
    { label: "Policía Nacional", name: "Seguridad y Orden", dial: "091" },
    { label: "Urgencias Médicas", name: "S.A.M.U. / Asistencia", dial: "061" }
  ]
};

// ----------------------------------------------------
// 4. MOCK SHELTERS DATABASE (By Proximity Simulation)
// ----------------------------------------------------
const SHELTER_DB = {
  mumbai: {
    lat: 19.0760, lng: 72.8777,
    shelters: [
      { name: "Sion Community High School (Elevated)", facility: "Food, Drinking Water, Triage Beds", lat: 19.0370, lng: 72.8630 },
      { name: "Dharavi Stadium Shelter (High Ground)", facility: "Rescue Supply Distribution, Emergency Power", lat: 19.0420, lng: 72.8550 },
      { name: "Kurla Municipal Welfare Hall", facility: "Basic Shelter, Blankets, Dry Rations", lat: 19.0720, lng: 72.8890 }
    ],
    hospitals: [
      { name: "Sion Municipal General Hospital", facility: "24/7 Trauma Care, Flood-safe generator power", lat: 19.0360, lng: 72.8600 },
      { name: "KEM Hospital Parel", facility: "Major Surgical Unit, Oxygen Support", lat: 19.0030, lng: 72.8420 }
    ]
  },
  tokyo: {
    lat: 35.6762, lng: 139.6503,
    shelters: [
      { name: "Yoyogi Park Disaster Evacuation Zone", name_ja: "代々木公園 広域避難場所", facility: "Emergency Water Reservoir, Solar Charging Station", lat: 35.6715, lng: 139.6949 },
      { name: "Shinjuku Sports Gymnasium (Seismic Safe)", name_ja: "新宿スポーツセンター（耐震避難所）", facility: "Blankets, Satellite Communication, Food Storage", lat: 35.7061, lng: 139.7042 },
      { name: "Meguro Ward Office Shelter", name_ja: "目黒区役所 本庁舎避難所", facility: "Basic Lodging, Medical Triage Kit", lat: 35.6415, lng: 139.6980 }
    ],
    hospitals: [
      { name: "Tokyo Metropolitan Hiroo Hospital", name_ja: "都立広尾病院（災害拠点病院）", facility: "Critical Emergency Unit, Heliport, Water Reserve", lat: 35.6473, lng: 139.7212 },
      { name: "Red Cross Medical Center Shibuya", name_ja: "日本赤十字社医療センター", facility: "Major Disaster Medical Station", lat: 35.6548, lng: 139.7196 }
    ]
  },
  san_francisco: {
    lat: 37.7749, lng: -122.4194,
    shelters: [
      { name: "Kezar Pavilion Evacuation Base", facility: "Seismically reinforced, Food distribution, generator power", lat: 37.7667, lng: -122.4578 },
      { name: "Bill Graham Auditorium Center", facility: "Large-scale housing, Medical triage facility", lat: 37.7781, lng: -122.4169 },
      { name: "Marina Green Safety Point (Open Air)", facility: "Helicopter evacuation assembly point", lat: 37.8038, lng: -122.4372 }
    ],
    hospitals: [
      { name: "Zuckerberg San Francisco General Hospital", facility: "Level 1 Trauma Center, Backup microgrid", lat: 37.7558, lng: -122.4048 },
      { name: "UCSF Medical Center Parnassus", facility: "Major Surgery, High capacity emergency beds", lat: 37.7631, lng: -122.4582 }
    ]
  },
  miami: {
    lat: 25.7617, lng: -80.1918,
    shelters: [
      { name: "South Miami Senior High (Storm Shelter)", facility: "Category 5 Wind Rated, Emergency generator", lat: 25.7062, lng: -80.2985 },
      { name: "Booker T. Washington School Shelter", facility: "High Ground, pet-friendly, medical backup station", lat: 25.7925, lng: -80.2038 }
    ],
    hospitals: [
      { name: "Jackson Memorial Hospital", facility: "Comprehensive Trauma Center, Hurricane Safe", lat: 25.7903, lng: -80.2096 },
      { name: "Mercy Hospital Miami", facility: "Emergency surgery, backup marine evacuation dock", lat: 25.7352, lng: -80.2185 }
    ]
  },
  dhaka: {
    lat: 23.8103, lng: 90.4125,
    shelters: [
      { name: "Mirpur Stadium Cyclone Shelter", facility: "Flood safe, high concrete capacity, drinking water", lat: 23.8016, lng: 90.3533 },
      { name: "Dhaka University Gymnasium Shelter", facility: "Emergency rations, blankets, temporary beds", lat: 23.7314, lng: 90.3922 }
    ],
    hospitals: [
      { name: "Dhaka Medical College Hospital", facility: "Primary Disaster Response Unit", lat: 23.7258, lng: 90.3976 },
      { name: "Kurmitola General Hospital", facility: "Trauma ward, water supply reserves", lat: 23.8242, lng: 90.4132 }
    ]
  }
};

// ----------------------------------------------------
// 5. OFFLINE CHATBOT KNOWLEDGE BASE (keyword matching)
// ----------------------------------------------------
const CHATBOT_KB = {
  en: {
    bleeding: "🩸 **HOW TO STOP BLEEDING:**\n1. **Direct Pressure:** Press hard on the wound with a clean cloth or gauze.\n2. **Elevate:** Raise the injured limb above the level of the heart.\n3. **Do Not Peek:** If blood soaks through, add another bandage layer and press harder. Do not remove the bottom gauze.\n4. **Tourniquet:** Only use for life-threatening arm/leg bleeding. Tie it 2-3 inches above the wound.",
    cpr: "🫀 **CPR STEPS (UNRESPONSIVE/NOT BREATHING):**\n1. Call emergency services.\n2. **Compressions:** Push hard and fast in the center of the chest (100-120 per minute), about 2 inches deep.\n3. **Breaths:** After 30 compressions, tilt the head back and give 2 rescue breaths (if trained).\n4. **Repeat:** Continue the cycle of 30 compressions to 2 breaths until medical help arrives.",
    earthquake: "🫨 **EARTHQUAKE SURVIVAL TIPS:**\n* **If inside:** DROP to your knees, COVER under a sturdy desk or table, and HOLD ON. Avoid windows, glass, and exterior walls.\n* **If outside:** Move to an open area clear of buildings, power lines, and trees. Drop to the ground.\n* **If in a vehicle:** Pull over to a safe area. Avoid bridges, overpasses, and utility poles.",
    cyclone: "🌀 **CYCLONE/HURRICANE PREP:**\n* Board up windows and tape large glass sheets.\n* Secure loose items in the yard (chairs, bikes, bins).\n* Move family to the strongest, windowless room in the house (bathroom or hallway).\n* Keep emergency radio, water (3 gallons/person), and power bank close.",
    flood: "💧 **FLOOD SAFETY INSTRUCTIONS:**\n* Move to higher floors or designated community shelter zones. Avoid basements.\n* **Never touch floodwater:** It can contain sewage, chemical toxins, or live electrical wires.\n* **Turn off utility lines:** Shut off electrical mains and gas valves.\n* Do not drive or walk through flood waters (6 inches of rushing water can sweep a person away).",
    water: "💧 **MAKING WATER SAFE TO DRINK:**\n* **Boil:** Bring water to a rolling boil for at least 1 minute (3 minutes at high altitude).\n* **Bleach:** Add 8 drops (1/8 teaspoon) of regular, unscented household bleach per gallon. Shake and wait 30 minutes.\n* **Avoid:** Raw surface water. Filter through cloth before boiling/treating if it's muddy.",
    shelter: "🗺️ **FINDING A SHELTER:**\n* Open the **Shelters** tab on this app.\n* Use GPS to calculate the closest shelter.\n* If you have no internet, walk towards high-ground concrete community centers, stadium domes, or municipal schools.",
    food: "🥫 **EMERGENCY FOOD TIPS:**\n* Eat perishable food first. Save dry items and canned goods for later.\n* Do not eat food that has come into contact with floodwater.\n* If electricity is out, keep the refrigerator closed as long as possible (keeps cold for 4 hours)."
  },
  es: {
    bleeding: "🩸 **CÓMO DETENER EL SANGRADO:**\n1. **Presión directa:** Presione fuerte sobre la herida con un paño limpio.\n2. **Elevar:** Levante la extremidad por encima del corazón.\n3. **No quitar la gasa:** Si la sangre se filtra, ponga otra tela encima. No retire la original.\n4. **Torniquete:** Úselo solo en extremidades para sangrado crítico.",
    cpr: "🫀 **PASOS DE RCP (INCONSCIENTE / NO RESPIRA):**\n1. Llame a emergencias primero.\n2. **Compresiones:** Empuje rápido y fuerte en el centro del pecho (100-120 por min) a 5cm de profundidad.\n3. **Respiraciones:** Dé 2 insuflaciones de rescate después de 30 compresiones.\n4. **Repetir:** Ciclo de 30 compresiones por 2 insuflaciones.",
    earthquake: "🫨 **SOBREVIVIR A TERREMOTOS:**\n* **En interiores:** AGACHESE, CUBRASE bajo una mesa y SUJETESE. Aléjese de ventanas.\n* **En el exterior:** Busque un lugar abierto libre de cables, postes y edificios.\n* **En el coche:** Estaciónese en zona segura lejos de puentes.",
    cyclone: "🌀 **PREPARACIÓN PARA CICLÓN:**\n* Tape ventanas y asegure objetos sueltos del jardín.\n* Refúgiese en la habitación más fuerte e interna del hogar (baño o pasillo).\n* Tenga linternas, agua y radio a batería a mano.",
    flood: "💧 **SEGURIDAD EN INUNDACIÓN:**\n* Evacue hacia zonas elevadas o refugios. Evite sótanos.\n* **No toque el agua:** puede tener bacterias o cables eléctricos activos.\n* **Corte los servicios:** Apague la corriente general y gas.\n* No cruce corrientes de agua a pie ni en vehículo.",
    water: "💧 **AGUA POTABLE DE EMERGENCIA:**\n* **Hervir:** Deje hervir el agua durante al menos 1 minuto.\n* **Cloro:** Agregue 8 gotas de cloro doméstico sin olor por cada galón (4 litros). Espere 30 min.\n* **Filtrar:** Filtre el lodo con tela limpia antes de tratarla.",
    shelter: "🗺️ **BUSCAR REFUGIO:**\n* Vaya a la pestaña **Refugios** en esta app.\n* Use el GPS para ver las opciones más cercanas.\n* Si está desconectado, busque escuelas municipales o polideportivos en áreas altas.",
    food: "🥫 **ALIMENTOS DE EMERGENCIA:**\n* Consuma comida perecedera primero. Guarde latas para después.\n* No coma alimentos en contacto con agua de inundación.\n* Evite abrir el refrigerador sin necesidad para retener el frío."
  },
  hi: {
    bleeding: "🩸 **रक्तस्राव रोकने के उपाय:**\n1. **सीधा दबाव:** घाव पर साफ कपड़े से जोर से दबाएं।\n2. **ऊपर उठाएं:** चोटिल अंग को दिल के स्तर से ऊपर उठाएं।\n3. **पट्टी न निकालें:** खून बाहर निकलने पर पहली पट्टी के ऊपर ही दूसरा कपड़ा लपेटें।\n4. **टूर्निकेट:** केवल गंभीर स्थिति में घाव से 2-3 इंच ऊपर कसकर बांधें।",
    cpr: "🫀 **सीपीआर के चरण (जब व्यक्ति सांस न ले रहा हो):**\n1. आपातकालीन सेवाओं को कॉल करें।\n2. **दबाव:** छाती के केंद्र में प्रति मिनट 100-120 बार तेजी से दबाएं (2 इंच गहरा)।\n3. **सांस:** 30 बार दबाने के बाद सिर पीछे झुकाकर मुंह से 2 बार सांस दें।\n4. **चक्र:** 30 बार दबाने और 2 बार सांस देने का चक्र दोहराते रहें।",
    earthquake: "🫨 **भूकंप सुरक्षा निर्देश:**\n* **घर के अंदर:** झुकें, मजबूत मेज के नीचे खुद को ढकें, और पकड़े रहें। खिड़कियों से दूर रहें।\n* **घर के बाहर:** इमारतों, बिजली के तारों और पेड़ों से दूर खुले मैदान में जाएं।\n* **गाड़ी में:** गाड़ी रोक लें, पुल या भारी खंभों के पास न रुकें।",
    cyclone: "🌀 **चक्रवात की तैयारी:**\n* खिड़कियां बंद करें, खुले सामान को घर के अंदर रखें।\n* घर के सबसे मजबूत कमरे (जैसे बाथरूम या गलियारा) में आश्रय लें।\n* रेडियो, पीने का पानी और पावर बैंक को साथ रखें।",
    flood: "💧 **बाढ़ में सुरक्षा नियम:**\n* ऊंचे स्थानों या शिविरों में जाएं। बेसमेंट में न रहें।\n* **बाढ़ के पानी से दूर रहें:** इसमें करंट या विषैले रसायन हो सकते हैं।\n* **बिजली-गैस बंद करें:** मुख्य स्विच बंद कर दें।\n* बहते पानी में न चलें, न ही गाड़ी चलाएं।",
    water: "💧 **पीने के पानी को साफ करना:**\n* **उबालें:** पानी को कम से कम 1 मिनट तक उबालें।\n* **ब्लीच:** एक गैलन (4 लीटर) पानी में 8 बूंद ब्लीच डालें और 30 मिनट प्रतीक्षा करें।\n* **छानना:** गंदे पानी को पहले सूती कपड़े से छान लें, फिर उबालें।",
    shelter: "🗺️ **आश्रय खोजना:**\n* इस ऐप में **आश्रय (Shelters)** टैब खोलें।\n* जीपीएस ऑन करके दूरी जांचें।\n* इंटरनेट न होने पर स्टेडियम, ऊंचे स्कूल या कम्युनिटी हॉल की ओर जाएं।",
    food: "🥫 **आपातकालीन भोजन निर्देश:**\n* जल्दी खराब होने वाला खाना पहले खाएं। डिब्बाबंद वस्तुओं को बाद के लिए बचाएं।\n* बाढ़ के पानी के संपर्क में आया भोजन कभी न खाएं।"
  },
  ja: {
    bleeding: "🩸 **止血方法:**\n1. **直接圧迫:** 清潔な布やガーゼを傷口にあて、両手で体重をかけ強く押し続けます。\n2. **患部の挙上:** 傷口を心臓の位置より高く上げます。\n3. **ガーゼを剥がさない:** 血がにじんでも、最初の布を取らずに新しい布を重ねてさらに強く圧迫します。\n4. **止血帯:** 四肢の命に関わる大出血にのみ、傷口の数センチ上を縛ります。",
    cpr: "🫀 **CPR（心肺蘇生）手順:**\n1. ただちに119番通報を行います。\n2. **胸骨圧迫:** 胸の真ん中を1分間に100〜120回、約5cm沈むまで強く押し続けます。\n3. **人工呼吸:** 30回圧迫の後、顎を上げ気道を確保し、2回息を吹き込みます。\n4. **繰り返す:** 30回の圧迫と2回の人呼吸を救急隊が来るまで交互に繰り返します。",
    earthquake: "🫨 **地震時の生存指示:**\n* **屋内の場合:** すぐに姿勢を低くし、机等の下に頭を隠し、揺れが収まるまで脚を握って耐えます。窓から離れてください。\n* **屋外の場合:** 看板や電線、外壁から離れ、公園などの開けた場所に退避します。\n* **運転中の場合:** ハザードを点灯し左側線に停車。鍵をつけたまま避難します。",
    cyclone: "🌀 **台風・サイクロン対策:**\n* 窓や雨戸を閉め、必要なら養生テープで補強します。屋外の物はすべて室内に格納します。\n* 窓から離れた家の中で最も頑丈な部屋（浴室や廊下）に留まります。\n* 防災ラジオ、飲料水、モバイルバッテリーを手元に用意します。",
    flood: "💧 **洪水・浸水時の安全対策:**\n* 危険な低地や地下から離れ、安全な高台やビルの上階（垂直避難）へ移動します。\n* **浸水した水に触れない:** 汚水、有害物質、感電の危険があります。\n* **ライフライン遮断:** 避難前にガス元栓、電気ブレーカーを落とします。\n* 水深が浅くても流れる水の中は決して歩かないでください。",
    water: "💧 **飲料水の安全確保:**\n* **沸騰:** 最低1分間しっかりと沸騰させ、冷ましてから飲みます。\n* **塩素消毒:** 飲料用の水缶に家庭用漂白剤（塩素系）を極少量加えてウイルス等を死滅させます（適切な割合を確認のこと）。\n* **泥水の処理:** 濁りがある場合は布でろ過した後に、煮沸または薬品殺菌を行います。",
    shelter: "🗺️ **避難所の探し方:**\n* このアプリの「**避難所（Shelters）**」タブを開きます。\n* GPSによる現在位置から最も近いポイントを算出します。\n* オフラインの際は近くの中学校、高校、体育館、市役所などを目指します。",
    food: "🥫 **非常食の取り扱い:**\n* 冷蔵庫のナマモノを優先的に消費します。缶詰や乾燥米は備蓄用に温存します。\n* 浸水被害に遭った食品は、パッケージに関わらず破棄してください。"
  }
};

// ----------------------------------------------------
// 6. GLOBAL STATE MANAGEMENT & INITIALIZATION
// ----------------------------------------------------

let currentLanguage = 'en';
let currentDisasterSim = 'none';
let mySafetyStatus = 'safe';
let mapInstance = null;
let currentCoords = { lat: 19.0760, lng: 72.8777, name: "Mumbai (Default)" }; // Default center
let mapMarkers = [];

// Audio Context for Rescue Siren
let audioCtx = null;
let sirenOscillator = null;
let sirenGain = null;
let sirenInterval = null;
let isSirenPlaying = false;

// Strobe Timer
let strobeInterval = null;
let isStrobeActive = false;

// ----------------------------------------------------
// 7. EVENT LISTENERS & DOM LOAD
// ----------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  initApp();
  initMap();
  bindUIEvents();
  changeLanguage('en'); // Default to English initially
  loadChecklist('general');
  loadSurvivalTip();
  populateContacts('us');
});

// Initialize settings
function initApp() {
  // Check localStorage for saved safety status
  const savedStatus = localStorage.getItem('disaster_safety_status');
  if (savedStatus) {
    mySafetyStatus = savedStatus;
    document.querySelectorAll('.status-opt-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.status === savedStatus) {
        btn.classList.add('active');
      }
    });
  }

  // Monitor network connection
  window.addEventListener('online', updateNetworkStatus);
  window.addEventListener('offline', updateNetworkStatus);
  updateNetworkStatus();
}

function updateNetworkStatus() {
  const statusContainer = document.getElementById('network-status');
  const statusText = document.getElementById('status-text');
  
  if (navigator.onLine) {
    statusContainer.className = "status-indicator online";
    statusText.textContent = TRANSLATIONS[currentLanguage].status_online;
    // Map offline placeholder hidden
    document.querySelector('.map-offline-placeholder')?.classList.add('hidden');
  } else {
    statusContainer.className = "status-indicator offline";
    statusText.textContent = TRANSLATIONS[currentLanguage].status_offline;
    // Map offline placeholder shown
    document.querySelector('.map-offline-placeholder')?.classList.remove('hidden');
  }
}

// Tab Switching
function bindUIEvents() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      tabPanels.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const target = btn.dataset.target;
      document.getElementById(target).classList.add("active");

      // Handle Leaflet map refresh when switching tabs
      if (target === 'tab-map' && mapInstance) {
        setTimeout(() => {
          mapInstance.invalidateSize();
        }, 100);
      }
    });
  });

  // Language Dropdown
  document.getElementById('lang-select').addEventListener('change', (e) => {
    changeLanguage(e.target.value);
  });

  // Disaster Simulator Selector
  document.getElementById('simulated-disaster-selector').addEventListener('change', (e) => {
    currentDisasterSim = e.target.value;
    updateDisasterBanner();
  });

  // Next survival tip button
  document.getElementById('next-tip-btn').addEventListener('click', loadSurvivalTip);

  // Contacts Selector
  document.getElementById('country-contacts-select').addEventListener('change', (e) => {
    populateContacts(e.target.value);
  });

  // SOS Fast Actions
  document.getElementById('quick-siren-btn').addEventListener('click', () => {
    // Jump to tools tab and trigger siren
    document.querySelector('.tab-btn[data-target="tab-tools"]').click();
    if (!isSirenPlaying) {
      toggleSiren();
    }
  });

  // Safety Status buttons
  document.querySelectorAll('.status-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.status-opt-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      mySafetyStatus = btn.dataset.status;
      localStorage.setItem('disaster_safety_status', mySafetyStatus);
      updateSOSPreview(); // Update generated message
    });
  });

  // Geolocation / GPS Finder
  document.getElementById('gps-btn').addEventListener('click', getGPSLocation);

  // Search Address/City Location Finder
  document.getElementById('search-btn').addEventListener('click', searchLocation);
  document.getElementById('location-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchLocation();
  });

  // SOS Message Modal Events
  const modal = document.getElementById('sos-message-modal');
  document.getElementById('trigger-sos-msg-btn').addEventListener('click', () => {
    modal.classList.remove('hidden');
    updateSOSPreview();
  });
  document.getElementById('close-modal-btn').addEventListener('click', () => {
    modal.classList.add('hidden');
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });

  // SOS Fields update preview
  document.getElementById('sos-input-phone').addEventListener('input', updateSOSPreview);
  document.getElementById('sos-input-custom-text').addEventListener('input', updateSOSPreview);
  document.getElementById('copy-sos-btn').addEventListener('click', copySOSMessage);

  // Chat send button
  document.getElementById('chat-send-btn').addEventListener('click', sendChatMessage);
  document.getElementById('chat-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendChatMessage();
  });
  document.getElementById('clear-chat-btn').addEventListener('click', () => {
    const chatContainer = document.getElementById('chat-messages-container');
    chatContainer.innerHTML = '';
    appendSystemMessage(TRANSLATIONS[currentLanguage].chat_welcome);
  });

  // Chat Suggestion Chips
  document.querySelectorAll('.chip-btn').forEach(chip => {
    chip.addEventListener('click', () => {
      const query = chip.getAttribute('data-query') || chip.textContent;
      document.getElementById('chat-input').value = query;
      sendChatMessage();
    });
  });

  // First Aid Sidebar Navigation
  document.querySelectorAll('.firstaid-category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.firstaid-category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderFirstAidTopic(btn.dataset.topic);
    });
  });

  // Checklist Type Selector
  document.getElementById('checklist-type-selector').addEventListener('change', (e) => {
    loadChecklist(e.target.value);
  });

  // Reset Checklist Button
  document.getElementById('reset-checklist-btn').addEventListener('click', () => {
    const listType = document.getElementById('checklist-type-selector').value;
    const items = CHECKLISTS_DATA[listType][currentLanguage] || CHECKLISTS_DATA[listType]['en'];
    items.forEach(item => {
      localStorage.removeItem(`disaster_check_${listType}_${item.id}`);
    });
    loadChecklist(listType);
  });

  // Siren and Flash Beacon Controls
  document.getElementById('siren-toggle-btn').addEventListener('click', toggleSiren);
  document.getElementById('siren-volume').addEventListener('input', (e) => {
    if (sirenOscillator && isSirenPlaying) {
      // Adjust center frequency on the fly
      const val = parseInt(e.target.value);
      console.log("[Siren] Frequency adjustment:", val);
    }
  });

  document.getElementById('strobe-toggle-btn').addEventListener('click', toggleStrobe);
}

// ----------------------------------------------------
// 8. TRANSLATION ENGINE IMPLEMENTATION
// ----------------------------------------------------

function changeLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLanguage = lang;

  // Apply translations to all DOM elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (TRANSLATIONS[lang][key]) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  // Apply inputs placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (TRANSLATIONS[lang][key]) {
      el.setAttribute('placeholder', TRANSLATIONS[lang][key]);
    }
  });

  // Re-load checklists to reflect translated language
  const listType = document.getElementById('checklist-type-selector').value;
  loadChecklist(listType);

  // Update Alert instructions
  updateDisasterBanner();

  // Populate first-aid details
  const activeTopicBtn = document.querySelector('.firstaid-category-btn.active');
  if (activeTopicBtn) {
    renderFirstAidTopic(activeTopicBtn.dataset.topic);
  }

  // Refresh emergency contacts list translation (label may be localized/translatable)
  const contactCountry = document.getElementById('country-contacts-select').value;
  populateContacts(contactCountry);

  // Reload tip of day
  loadSurvivalTip();

  // Update network status display
  updateNetworkStatus();

  // Recompute markers/text lists for Proximity search in selected language
  findProximityResults();
}

function updateDisasterBanner() {
  const instrEl = document.getElementById('alert-instructions');
  
  if (currentDisasterSim === 'none') {
    instrEl.textContent = TRANSLATIONS[currentLanguage].alert_instructions_none;
    instrEl.style.color = "var(--text-muted)";
  } else {
    instrEl.textContent = TRANSLATIONS[currentLanguage][`alert_instructions_${currentDisasterSim}`];
    instrEl.style.color = "var(--text-main)";
    
    // Auto trigger related checklist selector to be helpful
    document.getElementById('checklist-type-selector').value = currentDisasterSim;
    loadChecklist(currentDisasterSim);
  }
}

// ----------------------------------------------------
// 9. LEAFLET MAP & PROXIMITY CALCULATOR
// ----------------------------------------------------

function initMap() {
  try {
    // Check if Leaflet is defined
    if (typeof L === 'undefined') {
      console.warn("Leaflet script did not load.");
      document.querySelector('.map-offline-placeholder')?.classList.remove('hidden');
      return;
    }

    // Leaflet init
    mapInstance = L.map('map', {
      zoomControl: true,
      scrollWheelZoom: true
    }).setView([currentCoords.lat, currentCoords.lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapInstance);

    // Initial proximity scan
    findProximityResults();
  } catch (error) {
    console.error("Map initialization failed:", error);
    document.querySelector('.map-offline-placeholder')?.classList.remove('hidden');
  }
}

function findProximityResults() {
  // 1. Identify which city is closest to currentCoords, or default to general simulation
  let selectedCity = 'mumbai'; // fallback
  let minCityDist = Infinity;

  Object.keys(SHELTER_DB).forEach(cityKey => {
    const city = SHELTER_DB[cityKey];
    const dist = calculateDistance(currentCoords.lat, currentCoords.lng, city.lat, city.lng);
    if (dist < minCityDist) {
      minCityDist = dist;
      selectedCity = cityKey;
    }
  });

  // If the closest pre-coded city center is > 100km away, we generate custom shelters centered around current coordinates!
  // This ensures that geolocation works for ANY place in the world.
  let shelters = [];
  let hospitals = [];

  if (minCityDist > 100) {
    console.log("Generating custom markers around location:", currentCoords.name);
    // Generate pseudo-shelters nearby coordinates
    shelters = [
      { name: `Emergency Refuge Center A (High School)`, facility: "Clean water, blankets, emergency generator power", lat: currentCoords.lat + 0.008, lng: currentCoords.lng + 0.006 },
      { name: `Emergency Shelter B (Community Center)`, facility: "Food rations, medical checkups, power banks", lat: currentCoords.lat - 0.007, lng: currentCoords.lng + 0.012 },
      { name: `Local Stadium Shelter C`, facility: "Large capacity, rescue helicopter zone", lat: currentCoords.lat + 0.012, lng: currentCoords.lng - 0.005 }
    ];
    hospitals = [
      { name: `Regional Community Medical Center`, facility: "Surgical triage, oxygen backup supplies", lat: currentCoords.lat - 0.003, lng: currentCoords.lng - 0.006 },
      { name: `Municipal General Emergency Clinic`, facility: "Basic injury care, ambulance bay", lat: currentCoords.lat + 0.004, lng: currentCoords.lng - 0.002 }
    ];
  } else {
    // Load from static shelter DB
    shelters = [...SHELTER_DB[selectedCity].shelters];
    hospitals = [...SHELTER_DB[selectedCity].hospitals];
  }

  // Calculate actual distances from currentCoords
  shelters.forEach(s => {
    s.distance = calculateDistance(currentCoords.lat, currentCoords.lng, s.lat, s.lng);
  });
  hospitals.forEach(h => {
    h.distance = calculateDistance(currentCoords.lat, currentCoords.lng, h.lat, h.lng);
  });

  // Sort by distance
  shelters.sort((a, b) => a.distance - b.distance);
  hospitals.sort((a, b) => a.distance - b.distance);

  // Render on Map if online and Leaflet initialized
  if (mapInstance && typeof L !== 'undefined') {
    // Clear old markers
    mapMarkers.forEach(m => mapInstance.removeLayer(m));
    mapMarkers = [];

    // Redraw map center
    mapInstance.setView([currentCoords.lat, currentCoords.lng], 13);

    // Marker for User Location
    const userMarker = L.marker([currentCoords.lat, currentCoords.lng], {
      icon: L.divIcon({
        className: 'user-map-pin',
        html: '<div style="background-color:#3b82f6; width:16px; height:16px; border-radius:50%; border:2px solid white; box-shadow:0 0 8px rgba(0,0,0,0.5)"></div>',
        iconSize: [16, 16]
      })
    }).addTo(mapInstance).bindPopup(`<b>You are here</b><br>${currentCoords.name}`);
    mapMarkers.push(userMarker);

    // Markers for shelters (Amber/Orange)
    shelters.forEach(s => {
      const pin = L.marker([s.lat, s.lng], {
        icon: L.divIcon({
          className: 'shelter-map-pin',
          html: `<div style="background-color:#f59e0b; width:18px; height:18px; border-radius:50%; border:2px solid white; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:bold; color:black; box-shadow:0 0 10px rgba(245,158,11,0.5)">⛺</div>`,
          iconSize: [20, 20]
        })
      }).addTo(mapInstance).bindPopup(`<b>${s.name}</b><br>${s.facility}<br><b>Distance:</b> ${s.distance.toFixed(2)} km`);
      mapMarkers.push(pin);
    });

    // Markers for hospitals (Emerald/Green)
    hospitals.forEach(h => {
      const pin = L.marker([h.lat, h.lng], {
        icon: L.divIcon({
          className: 'hospital-map-pin',
          html: `<div style="background-color:#10b981; width:18px; height:18px; border-radius:50%; border:2px solid white; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:bold; color:white; box-shadow:0 0 10px rgba(16,185,129,0.5)">➕</div>`,
          iconSize: [20, 20]
        })
      }).addTo(mapInstance).bindPopup(`<b>${h.name}</b><br>${h.facility}<br><b>Distance:</b> ${h.distance.toFixed(2)} km`);
      mapMarkers.push(pin);
    });
  }

  // Render on List cards
  renderTextLists(shelters, hospitals);
}

function renderTextLists(shelters, hospitals) {
  const sheltersContainer = document.getElementById('shelters-list');
  const hospitalsContainer = document.getElementById('hospitals-list');

  // Render Shelters
  sheltersContainer.innerHTML = '';
  if (shelters.length === 0) {
    sheltersContainer.innerHTML = `<div class="shelter-detail">No shelters found nearby.</div>`;
  } else {
    shelters.forEach(s => {
      const name = (currentLanguage === 'ja' && s.name_ja) ? s.name_ja : s.name;
      const card = document.createElement('div');
      card.className = 'shelter-item';
      card.innerHTML = `
        <div class="shelter-header">
          <span class="shelter-name">${name}</span>
          <span class="shelter-distance">${s.distance.toFixed(2)} km</span>
        </div>
        <div class="shelter-detail">${s.facility}</div>
      `;
      card.addEventListener('click', () => {
        if (mapInstance) {
          mapInstance.setView([s.lat, s.lng], 15);
        }
      });
      sheltersContainer.appendChild(card);
    });
  }

  // Render Hospitals
  hospitalsContainer.innerHTML = '';
  if (hospitals.length === 0) {
    hospitalsContainer.innerHTML = `<div class="shelter-detail">No medical centers found nearby.</div>`;
  } else {
    hospitals.forEach(h => {
      const name = (currentLanguage === 'ja' && h.name_ja) ? h.name_ja : h.name;
      const card = document.createElement('div');
      card.className = 'shelter-item';
      card.innerHTML = `
        <div class="shelter-header">
          <span class="shelter-name">${name}</span>
          <span class="shelter-distance">${h.distance.toFixed(2)} km</span>
        </div>
        <div class="shelter-detail">${h.facility}</div>
      `;
      card.addEventListener('click', () => {
        if (mapInstance) {
          mapInstance.setView([h.lat, h.lng], 15);
        }
      });
      hospitalsContainer.appendChild(card);
    });
  }
}

// Haversine Distance Formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

// GPS coordinates finder
function getGPSLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        currentCoords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          name: "GPS Location"
        };
        console.log("[Location] GPS Coords: ", currentCoords);
        findProximityResults();
      },
      (error) => {
        console.warn("[Location] GPS access denied/failed. Simulating standard center.");
        alert("GPS Signal failed or blocked. Using default simulation coordinates.");
        // Simulating San Francisco as coordinates
        currentCoords = { lat: 37.7749, lng: -122.4194, name: "San Francisco (GPS Fail)" };
        findProximityResults();
      },
      { enableHighAccuracy: true, timeout: 5000 }
    );
  } else {
    alert("Geolocation is not supported by your device.");
  }
}

// Text address lookup
function searchLocation() {
  const val = document.getElementById('location-input').value.trim().toLowerCase();
  if (!val) return;

  // Search local cities database
  let found = false;
  Object.keys(SHELTER_DB).forEach(key => {
    if (key.includes(val) || val.includes(key)) {
      const city = SHELTER_DB[key];
      currentCoords = { lat: city.lat, lng: city.lng, name: key.toUpperCase() };
      found = true;
    }
  });

  if (!found) {
    // If not found in static list, simulate coordinates based on hash code so it changes coordinates anyway!
    let hash = 0;
    for (let i = 0; i < val.length; i++) {
      hash = val.charCodeAt(i) + ((hash << 5) - hash);
    }
    const lat = 10 + (Math.abs(hash % 40)); // 10 to 50 deg N
    const lng = -100 + (Math.abs((hash * 7) % 200)); // 100 W to 100 E
    currentCoords = { lat, lng, name: val.toUpperCase() };
  }

  findProximityResults();
}

// ----------------------------------------------------
// 10. SOS MESSAGE GENERATOR
// ----------------------------------------------------

function updateSOSPreview() {
  const phone = document.getElementById('sos-input-phone').value.trim();
  const notes = document.getElementById('sos-input-custom-text').value.trim();
  const coordsText = `Lat: ${currentCoords.lat.toFixed(4)}, Lng: ${currentCoords.lng.toFixed(4)}`;
  
  let statusText = "SAFE";
  if (mySafetyStatus === 'injured') statusText = "INJURED/NEED MEDICAL AID";
  if (mySafetyStatus === 'stranded') statusText = "STRANDED/NEED RESCUE";

  const timeStamp = new Date().toLocaleTimeString();

  // Draft message body
  const body = `🚨 DISASTER EMERGENCY SOS 🚨\n` +
               `Status: ${statusText}\n` +
               `Location: ${coordsText} (${currentCoords.name})\n` +
               `Time: ${timeStamp}\n` +
               (notes ? `Situation: ${notes}\n` : '') +
               `Sent via Disaster Relief Agent App (Offline Cached).`;

  document.getElementById('sos-message-preview').textContent = body;

  // Encode for URLs
  const encodedBody = encodeURIComponent(body);

  // Set links
  const whatsappBtn = document.getElementById('whatsapp-sos-btn');
  const smsBtn = document.getElementById('sms-sos-btn');

  whatsappBtn.href = `https://api.whatsapp.com/send?text=${encodedBody}`;
  if (phone) {
    smsBtn.href = `sms:${phone}?body=${encodedBody}`;
  } else {
    smsBtn.href = `sms:?body=${encodedBody}`;
  }
}

function copySOSMessage() {
  const txt = document.getElementById('sos-message-preview').textContent;
  navigator.clipboard.writeText(txt).then(() => {
    alert("SOS Message copied to clipboard.");
  }).catch(err => {
    console.error("Copy failed:", err);
  });
}

// ----------------------------------------------------
// 11. OFFLINE HEURISTICS CHATBOT ENGINE
// ----------------------------------------------------

function sendChatMessage() {
  const inputEl = document.getElementById('chat-input');
  const query = inputEl.value.trim().toLowerCase();
  if (!query) return;

  // Append user message
  appendUserMessage(inputEl.value);
  inputEl.value = '';

  // Processing response
  setTimeout(() => {
    let responseText = "";
    
    // Look up dictionary
    const langKB = CHATBOT_KB[currentLanguage] || CHATBOT_KB['en'];
    
    if (query.includes("bleed") || query.includes("blood") || query.includes("wound") || query.includes("कट") || query.includes("खून") || query.includes("出血")) {
      responseText = langKB.bleeding;
    } else if (query.includes("cpr") || query.includes("breathing") || query.includes("heart") || query.includes("होश") || query.includes("सांस") || query.includes("心肺")) {
      responseText = langKB.cpr;
    } else if (query.includes("earthquake") || query.includes("shake") || query.includes("tremor") || query.includes("भूकंप") || query.includes("कंपन") || query.includes("地震")) {
      responseText = langKB.earthquake;
    } else if (query.includes("cyclone") || query.includes("hurricane") || query.includes("storm") || query.includes("wind") || query.includes("चक्रवात") || query.includes("तूफान") || query.includes("台風")) {
      responseText = langKB.cyclone;
    } else if (query.includes("flood") || query.includes("river") || query.includes("water rising") || query.includes("बाढ़") || query.includes("जलस्तर") || query.includes("洪水")) {
      responseText = langKB.flood;
    } else if (query.includes("water") || query.includes("drink") || query.includes("purify") || query.includes("bleach") || query.includes("पानी") || query.includes("स्वच्छ") || query.includes("飲料水")) {
      responseText = langKB.water;
    } else if (query.includes("shelter") || query.includes("stay") || query.includes("map") || query.includes("आश्रय") || query.includes("शिविर") || query.includes("避難所")) {
      responseText = langKB.shelter;
    } else if (query.includes("food") || query.includes("eat") || query.includes("ration") || query.includes("खाना") || query.includes("भोजन") || query.includes("非常食")) {
      responseText = langKB.food;
    } else {
      // Default offline fallback helper
      if (currentLanguage === 'es') {
        responseText = "🤖 *Asistente fuera de línea:*\nNo entiendo completamente su consulta. Palabras clave sugeridas: **RCP**, **sangrado**, **terremoto**, **ciclón**, **inundación**, **agua**, **refugio**, **alimentos**.";
      } else if (currentLanguage === 'hi') {
        responseText = "🤖 *ऑफ़लाइन सहायक:*\nमैं आपकी बात पूरी तरह समझ नहीं पाया। इन शब्दों को खोजें: **रक्तस्राव**, **सीपीआर**, **भूकंप**, **बाढ़**, **चक्रवात**, **पानी**, **आश्रय**, **भोजन**।";
      } else if (currentLanguage === 'ja') {
        responseText = "🤖 *オフライン応答:*\nご質問内容に一致する防災知識が見つかりません。**CPR**, **止血**, **地震**, **台風**, **洪水**, **飲料水**, **避難所** などのキーワードを含めて質問してください。";
      } else {
        responseText = "🤖 *Offline AI Triage:*\nI don't have that specific card in my local cache. Try checking: **cpr**, **bleeding**, **earthquake**, **cyclone**, **flood**, **water**, **shelter**, **food**.";
      }
    }

    appendAgentMessage(responseText);
  }, 400);
}

function appendUserMessage(text) {
  const container = document.getElementById('chat-messages-container');
  const div = document.createElement('div');
  div.className = 'message user-msg';
  div.textContent = text;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function appendAgentMessage(markdownText) {
  const container = document.getElementById('chat-messages-container');
  const div = document.createElement('div');
  div.className = 'message agent-msg';
  
  // Quick basic markdown parser for bold, lists, and linebreaks
  let html = markdownText
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>');
  
  div.innerHTML = html;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function appendSystemMessage(text) {
  const container = document.getElementById('chat-messages-container');
  const div = document.createElement('div');
  div.className = 'message system-msg';
  div.textContent = text;
  container.appendChild(div);
}

// ----------------------------------------------------
// 12. FIRST AID HANDBOOK RENDERING
// ----------------------------------------------------

function renderFirstAidTopic(topic) {
  const panel = document.getElementById('firstaid-content-panel');
  const data = FIRSTAID_DATA[topic][currentLanguage] || FIRSTAID_DATA[topic]['en'];

  let stepsHtml = "";
  data.steps.forEach(step => {
    stepsHtml += `
      <div class="firstaid-step">
        <div class="step-number">${step.num}</div>
        <div class="step-text">
          <h4>${step.title}</h4>
          <p>${step.desc}</p>
        </div>
      </div>
    `;
  });

  panel.innerHTML = `
    <div class="firstaid-title-row">
      <h3>${data.title}</h3>
    </div>
    <div class="firstaid-warning">
      <p>${data.warning}</p>
    </div>
    <div class="firstaid-steps-timeline">
      ${stepsHtml}
    </div>
  `;
}

// ----------------------------------------------------
// 13. CHECKLIST STATE MANAGER
// ----------------------------------------------------

function loadChecklist(type) {
  const container = document.getElementById('checklist-items-container');
  const items = CHECKLISTS_DATA[type][currentLanguage] || CHECKLISTS_DATA[type]['en'];
  
  container.innerHTML = '';
  
  let checkedCount = 0;
  
  items.forEach(item => {
    const isChecked = localStorage.getItem(`disaster_check_${type}_${item.id}`) === 'true';
    if (isChecked) checkedCount++;

    const card = document.createElement('div');
    card.className = `check-item ${isChecked ? 'completed' : ''}`;
    card.innerHTML = `
      <input type="checkbox" id="${item.id}" ${isChecked ? 'checked' : ''}>
      <div class="check-label-text">
        <span class="check-title">${item.title}</span>
        <span class="check-desc">${item.desc}</span>
      </div>
    `;

    // Click handler for entire card
    card.addEventListener('click', (e) => {
      const checkbox = card.querySelector('input[type="checkbox"]');
      if (e.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
      }
      localStorage.setItem(`disaster_check_${type}_${item.id}`, checkbox.checked ? 'true' : 'false');
      card.classList.toggle('completed', checkbox.checked);
      
      // Update progress
      updateChecklistProgress(type);
    });

    container.appendChild(card);
  });

  updateChecklistProgress(type);
}

function updateChecklistProgress(type) {
  const items = CHECKLISTS_DATA[type][currentLanguage] || CHECKLISTS_DATA[type]['en'];
  const total = items.length;
  let checked = 0;

  items.forEach(item => {
    if (localStorage.getItem(`disaster_check_${type}_${item.id}`) === 'true') {
      checked++;
    }
  });

  const percentage = total > 0 ? Math.round((checked / total) * 100) : 0;
  
  document.getElementById('checklist-progress-text').textContent = `${percentage}% (${checked}/${total})`;
  document.getElementById('checklist-progress-bar').style.width = `${percentage}%`;
}

// ----------------------------------------------------
// 14. RESCUE BEACON & TOOLS UTILITIES
// ----------------------------------------------------

// Toggles the dual-tone Web Audio API rescue siren
function toggleSiren() {
  const sirenBtn = document.getElementById('siren-toggle-btn');
  const beaconGlow = document.getElementById('beacon-pulse-glow');
  
  if (isSirenPlaying) {
    // STOP
    stopAudioSiren();
    sirenBtn.textContent = TRANSLATIONS[currentLanguage].siren_toggle_play;
    sirenBtn.className = "btn btn-danger btn-large font-bold";
    beaconGlow.classList.remove('pulsing');
  } else {
    // START
    startAudioSiren();
    sirenBtn.textContent = TRANSLATIONS[currentLanguage].siren_toggle_stop;
    sirenBtn.className = "btn btn-success btn-large font-bold btn-pulse";
    beaconGlow.classList.add('pulsing');
  }
}

function startAudioSiren() {
  try {
    // Initialize Web Audio API context
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
    
    // Create oscillator and gain node
    sirenOscillator = audioCtx.createOscillator();
    sirenGain = audioCtx.createGain();
    
    sirenOscillator.type = 'sawtooth'; // piercing wave type
    sirenOscillator.frequency.value = 880; // A5 pitch

    sirenGain.gain.setValueAtTime(0.5, audioCtx.currentTime); // volume
    
    sirenOscillator.connect(sirenGain);
    sirenGain.connect(audioCtx.destination);
    
    sirenOscillator.start();
    isSirenPlaying = true;
    
    // Set frequency modulation timer (creates the oscillating "WEE-WOO" sound)
    let state = false;
    const baseFreq = parseInt(document.getElementById('siren-volume').value);
    
    sirenInterval = setInterval(() => {
      if (audioCtx && sirenOscillator) {
        state = !state;
        const targetFreq = state ? baseFreq + 300 : baseFreq - 150;
        // Glide frequency over 0.2 seconds for realistic siren effect
        sirenOscillator.frequency.exponentialRampToValueAtTime(targetFreq, audioCtx.currentTime + 0.2);
      }
    }, 400);

    console.log("[Siren] Audio Context started successfully.");
  } catch (err) {
    console.error("Failed to initialize audio siren:", err);
    alert("Audio API blocked. Click again or check site settings.");
  }
}

function stopAudioSiren() {
  if (sirenInterval) {
    clearInterval(sirenInterval);
    sirenInterval = null;
  }
  if (sirenOscillator) {
    try {
      sirenOscillator.stop();
      sirenOscillator.disconnect();
    } catch (e) {}
    sirenOscillator = null;
  }
  if (audioCtx) {
    try {
      audioCtx.close();
    } catch (e) {}
    audioCtx = null;
  }
  isSirenPlaying = false;
  console.log("[Siren] Audio Context stopped.");
}

// Strobe Flashlight Signaling
function toggleStrobe() {
  const strobeBtn = document.getElementById('strobe-toggle-btn');
  const previewBox = document.getElementById('strobe-preview-box');
  const overlay = document.getElementById('strobe-overlay');

  if (isStrobeActive) {
    // STOP
    if (strobeInterval) {
      clearInterval(strobeInterval);
      strobeInterval = null;
    }
    isStrobeActive = false;
    strobeBtn.textContent = TRANSLATIONS[currentLanguage].strobe_toggle_start;
    strobeBtn.className = "btn btn-warning btn-large font-bold";
    previewBox.className = "strobe-preview";
    previewBox.textContent = TRANSLATIONS[currentLanguage].strobe_preview_text;
    overlay.className = "hidden";
  } else {
    // START
    isStrobeActive = true;
    strobeBtn.textContent = TRANSLATIONS[currentLanguage].strobe_toggle_stop;
    strobeBtn.className = "btn btn-danger btn-large font-bold btn-pulse";
    previewBox.className = "strobe-preview flashing";
    previewBox.textContent = TRANSLATIONS[currentLanguage].strobe_preview_active;
    
    overlay.className = "flashing";
    
    // We toggle color class to double check rendering on some screens
    let flash = false;
    strobeInterval = setInterval(() => {
      flash = !flash;
    }, 100);
  }
}

// ----------------------------------------------------
// 15. COMPASS & GEOMAGNETIC SENSOR
// ----------------------------------------------------
const compassDisc = document.getElementById('compass-disc');
const compassVal = document.getElementById('compass-heading-val');
const permBtn = document.getElementById('compass-permission-btn');

// Start listening compass sensor
window.addEventListener('deviceorientation', handleOrientation);
window.addEventListener('deviceorientationabsolute', handleOrientation);

function handleOrientation(event) {
  let heading = null;

  // Check for iOS specialized compass heading
  if (event.webkitCompassHeading !== undefined) {
    heading = event.webkitCompassHeading;
  } 
  // Otherwise standard absolute alpha orientation
  else if (event.absolute && event.alpha !== undefined) {
    heading = 360 - event.alpha;
  }
  // Otherwise relative alpha (non-absolute fallback)
  else if (event.alpha !== undefined) {
    heading = 360 - event.alpha;
  }

  if (heading !== null) {
    // Smooth the heading values
    const roundedHeading = Math.round(heading);
    
    // Rotate the visual compass disc in the opposite direction to keep North pointing up!
    compassDisc.style.transform = `rotate(${-roundedHeading}deg)`;

    // Convert heading angle into standard cardinal direction
    let dir = "North";
    if (roundedHeading > 22.5 && roundedHeading <= 67.5) dir = "North-East";
    else if (roundedHeading > 67.5 && roundedHeading <= 112.5) dir = "East";
    else if (roundedHeading > 112.5 && roundedHeading <= 157.5) dir = "South-East";
    else if (roundedHeading > 157.5 && roundedHeading <= 202.5) dir = "South";
    else if (roundedHeading > 202.5 && roundedHeading <= 247.5) dir = "South-West";
    else if (roundedHeading > 247.5 && roundedHeading <= 292.5) dir = "West";
    else if (roundedHeading > 292.5 && roundedHeading <= 337.5) dir = "North-West";

    compassVal.textContent = `${roundedHeading}° (${dir})`;
  }
}

// iOS Safari Sensor Permission Request
if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
  permBtn.classList.remove('hidden');
  permBtn.addEventListener('click', () => {
    DeviceOrientationEvent.requestPermission()
      .then(response => {
        if (response === 'granted') {
          permBtn.classList.add('hidden');
          window.addEventListener('deviceorientation', handleOrientation);
        } else {
          alert("Permission to access compass sensor was denied.");
        }
      })
      .catch(console.error);
  });
}

// ----------------------------------------------------
// 16. MISCELLANEOUS SURVIVAL TIPS LOADER
// ----------------------------------------------------
let lastTipIdx = -1;
function loadSurvivalTip() {
  const tips = SURVIVAL_TIPS[currentLanguage] || SURVIVAL_TIPS['en'];
  let idx = Math.floor(Math.random() * tips.length);
  
  // Avoid repeating the same tip twice consecutively
  if (idx === lastTipIdx && tips.length > 1) {
    idx = (idx + 1) % tips.length;
  }
  lastTipIdx = idx;

  document.getElementById('tip-text').textContent = tips[idx];
}

// Populate Contacts list
function populateContacts(countryCode) {
  const container = document.getElementById('contacts-container');
  const contacts = CONTACTS_DB[countryCode] || CONTACTS_DB['us'];

  container.innerHTML = '';
  contacts.forEach(c => {
    const item = document.createElement('div');
    item.className = 'contact-item';
    item.innerHTML = `
      <div class="contact-info">
        <span class="contact-label">${c.label}</span>
        <span class="contact-name">${c.name}</span>
      </div>
      <a href="tel:${c.dial}" class="contact-dial">${c.dial}</a>
    `;
    container.appendChild(item);
  });
}

// ============================================================================
// INDIAN LOCALIZATIONS (BENGALI & MARATHI) & INDIAN REGIONAL DATABASES
// ============================================================================

// Additional Translations
const BN_TRANSLATIONS = {
  app_title: "দুর্যোগ ত্রাণ এআই",
  app_subtitle: "জরুরী সহকারী",
  status_online: "অনলাইন",
  status_offline: "অফলাইন মোড",
  active_alert: "সক্রিয় সতর্কতা:",
  alert_none: "কোন সক্রিয় সতর্কতা নেই (সিমুলেশন মোড)",
  alert_flood: "মৌসুমি বন্যা উচ্ছেদ - মুম্বাই ও অসম",
  alert_earthquake: "হিমালয় অঞ্চল ভূমিকম্পের কম্পন",
  alert_cyclone: "বঙ্গোপসাগর ঘূর্ণিঝড় - ওড়িশা ও পশ্চিমবঙ্গ",
  alert_instructions_none: "সক্রিয় সতর্কতা নির্বাচন করে প্রতিক্রিয়া পরীক্ষা করুন।",
  alert_instructions_flood: "সতর্কতা: মৌসুমি ভারী বৃষ্টিপাতের কারণে মুম্বাই ও অসমে জলস্তর বৃদ্ধি পাচ্ছে। অবিলম্বে নির্ধারিত উঁচু স্থানে চলে যান।",
  alert_instructions_earthquake: "সাবধানতা: হিমালয় পার্বত্য অঞ্চলে ভূমিকম্পের তীব্র কম্পন অনুভূত হয়েছে। কাঁচের জানালা, দেয়াল এবং ভারী জিনিসপত্র থেকে দূরে থাকুন।",
  alert_instructions_cyclone: "বিপদ: বঙ্গোপসাগরে ঘূর্ণিঝড়ের কারণে ওড়িশা ও পশ্চিমবঙ্গ উপকূলে জলোচ্ছ্বাসের লাল সতর্কতা। নিরাপদ ঘরে বা ঘূর্ণিঝড় আশ্রয়কেন্দ্রে আশ্রয় নিন।",
  tab_dashboard: "ড্যাশবোর্ড",
  tab_map: "আশ্রয়কেন্দ্র",
  tab_chat: "এআই ট্রায়াজ",
  tab_firstaid: "প্রাথমিক চিকিৎসা",
  tab_checklist: "চেক লিস্ট",
  tab_tools: "জরুরী বীকন",
  sos_actions: "এসওএস দ্রুত ব্যবস্থা",
  sos_description: "উদ্ধারকারীদের অবিলম্বে সংকেত পাঠান বা জরুরী বার্তা তৈরি করুন।",
  btn_sound_siren: "অডিও সাইরেন বাজান",
  btn_generate_sos: "এসওএস বার্তা তৈরি করুন",
  safety_status_title: "আমার নিরাপত্তা অবস্থা",
  safety_status_desc: "আপনার নিরাপত্তা অবস্থা স্থানীয়ভাবে সংরক্ষণ করুন দ্রুত বার্তার জন্য।",
  status_safe: "নিরাপদ ও সুস্থ",
  status_injured: "আহত / অসুস্থ",
  status_stranded: "আটকে পড়েছি / অবরুদ্ধ",
  contacts_title: "জরুরী ডিরেক্টরি",
  tip_title: "অফলাইন বেঁচে থাকার টিপস",
  next_tip_btn: "পরবর্তী টিপস",
  shelter_finder_title: "জরুরী আশ্রয়কেন্দ্র খুঁজুন",
  shelter_finder_desc: "নিকটতম নিরাপদ আশ্রয়স্থল এবং চিকিৎসা সেবা কেন্দ্রগুলো চিহ্নিত করুন।",
  location_placeholder: "শহরের নাম লিখুন (যেমন: Mumbai, Kolkata, Bhubaneswar)",
  search_btn: "অনুসন্ধান",
  gps_btn: "জিপিএস",
  nearest_shelters_title: "নিকটতম নিরাপদ আশ্রয়স্থল",
  nearest_hospitals_title: "জরুরী চিকিৎসা সুবিধা",
  map_offline_title: "অফলাইন থাকার কারণে মানচিত্র উপলব্ধ নয়",
  map_offline_desc: "ইন্টারনেট সংযোগ ছাড়া মানচিত্র প্রদর্শিত হবে না। দূরত্ব ও নির্দেশনার জন্য বাম পাশের তালিকা দেখুন।",
  chat_title: "জরুরী এআই সহকারী",
  chat_status: "লোকাল অফলাইন এআই ইঞ্জিন প্রস্তুত",
  chat_welcome: "জরুরী এআই সহকারীতে আপনাকে স্বাগতম। প্রাথমিক চিকিৎসা, উচ্ছেদ, নিরাপদ জল বা বেঁচে থাকার উপায় সম্পর্কে যেকোনো প্রশ্ন করুন। এটি ইন্টারনেট ছাড়াই কাজ করে।",
  chip_bleeding: "🩸 রক্তপাত বন্ধ করুন",
  chip_cpr: "🫀 সিপিআর পদ্ধতি",
  chip_earthquake: "🫨 ভূমিকম্পে করণীয়",
  chip_burn: "🔥 পুড়ে যাওয়ার চিকিৎসা",
  chip_water: "💧 নিরাপদ জল",
  chat_input_placeholder: "বেঁচে থাকার প্রশ্ন লিখুন (যেমন: সিপিআর)...",
  chat_send_btn: "এআই জিজ্ঞাসা",
  clear_chat_btn: "মুছে ফেলুন",
  firstaid_title: "প্রাথমিক চিকিৎসা নির্দেশিকা",
  firstaid_desc: "উদ্ধারকারী দল আসার আগে দ্রুত এবং নির্ভরযোগ্য প্রাথমিক চিকিৎসা পদ্ধতি।",
  topic_cpr: "সিপিআর (হৃদপিণ্ড ও ফুসফুস পুনরুজ্জীবন)",
  topic_bleeding: "তীব্র রক্তপাত নিয়ন্ত্রণ",
  topic_burns: "আগুনে বা রাসায়নিকে পোড়া",
  topic_fractures: "হাড় ভাঙা এবং ব্যান্ডেজ",
  topic_choking: "দমবন্ধ উদ্ধার (হেইমলিচ)",
  checklist_title: "বেঁচে থাকার চেকলিস্ট",
  checklist_desc: "প্রস্তুতির সময় আইটেম টিক করুন। অগ্রগতি স্বয়ংক্রিয়ভাবে সংরক্ষিত হবে।",
  check_opt_general: "সাধারণ পারিবারিক ব্যাগ",
  check_opt_flood: "বন্যা উচ্ছেদ প্রস্তুতি",
  check_opt_earthquake: "ভূমিকম্প গৃহ নিরাপত্তা",
  check_opt_cyclone: "ঘূর্ণিঝড় প্রস্তুতি",
  checklist_progress_label: "প্রস্তুতির অগ্রগতি:",
  reset_check_btn: "চেকলিস্ট রিসেট করুন",
  audio_beacon_title: "অ্যাকোস্টিক লোকেটর বীকন",
  audio_beacon_desc: "উদ্ধারকারীদের আপনার কাছে আনার জন্য একটি উচ্চ-ক্ষমতার সাইরেন বাজায়।",
  siren_toggle_play: "এসওএস সাইরেন চালু করুন",
  siren_toggle_stop: "এসওএস সাইরেন বন্ধ করুন",
  siren_volume_label: "সাইরেন তীব্রতা:",
  visual_beacon_title: "ভিজ্যুয়াল রেসকিউ স্ট্রোব",
  visual_beacon_desc: "উদ্ধারকারীদের দৃষ্টি আকর্ষণ করতে স্ক্রিনটি হলুদ এবং সাদা আলো দিয়ে দ্রুত উজ্জ্বল করে তোলে।",
  strobe_preview_text: "স্ট্রোব বন্ধ আছে",
  strobe_preview_active: "স্ট্রোব সক্রিয় আছে",
  strobe_toggle_start: "স্ট্রোব লাইট অন করুন",
  strobe_toggle_stop: "স্ট্রোব লাইট অফ করুন",
  compass_title: "বেঁচে থাকার কম্পাস",
  compass_desc: "নিরাপদে পথ খুঁজুন। এটি আপনার ফোনের সেন্সরের ওপর ভিত্তি করে চলে।",
  heading_label: "দিক কোণ:",
  compass_permission_btn: "সেন্সর অনুমতি দিন",
  sos_builder_title: "এসওএস বার্তা নির্মাতা",
  sos_builder_desc: "আপনার জিপিএস স্থানাঙ্ক এবং স্থিতি একটি এসএমএস বা হোয়াটসঅ্যাপ বার্তায় রূপান্তর করে।",
  sos_phone_label: "প্রাপকের ফোন নম্বর (পরিবার / সেবা):",
  sos_custom_text_label: "বর্তমান পরিস্থিতি / প্রয়োজন:",
  sos_preview_label: "বার্তার পূর্বরূপ:",
  btn_copy: "বার্তা কপি করুন",
  btn_send_whatsapp: "হোয়াটসঅ্যাপ করুন",
  btn_send_sms: "এসএমএস করুন"
};

const MR_TRANSLATIONS = {
  app_title: "आपत्ती निवारण एआय",
  app_subtitle: "आणीबाणी सहाय्यक",
  status_online: "ऑनलाइन",
  status_offline: "ऑफलाइन मोड",
  active_alert: "सक्रिय चेतावणी:",
  alert_none: "कोणतीही चेतावणी सक्रिय नाही (सिम्युलेशन मोड)",
  alert_flood: "महानगर पूर स्थलांतर - मुंबई आणि आसाम",
  alert_earthquake: "हिमालयीन प्रदेश भूकंपाचे धक्के",
  alert_cyclone: "बंगालच्या उपसागरातील चक्रीवादळ - ओडिशा आणि बंगाल",
  alert_instructions_none: "सक्रिय चेतावणी निवडून प्रतिसाद तपासा.",
  alert_instructions_flood: "चेतावणी: मान्सूनच्या मुसळधार पावसामुळे मुंबई आणि आसाममध्ये पाणी पातळी वाढत आहे. तात्काळ सुरक्षित ठिकाणी स्थलांतर करा.",
  alert_instructions_earthquake: "सावधानता: हिमालयीन पर्वतरांगांमध्ये भूकंपाचे तीव्र धक्के जाणवले आहेत. सुरक्षित इमारतींमध्ये आश्रय घ्या आणि काचेपासून दूर राहा.",
  alert_instructions_cyclone: "धोका: बंगालच्या उपसागरातील तीव्र चक्रीवादळामुळे ओडिशा आणि पश्चिम बंगालच्या किनारपट्टीवर लाल इशारा. वादळ निवारा केंद्रात जा.",
  tab_dashboard: "डॅशबोर्ड",
  tab_map: "आश्रयस्थान",
  tab_chat: "एआय तपासणी",
  tab_firstaid: "प्रथमोपचार",
  tab_checklist: "चेकलिस्ट",
  tab_tools: "बीकन",
  sos_actions: "एसओएस जलद कृती",
  sos_description: "बचाव पथकाला त्वरित सूचित करा किंवा आणीबाणी संदेश तयार करा.",
  btn_sound_siren: "ऑडिओ सायरन वाजवा",
  btn_generate_sos: "एसओएस संदेश तयार करा",
  safety_status_title: "माझी सुरक्षा स्थिती",
  safety_status_desc: "जलद संदेशांसाठी आपली स्थिती स्थानिक पातळीवर जतन करा.",
  status_safe: "सुरक्षित आणि ठीक आहे",
  status_injured: "जखमी / आजारी",
  status_stranded: "अडकलेला / अडकलेली",
  contacts_title: "आणीबाणी निर्देशिका",
  tip_title: "ऑफलाइन जगण्याच्या टिप्स",
  next_tip_btn: "पुढील टीप",
  shelter_finder_title: "आणीबाणी निवारा शोधा",
  shelter_finder_desc: "जवळपासचे सुरक्षित निवारा केंद्र आणि वैद्यकीय सुविधा शोधा.",
  location_placeholder: "शहराचे नाव टाका (उदा: Mumbai, Kolkata, Bhubaneswar)",
  search_btn: "शोधा",
  gps_btn: "जीपीएस",
  nearest_shelters_title: "जवळपासचे सुरक्षित निवारा केंद्र",
  nearest_hospitals_title: "वैद्यकीय आणीबाणी सुविधा",
  map_offline_title: "ऑफलाइन असल्यामुळे नकाशा उपलब्ध नाही",
  map_offline_desc: "नकाशा लोड केला जाऊ शकत नाही. अंतर आणि दिशेसाठी डाव्या बाजूची यादी पहा.",
  chat_title: "आणीबाणी एआय सहाय्यक",
  chat_status: "स्थानिक ऑफलाइन एआय इंजिन तयार",
  chat_welcome: "आणीबाणी एआय सहाय्यकामध्ये आपले स्वागत आहे. प्रथमोपचार, सुरक्षित पाणी किंवा जगण्याविषयी कोणतेही प्रश्न विचारा. हे इंटरनेटशिवाय चालते.",
  chip_bleeding: "🩸 रक्तस्त्राव थांबवा",
  chip_cpr: "🫀 सीपीआर प्रक्रिया",
  chip_earthquake: "🫨 भूकंपापासून बचाव",
  chip_burn: "🔥 भाजल्याचा उपचार",
  chip_water: "💧 स्वच्छ पाणी",
  chat_input_placeholder: "जगण्याचा प्रश्न लिहा (उदा: सीपीआर)...",
  chat_send_btn: "विचारा",
  clear_chat_btn: "साफ करा",
  firstaid_title: "प्रथमोपचार पुस्तिका",
  firstaid_desc: "बचाव पथक येण्यापूर्वी आणीबाणीच्या काळात उपयुक्त प्रथमोपचार मार्गदर्शक.",
  topic_cpr: "सीपीआर (हृदय व फुफ्फुस पुनरुज्जीवन)",
  topic_bleeding: "तीव्र रक्तस्त्राव नियंत्रण",
  topic_burns: "भाजणे किंवा रासायनिक भाजणे",
  topic_fractures: "हाड मोडणे आणि खपची बांधणे",
  topic_choking: "दम कोंडणे बचाव (हेमलिच)",
  checklist_title: "जगण्याची चेकलिस्ट",
  checklist_desc: "तयारी करताना आयटम टिक करा. प्रगती स्वयंचलितपणे जतन केली जाईल.",
  check_opt_general: "सामान्य कौटुंबिक बॅग",
  check_opt_flood: "पूर स्थलांतर तयारी",
  check_opt_earthquake: "भूकंप गृह सुरक्षा",
  check_opt_cyclone: "चक्रीवादळ तयारी",
  checklist_progress_label: "तयारीची प्रगती:",
  reset_check_btn: "चेकलिस्ट रीसेट करा",
  audio_beacon_title: "ध्वनिक लोकेटर बीकन",
  audio_beacon_desc: "बचाव पथकाला तुमच्याकडे आणण्यासाठी एक मोठा सायरन वाजवतो.",
  siren_toggle_play: "एसओएस सायरन सुरू करा",
  siren_toggle_stop: "एसओएस सायरन बंद करा",
  siren_volume_label: "सायरन तीव्रता:",
  visual_beacon_title: "दृश्य बचाव स्ट्रोब",
  visual_beacon_desc: "बचाव पथकाचे लक्ष वेधण्यासाठी तुमची स्क्रीन पिवळ्या आणि पांढऱ्या प्रकाशाने वेगाने चमकवते.",
  strobe_preview_text: "स्ट्रोब बंद आहे",
  strobe_preview_active: "स्ट्रोब सक्रिय आहे",
  strobe_toggle_start: "स्ट्रोब लाईट चालू करा",
  strobe_toggle_stop: "स्ट्रोब लाईट बंद करा",
  compass_title: "जगण्याचा होकायंत्र",
  compass_desc: "मार्ग शोधा. हे आपल्या फोनच्या सेन्सरवर आधारित आहे.",
  heading_label: "दिशा कोन:",
  compass_permission_btn: "सेन्सर परवानगी द्या",
  sos_builder_title: "एसओएस संदेश निर्माता",
  sos_builder_desc: "आपले जीपीएस कोऑर्डिनेट्स आणि स्थिती एसएमएस किंवा व्हॉट्सॲप संदेशात बदलते.",
  sos_phone_label: "प्राप्तकर्ता फोन नंबर (कुटुंब / सेवा):",
  sos_custom_text_label: "सध्याची परिस्थिती / आवश्यकता:",
  sos_preview_label: "संदेशाचे पूर्वावलोकन:",
  btn_copy: "संदेश कॉपी करा",
  btn_send_whatsapp: "व्हॉट्सॲप करा",
  btn_send_sms: "एसएमएस करा"
};

const BN_CHECKLISTS = {
  general: [
    { id: "gen_water", title: "বিশুদ্ধ পানীয় জল", desc: "প্রতি ব্যক্তি ৩ গ্যালন (৩ দিনের জন্য)" },
    { id: "gen_food", title: "শুকনো ও টিনজাত খাবার", desc: "বিস্কুট, এনার্জি বার, মুড়ি, চিঁড়ে" },
    { id: "gen_med", title: "প্রাথমিক চিকিৎসা কিট", desc: "ব্যান্ডেজ, অ্যান্টিসেপটিক, প্রয়োজনীয় ওষুধ" },
    { id: "gen_light", title: "টর্চলাইট ও ব্যাটারি", desc: "অতিরিক্ত ব্যাটারি সহ এলইডি টর্চ" },
    { id: "gen_radio", title: "ব্যাটারি চালিত রেডিও", desc: "অফলাইন জরুরী খবর শোনার জন্য" },
    { id: "gen_power", title: "পাওয়ার ব্যাংক", desc: "মোবাইল চার্জ করার জন্য সম্পূর্ণ চার্জ করা পাওয়ার ব্যাংক" },
    { id: "gen_docs", title: "গুরুত্বপূর্ণ কাগজপত্র", desc: "পাসপোর্ট, আইডি, বীমা ফাইল প্লাস্টিক ব্যাগে রাখুন" },
    { id: "gen_whistle", title: "জরুরী বাঁশি", desc: "উদ্ধারকারীদের সংকেত দেওয়ার জন্য" }
  ],
  flood: [
    { id: "fl_high", title: "উঁচু স্থান চিহ্নিত করুন", desc: "কাছাকাছি বহুতল কংক্রিট ভবনের পথ চিনে রাখুন" },
    { id: "fl_power", title: "বিদ্যুৎ ও গ্যাস সংযোগ বন্ধ করুন", desc: "আদেশ পেলে মেইন সুইচ ও গ্যাস ভালভ বন্ধ করুন" },
    { id: "fl_val", title: "মূল্যবান জিনিসপত্র উঁচুতে রাখুন", desc: "ইলেকট্রনিক্স ও কাগজ উপরের তলায় নিয়ে যান" },
    { id: "fl_water", title: "জল সংরক্ষণ করুন", desc: "সরবরাহ বন্ধ বা দূষিত হওয়ার আগেই জল জমা করে রাখুন" },
    { id: "fl_toxic", title: "বিষাক্ত পদার্থ উঁচুতে রাখুন", desc: "কীটনাশক এবং রাসায়নিক জিনিসপত্র উঁচু তাকে রাখুন" }
  ],
  earthquake: [
    { id: "eq_drop", title: "ঝুঁকে পড়ুন, মাথা ঢাকুন, ধরে থাকুন", desc: "ভারী টেবিল বা ভেতরের দেয়ালের নিচে নিরাপদ স্থান বেছে নিন" },
    { id: "eq_sec", title: "ভারী আসবাবপত্র আটকে রাখুন", desc: "আলমারি, আলনা ও ভারী সরঞ্জাম দেয়ালের সাথে বেঁধে রাখুন" },
    { id: "eq_clear", title: "নিকাশি পথ পরিষ্কার রাখুন", desc: "যাতায়াতের পথ ও দরজাগুলো পরিষ্কার রাখুন" },
    { id: "eq_glass", title: "কাঁচের নিরাপত্তা", desc: "কাঁচের জানলায় নিরাপত্তা টেপ বা ফিল্ম ব্যবহার করুন" },
    { id: "eq_fire", title: "অগ্নিনির্বাপক যন্ত্র", desc: "রান্নাঘরের কাছে অগ্নিনির্বাপক যন্ত্র রাখুন এবং চার্জ পরীক্ষা করুন" }
  ],
  cyclone: [
    { id: "cy_shut", title: "জানলা-দরজা বন্ধ করুন", desc: "জানলাগুলো বন্ধ করুন বা কাঁচে নিরাপত্তা টেপ লাগান" },
    { id: "cy_loose", title: "বাইরের জিনিসপত্র ভেতরে আনুন", desc: "সাইকেল, টব এবং ময়লার বালতি নিরাপদ স্থানে রাখুন" },
    { id: "cy_evac", title: "আশ্রয়কেন্দ্রের অবস্থান জানুন", desc: "আপনার এলাকার ঘূর্ণিঝড় আশ্রয়কেন্দ্রের অবস্থান চিনে রাখুন" },
    { id: "cy_fuel", title: "যানের জ্বালানি ভরুন", desc: "রাস্তা বন্ধ থাকার আশঙ্কায় গাড়িতে পর্যাপ্ত জ্বালানি রাখুন" },
    { id: "cy_prep", title: "জরুরী কিট প্রস্তুত রাখুন", desc: "ব্যাগটি ঘরের ভেতরে দরজার কাছাকাছি রাখুন" }
  ]
};

const MR_CHECKLISTS = {
  general: [
    { id: "gen_water", title: "पिण्याचे पाणी", desc: "प्रति व्यक्ती ३ गॅलन (३ दिवसांसाठी)" },
    { id: "gen_food", title: "खराब न होणारे अन्न", desc: "बिस्किटे, ऊर्जा बार, सुका मेवा" },
    { id: "gen_med", title: "प्रथमोपचार किट", desc: "पट्ट्या, अँटीसेप्टिक, आवश्यक औषधे" },
    { id: "gen_light", title: "टॉर्च आणि बॅटरी", desc: "अतिरिक्त बॅटरीसह एलईडी टॉर्च" },
    { id: "gen_radio", title: "बॅटरीवर चालणारे रेडिओ", desc: "ऑफलाइन आणीबाणीच्या बातम्या मिळवण्यासाठी" },
    { id: "gen_power", title: "पावर बँक", desc: "मोबाईल चार्ज करण्यासाठी पूर्ण चार्ज असलेली पावर बँक" },
    { id: "gen_docs", title: "महत्त्वाची कागदपत्रे", desc: "प्लास्टिक पिशवीत पासपोर्ट, आयडी, विमा फाईल्स ठेवा" },
    { id: "gen_whistle", title: "आणीबाणीची शिट्टी", desc: "बचाव पथकाला इशारा देण्यासाठी" }
  ],
  flood: [
    { id: "fl_high", title: "उंच जागा ओळखा", desc: "जवळपासच्या बहुमजली सिमेंट इमारतींच्या मार्गाचा नकाशा बनवा" },
    { id: "fl_power", title: "बिजली आणि गॅस बंद करा", desc: "आदेश मिळाल्यास मुख्य स्विच आणि गॅस वाल्व बंद करा" },
    { id: "fl_val", title: "मौल्यवान वस्तू उंचावर ठेवा", desc: "महत्त्वाचे इलेक्ट्रॉनिक्स आणि कागदपत्रे वरच्या मजल्यावर न्या" },
    { id: "fl_water", title: "पाणी साठवून ठेवा", desc: "पुरवठा खंडित किंवा दूषित होण्यापूर्वी पाणी साठवा" },
    { id: "fl_toxic", title: "विषारी पदार्थ उंचावर ठेवा", desc: "कीटकनाशके आणि रसायने उंचावरच्या कपाटात ठेवा" }
  ],
  earthquake: [
    { id: "eq_drop", title: "खाली वाका, डोके झाका, धरून ठेवा", desc: "जड टेबल किंवा आतल्या भिंतींच्या खाली सुरक्षित जागा शोधा" },
    { id: "eq_sec", title: "जड फर्निचर सुरक्षित करा", desc: "कपाटे आणि जड उपकरणे भिंतीला बांधून ठेवा" },
    { id: "eq_clear", title: "बाहेर पडण्याचे मार्ग मोकळे ठेवा", desc: "पायऱ्या आणि दरवाजे अडथळ्यांपासून मुक्त ठेवा" },
    { id: "eq_glass", title: "काचेवर सुरक्षा फिल्म", desc: "खिडक्यांच्या काचेवर सुरक्षा फिल्म लावा" },
    { id: "eq_fire", title: "अग्निशामक यंत्र", desc: "स्वयंपाकघराजवळ अग्निशामक यंत्र ठेवा आणि त्याची तपासणी करा" }
  ],
  cyclone: [
    { id: "cy_shut", title: "खिडक्या-दरवाजे बंद करा", desc: "खिडक्या बंद करा किंवा काचेवर सुरक्षा टेप लावा" },
    { id: "cy_loose", title: "बाहेरचे साहित्य आत आणा", desc: "सायकल, कचरा कुंड्या आणि बागेतील साहित्य आत ठेवा" },
    { id: "cy_evac", title: "निवारा केंद्राची जागा जाणून घ्या", desc: "आपल्या परिसरातील वादळ निवारा केंद्राचा पत्ता माहित ठेवा" },
    { id: "cy_fuel", title: "वाहनात इंधन भरा", desc: "रस्ते बंद होण्याच्या शक्यतेमुळे वाहनात पूर्ण इंधन ठेवा" },
    { id: "cy_prep", title: "आणीबाणीचे किट तयार ठेवा", desc: "बॅग घराच्या आत दरवाजाच्या जवळ ठेवा" }
  ]
};

const BN_FIRSTAID = {
  cpr: {
    title: "সিপিআর (হৃদপিণ্ড ও ফুসফুস পুনরুজ্জীবন)",
    warning: "⚠ কেবল তখনই সিপিআর দিন যখন ব্যক্তি অচেতন এবং স্বাভাবিকভাবে শ্বাস নিচ্ছে না। প্রথমে জরুরী সেবায় কল করুন।",
    steps: [
      { num: 1, title: "সাড়া পরীক্ষা করুন", desc: "কাঁধে চাপ দিন, জোরে জিজ্ঞাসা করুন 'আপনি কি ঠিক আছেন?' কোনো নড়াচড়া আছে কিনা দেখুন।" },
      { num: 2, title: "শ্বাসনালী খুলুন", desc: "মাথাটি আলতো করে পিছনে হেলিয়ে দিন এবং চিবুকটি উপরে তুলুন।" },
      { num: 3, title: "শ্বাস পরীক্ষা করুন", desc: "বুক ওঠানামা করছে কিনা দেখুন। ১০ সেকেন্ড ধরে শ্বাস-প্রশ্বাসের শব্দ শুনুন।" },
      { num: 4, title: "বুক চাপুন (Compressions)", desc: "বুকের মাঝখানে এক হাতের তালু রাখুন। প্রতি মিনিটে ১০০-১২০ বার গতিতে ২ ইঞ্চি গভীরতায় চাপুন।" },
      { num: 5, title: "কৃত্রিম শ্বাস দিন", desc: "নাক বন্ধ করে আপনার মুখ তার মুখে রেখে ২ বার ফু দিন। চক্র: ৩০ বার চাপ এবং ২ বার শ্বাস।" }
    ]
  },
  bleeding: {
    title: "তীব্র রক্তপাত নিয়ন্ত্রণ",
    warning: "⚠ রক্তপাত অবিলম্বে বন্ধ করুন। উপলব্ধ থাকলে গ্লাভস পরুন। ক্ষত ধুলোবালি থেকে বাঁচান।",
    steps: [
      { num: 1, title: "সরাসরি চাপ দিন", desc: "ক্ষতের ওপর একটি পরিষ্কার কাপড় বা গজ রেখে দুই হাত দিয়ে শক্ত করে চেপে ধরুন।" },
      { num: 2, title: "ক্ষত স্থান উঁচুতে তুলুন", desc: "রক্তপাত হওয়া অঙ্গটি হৃদপিণ্ডের স্তরের ওপরে তুলুন, যদি না হাড় ভাঙার আশঙ্কা থাকে।" },
      { num: 3, title: "চাপ বজায় রাখুন", desc: "রক্ত কাপড় ভেদ করে বের হলেও প্রথম কাপড়টি সরাবেন না। ওপরে আরেকটি কাপড় রেখে আরও শক্ত করে চাপুন।" },
      { num: 4, title: "ট্যুরনিকুয়েট ব্যবহার করুন (প্রশিক্ষিত হলে)", desc: "হাত বা পায়ের তীব্র রক্তপাতে ক্ষত থেকে ২-৩ ইঞ্চি ওপরে একটি ব্যান্ডেজ শক্ত করে বাঁধুন।" }
    ]
  },
  burns: {
    title: "আগুনে বা রাসায়নিকে পোড়া",
    warning: "⚠ গুরুতর পোড়ায় বরফ, মাখন বা মলম লাগাবেন না। ফোস্কা গলাবেন না।",
    steps: [
      { num: 1, title: "পোড়া জায়গা ঠান্ডা করুন", desc: "পোড়া অংশটি ১০-২০ মিনিটের জন্য কলের ঠান্ডা জলের নিচে রাখুন। বরফ জল ব্যবহার করবেন না।" },
      { num: 2, title: "আঁটসাঁট জিনিস খুলে ফেলুন", desc: "ত্বক ফুলে যাওয়ার আগেই আংটি, চুড়ি বা জুতো আলতো করে খুলে ফেলুন।" },
      { num: 3, title: "হালকাভাবে ঢেকে রাখুন", desc: "পরিষ্কার, শুকনো এবং নন-স্টিক ব্যান্ডেজ বা প্লাস্টিক র‍্যাপ দিয়ে আলতো করে ঢেকে দিন।" },
      { num: 4, title: "চিকিৎসকের সাহায্য নিন", desc: "পোড়া অংশ বড় হলে, মুখে/হাতে হলে বা ত্বক পুড়ে কালো বা সাদা হয়ে গেলে অবিলম্বে হাসপাতালে যান।" }
    ]
  },
  fractures: {
    title: "হাড় ভাঙা এবং ব্যান্ডেজ",
    warning: "⚠ হাড় সোজা করার বা আগের জায়গায় ঠেলে দেওয়ার চেষ্টা করবেন না। অঙ্গটি সম্পূর্ণ স্থির রাখুন।",
    steps: [
      { num: 1, title: "রক্তপাত নিয়ন্ত্রণ করুন", desc: "হাড় ত্বক ভেদ করে বেরিয়ে এলে ক্ষতের চারপাশে চাপ দিন, সরাসরি হাড়ের ওপর চাপ দেবেন না।" },
      { num: 2, title: "অঙ্গটি স্থির করুন", desc: "খপচি (splint) হিসেবে ব্যবহারের জন্য শক্ত কার্ডবোর্ড, কাঠের তক্তা বা খবরের কাগজ রোল করে নিন।" },
      { num: 3, title: "শক্ত করে বাঁধুন", desc: "ব্যান্ডেজ বা কাপড় ব্যবহার করে খপচিটি ভাঙা অংশের ওপরে এবং নিচে বাঁধুন। রক্ত সঞ্চালন যেন বন্ধ না হয়।" },
      { num: 4, title: "ঠান্ডা সেঁক দিন", desc: "কাপড়ে বরফ পেঁচিয়ে ফোলা জায়গায় দিন। সরাসরি ত্বকে বরফ ছোঁয়াবেন না।" }
    ]
  },
  choking: {
    title: "দমবন্ধ উদ্ধার (হেইমলিচ)",
    warning: "⚠ কেবল তখনই পেট চাপুন যখন ব্যক্তি শ্বাস নিতে, কাশতে বা কথা বলতে অক্ষম হন।",
    steps: [
      { num: 1, title: "কাশতে উৎসাহিত করুন", desc: "যদি ব্যক্তি কাশতে বা কথা বলতে পারেন, তবে বাধা দূর করতে জোরে কাশতে বলুন।" },
      { num: 2, title: "পিঠে ৫ বার চাপড় দিন", desc: "ব্যক্তিকে সামনের দিকে ঝুঁকিয়ে দিন। হাতের তালু দিয়ে কাঁধের মাঝখানে ৫ বার চাপড় মারুন।" },
      { num: 3, title: "৫ বার পেট চাপুন (Heimlich)", desc: "ব্যক্তির পেছনে দাঁড়ান। দুই হাত দিয়ে তার কোমর জড়িয়ে ধরুন। এক হাত মুষ্টিবদ্ধ করে পেটের ওপর দিকে ঝটকা দিন।" },
      { num: 4, title: "চক্র পুনরাবৃত্তি করুন", desc: "৫ বার পিঠে ও ৫ বার পেটে চাপ দেওয়ার কাজ পর্যায়ক্রমে করুন। অজ্ঞান হলে মাটিতে শুইয়ে সিপিআর শুরু করুন।" }
    ]
  }
};

const MR_FIRSTAID = {
  cpr: {
    title: "सीपीआर (हृदय व फुफ्फुस पुनरुज्जीवन)",
    warning: "⚠ व्यक्ती बेशुद्ध असताना आणि सामान्यपणे श्वास घेत नसतानाच सीपीआर द्यावा. प्रथम आणीबाणी सेवेला कॉल करा.",
    steps: [
      { num: 1, title: "प्रतिसाद तपासा", desc: "खांद्यावर थाप द्या, 'तुम्ही ठीक आहात का?' असे मोठ्याने विचारा आणि हालचाल तपासा." },
      { num: 2, title: "श्वसनमार्ग मोकळा करा", desc: "डोके हळूच मागे झुकवा आणि हनुवटी वर करा." },
      { num: 3, title: "श्वास तपासा", desc: "छातीची हालचाल पहा. १० सेकंदांपर्यंत श्वास घेण्याचा आवाज ऐका." },
      { num: 4, title: "छातीवर दाब द्या (Compressions)", desc: "छातीच्या मध्यभागी एका हाताचा तळवा ठेवा. प्रति मिनिट १००-१२० वेळा वेगाने २ इंच खोल दाब द्या." },
      { num: 5, title: "कृत्रिम श्वास द्या", desc: "नाक बंद करून तुमचे तोंड त्याच्या तोंडावर ठेवा आणि २ वेळा श्वास द्या. चक्र: ३0 वेळा दाबणे आणि २ वेळा श्वास देणे." }
    ]
  },
  bleeding: {
    title: "तीव्र रक्तस्त्राव नियंत्रण",
    warning: "⚠ रक्तस्त्राव त्वरित थांबवा. उपलब्ध असल्यास हातमोजे घाला. जखम धुळीपासून वाचवा.",
    steps: [
      { num: 1, title: "थेट दाब द्या", desc: "जखमेवर स्वच्छ कापड किंवा पट्टी ठेवा. दोन्ही हातांनी जोरात दाबून धरा." },
      { num: 2, title: "जखम उंचावर ठेवा", desc: "हाड मोडले नसेल तर जखमी झालेला भाग हृदयाच्या पातळीपेक्षा वर ठेवा." },
      { num: 3, title: "दाब कायम ठेवा", desc: "रक्त बाहेर येत असल्यास पट्टी काढू नका. पहिल्या पट्टीवरच दुसरे कापड ठेवून जास्त जोराने दाबा." },
      { num: 4, title: "टूर्निकेट वापरा (प्रशिक्षित असल्यास)", desc: "हात किंवा पायाच्या अति रक्तस्त्रावासाठी जखमेच्या २-३ इंच वर पट्टी घट्ट बांधा." }
    ]
  },
  burns: {
    title: "भाजणे किंवा रासायनिक भाजणे",
    warning: "⚠ गंभीर भाजल्यावर बर्फ, लोणी किंवा मलम लावू नका. फोड फोडू नका.",
    steps: [
      { num: 1, title: "जखम थंड करा", desc: "भाजलेला भाग १०-२० मिनिटे थंड वाहत्या पाण्याखाली ठेवा." },
      { num: 2, title: "घट्ट वस्तू काढा", desc: "त्वचेला सूज येण्यापूर्वी अंगठी, घड्याळ किंवा पादत्राणे हळूच काढून टाका." },
      { num: 3, title: "हलकी पट्टी बांधा", desc: "स्वच्छ, कोरड्या आणि नॉन-स्टिक पट्टीने किंवा स्वच्छ प्लास्टिक रॅपने जखम हलकी झाका." },
      { num: 4, title: "वैद्यकीय मदत घ्या", desc: "जखम मोठी असल्यास, चेहऱ्यावर/हातावर असल्यास किंवा त्वचा काळी/पांढरी पडल्यास त्वरित रुग्णालयात जा." }
    ]
  },
  fractures: {
    title: "हाड मोडणे आणि खपची बांधणे",
    warning: "⚠ मोडलेले हाड जागेवर ढकलण्याचा प्रयत्न करू नका. तो भाग पूर्णपणे स्थिर ठेवा.",
    steps: [
      { num: 1, title: "रक्तस्त्राव नियंत्रित करा", desc: "हाड त्वचेबाहेर आले असल्यास जखमेच्या बाजूने दाब द्या, थेट हाडावर दाब देऊ नका." },
      { num: 2, title: "हाड स्थिर करा", desc: "खपची (splint) म्हणून वापरण्यासाठी लाकडी फळी, वर्तमानपत्राची गुंडाळी किंवा जाड कार्डबोर्ड वापरा." },
      { num: 3, title: "घट्ट बांधा", desc: "पट्टी किंवा कापड वापरून खपची मोडलेल्या जागेच्या वर आणि खाली बांधा." },
      { num: 4, title: "थंड शेक द्या", desc: "कापडात बर्फ गुंडाळून सुजलेल्या जागेवर ठेवा." }
    ]
  },
  choking: {
    title: "दम कोंडणे बचाव (Heimlich Maneuver)",
    warning: "⚠ पोट दाबण्याची क्रिया केवळ तेव्हाच करा जेव्हा व्यक्ती श्वास घेऊ शकत नाही, खोकू शकत नाही किंवा बोलू शकत नाही.",
    steps: [
      { num: 1, title: "खोकण्यास प्रवृत्त करा", desc: "जर व्यक्ती खोकू किंवा बोलू शकत असेल तर त्याला जोराने खोकण्यास सांगा." },
      { num: 2, title: "पाठीवर ५ वेळा थापट द्या", desc: "व्यक्तीला पुढे झुकवून पाठीवर दोन्ही खांद्यांच्या मध्ये ५ वेळा जोरात थापट द्या." },
      { num: 3, title: "५ वेळा पोट दाबा", desc: "व्यक्तीच्या मागे उभे राहा. दोन्ही हातांनी त्याच्या पोटाला विळखा घाला. एका हाताची मूठ बनवून आत आणि वरच्या बाजूला झटका द्या." },
      { num: 4, title: "चक्र पुन्हा करा", desc: "५ वेळा पाठीवर थापट आणि ५ वेळा पोट दाबणे आलटून-पालटून करा." }
    ]
  }
};

const BN_CHATBOT_KB = {
  bleeding: "🩸 **রক্তপাত বন্ধ করার উপায়:**\n1. **সরাসরি চাপ:** ক্ষতের ওপর একটি পরিষ্কার কাপড় দিয়ে শক্ত করে চেপে ধরুন।\n2. **উঁচুতে তোলা:** আহত অঙ্গটি হৃদপিণ্ডের স্তরের ওপরে তুলুন।\n3. **কাপড় সরাবেন না:** রক্ত কাপড় ভেদ করে বের হলে প্রথম কাপড়টি না সরিয়ে ওপরে আরেকটি কাপড় রাখুন এবং শক্ত করে চাপুন।\n4. **ট্যুরনিকুয়েট:** কেবল তীব্র রক্তপাতে ক্ষত থেকে ২-৩ ইঞ্চি ওপরে শক্ত করে বাঁধুন।",
  cpr: "🫀 **সিপিআর পদ্ধতি (অচেতন / শ্বাস না নিলে):**\n1. অবিলম্বে জরুরী সেবায় কল করুন।\n2. **বুক চাপা:** বুকের মাঝখানে প্রতি মিনিটে ১০০-১২০ বার গতিতে ২ ইঞ্চি গভীরতায় চাপুন।\n3. **কৃত্রিম শ্বাস:** ৩০ বার চাপ দেওয়ার পর চিবুক তুলে ২ বার ফু দিন।\n4. **পুনরাবৃত্তি:** ৩০ বার চাপ এবং ২ বার শ্বাস দেওয়ার চক্র চালাতে থাকুন।",
  earthquake: "🫨 **ভূমিকম্পে করণীয়:**\n* **ঘরের ভেতরে থাকলে:** টেবিল বা খাটের নিচে অবস্থান নিন এবং ধরে থাকুন। জানলা ও দেয়াল থেকে দূরে থাকুন।\n* **খোলা জায়গায় থাকলে:** ভবন, খুঁটি এবং বিদ্যুতের তার থেকে দূরে খোলা মাঠে যান।\n* **গাড়িতে থাকলে:** নিরাপদ জায়গায় গাড়ি থামিয়ে ভেতরেই থাকুন।",
  cyclone: "🌀 **ঘূর্ণিঝড় প্রস্তুতি:**\n* জানলা বন্ধ রাখুন এবং ঢিলেঢালা জিনিসপত্র ঘরের ভেতরে আনুন।\n* ঘরের সবচেয়ে সুরক্ষিত অংশে (যেমন বাথরুম বা ঘরের ভেতরের অংশ) আশ্রয় নিন।\n* রেডিও, পানীয় জল এবং পাওয়ার ব্যাংক কাছাকাছি রাখুন।",
  flood: "💧 **বন্যা নিরাপত্তা নিয়ম:**\n* উঁচু জায়গায় বা আশ্রয়কেন্দ্রে চলে যান। বেসমেন্টে থাকবেন না।\n* **বন্যার জলের সংস্পর্শ এড়ান:** এতে ব্যাক্টেরিয়া বা বিদ্যুতের তার থাকতে পারে।\n* **মেইন সুইচ বন্ধ করুন:** বিদ্যুৎ ও গ্যাস সংযোগ বন্ধ রাখুন।\n* চলমান বন্যা জলের মধ্যে দিয়ে হাঁটার বা গাড়ি চালানোর চেষ্টা করবেন না।",
  water: "💧 **পানীয় জল নিরাপদ করা:**\n* **ফুটানো:** জল অন্তত ১ মিনিট ফুটিয়ে নিন।\n* **ক্লোরিন:** প্রতি ৪ লিটার জলে ৮ ফোঁটা সাধারণ ক্লোরিন মিশিয়ে ৩০ মিনিট অপেক্ষা করুন।\n* **ফিল্টার:** জল ঘোলা হলে ফুটানোর আগে পরিষ্কার কাপড় দিয়ে ছেঁকে নিন।",
  shelter: "🗺️ **আশ্রয়কেন্দ্র খোঁজা:**\n* এই অ্যাপের **আশ্রয়কেন্দ্র (Shelters)** ট্যাবটি খুলুন।\n* জিপিএস সক্রিয় করে দূরত্ব দেখে নিন।\n* ইন্টারনেট না থাকলে এলাকার স্কুল, স্টেডিয়াম বা সরকারি ভবনগুলোর দিকে যান।",
  food: "🥫 **জরুরী খাদ্য সরবরাহ:**\n* পচনশীল খাবার আগে খান। ড্রাই ফ্রুট ও টিনজাত খাবার পরবর্তী সময়ের জন্য বাঁচিয়ে রাখুন।"
};

const MR_CHATBOT_KB = {
  bleeding: "🩸 **रक्तस्त्राव थांबवण्याचे उपाय:**\n1. **थेट दाब:** जखमेवर स्वच्छ कापडाने जोरात दाबून धरा.\n2. **उंचावर ठेवणे:** जखमी झालेला भाग हृदयाच्या पातळीपेक्षा वर ठेवा.\n3. **पट्टी काढू नका:** रक्त बाहेर येत असल्यास पहिली पट्टी न काढता त्यावरच दुसरे कापड ठेवून दाबा.\n4. **टूर्निकेट:** फक्त गंभीर प्रसंगी जखमेच्या २-३ इंच वर घट्ट पट्टी बांधा.",
  cpr: "🫀 **सीपीआर प्रक्रिया (श्वास बंद असताना):**\n1. आणीबाणी सेवेला फोन करा.\n2. **दाब देणे:** छातीच्या मध्यभागी प्रति मिनिट १००-१२० वेळा वेगाने २ इंच दाब द्या.\n3. **श्वास देणे:** ३० वेळा दाब दिल्यानंतर डोके मागे करून २ वेळा कृत्रिम श्वास द्या.\n4. **चक्र:** ३० वेळा दाबणे आणि २ वेळा श्वास देणे असेच करत राहा.",
  earthquake: "🫨 **भूकंप सुरक्षा सूचना:**\n* **घराच्या आत असल्यास:** खाली वाका, टेबलखाली डोके झाका आणि धरून ठेवा. खिडक्यांपासून लांब राहा.\n* **घराबाहेर असल्यास:** इमारती, खांब आणि विजेच्या तारांपासून लांब खुल्या मैदानात जा.\n* **गाडीमध्ये असल्यास:** सुरक्षित जागी गाडी थांबवून गाडीतच राहा.",
  cyclone: "🌀 **चक्रीवादळ पूर्वतयारी:**\n* खिडक्या बंद ठेवा, बाहेरचे साहित्य घरात घ्या.\n* घराच्या सर्वात मजबूत खोलीत (उदा. बाथरूम किंवा कॉरिडोअर) आश्रय घ्या.\n* रेडिओ, पाणी आणि चार्ज असलेला पावर बँक सोबत ठेवा.",
  flood: "💧 **पूर सुरक्षा नियम:**\n* उंचावर किंवा निवारा केंद्रात जा. तळघरात राहू नका.\n* **पुराच्या पाण्याला स्पर्श करू नका:** त्यात जंतू किंवा विजेचा प्रवाह असू शकतो.\n* **बिजली-गॅस बंद करा:** घर सोडण्यापूर्वी मुख्य जोडण्या बंद करा.\n* वाहत्या पाण्यातून चालण्याचा किंवा गाडी चालवण्याचा प्रयत्न करू नका.",
  water: "💧 **पिण्याचे पाणी स्वच्छ करणे:**\n* **उकळणे:** पाणी कमीत कमी १ मिनिट उकळा.\n* **ब्लीच:** १ गॅलन पाण्यात ८ थेंब ब्लीच टाकून ३० मिनिटे थांबा.\n* **गाळणे:** गढूळ पाणी आधी स्वच्छ कापडाने गाळून घ्या आणि मगच उकळा.",
  shelter: "🗺️ **निवारा शोधणे:**\n* या ॲपमधील **निवारा (Shelters)** टॅब उघडा.\n* जीपीएस सुरू करून अंतर तपासा.\n* इंटरनेट नसल्यास जवळच्या शाळा किंवा क्रीडा संकुलाकडे जा.",
  food: "🥫 **आणीबाणीचे अन्न:**\n* लवकर खराब होणारे अन्न आधी खा. डबा बंद अन्न नंतरसाठी वाचवा."
};

const BN_SURVIVAL_TIPS = [
  "বিশুদ্ধ পানীয় জল: জীবাণু মারার জন্য জল অন্তত ১ মিনিট ফুটান, অথবা প্রতি গ্যালন জলে ৮ ফোঁটা সাধারণ ক্লোরিন মেশান।",
  "ভূমিকম্পের সময়: মাটিতে ঝুঁকে পড়ুন, টেবিল বা খাটের নিচে আশ্রয় নিন এবং শক্ত করে ধরে রাখুন। জানলা থেকে দূরে থাকুন।",
  "বন্যা থেকে বাঁচা: চলন্ত বন্যা জলের মধ্য দিয়ে হাঁটবেন না বা গাড়ি চালাবেন না। মাত্র ৬ ইঞ্চি জল আপনাকে ভাসিয়ে দিতে পারে।",
  "কার্বন মনোক্সাইড বিপদ: ঘরের ভেতরে বা গ্যারেজে কখনো গ্যাস চালিত জেনারেটর বা বারবিকিউ চালাবেন না। এটি বিষাক্ত গ্যাস তৈরি করে।",
  "রেডিও আপডেট: আপডেটের জন্য ব্যাটারি বা হ্যান্ড-ক্র্যাঙ্ক চালিত রেডিও ব্যবহার করুন। মোবাইল নেটওয়ার্ক প্রথমে বন্ধ হয়।",
  "ক্ষত পরিষ্কার রাখা: বিশুদ্ধ জলের অভাব হলে স্যানিটাইজার দিয়ে হাত পরিষ্কার করুন। ক্ষত শুকনো এবং জীবাণুমুক্ত ব্যান্ডেজ দিয়ে ঢেকে রাখুন।"
];

const MR_SURVIVAL_TIPS = [
  "स्वच्छ पिण्याचे पाणी: जंतू मारण्यासाठी पाणी कमीत कमी १ मिनिट उकळवा किंवा प्रति गॅलन पाण्यात ८ थेंब ब्लीच टाका.",
  "भूकंपाच्या वेळी: खाली वाका, जड टेबलखाली डोके झाका आणि घट्ट धरून ठेवा. खिडक्यांपासून लांब राहा.",
  "पुरापासून बचाव: वाहत्या पाण्यातून कधीही चालू किंवा गाडी चालवू नका. अवघे ६ इंच पाणी तुम्हाला वाहून नेऊ शकते.",
  "एक कार्बन मोनॉक्साइड धोका: बंद खोलीत किंवा गॅरेजमध्ये जनरेटर किंवा कोळशाची शेगडी पेटवू नका. यामुळे विषारी वायू तयार होतो.",
  "रेडिओ अपडेट्स: बातम्यांसाठी बॅटरीवर चालणाऱ्या रेडिओचा वापर करा. मोबाईल टॉवर्स आणीबाणीत सहसा बंद पडतात.",
  "जखमेची काळजी: स्वच्छ पाण्याची टंचाई असल्यास सॅनिटायझरने हात स्वच्छ करा. जखम सुकी आणि निर्जंतुक पट्टीने झाकून ठेवा."
];

// Combine into existing global databases
Object.assign(TRANSLATIONS, {
  bn: BN_TRANSLATIONS,
  mr: MR_TRANSLATIONS
});

Object.assign(CHECKLISTS_DATA.general, { bn: BN_CHECKLISTS.general, mr: MR_CHECKLISTS.general });
Object.assign(CHECKLISTS_DATA.flood, { bn: BN_CHECKLISTS.flood, mr: MR_CHECKLISTS.flood });
Object.assign(CHECKLISTS_DATA.earthquake, { bn: BN_CHECKLISTS.earthquake, mr: MR_CHECKLISTS.earthquake });
Object.assign(CHECKLISTS_DATA.cyclone, { bn: BN_CHECKLISTS.cyclone, mr: MR_CHECKLISTS.cyclone });

Object.assign(FIRSTAID_DATA.cpr, { bn: BN_FIRSTAID.cpr, mr: MR_FIRSTAID.cpr });
Object.assign(FIRSTAID_DATA.bleeding, { bn: BN_FIRSTAID.bleeding, mr: MR_FIRSTAID.bleeding });
Object.assign(FIRSTAID_DATA.burns, { bn: BN_FIRSTAID.burns, mr: MR_FIRSTAID.burns });
Object.assign(FIRSTAID_DATA.fractures, { bn: BN_FIRSTAID.fractures, mr: MR_FIRSTAID.fractures });
Object.assign(FIRSTAID_DATA.choking, { bn: BN_FIRSTAID.choking, mr: MR_FIRSTAID.choking });

Object.assign(CHATBOT_KB, {
  bn: BN_CHATBOT_KB,
  mr: MR_CHATBOT_KB
});

Object.assign(SURVIVAL_TIPS, {
  bn: BN_SURVIVAL_TIPS,
  mr: MR_SURVIVAL_TIPS
});

// Expand Indian Cities Shelter Database
const INDIAN_CITIES_DB = {
  delhi: {
    lat: 28.6139, lng: 77.2090,
    shelters: [
      { name: "Talkatora Indoor Stadium Shelter", facility: "Large capacity, Medical supply station, drinking water", lat: 28.6250, lng: 77.1950 },
      { name: "Lodhi Road Community Hall Center", facility: "Emergency food rations, blankets, beds", lat: 28.5850, lng: 77.2250 },
      { name: "Dwarka Sector 10 Municipal School", facility: "Seismically safe structure, basic lodging", lat: 28.5800, lng: 77.0600 }
    ],
    hospitals: [
      { name: "AIIMS New Delhi Emergency", facility: "Apex Trauma Care Unit, generator microgrid backup", lat: 28.5672, lng: 77.2100 },
      { name: "Safdarjung Hospital", facility: "High Capacity burns ward, critical surgery", lat: 28.5665, lng: 77.2070 }
    ]
  },
  kolkata: {
    lat: 22.5726, lng: 88.3639,
    shelters: [
      { name: "Netaji Indoor Stadium Cyclone Base", facility: "Flood safe, high concrete capacity, drinking water", lat: 22.5644, lng: 88.3414 },
      { name: "Salt Lake Community Center Sector 3", facility: "Dry food supplies, blankets, medical first-aid", lat: 22.5710, lng: 88.4150 },
      { name: "Howrah Welfare Stadium Shelter", facility: "Helicopter evacuation assembly yard", lat: 22.5850, lng: 88.3280 }
    ],
    hospitals: [
      { name: "SSKM Hospital Trauma Care", facility: "Primary Disaster Response Unit, backup power", lat: 22.5390, lng: 88.3440 },
      { name: "Calcutta Medical College Emergency", facility: "High-capacity emergency surgery beds", lat: 22.5732, lng: 88.3602 }
    ]
  },
  bhubaneswar: {
    lat: 20.2961, lng: 85.8245,
    shelters: [
      { name: "Odisha State Cyclone Shelter Station 1", facility: "Cyclone windproof structure, elevated drinking water tank", lat: 20.3120, lng: 85.8450 },
      { name: "Kalinga Stadium Assembly Shelter", facility: "High capacity, food preparation kitchen, medical bay", lat: 20.2880, lng: 85.8220 }
    ],
    hospitals: [
      { name: "AIIMS Bhubaneswar Trauma", facility: "State-of-the-art emergency disaster response center", lat: 20.2300, lng: 85.7760 },
      { name: "Capital Hospital Unit 6", facility: "24/7 emergency unit, backup water supply", lat: 20.2680, lng: 85.8240 }
    ]
  },
  guwahati: {
    lat: 26.1445, lng: 91.7362,
    shelters: [
      { name: "Assam Flood Relief Center (Dispur School)", facility: "High-ground shelter, potable water filter stations", lat: 26.1380, lng: 91.7920 },
      { name: "Guwahati Municipal Stadium Camp", facility: "Basic rations, infant supply kits, blankets", lat: 26.1600, lng: 91.7510 }
    ],
    hospitals: [
      { name: "Gauhati Medical College Hospital", facility: "Regional emergency surgery center, backup power generators", lat: 26.1550, lng: 91.7760 }
    ]
  }
};

Object.assign(SHELTER_DB, INDIAN_CITIES_DB);

console.log("[Indian Localization] Bengali & Marathi languages combined. Indian regional databases merged.");
