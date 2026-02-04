// Smaranam Core Logic - Audio Edition

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
        keywords: ["namah shivay", "shiva", "shivaya", "un namah shivay"],
        audio: "audio/om_namah_shivaya.mp3"
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
        keywords: ["vasudev", "namo bhagavate", "vasudevaya", "un namo"],
        audio: "audio/om_namo_bhagavate_vasudevaya.mp3"
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
        keywords: ["ganpataye", "ganpati", "ganesha", "ganapataye"],
        audio: "audio/om_gan_ganapataye_namah.mp3"
    },
    {
        hi: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे",
        kn: "ಹರೇ ಕೃಷ್ಣ ಹರೇ ಕೃಷ್ಣ ಕೃಷ್ಣ ಕೃಷ್ಣ ಹರೇ ಹರೇ",
        or: "ହରେ କୃଷ୍ଣ ହରେ କୃଷ୍ଣ କୃଷ୍ଣ କୃଷ୍ଣ ହରେ ହରେ",
        ta: "ஹரே கிருஷ்ண ஹரே கிருஷ்ண கிருஷ்ண கிருஷ்ண ஹரே ஹரே",
        ml: "ഹരേ കൃഷ്ണ ഹരേ കൃഷ്ണ കൃഷ്ണ കൃഷ്ണ ഹരേ ഹരേ",
        mr: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे",
        te: "హరే కృష్ణ ಹರೇ ಕೃಷ್ಣ కృష్ణ కృష్ణ ಹರೇ ಹರೇ",
        en: "Hare Krishna Hare Krishna Krishna Krishna Hare Hare",
        keywords: ["hare krishna", "krishna krishna", "rama rama", "hare hare"],
        audio: "audio/hare_krishna_mahamantra.mp3"
    },
    {
        hi: "राम हरे कृष्ण हरे राम हरे कृष्ण हरे राम हरे कृष्ण हरे अनंत माधव हरे",
        kn: "ರಾಮ ಹರೇ ಕೃಷ್ಣ ಹರೇ ರಾಮ ಹರೇ ಕೃಷ್ಣ ಹರೇ ರಾಮ ಹರೇ ಕೃಷ್ಣ ಹರೇ ಅನಂತ ಮಾಧವ ಹರೇ",
        or: "ରାମ ହରେ କୃଷ୍ଣ ହରେ ରାମ ହରେ କୃଷ୍ଣ ହରେ ରାମ ହରେ କୃଷ୍ଣ ହରେ ଅନନ୍ତ ମାଧବ ହରେ",
        ta: "ராம ஹரே கிருஷ்ண ஹரே ராம ஹரே கிருஷ்ண ஹரே ராம ஹரே கிருஷ்ண ஹரே அனந்த மாதவ ஹரே",
        ml: "രാമ ഹരേ കൃഷ്ണ ഹരേ രാമ ഹരേ കൃഷ്ണ ഹരേ രാമ ഹരേ കൃഷ്ണ ഹരേ അനಂತ ಮಾಧವ ಹರೇ",
        mr: "राम हरे कृष्ण हरे राम हरे कृष्ण हरे राम हरे कृष्ण हरे अनंत माधव हरे",
        te: "రామ హరే కృష్ణ ಹರೇ ರಾಮ హరే కృష్ణ ಹರೇ ರಾಮ హరే కృష్ణ ಹರೇ ಅನంత మాధవ హరే",
        en: "Rama Hare Krishna Hare Rama Hare Krishna Hare Rama Hare Krishna Hare Ananta Madhav Hare",
        keywords: ["rama hare", "krsna hare", "ananta", "madhav", "hare rama", "maadhava", "ananta madhav"],
        audio: "audio/rama_hare_krishna.mp3"
    }
];

