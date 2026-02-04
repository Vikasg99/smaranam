// Smaranam Core Logic - Audio & Speech Edition

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
        audio: "audio/om_namah_shivaya.mp3",
        speechText: "Om Namah Shivaya"
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
        audio: "audio/om_namo_bhagavate_vasudevaya.mp3",
        speechText: "Om Namo Bhagavate Vasudevaya"
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
        audio: "audio/om_gan_ganapataye_namah.mp3",
        speechText: "Om Gam Ganapataye Namah"
    },
    {
        hi: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे",
        kn: "ಹರೇ ಕೃಷ್ಣ ಹರೇ ಕೃಷ್ಣ ಕೃಷ್ಣ ಕೃಷ್ಣ ಹರೇ ಹರೇ",
        or: "ହରେ କୃଷ୍ଣ ହରେ କୃଷ୍ଣ କୃଷ୍ଣ କୃଷ୍ଣ ହରେ ହରେ",
        ta: "ஹரே கிருஷ்ண ஹரே கிருஷ்ண கிருஷ்ண கிருஷ்ண ஹரே ஹரே",
        ml: "ഹരേ കൃഷ്ണ ഹരേ കൃഷ്ണ കൃഷ്ണ കൃഷ്ണ ഹരേ ഹരേ",
        mr: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे",
        te: "హరే కృష్ణ ಹರೇ ಕೃಷ್ಣ కృష్ణ కృష్ణ ಹರೇ ಹರೇ",
        en: "Hare Krishna Hare Krishna Krishna Krishna Hare Hare\nHare Rama Hare Rama Rama Rama Hare Hare",
        keywords: ["hare krishna", "krishna krishna", "rama rama", "hare hare"],
        audio: "audio/hare_krishna_mahamantra.mp3",
        speechText: "Hare Krishna Hare Krishna, Krishna Krishna Hare Hare. Hare Rama Hare Rama, Rama Rama Hare Hare"
    },
    {
        hi: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्",
        en: "Om Bhur Bhuvah Svah Tat Savitur Varenyam Bhargo Devasya Dhimahi Dhiyo Yo Nah Prachodayat",
        speechText: "Om Bhur Bhuvah Svah, Tat Savitur Varenyam, Bhargo Devasya Dhimahi, Dhiyo Yo Nah Prachodayat",
        keywords: ["gayatri", "savitur"],
        label: "Gayatri Mantra"
    },
    {
        hi: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्",
        en: "Om Tryambakam Yajamahe Sugandhim Pushti Vardhanam Urvarukamiva Bandhanat Mrityor Mukshiya Mamritat",
        speechText: "Om Tryambakam Yajamahe Sugandhim Pushti Vardhanam, Urvarukamiva Bandhanat Mrityor Mukshiya Mamritat",
        keywords: ["mahamrityunjaya", "tryambakam", "shiva"],
        label: "Mahamrityunjaya Mantra"
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
        clearConfirm: "CRITICAL: This will permanently wipe ALL chanting data. Are you sure?",
        goalReached: "Session Goal Reached! Hari Om."
    },
    hi: {
        today: "आज",
        malas: "माला",
        session: "सत्र",
        lifetime: "कुल",
        chats: "जाप",
        resetConfirm: "क्या आप सत्र सुधारना चाहते हैं?",
        clearConfirm: "सावधानी: क्या आप सारा डेटा मिटाना चाहते हैं?",
        goalReached: "सत्र लक्ष्य पूरा हुआ! हरि ओम।"
    }
};

