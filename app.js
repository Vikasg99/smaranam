// Smaranam Core Logic - Kesari Voice Edition

const mantras = [
    {
        hi: "ॐ नमः शिवाय",
        kn: "ಓಂ ನಮಃ ಶಿವಾಯ",
        or: "ଓଁ ନମଃ ଶିବାୟ",
        ta: "ஓம் நம சிவாய",
        ml: "ഓം നമ: ശിവായ",
        mr: "ॐ नमः शिवाय",
        te: "ఓం నమః ಶಿವాయ",
        en: "Om Namah Shivaya",
        keywords: ["namah shivay", "shiva", "shivaya", "un namah shivay"]
    },
    {
        hi: "ॐ नमो भगवते वासुदेवाय",
        kn: "ಓಂ ನಮೋ ಭಗವತೇ ವಾಸುದೇವಾಯ",
        or: "ଓଁ ନମୋ ଭଗବତେ ବାସୁଦେବାୟ",
        ta: "ஓம நமோ பகவதே வாசுதேவாய",
        ml: "ഓം നമോ ഭഗവതേ വാസുദേവായ",
        mr: "ॐ नमो भगवते वासुदेवाय",
        te: "ఓం నమో భగవతే వాసుదేవాయ",
        en: "Om Namo Bhagavate Vasudevaya",
        keywords: ["vasudev", "namo bhagavate", "vasudevaya", "un namo"]
    },
    {
        hi: "ॐ गं गणपतये नमः",
        kn: "ಓಂ ಗಂ ಗಣಪತಯೇ ನಮಃ",
        or: "ଓଁ ଗଂ ଗଣପତୟେ ନମଃ",
        ta: "ஓம் கம் கணபதயே நம",
        ml: "ഓം ഗം ഗണപതയേ നമഃ",
        mr: "ॐ गं गणपतಯೇ ನಮಃ",
        te: "ఓం గం గణపతయే నమః",
        en: "Om Gam Ganapataye Namah",
        keywords: ["ganpataye", "ganpati", "ganesha", "ganapataye"]
    },
    {
        hi: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे",
        kn: "ಹರೇ ಕೃಷ್ಣ ಹರೇ ಕೃಷ್ಣ ಕೃಷ್ಣ ಕೃಷ್ಣ ಹರೇ ಹರೇ",
        or: "ହରେ କୃଷ୍ଣ ହରେ କୃଷ୍ଣ କୃଷ୍ଣ କୃଷ୍ଣ ହରେ ହରେ",
        ta: "ஹரே கிருஷ்ண ஹரே கிருஷ்ண கிருஷ்ண கிருஷ்ண ஹரே ஹரே",
        ml: "ഹരേ കൃഷ്ണ ഹരേ കൃഷ്ണ കൃഷ്ണ കൃഷ്ണ ഹരേ ഹരേ",
        mr: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे",
        te: "హరే కృష్ణ ಹರೇ ಕೃಷ್ಣ ಕೃಷ್ಣ ಕృష్ణ ಹರೇ ಹರೇ",
        en: "Hare Krishna Hare Krishna Krishna Krishna Hare Hare",
        keywords: ["hare krishna", "krishna krishna", "rama rama", "hare hare"]
    },
    {
        hi: "राम हरे कृष्ण हरे राम हरे कृष्ण हरे राम हरे कृष्ण हरे अनंत माधव हरे",
        kn: "ರಾಮ ಹರೇ ಕೃಷ್ಣ ಹರೇ ರಾಮ ಹರೇ ಕೃಷ್ಣ ಹರೇ ರಾಮ ಹರೇ ಕೃಷ್ಣ ಹರೇ ಅನಂತ ಮಾಧವ ಹರೇ",
        or: "ରାମ ହରେ କୃଷ୍ଣ ହରେ ରାମ ହରେ କୃଷ୍ଣ ହରେ ରାମ ହରେ କୃଷ୍ଣ ହରେ ଅନନ୍ତ ମାଧବ ହରେ",
        ta: "ராம ஹரே கிருஷ்ண ஹரே ராம ஹரே கிருஷ்ண ஹரே ராம ஹரே கிருஷ்ண ஹரே அனந்த மாதவ ஹரே",
        ml: "രാമ ഹരേ കൃഷ്ണ ഹരേ രാമ ഹരേ കൃഷ്ണ ഹരേ രാമ ഹരേ കൃഷ്ണ ഹരേ അനന്ത മാധവ ഹരേ",
        mr: "राम हरे कृष्ण हरे राम हरे कृष्ण हरे राम हरे कृष्ण हरे अनंत माधव हरे",
        te: "రామ హరే కృష్ణ ಹರೇ ರಾಮ ಹರೇ ಕೃಷ್ಣ ಹರೇ ರಾಮ ಹರೇ ಕೃಷ್ಣ ಹರೇ ಅನಂತ ಮಾಧವ ಹರೇ",
        en: "Rama Hare Krishna Hare Rama Hare Krishna Hare Rama Hare Krishna Hare Ananta Madhav Hare",
        keywords: ["rama hare", "krsna hare", "ananta", "madhav", "hare rama", "maadhava", "ananta madhav"]
    }
];

