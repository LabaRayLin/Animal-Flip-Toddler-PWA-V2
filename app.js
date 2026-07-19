// 6 大主題與 72 種可愛動物定義
const THEMES_DATA = {
  forest: {
    title: '森林動物 🌲',
    coverIcon: '🌰', // 橡果
    colorClass: 'theme-bg-forest',
    boardClass: 'board-theme-forest',
    cardCoverClass: 'card-front-forest',
    textColor: '#1b5e20',
    particleType: 'leaf',
    animals: [
      { emoji: '🐻', name: '熊熊', color: 'purple', image: 'images/animals/bear.png' },
      { emoji: '🦊', name: '狐狸', color: 'orange', image: 'images/animals/fox.png' },
      { emoji: '🐿️', name: '松鼠', color: 'orange', image: 'images/animals/squirrel.png' },
      { emoji: '🐰', name: '兔子', color: 'pink', image: 'images/animals/rabbit.png' },
      { emoji: '🦌', name: '小鹿', color: 'yellow', image: 'images/animals/deer.png' },
      { emoji: '🦝', name: '浣熊', color: 'blue' },
      { emoji: '🦔', name: '刺蝟', color: 'orange' },
      { emoji: '🦉', name: '貓頭鷹', color: 'purple' },
      { emoji: '🐺', name: '野狼', color: 'blue' },
      { emoji: '🦫', name: '河狸', color: 'green' },
      { emoji: '🐗', name: '野豬', color: 'orange' },
      { emoji: '🦨', name: '臭鼬', color: 'purple' }
    ]
  },
  ocean: {
    title: '海洋世界 🌊',
    coverIcon: '🐚', // 貝殼
    colorClass: 'theme-bg-ocean',
    boardClass: 'board-theme-ocean',
    cardCoverClass: 'card-front-ocean',
    textColor: '#006064',
    particleType: 'bubble',
    animals: [
      { emoji: '🐬', name: '海豚', color: 'blue' },
      { emoji: '🐳', name: '鯨魚', color: 'blue' },
      { emoji: '🦈', name: '鯊魚', color: 'blue' },
      { emoji: '🐙', name: '章魚', color: 'pink' },
      { emoji: '🦑', name: '烏賊', color: 'pink' },
      { emoji: '🦀', name: '螃蟹', color: 'orange' },
      { emoji: '🦞', name: '龍蝦', color: 'orange' },
      { emoji: '🐢', name: '烏龜', color: 'green' },
      { emoji: '🐠', name: '熱帶魚', color: 'yellow' },
      { emoji: '🐡', name: '河豚', color: 'yellow' },
      { emoji: '🪼', name: '水母', color: 'purple' },
      { emoji: '🦭', name: '海豹', color: 'blue' }
    ]
  },
  farm: {
    title: '農場派對 🚜',
    coverIcon: '🚪', // 木門
    colorClass: 'theme-bg-farm',
    boardClass: 'board-theme-farm',
    cardCoverClass: 'card-front-farm',
    textColor: '#e65100',
    particleType: 'petal',
    animals: [
      { emoji: '🐮', name: '牛牛', color: 'blue' },
      { emoji: '🐷', name: '豬豬', color: 'pink' },
      { emoji: '🐑', name: '羊咩咩', color: 'pink' },
      { emoji: '🐴', name: '馬馬', color: 'orange' },
      { emoji: '🐔', name: '小雞', color: 'yellow' },
      { emoji: '🦆', name: '鴨鴨', color: 'yellow' },
      { emoji: '🪿', name: '鵝鵝', color: 'yellow' },
      { emoji: '🐐', name: '山羊', color: 'green' },
      { emoji: '🐶', name: '狗狗', color: 'orange' },
      { emoji: '🐱', name: '貓咪', color: 'blue' },
      { emoji: '🐰', name: '兔子', color: 'pink' },
      { emoji: '🫏', name: '驢子', color: 'purple' }
    ]
  },
  dinosaur: {
    title: '恐龍樂園 🦖',
    coverIcon: '🥚', // 恐龍蛋
    colorClass: 'theme-bg-dinosaur',
    boardClass: 'board-theme-dinosaur',
    cardCoverClass: 'card-front-dinosaur',
    textColor: '#b71c1c',
    particleType: 'star',
    animals: [
      { emoji: '🦖', name: '暴龍', color: 'green' },
      { emoji: '🦕', name: '雷龍', color: 'blue' },
      { emoji: '🦣', name: '猛獁象', color: 'purple' },
      { emoji: '🦤', name: '渡渡鳥', color: 'yellow' },
      { emoji: '🐊', name: '鱷魚', color: 'green' },
      { emoji: '🦎', name: '蜥蜴', color: 'orange' },
      { emoji: '🐢', name: '甲龍', color: 'green' },
      { emoji: '🐍', name: '蛇蛇', color: 'green' },
      { emoji: '🦂', name: '蠍子', color: 'orange' },
      { emoji: '🦅', name: '翼龍', color: 'blue' },
      { emoji: '🕷️', name: '蜘蛛', color: 'purple' },
      { emoji: '🦕', name: '腕龍', color: 'yellow' }
    ]
  },
  insect: {
    title: '昆蟲王國 🐞',
    coverIcon: '🍃', // 綠葉
    colorClass: 'theme-bg-insect',
    boardClass: 'board-theme-insect',
    cardCoverClass: 'card-front-insect',
    textColor: '#33691e',
    particleType: 'pollen',
    animals: [
      { emoji: '🐝', name: '蜜蜂', color: 'yellow' },
      { emoji: '🦋', name: '蝴蝶', color: 'pink' },
      { emoji: '🐞', name: '瓢蟲', color: 'pink' },
      { emoji: '🐜', name: '螞蟻', color: 'purple' },
      { emoji: '🦗', name: '蚱蜢', color: 'green' },
      { emoji: '🕷️', name: '蜘蛛', color: 'purple' },
      { emoji: '🐌', name: '蝸牛', color: 'purple' },
      { emoji: '🐛', name: '毛毛蟲', color: 'green' },
      { emoji: '🪲', name: '獨角仙', color: 'green' },
      { emoji: '🦗', name: '蟋蟀', color: 'orange' },
      { emoji: '🐸', name: '青蛙', color: 'green' },
      { emoji: '🦎', name: '守宮', color: 'yellow' }
    ]
  },
  polar: {
    title: '極地冰原 ❄️',
    coverIcon: '❄️', // 冰晶
    colorClass: 'theme-bg-polar',
    boardClass: 'board-theme-polar',
    cardCoverClass: 'card-front-polar',
    textColor: '#004d40',
    particleType: 'snow',
    animals: [
      { emoji: '🐧', name: '企鵝', color: 'blue' },
      { emoji: '🐻‍❄️', name: '北極熊', color: 'blue' },
      { emoji: '🦭', name: '海豹', color: 'blue' },
      { emoji: '🐋', name: '藍鯨', color: 'blue' },
      { emoji: '🦌', name: '馴鹿', color: 'orange' },
      { emoji: '🐺', name: '凍原狼', color: 'purple' },
      { emoji: '🦉', name: '雪鴞', color: 'purple' },
      { emoji: '🐰', name: '雪兔', color: 'pink' },
      { emoji: '🦊', name: '北極狐', color: 'orange' },
      { emoji: '🐟', name: '凍凍魚', color: 'blue' },
      { emoji: '🦀', name: '帝王蟹', color: 'orange' },
      { emoji: '🦭', name: '海象', color: 'purple' }
    ]
  }
};

