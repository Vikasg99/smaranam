// Smaranam Core Logic - Audio & Speech Edition

const mantras = [
    {
        hi: "ॐ नमः शिवाय",
        kn: "ಓಂ ನಮಃ ಶಿವಾಯ",
        or: "ଓଁ ନମଃ ଶିବାୟ",
        ta: "ஓம் நம சிவாய",
        ml: "ഓം നമ: ശിവായ",
        mr: "ॐ नमः शिवाय",
        te: "ಓಂ ನಮಃ ಶಿವಾಯ",
        en: "Om Namah Shivaya",
        keywords: ["namah shivay", "shiva", "shivaya", "un namah shivay"],
        speechText: "Ohm, Na-mah Shi-vaa-ya.",
        image: "images/shiva.svg",
        audio: "audio/om_namah_shivaya.mp3"
    },
    {
        hi: "ॐ नमो भगवते वासुदेवाय",
        kn: "ಓಂ ನಮೋ ಭಗವತೇ ವಾಸುದೇವಾಯ",
        or: "ଓଁ ନମୋ ଭଗବତେ ବାସୁଦେବାୟ",
        ta: "ஓம நமோ பகவதே வாசுதேவாய",
        ml: "ഓം നമോ ഭഗവതേ വാസുദേવાય",
        mr: "ॐ नमो भगवते वासुदेवाय",
        te: "ಓಂ ನಮೋ ಭಗವತೇ ವಾಸುದೇವಾಯ",
        en: "Om Namo Bhagavate Vasudevaya",
        keywords: ["vasudev", "namo bhagavate", "vasudevaya", "un namo"],
        speechText: "Ohm, Na-mo Bha-ga-va-tay, Vaa-su-day-vaaya.",
        image: "images/vishnu.jpg",
        audio: "audio/om_namo_bhagavate_vasudevaya.wav"
    },
    {
        hi: "ॐ गं गणपतये नमः",
        kn: "ಓಂ ಗಂ ಗಣಪತಯೇ ನಮಃ",
        or: "ଓଁ ଗଂ ಗಣପತୟେ ନମଃ",
        ta: "ஓம் கம் கணபதயே நம",
        ml: "ഓം ഗം ഗണപതയേ നമഃ",
        mr: "ॐ गं गणपतये ಮಃ",
        te: "ಓಂ ಗಂ ಗಣಪತಯೇ ನಮಃ",
        en: "Om Gam Ganapataye Namah",
        keywords: ["ganpataye", "ganpati", "ganesha", "ganapataye"],
        speechText: "Ohm, Gum, Guh-nuh-puh-tuh-yay, Nah-mah-hah.",
        image: "images/ganesha.svg",
        audio: "audio/ganesh_mantra.wav"
    },
    {
        hi: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे\nहरे राम हरे राम राम राम हरे हरे",
        kn: "ಹರೇ ಕೃಷ್ಣ ಹರೇ ಕೃಷ್ಣ ಕೃಷ್ಣ ಕೃಷ್ಣ ಹರೇ ಹರೇ\nಹರೇ ರಾಮ ಹರೇ ರಾಮ ರಾಮ ರಾಮ ಹರೇ ಹರೇ",
        or: "ହରେ କୃଷ୍ଣ ହରେ କୃଷ୍ଣ କୃଷ୍ଣ କୃଷ୍ଣ ହରେ ହରେ\nହରେ ରାମ ହରେ ରାମ ରାମ ରାମ ହରେ ହରେ",
        ta: "ஹரே கிருஷ்ண ஹரே கிருஷ்ண கிருஷ்ண கிருஷ்ண ஹரே ஹரே\nஹரே ராம ஹரே ராம ராம ராம ஹரே ஹரே",
        ml: "ഹരേ കൃഷ്ണ ഹരേ കൃഷ്ണ കൃഷ്ണ കൃഷ്ണ ഹരേ ഹരേ\nഹരേ രാമ ഹരേ രാമ രാമ രാമ ഹരേ ഹരേ",
        mr: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे\nहरे राम हरे राम राम राम हरे हरे",
        te: "ಹರೇ ಕೃಷ್ಣ ಹರೇ ಕೃಷ್ಣ ಕೃಷ್ಣ ಕೃಷ್ಣ ಹರೇ ಹರೇ\nಹರೇ ರಾಮ ಹರೇ ರಾಮ ರಾಮ ರಾಮ ಹರೇ ಹರೇ",
        en: "Hare Krishna Hare Krishna Krishna Krishna Hare Hare\nHare Rama Hare Rama Rama Rama Hare Hare",
        keywords: ["hare krishna", "krishna krishna", "rama rama", "hare hare"],
        speechText: "Haa-ray Krish-nah, Haa-ray Krish-nah, Krish-nah Krish-nah, Haa-ray Haa-ray. Haa-ray Raa-mah, Haa-ray Raa-mah, Raa-mah Raa-mah, Haa-ray Haa-ray.",
        image: "images/krishna.svg",
        audio: "audio/hare_krishna_mantra.wav"
    },
    {
        hi: "ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः",
        en: "Om Praam Preem Proum Sah Shanaishcharaya Namah",
        keywords: ["shani", "shanaishcharaya", "shany", "shani dev"],
        audio: "audio/shani_mantra.mp3",
        speechText: "Ohm, Praam Preem Proum Su-ha. Shu-na-ish-chu-raa-ya Na-mu-ha.",
        image: "images/shani.svg"
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
    isPremium: true, // App is now FREE
    hasAddedPaymentDetails: true, // Unlocked for everyone
    trialStartDate: Date.now(),
    installOrder: Math.floor(Math.random() * 200) + 400,
    freeMalaLimit: 999999, // Effectively unlimited
    lastUpdate: null,
    sessionGoal: '108', // Default 1 Mala
    sessionStartTime: null,
    voiceSettings: {
        voiceURI: 'default',
        rate: 0.8,
        pitch: 1.0,
        mode: 'native'
    }
};

// DOM Elements
const counterBtn = document.getElementById('orb-display');
const currentCountEl = document.getElementById('current-count');
const progressRing = document.getElementById('progress-ring');
const rippleContainer = document.getElementById('ripple-container');
const dailyTotalEl = document.getElementById('daily-total');
const lifetimeTotalEl = document.getElementById('lifetime-total');
const hindiMantraEl = document.getElementById('hindi-mantra');
const deityImageEl = document.getElementById('deity-image');
const mantraDisplay = document.getElementById('mantra-display');
const prevBtn = document.getElementById('prev-mantra');
const nextBtn = document.getElementById('next-mantra');
const resetBtn = document.getElementById('reset-btn');
const clearAllBtn = document.getElementById('clear-all-btn');
const langSelect = document.getElementById('lang-select');
const sessionGoalSelect = document.getElementById('session-goal');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const playStatus = document.getElementById('play-status');
const sessionTimeEl = document.getElementById('session-time');
const mantraListGrid = document.getElementById('mantra-list-container');
const openSettingsBtn = document.getElementById('open-settings');
const closeSettingsBtn = document.getElementById('close-voice-settings');
const saveSettingsBtn = document.getElementById('save-voice-settings');

// Labels
const lblToday = document.getElementById('lbl-today');
const lblLifetime = document.getElementById('lbl-lifetime');
const lblFocus = document.getElementById('lbl-session-time');
const lblChants = document.getElementById('lbl-chants'); // This might be null in generic stats bar
const malaCountEl = document.getElementById('mala-count'); // This might be null too

// Voice Settings Elements
const voiceSettingsModal = document.getElementById('voice-settings-modal');
const voiceSelect = document.getElementById('voice-select');
const voiceRate = document.getElementById('voice-rate');
const voicePitch = document.getElementById('voice-pitch');
const rateVal = document.getElementById('rate-val');
const pitchVal = document.getElementById('pitch-val');
const pronunciationMode = document.getElementById('pronunciation-mode');

// --- 🛠️ UTILITIES ---
function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
}