const translations = {
    en: {
        voiceOn: "Voice On",
        voiceOff: "Voice Off",
        chants: "Chants",
        today: "Today",
        malas: "Malas",
        session: "Session",
        lifetime: "Lifetime",
        resetConfirm: "Peacefully reset session count and rounds?",
        clearConfirm: "CRITICAL: This will permanently wipe ALL chanting data. Are you sure?",
        micAccess: "Please allow microphone access for voice counting."
    },
    hi: {
        voiceOn: "आवाज़ ऑन",
        voiceOff: "आवाज़ ऑफ",
        today: "आज",
        malas: "माला",
        session: "सत्र",
        lifetime: "कुल",
        chants: "जाप",
        resetConfirm: "क्या आप सत्र सुधारना चाहते हैं?",
        clearConfirm: "सावधानी: क्या आप सारा डेटा मिटाना चाहते हैं?",
        micAccess: "कृपया माइक्रोफ़ोन इस्तेमाल करने की अनुमति दें।"
    },
    kn: {
        voiceOn: "ಧ್ವನಿ ಆನ್",
        voiceOff: "ಧ್ವನಿ ಆಫ್",
        today: "ಇಂದು",
        malas: "ಮಾಲೆಗಳು",
        session: "ಸೆಷನ್",
        lifetime: "ಒಟ್ಟು",
        chants: "ಜಪ",
        resetConfirm: "ಸೆಷನ್ ಮರುಹೊಂದಿಸಬೇಕೆ?",
        clearConfirm: "ಎಚ್ಚರಿಕೆ: ಎಲ್ಲಾ ಡೇಟಾವನ್ನು ಅಳಿಸಬೇಕೆ?",
        micAccess: "ದಯವಿಟ್ಟು ಮೈಕ್ರೋಫೋನ್ ಅನುಮತಿ ನೀಡಿ."
    },
    or: {
        voiceOn: "ଭଏସ୍ ଅନ୍",
        voiceOff: "ଭଏସ୍ ଅଫ୍",
        today: "ଆଜି",
        malas: "ମାଳା",
        session: "ସେସନ୍",
        lifetime: "ମୋଟ",
        chants: "ଜପ",
        resetConfirm: "ସେସନ୍ ରିସେଟ୍ କରିବେ କି?",
        clearConfirm: "ସତର୍କତା: ସମସ୍ତ ଡାଟା ଲିଭାଇ ଦେବେ କି?",
        micAccess: "ଦୟାକରି ମାଇକ୍ରୋଫୋନ୍ ଅନୁମତି ଦିଅନ୍ତୁ |"
    },
    ta: {
        voiceOn: "குரல் ஆன்",
        voiceOff: "குரல் ஆஃப்",
        today: "இன்று",
        malas: "மாலைகள்",
        session: "அமர்வு",
        lifetime: "மொத்தம்",
        chants: "ஜெபம்",
        resetConfirm: "அமர்வை மீட்டமைக்க வேண்டுமா?",
        clearConfirm: "எச்சரிக்கை: அனைத்து தரவையும் அழிக்க வேண்டுமா?",
        micAccess: "தயவுசெய்து மைக்ரோஃபோன் அணுகலை அனுமதிக்கவும்."
    },
    ml: {
        voiceOn: "വോയ്‌സ് ഓൺ",
        voiceOff: "വോയ്‌സ് ഓഫ്",
        today: "ഇന്ന്",
        malas: "മാലകൾ",
        session: "സെഷൻ",
        lifetime: "ആകെ",
        chants: "ജപം",
        resetConfirm: "സെഷൻ റീസെറ്റ് ചെയ്യണോ?",
        clearConfirm: "മുന്നറിയിപ്പ്: എല്ലാ ഡാറ്റയും മായ്ക്കണോ?",
        micAccess: "ദയവായി മൈക്രോഫോൺ അനുമതി നൽകുക."
    },
    mr: {
        voiceOn: "आवाज चालू",
        voiceOff: "आवाज बंद",
        today: "आज",
        malas: "माळ",
        session: "सत्र",
        lifetime: "एकूण",
        chants: "जाप",
        resetConfirm: "सत्र रिसेट करायचे आहे का?",
        clearConfirm: "सावधान: तुम्ही सर्व डेटा हटवू इच्छिता का?",
        micAccess: "कृपया माईक वापरण्याची परवानगी द्या."
    },
    te: {
        voiceOn: "వాయిస్ ఆన్",
        voiceOff: "వాయిస్ ఆఫ్",
        today: "ఈరోజు",
        malas: "మాలలు",
        session: "సెషన్",
        lifetime: "మొత్తం",
        chants: "జపం",
        resetConfirm: "సెషన్‌ను రీసెట్ చేయాలా?",
        clearConfirm: "అప్రమత్తత: మీరు మొత్తం డేటాను తొలగించాలనుకుంటున్నారా?",
        micAccess: "దయచేసి మైక్రோఫోన్ అనుమతి ఇవ్వండి."
    }
};