// 額外的吉祥物定義
const MASCOTS = ['🐯', '🐼', '🦁', '🐨', '🦊', '🐰', '🐸', '🐵', '🐣', '🦄'];

// 遊戲狀態變數
let currentThemeKey = 'forest';
let boardState = [];
let flippedCount = 0;
let isCelebrating = false;
let soundEnabled = true;
let speechUnlocked = false; // 用於解鎖 iOS / iPadOS Safari 的語音

// Web Audio API 實體
let audioCtx = null;

// 初始化 Web Audio Context
function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// 在使用者點擊事件中解鎖 iOS 語音播放權限
function unlockSpeech() {
  if (speechUnlocked) return;
  try {
    if (window.speechSynthesis) {
      // 播放一個靜音的語音來解鎖
      const utterance = new SpeechSynthesisUtterance('');
      window.speechSynthesis.speak(utterance);
      speechUnlocked = true;
    }
  } catch (e) {
    console.warn("解鎖語音失敗:", e);
  }
}

// Fisher-Yates 洗牌演算法
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ===== Web Audio API 動物音效合成器 =====
function playAnimalSynthSound(emoji) {
  if (!soundEnabled) return;
  try {
    initAudio();
    const now = audioCtx.currentTime;

    // 1. 狗叫聲 (🐶): 兩聲急促的中頻汪汪聲
    if (emoji === '🐶') {
      const playBark = (timeOffset) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(450, now + timeOffset);
        osc.frequency.exponentialRampToValueAtTime(150, now + timeOffset + 0.08);

        gain.gain.setValueAtTime(0.3, now + timeOffset);
        gain.gain.exponentialRampToValueAtTime(0.01, now + timeOffset + 0.08);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + timeOffset);
        osc.stop(now + timeOffset + 0.09);
      };
      playBark(0);
      playBark(0.12);
    }
    // 2. 貓咪叫聲 (🐱): 頻率起伏的喵~ 聲 (me-ow)
    else if (emoji === '🐱') {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      
      // 模擬 me-ow 的音調變化：先升後降
      osc.frequency.setValueAtTime(550, now);
      osc.frequency.linearRampToValueAtTime(800, now + 0.12);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.35);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.25, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.4);
    }
    // 3. 小鳥/貓頭鷹/雪鴞叫聲 (🐦, 🦉, 🐣): 急促高頻啾啾聲
    else if (['🐦', '🦉', '🐣', '🦅', '🦤'].includes(emoji)) {
      const playChirp = (timeOffset) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1800, now + timeOffset);
        osc.frequency.exponentialRampToValueAtTime(2800, now + timeOffset + 0.05);

        gain.gain.setValueAtTime(0.2, now + timeOffset);
        gain.gain.exponentialRampToValueAtTime(0.01, now + timeOffset + 0.05);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + timeOffset);
        osc.stop(now + timeOffset + 0.06);
      };
      playChirp(0);
      playChirp(0.08);
      playChirp(0.16);
    }
    // 4. 青蛙叫聲 (🐸): 低頻粗糙的咕嚕 croak
    else if (emoji === '🐸') {
      const playCroak = (timeOffset) => {
        const osc = audioCtx.createOscillator();
        const modulator = audioCtx.createOscillator();
        const modGain = audioCtx.createGain();
        const gain = audioCtx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.value = 90;

        modulator.type = 'sine';
        modulator.frequency.value = 35; // 調變頻率

        modGain.gain.value = 50; // 調變深度
        
        gain.gain.setValueAtTime(0.3, now + timeOffset);
        gain.gain.exponentialRampToValueAtTime(0.01, now + timeOffset + 0.15);

        modulator.connect(modGain);
        modGain.connect(osc.frequency);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        modulator.start(now + timeOffset);
        osc.start(now + timeOffset);
        
        modulator.stop(now + timeOffset + 0.16);
        osc.stop(now + timeOffset + 0.16);
      };
      playCroak(0);
      playCroak(0.2);
    }
    // 5. 昆蟲嗡嗡聲 (🐝, 🐜, 🦗, 🐞): 快速震盪的高音 buzz
    else if (['🐝', '🐜', '🦗', '🐞', '🐌', '🐛', '🪲'].includes(emoji)) {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const lfo = audioCtx.createOscillator();
      const lfoGain = audioCtx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.value = 180;

      lfo.type = 'sine';
      lfo.frequency.value = 45; // 震幅調變，造成嗡嗡感
      
      lfoGain.gain.value = 0.5;

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      lfo.connect(lfoGain);
      lfoGain.connect(gain.gain); // 控制音量震盪

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      lfo.start(now);
      osc.start(now);
      lfo.stop(now + 0.32);
      osc.stop(now + 0.32);
    }
    // 6. 其他通用泡泡破裂聲 (啵啵聲)
    else {
      // 主泡泡音
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(900, now + 0.12);
      
      gainNode.gain.setValueAtTime(0.35, now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      osc.start(now);
      osc.stop(now + 0.13);
      
      // 高頻小水珠清脆音
      const dripOsc = audioCtx.createOscillator();
      const dripGain = audioCtx.createGain();
      
      dripOsc.type = 'sine';
      dripOsc.frequency.setValueAtTime(1400, now);
      dripOsc.frequency.exponentialRampToValueAtTime(700, now + 0.04);
      
      dripGain.gain.setValueAtTime(0.15, now);
      dripGain.gain.exponentialRampToValueAtTime(0.01, now + 0.04);
      
      dripOsc.connect(dripGain);
      dripGain.connect(audioCtx.destination);
      
      dripOsc.start(now);
      dripOsc.stop(now + 0.05);
    }
  } catch (e) {
    console.warn("音效播放失敗:", e);
  }
}