function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
}

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
let speechWatchdog = null;
let timerInterval = null;

const PLAY_ICON = `<path d="M8 5v14l11-7z"/>`;
const PAUSE_ICON = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;


function initAudio() {
    mantraAudio.addEventListener('ended', () => {
        if (isPlaying) {
            handleIncrement();
            // Reduced delay for smoother transitions
            if (isPlaying) nextChant();
        }
    });

    mantraAudio.addEventListener('error', (e) => {
        if (isPlaying) {
            console.warn("Audio error, falling back to speech");
            speakMantra();
        }
    });
}

function updateMantraList() {
    if (!mantraListGrid) return;

    mantraListGrid.innerHTML = '';
    mantras.forEach((m, index) => {
        const item = document.createElement('div');
        item.className = `mantra-selection-item ${state.currentIndex === index ? 'active' : ''}`;

        // Show icon/image if available
        const iconSrc = m.image || 'images/default_mantra.svg';

        item.innerHTML = `
            <div class="mantra-item-icon">
                <img src="${iconSrc}" alt="${m.en}" onerror="this.src='images/shiva.svg'; this.onerror=null;">
            </div>
            <div class="mantra-item-info">
                <div class="mantra-item-name">${m.label || m.en}</div>
                <div class="mantra-item-count">${m.hi.substring(0, 15)}...</div>
            </div>
        `;

        item.onclick = () => {
            state.currentIndex = index;
            saveState();
            updateUI();
            closeModal(document.getElementById('mantra-modal'));

            // Subtle feedback
            document.querySelector('.mantra-card')?.classList.add('pop-animation');
            setTimeout(() => document.querySelector('.mantra-card')?.classList.remove('pop-animation'), 600);
        };

        mantraListGrid.appendChild(item);
    });
}
function speakMantra() {
    if (!isPlaying) return;

    if (speechSynth.speaking) {
        speechSynth.cancel();
    }

    const currentMantra = mantras[state.currentIndex];

    // 🕉️ VOICE SETTINGS SELECTION 🕉️
    const voices = speechSynth.getVoices();
    let selectedVoice = null;

    // First, check if user has a manually selected voice
    if (state.voiceSettings && state.voiceSettings.voiceURI !== 'default') {
        selectedVoice = voices.find(v => v.voiceURI === state.voiceSettings.voiceURI);
    }

    // Fallback to automatic selection if no manual selection or voice not found
    if (!selectedVoice) {
        // --- 🇮🇳 Realistic Indian Voice Prioritization 🇮🇳 ---
        // Prioritize "Google" voices as they are high-quality Neural/HTS voices
        const highQualityVoices = voices.filter(v =>
            (v.name.includes('Google') || v.name.includes('Neural') || v.name.includes('Natural')) &&
            (v.lang.startsWith('hi') || v.lang.startsWith('mr') || v.lang.includes('-IN'))
        );

        if (highQualityVoices.length > 0) {
            // Prefer Hindi Google voice if possible for Devanagari
            selectedVoice = highQualityVoices.find(v => v.lang.startsWith('hi')) || highQualityVoices[0];
        }

        if (!selectedVoice) {
            const langMap = {
                'hi': ['hi-IN', 'hi'],
                'kn': ['kn-IN', 'kn'],
                'or': ['or-IN', 'or'],
                'ta': ['ta-IN', 'ta'],
                'ml': ['ml-IN', 'ml'],
                'mr': ['mr-IN', 'mr'],
                'te': ['te-IN', 'te'],
                'en': ['en-IN', 'en-US', 'en-GB', 'en']
            };
            const preferredLangs = langMap[state.language] || ['en-IN', 'en'];
            for (const langCode of preferredLangs) {
                selectedVoice = voices.find(v => v.lang.startsWith(langCode));
                if (selectedVoice) break;
            }
            if (!selectedVoice) selectedVoice = voices.find(v => v.lang.includes('-IN'));
            if (!selectedVoice && (state.language === 'hi' || state.language === 'mr')) {
                selectedVoice = voices.find(v => v.lang.includes('hi'));
            }
        }
    }

    // 🕉️ AUTHENTIC SCRIPT SELECTION 🕉️
    let textToSpeak;
    const voiceLang = selectedVoice ? selectedVoice.lang.toLowerCase() : '';

    // Check if the selected voice is actually a "real" Indian voice/neural voice
    const isAuthenticIndianVoice = voiceLang.startsWith('hi') || voiceLang.startsWith('mr') || voiceLang.includes('-in');

    // Priority: If authentic voice exists, ALWAYS prefer the native script unless strictly forced otherwise
    if (isAuthenticIndianVoice) {
        textToSpeak = currentMantra.hi || currentMantra.speechText;
    } else {
        textToSpeak = currentMantra.speechText || currentMantra.en;
    }

    speechUtterance = new SpeechSynthesisUtterance(textToSpeak);
    window.currentUtterance = speechUtterance;

    if (selectedVoice) {
        speechUtterance.voice = selectedVoice;
        console.log(`🕉️ Chanting: ${selectedVoice.name} speaking [${textToSpeak}]`);
    }

    // Apply User Parameters with Realistic Indian Calibration
    // Rate: 0.7-0.8 (Slower, weightier delivery)
    // Pitch: 0.85-0.95 (Slightly deeper, more resonant)
    speechUtterance.rate = state.voiceSettings?.rate || 0.8;
    speechUtterance.pitch = state.voiceSettings?.pitch || 0.9;
    speechUtterance.volume = 1.0;

    // Add natural pauses for breath and contemplation
    // This creates a more devotional, meditative rhythm

    // --- 🛡️ SPEECH WATCHDOG 🛡️ ---
    // Detect if engine hangs (common in Chrome/Android)
    if (speechWatchdog) clearTimeout(speechWatchdog);
    speechWatchdog = setTimeout(() => {
        if (isPlaying && speechSynth.speaking) {
            console.warn("Speech engine timed out, attempting recovery...");
            speechSynth.cancel();

            // Wait a moment and retry once or reset
            setTimeout(() => {
                if (isPlaying) {
                    resetSpeechSynthesis();
                    speakMantra();
                }
            }, 500);
        }
    }, 15000); // 15 second safety net for slower voices

    speechUtterance.onstart = () => {
        // Some browsers need a resume() call to actually start
        speechSynth.resume();
    };

    speechUtterance.onend = () => {
        if (speechWatchdog) clearTimeout(speechWatchdog);
        if (isPlaying) {
            handleIncrement();
            // Faster transition for speech too
            if (isPlaying) nextChant();
        }
    };

    speechUtterance.onerror = (e) => {
        if (speechWatchdog) clearTimeout(speechWatchdog);
        console.error("Speech error", e);
        if (e.error !== 'interrupted') {
            isPlaying = false;
            updatePlayUI();
        }
    };

    // Force a cancel and resume before speaking to clear internal state
    speechSynth.cancel();
    setTimeout(() => {
        speechSynth.resume();
        speechSynth.speak(speechUtterance);
        console.log("🕉️ Chanting active");
    }, 50);
}