const translations = {
    en: {
        chats: "Chants",
        today: "Today",
        malas: "Malas",
        session: "Session",
        lifetime: "Lifetime",
        resetConfirm: "Peacefully reset session count and rounds?",
        clearConfirm: "CRITICAL: This will permanently wipe ALL chanting data. Are you sure?"
    },
    hi: {
        today: "आज",
        malas: "माला",
        session: "सत्र",
        lifetime: "कुल",
        chats: "जाप",
        resetConfirm: "क्या आप सत्र सुधारना चाहते हैं?",
        clearConfirm: "सावधानी: क्या आप सारा डेटा मिटाना चाहते हैं?"
    },
    kn: {
        today: "ಇಂದು",
        malas: "ಮಾಲೆಗಳು",
        session: "ಸೆಷನ್",
        lifetime: "ಒಟ್ಟು",
        chats: "ಜಪ",
        resetConfirm: "ಸೆಷನ್ ಮರುಹೊಂದಿಸಬೇಕೆ?",
        clearConfirm: "ಎಚ್ಚರಿಕೆ: ಎಲ್ಲಾ ಡೇಟಾವನ್ನು ಅಳಿಸಬೇಕೆ?"
    },
    or: {
        today: "ଆଜି",
        malas: "ମାଳା",
        session: "ସେସନ୍",
        lifetime: "ମୋଟ",
        chats: "ଜପ",
        resetConfirm: "ସେସନ୍ ରିସେଟ୍ କରିବେ କି?",
        clearConfirm: "ସତର୍କତା: ସମସ୍ତ ଡାଟା ଲିଭାଇ ଦେବେ କି?"
    },
    ta: {
        today: "இன்று",
        malas: "மாலைகள்",
        session: "அமர்வு",
        lifetime: "மொத்தம்",
        chats: "ஜெபம்",
        resetConfirm: "அமர்வை மீட்டமைக்க வேண்டுமா?",
        clearConfirm: "எச்சரிக்கை: அனைத்து தரவையும் அழிக்க வேண்டுமா?"
    },
    ml: {
        today: "ഇന്ന്",
        malas: "മാലകൾ",
        session: "സെഷൻ",
        lifetime: "ആകെ",
        chats: "ജപം",
        resetConfirm: "സെഷൻ റീസെറ്റ് ചെയ്യണോ?",
        clearConfirm: "മുന്നറിയിപ്പ്: എല്ലാ ഡാറ്റയും മായ്ക്കണോ?"
    },
    mr: {
        today: "आज",
        malas: "माळ",
        session: "सत्र",
        lifetime: "एकूण",
        chats: "जाप",
        resetConfirm: "सत्र रिसेट करायचे आहे का?",
        clearConfirm: "सावधान: तुम्ही सर्व डेटा हटवू इच्छिता का?"
    },
    te: {
        today: "ఈరోజు",
        malas: "మాలలు",
        session: "సెషన్",
        lifetime: "మొత్తం",
        chats: "జపం",
        resetConfirm: "సెషన్‌ను రీసెట్ చేయాలా?",
        clearConfirm: "అప్రమత్తత: మీరు మొత్తం డేటాను తొలగించాలనుకుంటున్నారా?"
    }
};

