/* ============================================================
   EDIT THESE VALUES BEFORE SENDING
   ============================================================ */
const birthYear = 2006;
const birthMonth = 9;
const birthDay = 21;

const vintageSpeakerAudioTrackUrl = ""; // e.g. "happy-birthday-instrumental.mp3"
const voiceNoteAudioUrl = ""; // e.g. "voice-note.mp3" (optional: place your voice recording here!)

const girlfriendPhotoUrls = [
  { url: "assets/images/mitthii/IMG-20260829-WA0001.webp", caption: "Mitthi 💕" },
  { url: "assets/images/mitthii/IMG-20260829-WA0003.webp", caption: "That precious smile ✨" },
  { url: "assets/images/mitthii/IMG-20260904-WA0000.webp", caption: "My favourite human 🥺" },
  { url: "assets/images/mitthii/IMG-20260904-WA0001.webp", caption: "Cutest ever 🌸" },
  { url: "assets/images/mitthii/IMG-20260916-WA0008.webp", caption: "Pure sunshine ☀️" },
  { url: "assets/images/mitthii/IMG-20260920-WA0000.webp", caption: "Tum aur tumhari hasi 🥰" },
  { url: "assets/images/mitthii/IMG-20260920-WA0002.webp", caption: "My safe space 🤍" },
  { url: "assets/images/mitthii/IMG-20260920-WA0003.webp", caption: "Always glowing ⭐" },
  { url: "assets/images/mitthii/IMG_20260822_211425676.webp", caption: "Sweetest moments 💖" },
  { url: "assets/images/mitthii/IMG_20260822_211447801.webp", caption: "Bachhuuu 🫶🏻" },
  { url: "assets/images/mitthii/Screenshot_20260918-022317.webp", caption: "Unfiltered cuteness 🌷" },
  { url: "assets/images/mitthii/Screenshot_20260918-022341.webp", caption: "My happy place 🌹" },
  { url: "assets/images/mitthii/Screenshot_20260919-204225.webp", caption: "Cutie pie 🎀" },
  { url: "assets/images/mitthii/Screenshot_20260919-204252.webp", caption: "Special moments ✨" },
  { url: "assets/images/mitthii/Screenshot_20260919-204315.webp", caption: "Adore you endlessly 💕" },
  { url: "assets/images/mitthii/Screenshot_20260919-231501.webp", caption: "Forever us 🤍" },
  { url: "assets/images/mitthii/Screenshot_20260919-235033.webp", caption: "Khubsoorat Mitthi 🌸" },
  { url: "assets/images/mitthii/Screenshot_20260919-235057.webp", caption: "Most special soul 💫" },
  { url: "assets/images/mitthii/Screenshot_20260919-235119.webp", caption: "Little bundle of joy 🥺" },
  { url: "assets/images/mitthii/Screenshot_20260920-001807.webp", caption: "My heart's smile 💖" },
  { url: "assets/images/mitthii/Screenshot_20260920-001854.webp", caption: "Pure happiness 🌷" },
  { url: "assets/images/mitthii/Snapchat-1336062239.webp", caption: "Precious memories 📸" },
  { url: "assets/images/mitthii/Snapchat-1533353950.webp", caption: "Tamatar 🍅💕" },
  { url: "assets/images/mitthii/Snapchat-1536617511.webp", caption: "Making days sweeter 🍯" },
  { url: "assets/images/mitthii/Snapchat-295471224.webp", caption: "Queen of my heart 👑" },
  { url: "assets/images/mitthii/Snapchat-661622006.webp", caption: "My favorite view 🌅" },
  { url: "assets/images/mitthii/Snapchat-754097370.webp", caption: "Cutest laughter 🥰" },
  { url: "assets/images/mitthii/Snapchat-966268683.webp", caption: "Always by your side 🤍" },
  { url: "assets/images/mitthii/WhatsApp_Image_2026-09-19_at_23.40.23.webp", caption: "Meri Mitthi ❤️" },
  { url: "assets/images/mitthii/WhatsApp_Image_2026-09-19_at_23.40.29.webp", caption: "Happy Birthday Love 🎂✨" }
];

const birthdayMessageText =
  "Happy Birthday Mitthi ♥️\n\n" +

  "Honestly, I'm really happy ki tum meri life mein ho. Tum sirf meri girlfriend nahi ho, tum meri best friend bhi ho, aur tumhare saath main bina soche kuch bhi share kar sakta hoon. ❤️\n\n" +

  "Tumhare saath baat karna, hasna, ek dusre ko irritate karna aur bas saath time spend karna mujhe bohot pasand hai. Pata nahi kaise, but tumhare saath normal moments bhi special lagte hain. 🫶🏻\n\n" +

  "Bas hamesha aise hi khush rehna, smile karte rehna aur jo tum chahti ho wo sab achieve karna. I hope tumhara ye birthday bohot special ho, aur hum saath mein aur bohot saari memories banayein. ❤️\n\n" +

  "Happy Birthday once again meri Mitthi. You mean a lot to me. ♥️\n\n" +

  "I love you. ❤️❤️";

const floatingElementReactionMessages = [
  "tum meri sabse pyaari Mitthi ho 🥺❤️",
  "you make my heart smile every single day 💕",
  "meri cute si girlfriend 🫶🏻✨",
  "your laugh is genuinely my favorite sound in the world 🥹",
  "so lucky to have you in my life, love 💖",
  "being around you is my absolute happiest place 🌸",
  "Abhishek loves you so much 🧸❤️",
  "hamesha aise hi muskurati rehna meri jaan 🥺✨",
  "you are my favorite notification and my favorite human 💌🥰",
  "har din tumhare saath thoda aur special lagta hai 💖"
];

/* ============================================================
   scene navigation
   ============================================================ */
function revealNextScene(sceneElementId) {
  document.querySelectorAll('.experienceScene').forEach(function (sceneElement) {
    sceneElement.classList.remove('isActive');
  });
  document.getElementById(sceneElementId).classList.add('isActive');
}

/* ============================================================
   utility: calculate current age from birth date
   ============================================================ */
function calculateCurrentAge(year, month, day) {
  const today = new Date();
  let age = today.getFullYear() - year;
  const hasHadBirthdayThisYear =
    (today.getMonth() + 1 > month) ||
    (today.getMonth() + 1 === month && today.getDate() >= day);
  if (!hasHadBirthdayThisYear) age--;
  return age;
}
const recipientCurrentAge = calculateCurrentAge(birthYear, birthMonth, birthDay);

/* ============================================================
   utility: calculate total days of happiness since birth
   ============================================================ */
function calculateDaysSinceBirth(year, month, day) {
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  const diffTime = Math.abs(today - birthDate);
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}
function updateDaysSinceBirthBadge() {
  const days = calculateDaysSinceBirth(birthYear, birthMonth, birthDay);
  const numEl = document.getElementById('daysCounterNumber');
  if (numEl) numEl.textContent = days.toLocaleString();
}
updateDaysSinceBirthBadge();

/* ============================================================
   utility: throttle
   ============================================================ */
function throttle(callback, delayMs) {
  let lastCallTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCallTime >= delayMs) {
      lastCallTime = now;
      callback.apply(this, args);
    }
  };
}

/* ============================================================
   SCENE 0: initial greeting ("Hii bachhhuuuu")
   ------------------------------------------------------------
   Greets her first when the page loads, then smoothly transitions
   to the password interface either when she clicks "Hii 💕",
   taps anywhere, or automatically after 3.2 seconds.
   ============================================================ */
let hasProceededFromGreeting = false;
let greetingAutoProceedTimeoutId = null;

function proceedToPasswordGate() {
  if (hasProceededFromGreeting) return;
  hasProceededFromGreeting = true;
  if (greetingAutoProceedTimeoutId) {
    clearTimeout(greetingAutoProceedTimeoutId);
    greetingAutoProceedTimeoutId = null;
  }
  if (window.confetti) {
    confetti({ particleCount: 35, spread: 55, origin: { y: 0.6 } });
  }
  revealNextScene('scenePasswordGate');
  setTimeout(function () {
    const input = document.getElementById('passwordInput');
    if (input) input.focus();
  }, 400);
}

greetingAutoProceedTimeoutId = setTimeout(function () {
  proceedToPasswordGate();
}, 3200);

/* ============================================================
   SCENE 1: password gate
   ------------------------------------------------------------
   Wrong guesses escalate the hint in three stages. Change
   correctPassword below to whatever you want the answer to be —
   comparison is case-insensitive so "tamatar", "Tamatar", or
   "TAMATAR" all work.
   ============================================================ */
const correctPassword = "tamatar";
const passwordHintStages = [
  "Hint: special nickname",
  "Hint: it starts with \u201cT\u201d",
  "Hint: Tama...."
];
let passwordWrongAttempts = 0;

const passwordInputEl = document.getElementById('passwordInput');
const passwordHintEl = document.getElementById('passwordHint');
const passwordFeedbackEl = document.getElementById('passwordFeedback');
const passwordCardEl = document.querySelector('#scenePasswordGate .paperCard');

function handlePasswordInputKeydown(keyEvent) {
  if (keyEvent.key === 'Enter') handlePasswordSubmit();
}

function handlePasswordSubmit() {
  const enteredValue = (passwordInputEl.value || '').trim().toLowerCase();
  const targetPassword = (correctPassword || '').trim().toLowerCase();

  if (enteredValue === targetPassword) {
    passwordFeedbackEl.textContent = '';
    passwordHintEl.textContent = '';
    revealPhotoStripsAndBeginScrolling();
    revealNextScene('sceneConsent');
    return;
  }

  passwordWrongAttempts++;

  if (passwordWrongAttempts === 1) {
    // 1st wrong attempt: no hint yet, just feedback
    passwordFeedbackEl.textContent = "It's not that hard, try again 🤔";
    passwordHintEl.textContent = '';
  } else if (passwordWrongAttempts === 2) {
    // 2nd wrong attempt: here is your hint
    passwordFeedbackEl.textContent = "Still wrong? Here is your hint: 😉";
    passwordHintEl.textContent = "Hint: special nickname";
  } else if (passwordWrongAttempts === 3) {
    // 3rd wrong attempt: starts with T
    passwordFeedbackEl.textContent = "Try again, you got this! 💕";
    passwordHintEl.textContent = "Hint: it starts with \u201cT\u201d";
  } else {
    // 4th+ wrong attempt: Tama...
    passwordFeedbackEl.textContent = "Almost there! 🍅";
    passwordHintEl.textContent = "Hint: Tama....";
  }

  passwordCardEl.classList.remove('isShaking');
  void passwordCardEl.offsetWidth; // force reflow so the shake can replay
  passwordCardEl.classList.add('isShaking');

  passwordInputEl.value = '';
  passwordInputEl.focus();
}