let state = {
    currentIndex: 0,
    sessionCount: 0,
    dailyTotal: 0,
    lifetimeTotal: 0,
    sessionRound: 0,
    isVoiceActive: false,
    language: 'en',
    isPremium: false,
    lastUpdate: null
};

// DOM Elements
const counterBtn = document.getElementById('counter-btn');
const currentCountEl = document.getElementById('current-count');
const progressRing = document.getElementById('progress-ring');
const rippleContainer = document.getElementById('ripple-container');
const dailyTotalEl = document.getElementById('daily-total');
const malaCountEl = document.getElementById('mala-count');
const lifetimeTotalEl = document.getElementById('lifetime-total');
const hindiMantraEl = document.getElementById('hindi-mantra');
const mantraDisplay = document.getElementById('mantra-display');
const prevBtn = document.getElementById('prev-mantra');
const nextBtn = document.getElementById('next-mantra');
const resetBtn = document.getElementById('reset-btn');
const clearAllBtn = document.getElementById('clear-all-btn');
const voiceToggle = document.getElementById('voice-toggle');
const voiceStatus = document.getElementById('voice-status');
const langSelect = document.getElementById('lang-select');
const subsModal = document.getElementById('subs-modal');
const openSubs = document.getElementById('open-subs');
const closeSubs = document.getElementById('close-subs');
const paymentModal = document.getElementById('payment-modal');
const closePayment = document.getElementById('close-payment');
const planBtns = document.querySelectorAll('.plan-btn');

// Labels
const lblToday = document.getElementById('lbl-today');
const lblMalas = document.getElementById('lbl-malas');
const lblLifetime = document.getElementById('lbl-lifetime');
const lblChants = document.getElementById('lbl-chants');