// --- 💎 Chrome/Mobile TTS Stability Hack 💎 ---
// Periodically toggle pause/resume to prevent engine from "timing out" or going silent
setInterval(() => {
    if (isPlaying && window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
    }
}, 5000);

function resetSpeechSynthesis() {
    console.log("Resetting Speech Engine...");
    speechSynth.cancel();
    if (speechWatchdog) clearTimeout(speechWatchdog);
    // Force resume state
    speechSynth.resume();
}

/**
 * Unified logic to decide whether to play audio file or use speech synth
 */
function nextChant() {
    if (!isPlaying) return;

    const currentMantra = mantras[state.currentIndex];

    // Priority 1: High quality looping audio if available
    if (currentMantra.audio) {
        // Pre-stop speech for clarity
        if (speechSynth.speaking) speechSynth.cancel();

        // Fast switch for audio
        if (mantraAudio.src !== currentMantra.audio) {
            mantraAudio.src = currentMantra.audio;
            mantraAudio.load();
        }

        mantraAudio.play().catch(err => {
            console.warn("Audio file playback blocked or missing:", currentMantra.audio);
            speakMantra(); // Fallback to speech
        });
    } else {
        // Priority 2: Standard Speech Synthesis
        speakMantra();
    }
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

        nextChant();

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

// --- Security & Validation Helpers ---
const SECURE_KEY = 'smaranam_access_token';

// Simple obfuscation (Base64 + salt) - Not bank-grade but prevents simple edits
function setPremiumUser() {
    const token = btoa('PREMIUM_USER_' + Date.now() + '_' + Math.random().toString(36).substring(7));
    localStorage.setItem(SECURE_KEY, token);
    state.isPremium = true;
    state.hasAddedPaymentDetails = true;
}

function isPremiumUser() {
    const token = localStorage.getItem(SECURE_KEY);
    if (!token) return false;
    try {
        const decoded = atob(token);
        return decoded.startsWith('PREMIUM_USER_');
    } catch (e) { return false; }
}

function isValidUPI(upi) {
    // Regex: alphanumeric (min 3) @ bank (min 3)
    const upiRegex = /^[a-zA-Z0-9.\-_]{3,}@[a-zA-Z]{3,}$/;
    return upiRegex.test(upi);
}

function loadState() {
    const saved = localStorage.getItem('chant_gravity_state');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            state = { ...state, ...parsed };
            // Ensure nested voiceSettings are also merged if missing
            if (parsed.voiceSettings) {
                state.voiceSettings = { ...state.voiceSettings, ...parsed.voiceSettings };
            }
            // Override with secure check
            state.isPremium = isPremiumUser();
            if (state.isPremium) state.hasAddedPaymentDetails = true;

        } catch (e) {
            console.error("State load error", e);
        }
    }

    // Set defaults if new fields missing
    if (!state.sessionGoal) state.sessionGoal = '108';

    // Restore UI state
    if (sessionGoalSelect) sessionGoalSelect.value = state.sessionGoal;

    updateUI(true); // Update UI after loading state
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

    // --- ✨ REAL-TIME STATS UPDATES ✨ ---
    if (sessionTimeEl && state.sessionStartTime) {
        const diff = Math.floor((Date.now() - state.sessionStartTime) / 60000);
        sessionTimeEl.textContent = `${diff}m`;
    }
    // Update mantra text in selected language
    const mantraText = mantra[state.language] || mantra.hi || mantra.en;
    hindiMantraEl.textContent = mantraText;

    if (deityImageEl && mantra.image) {
        deityImageEl.src = mantra.image;
        deityImageEl.alt = mantra.label || mantra.en;
    }

    // Display current count within the Mala (1-108)
    // User requested "after 1 mala its not coming in 0" -> Meaning 108 should show as 0 (Completion)
    const currentMalaCount = state.sessionCount % MALA_SIZE; // 1->1, 108->0

    if (currentCountEl) animateValue(currentCountEl, currentMalaCount);
    if (dailyTotalEl) dailyTotalEl.textContent = state.dailyTotal;

    // Determine total Malas completed
    // sessionRound increments exactly when modulo == 0 in handleIncrement
    let totalMalas = state.sessionRound;

    if (malaCountEl) malaCountEl.textContent = `${totalMalas}`;
    if (lifetimeTotalEl) lifetimeTotalEl.textContent = state.lifetimeTotal;

    if (lblToday) lblToday.textContent = t.today;
    if (lblLifetime) lblLifetime.textContent = t.lifetime;
    if (lblFocus) lblFocus.textContent = state.language === 'en' ? 'Duration' : (state.language === 'hi' ? 'समय' : 'Duration'); // Simplified translate for Duration
    if (lblChants) lblChants.textContent = t.chats || "Chants";

    const progress = (state.sessionCount % MALA_SIZE) / MALA_SIZE;
    const offset = CIRCUMFERENCE - (progress * CIRCUMFERENCE);
    if (progressRing) progressRing.style.strokeDashoffset = offset;

    if (!silent) {
        mantraDisplay.style.animation = 'none';
        void mantraDisplay.offsetWidth;
        mantraDisplay.style.animation = 'slideUp 0.8s cubic-bezier(0.2, 1, 0.3, 1)';
    }

    if (langSelect) langSelect.value = state.language;
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
    checkSubscriptionStatus(); // Check limit after every count
}