/* ============================================================
   side photo strips (Polaroids)
   ============================================================ */
function buildPlaceholderPhotoDataUri(colorHex, iconType) {
  const icons = {
    heart: "<path d='M50 78 C25 55 12 40 12 26 C12 14 22 6 34 6 C41 6 47 10 50 15 C53 10 59 6 66 6 C78 6 88 14 88 26 C88 40 75 55 50 78 Z' fill='#ffffff' opacity='0.75'/>",
    sparkle: "<path d='M50 10 Q50 50 10 50 Q50 50 50 90 Q50 50 90 50 Q50 50 50 10 Z' fill='#ffffff' opacity='0.75'/>",
    smile: "<circle cx='50' cy='50' r='32' fill='#ffffff' opacity='0.75'/><circle cx='38' cy='44' r='4' fill='" + colorHex + "'/><circle cx='62' cy='44' r='4' fill='" + colorHex + "'/><path d='M38 58 Q50 70 62 58' stroke='" + colorHex + "' stroke-width='3.5' stroke-linecap='round' fill='none'/>"
  };
  const iconMarkup = icons[iconType] || icons.heart;
  const svgMarkup =
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='100' height='100'>" +
    "<rect width='100' height='100' fill='" + colorHex + "'/>" +
    iconMarkup +
    "</svg>";
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svgMarkup);
}

const defaultPolaroidCaptions = [
  "Mitthi 💕", "Cute smile ✨", "My favourite human 💕", "Special memory 🌸",
  "With you 🥰", "Unforgettable 🫶🏻", "My love ❤️", "Pure happiness 🌷",
  "Cutest ever 🥺", "Special moments 💫", "Forever us 🤍", "My happiness 🌹"
];

function getPhotoItemsForTrack(side) {
  if (!girlfriendPhotoUrls.length) {
    const placeholderColors = [
      { color: '#E8A0A0', icon: 'heart', label: 'Mitthi 💕' },
      { color: '#A8C3A0', icon: 'sparkle', label: 'Cute ✨' },
      { color: '#F2CB6C', icon: 'smile', label: 'Smiles 😊' },
      { color: '#E76F51', icon: 'heart', label: 'My Love ❤️' },
      { color: '#C9A0E8', icon: 'sparkle', label: 'Special 🌸' },
      { color: '#A6CBEA', icon: 'smile', label: 'Happy 💖' }
    ];
    return placeholderColors.map(function (item) {
      return { url: buildPlaceholderPhotoDataUri(item.color, item.icon), label: item.label };
    });
  }

  let photos = girlfriendPhotoUrls;
  if (girlfriendPhotoUrls.length >= 12) {
    const midpoint = Math.ceil(girlfriendPhotoUrls.length / 2);
    photos = side === 'left'
      ? girlfriendPhotoUrls.slice(0, midpoint)
      : girlfriendPhotoUrls.slice(midpoint);
  }

  return photos.map(function (item, index) {
    if (typeof item === 'string') {
      return {
        url: item,
        label: defaultPolaroidCaptions[index % defaultPolaroidCaptions.length]
      };
    }
    return {
      url: item.url,
      label: item.caption || defaultPolaroidCaptions[index % defaultPolaroidCaptions.length]
    };
  });
}

function fillPhotoStripWithPlaceholders(trackElement, side) {
  const photoItemsToUse = getPhotoItemsForTrack(side);
  const doubledForSeamlessLoop = photoItemsToUse.concat(photoItemsToUse);
  trackElement.innerHTML = doubledForSeamlessLoop
    .map(function (item, index) {
      const tilt = index % 2 === 0 ? 'left' : 'right';
      const loadingAttr = index < 8 ? 'eager' : 'lazy';
      // Use lightweight 6KB WebP thumbnail for the strip for instant loading and 60fps scrolling
      const thumbUrl = item.url.replace('assets/images/mitthii/', 'assets/images/mitthii/thumbs/');
      const fullUrl = item.url;
      return (
        '<div class="polaroidCard" data-tilt="' + tilt + '" data-caption="' + item.label + '" data-full-url="' + fullUrl + '">' +
        '<div class="polaroidTape"></div>' +
        '<div class="polaroidPhotoWrap">' +
        '<img src="' + thumbUrl + '" alt="Mitthi" loading="' + loadingAttr + '" decoding="async">' +
        '</div>' +
        '<div class="polaroidChin">' + item.label + '</div>' +
        '</div>'
      );
    })
    .join('');
}
fillPhotoStripWithPlaceholders(document.getElementById('leftPhotoStripTrack'), 'left');
fillPhotoStripWithPlaceholders(document.getElementById('rightPhotoStripTrack'), 'right');


function initializePhotoStripZoomPreview() {
  const backdrop = document.createElement('div');
  backdrop.className = 'photoZoomBackdrop';
  backdrop.id = 'photoZoomBackdrop';
  document.body.appendChild(backdrop);

  const zoomPreview = document.createElement('div');
  zoomPreview.className = 'photoZoomPreview';
  zoomPreview.innerHTML =
    '<div class="polaroidZoomCloseBtn" id="polaroidZoomCloseBtn" aria-label="Close">✕</div>' +
    '<div class="polaroidZoomTape"></div>' +
    '<div class="polaroidZoomPhotoWrap">' +
    '<img class="polaroidZoomImg" src="" alt="Mitthi">' +
    '</div>' +
    '<div class="polaroidZoomChin" id="polaroidZoomChin">Mitthi 💖</div>' +
    '<span class="polaroidZoomCloseHint">tap anywhere to close 💕</span>';
  document.body.appendChild(zoomPreview);

  const zoomImg = zoomPreview.querySelector('.polaroidZoomImg');
  const zoomChin = zoomPreview.querySelector('#polaroidZoomChin');
  let activeSourceCard = null;
  let openedAtTimestamp = 0;
  let closeTimeout = null;

  function dismissPreview(event) {
    if (event) {
      if (typeof event.stopPropagation === 'function') event.stopPropagation();
    }
    // Prevent accidental closing within 120ms of opening tap
    if (Date.now() - openedAtTimestamp < 120) return;
    if (!zoomPreview.classList.contains('isVisible')) return;

    backdrop.classList.remove('isVisible');
    zoomPreview.classList.remove('isVisible');

    if (closeTimeout) clearTimeout(closeTimeout);
    closeTimeout = setTimeout(function () {
      // Resume scrolling tracks smoothly after modal finishes closing
      document.querySelectorAll('.photoStripTrack').forEach(function (track) {
        track.style.animationPlayState = 'running';
      });

      if (activeSourceCard) {
        activeSourceCard.classList.remove('isSelectedSourcePhoto');
        activeSourceCard = null;
      }
    }, 250);
  }

  // Dismiss on clicking backdrop
  backdrop.addEventListener('click', dismissPreview);

  // Dismiss on clicking the enlarged card itself (anywhere on photo, chin, or frame)
  zoomPreview.addEventListener('click', dismissPreview);

  // Dismiss on close button
  const closeBtn = zoomPreview.querySelector('#polaroidZoomCloseBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', dismissPreview);
  }

  // Dismiss on clicking the close hint prompt
  const closeHint = zoomPreview.querySelector('.polaroidZoomCloseHint');
  if (closeHint) {
    closeHint.addEventListener('click', dismissPreview);
  }

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') dismissPreview();
  });

  function openEnlargedCard(card) {
    const img = card.querySelector('img');
    if (!img) return;

    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }

    if (activeSourceCard) {
      activeSourceCard.classList.remove('isSelectedSourcePhoto');
    }
    activeSourceCard = card;
    card.classList.add('isSelectedSourcePhoto');

    // Pause scrolling on both tracks so the photo remains stable
    document.querySelectorAll('.photoStripTrack').forEach(function (track) {
      track.style.animationPlayState = 'paused';
    });

    // Load crisp full-resolution image directly with zero blurry phase
    const fullUrl = card.dataset.fullUrl || img.src;
    zoomImg.src = fullUrl;

    const caption = card.dataset.caption || 'Mitthi 💖';
    zoomChin.textContent = caption;

    openedAtTimestamp = Date.now();
    backdrop.classList.add('isVisible');
    zoomPreview.classList.add('isVisible');
  }

  document.querySelectorAll('.photoStripTrack').forEach(function (trackElement) {
    trackElement.addEventListener('click', function (clickEvent) {
      const clickedCard = clickEvent.target.closest('.polaroidCard');
      if (!clickedCard) return;
      clickEvent.stopPropagation();
      openEnlargedCard(clickedCard);
    });
  });

  // Touch pause support: touching any photo strip pauses scrolling so cards don't move under fingers
  ['leftPhotoStrip', 'rightPhotoStrip'].forEach(function (stripId) {
    const strip = document.getElementById(stripId);
    if (!strip) return;
    strip.addEventListener('touchstart', function () {
      const track = strip.querySelector('.photoStripTrack');
      if (track) track.style.animationPlayState = 'paused';
    }, { passive: true });

    strip.addEventListener('touchend', function () {
      setTimeout(function () {
        if (!zoomPreview.classList.contains('isVisible')) {
          const track = strip.querySelector('.photoStripTrack');
          if (track) track.style.animationPlayState = 'running';
        }
      }, 1200);
    }, { passive: true });
  });
}
initializePhotoStripZoomPreview();

const preloadedImageObjects = {};

function preloadAndDecodeAllPhotos() {
  girlfriendPhotoUrls.forEach(function (item) {
    if (!item || !item.url) return;
    const img = new Image();
    img.src = item.url;
    if (img.decode) {
      img.decode().then(function () {
        preloadedImageObjects[item.url] = img;
      }).catch(function () {
        preloadedImageObjects[item.url] = img;
      });
    } else {
      preloadedImageObjects[item.url] = img;
    }
  });
}

// Start preloading and decoding immediately on page load
preloadAndDecodeAllPhotos();

function revealPhotoStripsAndBeginScrolling() {
  preloadAndDecodeAllPhotos();
  const leftStrip = document.getElementById('leftPhotoStrip');
  const rightStrip = document.getElementById('rightPhotoStrip');
  leftStrip.classList.add('isRevealed');
  rightStrip.classList.add('isRevealed');
  setTimeout(function () {
    leftStrip.classList.add('isScrolling');
    rightStrip.classList.add('isScrolling');
  }, 700);
}

/* ============================================================
   SCENE 1: consent (yes / no with evading no-button)
   ============================================================ */