// Constants & Audio
const MALA_SIZE = 108;
const CIRCUMFERENCE = 2 * Math.PI * 45;
const MALA_SOUND_URL = 'https://indiemusicbox.s3.amazonaws.com/downloads/meditation-bell-pack/Meditation+Bell+2.mp3';
const SHANKH_SOUND_URL = 'https://indiemusicbox.s3.amazonaws.com/downloads/meditation-bell-pack/Meditation+Bell+3.mp3'; // Using a deeper spiritual bell as placeholder for Shankh
const malaSound = new Audio(MALA_SOUND_URL);
const shankhSound = new Audio(SHANKH_SOUND_URL);
malaSound.volume = 0.5;
shankhSound.volume = 0.7;

// Web Speech API Setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;

if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
        const result = event.results[event.results.length - 1][0].transcript.toLowerCase();
        const currentMantra = mantras[state.currentIndex];
        if (currentMantra.keywords.some(keyword => result.includes(keyword))) {
            handleIncrement();
        }
    };

    recognition.onend = () => { if (state.isVoiceActive) recognition.start(); };
    recognition.onerror = (event) => {
        if (event.error === 'not-allowed') {
            alert(translations[state.language].micAccess);
            toggleVoice(false);
        }
    };
}

// Security: Input Sanitizer
function sanitize(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// Logic Functions
function init() {
    loadState();
    state.sessionRound = 0;
    updateUI(true);
    setupEventListeners();
    checkDailyReset();
    progressRing.style.strokeDasharray = `${CIRCUMFERENCE} ${CIRCUMFERENCE}`;
}

function loadState() {
    const saved = localStorage.getItem('chant_gravity_state');
    if (saved) {
        state = { ...state, ...JSON.parse(saved) };
    }
    if (state.sessionRound === undefined) state.sessionRound = 0;
    if (state.language === undefined) state.language = 'en';
}

function saveState() {
    state.lastUpdate = new Date().toISOString();
    localStorage.setItem('chant_gravity_state', JSON.stringify(state));
}

function checkDailyReset() {
    const now = new Date();
    const lastDate = state.lastUpdate ? new Date(state.lastUpdate) : null;
    if (lastDate && lastDate.toDateString() !== now.toDateString()) {
        state.dailyTotal = 0;
        state.sessionRound = 0;
        saveState();
        updateUI();
    }
}

function updateUI(silent = false) {
    const t = translations[state.language];
    const mantra = mantras[state.currentIndex];

    hindiMantraEl.textContent = mantra[state.language] || mantra.hi;
    animateValue(currentCountEl, state.sessionCount);
    dailyTotalEl.textContent = state.dailyTotal;

    const totalMalas = Math.floor(state.lifetimeTotal / MALA_SIZE);
    malaCountEl.textContent = `${totalMalas} (${state.sessionRound})`;
    lifetimeTotalEl.textContent = state.lifetimeTotal;

    // Translated Labels
    lblToday.textContent = t.today;
    lblMalas.textContent = `${t.malas} (${t.session})`;
    lblLifetime.textContent = t.lifetime;
    lblChants.textContent = t.chants;

    // Progress
    const progress = (state.sessionCount % MALA_SIZE) / MALA_SIZE;
    const offset = CIRCUMFERENCE - (progress * CIRCUMFERENCE);
    progressRing.style.strokeDashoffset = offset;

    if (!silent) {
        mantraDisplay.style.animation = 'none';
        void mantraDisplay.offsetWidth;
        mantraDisplay.style.animation = 'slideUp 0.8s cubic-bezier(0.2, 1, 0.3, 1)';
    }

    voiceToggle.classList.toggle('active', state.isVoiceActive);
    voiceStatus.textContent = state.isVoiceActive ? t.voiceOn : t.voiceOff;
    langSelect.value = state.language;
}

function toggleVoice() {
    if (!SpeechRecognition) {
        alert("Speech recognition not supported in this browser.");
        return;
    }
    state.isVoiceActive = !state.isVoiceActive;
    if (state.isVoiceActive) {
        recognition.start();
        voiceToggle.classList.add('listening');
    } else {
        recognition.stop();
        voiceToggle.classList.remove('listening');
    }
    updateUI(true);
}

function animateValue(obj, value) {
    obj.textContent = value;
    obj.classList.remove('pulse');
    void obj.offsetWidth;
    obj.classList.add('pulse');
}

function createRipple() {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    rippleContainer.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
}

function handleIncrement() {
    state.sessionCount++;
    state.dailyTotal++;
    state.lifetimeTotal++;
    createRipple();
    if ('vibrate' in navigator) navigator.vibrate(15);

    if (state.sessionCount % MALA_SIZE === 0) {
        state.sessionRound++;
        shankhSound.currentTime = 0;
        shankhSound.play().catch(e => console.log("Shankh play blocked:", e));
        if ('vibrate' in navigator) navigator.vibrate([100, 50, 100, 50, 100]); // Stronger vibration for Shankh
        createMalaBlast();
    }
    saveState();
    updateUI(true);
}

function createMalaBlast() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => createRipple(), i * 100);
    }
}