let state = {
    currentIndex: 0,
    sessionCount: 0,
    dailyTotal: 0,
    lifetimeTotal: 0,
    sessionRound: 0,
    language: 'en',
    theme: 'cosmic', // Default theme
    isPremium: false,
    lastUpdate: null,
    sessionGoal: '108', // Default 1 Mala
    sessionStartTime: null
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
const sessionGoalSelect = document.getElementById('session-goal'); // New Element

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

// Audio & Speech Logic
let isPlaying = false;
let mantraAudio = new Audio();
let speechSynth = window.speechSynthesis;
let speechUtterance = null;
let timerInterval = null;

const PLAY_ICON = `<path d="M8 5v14l11-7z"/>`;
const PAUSE_ICON = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;

const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const playStatus = document.getElementById('play-status');


function initAudio() {
    mantraAudio.addEventListener('ended', () => {
        handleIncrement();
        checkAudioLoop();
    });

    mantraAudio.addEventListener('error', (e) => {
        console.warn("Audio failed, switching to Speech mode");
        useSpeechFallback = true;
        // If it failed during play, restart with speech
        if (isPlaying) {
            speakMantra();
        }
    });
}

function speakMantra() {
    if (!isPlaying) return;

    if (speechSynth.speaking) {
        speechSynth.cancel();
    }

    const currentMantra = mantras[state.currentIndex];
    const textToSpeak = currentMantra.speechText || currentMantra.en;

    speechUtterance = new SpeechSynthesisUtterance(textToSpeak);

    // Select Voice (Prefer Indian English or Hindi)
    const voices = speechSynth.getVoices();
    const indianVoice = voices.find(v => v.lang.includes('IN') || v.lang.includes('hi'));
    if (indianVoice) speechUtterance.voice = indianVoice;

    speechUtterance.rate = 0.85; // Slightly slower for chanting feel
    speechUtterance.pitch = 0.9; // Slightly deeper

    speechUtterance.onend = () => {
        if (isPlaying) {
            handleIncrement();
            // Small pause before next chant
            setTimeout(() => {
                if (isPlaying) speakMantra();
            }, 300);
        }
    };

    speechUtterance.onerror = (e) => {
        console.error("Speech error", e);
        isPlaying = false;
        updatePlayUI();
    };

    speechSynth.speak(speechUtterance);
}


// --- Wake Lock Logic (Screen Keep Awake) ---
let wakeLock = null;

async function requestWakeLock() {
    try {
        if ('wakeLock' in navigator) {
            wakeLock = await navigator.wakeLock.request('screen');
            console.log('Wake Lock active');
            wakeLock.addEventListener('release', () => {
                console.log('Wake Lock released');
            });
        }
    } catch (err) {
        console.warn(`${err.name}, ${err.message}`);
    }
}

function releaseWakeLock() {
    if (wakeLock !== null) {
        wakeLock.release().then(() => {
            wakeLock = null;
        });
    }
}

// Global handleVisibilityChange (Combined with Zen Mode)
document.addEventListener('visibilitychange', async () => {
    if (document.hidden && isPlaying) {
        console.log("App interrupted - Pausing");
        togglePlay(false);
    } else if (!document.hidden && isPlaying) {
        // Re-acquire lock if we come back and are supposedly playing (though we pause usually)
        await requestWakeLock();
    }
});


// Updated togglePlay to use Wake Lock
function togglePlay(forceState) {
    if (forceState !== undefined) {
        isPlaying = forceState;
    } else {
        isPlaying = !isPlaying;
    }

    if (isPlaying) {
        // Start Session
        if (!state.sessionStartTime) state.sessionStartTime = Date.now();
        startTimerLogic();

        requestWakeLock(); // <--- Wake Lock ON

        const currentMantra = mantras[state.currentIndex];
        speakMantra();

        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        playStatus.textContent = "Chanting...";
        if (sessionGoalSelect) sessionGoalSelect.disabled = true;

    } else {
        // Stop Session
        if (speechSynth.speaking) speechSynth.cancel();
        mantraAudio.pause();
        stopTimerLogic();

        releaseWakeLock(); // <--- Wake Lock OFF

        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        playStatus.textContent = "Resume Sadhana";
        if (sessionGoalSelect) sessionGoalSelect.disabled = false;
    }
}

function startTimerLogic() {
    if (state.sessionGoal.endsWith('m')) {
        const minutes = parseInt(state.sessionGoal);
        const durationMs = minutes * 60 * 1000;

        // Clear any existing timer
        if (timerInterval) clearInterval(timerInterval);

        timerInterval = setInterval(() => {
            const elapsed = Date.now() - state.sessionStartTime;
            if (elapsed >= durationMs) {
                completeSession("Time Completed");
            }
        }, 1000);
    }
}

function stopTimerLogic() {
    if (timerInterval) clearInterval(timerInterval);
    state.sessionStartTime = null;
}

function checkGoalCompletion() {
    if (state.sessionGoal === 'inf') return;

    if (!state.sessionGoal.endsWith('m')) {
        // Count based
        const targetCount = parseInt(state.sessionGoal);

        // Simple logic: If we hit exactly the target (modulo or total), stop.
        if (targetCount === 108) {
            // Standard Mala logic handled in handleIncrement (mod 108)
            // If they selected 1 Mala, we stop at 108 (or multiple of).
            if (state.sessionCount > 0 && state.sessionCount % 108 === 0) {
                completeSession("1 Mala Completed");
            }
        } else {
            // Specific count like 1008
            if (state.sessionCount >= targetCount) {
                completeSession("Target Count Reached");
            }
        }
    }
}

function updatePlayUI() {
    if (isPlaying) {
        if (playIcon) playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = 'block';
        if (playStatus) playStatus.textContent = "Chanting...";
    } else {
        if (playIcon) playIcon.style.display = 'block';
        if (pauseIcon) pauseIcon.style.display = 'none';
        if (playStatus) playStatus.textContent = "Start Sadhana";
    }
}

// Updated completeSession to use Modal instead of Alert
const completionModal = document.getElementById('completion-modal');
const completionMsg = document.getElementById('completion-msg');
const closeCompletionBtn = document.getElementById('close-completion');
const restartCompletionBtn = document.getElementById('restart-completion');

if (closeCompletionBtn) closeCompletionBtn.addEventListener('click', () => {
    if (completionModal) completionModal.classList.remove('active');
    // Ensure we are stopped
    if (isPlaying) togglePlay(false);
});

if (restartCompletionBtn) restartCompletionBtn.addEventListener('click', () => {
    if (completionModal) completionModal.classList.remove('active');
    handleReset();
    // Maybe auto-start? Let's let user click start for intention.
});


function completeSession(msg) {
    togglePlay(false);
    shankhSound.currentTime = 0;
    shankhSound.play();

    // Show Modal
    if (completionMsg) completionMsg.textContent = translations[state.language].goalReached || msg;
    if (completionModal) completionModal.classList.add('active');

    // Reset session start to allow new session
    state.sessionStartTime = null;
}

function loadState() {
    const saved = localStorage.getItem('chant_gravity_state');
    if (saved) {
        state = { ...state, ...JSON.parse(saved) };
    }
    // Set defaults if new fields missing
    if (!state.sessionGoal) state.sessionGoal = '108';

    // Restore UI state
    sessionGoalSelect.value = state.sessionGoal;
}

function saveState() {
    state.lastUpdate = new Date().toISOString();
    state.sessionGoal = sessionGoalSelect.value;
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
    const t = translations[state.language] || translations['en']; // Fallback
    const mantra = mantras[state.currentIndex];

    // Update mantra text in selected language
    const mantraText = mantra[state.language] || mantra.hi || mantra.en;
    hindiMantraEl.textContent = mantraText;

    animateValue(currentCountEl, state.sessionCount);
    dailyTotalEl.textContent = state.dailyTotal;

    const totalMalas = Math.floor(state.lifetimeTotal / MALA_SIZE);
    malaCountEl.textContent = `${totalMalas} (${state.sessionRound})`;
    lifetimeTotalEl.textContent = state.lifetimeTotal;

    lblToday.textContent = t.today;
    lblMalas.textContent = `${t.malas} (${t.session})`;
    lblLifetime.textContent = t.lifetime;
    lblChants.textContent = t.chats || "Chants";

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

    if (state.sessionCount > 0 && state.sessionCount % MALA_SIZE === 0) {
        state.sessionRound++;
        shankhSound.currentTime = 0;
        shankhSound.play().catch(e => console.log("Shankh play blocked:", e));
        if ('vibrate' in navigator) navigator.vibrate([100, 50, 100, 50, 100]);
        createMalaBlast();
    }

    saveState();
    updateUI(true);
    checkGoalCompletion();
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
        state.sessionStartTime = null;
        saveState();
        updateUI();
    }
}