let noButtonClickCount = 0;
let noButtonIsEvading = false;
const noConsentButton = document.getElementById('noConsentButton');
const yesConsentButton = document.getElementById('yesConsentButton');
const consentButtonRow = document.querySelector('#sceneConsent .consentButtonRow');

function handleYesButtonClick() {
  if (window.confetti) confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
  revealNextScene('sceneStartDecoration');
}

function handleNoButtonClick() {
  if (noButtonIsEvading) return;
  noButtonClickCount++;
  const growthScale = Math.min(1 + noButtonClickCount * 0.28, 2.6);
  yesConsentButton.style.transform = 'scale(' + growthScale + ')';

  if (noButtonClickCount >= 3) {
    beginNoButtonEvasion();
  } else {
    relocateNoButtonRandomly(true); // small nearby hop, still easily clickable
  }
}

function switchNoButtonToFreePositioning() {
  if (noConsentButton.classList.contains('isRoaming')) return;
  const rowBounds = consentButtonRow.getBoundingClientRect();
  const buttonBounds = noConsentButton.getBoundingClientRect();
  noConsentButton.classList.add('isRoaming');
  noConsentButton.style.left = (buttonBounds.left - rowBounds.left) + 'px';
  noConsentButton.style.top = (buttonBounds.top - rowBounds.top) + 'px';
}

function relocateNoButtonRandomly(useSmallHop) {
  switchNoButtonToFreePositioning();
  const rowBounds = consentButtonRow.getBoundingClientRect();
  const buttonBounds = noConsentButton.getBoundingClientRect();
  const maxLeft = Math.max(0, rowBounds.width - buttonBounds.width);
  const maxTop = Math.max(0, rowBounds.height - buttonBounds.height);

  let nextLeft, nextTop;
  if (useSmallHop) {
    const currentLeft = parseFloat(noConsentButton.style.left) || 0;
    const currentTop = parseFloat(noConsentButton.style.top) || 0;
    nextLeft = Math.min(Math.max(currentLeft + (Math.random() * 140 - 70), 0), maxLeft);
    nextTop = Math.min(Math.max(currentTop + (Math.random() * 50 - 25), 0), maxTop);
  } else {
    nextLeft = Math.random() * maxLeft;
    nextTop = Math.random() * maxTop;
  }
  noConsentButton.style.left = nextLeft + 'px';
  noConsentButton.style.top = nextTop + 'px';
}

function beginNoButtonEvasion() {
  if (noButtonIsEvading) return;
  noButtonIsEvading = true;
  noConsentButton.classList.add('isEvadingFast');
  relocateNoButtonRandomly(false);
  noConsentButton.style.pointerEvents = 'none';
  noConsentButton.style.opacity = '0.85';

  document.addEventListener('mousemove', handleCursorMovementForEvasion);
}

const handleCursorMovementForEvasion = throttle(function (mouseEvent) {
  if (!noButtonIsEvading) return;
  const buttonBounds = noConsentButton.getBoundingClientRect();
  const buttonCenterX = buttonBounds.left + buttonBounds.width / 2;
  const buttonCenterY = buttonBounds.top + buttonBounds.height / 2;
  const distanceFromCursor = Math.hypot(mouseEvent.clientX - buttonCenterX, mouseEvent.clientY - buttonCenterY);
  if (distanceFromCursor < 90) relocateNoButtonRandomly(false);
}, 50);

/* ============================================================
   SCENE 2: start decoration
   ============================================================ */
function handleStartDecorationClick() {
  const startButton = document.getElementById('startDecorationButton');
  startButton.classList.add('isFadingOut');
  setTimeout(function () {
    revealNextScene('sceneRoomDecoration');
    beginRoomDecorationSequence();
  }, 500);
}

/* ============================================================
   SCENE 3: room decoration sequence
   ============================================================ */
function buildBuntingBanner() {
  const bannerText = 'HAPPY BIRTHDAY';
  const flagColors = ['#E76F51', '#A8C3A0', '#F2CB6C', '#E8A0A0', '#C9A0E8', '#A6CBEA'];
  const buntingContainer = document.createElement('div');
  buntingContainer.className = 'buntingBanner';

  const letters = bannerText.split('').filter(function (character) { return character !== ' '; });
  const totalLetters = letters.length;
  const curveDipAmount = 10; // px — subtle festive sag so flags don't collide with cards

  const stringSvg = document.createElement('div');
  stringSvg.style.position = 'absolute';
  stringSvg.style.top = '-10px';
  stringSvg.style.left = '-8px';
  stringSvg.style.right = '-8px';
  stringSvg.style.height = '24px';
  stringSvg.style.zIndex = '-1';
  stringSvg.style.pointerEvents = 'none';
  stringSvg.innerHTML =
    '<svg viewBox="0 0 100 24" preserveAspectRatio="none" style="width:100%; height:100%; display:block;">' +
    '<path d="M0 6 Q50 18 100 6" stroke="#2b2420" stroke-width="1.2" fill="none" stroke-linecap="round"/>' +
    '</svg>';
  buntingContainer.appendChild(stringSvg);

  let letterIndex = 0;
  bannerText.split('').forEach(function (character) {
    if (character === ' ') {
      const spacer = document.createElement('div');
      spacer.className = 'buntingSpacer';
      buntingContainer.appendChild(spacer);
      return;
    }
    const curveFraction = totalLetters > 1 ? letterIndex / (totalLetters - 1) : 0.5;
    const verticalOffset = curveDipAmount * Math.sin(Math.PI * curveFraction);

    const flagWrap = document.createElement('div');
    flagWrap.className = 'buntingFlagWrap';
    flagWrap.style.transform = 'translateY(' + verticalOffset.toFixed(1) + 'px)';

    const flag = document.createElement('div');
    flag.className = 'buntingFlag';
    flag.textContent = character;
    flag.style.background = flagColors[letterIndex % flagColors.length];
    flag.style.animationDelay = (letterIndex * 0.05) + 's, ' + (letterIndex * 0.12) + 's';

    flagWrap.appendChild(flag);
    buntingContainer.appendChild(flagWrap);
    letterIndex++;
  });
  return buntingContainer;
}

function computeQuadraticBezierPoint(startPoint, controlPoint, endPoint, t) {
  const oneMinusT = 1 - t;
  return {
    x: oneMinusT * oneMinusT * startPoint.x + 2 * oneMinusT * t * controlPoint.x + t * t * endPoint.x,
    y: oneMinusT * oneMinusT * startPoint.y + 2 * oneMinusT * t * controlPoint.y + t * t * endPoint.y
  };
}

function buildFairyLightsSvg() {
  const viewBoxWidth = 1000;
  const wireBaseY = 12;
  const wireDipAmount = 48;
  const swagSegmentCount = 6;
  const bulbsPerSegment = 4;
  const segmentWidth = viewBoxWidth / swagSegmentCount;

  const anchorPoints = [];
  for (let anchorIndex = 0; anchorIndex <= swagSegmentCount; anchorIndex++) {
    anchorPoints.push({ x: anchorIndex * segmentWidth, y: wireBaseY });
  }

  let wirePathData = 'M ' + anchorPoints[0].x + ' ' + anchorPoints[0].y;
  let bulbMarkup = '';
  let bulbIndex = 0;

  for (let segmentIndex = 0; segmentIndex < swagSegmentCount; segmentIndex++) {
    const segmentStart = anchorPoints[segmentIndex];
    const segmentEnd = anchorPoints[segmentIndex + 1];
    const segmentControlPoint = { x: (segmentStart.x + segmentEnd.x) / 2, y: wireBaseY + wireDipAmount };
    wirePathData += ' Q ' + segmentControlPoint.x + ' ' + segmentControlPoint.y + ', ' + segmentEnd.x + ' ' + segmentEnd.y;

    for (let bulbInSegment = 1; bulbInSegment <= bulbsPerSegment; bulbInSegment++) {
      const bulbFraction = bulbInSegment / (bulbsPerSegment + 1);
      const bulbPoint = computeQuadraticBezierPoint(segmentStart, segmentControlPoint, segmentEnd, bulbFraction);
      bulbMarkup +=
        '<circle class="fairyLightBulb" cx="' + bulbPoint.x + '" cy="' + bulbPoint.y + '" r="7" ' +
        'style="animation-delay:' + (bulbIndex * 0.14) + 's"></circle>';
      bulbIndex++;
    }
  }

  return (
    '<svg viewBox="0 0 ' + viewBoxWidth + ' 90" preserveAspectRatio="none" style="width:100%; height:80px; display:block;">' +
    '<path d="' + wirePathData + '" stroke="#2b2420" stroke-width="1" fill="none" stroke-linecap="round"/>' +
    bulbMarkup +
    '</svg>'
  );
}

function buildHangingLanternSvg(fillColor) {
  return `
    <svg viewBox="0 0 60 90" width="52">
      <line x1="30" y1="0" x2="30" y2="14" stroke="#7a6f5c" stroke-width="2"/>
      <ellipse cx="30" cy="45" rx="24" ry="30" fill="${fillColor}" stroke="#3A3226" stroke-width="1.5"/>
      <line x1="10" y1="30" x2="10" y2="60" stroke="#3A3226" stroke-width="1" opacity="0.35"/>
      <line x1="20" y1="18" x2="20" y2="72" stroke="#3A3226" stroke-width="1" opacity="0.35"/>
      <line x1="30" y1="15" x2="30" y2="75" stroke="#3A3226" stroke-width="1" opacity="0.35"/>
      <line x1="40" y1="18" x2="40" y2="72" stroke="#3A3226" stroke-width="1" opacity="0.35"/>
      <line x1="50" y1="30" x2="50" y2="60" stroke="#3A3226" stroke-width="1" opacity="0.35"/>
      <ellipse cx="30" cy="75" rx="6" ry="5" fill="#3A3226"/>
    </svg>
  `;
}