function handleReset() {
    if (confirm(translations[state.language].resetConfirm)) {
        state.sessionCount = 0;
        state.sessionRound = 0;
        saveState();
        updateUI();
    }
}

function handleClearAll() {
    if (confirm(translations[state.language].clearConfirm)) {
        localStorage.removeItem('chant_gravity_state');
        state = {
            currentIndex: 0,
            sessionCount: 0,
            dailyTotal: 0,
            lifetimeTotal: 0,
            sessionRound: 0,
            isVoiceActive: false,
            language: state.language,
            isPremium: false,
            lastUpdate: new Date().toISOString()
        };
        updateUI();
    }
}

function switchMantra(direction) {
    state.currentIndex = (state.currentIndex + direction + mantras.length) % mantras.length;
    saveState();
    updateUI();
}

function setupEventListeners() {
    let lastEventTime = 0;
    counterBtn.addEventListener('click', () => {
        if (Date.now() - lastEventTime < 300) return;
        lastEventTime = Date.now();
        handleIncrement();
    });

    counterBtn.addEventListener('touchstart', (e) => {
        if (Date.now() - lastEventTime < 300) {
            e.preventDefault();
            return;
        }
        lastEventTime = Date.now();
        handleIncrement();
    }, { passive: false });

    resetBtn.addEventListener('click', handleReset);
    clearAllBtn.addEventListener('click', handleClearAll);
    prevBtn.addEventListener('click', () => switchMantra(-1));
    nextBtn.addEventListener('click', () => switchMantra(1));
    voiceToggle.addEventListener('click', toggleVoice);

    langSelect.addEventListener('change', (e) => {
        state.language = e.target.value;
        saveState();
        updateUI(true);
    });

    openSubs.addEventListener('click', () => subsModal.classList.add('active'));
    closeSubs.addEventListener('click', () => subsModal.classList.remove('active'));
    subsModal.addEventListener('click', (e) => { if (e.target === subsModal) subsModal.classList.remove('active'); });

    // Payment Modal
    planBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            subsModal.classList.remove('active');
            paymentModal.classList.add('active');
        });
    });

    closePayment.addEventListener('click', () => paymentModal.classList.remove('active'));
    paymentModal.addEventListener('click', (e) => { if (e.target === paymentModal) paymentModal.classList.remove('active'); });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' || e.code === 'Enter') {
            e.preventDefault();
            handleIncrement();
        }
    });
}

// CSS injection for counting pulse
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse-text {
        0% { transform: scale(1); }
        50% { transform: scale(1.15); color: #FF7722; filter: brightness(1.5); }
        100% { transform: scale(1); }
    }
    .pulse { animation: pulse-text 0.15s cubic-bezier(0.1, 0.9, 0.2, 1); }
`;
document.head.appendChild(style);

init();