function updateOfferUI() {
    // Feature disabled: App is free.
    // We let the hardcoded HTML banner stay as is.
    return;
}

function checkSubscriptionStatus() {
    // App is free. No restrictions.
    return;
}

function createMalaBlast() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => createRipple(), i * 100);
    }
}

function handleSessionReset() {
    if (confirm("Reset current session count?")) {
        state.sessionCount = 0;
        state.sessionStartTime = Date.now(); // Restart session timer if reset
        saveState();
        updateUI(true);
    }
}

function handleReset() {
    if (confirm(translations[state.language].resetConfirm)) {
        state.sessionCount = 0;
        state.sessionRound = 0;
        state.sessionStartTime = Date.now();
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

// Visibility API for Interruption Handling (Calls/App Switch) - Already defined above at line 240

function setupEventListeners() {
    if (counterBtn) {
        counterBtn.addEventListener('click', handleIncrement);
    }

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

    // New Mini Resets
    const resetDailyBtn = document.getElementById('reset-daily');
    const resetLifetimeBtn = document.getElementById('reset-lifetime');

    if (resetDailyBtn) resetDailyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm("Reset today's count to zero?")) {
            state.dailyTotal = 0;
            saveState();
            updateUI(true);
        }
    });

    if (resetLifetimeBtn) resetLifetimeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm("DANGER: Permanently reset LIFETIME count?")) {
            state.lifetimeTotal = 0;
            saveState();
            updateUI(true);
        }
    });

    const resetSessionBtn = document.getElementById('reset-session');
    if (resetSessionBtn) resetSessionBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        handleSessionReset();
    });

    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            state.language = e.target.value;
            saveState();
            updateUI(true);
        });
    }

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
    // detailed-selector to avoid selecting "Add Mantra" button which shares the class
    const planBtns = document.querySelectorAll('.plans-grid .plan-btn');

    planBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (subsModal) subsModal.classList.remove('active');
            if (paymentModal) paymentModal.classList.add('active');
        });
    });

    if (closePayment) closePayment.addEventListener('click', () => paymentModal.classList.remove('active'));
    if (paymentModal) paymentModal.addEventListener('click', (e) => { if (e.target === paymentModal) paymentModal.classList.remove('active'); });

    // Payment Form Logic
    const confirmPaymentBtn = document.getElementById('confirm-payment-btn');
    const userUpiInput = document.getElementById('user-upi-id');
    const userEmailInput = document.getElementById('user-email');
    const userBankInput = document.getElementById('user-bank-details'); // Placeholder if we add bank input

    if (confirmPaymentBtn) {
        confirmPaymentBtn.addEventListener('click', () => {
            const upiVal = userUpiInput ? userUpiInput.value.trim() : '';
            const emailVal = userEmailInput ? userEmailInput.value.trim() : '';

            // Optional: Send email if provided, otherwise just close
            const originalText = confirmPaymentBtn.textContent;
            confirmPaymentBtn.textContent = "Processing...";
            confirmPaymentBtn.style.opacity = "0.7";
            confirmPaymentBtn.disabled = true;

            setTimeout(() => {
                // --- SEND EMAIL NOTIFICATION (Optional) ---
                if (window.emailjs && (upiVal || emailVal)) {
                    const templateParams = {
                        user_upi: upiVal || "Anonymous",
                        user_email: emailVal || "Not Provided",
                        user_id: state.installOrder,
                        timestamp: new Date().toLocaleString()
                    };
                    emailjs.send('service_uyy2d8f', 'template_onuf8n7', templateParams)
                        .catch(err => console.log('Email logging failed (benign)', err));
                }

                // Restore Button
                confirmPaymentBtn.textContent = originalText;
                confirmPaymentBtn.style.opacity = "1";
                confirmPaymentBtn.disabled = false;

                // Close modals
                if (paymentModal) paymentModal.classList.remove('active');

                // Show success message
                alert(`Thank you for your support! 🙏\n\nYour contribution helps us maintain Smaranam and supports the Gowshala initiative.`);

            }, 1000);
        });
    }

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
    const menuShare = document.getElementById('menu-share');
    const aboutModal = document.getElementById('about-modal');
    const themeModal = document.getElementById('theme-modal');
    const languageModal = document.getElementById('language-modal');
    const closeAbout = document.getElementById('close-about-modal');

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

    if (closeAbout && aboutModal) {
        closeAbout.addEventListener('click', () => aboutModal.classList.remove('active'));
    }
    if (aboutModal) {
        aboutModal.addEventListener('click', (e) => {
            if (e.target === aboutModal) aboutModal.classList.remove('active');
        });
    }

    // New Premium Menu Item
    const menuPremium = document.getElementById('menu-premium');
    if (menuPremium && subsModal) {
        menuPremium.addEventListener('click', () => {
            subsModal.classList.add('active');
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

    if (menuShare) {
        menuShare.addEventListener('click', () => {
            handleShare();
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

    if (openMantraBtn) {
        openMantraBtn.addEventListener('click', () => {
            updateMantraList();
            mantraModal.classList.add('active');
        });
    }

    if (closeMantraBtn) {
        closeMantraBtn.addEventListener('click', () => {
            mantraModal.classList.remove('active');
        });
    }

    if (mantraModal) {
        mantraModal.addEventListener('click', (e) => {
            if (e.target === mantraModal) mantraModal.classList.remove('active');
        });
    }
    // --- 🌍 GLOBAL MODAL CONTROLS 🌍 ---
    // ESC Key to close any active modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal-overlay.active');
            if (activeModal) closeModal(activeModal);
        }
    });

    // Ensure all overlays close on background click (Standardization)
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' || e.code === 'Enter') {
            e.preventDefault();
            handleIncrement();
        }
    });

    if (openSettingsBtn) openSettingsBtn.addEventListener('click', () => {
        populateVoices();
        updateSettingsUI();
        voiceSettingsModal.classList.add('active');
    });

    if (closeSettingsBtn) closeSettingsBtn.addEventListener('click', () => {
        voiceSettingsModal.classList.remove('active');
    });

    if (voiceSettingsModal) voiceSettingsModal.addEventListener('click', (e) => {
        if (e.target === voiceSettingsModal) voiceSettingsModal.classList.remove('active');
    });

    if (voiceRate) voiceRate.addEventListener('input', (e) => rateVal.textContent = e.target.value);
    if (voicePitch) voicePitch.addEventListener('input', (e) => pitchVal.textContent = e.target.value);

    if (saveSettingsBtn) saveSettingsBtn.addEventListener('click', () => {
        state.voiceSettings = {
            voiceURI: voiceSelect.value,
            rate: parseFloat(voiceRate.value),
            pitch: parseFloat(voicePitch.value),
            mode: pronunciationMode.value
        };
        saveState();
        voiceSettingsModal.classList.remove('active');
        if (isPlaying) {
            speechSynth.cancel();
            speakMantra();
        }
    });
}