function handleClearAll() {
    if (confirm(translations[state.language].clearConfirm)) {
        localStorage.removeItem('chant_gravity_state');
        // Reload page to reset everything cleanly or re-init
        location.reload();
    }
}

function switchMantra(direction) {
    if (isPlaying) togglePlay(false);
    state.currentIndex = (state.currentIndex + direction + mantras.length) % mantras.length;
    saveState();
    updateUI();
}

// --- Zen Mode & Interruption Handling ---
const zenModal = document.getElementById('zen-modal');
const confirmZenBtn = document.getElementById('confirm-zen');
const skipZenBtn = document.getElementById('skip-zen');

function initZenMode() {
    // Check if user has already seen the message this session
    const zenSeen = sessionStorage.getItem('zen_mode_seen');
    if (!zenSeen) {
        if (zenModal) zenModal.classList.add('active');
        return true; // Zen mode triggered
    }
    return false; // Already seen, safe to play
}

function handleZenConfirm() {
    sessionStorage.setItem('zen_mode_seen', 'true');
    if (zenModal) zenModal.classList.remove('active');
    togglePlay(true); // Start playing
}

function handleZenSkip() {
    sessionStorage.setItem('zen_mode_seen', 'true');
    if (zenModal) zenModal.classList.remove('active');
    togglePlay(true); // Start playing
}