// 吉祥物點擊音效：小鳥啾啾聲
function playChirpSound() {
  if (!soundEnabled) return;
  try {
    initAudio();
    const now = audioCtx.currentTime;
    const notes = [900, 1100, 1300, 1600];
    notes.forEach((freq, i) => {
      const time = now + i * 0.035;
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, time);
      osc.frequency.exponentialRampToValueAtTime(freq + 350, time + 0.03);
      
      gainNode.gain.setValueAtTime(0.2, time);
      gainNode.gain.exponentialRampToValueAtTime(0.01, time + 0.03);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      osc.start(time);
      osc.stop(time + 0.04);
    });
  } catch (e) {
    console.warn(e);
  }
}

// 語音合成：朗讀動物名稱 (Mandarin Chinese)
function speakAnimalName(name) {
  if (!soundEnabled) return;
  try {
    if (window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(name);
      utterance.lang = 'zh-TW';
      utterance.rate = 0.88; // 稍慢的速度，讓 3 歲幼兒聽得清晰
      utterance.pitch = 1.35; // 提高音調，更像卡通、更活潑
      
      // 偵測是否為 iOS 或 iPadOS (包括 iPad 桌面版 UA 模擬)
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      
      // iOS / iPadOS Safari 頻繁調用 cancel() 會導致 SpeechSynthesis 語音引擎卡死發不出聲音，因此在 iOS 上跳過 cancel()
      if (!isIOS) {
        window.speechSynthesis.cancel();
      }
      
      window.speechSynthesis.speak(utterance);
    }
  } catch (e) {
    console.warn("語音朗讀失敗：", e);
  }
}