function populateVoices() {
    if (!voiceSelect) return;
    const voices = speechSynth.getVoices();
    const currentURI = state.voiceSettings?.voiceURI || 'default';

    voiceSelect.innerHTML = `<option value="default">System Default (Smart Match)</option>`;

    voices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.voiceURI;
        option.textContent = `${voice.name} (${voice.lang})`;
        if (voice.voiceURI === currentURI) option.selected = true;
        voiceSelect.appendChild(option);
    });
}

function updateSettingsUI() {
    if (!state.voiceSettings) return;
    voiceRate.value = state.voiceSettings.rate;
    voicePitch.value = state.voiceSettings.pitch;
    rateVal.textContent = state.voiceSettings.rate;
    pitchVal.textContent = state.voiceSettings.pitch;
    pronunciationMode.value = state.voiceSettings.mode || 'native';
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

// --- Initial Language Selection ---
function showInitialLanguageSelection() {
    const hasSelectedLanguage = localStorage.getItem('language_selected');
    const initialLangModal = document.getElementById('initial-language-modal');

    if (!hasSelectedLanguage && initialLangModal) {
        // Show the modal on first load
        initialLangModal.classList.add('active');

        // Set up event listeners for language selection
        const initialLangButtons = document.querySelectorAll('.initial-lang-btn');
        initialLangButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const selectedLang = btn.getAttribute('data-lang');
                state.language = selectedLang;
                localStorage.setItem('language_selected', 'true');
                saveState();
                updateUI(true);
                initialLangModal.classList.remove('active');
            });
        });
    }
}