// Visibility API for Interruption Handling (Calls/App Switch)
document.addEventListener('visibilitychange', () => {
    if (document.hidden && isPlaying) {
        console.log("App interrupted/backgrounded - Pausing for Zen");
        togglePlay(false); // Auto-pause
    }
});

function setupEventListeners() {
    playPauseBtn.addEventListener('click', () => {
        if (!isPlaying) {
            // Trying to play
            const triggered = initZenMode();
            if (!triggered) {
                togglePlay();
            }
        } else {
            // Trying to pause
            togglePlay();
        }
    });

    if (confirmZenBtn) confirmZenBtn.addEventListener('click', handleZenConfirm);
    if (skipZenBtn) skipZenBtn.addEventListener('click', handleZenSkip);
    if (zenModal) zenModal.addEventListener('click', (e) => { if (e.target === zenModal) handleZenSkip(); });

    resetBtn.addEventListener('click', () => { handleReset(); if (isPlaying) togglePlay(false); });
    clearAllBtn.addEventListener('click', () => { handleClearAll(); if (isPlaying) togglePlay(false); });
    prevBtn.addEventListener('click', () => switchMantra(-1));
    nextBtn.addEventListener('click', () => switchMantra(1));

    langSelect.addEventListener('change', (e) => {
        state.language = e.target.value;
        saveState();
        updateUI(true);
    });

    // Theme selector
    const themeSelect = document.getElementById('theme-select');
    if (themeSelect) {
        themeSelect.addEventListener('change', (e) => {
            state.theme = e.target.value;
            applyTheme(state.theme);
            saveState();
        });
    }

    // Handle session goal if element exists
    if (sessionGoalSelect) {
        sessionGoalSelect.addEventListener('change', (e) => {
            state.sessionGoal = e.target.value;
            saveState();
        });
    }

    const openSubs = document.getElementById('open-subs');
    const closeSubs = document.getElementById('close-subs');
    const subsModal = document.getElementById('subs-modal');
    if (openSubs) openSubs.addEventListener('click', () => subsModal.classList.add('active'));
    if (closeSubs) closeSubs.addEventListener('click', () => subsModal.classList.remove('active'));
    if (subsModal) subsModal.addEventListener('click', (e) => { if (e.target === subsModal) subsModal.classList.remove('active'); });

    // Payment modals
    const paymentModal = document.getElementById('payment-modal');
    const closePayment = document.getElementById('close-payment');
    const planBtns = document.querySelectorAll('.plan-btn');

    planBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (subsModal) subsModal.classList.remove('active');
            if (paymentModal) paymentModal.classList.add('active');
        });
    });

    if (closePayment) closePayment.addEventListener('click', () => paymentModal.classList.remove('active'));
    if (paymentModal) paymentModal.addEventListener('click', (e) => { if (e.target === paymentModal) paymentModal.classList.remove('active'); });

    // --- Hamburger Menu System ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const dropdownMenu = document.getElementById('dropdown-menu');

    if (hamburgerBtn && dropdownMenu) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburgerBtn.classList.toggle('active');
            dropdownMenu.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!hamburgerBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
                hamburgerBtn.classList.remove('active');
                dropdownMenu.classList.remove('active');
            }
        });
    }

    const menuAbout = document.getElementById('menu-about');
    const menuTheme = document.getElementById('menu-theme');
    const menuLanguage = document.getElementById('menu-language');
    const aboutModal = document.getElementById('about-modal');
    const themeModal = document.getElementById('theme-modal');
    const languageModal = document.getElementById('language-modal');
    const closeAbout = document.getElementById('close-about');

    function closeDropdown() {
        if (dropdownMenu) dropdownMenu.classList.remove('active');
        if (hamburgerBtn) hamburgerBtn.classList.remove('active');
    }

    if (menuAbout && aboutModal) {
        menuAbout.addEventListener('click', () => {
            aboutModal.classList.add('active');
            closeDropdown();
        });
    }

    if (menuTheme && themeModal) {
        menuTheme.addEventListener('click', () => {
            themeModal.classList.add('active');
            closeDropdown();
        });
    }

    if (menuLanguage && languageModal) {
        menuLanguage.addEventListener('click', () => {
            languageModal.classList.add('active');
            closeDropdown();
        });
    }

    const closeThemeModal = document.getElementById('close-theme-modal');
    const themeOptions = document.querySelectorAll('.theme-option');

    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.getAttribute('data-theme');
            state.theme = theme;
            applyTheme(theme);
            saveState();
            if (themeModal) themeModal.classList.remove('active');
        });
    });

    if (closeThemeModal && themeModal) {
        closeThemeModal.addEventListener('click', () => themeModal.classList.remove('active'));
        themeModal.addEventListener('click', (e) => {
            if (e.target === themeModal) themeModal.classList.remove('active');
        });
    }

    const closeLanguageModal = document.getElementById('close-language-modal');
    const languageOptions = document.querySelectorAll('.language-option');

    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            state.language = lang;
            saveState();
            updateUI(true);
            if (languageModal) languageModal.classList.remove('active');
        });
    });

    if (closeLanguageModal && languageModal) {
        closeLanguageModal.addEventListener('click', () => languageModal.classList.remove('active'));
        languageModal.addEventListener('click', (e) => {
            if (e.target === languageModal) languageModal.classList.remove('active');
        });
    }

    if (closeAbout && aboutModal) {
        closeAbout.addEventListener('click', () => aboutModal.classList.remove('active'));
        aboutModal.addEventListener('click', (e) => {
            if (e.target === aboutModal) aboutModal.classList.remove('active');
        });
    }

    // --- Mantra Selection Modal Logic ---
    const mantraModal = document.getElementById('mantra-modal');
    const openMantraBtn = document.getElementById('open-mantra-list');
    const closeMantraBtn = document.getElementById('close-mantra-list');
    const mantraListContainer = document.getElementById('mantra-list-container');

    function openMantraSelection() {
        if (!mantraListContainer) return;
        mantraListContainer.innerHTML = ''; // Clear existing

        mantras.forEach((m, index) => {
            const div = document.createElement('div');
            div.className = `mantra-option ${index === state.currentIndex ? 'selected' : ''}`;
            const title = m.label || m.en.split(' ').slice(0, 3).join(' ') + '...';

            div.innerHTML = `
                <div>
                    <div class="mantra-option-title">${title}</div>
                    <div class="mantra-option-hindi">${(m.hi || m.en).substring(0, 40)}...</div>
                </div>
                ${index === state.currentIndex ? '<span style="color:var(--accent-primary)">✓ Active</span>' : ''}
            `;

            div.addEventListener('click', () => {
                state.currentIndex = index;
                saveState();
                updateUI();
                if (isPlaying) togglePlay(false); // Stop if playing
                if (mantraModal) mantraModal.classList.remove('active');
            });

            mantraListContainer.appendChild(div);
        });

        if (mantraModal) mantraModal.classList.add('active');
    }

    if (openMantraBtn) openMantraBtn.addEventListener('click', openMantraSelection);
    if (closeMantraBtn) closeMantraBtn.addEventListener('click', () => mantraModal.classList.remove('active'));
    if (mantraModal) mantraModal.addEventListener('click', (e) => { if (e.target === mantraModal) mantraModal.classList.remove('active'); });


    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' || e.code === 'Enter') {
            e.preventDefault();
            handleIncrement();
        }
    });
}

// CSS injection for counting pulse
const cssStyle = document.createElement('style');
cssStyle.textContent = `
    @keyframes pulse-text {
        0% { transform: scale(1); }
        50% { transform: scale(1.15); color: #FF7722; filter: brightness(1.5); }
        100% { transform: scale(1); }
    }
    .pulse { animation: pulse-text 0.15s cubic-bezier(0.1, 0.9, 0.2, 1); }
`;
document.head.appendChild(cssStyle);

// Apply theme to body
function applyTheme(theme) {
    document.body.className = `theme-${theme}`;
    // Update active state in theme modal
    document.querySelectorAll('.theme-option').forEach(opt => {
        opt.classList.toggle('active', opt.getAttribute('data-theme') === theme);
    });
}

// Initialize the app
function init() {
    loadState();
    state.sessionRound = 0;
    initAudio();
    updateUI(true);
    setupEventListeners();
    checkDailyReset();
    progressRing.style.strokeDasharray = `${CIRCUMFERENCE} ${CIRCUMFERENCE}`;

    // Load voices eagerly for speech synthesis
    window.speechSynthesis.getVoices();

    // Ensure voices are loaded (some browsers need this)
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => {
            window.speechSynthesis.getVoices();
        };
    }
}

init();