// 慶祝音效：合成歡樂鐵琴大調和弦音階 (C5 - E5 - G5 - C6 - E6 - G6 - C7)
function playCelebrationSound() {
  if (!soundEnabled) return;
  try {
    initAudio();
    const now = audioCtx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98, 2093.00];
    
    notes.forEach((freq, idx) => {
      const playTime = now + idx * 0.09;
      
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      osc.type = 'triangle'; // 三角波，聲音類似木琴/鐵琴
      osc.frequency.setValueAtTime(freq, playTime);
      
      gainNode.gain.setValueAtTime(0, playTime);
      gainNode.gain.linearRampToValueAtTime(0.3, playTime + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.001, playTime + 0.5);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      osc.start(playTime);
      osc.stop(playTime + 0.6);
    });
  } catch (e) {
    console.warn(e);
  }
}

// ===== 粒子生成引擎 =====
let particleTimer = null;
const PARTICLE_EMOJIS = {
  leaf: ['🍃', '🍂', '🍁', '🌱'],
  bubble: ['🫧', '💧', '✨'],
  petal: ['🌸', '🌼', '🌺', '🌹'],
  star: ['✨', '🌟', '💫', '☄️'],
  pollen: ['🟡', '✨', '🌸', '🌱'],
  snow: ['❄️', '☃️', '🤍']
};

function startParticles(type) {
  stopParticles();
  const container = document.getElementById('particleContainer');
  container.innerHTML = '';
  
  const emojis = PARTICLE_EMOJIS[type] || ['✨'];
  
  const spawn = () => {
    // 限制畫面上最大粒子數，避免裝置負擔過重
    if (container.children.length > 15) {
      container.children[0].remove();
    }
    
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    
    // 隨機橫向起點
    p.style.left = `${Math.random() * 100}vw`;
    
    // 隨機大小
    const scale = 0.5 + Math.random() * 0.7;
    p.style.fontSize = `${3 * scale}vh`;
    
    // 隨機動畫速度 (5s ~ 10s)
    const duration = 5 + Math.random() * 5;
    p.style.animationDuration = `${duration}s`;
    
    // 如果是海洋 bubble 粒子，使用向上漂浮的動畫
    if (type === 'bubble') {
      p.style.bottom = '-5vh';
      p.style.animationName = 'floatUpEffect';
    } else {
      p.style.top = '-5vh';
      p.style.animationName = 'fallEffect';
    }
    
    container.appendChild(p);
    
    // 動畫結束自動移除
    setTimeout(() => {
      p.remove();
    }, duration * 1000);
  };
  
  // 每一秒生成一個新粒子
  particleTimer = setInterval(spawn, 800);
  // 先立即生成幾個
  for (let i = 0; i < 5; i++) {
    spawn();
  }
}