// --- Voice Debugging Helper ---
function logAvailableVoices() {
    const voices = speechSynthesis.getVoices();
    console.log('=== Available Voices ===');
    console.log(`Total voices: ${voices.length}`);

    // Group by language
    const indianVoices = voices.filter(v => v.lang.includes('-IN') || v.lang.includes('hi') || v.lang.includes('ta') || v.lang.includes('te') || v.lang.includes('kn') || v.lang.includes('ml') || v.lang.includes('mr') || v.lang.includes('or'));

    if (indianVoices.length > 0) {
        console.log('\n🇮🇳 Indian Voices:');
        indianVoices.forEach(v => {
            console.log(`  - ${v.name} (${v.lang}) ${v.default ? '[DEFAULT]' : ''}`);
        });
    }

    console.log('\nAll voices:', voices.map(v => `${v.name} (${v.lang})`).join(', '));
    console.log('======================');
}

async function handleShare() {
    const shareData = {
        title: 'Smaranam | Meditative Chanting',
        text: 'Experience premium meditative chanting with Smaranam.',
        url: window.location.href
    };

    try {
        if (navigator.share) {
            await navigator.share(shareData);
        } else {
            await navigator.clipboard.writeText(window.location.href);
            alert('App link copied to clipboard! Share it with your friends.');
        }
    } catch (err) {
        if (err.name !== 'AbortError') {
            console.warn('Sharing failed:', err);
        }
    }
}