function buildRealisticBalloonSvg(bodyColorLight, bodyColorDark, gradientId) {
  return `
    <svg viewBox="0 0 100 300" style="width:100%; height:auto; display:block;">
      <defs>
        <radialGradient id="${gradientId}" cx="35%" cy="28%" r="75%">
          <stop offset="0%" stop-color="${bodyColorLight}" />
          <stop offset="100%" stop-color="${bodyColorDark}" />
        </radialGradient>
      </defs>
      <!-- balloon body -->
      <path d="M50 4 C22 4 2 32 2 62 C2 92 24 116 46 132 L50 145 L54 132 C76 116 98 92 98 62 C98 32 78 4 50 4 Z"
            fill="url(#${gradientId})" stroke="#3A3226" stroke-width="1.5"/>
      <!-- glossy highlight -->
      <ellipse cx="32" cy="32" rx="13" ry="19" fill="#ffffff" opacity="0.45" transform="rotate(-18 32 32)"/>
      <circle cx="28" cy="18" r="3.5" fill="#ffffff" opacity="0.75"/>
      <!-- subtle rim reflection -->
      <path d="M 78 68 C 78 92 65 115 54 128" stroke="#ffffff" stroke-width="2" opacity="0.22" fill="none" stroke-linecap="round"/>
      <!-- knot -->
      <path d="M46 143 L54 143 L50 155 Z" fill="${bodyColorDark}" stroke="#3A3226" stroke-width="1"/>
      <!-- curly ribbon string -->
      <path d="M50 155 Q36 186 52 216 T44 262 T50 296" stroke="#6b6252" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    </svg>
  `;
}

function buildHeartBalloonSvg(bodyColorLight, bodyColorDark, gradientId) {
  return `
    <svg viewBox="0 0 110 300" style="width:100%; height:auto; display:block;">
      <defs>
        <radialGradient id="${gradientId}" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stop-color="${bodyColorLight}" />
          <stop offset="100%" stop-color="${bodyColorDark}" />
        </radialGradient>
      </defs>
      <!-- heart body -->
      <path d="M 55 138
               C 50 134 10 104 3 66
               C -4 34 18 6 48 18
               C 52 19 55 24 55 24
               C 55 24 58 19 62 18
               C 92 6 114 34 107 66
               C 100 104 60 134 55 138 Z"
            fill="url(#${gradientId})" stroke="#3A3226" stroke-width="1.5"/>
      <!-- glossy highlights -->
      <ellipse cx="35" cy="38" rx="11" ry="17" fill="#ffffff" opacity="0.45" transform="rotate(-22 35 38)"/>
      <circle cx="30" cy="24" r="3.5" fill="#ffffff" opacity="0.75"/>
      <ellipse cx="78" cy="42" rx="6" ry="12" fill="#ffffff" opacity="0.2" transform="rotate(22 78 42)"/>
      <!-- knot -->
      <path d="M 51 137 L 59 137 L 55 147 Z" fill="${bodyColorDark}" stroke="#3A3226" stroke-width="1"/>
      <!-- curly ribbon string -->
      <path d="M 55 147 Q 40 182 58 214 T 48 258 T 54 296" stroke="#6b6252" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    </svg>
  `;
}

function buildAmbientBackgroundBokeh() {
  const container = document.createElement('div');
  container.className = 'ambientBokehLayer';

  const bokehOrbs = [
    { left: '12%', top: '22%', size: 90, color: '#FFE494', delay: '0s', duration: '9s', drift: '20px' },
    { left: '78%', top: '24%', size: 110, color: '#E8A0A0', delay: '1.2s', duration: '11s', drift: '-25px' },
    { left: '18%', top: '62%', size: 100, color: '#C9A0E8', delay: '2.5s', duration: '10s', drift: '18px' },
    { left: '74%', top: '58%', size: 95, color: '#F2CB6C', delay: '0.8s', duration: '8.5s', drift: '-18px' },
    { left: '48%', top: '16%', size: 85, color: '#FFE494', delay: '3s', duration: '12s', drift: '14px' }
  ];

  bokehOrbs.forEach(function (orb) {
    const el = document.createElement('div');
    el.className = 'ambientBokehOrb';
    el.style.left = orb.left;
    el.style.top = orb.top;
    el.style.width = orb.size + 'px';
    el.style.height = orb.size + 'px';
    el.style.background = orb.color;
    el.style.setProperty('--floatDuration', orb.duration);
    el.style.setProperty('--driftX', orb.drift);
    el.style.animationDelay = orb.delay;
    container.appendChild(el);
  });

  return container;
}

function playBalloonPopSound() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(360, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(45, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.35, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.09);
  } catch (err) { }
}

const availableBalloonPalettes = [
  ['#FF8CA3', '#E7526D'],
  ['#FFAEC0', '#E8A0A0'],
  ['#F7DA96', '#F2CB6C'],
  ['#F49080', '#E76F51'],
  ['#C0DAB8', '#A8C3A0'],
  ['#DABBEF', '#C9A0E8'],
  ['#A6D8F8', '#7AB8E8'],
  ['#FFB5A7', '#F07167']
];

let respawnBalloonCounter = 100;

function spawnBalloonPopShards(x, y, color) {
  const shardCount = 8;
  for (let i = 0; i < shardCount; i++) {
    const shard = document.createElement('div');
    shard.className = 'balloonPopShard';
    shard.style.left = x + 'px';
    shard.style.top = y + 'px';
    shard.style.backgroundColor = color || '#E7526D';

    const angle = (i / shardCount) * Math.PI * 2;
    const distance = 30 + Math.random() * 28;
    const flyX = Math.cos(angle) * distance;
    const flyY = Math.sin(angle) * distance;

    shard.style.setProperty('--flyX', flyX + 'px');
    shard.style.setProperty('--flyY', flyY + 'px');

    document.body.appendChild(shard);
    setTimeout(function () { shard.remove(); }, 500);
  }
}

function handleBalloonClick(balloonElement, clickEvent) {
  if (balloonElement.classList.contains('isPopping')) return;
  balloonElement.classList.add('isPopping');

  // 1. Play synthesized pop sound
  playBalloonPopSound();

  // 2. Confetti burst from balloon position
  const bounds = balloonElement.getBoundingClientRect();
  const balloonCenterX = bounds.left + bounds.width / 2;
  const balloonCenterY = bounds.top + bounds.height * 0.35;
  const originX = balloonCenterX / window.innerWidth;
  const originY = balloonCenterY / window.innerHeight;

  if (window.confetti) {
    confetti({
      particleCount: 30,
      spread: 70,
      startVelocity: 22,
      origin: { x: originX, y: originY }
    });
  }

  // 3. Colored pop shards burst
  spawnBalloonPopShards(balloonCenterX, balloonCenterY, balloonElement.dataset.mainColor || '#E76F51');

  // 4. Remove the popped balloon element after pop animation finishes
  setTimeout(function () {
    balloonElement.remove();
  }, 240);

  // 5. Respawn a new balloon anywhere else in the room!
  setTimeout(function () {
    respawnNewBalloon();
  }, 650);
}

function respawnNewBalloon() {
  const roomBackWall = document.getElementById('roomBackWall');
  if (!roomBackWall) return;

  const newBalloon = document.createElement('div');
  newBalloon.className = 'roomBalloon isRespawning';

  // Random side: left (4% to 20%) or right (4% to 20%)
  const isLeftSide = Math.random() > 0.5;
  const horizontalPercent = (4 + Math.random() * 16).toFixed(1) + '%';
  const topPercent = (15 + Math.random() * 52).toFixed(1) + '%';

  if (isLeftSide) {
    newBalloon.style.left = horizontalPercent;
    newBalloon.style.right = '';
  } else {
    newBalloon.style.right = horizontalPercent;
    newBalloon.style.left = '';
  }
  newBalloon.style.top = topPercent;

  // Random size
  const size = Math.floor(66 + Math.random() * 22);
  newBalloon.style.width = size + 'px';

  // Random type and palette
  const type = Math.random() > 0.45 ? 'heart' : 'round';
  const palette = availableBalloonPalettes[Math.floor(Math.random() * availableBalloonPalettes.length)];
  const [lightShade, darkShade] = palette;
  newBalloon.dataset.mainColor = darkShade;

  respawnBalloonCounter++;
  const gradId = 'respawnGrad_' + respawnBalloonCounter;

  newBalloon.innerHTML = type === 'heart'
    ? buildHeartBalloonSvg(lightShade, darkShade, gradId)
    : buildRealisticBalloonSvg(lightShade, darkShade, gradId);

  newBalloon.onclick = function (event) {
    handleBalloonClick(newBalloon, event);
  };

  roomBackWall.appendChild(newBalloon);
}

function buildHeartGarlandSvg() {
  const heartColors = ['#E8A0A0', '#F2CB6C', '#E76F51', '#A8C3A0', '#C9A0E8', '#E8A0A0', '#F2CB6C'];
  const totalHearts = 7;
  const width = 800;
  const height = 65;
  let heartsMarkup = '';

  for (let i = 0; i < totalHearts; i++) {
    const fraction = (i + 0.5) / totalHearts;
    const x = fraction * width;
    const y = 8 + 24 * Math.sin(Math.PI * fraction);
    const color = heartColors[i % heartColors.length];
    const delay = (i * 0.22).toFixed(2);

    heartsMarkup += `
      <g class="hangingHeartItem" style="transform-origin: ${x}px ${y}px; animation-delay: ${delay}s;">
        <line x1="${x}" y1="${y}" x2="${x}" y2="${y + 14}" stroke="#3A3226" stroke-width="1.2" stroke-linecap="round"/>
        <path d="M ${x} ${y + 19}
                 C ${x - 7} ${y + 12}, ${x - 12} ${y + 18}, ${x} ${y + 30}
                 C ${x + 12} ${y + 18}, ${x + 7} ${y + 12}, ${x} ${y + 19} Z"
              fill="${color}" stroke="#3A3226" stroke-width="1.2" stroke-linejoin="round"/>
      </g>
    `;
  }

  return `
    <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" style="width:100%; height:auto; display:block;">
      <path d="M 0 10 Q 400 38 800 10" stroke="#3A3226" stroke-width="1.2" stroke-dasharray="4,4" fill="none"/>
      ${heartsMarkup}
    </svg>
  `;
}

function buildStreamerSvg(color1, color2, gradId) {
  return `
    <svg viewBox="0 0 40 180" style="width:100%; height:auto; display:block;">
      <defs>
        <linearGradient id="${gradId}" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="${color1}"/>
          <stop offset="100%" stop-color="${color2}"/>
        </linearGradient>
      </defs>
      <path d="M20 0
               C 8 18, 8 32, 20 48
               C 32 64, 32 78, 20 94
               C 8 110, 8 124, 20 140
               C 32 156, 30 170, 24 180
               L 18 178
               C 24 168, 26 156, 15 140
               C 3 124, 3 110, 15 94
               C 27 78, 27 64, 15 48
               C 3 32, 3 18, 15 0 Z"
            fill="url(#${gradId})" stroke="#3A3226" stroke-width="1"/>
      <circle cx="20" cy="2" r="3" fill="#3A3226"/>
    </svg>
  `;
}