function stopParticles() {
  if (particleTimer) {
    clearInterval(particleTimer);
    particleTimer = null;
  }
}

// ===== 遊戲初始化與切換主題 =====
function selectTheme(themeKey) {
  currentThemeKey = themeKey;
  const theme = THEMES_DATA[themeKey];
  if (!theme) return;
  
  // 1. 切換背景樣式
  const bgOverlay = document.getElementById('bgOverlay');
  bgOverlay.className = 'dynamic-background';
  bgOverlay.classList.add(theme.colorClass);
  
  // 2. 切換大氣粒子
  startParticles(theme.particleType);
  
  // 3. 設定遊戲標題與配色
  const themeTitle = document.getElementById('themeTitle');
  themeTitle.textContent = theme.title;
  themeTitle.style.color = theme.textColor;
  
  // 4. 切換螢幕顯示
  document.getElementById('selectionScreen').classList.add('hidden');
  document.getElementById('gameplayScreen').classList.remove('hidden');
  
  // 5. 初始化遊戲棋盤
  initGame();
}

function goBackToSelection() {
  stopParticles();
  
  // 回復預設背景
  const bgOverlay = document.getElementById('bgOverlay');
  bgOverlay.className = 'dynamic-background';
  
  // 切換螢幕
  document.getElementById('gameplayScreen').classList.add('hidden');
  document.getElementById('selectionScreen').classList.remove('hidden');
}

function initGame() {
  isCelebrating = false;
  flippedCount = 0;
  updateUIProgress();
  
  // 移除棋盤過關震動
  const boardEl = document.getElementById('animalBoard');
  boardEl.className = 'animal-board';
  
  const theme = THEMES_DATA[currentThemeKey];
  boardEl.classList.add(theme.boardClass);
  
  // 打亂卡片 (12 張)
  boardState = shuffle(theme.animals).map((animal, index) => ({
    ...animal,
    id: index,
    flipped: false
  }));
  
  // 渲染卡片
  renderBoard();
}

function renderBoard() {
  const boardEl = document.getElementById('animalBoard');
  boardEl.innerHTML = '';
  
  const theme = THEMES_DATA[currentThemeKey];
  
  boardState.forEach((animal) => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    
    const card = document.createElement('div');
    card.className = 'animal-card';
    card.dataset.id = animal.id;
    
    // 正面 (Unflipped - 橡果、貝殼、木門、恐龍蛋等) 與 背面 (Flipped - 動物)
    const front = document.createElement('div');
    front.className = `card-front ${theme.cardCoverClass}`;
    
    const coverSpan = document.createElement('span');
    coverSpan.className = 'card-front-icon';
    coverSpan.textContent = theme.coverIcon;
    front.appendChild(coverSpan);
    
    const back = document.createElement('div');
    back.className = `card-back ${animal.color}`;
    
    if (animal.image) {
      const img = document.createElement('img');
      img.className = 'animal-card-img';
      img.src = animal.image;
      img.alt = animal.name;
      back.appendChild(img);
    } else {
      const emojiSpan = document.createElement('span');
      emojiSpan.className = 'animal-emoji';
      emojiSpan.textContent = animal.emoji;
      back.appendChild(emojiSpan);
    }
    
    card.appendChild(front);
    card.appendChild(back);
    cell.appendChild(card);
    
    // 使用 click 觸發，確保 iOS / iPadOS 能正確識別為使用者點擊手勢以解鎖語音
    card.addEventListener('click', (e) => handleCardClick(e, animal.id));
    
    boardEl.appendChild(cell);
  });
}

// 處理卡片點擊
function handleCardClick(event, id) {
  event.preventDefault();
  
  if (isCelebrating) return;
  
  // 立即嘗試解鎖語音
  unlockSpeech();
  
  const cardData = boardState.find(c => c.id === id);
  if (!cardData || cardData.flipped) return;
  
  // 設定狀態為已翻開
  cardData.flipped = true;
  flippedCount++;
  
  // 卡片 DOM 翻轉
  const cardEl = document.querySelector(`.animal-card[data-id="${id}"]`);
  if (cardEl) {
    cardEl.classList.add('flipped');
  }
  
  // 音效合成 & 中文朗讀
  playAnimalSynthSound(cardData.emoji);
  speakAnimalName(cardData.name);
  
  // 更新進度
  updateUIProgress();
  
  // 檢查是否全數翻開
  if (flippedCount === boardState.length) {
    triggerCelebration();
  }
}