// Initialize the app
function init() {
    loadState();

    // Fix for stale session time on reload
    state.sessionStartTime = null;

    state.sessionRound = 0;
    initAudio();
    applyTheme(state.theme); // Apply saved theme
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

    // Silence voice logging in production
    // logAvailableVoices();

    // Show initial language selection if first time
    showInitialLanguageSelection();

    // Update offer text based on user install count
    updateOfferUI();
}

init();

// --- Custom Mantra Logic ---
const openAddMantra = document.getElementById('open-add-mantra');
const closeAddMantra = document.getElementById('close-add-mantra');
const addMantraModal = document.getElementById('add-mantra-modal');
const saveCustomMantraBtn = document.getElementById('save-custom-mantra');
const customMantraTitle = document.getElementById('custom-mantra-title');
const customMantraText = document.getElementById('custom-mantra-text');

if (openAddMantra) {
    openAddMantra.addEventListener('click', () => {
        // Close mantra list first
        const mantraModal = document.getElementById('mantra-modal');
        if (mantraModal) mantraModal.classList.remove('active');
        if (addMantraModal) addMantraModal.classList.add('active');
    });
}
if (closeAddMantra) closeAddMantra.addEventListener('click', () => addMantraModal.classList.remove('active'));
if (addMantraModal) addMantraModal.addEventListener('click', (e) => {
    if (e.target === addMantraModal) addMantraModal.classList.remove('active');
});