function buildWallSparkleSvg() {
  return `
    <svg viewBox="0 0 30 30" width="22" height="22">
      <path d="M 15 0 Q 15 15 0 15 Q 15 15 15 30 Q 15 15 30 15 Q 15 15 15 0 Z"
            fill="#F2CB6C" stroke="#3A3226" stroke-width="0.8"/>
    </svg>
  `;
}

function buildGiftStackSvg() {
  return `
    <svg viewBox="0 0 130 120" style="width:100%; height:auto; display:block;">
      <ellipse cx="65" cy="114" rx="46" ry="5" fill="#000" opacity="0.16"/>
      <rect x="20" y="58" width="90" height="52" rx="4" fill="#E8A0A0" stroke="#3A3226" stroke-width="1.6"/>
      <rect x="16" y="52" width="98" height="12" rx="3" fill="#F49080" stroke="#3A3226" stroke-width="1.6"/>
      <rect x="59" y="52" width="12" height="58" fill="#F2CB6C" stroke="#3A3226" stroke-width="1.2"/>
      <rect x="36" y="24" width="58" height="30" rx="3" fill="#A8C3A0" stroke="#3A3226" stroke-width="1.6"/>
      <rect x="33" y="19" width="64" height="9" rx="2" fill="#C0DAB8" stroke="#3A3226" stroke-width="1.6"/>
      <rect x="60" y="19" width="10" height="35" fill="#E76F51" stroke="#3A3226" stroke-width="1.2"/>
      <path d="M65 19 C 55 5, 42 10, 52 19 Z" fill="#E76F51" stroke="#3A3226" stroke-width="1.4"/>
      <path d="M65 19 C 75 5, 88 10, 78 19 Z" fill="#E76F51" stroke="#3A3226" stroke-width="1.4"/>
      <circle cx="65" cy="19" r="4" fill="#F2CB6C" stroke="#3A3226" stroke-width="1.2"/>
      <g transform="rotate(-12 86 52)">
        <polygon points="86,46 108,46 114,52 108,58 86,58" fill="#FFFDF8" stroke="#3A3226" stroke-width="1"/>
        <circle cx="90" cy="52" r="1.5" fill="#3A3226"/>
        <text x="94" y="55" font-family="'Caveat', cursive" font-size="8" font-weight="700" fill="#E64C65">Mitthi 💖</text>
      </g>
    </svg>
  `;
}

function handleGiftStackClick() {
  if (window.confetti) {
    confetti({
      particleCount: 28,
      spread: 50,
      startVelocity: 24,
      origin: { x: 0.88, y: 0.82 }
    });
  }
}

function beginRoomDecorationSequence() {
  document.getElementById('roomDecorationStatusCard').style.display = 'flex';
  const roomBackWall = document.getElementById('roomBackWall');

  // warm ambient background bokeh lighting
  roomBackWall.appendChild(buildAmbientBackgroundBokeh());

  const fairyLightsContainer = document.createElement('div');
  fairyLightsContainer.className = 'fairyLightsContainer';
  fairyLightsContainer.innerHTML = buildFairyLightsSvg();
  roomBackWall.appendChild(fairyLightsContainer);

  setTimeout(function () {
    roomBackWall.appendChild(buildBuntingBanner());
  }, 300);

  setTimeout(function () {
    const heartGarland = document.createElement('div');
    heartGarland.className = 'heartGarland';
    heartGarland.innerHTML = buildHeartGarlandSvg();
    roomBackWall.appendChild(heartGarland);
  }, 550);

  setTimeout(function () {
    const leftStreamer = document.createElement('div');
    leftStreamer.className = 'roomStreamer left';
    leftStreamer.innerHTML = buildStreamerSvg('#F2CB6C', '#E76F51', 'streamerGradLeft');
    roomBackWall.appendChild(leftStreamer);

    const rightStreamer = document.createElement('div');
    rightStreamer.className = 'roomStreamer right';
    rightStreamer.innerHTML = buildStreamerSvg('#A8C3A0', '#A6CBEA', 'streamerGradRight');
    roomBackWall.appendChild(rightStreamer);
  }, 750);

  const lanternColors = ['#E76F51', '#F2CB6C', '#A8C3A0', '#C9A0E8'];
  const lanternPositions = [
    { top: '18%', left: '8%' },
    { top: '14%', left: '28%' },
    { top: '16%', right: '26%' },
    { top: '20%', right: '8%' }
  ];
  lanternPositions.forEach(function (position, index) {
    setTimeout(function () {
      const lantern = document.createElement('div');
      lantern.className = 'hangingLantern';
      Object.assign(lantern.style, position);
      lantern.style.animationDelay = '0s, ' + (index * 0.3) + 's';
      lantern.innerHTML = buildHangingLanternSvg(lanternColors[index % lanternColors.length]);
      roomBackWall.appendChild(lantern);
    }, 900 + index * 200);
  });

  setTimeout(function () {
    const sparklePositions = [
      { top: '24%', left: '22%' },
      { top: '28%', right: '20%' },
      { top: '42%', left: '14%' },
      { top: '56%', right: '15%' },
      { top: '23%', left: '49%' },
      { top: '54%', left: '26%' }
    ];
    sparklePositions.forEach(function (pos, index) {
      const sparkle = document.createElement('div');
      sparkle.className = 'wallSparkle';
      Object.assign(sparkle.style, pos);
      sparkle.style.animationDelay = (index * 0.18) + 's, ' + (index * 0.35) + 's';
      sparkle.innerHTML = buildWallSparkleSvg();
      roomBackWall.appendChild(sparkle);
    });
  }, 1550);

  const balloonConfigs = [
    // Left cluster
    { type: 'heart', colors: ['#FF8CA3', '#E7526D'], pos: { top: '22%', left: '4%' }, width: 84, delay: 0 },
    { type: 'round', colors: ['#F7DA96', '#F2CB6C'], pos: { top: '34%', left: '13%' }, width: 80, delay: 0.18, hasPopPrompt: true },
    { type: 'heart', colors: ['#F49080', '#E76F51'], pos: { top: '15%', left: '16%' }, width: 88, delay: 0.35 },
    { type: 'round', colors: ['#C0DAB8', '#A8C3A0'], pos: { top: '48%', left: '5%' }, width: 72, delay: 0.52 },
    { type: 'round', colors: ['#DABBEF', '#C9A0E8'], pos: { top: '46%', left: '18%' }, width: 70, delay: 0.7 },
    { type: 'heart', colors: ['#FFAEC0', '#E8A0A0'], pos: { top: '64%', left: '11%' }, width: 78, delay: 0.88 },

    // Right cluster
    { type: 'heart', colors: ['#FFAEC0', '#E8A0A0'], pos: { top: '16%', right: '15%' }, width: 88, delay: 0.1 },
    { type: 'round', colors: ['#A6D8F8', '#7AB8E8'], pos: { top: '25%', right: '4%' }, width: 82, delay: 0.28 },
    { type: 'heart', colors: ['#FF8CA3', '#E7526D'], pos: { top: '36%', right: '13%' }, width: 78, delay: 0.45 },
    { type: 'round', colors: ['#F7DA96', '#F2CB6C'], pos: { top: '47%', right: '19%' }, width: 74, delay: 0.62 },
    { type: 'heart', colors: ['#DABBEF', '#C9A0E8'], pos: { top: '50%', right: '5%' }, width: 76, delay: 0.8 },
    { type: 'round', colors: ['#F49080', '#E76F51'], pos: { top: '65%', right: '12%' }, width: 72, delay: 0.95 }
  ];

  balloonConfigs.forEach(function (cfg, index) {
    setTimeout(function () {
      const balloon = document.createElement('div');
      balloon.className = 'roomBalloon';
      Object.assign(balloon.style, cfg.pos);
      balloon.style.width = cfg.width + 'px';
      balloon.style.animationDelay = (index * 0.1) + 's, ' + (cfg.delay * 1.5) + 's';
      const [lightShade, darkShade] = cfg.colors;
      balloon.dataset.mainColor = darkShade;
      const gradId = 'balloonGrad_' + index;
      balloon.innerHTML = cfg.type === 'heart'
        ? buildHeartBalloonSvg(lightShade, darkShade, gradId)
        : buildRealisticBalloonSvg(lightShade, darkShade, gradId);

      if (cfg.hasPopPrompt) {
        const popPrompt = document.createElement('span');
        popPrompt.className = 'balloonPopPrompt';
        popPrompt.textContent = 'pop me! 💕';
        balloon.appendChild(popPrompt);
      }

      balloon.onclick = function (event) { handleBalloonClick(balloon, event); };
      roomBackWall.appendChild(balloon);

      if (window.confetti && (index % 3 === 0)) {
        confetti({
          particleCount: 16,
          spread: 35,
          startVelocity: 18,
          origin: { x: cfg.pos.left ? 0.12 : 0.88, y: 0.35 }
        });
      }
    }, 1650 + index * 110);
  });

  const vintageSpeaker = document.createElement('div');
  vintageSpeaker.className = 'vintageSpeaker';
  vintageSpeaker.id = 'vintageSpeaker';
  vintageSpeaker.innerHTML = `
    <svg viewBox="0 0 170 130" style="width:100%; height:auto; display:block;">
      <defs>
        <radialGradient id="hornBrassGradient" cx="35%" cy="35%" r="75%">
          <stop offset="0%" stop-color="#F3D896"/>
          <stop offset="55%" stop-color="#C9974B"/>
          <stop offset="100%" stop-color="#8B6B2E"/>
        </radialGradient>
        <linearGradient id="woodBoxGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#6b4a34"/>
          <stop offset="100%" stop-color="#3a2418"/>
        </linearGradient>
        <radialGradient id="reproducerGradient" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stop-color="#e8e4dc"/>
          <stop offset="100%" stop-color="#8a8378"/>
        </radialGradient>
      </defs>

      <!-- fluted brass horn -->
      <path d="M78 55 C 60 20, 20 5, 5 30 C -5 45, 0 65, 15 75 C 30 85, 55 78, 78 55 Z"
            fill="url(#hornBrassGradient)" stroke="#5c451f" stroke-width="1.5"/>
      <g stroke="#8B6B2E" stroke-width="0.8" opacity="0.6">
        <line x1="78" y1="55" x2="5" y2="30"/>
        <line x1="78" y1="55" x2="0" y2="48"/>
        <line x1="78" y1="55" x2="4" y2="63"/>
        <line x1="78" y1="55" x2="16" y2="74"/>
        <line x1="78" y1="55" x2="35" y2="80"/>
        <line x1="78" y1="55" x2="55" y2="76"/>
      </g>

      <!-- curved brass elbow down to the reproducer -->
      <path d="M78 55 C 90 60, 97 68, 100 78" fill="none" stroke="#C9974B" stroke-width="6" stroke-linecap="round"/>
      <path d="M78 55 C 90 60, 97 68, 100 78" fill="none" stroke="#8B6B2E" stroke-width="1.2"/>
      <circle cx="100" cy="79" r="6.5" fill="url(#reproducerGradient)" stroke="#5c554a" stroke-width="1"/>

      <!-- wooden box base -->
      <rect x="95" y="90" width="66" height="34" rx="3" fill="url(#woodBoxGradient)" stroke="#2b1c12" stroke-width="1.2"/>
      <rect x="95" y="90" width="66" height="7" rx="2" fill="#7a5940"/>

      <!-- turntable + record -->
      <g class="recordDisc">
        <circle cx="128" cy="93" r="25" fill="#17130f" stroke="#2b2420" stroke-width="1"/>
        <circle cx="128" cy="93" r="19" fill="none" stroke="#3a332c" stroke-width="0.6"/>
        <circle cx="128" cy="93" r="13" fill="none" stroke="#3a332c" stroke-width="0.6"/>
        <circle cx="128" cy="93" r="7" fill="#7a2f3d" stroke="#5c2330" stroke-width="0.8"/>
        <circle cx="128" cy="93" r="1.4" fill="#C9974B"/>
      </g>

      <!-- hand crank -->
      <circle cx="152" cy="112" r="3" fill="#2b2420"/>
      <line x1="152" y1="112" x2="163" y2="120" stroke="#2b2420" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="163" cy="120" r="3.5" fill="#1c1712"/>

      <!-- base shadow -->
      <ellipse cx="128" cy="126" rx="42" ry="4" fill="#000" opacity="0.15"/>
    </svg>
    <button class="speakerPlayPauseButton" id="speakerPlayPauseButton" onclick="toggleVintageSpeakerPlayback()">▶</button>
  `;
  setTimeout(function () { roomBackWall.appendChild(vintageSpeaker); }, 2400);

  setTimeout(function () {
    const giftStack = document.createElement('div');
    giftStack.className = 'roomGiftStack';
    giftStack.id = 'roomGiftStack';
    giftStack.title = 'Click to open love!';
    giftStack.onclick = handleGiftStackClick;
    giftStack.innerHTML = buildGiftStackSvg();
    roomBackWall.appendChild(giftStack);
  }, 2700);

  const totalSequenceDuration = 1650 + balloonConfigs.length * 110 + 1400;
  setTimeout(function () {
    transitionRoomStatusCardToCakeCard();
  }, totalSequenceDuration);
}