// 更新進度條與星星計數
function updateUIProgress() {
  const percent = (flippedCount / 12) * 100;
  document.getElementById('progressBar').style.width = `${percent}%`;
  document.getElementById('flipCount').textContent = flippedCount;
}

// ===== 通關慶祝特效 =====
function triggerCelebration() {
  isCelebrating = true;
  
  // 1. 播放大調鐵琴音階
  playCelebrationSound();
  
  // 2. 啟動五彩碎紙 Confetti 噴發
  startConfetti();
  
  // 3. 啟動歡慶氣球升空
  startBalloons();
  
  // 4. 棋盤震動效果
  const boardEl = document.getElementById('animalBoard');
  boardEl.classList.add('celebrate-board');
  
  // 5. 5 秒後自動返回選單或重新開始 (讓幼兒能重複遊玩)
  setTimeout(() => {
    stopConfetti();
    // 這裡我們帶幼兒回到關卡選擇畫面，讓他們可以探索其他世界！
    goBackToSelection();
  }, 5000);
}

// ===== 五彩碎紙 Confetti 引擎 =====
const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
let animationFrameId = null;
let particles = [];
const confettiColors = ['#ff7043', '#ffca28', '#26a69a', '#29b6f6', '#ab47bc', '#ec407a', '#9ccc65', '#26c6da', '#ffeb3b'];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class ConfettiParticle {
  constructor(x, y, angle, spread) {
    this.x = x;
    this.y = y;
    
    const radAngle = (angle * Math.PI) / 180;
    const velocity = 12 + Math.random() * 12;
    const spreadRad = (spread * (Math.random() - 0.5) * Math.PI) / 180;
    
    this.vx = Math.cos(radAngle + spreadRad) * velocity;
    this.vy = Math.sin(radAngle + spreadRad) * velocity;
    
    this.color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    this.size = 8 + Math.random() * 10;
    this.rotation = Math.random() * 360;
    this.rotationSpeed = (Math.random() - 0.5) * 15;
    
    this.gravity = 0.25;
    this.friction = 0.96;
    this.opacity = 1.0;
  }
  
  update() {
    this.vx *= this.friction;
    this.vy *= this.friction;
    this.vy += this.gravity;
    
    this.x += this.vx;
    this.y += this.vy;
    this.rotation += this.rotationSpeed;
    
    if (this.y > canvas.height * 0.35) {
      this.opacity -= 0.012;
    }
  }
  
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.globalAlpha = Math.max(0, this.opacity);
    ctx.fillStyle = this.color;
    
    // 隨機畫正方形或圓形
    if (Math.random() > 0.5) {
      ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
    } else {
      ctx.beginPath();
      ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
      ctx.fill();
    }
    
    ctx.restore();
  }
}

function startConfetti() {
  particles = [];
  const spawnConfetti = () => {
    if (!isCelebrating) return;
    
    // 兩側角落向中心噴發
    for (let i = 0; i < 4; i++) {
      particles.push(new ConfettiParticle(0, canvas.height, -45, 25));
    }
    for (let i = 0; i < 4; i++) {
      particles.push(new ConfettiParticle(canvas.width, canvas.height, -135, 25));
    }
    
    setTimeout(spawnConfetti, 120);
  };
  
  spawnConfetti();
  animateConfetti();
}

function stopConfetti() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles = [];
}

function animateConfetti() {
  if (!isCelebrating && particles.length === 0) return;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles = particles.filter(p => p.opacity > 0 && p.y < canvas.height + 20 && p.x > -20 && p.x < canvas.width + 20);
  
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  
  animationFrameId = requestAnimationFrame(animateConfetti);
}