function loadCustomMantras() {
    const saved = localStorage.getItem('smaranam_custom_mantras');
    if (saved) {
        try {
            const custom = JSON.parse(saved);
            custom.forEach(m => {
                // Check if already exists to prevent dupes on re-run
                const exists = mantras.some(ex => ex.en === m.en);
                if (!exists) mantras.push(m);
            });
        } catch (e) {
            console.error("Error loading custom mantras", e);
        }
    }
}

if (saveCustomMantraBtn) {
    saveCustomMantraBtn.addEventListener('click', () => {
        const title = customMantraTitle.value.trim();
        const text = customMantraText.value.trim();

        if (!title || !text) {
            alert("Please enter both a Title and the Mantra text.");
            return;
        }

        const newMantra = {
            en: title,
            hi: text, // Using 'hi' slot for generic text display
            keywords: [title.toLowerCase()],
            speechText: text, // For TTS
            image: "images/om.png", // Default icon
            audio: null, // No audio file
            isCustom: true // Flag
        };

        // Add to global list
        mantras.push(newMantra);

        // Save to LocalStorage
        const saved = localStorage.getItem('smaranam_custom_mantras');
        let custom = saved ? JSON.parse(saved) : [];
        custom.push(newMantra);
        localStorage.setItem('smaranam_custom_mantras', JSON.stringify(custom));

        // Reset UI
        // customMantraTitle.value = ''; // Keep content for now or clear? Clear is better.
        customMantraTitle.value = '';
        customMantraText.value = '';
        if (addMantraModal) addMantraModal.classList.remove('active');

        // Select the new mantra
        state.currentIndex = mantras.length - 1;
        state.sessionCount = 0; // Reset session for new mantra
        saveState();
        updateUI(true); // Force UI update
        alert("Your personal mantra has been added!");
    });
}
// Load customs on startup
loadCustomMantras();

// --- QR Image Zoom Logic ---
function openQRZoom() {
    const modal = document.getElementById('qr-zoom-modal');
    if (modal) modal.classList.add('active');
}

function closeQRZoom() {
    const modal = document.getElementById('qr-zoom-modal');
    if (modal) modal.classList.remove('active');
}

// Prevent modal close when clicking on the zoomed image itself
// We wait for DOM to be safe, though script is at end of body
document.addEventListener('DOMContentLoaded', () => {
    const qrModalCard = document.querySelector('#qr-zoom-modal .subs-card');
    if (qrModalCard) {
        qrModalCard.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
});