let state = {
    currentIndex: 0,
    sessionCount: 0,
    dailyTotal: 0,
    lifetimeTotal: 0,
    sessionRound: 0,
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
const SHANKH_SOUND_URL = 'https://indiemusicbox.s3.amazonaws.com/downloads/meditation-bell-pack/Meditation+Bell+3.mp3';
const malaSound = new Audio(MALA_SOUND_URL);
const shankhSound = new Audio(SHANKH_SOUND_URL);
malaSound.volume = 0.5;
shankhSound.volume = 0.7;

// Audio Logic
let isPlaying = false;
let mantraAudio = new Audio();
const PLAY_ICON = `<path d="M8 5v14l11-7z"/>`;
const PAUSE_ICON = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;

const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const playStatus = document.getElementById('play-status');




function initAudio() {
    mantraAudio.addEventListener('ended', () => {
        handleIncrement();
        if (state.sessionCount % MALA_SIZE !== 0 && isPlaying) {
            mantraAudio.currentTime = 0;
            mantraAudio.play().catch(e => console.error("Playback error", e));
        } else if (state.sessionCount % MALA_SIZE === 0) {
            togglePlay(false); // Stop after 108
        }
    });

    // Error handling - Fallback to Bell if file not found
    mantraAudio.addEventListener('error', (e) => {
        if (mantraAudio.src !== MALA_SOUND_URL) {
            console.warn("Mantra audio missing, falling back to default bell.");
            if (!mantraAudio.src.includes('indiemusicbox')) {
                mantraAudio.src = MALA_SOUND_URL;
                if (isPlaying) mantraAudio.play();
            }
        }
    });
}

function togglePlay(forceState) {
    if (forceState !== undefined) {
        isPlaying = forceState;
    } else {
        isPlaying = !isPlaying;
    }

    if (isPlaying) {
        const currentMantra = mantras[state.currentIndex];
        mantraAudio.src = currentMantra.audio || MALA_SOUND_URL;
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        playStatus.textContent = translations[state.language].chanting || "Chanting...";
        mantraAudio.play().catch(e => {
            console.error(e);
            isPlaying = false;
            updatePlayUI();
        });
    } else {
        mantraAudio.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        playStatus.textContent = translations[state.language].resume || "Resume Sadhana";
    }
}

function updatePlayUI() {
    if (isPlaying) {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        playStatus.textContent = translations[state.language].chanting || "Chanting...";
    } else {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        playStatus.textContent = translations[state.language]?.start || "Start Sadhana";
    }
}

function init() {
    loadState();
    state.sessionRound = 0;
    initAudio();
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

    lblToday.textContent = t.today;
    lblMalas.textContent = `${t.malas} (${t.session})`;
    lblLifetime.textContent = t.lifetime;
    lblChants.textContent = t.chats; // Note: 'chants' key in translation is 'chats' in some cleanups, let's stick to 'chats' or 'chants'. The initial object had 'chants'. I used 'chats' in translations above. Let me correct translations to 'chants' if I can or use 'chats'. The original code had 'chants'. I'll use 'chants' in the code.

    // Fixing my own typo in the translations object above: 'chats' -> 'chants'
    if (t.chants) lblChants.textContent = t.chants;
    else if (t.chats) lblChants.textContent = t.chats;

    if (!isPlaying) playStatus.textContent = (state.sessionCount > 0) ? (t.resume || "Resume") : (t.start || "Start Sadhana");

    const progress = (state.sessionCount % MALA_SIZE) / MALA_SIZE;
    const offset = CIRCUMFERENCE - (progress * CIRCUMFERENCE);
    progressRing.style.strokeDashoffset = offset;

    if (!silent) {
        mantraDisplay.style.animation = 'none';
        void mantraDisplay.offsetWidth;
        mantraDisplay.style.animation = 'slideUp 0.8s cubic-bezier(0.2, 1, 0.3, 1)';
    }

    langSelect.value = state.language;
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
        if ('vibrate' in navigator) navigator.vibrate([100, 50, 100, 50, 100]);
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
            language: state.language,
            isPremium: false,
            lastUpdate: new Date().toISOString()
        };
        updateUI();
    }
}

function switchMantra(direction) {
    if (isPlaying) togglePlay(false);
    state.currentIndex = (state.currentIndex + direction + mantras.length) % mantras.length;
    saveState();
    updateUI();
}

function setupEventListeners() {
    playPauseBtn.addEventListener('click', () => togglePlay());

    resetBtn.addEventListener('click', () => { handleReset(); if (isPlaying) togglePlay(false); });
    clearAllBtn.addEventListener('click', () => { handleClearAll(); if (isPlaying) togglePlay(false); });
    prevBtn.addEventListener('click', () => switchMantra(-1));
    nextBtn.addEventListener('click', () => switchMantra(1));

    langSelect.addEventListener('change', (e) => {
        state.language = e.target.value;
        saveState();
        updateUI(true);
    });

    openSubs.addEventListener('click', () => subsModal.classList.add('active'));
    closeSubs.addEventListener('click', () => subsModal.classList.remove('active'));
    subsModal.addEventListener('click', (e) => { if (e.target === subsModal) subsModal.classList.remove('active'); });

    planBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            subsModal.classList.remove('active');
            paymentModal.classList.add('active');
        });
    });

    const aboutModal = document.getElementById('about-modal');
    const aboutBtn = document.getElementById('about-btn');
    const closeAbout = document.getElementById('close-about');

    aboutBtn.addEventListener('click', () => aboutModal.classList.add('active'));
    closeAbout.addEventListener('click', () => aboutModal.classList.remove('active'));
    aboutModal.addEventListener('click', (e) => { if (e.target === aboutModal) aboutModal.classList.remove('active'); });

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