// ===== 飄起歡慶氣球裝飾 =====
const BALLOONS = ['🎈', '🎈', '🎉', '🌟', '🍭', '🧸', '🐣', '👑'];
function startBalloons() {
  const overlay = document.getElementById('celebrationOverlay');
  overlay.innerHTML = '';
  
  // 產生 15 個氣球
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      if (!isCelebrating) return;
      
      const balloon = document.createElement('div');
      balloon.className = 'floating-balloon';
      balloon.textContent = BALLOONS[Math.floor(Math.random() * BALLOONS.length)];
      
      // 隨機橫向起點與縮放大小
      balloon.style.left = `${10 + Math.random() * 80}vw`;
      const scale = 0.8 + Math.random() * 0.6;
      balloon.style.transform = `scale(${scale})`;
      
      // 飄升時間 3.5s ~ 5.5s
      const duration = 3.5 + Math.random() * 2;
      balloon.style.animationDuration = `${duration}s`;
      
      overlay.appendChild(balloon);
      
      // 結束自動移除
      setTimeout(() => {
        balloon.remove();
      }, duration * 1000);
      
    }, i * 180);
  }
}

// ===== 事件監聽器與設定 =====

// 關卡按鈕點擊綁定
document.querySelectorAll('.theme-card').forEach(card => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    const themeKey = card.dataset.theme;
    initAudio();
    unlockSpeech();
    playAnimalSynthSound('generic');
    selectTheme(themeKey);
    // 朗讀該主題名稱，讓幼兒有引導感
    const themeNames = {
      forest: '森林動物',
      ocean: '海洋世界',
      farm: '農場派對',
      dinosaur: '恐龍樂園',
      insect: '昆蟲王國',
      polar: '極地冰原'
    };
    speakAnimalName(themeNames[themeKey]);
  });
});

// 返回選單按鈕
document.getElementById('backBtn').addEventListener('click', (e) => {
  e.preventDefault();
  unlockSpeech();
  playAnimalSynthSound('generic');
  goBackToSelection();
});

// 重置棋盤按鈕
document.getElementById('resetBtn').addEventListener('click', (e) => {
  e.preventDefault();
  unlockSpeech();
  playAnimalSynthSound('generic');
  initGame();
});

// 聲音切換按鈕
const soundBtn = document.getElementById('soundBtn');
soundBtn.addEventListener('click', (e) => {
  e.preventDefault();
  soundEnabled = !soundEnabled;
  unlockSpeech();
  if (soundEnabled) {
    soundBtn.querySelector('.btn-icon').textContent = '🔊';
    soundBtn.querySelector('.btn-text').textContent = '有聲音';
    initAudio();
    speakAnimalName("有聲音");
  } else {
    soundBtn.querySelector('.btn-icon').textContent = '🔇';
    soundBtn.querySelector('.btn-text').textContent = '無聲音';
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }
});

// 吉祥物點擊彩蛋
const mascotIcon = document.getElementById('mascotIcon');
mascotIcon.addEventListener('click', (e) => {
  e.preventDefault();
  unlockSpeech();
  playChirpSound();
  
  // 晃動縮放
  mascotIcon.style.transform = 'scale(1.4) rotate(15deg)';
  setTimeout(() => {
    mascotIcon.style.transform = '';
  }, 200);
  
  // 隨機替換 Emoji 吉祥物
  const currentEmoji = mascotIcon.textContent;
  let nextEmoji = currentEmoji;
  while (nextEmoji === currentEmoji) {
    nextEmoji = MASCOTS[Math.floor(Math.random() * MASCOTS.length)];
  }
  mascotIcon.textContent = nextEmoji;
  
  const mascotNames = {
    '🐯': '老虎', '🐼': '貓熊', '🦁': '獅子', '🐨': '無尾熊', '🦊': '狐狸', 
    '🐰': '兔子', '🐸': '青蛙', '🐵': '猴子', '🐣': '小雞', '🦄': '獨角獸'
  };
  if (mascotNames[nextEmoji]) {
    speakAnimalName(mascotNames[nextEmoji]);
  }
});

// 阻止 iOS & iPad Safari 的手勢縮放/滑動等默認行為，讓觸控無比絲滑
document.addEventListener('gesturestart', (e) => e.preventDefault());
document.addEventListener('touchmove', (e) => {
  if (e.touches.length > 1) {
    e.preventDefault();
  }
}, { passive: false });

// 網頁加載完畢後註冊 Service Worker
window.addEventListener('DOMContentLoaded', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then((reg) => console.log('Service Worker 註冊成功，範圍：', reg.scope))
      .catch((err) => console.error('Service Worker 註冊失敗：', err));
  }
});