function transitionRoomStatusCardToCakeCard() {
  const statusCard = document.getElementById('roomDecorationStatusCard');
  const cakeCard = document.getElementById('birthdayCakeCard');
  statusCard.classList.add('isFadingOut');
  setUpBirthdayCake();

  // Dim the room for intimate candlelit atmosphere
  const roomDeco = document.getElementById('sceneRoomDecoration');
  if (roomDeco) roomDeco.classList.add('isLightsDimmed');

  setTimeout(function () {
    statusCard.style.display = 'none';
    cakeCard.classList.add('isVisible');
  }, 400);
}

let vintageSpeakerIsPlaying = false;
let speakerEmojiSpawnIntervalId = null;
const speakerFloatingEmojiOptions = ['🎵', '🎶', '💖', '💕', '💗', '✨', '🌹'];

function spawnSpeakerFloatingEmoji() {
  const vintageSpeaker = document.getElementById('vintageSpeaker');
  if (!vintageSpeaker) return;
  const speakerBounds = vintageSpeaker.getBoundingClientRect();

  const floatingEmoji = document.createElement('div');
  floatingEmoji.className = 'speakerFloatingEmoji';
  floatingEmoji.textContent =
    speakerFloatingEmojiOptions[Math.floor(Math.random() * speakerFloatingEmojiOptions.length)];
  floatingEmoji.style.left = (speakerBounds.left + speakerBounds.width * 0.28 + Math.random() * 20 - 10) + 'px';
  floatingEmoji.style.top = (speakerBounds.top + speakerBounds.height * 0.15) + 'px';
  floatingEmoji.style.setProperty('--driftX', (Math.random() * 30 - 15) + 'px');

  document.body.appendChild(floatingEmoji);
  setTimeout(function () { floatingEmoji.remove(); }, 2700);
}

function startSpeakerEmojiEmission() {
  if (speakerEmojiSpawnIntervalId) return;
  spawnSpeakerFloatingEmoji();
  speakerEmojiSpawnIntervalId = setInterval(spawnSpeakerFloatingEmoji, 650);
}

function stopSpeakerEmojiEmission() {
  clearInterval(speakerEmojiSpawnIntervalId);
  speakerEmojiSpawnIntervalId = null;
}

function toggleVintageSpeakerPlayback() {
  const vintageSpeaker = document.getElementById('vintageSpeaker');
  const playPauseButton = document.getElementById('speakerPlayPauseButton');
  const audioElement = document.getElementById('vintageSpeakerAudioElement');

  if (!vintageSpeakerAudioTrackUrl) {
    const nowPlaying = vintageSpeaker.classList.toggle('isPlaying');
    playPauseButton.textContent = nowPlaying ? '⏸' : '▶';
    if (nowPlaying) startSpeakerEmojiEmission(); else stopSpeakerEmojiEmission();
    return;
  }
  if (!audioElement.src) audioElement.src = vintageSpeakerAudioTrackUrl;
  vintageSpeakerIsPlaying = !vintageSpeakerIsPlaying;
  if (vintageSpeakerIsPlaying) {
    audioElement.play().catch(function () { });
    vintageSpeaker.classList.add('isPlaying');
    playPauseButton.textContent = '⏸';
    startSpeakerEmojiEmission();
  } else {
    audioElement.pause();
    vintageSpeaker.classList.remove('isPlaying');
    playPauseButton.textContent = '▶';
    stopSpeakerEmojiEmission();
  }
}

/* ============================================================
   SCENE 4: cake
   ============================================================ */
function buildPipedBorderDots(containerElement, dotCount) {
  for (let dotIndex = 0; dotIndex < dotCount; dotIndex++) {
    const dot = document.createElement('span');
    containerElement.appendChild(dot);
  }
}
function buildCakeDripShapes(containerElement, dripCount) {
  for (let dripIndex = 0; dripIndex < dripCount; dripIndex++) {
    const drip = document.createElement('span');
    containerElement.appendChild(drip);
  }
}

function setUpBirthdayCake() {
  buildPipedBorderDots(document.getElementById('topTierPipedBorder'), 8);
  buildPipedBorderDots(document.getElementById('bottomTierPipedBorder'), 11);
  buildCakeDripShapes(document.getElementById('bottomTierDrip'), 9);
}

function spawnCandleSmoke() {
  const candle = document.querySelector('.birthdayCandle');
  if (!candle) return;
  for (let i = 0; i < 4; i++) {
    setTimeout(function () {
      const wisp = document.createElement('div');
      wisp.className = 'candleSmokeWisp';
      wisp.style.setProperty('--driftX', ((Math.random() - 0.5) * 26) + 'px');
      candle.appendChild(wisp);
      setTimeout(function () { wisp.remove(); }, 1800);
    }, i * 180);
  }
}

/* ============================================================
   Birthday candle blow handler & interactive cake cut handlers
   ============================================================ */
let isCakeCutInProgress = false;

function handleCakeAssemblyClick(event) {
  const cakeAssembly = document.getElementById('cakeAssembly');
  if (!cakeAssembly) return;
  if (!cakeAssembly.classList.contains('isCandleBlownOut')) {
    handleBlowCandleClick();
  } else if (cakeAssembly.classList.contains('isReadyToCut') && !cakeAssembly.classList.contains('isCakeCut')) {
    handleCutCakeClick(event);
  }
}

function handleCakeSliceHover() {
  const cakeAssembly = document.getElementById('cakeAssembly');
  if (cakeAssembly && cakeAssembly.classList.contains('isReadyToCut') && !cakeAssembly.classList.contains('isCakeCut')) {
    handleCutCakeClick();
  }
}

function handleBlowCandleClick() {
  const cakeAssembly = document.getElementById('cakeAssembly');
  const blowButton = document.getElementById('blowCandleButton');
  if (!cakeAssembly || cakeAssembly.classList.contains('isCandleBlownOut')) return;

  // Restore ambient lighting for celebration
  const roomDeco = document.getElementById('sceneRoomDecoration');
  if (roomDeco) roomDeco.classList.remove('isLightsDimmed');

  // Fade out candle hint
  const micHint = document.getElementById('candleBlowMicHint');
  if (micHint) {
    micHint.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    micHint.style.opacity = '0';
    micHint.style.transform = 'scale(0.88)';
  }

  // 1. Blow the candle out first
  cakeAssembly.classList.add('isCandleBlownOut');
  if (blowButton) {
    blowButton.style.pointerEvents = 'none';
    blowButton.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    blowButton.style.opacity = '0';
    blowButton.style.transform = 'scale(0.88)';
    setTimeout(function () {
      blowButton.style.display = 'none';
    }, 420);
  }

  // 2. Rising smoke wisps from the extinguished candle
  spawnCandleSmoke();

  // 3. Confetti burst on wish made
  if (window.confetti) {
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.52 } });
    setTimeout(function () {
      if (window.confetti) {
        confetti({ particleCount: 50, spread: 65, origin: { y: 0.56 } });
      }
    }, 450);
  }

  // 4. After the candle is blown, present the cake cutting phase!
  setTimeout(function () {
    prepareCakeForCutting();
  }, 1100);
}

function prepareCakeForCutting() {
  const cakeAssembly = document.getElementById('cakeAssembly');
  if (!cakeAssembly) return;

  cakeAssembly.classList.add('isReadyToCut');

  // Smoothly morph card title to cake cut prompt
  const title = document.getElementById('birthdayCakeTitle');
  if (title) {
    title.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    title.style.opacity = '0';
    title.style.transform = 'scale(0.95)';
    setTimeout(function () {
      title.textContent = 'Cut the birthday cake! 🎂✨';
      title.style.opacity = '1';
      title.style.transform = 'scale(1)';
    }, 300);
  }

  // Update hint to guide her to hover or tap the slice
  const micHint = document.getElementById('candleBlowMicHint');
  if (micHint) {
    micHint.textContent = '✨ Hover or tap the slice to cut 🔪🍰';
    micHint.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    micHint.style.opacity = '1';
    micHint.style.transform = 'scale(1)';
  }

  // Reveal cut cake button for mobile / direct action
  const cutButton = document.getElementById('cutCakeButton');
  if (cutButton) {
    cutButton.style.display = 'inline-block';
    cutButton.style.opacity = '0';
    cutButton.style.transform = 'scale(0.88)';
    void cutButton.offsetWidth;
    cutButton.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    cutButton.style.opacity = '1';
    cutButton.style.transform = 'scale(1)';
  }
}

function handleCutCakeClick(event) {
  if (event && event.stopPropagation) event.stopPropagation();
  const cakeAssembly = document.getElementById('cakeAssembly');
  if (!cakeAssembly) return;
  if (!cakeAssembly.classList.contains('isReadyToCut') || cakeAssembly.classList.contains('isCakeCut') || isCakeCutInProgress) {
    return;
  }
  isCakeCutInProgress = true;

  // 1. Play swift, satisfying knife slice animation through the cut line
  const knifeGuide = document.getElementById('cakeKnifeGuide');
  if (knifeGuide) {
    knifeGuide.classList.add('isSlicing');
  }

  // 2. Slicing separates the slice piece and pops celebratory confetti
  setTimeout(function () {
    cakeAssembly.classList.add('isCakeCut');

    // Celebratory confetti on cake cut
    if (window.confetti) {
      confetti({
        particleCount: 85,
        spread: 75,
        origin: { y: 0.54 },
        colors: ['#ff758c', '#ff7eb3', '#ffcad4', '#ffd166', '#06d6a0', '#ffffff']
      });
      setTimeout(function () {
        if (window.confetti) {
          confetti({
            particleCount: 45,
            spread: 60,
            origin: { y: 0.58 }
          });
        }
      }, 300);
    }

    // Update title to joyful celebration
    const title = document.getElementById('birthdayCakeTitle');
    if (title) {
      title.textContent = 'Yay! First bite for Mitthi! 🍰💖';
    }

    const micHint = document.getElementById('candleBlowMicHint');
    if (micHint) {
      micHint.textContent = 'Happy Birthday my love! 💖✨';
    }

    const cutButton = document.getElementById('cutCakeButton');
    if (cutButton) {
      cutButton.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
      cutButton.style.opacity = '0';
      cutButton.style.transform = 'scale(0.88)';
      cutButton.style.pointerEvents = 'none';
    }

    // 3. Keep cut cake on screen for 3.6s so she can admire the slice, then transition to letter
    setTimeout(function () {
      transitionCakeCardToFinalMessage();
    }, 3600);
  }, 380);
}

function transitionCakeCardToFinalMessage() {
  const cakeCard = document.getElementById('birthdayCakeCard');
  const envelopeContainer = document.getElementById('vintageEnvelopeContainer');

  cakeCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  cakeCard.style.opacity = '0';
  cakeCard.style.transform = 'scale(0.92)';

  setTimeout(function () {
    cakeCard.classList.remove('isVisible');
    cakeCard.style.display = 'none';

    if (envelopeContainer) {
      envelopeContainer.style.display = 'block';
      // Force layout reflow so fade/scale transition triggers cleanly
      void envelopeContainer.offsetWidth;
      envelopeContainer.classList.add('isVisible');
    } else {
      const messageCard = document.getElementById('finalMessageCard');
      if (messageCard) {
        messageCard.style.display = '';
        messageCard.classList.add('isVisible');
        beginFinalMessageSequence();
      }
    }
  }, 500);
}

let isEnvelopeOpening = false;

function handleEnvelopeOpenClick() {
  if (isEnvelopeOpening) return;
  isEnvelopeOpening = true;

  const envelopeContainer = document.getElementById('vintageEnvelopeContainer');
  const messageCard = document.getElementById('finalMessageCard');
  if (!envelopeContainer) return;

  // 1. Confetti burst on opening the love letter envelope
  if (window.confetti) {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.5 }
    });
  }

  // 2. Open flap & slide peek paper up
  envelopeContainer.classList.add('isOpen');

  // 3. After flap and paper animate, smoothly depart envelope and transition into full love letter
  setTimeout(function () {
    envelopeContainer.classList.add('isDeparting');

    setTimeout(function () {
      envelopeContainer.classList.remove('isVisible');
      envelopeContainer.style.display = 'none';

      if (messageCard) {
        messageCard.style.display = '';
        messageCard.classList.add('isVisible');
        beginFinalMessageSequence();
      }
    }, 450);
  }, 850);
}

/* ============================================================
   SCENE 5: final message
   ============================================================ */
function typewriteBirthdayMessage(fullText, targetElement, onComplete) {
  targetElement.innerHTML = '';
  const cursorSpan = document.createElement('span');
  cursorSpan.className = 'typewriterCursor';
  let currentIndex = 0;

  function typeNextCharacter() {
    if (currentIndex < fullText.length) {
      targetElement.textContent = fullText.slice(0, currentIndex + 1);
      targetElement.appendChild(cursorSpan);
      currentIndex++;
      const randomDelay = 28 + Math.random() * 45;
      setTimeout(typeNextCharacter, randomDelay);
    } else {
      cursorSpan.remove();
      if (onComplete) onComplete();
    }
  }
  typeNextCharacter();
}

let distinctFloatingElementsTapped = 0;
const tappedFloatingElementIndexes = new Set();

function handleFloatingElementTap(tapEvent, elementIndex) {
  showFloatingElementReactionBubble(tapEvent);
  if (window.confetti) {
    confetti({
      particleCount: 22, spread: 45, startVelocity: 22,
      origin: { x: tapEvent.clientX / window.innerWidth, y: tapEvent.clientY / window.innerHeight }
    });
  }
  if (!tappedFloatingElementIndexes.has(elementIndex)) {
    tappedFloatingElementIndexes.add(elementIndex);
    distinctFloatingElementsTapped++;
    if (distinctFloatingElementsTapped === 3) {
      revealHiddenBonusSparkle();
    }
  }
}

function showFloatingElementReactionBubble(tapEvent) {
  const bubble = document.createElement('div');
  bubble.className = 'floatingElementReactionBubble';
  bubble.textContent = floatingElementReactionMessages[
    Math.floor(Math.random() * floatingElementReactionMessages.length)
  ];
  bubble.style.left = (tapEvent.clientX - 60) + 'px';
  bubble.style.top = (tapEvent.clientY - 50) + 'px';
  document.body.appendChild(bubble);
  setTimeout(function () { bubble.remove(); }, 2400);
}

function revealHiddenBonusSparkle() {
  const bonusSparkle = document.getElementById('hiddenBonusSparkle');
  if (bonusSparkle) bonusSparkle.classList.add('isRevealed');
}

function handleHiddenBonusSparkleTap(tapEvent) {
  if (window.confetti) {
    confetti({ particleCount: 140, spread: 120, origin: { y: 0.4 } });
  }
  const bubble = document.createElement('div');
  bubble.className = 'floatingElementReactionBubble';
  bubble.textContent = "you found the secret sparkle! I love you so much meri Mitthi 💖✨";
  bubble.style.left = (tapEvent.clientX - 80) + 'px';
  bubble.style.top = (tapEvent.clientY - 60) + 'px';
  document.body.appendChild(bubble);
  setTimeout(function () { bubble.remove(); }, 3000);
}

function seedFloatingDecorativeElements() {
  const finalMessageCard = document.getElementById('finalMessageCard');
  const decorativeEmojiList = ['💖', '💕', '🌸', '✨', '🌹', '💌', '🌷', '💗'];
  const positions = [
    { top: '-18px', left: '-16px' },
    { top: '-12px', right: '-18px' },
    { top: '22%', left: '-26px' },
    { top: '30%', right: '-24px' },
    { bottom: '-16px', left: '8%' },
    { bottom: '-14px', right: '10%' },
    { top: '55%', left: '-20px' },
    { top: '62%', right: '-18px' }
  ];
  positions.forEach(function (position, index) {
    const element = document.createElement('div');
    element.className = 'floatingDecorativeElement';
    element.textContent = decorativeEmojiList[index % decorativeEmojiList.length];
    Object.assign(element.style, position);
    element.style.animationDelay = (index * 0.35) + 's';
    element.onclick = function (tapEvent) { handleFloatingElementTap(tapEvent, index); };
    finalMessageCard.appendChild(element);
  });

  const bonusSparkle = document.createElement('div');
  bonusSparkle.className = 'hiddenBonusSparkle';
  bonusSparkle.id = 'hiddenBonusSparkle';
  bonusSparkle.textContent = '🎆';
  bonusSparkle.style.top = '50%';
  bonusSparkle.style.right = '-32px';
  bonusSparkle.onclick = handleHiddenBonusSparkleTap;
  finalMessageCard.appendChild(bonusSparkle);
}

/* ============================================================
   FEATURE: Interactive "Little Things I Love About You" Sticky Notes
   ============================================================ */
const stickyLoveReasons = [
  {
    bg: '#FFF3B0',
    border: '#F4D06F',
    rotation: '-2.5deg',
    text: "Tumhara wo bina soche khul ke muskurana, jo mera poora din instantly accha kar deta hai 🥺✨"
  },
  {
    bg: '#FFD6E0',
    border: '#FFAFCC',
    rotation: '2.8deg',
    text: "Din bhar tumhara mujhe achanak random snaps bhejna — chahe goofy ho ya cute, I love them the most 📸💕"
  },
  {
    bg: '#E2ECE9',
    border: '#B5D5C5',
    rotation: '-1.8deg',
    text: "Tumhara bina wajah mujhe irritate karna, aur fir cute sa face bana kar khud hi has padna 🥹🫶🏻"
  },
  {
    bg: '#E8DFF5',
    border: '#CFBAF0',
    rotation: '2.2deg',
    text: "You're my safest place... jahan main bina kisi filter ke apne dil ki har baat share kar sakta hoon ❤️"
  },
  {
    bg: '#FDE2E4',
    border: '#F9BEC7',
    rotation: '-3deg',
    text: "Jis pyaar se tum mujhe 'kuchhuu puchhuu' bolti ho aur bina jataye meri itni care karti ho 🌸"
  },
  {
    bg: '#FFE5D9',
    border: '#F7B267',
    rotation: '1.8deg',
    text: "Tum muje apne din ki har choti se choti baat batao tb v cute lagti ho 🥰✨"
  },
  {
    bg: '#FFF0F5',
    border: '#F8B4D9',
    rotation: '-1.2deg',
    text: "Bas yeh ki tum meri Mitthi ho... aur tumhare jaisi pyaari poori duniya mein koi aur nahi hai 💖"
  }
];

let currentStickyNoteIndex = 0;

function updateStickyNoteDisplay(animate) {
  const card = document.getElementById('stickyNoteCard');
  const countEl = document.getElementById('stickyNoteCount');
  const textEl = document.getElementById('stickyNoteText');
  if (!card || !countEl || !textEl) return;

  const reason = stickyLoveReasons[currentStickyNoteIndex];
  countEl.textContent = (currentStickyNoteIndex + 1) + ' / ' + stickyLoveReasons.length;
  textEl.textContent = reason.text;
  card.style.backgroundColor = reason.bg;
  card.style.borderColor = reason.border;
  card.style.setProperty('--noteTilt', reason.rotation);

  if (animate) {
    card.classList.remove('isFlippingNote');
    void card.offsetWidth; // force reflow
    card.classList.add('isFlippingNote');
  }
}

function flipToNextStickyNote() {
  currentStickyNoteIndex = (currentStickyNoteIndex + 1) % stickyLoveReasons.length;
  updateStickyNoteDisplay(true);
  if (window.confetti && currentStickyNoteIndex === 0) {
    confetti({ particleCount: 45, spread: 65, origin: { y: 0.7 } });
  }
}

function resetStickyNotesDeck() {
  currentStickyNoteIndex = 0;
  updateStickyNoteDisplay(false);
}

function beginFinalMessageSequence() {
  seedFloatingDecorativeElements();
  updateStickyNoteDisplay(false);
  const messageContainer = document.getElementById('birthdayMessageTextContainer');
  typewriteBirthdayMessage(birthdayMessageText, messageContainer, function () {
    document.getElementById('signatureLine').classList.add('isVisible');
    const stickySection = document.getElementById('stickyNotesSection');
    if (stickySection) stickySection.classList.add('isVisible');
    const scrapbookSection = document.getElementById('scrapbookSection');
    if (scrapbookSection) scrapbookSection.classList.add('isVisible');
    const cassettePlayer = document.getElementById('retroCassettePlayer');
    if (cassettePlayer) cassettePlayer.classList.add('isVisible');
    document.getElementById('replayExperienceButton').classList.add('isVisible');
  });
}

/* ============================================================
   Replay — lets her relive the candle-blow + confetti moment
   without refreshing the page. Resets the cake back to its
   unblown state and swaps the final message card back out.
   ============================================================ */
function handleReplayClick() {
  const messageCard = document.getElementById('finalMessageCard');
  const cakeCard = document.getElementById('birthdayCakeCard');
  const cakeAssembly = document.getElementById('cakeAssembly');
  const replayButton = document.getElementById('replayExperienceButton');

  // clear the previous round's decorative sparkles so beginFinalMessageSequence
  // doesn't stack a second set on top when she blows the candle again
  messageCard.querySelectorAll('.floatingDecorativeElement, #hiddenBonusSparkle').forEach(function (el) {
    el.remove();
  });
  tappedFloatingElementIndexes.clear();
  distinctFloatingElementsTapped = 0;

  const stickySection = document.getElementById('stickyNotesSection');
  if (stickySection) stickySection.classList.remove('isVisible');
  resetStickyNotesDeck();

  const scrapbookSection = document.getElementById('scrapbookSection');
  if (scrapbookSection) scrapbookSection.classList.remove('isVisible');

  const cassettePlayer = document.getElementById('retroCassettePlayer');
  if (cassettePlayer) {
    cassettePlayer.classList.remove('isVisible');
    const audioElement = document.getElementById('voiceNoteAudioElement');
    if (audioElement) audioElement.pause();
    cassettePlayer.classList.remove('isPlaying');
    voiceNoteIsPlaying = false;
    const playIcon = document.getElementById('cassettePlayIcon');
    const playText = document.getElementById('cassettePlayText');
    if (playIcon) playIcon.textContent = '▶';
    if (playText) playText.textContent = 'play this 💕';
  }

  replayButton.classList.remove('isVisible');
  messageCard.classList.remove('isVisible');
  document.getElementById('birthdayMessageTextContainer').innerHTML = '';
  document.getElementById('signatureLine').classList.remove('isVisible');

  const envelopeContainer = document.getElementById('vintageEnvelopeContainer');
  if (envelopeContainer) {
    envelopeContainer.classList.remove('isVisible', 'isOpen', 'isDeparting');
    envelopeContainer.style.display = 'none';
  }
  isEnvelopeOpening = false;

  const micHint = document.getElementById('candleBlowMicHint');
  if (micHint) {
    micHint.style.opacity = '';
    micHint.style.transform = '';
  }

  // Re-dim the room for cake re-appearance
  const roomDeco = document.getElementById('sceneRoomDecoration');
  if (roomDeco) roomDeco.classList.add('isLightsDimmed');

  isCakeCutInProgress = false;
  cakeAssembly.classList.remove('isCandleBlownOut', 'isReadyToCut', 'isCakeCut');
  const knifeGuide = document.getElementById('cakeKnifeGuide');
  if (knifeGuide) knifeGuide.classList.remove('isSlicing');
  const cakeTitle = document.getElementById('birthdayCakeTitle');
  if (cakeTitle) cakeTitle.textContent = 'Make a wish 🎂✨';
  if (micHint) {
    micHint.textContent = '✨ Make a wish & tap below 🎂💕';
  }
  const cutButton = document.getElementById('cutCakeButton');
  if (cutButton) {
    cutButton.style.display = 'none';
    cutButton.style.opacity = '';
    cutButton.style.transform = '';
    cutButton.style.pointerEvents = '';
  }

  const blowButton = document.getElementById('blowCandleButton');
  blowButton.style.display = '';
  blowButton.style.pointerEvents = '';
  blowButton.style.opacity = '';
  blowButton.style.transform = '';
  cakeCard.style.display = '';
  cakeCard.style.opacity = '';
  cakeCard.style.transform = '';
  cakeCard.classList.add('isVisible');
}

/* ============================================================
   Retro cassette tape voice note playback
   ============================================================ */
let voiceNoteIsPlaying = false;

function toggleVoiceNotePlayback() {
  const cassetteEl = document.getElementById('retroCassettePlayer');
  const playIcon = document.getElementById('cassettePlayIcon');
  const playText = document.getElementById('cassettePlayText');
  const audioElement = document.getElementById('voiceNoteAudioElement');
  const durationEl = document.getElementById('cassetteDuration');

  if (!voiceNoteAudioUrl) {
    const bubble = document.createElement('div');
    bubble.className = 'floatingElementReactionBubble';
    bubble.textContent = "Abhishek's voice note will play here once added! 🎙️💕";
    bubble.style.left = Math.max(16, (window.innerWidth / 2 - 160)) + 'px';
    bubble.style.top = Math.max(16, (window.innerHeight / 2 - 24)) + 'px';
    document.body.appendChild(bubble);
    setTimeout(function () { bubble.remove(); }, 2800);
    return;
  }

  if (!audioElement.src) {
    audioElement.src = voiceNoteAudioUrl;
    audioElement.ontimeupdate = function () {
      if (audioElement.duration && !isNaN(audioElement.duration)) {
        const curSec = Math.floor(audioElement.currentTime);
        const totSec = Math.floor(audioElement.duration);
        const curM = Math.floor(curSec / 60);
        const curS = curSec % 60;
        const totM = Math.floor(totSec / 60);
        const totS = totSec % 60;
        durationEl.textContent =
          curM + ':' + (curS < 10 ? '0' : '') + curS + ' / ' +
          totM + ':' + (totS < 10 ? '0' : '') + totS;
      }
    };
    audioElement.onended = function () {
      voiceNoteIsPlaying = false;
      cassetteEl.classList.remove('isPlaying');
      playIcon.textContent = '▶';
      playText.textContent = 'Listen again 💕';
    };
  }

  voiceNoteIsPlaying = !voiceNoteIsPlaying;
  if (voiceNoteIsPlaying) {
    audioElement.play().catch(function () { });
    cassetteEl.classList.add('isPlaying');
    playIcon.textContent = '⏸';
    playText.textContent = 'Pause voice note';
  } else {
    audioElement.pause();
    cassetteEl.classList.remove('isPlaying');
    playIcon.textContent = '▶';
    playText.textContent = 'play this 💕';
  }
}

/* ============================================================
   Cursor heart trail — tiny hearts drift out from wherever the
   cursor moves, site-wide. Throttled so it stays subtle instead
   of spamming a heart on every pixel of movement.
   ============================================================ */
(function initializeCursorHeartTrail() {
  const heartGlyphs = ['💖', '💕', '❤️', '💗', '✨', '🌸', '🥰'];
  let lastSpawnTime = 0;
  const minMillisecondsBetweenHearts = 110;

  function spawnTrailHeart(x, y) {
    const heart = document.createElement('span');
    heart.className = 'cursorHeartTrailParticle';
    heart.textContent = heartGlyphs[Math.floor(Math.random() * heartGlyphs.length)];
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.setProperty('--driftX', (Math.random() * 40 - 20) + 'px');
    document.body.appendChild(heart);
    setTimeout(function () { heart.remove(); }, 1100);
  }

  function handlePointerMove(x, y) {
    const now = performance.now();
    if (now - lastSpawnTime < minMillisecondsBetweenHearts) return;
    lastSpawnTime = now;
    spawnTrailHeart(x, y);
  }

  window.addEventListener('mousemove', function (moveEvent) {
    handlePointerMove(moveEvent.clientX, moveEvent.clientY);
  });
  window.addEventListener('touchmove', function (moveEvent) {
    const touch = moveEvent.touches[0];
    if (touch) handlePointerMove(touch.clientX, touch.clientY);
  }, { passive: true });
})();

/* ============================================================
   Falling petals — a romantic drift of flower petals and hearts
   across every scene.
   ============================================================ */
(function initializeFallingPetals() {
  const petalGlyphs = ['🌸', '🌷', '💖', '🌹', '💕', '✨', '🌺', '💌'];
  const millisecondsBetweenPetals = 1900;

  function spawnFallingPetal() {
    const petal = document.createElement('span');
    petal.className = 'fallingPetal';
    petal.textContent = petalGlyphs[Math.floor(Math.random() * petalGlyphs.length)];
    petal.style.left = (Math.random() * 100) + 'vw';
    petal.style.setProperty('--driftX', (Math.random() * 60 - 30) + 'px');
    petal.style.setProperty('--fallDuration', (9 + Math.random() * 6) + 's');
    petal.style.setProperty('--fallDelay', (Math.random() * 0.6) + 's');
    petal.style.fontSize = (15 + Math.random() * 8) + 'px';
    document.body.appendChild(petal);
    setTimeout(function () { petal.remove(); }, 16000);
  }

  setInterval(spawnFallingPetal, millisecondsBetweenPetals);
  spawnFallingPetal();
})();