import * as THREE from "three";

const gameEl = document.querySelector("#game");
const startEl = document.querySelector("#start");
const winEl = document.querySelector("#win");
const startButton = document.querySelector("#startButton");
const againButton = document.querySelector("#againButton");
const pauseEl = document.querySelector("#pause");
const resumeButton = document.querySelector("#resumeButton");
const timeButton = document.querySelector("#timeButton");
const levelTitleEl = document.querySelector("#levelTitle");
const levelSubtitleEl = document.querySelector("#levelSubtitle");
const winTitleEl = document.querySelector("#winTitle");
const winTextEl = document.querySelector("#winText");
const letterEl = document.querySelector("#letter");
const closeLetterButton = document.querySelector("#closeLetterButton");
const letterLabelEl = document.querySelector("#letterLabel");
const letterMessageEl = document.querySelector("#letterMessage");
const introStoryEl = document.querySelector("#introStory");
const dialogueCaptionEl = document.querySelector("#dialogueCaption");
const levelSelectEl = document.querySelector("#levelSelect");
const bossQuizEl = document.querySelector("#bossQuiz");
const bossHealthFillEl = document.querySelector("#bossHealthFill");
const bossHealthTextEl = document.querySelector("#bossHealthText");
const bossProgressEl = document.querySelector("#bossProgress");
const bossQuestionEl = document.querySelector("#bossQuestion");
const bossAnswersEl = document.querySelector("#bossAnswers");
const gameOverEl = document.querySelector("#gameOver");
const retryFinalButton = document.querySelector("#retryFinalButton");
const gameOverTitleButton = document.querySelector("#gameOverTitleButton");
const theEndEl = document.querySelector("#theEnd");
const countEl = document.querySelector("#count");
const promptEl = document.querySelector("#prompt");
const actionButton = document.querySelector("#actionButton");
const booksEl = document.querySelector("#books");

const cabinItemData = [
  ["shelf", "Red ledger on the high shelf", [-4.4, 1.65, -3.8], 0.15],
  ["cupboard", "Green psalter in the cupboard", [8.05, 1.45, -4.35], -0.9],
  ["nightstand", "Blue atlas on the shed nightstand", [-14.65, 1.12, 26.0], 0.08],
  ["stove", "Black hymnal behind the stove", [4.45, 0.58, 3.58], -0.4],
  ["window", "Thin journal on the windowsill", [0.0, 1.72, -5.62], 0],
  ["chest", "Brown folktales in the chest", [-0.85, 0.92, 4.95], 0.3],
  ["bench", "Yellow field notes on the pond bench", [4.7, 0.72, 31.0], 0.18],
  ["table", "Maroon poetry beneath the table", [-5.05, 0.48, -1.0], -0.2],
  ["barrel", "Grey mushroom guide by the barrel", [-8.42, 0.72, -0.85], -1.0],
  ["icons", "White icon book near the shrine", [8.35, 1.0, 0.55], 0.7],
];

const churchItemData = [
  ["church-prayer-book", "Old prayer book on the lectern", [60.0, 1.48, -3.8], 0.0, "book"],
  ["church-gospel", "Gospel book on the altar", [60.0, 1.42, -9.2], 0.0, "book"],
  ["church-prayer-rope", "Black prayer rope on an aisle pew", [57.75, 0.92, 2.2], 0.2, "rope"],
  ["church-censer", "Brass censer beside the icon wall", [64.9, 1.05, -7.7], 0.0, "censer"],
  ["church-cross", "Hand cross near the royal doors", [57.2, 1.28, -9.45], 0.0, "cross"],
  ["church-icon", "Small painted icon beside a pew", [62.2, 1.38, 4.0], 0.0, "icon"],
  ["church-candles", "Box of beeswax candles on a pew", [57.7, 0.92, -1.8], 0.15, "candles"],
  ["church-hymnal", "Choir hymnal on the side stand", [62.3, 1.35, 0.2], -0.35, "book"],
  ["church-water", "Holy-water vessel near the entrance", [54.0, 1.0, 7.6], 0.0, "vessel"],
  ["church-vestment", "Folded red vestment on the table", [62.9, 1.02, 6.8], 0.0, "vestment"],
];

const cemeteryItemData = [
  ["cemetery-register", "Burial register on the keeper's desk", [-60.0, 1.18, -16.8], 0.1, "book"],
  ["cemetery-rosary", "Rosary draped over an outer grave", [-76.0, 0.92, -7.5], 0.0, "rope"],
  ["cemetery-lantern", "Grave lantern beside the central path", [-61.8, 0.72, 5.5], 0.0, "lantern"],
  ["cemetery-key", "Iron key beneath a stone cross", [-43.8, 0.5, -10.8], 0.15, "key"],
  ["cemetery-locket", "Silver locket near the birch grove", [-74.2, 0.58, 14.2], 0.0, "locket"],
  ["cemetery-icon", "Memorial icon in a wooden shrine", [-42.8, 1.15, 12.3], 0.0, "icon"],
  ["cemetery-candles", "Bundle of memorial candles by the far fence", [-68.5, 0.78, 20.0], 0.1, "candles"],
  ["cemetery-water", "Holy-water flask by the gate", [-52.0, 0.78, 20.8], 0.0, "vessel"],
  ["cemetery-cross", "Small wooden cross in the eastern snow", [-47.2, 0.72, 1.5], -0.2, "cross"],
  ["cemetery-wreath", "Funeral wreath beside the mausoleum", [-69.8, 0.72, -18.0], 0.0, "wreath"],
];

const volgaItemData = [
  ["volga-compass", "Brass compass hidden beneath a rock", [108.65, 0.42, 14.5], 0.0, "compass"],
  ["volga-letter-trunk", "Explorer's letter inside a hollow tree trunk", [132.0, 0.82, 12.45], 0.0, "letter"],
  ["volga-train-receipt", "Train ticket receipt inside the treasure chest", [127.0, 1.0, -17.0], 0.1, "receipt", true],
  ["volga-bottle", "Sealed bottle beside the riverbank", [110.0, 0.58, 3.8], 0.0, "vessel"],
  ["volga-letter", "Birch-bark letter near the bridge", [122.8, 0.52, 5.2], -0.2, "book"],
  ["volga-knife", "Fisherman's knife by an abandoned fire", [112.5, 0.48, -8.0], 0.0, "knife"],
  ["volga-amber", "Amber pendant among the northern roots", [132.5, 0.55, -12.0], 0.0, "locket"],
  ["volga-coin", "Old silver coin at the water's edge", [129.5, 0.38, 3.6], 0.0, "coin"],
  ["volga-whistle", "Carved wooden whistle on a stump", [107.0, 0.95, -18.0], 0.0, "whistle"],
  ["volga-cup", "Silver travel cup in the fern clearing", [120.0, 0.62, 18.0], 0.0, "vessel"],
];

const uralStationItemData = [
  ["ural-bag", "Travel bag on the outdoor bench", [173.8, 1.0, 4.8], 0.0, "bag"],
  ["ural-timetable", "Folded timetable in the waiting room", [180.5, 1.18, -5.8], 0.15, "book"],
  ["ural-cap", "Conductor's cap by the platform office", [188.0, 0.92, 2.8], 0.0, "cap"],
  ["ural-whistle", "Station whistle near the ticket window", [173.0, 1.05, -6.5], 0.0, "whistle"],
  ["ural-tag", "Luggage tag beside the railway tracks", [193.0, 0.48, 12.5], 0.0, "tag"],
  ["ural-tea", "Tea glass in the station kitchen", [186.5, 1.08, -7.8], 0.0, "tea"],
  ["ural-telegram", "Telegram on the clerk's desk", [176.0, 1.05, -4.0], 0.0, "letter"],
  ["ural-shovel", "Coal shovel near the locomotive", [194.0, 0.62, 8.8], 0.1, "shovel"],
  ["ural-postcard", "Mountain postcard beneath the platform sign", [166.5, 0.52, 5.5], -0.1, "letter"],
  ["ural-camp-letter", "Dated letter inside the mountain tent", [173.8, 0.52, -41.2], 0.0, "letter"],
];

const nightTrainItemData = [
  ["train-screwdriver", "Flathead screwdriver on a sleeper bunk", [238.6, 0.84, 18.0], 0.0, "screwdriver"],
  ["train-secret-letter", "Letter beside the secret-room typewriter", [240.55, 1.25, 34.65], 0.1, "letter"],
  ["train-wrench", "Adjustable wrench on a passenger seat", [238.8, 1.05, 7.8], 0.0, "wrench"],
  ["train-safe-key", "Brass safe key on the locomotive controls", [240.8, 1.42, -26.8], 0.0, "safeKey"],
  ["train-hammer", "Small hammer on the dining table", [238.4, 1.1, -3.2], 0.0, "hammer"],
  ["train-chisel", "Steel chisel beneath a dining plate", [241.6, 1.08, -7.1], -0.15, "chisel"],
  ["train-lockpicks", "Lockpick set in the baggage rack", [238.6, 1.15, -13.0], 0.0, "lockpick"],
  ["train-oilcan", "Oil can on the rear shelf", [241.2, 1.05, -18.6], 0.0, "oilcan"],
  ["train-boltcutters", "Bolt cutters on a cargo crate", [238.5, 1.0, -18.0], 0.0, "boltcutters"],
  ["train-prybar", "Short pry bar on the conductor's desk", [241.0, 1.2, -11.7], 0.1, "prybar"],
];
const nightTrainToolIds = nightTrainItemData.filter(([id]) => id !== "train-secret-letter").map(([id]) => id);

const redSquareItemData = [
  ["square-golden-key", "Golden cathedral key by the fountain", [289.0, 0.58, 17.0], 0.0, "safeKey"],
  ["square-iron-key", "Iron vestry key beneath a bench", [311.5, 0.5, 15.0], 0.0, "key"],
  ["square-medallion", "Saint's medallion near the arcade", [284.5, 0.62, 4.0], 0.0, "locket"],
  ["square-seal", "Red wax seal on the stone post", [315.0, 1.02, 3.0], 0.0, "coin"],
  ["square-ribbon", "Prayer ribbon beside the snowbank", [292.0, 0.42, -1.0], 0.0, "vestment"],
  ["square-bell", "Small brass bell by the market stall", [307.5, 0.82, 7.5], 0.0, "bell"],
  ["square-icon", "Painted icon fragment near the wall", [282.5, 0.78, -10.0], 0.0, "icon"],
  ["square-rosary", "Rosary on the cathedral steps", [302.8, 0.48, -2.6], 0.0, "rope"],
  ["square-plan", "Cathedral floor plan at the kiosk", [318.0, 1.05, -8.0], 0.1, "book"],
  ["square-star", "Enamel star token in the plaza", [300.0, 0.4, 10.0], 0.0, "star"],
];
const redSquareUnlockIds = redSquareItemData.map(([id]) => id);

const cathedralFinalItemData = [
  ["final-icon-key", "Gilded icon key beside the first column", [354.0, 0.72, 10.5], 0.0, "safeKey"],
  ["final-incense-seal", "Incense seal near the candle stand", [366.0, 0.68, 9.0], 0.0, "coin"],
  ["final-mosaic", "Blue mosaic fragment beneath a pew", [353.5, 0.45, 3.5], 0.0, "icon"],
  ["final-altar-seal", "Altar seal on the side lectern", [365.0, 1.28, 1.0], 0.0, "star"],
  ["final-bronze-key", "Bronze sanctuary key by the north wall", [351.8, 0.52, -5.0], 0.0, "key"],
  ["final-scroll", "Prayer scroll in the choir stall", [368.0, 1.02, -4.0], 0.0, "letter"],
  ["final-red-gem", "Red glass gem near the icon screen", [355.5, 0.62, -10.5], 0.0, "locket"],
  ["final-cog", "Brass lock cog behind the censer", [364.5, 0.58, -10.0], 0.0, "compass"],
  ["final-choir-token", "Choir token beneath the central rug", [360.0, 0.38, 5.5], 0.0, "coin"],
  ["final-silver-cross", "Silver cross on the final steps", [362.8, 0.62, -14.8], 0.0, "cross"],
];
const cathedralFinalUnlockIds = cathedralFinalItemData.map(([id]) => id);
const bossQuestions = [
  {
    question: "Which city did Peter the Great found in 1703?",
    answers: ["St. Petersburg", "Moscow", "Kazan"],
    correct: 0,
  },
  {
    question: "Who was the first Russian ruler crowned as Tsar?",
    answers: ["Peter the Great", "Ivan IV", "Alexander II"],
    correct: 1,
  },
  {
    question: "In which year was the Soviet Union dissolved?",
    answers: ["1985", "1991", "1998"],
    correct: 1,
  },
];

const collected = new Set();
let level = 1;
let activeItemData = cabinItemData;
let nearestBook = null;
let nearestDoor = null;
let cabinDoor = null;
let churchDoors = [];
let treasureChest = null;
let treasureChestLid = null;
let nearestChest = null;
let chestOpen = false;
let secretTrainDoor = null;
let secretTrainDoorOpen = false;
let locomotiveDoor = null;
let locomotiveDoorOpen = false;
let trainSafe = null;
let trainSafeDoor = null;
let trainSafeOpen = false;
let nearestSafe = null;
let cathedralDoors = [];
let cathedralDoorOpen = false;
let finalCathedralDoors = [];
let finalCathedralDoorOpen = false;
let bossQuizActive = false;
let bossQuestionIndex = 0;
let bossWrongAnswers = 0;
let endingActive = false;
let endingTimer = 0;
let endingDmitry = null;
let endingFriend = null;
let bear = null;
let bearWarningTimer = 0;
let letterOpen = false;
let pendingLevelWin = false;
let dialogueTimer = null;
let pendingDialogueAfterDocument = null;
let selectedStartLevel = 1;
let trainRumbleOscillator = null;
let trainRumbleGain = null;
let trainChooClock = 35;
const movingTrainScenery = [];
let doorOpen = false;
let churchDoorOpen = false;
let locked = false;
let paused = false;
let timeMode = "night";
let yaw = 0;
let pitch = 0;
let targetYaw = 0;
let targetPitch = 0;
let velocityY = 0;
let audioContext = null;
let owlTimer = 0;
let stepClock = 0;
let stepSide = 0;
let draggingLook = false;
const keys = {};

setTimeout(() => {
  if (!startEl.classList.contains("hidden")) introStoryEl.classList.add("visible");
}, 15000);

function showDialogueCaption(text, duration = 8000) {
  if (dialogueTimer) clearTimeout(dialogueTimer);
  dialogueCaptionEl.textContent = text;
  dialogueCaptionEl.classList.add("visible");
  dialogueTimer = setTimeout(() => {
    dialogueCaptionEl.classList.remove("visible");
    dialogueTimer = null;
  }, duration);
}

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111820);
scene.fog = new THREE.FogExp2(0x9aa8ad, 0.028);

const camera = new THREE.PerspectiveCamera(68, innerWidth / innerHeight, 0.05, 130);
camera.position.set(0, 1.7, 5.2);

const renderer = new THREE.WebGLRenderer({ antialias: false });
renderer.setPixelRatio(1);
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;
gameEl.appendChild(renderer.domElement);

const clock = new THREE.Clock();
const raycaster = new THREE.Raycaster();
const forward = new THREE.Vector3();
const right = new THREE.Vector3();
const temp = new THREE.Vector3();
const up = new THREE.Vector3(0, 1, 0);

const colliders = [
  new THREE.Box3(new THREE.Vector3(-9.4, 0, -6.4), new THREE.Vector3(9.4, 4.4, -5.75)),
  new THREE.Box3(new THREE.Vector3(-9.4, 0, 5.75), new THREE.Vector3(2.15, 4.4, 6.4)),
  new THREE.Box3(new THREE.Vector3(3.85, 0, 5.75), new THREE.Vector3(9.4, 4.4, 6.4)),
  new THREE.Box3(new THREE.Vector3(2.15, 2.65, 5.75), new THREE.Vector3(3.85, 4.4, 6.4)),
  new THREE.Box3(new THREE.Vector3(-9.4, 0, -6.4), new THREE.Vector3(-8.75, 4.4, 6.4)),
  new THREE.Box3(new THREE.Vector3(8.75, 0, -6.4), new THREE.Vector3(9.4, 4.4, 6.4)),
  new THREE.Box3(new THREE.Vector3(-3.25, 0, -6.2), new THREE.Vector3(-2.9, 4.0, -1.1)),
  new THREE.Box3(new THREE.Vector3(-3.25, 0, 1.25), new THREE.Vector3(-2.9, 4.0, 6.2)),
  new THREE.Box3(new THREE.Vector3(2.9, 0, -6.2), new THREE.Vector3(3.25, 4.0, -1.1)),
  new THREE.Box3(new THREE.Vector3(2.9, 0, 1.25), new THREE.Vector3(3.25, 4.0, 6.2)),
  new THREE.Box3(new THREE.Vector3(-8.6, 0, 3.0), new THREE.Vector3(-5.6, 1.1, 5.15)),
  new THREE.Box3(new THREE.Vector3(3.7, 0, 2.8), new THREE.Vector3(5.2, 2.2, 4.6)),
  new THREE.Box3(new THREE.Vector3(-6.85, 0, -1.65), new THREE.Vector3(-4.05, 1.15, 1.0)),
  new THREE.Box3(new THREE.Vector3(7.55, 0, -5.1), new THREE.Vector3(8.75, 2.2, -3.45)),
  new THREE.Box3(new THREE.Vector3(-9.05, 0, -1.4), new THREE.Vector3(-7.55, 1.35, 0.05)),
  new THREE.Box3(new THREE.Vector3(-5.55, 0, -4.8), new THREE.Vector3(-3.15, 3.2, -2.45)),
  new THREE.Box3(new THREE.Vector3(-17.8, 0, -17.8), new THREE.Vector3(17.8, 2.4, -17.25)),
  new THREE.Box3(new THREE.Vector3(-17.8, 0, 17.25), new THREE.Vector3(-9.8, 2.4, 17.8)),
  new THREE.Box3(new THREE.Vector3(-4.6, 0, 17.25), new THREE.Vector3(17.8, 2.4, 17.8)),
  new THREE.Box3(new THREE.Vector3(-17.8, 0, -17.8), new THREE.Vector3(-17.25, 2.4, 17.8)),
  new THREE.Box3(new THREE.Vector3(17.25, 0, -17.8), new THREE.Vector3(17.8, 2.4, 17.8)),
];

function makeTexture(base, line, accent) {
  const c = document.createElement("canvas");
  c.width = 64;
  c.height = 64;
  const x = c.getContext("2d");
  x.fillStyle = base;
  x.fillRect(0, 0, 64, 64);
  x.fillStyle = line;
  for (let y = 0; y < 64; y += 10) {
    x.fillRect(0, y, 64, 3);
    x.fillStyle = y % 20 ? line : accent;
  }
  for (let i = 0; i < 36; i++) {
    x.fillStyle = `rgba(0,0,0,${0.08 + Math.random() * 0.1})`;
    x.fillRect(Math.random() * 64, Math.random() * 64, 2 + Math.random() * 8, 1);
  }
  const texture = new THREE.CanvasTexture(c);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  return texture;
}

const mat = {
  floor: new THREE.MeshLambertMaterial({ map: makeTexture("#4a3320", "#2b1b10", "#715137") }),
  wall: new THREE.MeshLambertMaterial({ map: makeTexture("#6a472c", "#392313", "#8a6542") }),
  roof: new THREE.MeshLambertMaterial({ color: 0x2d2119 }),
  snow: new THREE.MeshLambertMaterial({ color: 0xcdd8d9 }),
  dark: new THREE.MeshLambertMaterial({ color: 0x15110d }),
  ember: new THREE.MeshBasicMaterial({ color: 0xff6828 }),
  cloth: new THREE.MeshLambertMaterial({ color: 0x6e1e1b }),
  metal: new THREE.MeshLambertMaterial({ color: 0x4b4a45 }),
  windowGlow: new THREE.MeshBasicMaterial({ color: 0x9fb4c1 }),
  moon: new THREE.MeshBasicMaterial({ color: 0xf1e7bf }),
  trail: new THREE.MeshLambertMaterial({ color: 0x8d8677 }),
  lantern: new THREE.MeshBasicMaterial({ color: 0xffbd58 }),
  pond: new THREE.MeshBasicMaterial({ color: 0x7fa3aa }),
  ice: new THREE.MeshBasicMaterial({ color: 0xc8dddd }),
};

function box(name, pos, scale, material, shadow = true) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(scale[0], scale[1], scale[2]), material);
  mesh.name = name;
  mesh.position.set(pos[0], pos[1], pos[2]);
  mesh.castShadow = shadow;
  mesh.receiveShadow = true;
  scene.add(mesh);
  return mesh;
}

function cyl(name, pos, radius, depth, material, rotZ = Math.PI / 2) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, depth, 8), material);
  mesh.name = name;
  mesh.position.set(pos[0], pos[1], pos[2]);
  mesh.rotation.z = rotZ;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  scene.add(mesh);
  return mesh;
}

scene.add(new THREE.HemisphereLight(0x9aaec0, 0x17100b, 1.65));
const lamp = new THREE.PointLight(0xffb35c, 2.8, 15);
lamp.position.set(1.2, 2.5, -0.8);
lamp.castShadow = true;
scene.add(lamp);
const moon = new THREE.DirectionalLight(0xb7d8ff, 0.9);
moon.position.set(-8, 11, 3);
scene.add(moon);
const sun = new THREE.DirectionalLight(0xffe0a3, 0.0);
sun.position.set(8, 12, 6);
scene.add(sun);

box("floor", [0, -0.05, 0], [18, 0.1, 12], mat.floor, false);
box("snow yard", [0, -0.18, 0], [72, 0.12, 72], mat.snow, false);
box("back wall", [0, 2, -6], [18.4, 4, 0.34], mat.wall);
box("front wall left", [-3.72, 2, 6], [11.06, 4, 0.34], mat.wall);
box("front wall right", [6.47, 2, 6], [5.06, 4, 0.34], mat.wall);
box("front door lintel", [3.0, 3.34, 6], [1.7, 1.32, 0.34], mat.wall);
box("left wall", [-9, 2, 0], [0.34, 4, 12.4], mat.wall);
box("right wall", [9, 2, 0], [0.34, 4, 12.4], mat.wall);
box("left room partition north", [-3.08, 2, -3.65], [0.34, 4, 5.0], mat.wall);
box("left room partition south", [-3.08, 2, 3.75], [0.34, 4, 4.5], mat.wall);
box("right room partition north", [3.08, 2, -3.65], [0.34, 4, 5.0], mat.wall);
box("right room partition south", [3.08, 2, 3.75], [0.34, 4, 4.5], mat.wall);
box("left doorway lintel", [-3.08, 3.45, 0.08], [0.36, 1.1, 2.36], mat.wall);
box("right doorway lintel", [3.08, 3.45, 0.08], [0.36, 1.1, 2.36], mat.wall);
for (let z = -4.9; z <= 4.9; z += 1.4) cyl("log left", [-9.15, 0.55, z], 0.18, 12.7, mat.wall, 0);
for (let z = -4.9; z <= 4.9; z += 1.4) cyl("log right", [9.15, 0.55, z], 0.18, 12.7, mat.wall, 0);
for (let x = -7.9; x <= 7.9; x += 1.4) cyl("log back", [x, 0.55, -6.15], 0.18, 18.7, mat.wall);
box("roof slab north", [0, 4.45, -3.1], [19, 0.36, 7.6], mat.roof).rotation.x = -0.55;
box("roof slab south", [0, 4.45, 3.1], [19, 0.36, 7.6], mat.roof).rotation.x = 0.55;

for (const x of [-6.7, 6.7]) {
  box("window frame", [x, 1.75, -5.78], [1.5, 1.05, 0.08], mat.dark);
  box("frosted window", [x, 1.75, -5.83], [1.15, 0.72, 0.05], new THREE.MeshBasicMaterial({ color: 0x8fb1bc }));
}
box("flag hanging rail", [4.75, 3.46, -5.76], [2.75, 0.1, 0.1], mat.dark);
box("Russian flag white stripe", [4.75, 3.2, -5.72], [2.4, 0.4, 0.06], new THREE.MeshLambertMaterial({ color: 0xf1f1ed }), false);
box("Russian flag blue stripe", [4.75, 2.8, -5.72], [2.4, 0.4, 0.06], new THREE.MeshLambertMaterial({ color: 0x2355a3 }), false);
box("Russian flag red stripe", [4.75, 2.4, -5.72], [2.4, 0.4, 0.06], new THREE.MeshLambertMaterial({ color: 0xb62d36 }), false);
box("moon window frame", [0, 2.22, -5.72], [2.65, 1.55, 0.12], mat.dark);
box("moon window view", [0, 2.22, -5.65], [2.18, 1.16, 0.08], mat.windowGlow, false);
const moonDisk = new THREE.Mesh(new THREE.CircleGeometry(0.24, 18), mat.moon);
moonDisk.position.set(0.63, 2.48, -5.59);
scene.add(moonDisk);
for (let i = 0; i < 7; i++) {
  const pine = new THREE.Mesh(new THREE.ConeGeometry(0.18 + (i % 3) * 0.04, 0.68 + (i % 2) * 0.18, 5), new THREE.MeshBasicMaterial({ color: 0x13251f }));
  pine.position.set(-0.92 + i * 0.31, 1.92 + (i % 2) * 0.03, -5.58);
  scene.add(pine);
}
box("window frame", [0, 1.55, 5.78], [1.6, 1.0, 0.08], mat.dark);
cabinDoor = box("door", [3.0, 1.3, 5.82], [1.28, 2.5, 0.12], new THREE.MeshLambertMaterial({ color: 0x2b1b10 }));
cabinDoor.userData = { kind: "door" };

for (let x = -16; x <= 16; x += 2) {
  box("back fence rail", [x, 0.85, -17.45], [1.35, 0.16, 0.14], mat.dark);
  box("back fence post", [x, 0.62, -17.45], [0.16, 1.22, 0.16], mat.dark);
  if (x < -10 || x > -4) {
    box("front fence rail", [x, 0.85, 17.45], [1.35, 0.16, 0.14], mat.dark);
    box("front fence post", [x, 0.62, 17.45], [0.16, 1.22, 0.16], mat.dark);
  }
}
box("left gate post", [-9.65, 0.75, 17.45], [0.26, 1.5, 0.26], mat.dark);
box("right gate post", [-4.45, 0.75, 17.45], [0.26, 1.5, 0.26], mat.dark);
for (let z = -16; z <= 16; z += 2) {
  box("left fence rail", [-17.45, 0.85, z], [0.14, 0.16, 1.35], mat.dark);
  box("right fence rail", [17.45, 0.85, z], [0.14, 0.16, 1.35], mat.dark);
  box("left fence post", [-17.45, 0.62, z], [0.16, 1.22, 0.16], mat.dark);
  box("right fence post", [17.45, 0.62, z], [0.16, 1.22, 0.16], mat.dark);
}

function trailSegment(name, pos, scale, rotation = 0) {
  const path = box(name, pos, scale, mat.trail, false);
  path.rotation.y = rotation;
  return path;
}

function lanternTree(x, z, lanternSide = 1) {
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.28, 3.1, 5), new THREE.MeshLambertMaterial({ color: 0x2a1b12 }));
  trunk.position.set(x, 1.35, z);
  const pine = new THREE.Mesh(new THREE.ConeGeometry(1.15, 3.7, 6), new THREE.MeshLambertMaterial({ color: 0x173126 }));
  pine.position.set(x, 3.75, z);
  scene.add(trunk, pine);
  box("lantern bracket", [x + lanternSide * 0.34, 2.0, z], [0.56, 0.08, 0.08], mat.dark);
  box("tree lantern", [x + lanternSide * 0.66, 1.76, z], [0.22, 0.32, 0.22], mat.lantern, false);
  const glow = new THREE.PointLight(0xffa950, 1.35, 7);
  glow.position.set(x + lanternSide * 0.66, 1.78, z);
  scene.add(glow);
}

trailSegment("front trail", [3.0, -0.105, 9.2], [2.15, 0.035, 5.8]);
trailSegment("bent trail", [0.2, -0.102, 12.0], [2.1, 0.035, 5.9], -0.72);
trailSegment("forest trail", [-4.1, -0.101, 14.1], [2.05, 0.035, 5.6], -1.35);
trailSegment("trail clearing", [-7.2, -0.099, 14.0], [3.4, 0.035, 2.8], 0.08);
trailSegment("side wander patch", [5.9, -0.103, 12.4], [3.8, 0.035, 2.4], 0.32);
trailSegment("gate trail", [-7.1, -0.098, 19.6], [2.1, 0.035, 5.2], 0.02);
trailSegment("outside trail", [-6.2, -0.097, 24.5], [2.05, 0.035, 7.4], -0.22);
trailSegment("outside roam patch", [-3.4, -0.096, 28.2], [5.0, 0.035, 3.4], 0.16);
lanternTree(0.8, 10.4, -1);
lanternTree(-2.8, 13.6, 1);
lanternTree(-8.8, 14.2, 1);
lanternTree(7.7, 11.6, -1);
lanternTree(-8.2, 20.9, 1);
lanternTree(-3.8, 25.4, -1);
lanternTree(-6.4, 29.7, 1);

// A small trail-side sleeping shed, open toward the path.
trailSegment("shed footpath", [-8.9, -0.095, 25.9], [4.6, 0.035, 1.35], Math.PI / 2);
box("shed floor", [-12.4, 0.02, 25.9], [6.0, 0.18, 5.0], mat.floor, false);
box("shed back wall", [-15.35, 1.65, 25.9], [0.28, 3.3, 5.0], mat.wall);
box("shed north wall", [-12.4, 1.65, 23.45], [6.0, 3.3, 0.28], mat.wall);
box("shed south wall", [-12.4, 1.65, 28.35], [6.0, 3.3, 0.28], mat.wall);
box("shed front wall north", [-9.45, 1.65, 24.25], [0.28, 3.3, 1.35], mat.wall);
box("shed front wall south", [-9.45, 1.65, 27.55], [0.28, 3.3, 1.35], mat.wall);
box("shed door lintel", [-9.45, 2.95, 25.9], [0.28, 0.7, 2.05], mat.wall);
box("shed roof north", [-12.4, 3.55, 24.55], [6.5, 0.26, 3.4], mat.roof).rotation.x = -0.42;
box("shed roof south", [-12.4, 3.55, 27.25], [6.5, 0.26, 3.4], mat.roof).rotation.x = 0.42;

box("shed bed frame", [-13.55, 0.42, 24.45], [3.15, 0.52, 1.45], mat.dark);
box("shed mattress", [-13.55, 0.76, 24.45], [2.9, 0.2, 1.24], new THREE.MeshLambertMaterial({ color: 0xb7ad91 }));
box("shed blanket", [-12.75, 0.91, 24.45], [1.35, 0.12, 1.28], mat.cloth);
box("shed pillow", [-14.55, 0.94, 24.45], [0.55, 0.16, 0.86], new THREE.MeshLambertMaterial({ color: 0xd3c8a9 }));
box("shed nightstand", [-14.65, 0.55, 26.0], [0.9, 1.0, 0.85], mat.wall);
box("shed nightstand drawer", [-14.16, 0.68, 26.0], [0.04, 0.28, 0.56], mat.dark);
box("shed window frame", [-15.18, 1.95, 26.0], [0.08, 1.15, 1.35], mat.dark);
box("shed little window", [-15.12, 1.95, 26.0], [0.04, 0.82, 1.02], mat.windowGlow, false);
box("shed window crossbar", [-15.08, 1.95, 26.0], [0.035, 0.09, 1.08], mat.dark);
box("shed window upright", [-15.08, 1.95, 26.0], [0.035, 0.9, 0.08], mat.dark);

box("shed bookcase back", [-12.45, 1.25, 27.98], [2.65, 2.5, 0.18], mat.dark);
box("shed bookcase left", [-13.72, 1.25, 27.72], [0.18, 2.5, 0.55], mat.wall);
box("shed bookcase right", [-11.18, 1.25, 27.72], [0.18, 2.5, 0.55], mat.wall);
for (const shelfY of [0.18, 0.82, 1.48, 2.18]) {
  box("shed bookcase shelf", [-12.45, shelfY, 27.72], [2.7, 0.16, 0.62], mat.wall);
}
const shedBookColors = [0x71372c, 0x334b35, 0x3d465f, 0x8a6932, 0x552f43, 0x6b593e];
for (let shelf = 0; shelf < 3; shelf++) {
  for (let book = 0; book < 6; book++) {
    const height = 0.36 + ((book + shelf) % 3) * 0.07;
    const oldBook = box(
      "shed shelf book",
      [-13.35 + book * 0.36, 0.3 + shelf * 0.66 + height / 2, 27.37],
      [0.25, height, 0.42],
      new THREE.MeshLambertMaterial({ color: shedBookColors[(book + shelf * 2) % shedBookColors.length] })
    );
    oldBook.rotation.z = (book % 4 === 3 ? 0.08 : 0);
  }
}
const shedLamp = new THREE.PointLight(0xffa85a, 1.1, 6.5);
shedLamp.position.set(-13.2, 2.15, 26.1);
scene.add(shedLamp);

colliders.push(
  new THREE.Box3(new THREE.Vector3(-15.55, 0, 23.25), new THREE.Vector3(-15.15, 3.5, 28.55)),
  new THREE.Box3(new THREE.Vector3(-15.55, 0, 23.25), new THREE.Vector3(-9.25, 3.5, 23.65)),
  new THREE.Box3(new THREE.Vector3(-15.55, 0, 28.15), new THREE.Vector3(-9.25, 3.5, 28.55)),
  new THREE.Box3(new THREE.Vector3(-9.65, 0, 23.25), new THREE.Vector3(-9.25, 3.5, 25.0)),
  new THREE.Box3(new THREE.Vector3(-9.65, 0, 26.8), new THREE.Vector3(-9.25, 3.5, 28.55)),
  new THREE.Box3(new THREE.Vector3(-15.25, 0, 23.7), new THREE.Vector3(-11.9, 1.15, 25.25)),
  new THREE.Box3(new THREE.Vector3(-15.2, 0, 25.5), new THREE.Vector3(-14.05, 1.2, 26.5)),
  new THREE.Box3(new THREE.Vector3(-13.85, 0, 27.35), new THREE.Vector3(-11.05, 2.6, 28.2))
);

const pond = new THREE.Mesh(new THREE.CylinderGeometry(2.8, 2.25, 0.045, 18), mat.pond);
pond.position.set(2.4, -0.07, 28.6);
pond.scale.z = 0.58;
pond.rotation.y = 0.24;
scene.add(pond);
const pondIce = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 1.85, 0.05, 16), mat.ice);
pondIce.position.set(2.45, -0.035, 28.65);
pondIce.scale.z = 0.48;
pondIce.rotation.y = -0.18;
scene.add(pondIce);
for (let i = 0; i < 9; i++) {
  const angle = (i / 9) * Math.PI * 2;
  const x = 2.4 + Math.cos(angle) * (2.75 + (i % 2) * 0.2);
  const z = 28.6 + Math.sin(angle) * (1.65 + (i % 3) * 0.08);
  box("pond stone", [x, -0.02, z], [0.42, 0.14, 0.3], mat.dark, false).rotation.y = angle;
}
const pondTreeTrunk = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.38, 3.6, 6), new THREE.MeshLambertMaterial({ color: 0x2a1b12 }));
pondTreeTrunk.position.set(6.2, 1.55, 27.0);
scene.add(pondTreeTrunk);
const pondTreeTop = new THREE.Mesh(new THREE.ConeGeometry(1.55, 4.8, 7), new THREE.MeshLambertMaterial({ color: 0x163326 }));
pondTreeTop.position.set(6.2, 4.2, 27.0);
scene.add(pondTreeTop);
box("bench seat", [4.7, 0.48, 31.0], [2.4, 0.22, 0.58], mat.wall);
box("bench back", [4.7, 0.9, 31.28], [2.4, 0.18, 0.22], mat.wall);
box("bench leg left", [3.85, 0.22, 31.0], [0.18, 0.44, 0.18], mat.dark);
box("bench leg right", [5.55, 0.22, 31.0], [0.18, 0.44, 0.18], mat.dark);

box("bed frame", [-7.1, 0.45, 4.1], [3.1, 0.55, 1.85], mat.dark);
box("blanket", [-7.1, 0.88, 4.1], [2.8, 0.22, 1.6], mat.cloth);
box("cupboard", [8.15, 1.05, -4.25], [1.2, 2.1, 1.35], mat.wall);
box("cupboard door open", [7.45, 1.02, -4.25], [0.12, 1.8, 1.18], mat.dark);
box("table", [-5.45, 0.82, -0.35], [2.7, 0.22, 1.85], mat.wall);
for (const x of [-6.5, -4.4]) for (const z of [-1.0, 0.3]) box("table leg", [x, 0.38, z], [0.2, 0.75, 0.2], mat.dark);
box("stove", [4.55, 0.92, 3.72], [1.25, 1.65, 1.15], mat.metal);
box("stove fire", [4.55, 0.58, 3.1], [0.65, 0.32, 0.08], mat.ember, false);
box("chest", [-0.8, 0.48, 4.85], [1.6, 0.85, 0.95], mat.wall);
box("barrel", [-8.25, 0.65, -0.65], [1.05, 1.3, 1.05], mat.dark);
box("writing desk", [7.0, 0.65, 1.75], [2.3, 0.25, 1.1], mat.wall);
box("desk stool", [7.0, 0.34, 0.72], [0.7, 0.55, 0.7], mat.dark);
box("icon shelf", [8.5, 1.22, 0.45], [0.16, 0.14, 1.45], mat.wall);
box("wall icon", [8.78, 1.82, 0.45], [0.08, 1.0, 0.8], new THREE.MeshLambertMaterial({ color: 0x8f6f2f }));
for (let x = -7.2; x <= 7.2; x += 2.4) box("rafter", [x, 3.55, 0], [0.22, 0.22, 11.2], mat.dark);

box("high shelf", [-4.4, 1.42, -3.8], [1.6, 0.16, 0.62], mat.wall);

// Level 2: a candlelit Orthodox church beyond the cabin map.
const churchWood = new THREE.MeshLambertMaterial({ color: 0x5a3823 });
const churchPlaster = new THREE.MeshLambertMaterial({ color: 0xb7aa91 });
const churchGold = new THREE.MeshLambertMaterial({ color: 0xb68a32 });
const churchRed = new THREE.MeshLambertMaterial({ color: 0x6f1f24 });
const churchBlue = new THREE.MeshBasicMaterial({ color: 0x557f9b });
box("church floor", [60, -0.05, 0], [18, 0.1, 22], churchWood, false);
box("church back wall", [60, 3.5, -11], [18.4, 7, 0.38], churchPlaster);
box("church front wall left", [54.7, 3.5, 11], [7.8, 7, 0.38], churchPlaster);
box("church front wall right", [65.3, 3.5, 11], [7.8, 7, 0.38], churchPlaster);
box("church entrance lintel", [60, 5.25, 11], [2.8, 3.5, 0.38], churchPlaster);
box("church left wall", [51, 3.5, 0], [0.38, 7, 22.4], churchPlaster);
box("church right wall", [69, 3.5, 0], [0.38, 7, 22.4], churchPlaster);
box("church roof left", [55.7, 7.15, 0], [10.2, 0.38, 23], mat.roof).rotation.z = -0.48;
box("church roof right", [64.3, 7.15, 0], [10.2, 0.38, 23], mat.roof).rotation.z = 0.48;

// Tall 19th-century bell tower and steeple above the entrance facade.
const steepleGreen = new THREE.MeshLambertMaterial({ color: 0x29463d });
box("church bell tower", [60, 8.15, 9.55], [4.2, 4.5, 3.45], churchPlaster);
box("bell tower front opening", [60, 8.45, 11.31], [1.25, 1.85, 0.12], mat.dark);
box("bell tower opening left", [57.84, 8.45, 9.55], [0.12, 1.85, 1.2], mat.dark);
box("bell tower opening right", [62.16, 8.45, 9.55], [0.12, 1.85, 1.2], mat.dark);
box("bell tower cornice", [60, 10.45, 9.55], [4.65, 0.3, 3.9], churchGold);
const bellDrum = new THREE.Mesh(new THREE.CylinderGeometry(1.45, 1.65, 1.65, 8), churchPlaster);
bellDrum.position.set(60, 11.35, 9.55);
scene.add(bellDrum);
const onionDome = new THREE.Mesh(new THREE.SphereGeometry(1.3, 8, 6), steepleGreen);
onionDome.position.set(60, 12.75, 9.55);
onionDome.scale.set(1, 1.28, 1);
scene.add(onionDome);
const steeple = new THREE.Mesh(new THREE.ConeGeometry(0.72, 3.35, 8), steepleGreen);
steeple.position.set(60, 14.85, 9.55);
scene.add(steeple);
box("steeple cross vertical", [60, 16.7, 9.55], [0.16, 1.0, 0.16], churchGold);
box("steeple cross upper arm", [60, 16.85, 9.55], [0.72, 0.14, 0.16], churchGold);
box("steeple cross lower arm", [60, 16.5, 9.55], [0.58, 0.12, 0.16], churchGold).rotation.z = -0.14;

const churchDoorMaterial = new THREE.MeshLambertMaterial({ color: 0x382218 });
const churchDoorLeft = box("church left entrance door", [59.28, 1.65, 10.78], [1.35, 3.3, 0.16], churchDoorMaterial);
const churchDoorRight = box("church right entrance door", [60.72, 1.65, 10.78], [1.35, 3.3, 0.16], churchDoorMaterial);
churchDoorLeft.userData = { kind: "churchDoor" };
churchDoorRight.userData = { kind: "churchDoor" };
churchDoors = [churchDoorLeft, churchDoorRight];
box("church door beam", [60, 3.42, 10.67], [3.25, 0.18, 0.28], churchGold);
box("church facade cross vertical", [60, 6.0, 10.72], [0.28, 1.35, 0.14], churchGold);
box("church facade cross horizontal", [60, 6.18, 10.71], [0.95, 0.25, 0.14], churchGold);
for (const x of [52.9, 55.3, 64.7, 67.1]) {
  box("church facade column", [x, 3.1, 10.7], [0.34, 5.8, 0.34], churchGold);
}

box("church street", [60, -0.08, 26], [23, 0.08, 30], mat.trail, false);
box("church left sidewalk", [48.3, -0.04, 26], [2.4, 0.14, 30], mat.snow, false);
box("church right sidewalk", [71.7, -0.04, 26], [2.4, 0.14, 30], mat.snow, false);
box("church entrance step wide", [60, 0.06, 11.7], [4.4, 0.16, 1.25], churchPlaster, false);
box("church entrance step narrow", [60, 0.13, 11.18], [3.3, 0.16, 0.65], churchPlaster, false);

function streetBuilding(x, z, side, color, accent) {
  const wallMaterial = new THREE.MeshLambertMaterial({ color });
  const trimMaterial = new THREE.MeshLambertMaterial({ color: accent });
  box("street building", [x, 2.8, z], [5.2, 5.6, 7.2], wallMaterial);
  box("street building roof", [x, 5.82, z], [5.6, 0.5, 7.65], mat.roof);
  box("street roof snow", [x, 6.12, z], [5.75, 0.16, 7.8], mat.snow, false);
  const facadeX = x + side * 2.64;
  box("street facade cornice", [facadeX, 4.72, z], [0.16, 0.3, 7.0], trimMaterial);
  box("street facade stone base", [facadeX + side * 0.03, 0.42, z], [0.2, 0.7, 7.0], churchPlaster);
  box("street facade door", [facadeX + side * 0.04, 1.2, z + 2.15], [0.18, 2.35, 1.25], mat.dark);
  for (const windowZ of [z - 2.15, z, z + 2.15]) {
    for (const windowY of [1.7, 3.55]) {
      box("street window frame", [facadeX + side * 0.05, windowY, windowZ], [0.14, 1.15, 0.95], trimMaterial);
      box("street lit window", [facadeX + side * 0.13, windowY, windowZ], [0.08, 0.82, 0.65], mat.lantern, false);
      box("carved window crown", [facadeX + side * 0.14, windowY + 0.69, windowZ], [0.1, 0.14, 1.28], churchGold);
      box("window shutter north", [facadeX + side * 0.14, windowY, windowZ - 0.64], [0.1, 1.0, 0.22], trimMaterial);
      box("window shutter south", [facadeX + side * 0.14, windowY, windowZ + 0.64], [0.1, 1.0, 0.22], trimMaterial);
    }
  }
}

streetBuilding(45.6, 16.2, 1, 0x675b50, 0x302a25);
streetBuilding(45.6, 24.0, 1, 0x526264, 0x283235);
streetBuilding(45.6, 31.8, 1, 0x76574f, 0x3b2924);
streetBuilding(74.4, 16.2, -1, 0x5f6958, 0x2d352a);
streetBuilding(74.4, 24.0, -1, 0x716655, 0x382f28);
streetBuilding(74.4, 31.8, -1, 0x59606c, 0x292d35);
box("distant street facade", [60, 3.0, 41.2], [23.5, 6.0, 0.55], new THREE.MeshLambertMaterial({ color: 0x555b62 }));
box("distant street roof", [60, 6.15, 41.2], [24.0, 0.45, 1.0], mat.roof);
for (const x of [51.5, 55.7, 64.3, 68.5]) {
  box("distant facade window", [x, 3.2, 40.88], [1.1, 1.35, 0.08], mat.lantern, false);
}

for (const [index, z] of [15, 21, 27, 33, 38].entries()) {
  const lampX = index % 2 === 0 ? 50.2 : 69.8;
  const lampPost = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 2.7, 6), mat.dark);
  lampPost.position.set(lampX, 1.25, z);
  scene.add(lampPost);
  box("street lantern", [lampX, 2.65, z], [0.28, 0.38, 0.28], mat.lantern, false);
  const streetGlow = new THREE.PointLight(0xffa950, 0.75, 8);
  streetGlow.position.set(lampX, 2.65, z);
  scene.add(streetGlow);
}

const birchBark = new THREE.MeshLambertMaterial({ color: 0xd8d7c9 });
function birchTree(x, z) {
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.15, 3.8, 6), birchBark);
  trunk.position.set(x, 1.75, z);
  scene.add(trunk);
  for (const y of [0.9, 1.55, 2.3, 2.9]) {
    box("birch bark mark", [x, y, z + 0.13], [0.22, 0.07, 0.04], mat.dark, false);
  }
  const branchA = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.065, 1.45, 5), mat.dark);
  branchA.position.set(x + 0.42, 3.25, z);
  branchA.rotation.z = -0.8;
  const branchB = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.055, 1.2, 5), mat.dark);
  branchB.position.set(x - 0.35, 3.0, z);
  branchB.rotation.z = 0.72;
  scene.add(branchA, branchB);
}

function streetBench(x, z) {
  box("Russian street bench seat", [x, 0.48, z], [0.6, 0.2, 2.1], churchWood);
  box("Russian street bench back", [x + (x < 60 ? -0.25 : 0.25), 0.92, z], [0.14, 0.7, 2.1], churchWood);
  box("street bench leg north", [x, 0.22, z - 0.72], [0.4, 0.42, 0.18], mat.dark);
  box("street bench leg south", [x, 0.22, z + 0.72], [0.4, 0.42, 0.18], mat.dark);
}

for (const [x, z] of [[49.8, 18.2], [70.2, 23.7], [49.8, 30.0], [70.2, 35.0]]) birchTree(x, z);
streetBench(49.6, 24.5);
streetBench(70.4, 29.4);
for (const [x, z] of [[49.7, 13.8], [70.3, 19.0], [49.7, 35.8]]) {
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.36, 0.82, 8), churchWood);
  barrel.position.set(x, 0.35, z);
  scene.add(barrel);
  const bandTop = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.035, 4, 8), mat.metal);
  bandTop.position.set(x, 0.61, z);
  bandTop.rotation.x = Math.PI / 2;
  const bandBottom = bandTop.clone();
  bandBottom.position.y = 0.12;
  scene.add(bandTop, bandBottom);
}
for (const z of [17.0, 25.5, 34.0]) {
  box("horse hitching post", [52.0, 0.62, z], [0.18, 1.25, 0.18], churchWood);
  box("horse hitching rail", [52.0, 0.92, z + 0.72], [0.16, 0.16, 1.6], churchWood);
}

for (const z of [-6.5, -1.5, 3.5, 7.3]) {
  box("church left window frame", [51.22, 3.65, z], [0.1, 2.15, 1.35], mat.dark);
  box("church left blue glass", [51.16, 3.65, z], [0.06, 1.78, 1.02], churchBlue, false);
  box("church right window frame", [68.78, 3.65, z], [0.1, 2.15, 1.35], mat.dark);
  box("church right blue glass", [68.84, 3.65, z], [0.06, 1.78, 1.02], churchBlue, false);
}

box("iconostasis", [60, 3.0, -10.68], [14.8, 5.3, 0.28], churchGold);
box("royal door left", [59.1, 2.1, -10.48], [1.55, 3.8, 0.18], churchRed);
box("royal door right", [60.9, 2.1, -10.48], [1.55, 3.8, 0.18], churchRed);
for (const x of [53.8, 56.3, 63.7, 66.2]) {
  box("church painted icon", [x, 3.15, -10.47], [1.55, 2.25, 0.16], new THREE.MeshLambertMaterial({ color: x < 60 ? 0x465d55 : 0x794537 }));
  box("church icon halo", [x, 3.52, -10.36], [0.58, 0.58, 0.06], churchGold, false);
}
box("church wall cross vertical", [60, 5.75, -10.35], [0.34, 1.65, 0.12], churchGold);
box("church wall cross horizontal", [60, 5.95, -10.34], [1.15, 0.3, 0.12], churchGold);

box("church altar", [60, 0.78, -8.85], [3.4, 1.45, 1.7], churchPlaster);
box("church altar cloth", [60, 1.53, -8.85], [3.55, 0.12, 1.82], churchRed);
box("church lectern post", [60, 0.72, -3.8], [0.28, 1.3, 0.28], churchGold);
const lecternTop = box("church lectern top", [60, 1.3, -3.8], [1.5, 0.18, 1.0], churchWood);
lecternTop.rotation.x = -0.22;
box("church side stand", [62.3, 0.75, 0.2], [1.0, 1.35, 1.05], churchWood);
box("church vestment table", [62.9, 0.58, 6.8], [2.5, 1.05, 1.25], churchWood);

for (const z of [-4.7, -1.2, 2.2, 5.7]) {
  for (const x of [55.5, 64.5]) {
    box("church pew seat", [x, 0.56, z], [5.3, 0.28, 0.75], churchWood);
    box("church pew back", [x, 1.05, z + 0.32], [5.3, 0.85, 0.18], churchWood);
    box("church pew leg left", [x - 2.05, 0.28, z], [0.2, 0.55, 0.55], mat.dark);
    box("church pew leg right", [x + 2.05, 0.28, z], [0.2, 0.55, 0.55], mat.dark);
  }
}

for (const x of [57.8, 62.2]) {
  box("church candle stand", [x, 0.72, -7.25], [1.2, 0.15, 0.75], churchGold);
  for (let i = 0; i < 4; i++) {
    const candleX = x - 0.42 + i * 0.28;
    cyl("church candle", [candleX, 1.04, -7.25], 0.045, 0.55, new THREE.MeshLambertMaterial({ color: 0xd9b85b }), 0);
    const flame = new THREE.PointLight(0xffa54b, 0.45, 4.5);
    flame.position.set(candleX, 1.42, -7.25);
    scene.add(flame);
  }
}
const churchGlow = new THREE.PointLight(0xffb45f, 2.2, 27);
churchGlow.position.set(60, 4.7, -2.5);
scene.add(churchGlow);

colliders.push(
  new THREE.Box3(new THREE.Vector3(50.7, 0, -11.3), new THREE.Vector3(69.3, 7.5, -10.7)),
  new THREE.Box3(new THREE.Vector3(50.7, 0, 10.7), new THREE.Vector3(58.45, 7.5, 11.3)),
  new THREE.Box3(new THREE.Vector3(61.55, 0, 10.7), new THREE.Vector3(69.3, 7.5, 11.3)),
  new THREE.Box3(new THREE.Vector3(50.7, 0, -11.3), new THREE.Vector3(51.3, 7.5, 11.3)),
  new THREE.Box3(new THREE.Vector3(68.7, 0, -11.3), new THREE.Vector3(69.3, 7.5, 11.3)),
  new THREE.Box3(new THREE.Vector3(58.2, 0, -9.8), new THREE.Vector3(61.8, 1.7, -7.9)),
  new THREE.Box3(new THREE.Vector3(59.1, 0, -4.5), new THREE.Vector3(60.9, 1.6, -3.1)),
  new THREE.Box3(new THREE.Vector3(53.0, 0, -5.2), new THREE.Vector3(58.2, 1.35, 6.3)),
  new THREE.Box3(new THREE.Vector3(61.8, 0, -5.2), new THREE.Vector3(67.0, 1.35, 6.3)),
  new THREE.Box3(new THREE.Vector3(61.55, 0, 6.1), new THREE.Vector3(64.25, 1.25, 7.55)),
  new THREE.Box3(new THREE.Vector3(42.8, 0, 12.4), new THREE.Vector3(48.4, 6.5, 35.5)),
  new THREE.Box3(new THREE.Vector3(71.6, 0, 12.4), new THREE.Vector3(77.2, 6.5, 35.5))
);

// Level 3: a fenced cemetery deep in the moonlit forest.
const cemeteryStone = new THREE.MeshLambertMaterial({ color: 0x626663 });
const cemeteryStoneDark = new THREE.MeshLambertMaterial({ color: 0x383d3b });
box("cemetery snow", [-60, -0.16, 1], [42, 0.12, 46], mat.snow, false);
trailSegment("cemetery central path", [-60, -0.09, 1], [2.2, 0.04, 40]);
trailSegment("cemetery cross path", [-60, -0.085, -5.0], [34, 0.04, 1.6]);

for (let x = -80; x <= -40; x += 2) {
  box("cemetery back fence", [x, 0.8, -22.0], [1.45, 0.14, 0.16], mat.dark);
  box("cemetery fence post", [x, 0.62, -22.0], [0.15, 1.25, 0.15], mat.dark);
  if (x < -62 || x > -58) {
    box("cemetery front fence", [x, 0.8, 24.0], [1.45, 0.14, 0.16], mat.dark);
    box("cemetery fence post", [x, 0.62, 24.0], [0.15, 1.25, 0.15], mat.dark);
  }
}
box("cemetery gate post left", [-62.0, 1.0, 24.0], [0.25, 2.0, 0.25], mat.dark);
box("cemetery gate post right", [-58.0, 1.0, 24.0], [0.25, 2.0, 0.25], mat.dark);
box("cemetery gate arch", [-60.0, 2.05, 24.0], [4.2, 0.18, 0.22], mat.dark);
for (let z = -21.0; z <= 23.0; z += 2) {
  box("cemetery side fence", [-81.0, 0.8, z], [0.16, 0.14, 1.45], mat.dark);
  box("cemetery side fence", [-39.0, 0.8, z], [0.16, 0.14, 1.45], mat.dark);
  box("cemetery side post", [-81.0, 0.62, z], [0.15, 1.25, 0.15], mat.dark);
  box("cemetery side post", [-39.0, 0.62, z], [0.15, 1.25, 0.15], mat.dark);
}

for (const x of [-76.0, -70.5, -49.5, -44.0]) {
  for (const z of [-14.0, -7.0, 1.0, 9.0, 16.0]) {
    box("cemetery grave base", [x, 0.18, z], [1.55, 0.3, 2.35], cemeteryStoneDark);
    box("cemetery headstone", [x, 0.82, z - 0.78], [0.82, 1.15, 0.28], cemeteryStone);
    box("grave cross stem", [x, 1.35, z - 0.9], [0.14, 0.8, 0.12], cemeteryStone);
    box("grave cross arm", [x, 1.48, z - 0.9], [0.55, 0.12, 0.12], cemeteryStone);
  }
}

box("cemetery keeper desk", [-60, 0.63, -16.8], [2.2, 1.1, 1.1], churchWood);
box("cemetery mausoleum", [-73.0, 1.7, -19.4], [5.0, 3.4, 3.8], cemeteryStoneDark);
box("mausoleum doorway", [-73.0, 1.25, -17.45], [1.6, 2.5, 0.12], mat.dark);
box("mausoleum roof", [-73.0, 3.55, -19.4], [5.5, 0.4, 4.3], mat.roof);
box("cemetery icon shrine", [-42.8, 1.2, 12.05], [1.35, 2.3, 0.3], churchWood);
box("cemetery shrine roof", [-42.8, 2.55, 12.05], [1.75, 0.25, 0.7], mat.roof).rotation.z = 0.2;

function cemeteryPine(x, z, scale = 1) {
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.16 * scale, 0.25 * scale, 3.5 * scale, 5), churchWood);
  trunk.position.set(x, 1.45 * scale, z);
  const crown = new THREE.Mesh(new THREE.ConeGeometry(1.15 * scale, 4.2 * scale, 6), new THREE.MeshLambertMaterial({ color: 0x162c23 }));
  crown.position.set(x, 4.0 * scale, z);
  scene.add(trunk, crown);
}
for (const [x, z, scale] of [
  [-80, -19, 1.2], [-76, -22, 1.0], [-67, -22.5, 1.25], [-55, -22.2, 1.1], [-43, -20, 1.25],
  [-83, -11, 1.2], [-83, 0, 1.0], [-82.5, 12, 1.25], [-82, 22, 1.1],
  [-37, -12, 1.15], [-37, -1, 1.25], [-37.5, 10, 1.1], [-37, 21, 1.25]
]) cemeteryPine(x, z, scale);
birchTree(-75.0, 14.2);
birchTree(-46.0, 18.0);

const cemeteryMoonMaterial = new THREE.MeshBasicMaterial({ color: 0xf0e4b7, fog: false });
const cemeterySkyMaterial = new THREE.MeshBasicMaterial({ color: 0x111820, fog: false });
const cemeteryMoonDisk = new THREE.Mesh(new THREE.CircleGeometry(2.0, 24), cemeteryMoonMaterial);
cemeteryMoonDisk.position.set(-68.0, 13.2, -28.0);
const cemeteryMoonCutout = new THREE.Mesh(new THREE.CircleGeometry(1.78, 24), cemeterySkyMaterial);
cemeteryMoonCutout.position.set(-67.25, 13.55, -27.92);
scene.add(cemeteryMoonDisk, cemeteryMoonCutout);

for (const [x, z] of [[-60, 20.5], [-60, 11.0], [-60, 1.5], [-60, -8.0], [-56.5, -18.0]]) {
  box("cemetery lantern post", [x, 1.1, z], [0.12, 2.2, 0.12], mat.dark);
  box("cemetery path lantern", [x, 2.25, z], [0.3, 0.42, 0.3], mat.lantern, false);
  const graveGlow = new THREE.PointLight(0xffa34b, 0.7, 7);
  graveGlow.position.set(x, 2.25, z);
  scene.add(graveGlow);
}

colliders.push(
  new THREE.Box3(new THREE.Vector3(-81.3, 0, -22.3), new THREE.Vector3(-38.7, 2.0, -21.7)),
  new THREE.Box3(new THREE.Vector3(-81.3, 0, 23.7), new THREE.Vector3(-38.7, 2.0, 24.3)),
  new THREE.Box3(new THREE.Vector3(-81.3, 0, -22.3), new THREE.Vector3(-80.7, 2.0, 24.3)),
  new THREE.Box3(new THREE.Vector3(-39.3, 0, -22.3), new THREE.Vector3(-38.7, 2.0, 24.3)),
  new THREE.Box3(new THREE.Vector3(-75.7, 0, -21.5), new THREE.Vector3(-70.3, 3.9, -17.2)),
  new THREE.Box3(new THREE.Vector3(-61.2, 0, -17.5), new THREE.Vector3(-58.8, 1.3, -16.1))
);

// Level 4: a forest divided by the Volga River.
const forestGround = new THREE.MeshLambertMaterial({ color: 0x344236 });
const volgaWater = new THREE.MeshBasicMaterial({ color: 0x416e7c });
box("Volga forest ground", [120, -0.18, 0], [36, 0.12, 50], forestGround, false);
box("Volga River", [120, -0.09, 0], [36, 0.07, 6.2], volgaWater, false);
box("Volga north bank", [120, -0.04, -3.45], [36, 0.12, 0.7], mat.trail, false);
box("Volga south bank", [120, -0.04, 3.45], [36, 0.12, 0.7], mat.trail, false);
for (let z = -3.2; z <= 3.2; z += 0.65) {
  box("Volga bridge plank", [120, 0.08, z], [4.4, 0.18, 0.52], churchWood);
}
box("bridge left rail", [117.9, 0.72, 0], [0.16, 1.1, 7.2], churchWood);
box("bridge right rail", [122.1, 0.72, 0], [0.16, 1.1, 7.2], churchWood);
for (const z of [-3.0, -1.0, 1.0, 3.0]) {
  box("bridge rail post", [117.9, 0.62, z], [0.22, 1.25, 0.22], mat.dark);
  box("bridge rail post", [122.1, 0.62, z], [0.22, 1.25, 0.22], mat.dark);
}

for (const [x, z, scale] of [
  [105, -22, 1.2], [110, -20, 1.0], [116, -22, 1.25], [125, -21, 1.1], [133, -22, 1.2],
  [105, -12, 1.1], [136, -14, 1.2], [105, 8, 1.2], [135, 9, 1.0],
  [104, 19, 1.15], [111, 22, 1.1], [128, 22, 1.25], [136, 19, 1.15]
]) cemeteryPine(x, z, scale);
birchTree(108.0, 10.0);
birchTree(130.0, 16.0);
birchTree(114.0, -14.0);

const hidingRock = box("item hiding rock", [108.0, 0.2, 14.5], [1.45, 0.65, 1.15], cemeteryStoneDark);
hidingRock.rotation.y = 0.35;
const hollowTrunk = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.62, 1.9, 7, 1, true), churchWood);
hollowTrunk.position.set(132.0, 0.78, 12.0);
scene.add(hollowTrunk);
box("hollow trunk opening", [132.0, 0.82, 12.52], [0.55, 0.75, 0.08], mat.dark, false);

treasureChest = box("Volga treasure chest", [127.0, 0.48, -17.0], [1.8, 0.85, 1.1], churchWood);
treasureChest.userData = { kind: "treasureChest" };
treasureChestLid = box("Volga treasure chest lid", [127.0, 0.98, -17.0], [1.9, 0.3, 1.18], churchGold);
treasureChestLid.userData = { kind: "treasureChest" };
box("chest lock", [127.0, 0.68, -16.42], [0.28, 0.34, 0.08], mat.metal);

box("abandoned fire ring", [112.5, 0.08, -8.0], [1.4, 0.16, 1.4], cemeteryStoneDark, false);
for (const rot of [-0.65, 0.65]) {
  const fireLog = box("cold campfire log", [112.5, 0.25, -8.0], [1.25, 0.18, 0.18], churchWood);
  fireLog.rotation.y = rot;
}
const whistleStump = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.62, 1.0, 7), churchWood);
whistleStump.position.set(107.0, 0.35, -18.0);
scene.add(whistleStump);

for (const [x, z] of [[108, 18], [115, 16], [126, 17], [132, 14], [109, -15], [119, -18], [131, -10]]) {
  for (let i = 0; i < 4; i++) {
    const fern = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.55, 4), new THREE.MeshLambertMaterial({ color: 0x284530 }));
    fern.position.set(x + (i - 1.5) * 0.28, 0.16, z + (i % 2) * 0.24);
    scene.add(fern);
  }
}

bear = new THREE.Group();
const bearFur = new THREE.MeshLambertMaterial({ color: 0x3f2b20 });
const bearBody = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.15, 2.5), bearFur);
bearBody.position.y = 1.05;
const bearHead = new THREE.Mesh(new THREE.BoxGeometry(1.25, 1.1, 1.05), bearFur);
bearHead.position.set(0, 1.35, -1.55);
bear.add(bearBody, bearHead);
for (const x of [-0.62, 0.62]) for (const z of [-0.72, 0.72]) {
  const leg = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.85, 0.45), bearFur);
  leg.position.set(x, 0.45, z);
  bear.add(leg);
}
for (const x of [-0.38, 0.38]) {
  const ear = new THREE.Mesh(new THREE.SphereGeometry(0.2, 6, 4), bearFur);
  ear.position.set(x, 1.9, -1.62);
  bear.add(ear);
}
bear.position.set(112, 0, -9);
scene.add(bear);

colliders.push(
  new THREE.Box3(new THREE.Vector3(102.0, 0, -3.1), new THREE.Vector3(117.65, 1.5, 3.1)),
  new THREE.Box3(new THREE.Vector3(122.35, 0, -3.1), new THREE.Vector3(138.0, 1.5, 3.1)),
  new THREE.Box3(new THREE.Vector3(107.1, 0, 13.8), new THREE.Vector3(108.9, 1.0, 15.2)),
  new THREE.Box3(new THREE.Vector3(126.0, 0, -17.7), new THREE.Vector3(128.0, 1.2, -16.3))
);

// Level 5: a remote railway station beneath the Ural Mountains.
const stationWall = new THREE.MeshLambertMaterial({ color: 0x6a5140 });
const stationTrim = new THREE.MeshLambertMaterial({ color: 0x293f42 });
const trainRed = new THREE.MeshLambertMaterial({ color: 0x5c2525 });
const stationRoof = new THREE.MeshLambertMaterial({ color: 0x482e2e });
box("Ural station snow", [180, -0.18, -12], [40, 0.12, 74], mat.snow, false);
box("station floor", [180, -0.04, -5], [20, 0.12, 12], mat.floor, false);
box("station back wall left", [174.4, 2.6, -11], [8.8, 5.2, 0.35], stationWall);
box("station back wall right", [185.6, 2.6, -11], [8.8, 5.2, 0.35], stationWall);
box("station rear lintel", [180, 4.25, -11], [2.4, 1.9, 0.35], stationWall);
box("station front wall left", [174.4, 2.6, 1], [8.8, 5.2, 0.35], stationWall);
box("station front wall right", [185.6, 2.6, 1], [8.8, 5.2, 0.35], stationWall);
box("station entrance lintel", [180, 4.25, 1], [2.4, 1.9, 0.35], stationWall);
box("station left wall", [170, 2.6, -5], [0.35, 5.2, 12.4], stationWall);
box("station right wall", [190, 2.6, -5], [0.35, 5.2, 12.4], stationWall);
box("station roof left", [175.1, 6.8, -5], [11.2, 0.42, 13.8], stationRoof).rotation.z = 0.28;
box("station roof right", [184.9, 6.8, -5], [11.2, 0.42, 13.8], stationRoof).rotation.z = -0.28;
box("station roof snow left", [175.0, 7.02, -5], [11.0, 0.14, 13.6], mat.snow, false).rotation.z = 0.28;
box("station roof snow right", [185.0, 7.02, -5], [11.0, 0.14, 13.6], mat.snow, false).rotation.z = -0.28;
box("station roof ridge", [180, 8.35, -5], [0.32, 0.28, 14.2], stationTrim);

const stationGableShape = new THREE.Shape();
stationGableShape.moveTo(-10, 0);
stationGableShape.lineTo(10, 0);
stationGableShape.lineTo(0, 3.2);
stationGableShape.closePath();
const stationGableMaterial = new THREE.MeshLambertMaterial({ color: 0x6a5140, side: THREE.DoubleSide });
const stationFrontGable = new THREE.Mesh(new THREE.ShapeGeometry(stationGableShape), stationGableMaterial);
stationFrontGable.position.set(180, 5.15, 1.2);
const stationBackGable = stationFrontGable.clone();
stationBackGable.position.z = -11.2;
scene.add(stationFrontGable, stationBackGable);
box("front gable vertical trim", [180, 6.45, 1.26], [0.18, 2.55, 0.12], stationTrim);
box("front gable lower trim", [180, 5.25, 1.26], [19.5, 0.18, 0.12], stationTrim);
box("station chimney", [186.6, 8.05, -7.4], [1.0, 3.2, 1.0], cemeteryStoneDark);
box("station chimney cap", [186.6, 9.72, -7.4], [1.3, 0.2, 1.3], mat.dark);

for (const x of [173.5, 176.0, 184.0, 186.5]) {
  box("station window frame", [x, 2.8, 0.78], [1.4, 1.65, 0.12], stationTrim);
  box("station glowing window", [x, 2.8, 0.68], [1.05, 1.3, 0.08], mat.lantern, false);
}
box("station entrance step", [180, 0.08, 1.55], [3.2, 0.18, 1.25], cemeteryStone, false);
box("station left open door", [178.9, 1.55, 0.35], [0.18, 3.1, 1.5], stationTrim).rotation.y = -0.35;
box("station right open door", [181.1, 1.55, 0.35], [0.18, 3.1, 1.5], stationTrim).rotation.y = 0.35;
box("station name board", [180, 4.78, 0.62], [6.2, 0.78, 0.16], stationTrim);
box("station rear step", [180, 0.08, -11.55], [3.2, 0.18, 1.25], cemeteryStone, false);
box("station rear door left", [178.9, 1.55, -10.35], [0.18, 3.1, 1.5], stationTrim).rotation.y = 0.35;
box("station rear door right", [181.1, 1.55, -10.35], [0.18, 3.1, 1.5], stationTrim).rotation.y = -0.35;
box("station platform", [180, 0.02, 5.0], [30, 0.22, 7.0], new THREE.MeshLambertMaterial({ color: 0x77736a }), false);
box("platform canopy", [180, 4.0, 4.6], [28, 0.3, 4.2], mat.roof);
for (const x of [167, 173.5, 180, 186.5, 193]) {
  box("platform canopy post", [x, 1.95, 4.6], [0.18, 3.9, 0.18], stationTrim);
}

box("outdoor bench seat", [173.8, 0.55, 4.8], [3.2, 0.22, 0.75], churchWood);
box("outdoor bench back", [173.8, 1.05, 5.12], [3.2, 0.75, 0.18], churchWood);
box("outdoor bench leg left", [172.7, 0.27, 4.8], [0.2, 0.5, 0.5], mat.dark);
box("outdoor bench leg right", [174.9, 0.27, 4.8], [0.2, 0.5, 0.5], mat.dark);
box("platform office crate", [188.0, 0.48, 2.8], [1.5, 0.85, 1.2], churchWood);
box("station platform sign post", [166.5, 1.4, 5.5], [0.18, 2.8, 0.18], stationTrim);
box("station platform sign", [166.5, 2.55, 5.5], [0.18, 0.85, 3.5], stationWall);

box("waiting room table", [180.5, 0.7, -5.8], [2.2, 1.15, 1.25], churchWood);
box("telegraph desk", [176.0, 0.62, -4.0], [2.3, 1.05, 1.2], churchWood);
box("ticket counter", [173.0, 0.72, -6.5], [2.0, 1.2, 1.2], stationTrim);
box("station kitchen table", [186.5, 0.68, -7.8], [2.2, 1.15, 1.3], churchWood);
box("station clock shelf", [181.5, 1.08, -9.8], [1.6, 0.16, 0.65], churchWood);
box("waiting room bench seat", [174.2, 0.52, -8.8], [4.2, 0.22, 0.7], churchWood);
box("waiting room bench back", [174.2, 1.02, -9.1], [4.2, 0.82, 0.18], churchWood);
box("waiting room stove", [188.0, 0.92, -3.6], [1.1, 1.7, 1.0], mat.metal);
const stationStovePipe = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 3.4, 7), mat.metal);
stationStovePipe.position.set(188.0, 3.1, -3.6);
scene.add(stationStovePipe);
for (const [x, z, scale] of [[172.0, -2.2, 1.0], [184.8, -2.8, 0.8], [187.0, -5.2, 1.1]]) {
  box("station luggage crate", [x, 0.35 * scale, z], [1.2 * scale, 0.7 * scale, 0.9 * scale], churchWood);
  box("station luggage strap", [x, 0.72 * scale, z], [0.18, 0.08, 0.94 * scale], mat.metal);
}
const stationClock = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.12, 16), churchGold);
stationClock.position.set(181.5, 2.35, -10.72);
stationClock.rotation.x = Math.PI / 2;
scene.add(stationClock);

for (const z of [9.5, 12.0]) box("railway rail", [180, 0.02, z], [38, 0.14, 0.16], mat.metal, false);
for (let x = 162; x <= 198; x += 1.1) box("railway sleeper", [x, -0.03, 10.75], [0.22, 0.12, 3.5], churchWood, false);
box("locomotive body", [189.0, 1.55, 10.75], [8.0, 2.6, 2.5], trainRed);
const locomotiveBoiler = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 5.0, 8), mat.dark);
locomotiveBoiler.position.set(186.2, 1.75, 10.75);
locomotiveBoiler.rotation.z = Math.PI / 2;
scene.add(locomotiveBoiler);
box("locomotive cab", [192.0, 2.1, 10.75], [2.0, 3.7, 2.7], stationTrim);
for (const x of [185.0, 188.0, 191.0, 193.0]) {
  const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.58, 0.22, 10), mat.dark);
  wheel.position.set(x, 0.58, 9.42);
  wheel.rotation.x = Math.PI / 2;
  scene.add(wheel);
}

for (const [x, height, radius] of [[160, 13, 8], [168, 17, 10], [192, 15, 9], [200, 18, 11]]) {
  const mountain = new THREE.Mesh(new THREE.ConeGeometry(radius, height, 7), new THREE.MeshLambertMaterial({ color: 0x596268 }));
  mountain.position.set(x, height / 2 - 0.5, -27);
  scene.add(mountain);
  const snowCap = new THREE.Mesh(new THREE.ConeGeometry(radius * 0.48, height * 0.32, 7), mat.snow);
  snowCap.position.set(x, height * 0.82 - 0.5, -27);
  scene.add(snowCap);
}

for (const [x, z, scale] of [
  [163.5, 15.0, 1.15], [167.0, 17.8, 1.0], [170.5, 15.6, 1.25], [173.5, 18.7, 1.05],
  [177.5, 21.0, 1.2], [182.5, 21.5, 1.15],
  [187.0, 18.5, 1.1], [190.5, 15.8, 1.25], [194.0, 18.0, 1.0], [197.0, 15.0, 1.2]
]) cemeteryPine(x, z, scale);

trailSegment("Ural mountain approach", [180, -0.09, -19.0], [2.4, 0.04, 17.0]);
trailSegment("Ural mountain pass", [180, -0.085, -29.5], [2.1, 0.04, 8.0]);
trailSegment("Ural camp trail", [178.2, -0.08, -35.0], [2.0, 0.04, 8.0], -0.38);
box("mountain camp clearing", [180, -0.12, -40.0], [31, 0.1, 17], forestGround, false);

const tentCloth = new THREE.MeshLambertMaterial({ color: 0x596652 });
box("camp tent floor", [173.8, 0.05, -40.5], [4.6, 0.12, 4.8], churchWood, false);
box("camp tent left side", [172.75, 1.55, -40.5], [3.5, 0.18, 5.0], tentCloth).rotation.z = 0.92;
box("camp tent right side", [174.85, 1.55, -40.5], [3.5, 0.18, 5.0], tentCloth).rotation.z = -0.92;
box("camp tent back", [173.8, 1.25, -42.95], [4.0, 2.5, 0.15], tentCloth);
box("tent ridge pole", [173.8, 2.65, -40.5], [0.14, 0.14, 5.2], churchWood);
box("tent bedroll", [173.8, 0.25, -41.2], [2.5, 0.28, 1.2], churchRed);

for (let i = 0; i < 9; i++) {
  const angle = (i / 9) * Math.PI * 2;
  box("burnt campfire stone", [182.5 + Math.cos(angle) * 0.82, 0.08, -39.0 + Math.sin(angle) * 0.82], [0.38, 0.2, 0.3], cemeteryStoneDark, false).rotation.y = angle;
}
for (const rotation of [-0.72, 0.72, 0]) {
  const burntLog = box("burnt campfire log", [182.5, 0.22, -39.0], [1.45, 0.2, 0.2], mat.dark);
  burntLog.rotation.y = rotation;
}
box("camp supply crate", [186.0, 0.48, -43.0], [1.5, 0.9, 1.2], churchWood);
box("camp chopping block", [184.8, 0.38, -35.5], [0.85, 0.75, 0.85], churchWood);

for (const [x, z, height, radius] of [
  [162, -34, 14, 8], [160, -43, 16, 9], [166, -49, 13, 8],
  [198, -34, 15, 8], [200, -43, 17, 10], [194, -49, 14, 8],
  [174, -52, 16, 9], [186, -52, 18, 10]
]) {
  const campMountain = new THREE.Mesh(new THREE.ConeGeometry(radius, height, 7), new THREE.MeshLambertMaterial({ color: 0x4e595f }));
  campMountain.position.set(x, height / 2 - 0.5, z);
  scene.add(campMountain);
  const campSnowCap = new THREE.Mesh(new THREE.ConeGeometry(radius * 0.46, height * 0.3, 7), mat.snow);
  campSnowCap.position.set(x, height * 0.84 - 0.5, z);
  scene.add(campSnowCap);
}
for (const x of [166, 194]) {
  const stationLamp = new THREE.PointLight(0xffaa55, 0.9, 9);
  stationLamp.position.set(x, 3.0, 5.0);
  scene.add(stationLamp);
  box("station platform lantern", [x, 3.0, 5.0], [0.3, 0.42, 0.3], mat.lantern, false);
}

colliders.push(
  new THREE.Box3(new THREE.Vector3(169.7, 0, -11.3), new THREE.Vector3(178.7, 5.8, -10.7)),
  new THREE.Box3(new THREE.Vector3(181.3, 0, -11.3), new THREE.Vector3(190.3, 5.8, -10.7)),
  new THREE.Box3(new THREE.Vector3(169.7, 0, 0.7), new THREE.Vector3(178.7, 5.8, 1.3)),
  new THREE.Box3(new THREE.Vector3(181.3, 0, 0.7), new THREE.Vector3(190.3, 5.8, 1.3)),
  new THREE.Box3(new THREE.Vector3(169.7, 0, -11.3), new THREE.Vector3(170.3, 5.8, 1.3)),
  new THREE.Box3(new THREE.Vector3(189.7, 0, -11.3), new THREE.Vector3(190.3, 5.8, 1.3)),
  new THREE.Box3(new THREE.Vector3(185.0, 0, 9.2), new THREE.Vector3(193.2, 3.9, 12.3)),
  new THREE.Box3(new THREE.Vector3(158.5, 0, -32.5), new THREE.Vector3(176.5, 12.0, -23.5)),
  new THREE.Box3(new THREE.Vector3(183.5, 0, -32.5), new THREE.Vector3(201.5, 12.0, -23.5)),
  new THREE.Box3(new THREE.Vector3(158.5, 0, -51.5), new THREE.Vector3(163.5, 14.0, -31.5)),
  new THREE.Box3(new THREE.Vector3(196.5, 0, -51.5), new THREE.Vector3(201.5, 14.0, -31.5)),
  new THREE.Box3(new THREE.Vector3(158.5, 0, -53.0), new THREE.Vector3(201.5, 14.0, -48.0))
);

// Level 6: four connected cars on a night train.
const trainInterior = new THREE.MeshLambertMaterial({ color: 0x6a5039 });
const trainUpholstery = new THREE.MeshLambertMaterial({ color: 0x344b4c });
const trainWindow = new THREE.MeshBasicMaterial({ color: 0x17232c, transparent: true, opacity: 0.42 });
box("moving train snowfield", [240, -0.45, 10.5], [48, 0.12, 120], mat.snow, false);

for (const carZ of [-15.75, -5.25, 5.25, 15.75, 26.25, 36.75]) {
  box("train car floor", [240, -0.03, carZ], [5.6, 0.16, 10.0], churchWood, false);
  box("train car roof", [240, 3.72, carZ], [5.9, 0.28, 10.2], stationRoof);
  for (const sideX of [237.25, 242.75]) {
    box("train lower side wall", [sideX, 0.72, carZ], [0.2, 1.45, 10.0], trainInterior);
    box("train upper side wall", [sideX, 3.22, carZ], [0.2, 1.0, 10.0], trainInterior);
    for (const offset of [-4.8, -2.4, 0, 2.4, 4.8]) {
      box("train window post", [sideX, 2.0, carZ + offset], [0.2, 1.5, 0.16], stationTrim);
    }
    for (const offset of [-3.6, -1.2, 1.2, 3.6]) {
      box("train window glass", [sideX, 2.0, carZ + offset], [0.08, 1.28, 2.05], trainWindow, false);
    }
  }
  const carriageLight = new THREE.PointLight(0xffbd72, 0.9, 8);
  carriageLight.position.set(240, 3.25, carZ);
  scene.add(carriageLight);
  box("carriage ceiling lamp", [240, 3.5, carZ], [0.75, 0.12, 0.3], mat.lantern, false);
}

box("train rear wall left", [238.25, 1.85, -20.8], [2.2, 3.7, 0.24], trainInterior);
box("train rear wall right", [241.75, 1.85, -20.8], [2.2, 3.7, 0.24], trainInterior);
box("locomotive door lintel", [240, 3.35, -20.8], [1.3, 0.7, 0.24], trainInterior);
box("train front wall", [240, 1.85, 41.8], [5.7, 3.7, 0.24], trainInterior);
for (const partitionZ of [-10.5, 0, 10.5, 21.0, 31.5]) {
  box("car partition left", [238.35, 1.85, partitionZ], [2.3, 3.7, 0.22], trainInterior);
  box("car partition right", [241.65, 1.85, partitionZ], [2.3, 3.7, 0.22], trainInterior);
  box("car partition lintel", [240, 3.35, partitionZ], [1.0, 0.7, 0.22], trainInterior);
  box("car connector threshold", [240, 0.05, partitionZ], [1.15, 0.14, 0.7], mat.metal, false);
}

secretTrainDoor = box("secret train door", [240, 1.45, 31.42], [1.0, 2.8, 0.16], trainInterior);
secretTrainDoor.userData = { kind: "secretTrainDoor" };
locomotiveDoor = box("locomotive cab door", [240, 1.45, -20.68], [1.18, 2.8, 0.16], stationTrim);
locomotiveDoor.userData = { kind: "locomotiveDoor" };

// Sleeper car.
for (const [x, z] of [[238.3, 13.6], [241.7, 13.6], [238.3, 18.0], [241.7, 18.0]]) {
  box("train lower bunk", [x, 0.62, z], [1.35, 0.28, 3.1], trainUpholstery);
  box("train upper bunk", [x, 2.25, z], [1.35, 0.25, 3.1], trainUpholstery);
  box("bunk ladder", [x + (x < 240 ? 0.52 : -0.52), 1.42, z], [0.12, 1.5, 0.12], mat.metal);
}

// Passenger car.
for (const z of [2.2, 5.2, 8.2]) {
  for (const x of [238.5, 241.5]) {
    box("passenger seat", [x, 0.72, z], [1.2, 0.55, 1.3], trainUpholstery);
    box("passenger seat back", [x, 1.3, z + 0.5], [1.2, 1.0, 0.22], trainUpholstery);
  }
}

// Dining car.
for (const [x, z] of [[241.6, -7.1], [238.4, -3.2], [241.6, -1.4]]) {
  box("window-side dining table", [x, 0.9, z], [1.35, 0.18, 1.25], churchWood);
  box("dining table leg", [x, 0.45, z], [0.2, 0.8, 0.2], mat.metal);
  const seatX = x < 240 ? 239.2 : 240.8;
  box("dining stool", [seatX, 0.42, z], [0.55, 0.48, 0.55], trainUpholstery);
}

box("wallet windowsill", [242.3, 1.52, 4.05], [0.65, 0.12, 1.3], churchWood);

// Baggage and conductor car.
for (const [x, z, scale] of [[238.5, -18.0, 1.0], [241.3, -16.0, 0.9], [238.6, -13.2, 0.8], [241.2, -12.3, 0.75]]) {
  box("train cargo crate", [x, 0.45 * scale, z], [1.25 * scale, 0.9 * scale, 1.1 * scale], churchWood);
  box("cargo strap", [x, 0.92 * scale, z], [0.16, 0.08, 1.15 * scale], mat.metal);
}
box("conductor desk", [241.0, 0.62, -11.7], [1.5, 1.0, 1.1], churchWood);
box("baggage rack", [238.6, 1.03, -13.0], [1.35, 0.12, 1.35], mat.metal);
box("rear whistle shelf", [241.2, 0.78, -18.6], [1.1, 0.12, 0.65], churchWood);

// Fifth-car vestibule leading to the disguised door.
box("fifth car bench", [238.3, 0.58, 25.0], [1.25, 0.48, 4.2], trainUpholstery);
box("fifth car bench back", [237.75, 1.18, 25.0], [0.2, 1.0, 4.2], trainUpholstery);
box("fifth car parcel rack", [241.8, 2.75, 26.2], [1.5, 0.15, 5.0], mat.metal);
for (const z of [23.8, 26.2, 28.6]) box("vestibule coat hook", [242.45, 2.0, z], [0.18, 0.18, 0.18], churchGold);
box("secret door brass knob", [240.32, 1.42, 31.3], [0.12, 0.12, 0.12], churchGold, false);

// Sixth-car secret room.
box("secret room couch base", [238.35, 0.58, 36.8], [1.35, 0.58, 3.8], new THREE.MeshLambertMaterial({ color: 0x59393b }));
box("secret room couch back", [237.78, 1.25, 36.8], [0.2, 1.1, 3.8], new THREE.MeshLambertMaterial({ color: 0x59393b }));
box("secret room couch cushion north", [238.38, 0.94, 35.95], [1.2, 0.22, 1.45], churchRed);
box("secret room couch cushion south", [238.38, 0.94, 37.65], [1.2, 0.22, 1.45], churchRed);

box("secret room bookcase back", [242.18, 1.48, 38.8], [0.2, 2.8, 3.3], mat.dark);
for (const shelfY of [0.25, 0.95, 1.65, 2.35]) box("secret bookcase shelf", [241.72, shelfY, 38.8], [0.85, 0.14, 3.35], churchWood);
const secretBookColors = [0x6b302b, 0x314e3b, 0x3b4566, 0x8a6a35, 0x553344];
for (let shelf = 0; shelf < 3; shelf++) {
  for (let book = 0; book < 7; book++) {
    const secretBook = box(
      "secret room shelf book",
      [241.68, 0.46 + shelf * 0.7, 37.55 + book * 0.4],
      [0.48, 0.42 + (book % 3) * 0.06, 0.24],
      new THREE.MeshLambertMaterial({ color: secretBookColors[(book + shelf) % secretBookColors.length] })
    );
    secretBook.rotation.x = 0.04 * (book % 2);
  }
}

box("secret room writing desk", [241.15, 0.68, 34.15], [1.65, 1.05, 1.25], churchWood);
box("typewriter base", [241.15, 1.28, 34.15], [0.82, 0.24, 0.58], mat.metal);
box("typewriter keys", [241.15, 1.43, 34.0], [0.7, 0.08, 0.24], churchPlaster, false);
box("typewriter paper", [241.15, 1.72, 34.38], [0.62, 0.52, 0.05], new THREE.MeshLambertMaterial({ color: 0xd5c9a4 }), false).rotation.x = -0.18;
trainSafe = box("secret room safe", [240, 0.88, 40.55], [1.65, 1.75, 1.15], mat.metal);
trainSafe.userData = { kind: "trainSafe" };
trainSafeDoor = box("secret room safe door", [240, 0.9, 39.94], [1.48, 1.55, 0.12], cemeteryStoneDark);
trainSafeDoor.userData = { kind: "trainSafe" };
const safeDial = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.1, 12), churchGold);
safeDial.position.set(240, 0.98, 39.83);
safeDial.rotation.x = Math.PI / 2;
scene.add(safeDial);
box("safe handle", [240.45, 0.7, 39.82], [0.12, 0.48, 0.12], churchGold);

// Walkable locomotive cab beyond the sixth car.
box("locomotive cab floor", [240, -0.03, -25.0], [5.6, 0.16, 8.3], mat.metal, false);
box("locomotive cab roof", [240, 3.72, -25.0], [5.9, 0.28, 8.5], stationRoof);
for (const sideX of [237.25, 242.75]) {
  box("locomotive lower side", [sideX, 0.72, -25.0], [0.2, 1.45, 8.3], trainInterior);
  box("locomotive upper side", [sideX, 3.22, -25.0], [0.2, 1.0, 8.3], trainInterior);
  box("locomotive side window frame", [sideX, 2.05, -25.2], [0.22, 1.55, 2.5], stationTrim);
  box("locomotive side window", [sideX, 2.05, -25.2], [0.08, 1.25, 2.1], trainWindow, false);
}
box("locomotive front bulkhead", [240, 1.85, -29.2], [5.7, 3.7, 0.25], trainInterior);
for (const x of [238.65, 241.35]) {
  box("locomotive front window frame", [x, 2.45, -29.02], [1.7, 1.5, 0.12], stationTrim);
  box("locomotive front window", [x, 2.45, -28.94], [1.35, 1.15, 0.08], trainWindow, false);
}
box("locomotive control console", [240, 0.92, -27.35], [3.8, 0.65, 1.25], mat.metal);
box("locomotive console top", [240, 1.28, -27.35], [3.9, 0.14, 1.35], stationTrim);
for (const x of [238.9, 239.65, 240.4, 241.15]) {
  const gauge = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.08, 12), churchPlaster);
  gauge.position.set(x, 1.48, -27.7);
  gauge.rotation.x = Math.PI / 2;
  scene.add(gauge);
}
for (const x of [239.1, 240.0, 240.9]) {
  const lever = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.055, 0.85, 6), churchGold);
  lever.position.set(x, 1.72, -26.95);
  lever.rotation.z = -0.35;
  scene.add(lever);
}
box("locomotive firebox", [241.75, 1.0, -22.25], [1.25, 1.8, 1.2], mat.dark);
box("locomotive firebox glow", [241.1, 0.88, -22.25], [0.08, 0.72, 0.65], mat.ember, false);
const cabLight = new THREE.PointLight(0xff9b43, 1.2, 7);
cabLight.position.set(240, 2.8, -24.5);
scene.add(cabLight);

function addMovingTrainTree(x, z, scale) {
  const tree = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.13 * scale, 0.2 * scale, 2.8 * scale, 5), churchWood);
  trunk.position.y = 1.2 * scale;
  const crown = new THREE.Mesh(new THREE.ConeGeometry(0.95 * scale, 3.5 * scale, 6), new THREE.MeshLambertMaterial({ color: 0x142b22 }));
  crown.position.y = 3.25 * scale;
  tree.add(trunk, crown);
  tree.position.set(x, -0.25, z);
  scene.add(tree);
  movingTrainScenery.push(tree);
}

for (let i = 0; i < 24; i++) {
  const side = i % 2 === 0 ? -1 : 1;
  addMovingTrainTree(240 + side * (7 + (i % 4) * 1.7), -48 + i * 4.2, 0.85 + (i % 3) * 0.18);
}

colliders.push(
  new THREE.Box3(new THREE.Vector3(236.9, 0, -29.5), new THREE.Vector3(237.5, 4.0, 42.0)),
  new THREE.Box3(new THREE.Vector3(242.5, 0, -29.5), new THREE.Vector3(243.1, 4.0, 42.0)),
  new THREE.Box3(new THREE.Vector3(236.9, 0, -21.1), new THREE.Vector3(239.35, 4.0, -20.5)),
  new THREE.Box3(new THREE.Vector3(240.65, 0, -21.1), new THREE.Vector3(243.1, 4.0, -20.5)),
  new THREE.Box3(new THREE.Vector3(236.9, 0, 41.5), new THREE.Vector3(243.1, 4.0, 42.1)),
  new THREE.Box3(new THREE.Vector3(236.9, 0, -29.5), new THREE.Vector3(243.1, 4.0, -28.9)),
  new THREE.Box3(new THREE.Vector3(238.0, 0, -28.05), new THREE.Vector3(242.0, 1.45, -26.65)),
  new THREE.Box3(new THREE.Vector3(241.05, 0, -22.95), new THREE.Vector3(242.45, 2.0, -21.55))
);
colliders.push(new THREE.Box3(new THREE.Vector3(239.1, 0, 39.85), new THREE.Vector3(240.9, 1.9, 41.2)));
for (const partitionZ of [-10.5, 0, 10.5, 21.0, 31.5]) {
  colliders.push(
    new THREE.Box3(new THREE.Vector3(236.9, 0, partitionZ - 0.3), new THREE.Vector3(239.45, 4.0, partitionZ + 0.3)),
    new THREE.Box3(new THREE.Vector3(240.55, 0, partitionZ - 0.3), new THREE.Vector3(243.1, 4.0, partitionZ + 0.3))
  );
}

// Level 7: Red Square and the locked doors of St. Basil's Cathedral.
const squareBrick = new THREE.MeshLambertMaterial({ color: 0x843b35 });
const squareStone = new THREE.MeshLambertMaterial({ color: 0x827a70 });
const domeGreen = new THREE.MeshLambertMaterial({ color: 0x2f6656 });
const domeBlue = new THREE.MeshLambertMaterial({ color: 0x315d85 });
const domeRed = new THREE.MeshLambertMaterial({ color: 0x8d393c });
const ornamentWhite = new THREE.MeshLambertMaterial({ color: 0xd8d0ba });
const ornamentTurquoise = new THREE.MeshLambertMaterial({ color: 0x3f7b79 });
const ornamentYellow = new THREE.MeshLambertMaterial({ color: 0xc59b3b });
box("Red Square plaza", [300, -0.16, 3], [44, 0.12, 54], new THREE.MeshLambertMaterial({ color: 0x6f6961 }), false);
for (let x = 280; x <= 320; x += 4) {
  box("Red Square paving line", [x, -0.08, 3], [0.06, 0.04, 52], squareStone, false);
}
for (let z = -20; z <= 28; z += 4) {
  box("Red Square paving line", [300, -0.075, z], [42, 0.04, 0.06], squareStone, false);
}

box("cathedral floor", [300, -0.04, -14], [18, 0.12, 15], churchWood, false);
box("cathedral back wall", [300, 3.0, -21.5], [18.4, 6.0, 0.4], squareBrick);
box("cathedral left wall", [291.0, 3.0, -14], [0.4, 6.0, 15.4], squareBrick);
box("cathedral right wall", [309.0, 3.0, -14], [0.4, 6.0, 15.4], squareBrick);
box("cathedral front wall left", [294.6, 3.0, -6.5], [7.2, 6.0, 0.4], squareBrick);
box("cathedral front wall right", [305.4, 3.0, -6.5], [7.2, 6.0, 0.4], squareBrick);
box("cathedral entrance lintel", [300, 4.85, -6.5], [3.6, 2.3, 0.4], squareBrick);
box("cathedral dark entry", [300, 1.8, -6.68], [3.4, 3.6, 0.12], mat.dark, false);
cathedralDoors = [
  box("cathedral left door", [299.1, 1.75, -6.28], [1.65, 3.5, 0.18], churchWood),
  box("cathedral right door", [300.9, 1.75, -6.28], [1.65, 3.5, 0.18], churchWood),
];
for (const door of cathedralDoors) door.userData = { kind: "cathedralDoor" };
box("cathedral entrance step lower", [300, 0.08, -5.55], [6.0, 0.18, 1.5], squareStone, false);
box("cathedral entrance step upper", [300, 0.16, -6.05], [4.8, 0.18, 0.8], squareStone, false);

const centralTower = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.7, 10.0, 8), squareBrick);
centralTower.position.set(300, 9.0, -15.2);
scene.add(centralTower);
const centralDome = new THREE.Mesh(new THREE.SphereGeometry(2.3, 9, 7), churchGold);
centralDome.position.set(300, 14.3, -15.2);
centralDome.scale.y = 1.25;
scene.add(centralDome);
for (const [y, radius, material] of [[13.45, 1.95, domeRed], [14.15, 2.25, domeBlue], [14.85, 1.95, ornamentTurquoise]]) {
  const domeBand = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.13, 6, 16), material);
  domeBand.position.set(300, y, -15.2);
  domeBand.rotation.x = Math.PI / 2;
  scene.add(domeBand);
}
const centralSpire = new THREE.Mesh(new THREE.ConeGeometry(0.65, 3.0, 8), churchGold);
centralSpire.position.set(300, 17.0, -15.2);
scene.add(centralSpire);

const basilTowers = [
  [294.0, -10.5, domeGreen], [306.0, -10.5, domeBlue],
  [294.0, -18.0, domeRed], [306.0, -18.0, churchGold],
];
for (const [x, z, domeMaterial] of basilTowers) {
  const tower = new THREE.Mesh(new THREE.CylinderGeometry(1.45, 1.85, 7.2, 8), squareBrick);
  tower.position.set(x, 7.1, z);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(1.55, 8, 6), domeMaterial);
  dome.position.set(x, 11.0, z);
  dome.scale.y = 1.28;
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.4, 1.8, 7), churchGold);
  tip.position.set(x, 12.9, z);
  scene.add(tower, dome, tip);
  const towerBand = new THREE.Mesh(new THREE.CylinderGeometry(1.52, 1.52, 0.18, 8), ornamentWhite);
  towerBand.position.set(x, 9.55, z);
  scene.add(towerBand);
  for (let band = 0; band < 3; band++) {
    const colors = [ornamentYellow, ornamentTurquoise, ornamentWhite];
    const domeBand = new THREE.Mesh(new THREE.TorusGeometry(1.28 - band * 0.08, 0.1, 6, 14), colors[(band + (x > 300 ? 1 : 0)) % colors.length]);
    domeBand.position.set(x, 10.45 + band * 0.58, z);
    domeBand.rotation.x = Math.PI / 2;
    scene.add(domeBand);
  }
  box("cathedral tower cross vertical", [x, 14.0, z], [0.12, 0.8, 0.12], churchGold);
  box("cathedral tower cross arm", [x, 14.12, z], [0.58, 0.1, 0.12], churchGold);
}

for (const x of [293.0, 300.0, 307.0]) {
  box("cathedral arched window", [x, 4.2, -6.25], [1.1, 1.8, 0.12], churchGold);
  box("cathedral window dark", [x, 4.2, -6.16], [0.72, 1.42, 0.08], mat.dark, false);
}
for (const x of [292.4, 295.2, 304.8, 307.6]) {
  box("cathedral white facade panel", [x, 2.0, -6.22], [1.35, 2.6, 0.12], ornamentWhite);
  box("cathedral colored inset", [x, 2.0, -6.12], [0.78, 1.95, 0.08], x < 300 ? ornamentTurquoise : ornamentYellow, false);
}
box("cathedral entrance gold frame top", [300, 3.62, -6.08], [3.7, 0.22, 0.15], churchGold);
box("cathedral entrance gold frame left", [298.18, 1.85, -6.08], [0.22, 3.65, 0.15], churchGold);
box("cathedral entrance gold frame right", [301.82, 1.85, -6.08], [0.22, 3.65, 0.15], churchGold);

// Plaza landmarks for the ten-piece search route.
const squareFountain = new THREE.Mesh(new THREE.CylinderGeometry(2.1, 2.4, 0.55, 12), squareStone);
squareFountain.position.set(289, 0.12, 17);
scene.add(squareFountain);
box("square bench seat", [311.5, 0.48, 15.0], [3.6, 0.22, 0.7], churchWood);
box("square bench back", [311.5, 0.95, 15.3], [3.6, 0.72, 0.18], churchWood);
box("wax seal stone post", [315.0, 0.52, 3.0], [0.75, 1.0, 0.75], squareStone);
box("prayer ribbon snowbank", [292.0, 0.18, -1.0], [2.2, 0.45, 1.4], mat.snow, false);
box("Red Square market stall", [307.5, 0.45, 7.5], [3.0, 0.8, 1.8], churchWood);
box("market stall canopy", [307.5, 2.25, 7.5], [3.6, 0.25, 2.2], churchRed);
for (const x of [306.2, 308.8]) box("market stall post", [x, 1.25, 7.5], [0.16, 2.5, 0.16], churchWood);
box("cathedral plan kiosk", [318.0, 0.62, -8.0], [1.8, 1.05, 1.4], stationTrim);
box("plaza arcade left", [276.0, 3.0, 2.0], [7.0, 6.0, 44], new THREE.MeshLambertMaterial({ color: 0x66564d }));
box("plaza arcade right", [324.0, 3.0, 2.0], [7.0, 6.0, 44], new THREE.MeshLambertMaterial({ color: 0x555d62 }));
box("plaza arcade left snow roof", [276.0, 6.15, 2.0], [7.4, 0.22, 44.4], mat.snow, false);
box("plaza arcade right snow roof", [324.0, 6.15, 2.0], [7.4, 0.22, 44.4], mat.snow, false);
for (const sideX of [279.4, 320.6]) {
  for (const z of [-14, -7, 0, 7, 14, 21]) {
    box("square facade window", [sideX, 3.2, z], [0.12, 1.4, 1.1], mat.lantern, false);
  }
}

function colorfulSquareStall(x, z, canopyMaterial) {
  box("colorful square stall counter", [x, 0.55, z], [3.2, 0.9, 1.7], churchWood);
  box("colorful square stall canopy", [x, 2.35, z], [3.8, 0.25, 2.2], canopyMaterial);
  box("stall canopy snow", [x, 2.52, z], [3.9, 0.12, 2.3], mat.snow, false);
  for (const postX of [x - 1.45, x + 1.45]) box("colorful stall post", [postX, 1.35, z], [0.15, 2.7, 0.15], churchWood);
}
colorfulSquareStall(286.0, 9.0, domeBlue);
colorfulSquareStall(314.0, 20.0, domeGreen);

for (const [x, z, color] of [
  [279.55, -10, domeRed], [279.55, 2, ornamentYellow], [279.55, 14, domeBlue],
  [320.45, -10, ornamentTurquoise], [320.45, 2, domeRed], [320.45, 14, ornamentYellow]
]) {
  box("hanging square banner", [x, 3.6, z], [0.1, 2.6, 0.72], color, false);
  box("banner gold edge", [x + (x < 300 ? 0.06 : -0.06), 4.95, z], [0.08, 0.12, 0.9], churchGold, false);
}

for (const [x, z] of [[286, 22], [294, 7], [306, 7], [314, 22]]) {
  const plazaLampPost = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, 3.5, 7), mat.dark);
  plazaLampPost.position.set(x, 1.6, z);
  scene.add(plazaLampPost);
  box("ornate square lantern", [x, 3.45, z], [0.34, 0.46, 0.34], mat.lantern, false);
  box("lantern crown", [x, 3.76, z], [0.5, 0.12, 0.5], churchGold, false);
  const plazaGlow = new THREE.PointLight(0xffb45b, 0.85, 9);
  plazaGlow.position.set(x, 3.45, z);
  scene.add(plazaGlow);
}

for (const [x, z] of [[284, -2], [316, -2], [288, 24], [312, 26]]) {
  const planter = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.58, 0.55, 8), squareStone);
  planter.position.set(x, 0.18, z);
  const evergreen = new THREE.Mesh(new THREE.ConeGeometry(0.8, 2.3, 7), domeGreen);
  evergreen.position.set(x, 1.45, z);
  scene.add(planter, evergreen);
}

for (const [x, z] of [[296.5, -4.5], [303.5, -4.5]]) {
  const cathedralGlow = new THREE.PointLight(0xff9e46, 1.3, 11);
  cathedralGlow.position.set(x, 2.4, z);
  scene.add(cathedralGlow);
}

colliders.push(
  new THREE.Box3(new THREE.Vector3(290.7, 0, -21.8), new THREE.Vector3(309.3, 6.5, -21.2)),
  new THREE.Box3(new THREE.Vector3(290.7, 0, -21.8), new THREE.Vector3(291.3, 6.5, -6.2)),
  new THREE.Box3(new THREE.Vector3(308.7, 0, -21.8), new THREE.Vector3(309.3, 6.5, -6.2)),
  new THREE.Box3(new THREE.Vector3(290.7, 0, -6.8), new THREE.Vector3(298.15, 6.5, -6.2)),
  new THREE.Box3(new THREE.Vector3(301.85, 0, -6.8), new THREE.Vector3(309.3, 6.5, -6.2)),
  new THREE.Box3(new THREE.Vector3(272.0, 0, -20.0), new THREE.Vector3(279.7, 6.5, 25.0)),
  new THREE.Box3(new THREE.Vector3(320.3, 0, -20.0), new THREE.Vector3(328.0, 6.5, 25.0))
);

// Level 8: the cathedral interior and the captor's chamber.
const finalWall = new THREE.MeshLambertMaterial({ color: 0x80715e });
const finalGold = new THREE.MeshLambertMaterial({ color: 0xc09a42 });
box("final cathedral floor", [360, -0.05, 0], [20, 0.12, 36], churchWood, false);
box("final cathedral front wall", [360, 4.0, 18], [20.4, 8.0, 0.4], finalWall);
box("final cathedral left wall", [350, 4.0, 0], [0.4, 8.0, 36.4], finalWall);
box("final cathedral right wall", [370, 4.0, 0], [0.4, 8.0, 36.4], finalWall);
box("final cathedral back left", [354.6, 4.0, -18], [8.8, 8.0, 0.4], finalWall);
box("final cathedral back right", [365.4, 4.0, -18], [8.8, 8.0, 0.4], finalWall);
box("final cathedral door lintel", [360, 6.25, -18], [3.6, 3.5, 0.4], finalWall);
box("final cathedral roof left", [354.6, 8.55, 0], [11.5, 0.4, 37], stationRoof).rotation.z = 0.32;
box("final cathedral roof right", [365.4, 8.55, 0], [11.5, 0.4, 37], stationRoof).rotation.z = -0.32;
for (const z of [-15, -10, -5, 0, 5, 10, 15]) {
  box("final cathedral ceiling beam", [360, 7.55, z], [19.2, 0.24, 0.3], mat.dark);
}
box("final cathedral floor border left", [352.0, 0.03, 0], [0.18, 0.08, 34], finalGold, false);
box("final cathedral floor border right", [368.0, 0.03, 0], [0.18, 0.08, 34], finalGold, false);
box("final cathedral rug border left", [358.38, 0.09, 1.0], [0.12, 0.04, 28], finalGold, false);
box("final cathedral rug border right", [361.62, 0.09, 1.0], [0.12, 0.04, 28], finalGold, false);

finalCathedralDoors = [
  box("final left sanctuary door", [359.08, 2.05, -17.75], [1.7, 4.1, 0.18], churchRed),
  box("final right sanctuary door", [360.92, 2.05, -17.75], [1.7, 4.1, 0.18], churchRed),
];
for (const door of finalCathedralDoors) door.userData = { kind: "finalCathedralDoor" };
box("final iconostasis left", [354.8, 3.1, -17.52], [7.2, 5.8, 0.24], finalGold);
box("final iconostasis right", [365.2, 3.1, -17.52], [7.2, 5.8, 0.24], finalGold);
for (const [x, color] of [[352.2, domeBlue], [355.1, domeGreen], [357.2, domeRed], [362.8, ornamentTurquoise], [364.9, domeBlue], [367.8, domeRed]]) {
  box("final iconostasis painted panel", [x, 3.2, -17.34], [1.45, 2.55, 0.14], color);
  const halo = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.08, 12), churchGold);
  halo.position.set(x, 3.65, -17.22);
  halo.rotation.x = Math.PI / 2;
  scene.add(halo);
}
box("final door gold cross vertical", [360, 2.55, -17.62], [0.22, 2.1, 0.1], finalGold);
box("final door gold cross arm", [360, 2.8, -17.61], [1.5, 0.2, 0.1], finalGold);

for (const z of [12, 6, 0, -6, -12]) {
  for (const x of [353.2, 366.8]) {
    const column = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.55, 7.0, 8), ornamentWhite);
    column.position.set(x, 3.45, z);
    scene.add(column);
    const capital = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.52, 0.35, 8), finalGold);
    capital.position.set(x, 7.02, z);
    scene.add(capital);
  }
}

for (const z of [11.0, 6.0, 1.0, -4.0, -9.0]) {
  for (const x of [356.2, 363.8]) {
    box("final cathedral pew seat", [x, 0.55, z], [5.0, 0.26, 0.72], churchWood);
    box("final cathedral pew back", [x, 1.05, z + 0.3], [5.0, 0.82, 0.18], churchWood);
  }
}

for (const [x, z, color] of [[350.25, 10, domeBlue], [369.75, 10, domeRed], [350.25, 2, ornamentTurquoise], [369.75, 2, ornamentYellow], [350.25, -7, domeGreen], [369.75, -7, domeBlue]]) {
  box("final stained window frame", [x, 4.4, z], [0.1, 2.4, 1.6], finalGold);
  box("final stained glass", [x + (x < 360 ? -0.06 : 0.06), 4.4, z], [0.06, 2.0, 1.2], color, false);
}
for (const [x, z, color] of [[350.28, 14, domeRed], [369.72, 14, domeBlue], [350.28, -12, ornamentYellow], [369.72, -12, ornamentTurquoise]]) {
  box("final wall mural frame", [x, 3.6, z], [0.12, 3.1, 2.3], finalGold);
  box("final wall mural", [x + (x < 360 ? -0.07 : 0.07), 3.6, z], [0.08, 2.65, 1.85], color, false);
}

for (const z of [8.0, 0.0, -8.0]) {
  const chandelier = new THREE.Mesh(new THREE.TorusGeometry(1.15, 0.1, 7, 14), finalGold);
  chandelier.position.set(360, 5.35, z);
  chandelier.rotation.x = Math.PI / 2;
  const chain = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.0, 6), mat.dark);
  chain.position.set(360, 6.35, z);
  scene.add(chandelier, chain);
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    box("chandelier candle", [360 + Math.cos(angle) * 1.0, 5.28, z + Math.sin(angle) * 1.0], [0.08, 0.42, 0.08], ornamentYellow, false);
  }
  const chandelierGlow = new THREE.PointLight(0xffb45f, 1.15, 11);
  chandelierGlow.position.set(360, 5.0, z);
  scene.add(chandelierGlow);
}

box("final central rug", [360, 0.04, 1.0], [3.1, 0.08, 28], churchRed, false);
box("final side lectern", [365.0, 0.72, 1.0], [1.7, 1.25, 1.2], churchWood);
box("final choir stall", [368.0, 0.58, -4.0], [2.1, 1.0, 1.3], churchWood);
for (const x of [355.2, 364.8]) {
  box("final candle stand", [x, 0.75, 9.0], [1.3, 0.15, 0.8], finalGold);
  for (let i = 0; i < 4; i++) {
    cyl("final candle", [x - 0.42 + i * 0.28, 1.05, 9.0], 0.045, 0.55, ornamentYellow, 0);
  }
  const finalCandleGlow = new THREE.PointLight(0xffa54a, 0.9, 7);
  finalCandleGlow.position.set(x, 1.5, 9.0);
  scene.add(finalCandleGlow);
}

box("captor chamber floor", [360, -0.04, -22.0], [12, 0.12, 8], cemeteryStoneDark, false);
box("captor chamber back", [360, 3.2, -26], [12.4, 6.4, 0.4], mat.dark);
box("captor chamber left", [354, 3.2, -22], [0.4, 6.4, 8.4], mat.dark);
box("captor chamber right", [366, 3.2, -22], [0.4, 6.4, 8.4], mat.dark);
const captor = new THREE.Group();
const captorBody = new THREE.Mesh(new THREE.BoxGeometry(1.5, 2.3, 0.9), new THREE.MeshLambertMaterial({ color: 0x251b23 }));
captorBody.position.y = 1.5;
const captorHead = new THREE.Mesh(new THREE.SphereGeometry(0.5, 7, 5), new THREE.MeshLambertMaterial({ color: 0x7d685b }));
captorHead.position.y = 3.0;
captor.add(captorBody, captorHead);
captor.position.set(360, 0, -23.5);
scene.add(captor);
box("captured friend chair", [362.2, 0.62, -23.0], [1.0, 1.2, 1.0], churchWood);
const bossLight = new THREE.PointLight(0xa6292f, 1.6, 9);
bossLight.position.set(360, 3.5, -22.5);
scene.add(bossLight);

colliders.push(
  new THREE.Box3(new THREE.Vector3(349.7, 0, -18.3), new THREE.Vector3(350.3, 8.5, 18.3)),
  new THREE.Box3(new THREE.Vector3(369.7, 0, -18.3), new THREE.Vector3(370.3, 8.5, 18.3)),
  new THREE.Box3(new THREE.Vector3(349.7, 0, 17.7), new THREE.Vector3(370.3, 8.5, 18.3)),
  new THREE.Box3(new THREE.Vector3(349.7, 0, -18.3), new THREE.Vector3(358.1, 8.5, -17.7)),
  new THREE.Box3(new THREE.Vector3(361.9, 0, -18.3), new THREE.Vector3(370.3, 8.5, -17.7)),
  new THREE.Box3(new THREE.Vector3(353.7, 0, -26.3), new THREE.Vector3(366.3, 6.8, -25.7)),
  new THREE.Box3(new THREE.Vector3(353.7, 0, -26.3), new THREE.Vector3(354.3, 6.8, -17.7)),
  new THREE.Box3(new THREE.Vector3(365.7, 0, -26.3), new THREE.Vector3(366.3, 6.8, -17.7))
);

// Final 15-second forest epilogue.
box("ending forest ground", [430, -0.16, 0], [42, 0.12, 46], forestGround, false);
for (const [x, z, height, radius] of [[414, -24, 15, 9], [423, -27, 19, 11], [437, -27, 18, 10], [447, -24, 16, 9]]) {
  const endingMountain = new THREE.Mesh(new THREE.ConeGeometry(radius, height, 7), new THREE.MeshLambertMaterial({ color: 0x59656b }));
  endingMountain.position.set(x, height / 2 - 0.5, z);
  const endingSnow = new THREE.Mesh(new THREE.ConeGeometry(radius * 0.46, height * 0.3, 7), mat.snow);
  endingSnow.position.set(x, height * 0.84 - 0.5, z);
  scene.add(endingMountain, endingSnow);
}
for (const [x, z, scale] of [[412, -12, 1.2], [416, 2, 1.0], [418, 13, 1.2], [444, -10, 1.2], [446, 4, 1.0], [442, 14, 1.2]]) {
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.15 * scale, 0.24 * scale, 3.2 * scale, 5), churchWood);
  trunk.position.set(x, 1.35 * scale, z);
  const crown = new THREE.Mesh(new THREE.ConeGeometry(1.1 * scale, 4.0 * scale, 6), domeGreen);
  crown.position.set(x, 3.75 * scale, z);
  scene.add(trunk, crown);
}

function makeEndingWalker(coatColor) {
  const person = new THREE.Group();
  const coat = new THREE.Mesh(new THREE.BoxGeometry(0.75, 1.35, 0.48), new THREE.MeshLambertMaterial({ color: coatColor }));
  coat.position.y = 1.35;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.28, 7, 5), new THREE.MeshLambertMaterial({ color: 0xb99379 }));
  head.position.y = 2.3;
  person.add(coat, head);
  for (const x of [-0.2, 0.2]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.85, 0.24), mat.dark);
    leg.position.set(x, 0.45, 0);
    person.add(leg);
  }
  scene.add(person);
  return person;
}
endingDmitry = makeEndingWalker(0x46566b);
endingFriend = makeEndingWalker(0x6a3f3c);
endingDmitry.position.set(429.4, 0, 8.0);
endingFriend.position.set(430.6, 0, 8.3);

const trees = new THREE.Group();
for (let i = 0; i < 44; i++) {
  const angle = Math.random() * Math.PI * 2;
  const radius = 18 + Math.random() * 33;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.25, 3.4, 5), new THREE.MeshLambertMaterial({ color: 0x2a1b12 }));
  trunk.position.set(x, 1.5, z);
  const pine = new THREE.Mesh(new THREE.ConeGeometry(1.2, 4.0, 6), new THREE.MeshLambertMaterial({ color: 0x1b3329 }));
  pine.position.set(x, 4.0, z);
  trees.add(trunk, pine);
}
scene.add(trees);

const bookMeshes = [];
const coverColors = [0x8c1d19, 0x26552a, 0x244f8d, 0x111111, 0xb8a678, 0x6b4327, 0xd1bb3e, 0x6e1825, 0x8d8d87, 0xf0eee0];
function addCollectible(data, index, itemLevel) {
  const [id, title, pos, rot, type = "book", lockedInChest = false] = data;
  const group = new THREE.Group();
  group.position.set(pos[0], pos[1], pos[2]);
  group.rotation.y = rot;
  if (type === "book") {
    const pages = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.09, 0.52), new THREE.MeshLambertMaterial({ color: 0xd8c79d }));
    const cover = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.12, 0.58), new THREE.MeshLambertMaterial({ color: coverColors[index % coverColors.length] }));
    cover.position.y = 0.02;
    group.add(cover, pages);
  } else if (type === "rope") {
    const rope = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.045, 5, 12), mat.dark);
    rope.rotation.x = Math.PI / 2;
    group.add(rope);
  } else if (type === "censer") {
    const bowl = new THREE.Mesh(new THREE.SphereGeometry(0.2, 7, 5), churchGold);
    const chain = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.55, 5), churchGold);
    chain.position.y = 0.35;
    group.add(bowl, chain);
  } else if (type === "cross") {
    const stem = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.62, 0.08), churchGold);
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.11, 0.08), churchGold);
    arm.position.y = 0.12;
    group.add(stem, arm);
  } else if (type === "icon") {
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.7, 0.09), churchGold);
    const painting = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.54, 0.06), new THREE.MeshLambertMaterial({ color: 0x485b51 }));
    painting.position.z = 0.06;
    group.add(frame, painting);
  } else if (type === "candles") {
    const carton = new THREE.Mesh(new THREE.BoxGeometry(0.64, 0.18, 0.42), churchWood);
    group.add(carton);
    for (let i = 0; i < 4; i++) {
      const candle = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.55, 5), new THREE.MeshLambertMaterial({ color: 0xd9b85b }));
      candle.position.set(-0.24 + i * 0.16, 0.3, 0);
      group.add(candle);
    }
  } else if (type === "vessel") {
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 0.48, 7), churchGold);
    const lid = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.2, 7), churchGold);
    lid.position.y = 0.34;
    group.add(body, lid);
  } else if (type === "vestment") {
    const cloth = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.16, 0.58), churchRed);
    const trim = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.18, 0.6), churchGold);
    group.add(cloth, trim);
  } else if (type === "lantern") {
    const lanternBody = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.48, 0.38), mat.dark);
    const lanternGlow = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.3, 0.25), mat.lantern);
    group.add(lanternBody, lanternGlow);
  } else if (type === "key") {
    const keyRing = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.035, 5, 10), mat.metal);
    const keyShaft = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.42, 0.06), mat.metal);
    keyShaft.position.y = -0.25;
    const keyTooth = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.08, 0.06), mat.metal);
    keyTooth.position.set(0.06, -0.45, 0);
    group.add(keyRing, keyShaft, keyTooth);
  } else if (type === "locket") {
    const locket = new THREE.Mesh(new THREE.SphereGeometry(0.18, 7, 5), new THREE.MeshLambertMaterial({ color: 0xb8bec0 }));
    locket.scale.y = 1.2;
    const loop = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.025, 5, 8), mat.metal);
    loop.position.y = 0.24;
    group.add(locket, loop);
  } else if (type === "wreath") {
    const wreath = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.1, 6, 12), new THREE.MeshLambertMaterial({ color: 0x29412f }));
    const ribbon = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.58, 0.08), churchRed);
    ribbon.rotation.z = -0.4;
    group.add(wreath, ribbon);
  } else if (type === "compass") {
    const compass = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.08, 12), churchGold);
    const needle = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.06, 0.3), churchRed);
    needle.position.y = 0.06;
    group.add(compass, needle);
  } else if (type === "knife") {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.08, 0.62), mat.metal);
    const handle = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.32), churchWood);
    handle.position.z = 0.45;
    group.add(blade, handle);
  } else if (type === "coin") {
    const coin = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.06, 12), new THREE.MeshLambertMaterial({ color: 0xb8bec0 }));
    coin.rotation.z = Math.PI / 2;
    group.add(coin);
  } else if (type === "whistle") {
    const whistle = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 0.62, 7), churchWood);
    whistle.rotation.z = Math.PI / 2;
    const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.12, 0.2), churchWood);
    mouth.position.x = 0.34;
    group.add(whistle, mouth);
  } else if (type === "letter") {
    const paper = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.04, 0.68), new THREE.MeshLambertMaterial({ color: 0xd6c89f }));
    const writing = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.045, 0.04), mat.dark);
    writing.position.set(0, 0.03, -0.08);
    group.add(paper, writing);
  } else if (type === "receipt") {
    const ticket = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.035, 0.72), new THREE.MeshLambertMaterial({ color: 0xc8b98d }));
    const railStripe = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.04, 0.1), churchRed);
    railStripe.position.set(0, 0.025, -0.2);
    group.add(ticket, railStripe);
  } else if (type === "bag") {
    const bagBody = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.52, 0.48), new THREE.MeshLambertMaterial({ color: 0x57382b }));
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.045, 5, 10, Math.PI), churchWood);
    handle.position.y = 0.3;
    group.add(bagBody, handle);
  } else if (type === "wallet") {
    const wallet = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.12, 0.34), new THREE.MeshLambertMaterial({ color: 0x4b3025 }));
    const clasp = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.14, 0.12), churchGold);
    clasp.position.z = -0.16;
    group.add(wallet, clasp);
  } else if (type === "cap") {
    const capTop = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.34, 0.18, 8), stationTrim);
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.07, 0.28), mat.dark);
    visor.position.set(0, -0.08, -0.24);
    group.add(capTop, visor);
  } else if (type === "tag") {
    const tag = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.05, 0.58), new THREE.MeshLambertMaterial({ color: 0xc0ad82 }));
    const eyelet = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.018, 5, 8), mat.metal);
    eyelet.position.z = -0.22;
    eyelet.rotation.x = Math.PI / 2;
    group.add(tag, eyelet);
  } else if (type === "tea") {
    const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.13, 0.42, 8), new THREE.MeshLambertMaterial({ color: 0x8a6042 }));
    const holder = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.035, 5, 8), churchGold);
    holder.rotation.x = Math.PI / 2;
    holder.position.y = -0.12;
    group.add(glass, holder);
  } else if (type === "shovel") {
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 0.8, 6), churchWood);
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.35, 0.08), mat.metal);
    blade.position.y = -0.52;
    group.add(handle, blade);
  } else if (type === "watch") {
    const watch = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.08, 12), churchGold);
    watch.rotation.z = Math.PI / 2;
    const loop = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.022, 5, 8), churchGold);
    loop.position.y = 0.25;
    group.add(watch, loop);
  } else if (type === "screwdriver") {
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.58, 6), mat.metal);
    shaft.rotation.z = Math.PI / 2;
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 0.3, 7), churchRed);
    handle.rotation.z = Math.PI / 2;
    handle.position.x = 0.42;
    group.add(shaft, handle);
  } else if (type === "wrench") {
    const handle = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.08, 0.65), mat.metal);
    const jaw = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.055, 5, 8, Math.PI * 1.35), mat.metal);
    jaw.position.z = -0.38;
    jaw.rotation.z = 0.65;
    group.add(handle, jaw);
  } else if (type === "hammer") {
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.055, 0.65, 6), churchWood);
    handle.rotation.x = Math.PI / 2;
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.18, 0.2), mat.metal);
    head.position.z = -0.36;
    group.add(handle, head);
  } else if (type === "safeKey") {
    const keyRing = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.035, 5, 10), churchGold);
    keyRing.rotation.x = Math.PI / 2;
    const keyShaft = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.5), churchGold);
    keyShaft.position.z = 0.3;
    const keyTooth = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.06, 0.09), churchGold);
    keyTooth.position.set(0.06, 0, 0.56);
    group.add(keyRing, keyShaft, keyTooth);
  } else if (type === "chisel") {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.08, 0.62), mat.metal);
    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.14, 0.28), churchWood);
    grip.position.z = 0.43;
    group.add(blade, grip);
  } else if (type === "lockpick") {
    for (let i = 0; i < 3; i++) {
      const pick = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.04, 0.58), mat.metal);
      pick.position.x = (i - 1) * 0.09;
      pick.rotation.y = (i - 1) * 0.08;
      group.add(pick);
    }
  } else if (type === "oilcan") {
    const can = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.24, 0.38, 8), mat.metal);
    const spout = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.06, 0.55, 6), mat.metal);
    spout.position.set(0.25, 0.18, 0);
    spout.rotation.z = -0.75;
    group.add(can, spout);
  } else if (type === "boltcutters") {
    for (const rotation of [-0.28, 0.28]) {
      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.78), churchRed);
      arm.rotation.y = rotation;
      group.add(arm);
    }
    const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.12, 0.2), mat.metal);
    jaw.position.z = -0.42;
    group.add(jaw);
  } else if (type === "prybar") {
    const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.78, 6), mat.metal);
    bar.rotation.z = Math.PI / 2;
    const hook = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.08, 0.1), mat.metal);
    hook.position.x = -0.43;
    hook.rotation.z = 0.45;
    group.add(bar, hook);
  } else if (type === "bell") {
    const bell = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.38, 8), churchGold);
    bell.position.y = 0.08;
    const clapper = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 4), mat.dark);
    clapper.position.y = -0.16;
    group.add(bell, clapper);
  } else if (type === "star") {
    const star = new THREE.Mesh(new THREE.CircleGeometry(0.26, 5), new THREE.MeshLambertMaterial({ color: 0xb43a3e }));
    star.rotation.x = -Math.PI / 2;
    group.add(star);
  }
  group.userData = { id, title, found: false, level: itemLevel, lockedInChest };
  group.visible = itemLevel === 1;
  scene.add(group);
  bookMeshes.push(group);
}

cabinItemData.forEach((data, index) => addCollectible(data, index, 1));
churchItemData.forEach((data, index) => addCollectible(data, index + 2, 2));
cemeteryItemData.forEach((data, index) => addCollectible(data, index + 4, 3));
volgaItemData.forEach((data, index) => addCollectible(data, index + 6, 4));
uralStationItemData.forEach((data, index) => addCollectible(data, index + 8, 5));
nightTrainItemData.forEach((data, index) => addCollectible(data, index, 6));
redSquareItemData.forEach((data, index) => addCollectible(data, index + 3, 7));
cathedralFinalItemData.forEach((data, index) => addCollectible(data, index + 5, 8));

function updateBookList() {
  booksEl.innerHTML = activeItemData
    .map(([id, title]) => `<div class="${collected.has(id) ? "found" : ""}">${collected.has(id) ? "[x]" : "[ ]"} ${title}</div>`)
    .join("");
  countEl.textContent = collected.size;
}

function setTimeMode(mode) {
  timeMode = mode;
  const isDay = timeMode === "day";
  scene.background.set(isDay ? 0x9fb4bf : 0x111820);
  scene.fog.color.set(isDay ? 0xc9d8dc : 0x9aa8ad);
  scene.fog.density = isDay ? 0.014 : 0.028;
  lamp.intensity = isDay ? 1.25 : 2.8;
  moon.intensity = isDay ? 0.12 : 0.9;
  sun.intensity = isDay ? 1.55 : 0.0;
  mat.windowGlow.color.set(isDay ? 0xd5e5df : 0x9fb4c1);
  mat.moon.color.set(isDay ? 0xf6c46a : 0xf1e7bf);
  cemeterySkyMaterial.color.set(isDay ? 0x9fb4bf : 0x111820);
  timeButton.textContent = isDay ? "Switch to Night" : "Switch to Day";
}

function togglePause() {
  if (letterOpen || !startEl.classList.contains("hidden") || !winEl.classList.contains("hidden")) return;
  paused = !paused;
  pauseEl.classList.toggle("hidden", !paused);
  if (paused && document.pointerLockElement) document.exitPointerLock();
}

function resetGame(targetLevel = 1) {
  level = targetLevel;
  activeItemData = level === 1
    ? cabinItemData
    : level === 2
      ? churchItemData
      : level === 3
        ? cemeteryItemData
        : level === 4
          ? volgaItemData
          : level === 5
            ? uralStationItemData
            : level === 6
              ? nightTrainItemData
              : level === 7
                ? redSquareItemData
                : cathedralFinalItemData;
  chestOpen = false;
  secretTrainDoorOpen = false;
  locomotiveDoorOpen = false;
  trainSafeOpen = false;
  cathedralDoorOpen = false;
  finalCathedralDoorOpen = false;
  bossQuizActive = false;
  bossQuestionIndex = 0;
  bossWrongAnswers = 0;
  endingActive = false;
  endingTimer = 0;
  collected.clear();
  for (const group of bookMeshes) {
    group.visible = group.userData.level === level && !group.userData.lockedInChest;
    group.userData.found = false;
  }
  if (level === 1) camera.position.set(0, 1.7, 5.2);
  if (level === 2) camera.position.set(60, 1.7, 28.0);
  if (level === 3) camera.position.set(-60, 1.7, 22.0);
  if (level === 4) camera.position.set(120, 1.7, 22.0);
  if (level === 5) camera.position.set(180, 1.7, 16.0);
  if (level === 6) camera.position.set(240, 1.7, 18.8);
  if (level === 7) camera.position.set(300, 1.7, 25.0);
  if (level === 8) camera.position.set(360, 1.7, 15.0);
  yaw = 0;
  pitch = 0;
  targetYaw = 0;
  targetPitch = 0;
  doorOpen = false;
  if (cabinDoor) {
    cabinDoor.position.set(3.0, 1.3, 5.82);
    cabinDoor.rotation.y = 0;
  }
  churchDoorOpen = false;
  if (churchDoors.length === 2) {
    churchDoors[0].position.set(59.28, 1.65, 10.78);
    churchDoors[0].rotation.y = 0;
    churchDoors[1].position.set(60.72, 1.65, 10.78);
    churchDoors[1].rotation.y = 0;
  }
  if (treasureChestLid) {
    treasureChestLid.position.set(127.0, 0.98, -17.0);
    treasureChestLid.rotation.x = 0;
  }
  if (secretTrainDoor) {
    secretTrainDoor.position.set(240, 1.45, 31.42);
    secretTrainDoor.rotation.y = 0;
  }
  if (locomotiveDoor) {
    locomotiveDoor.position.set(240, 1.45, -20.68);
    locomotiveDoor.rotation.y = 0;
  }
  if (trainSafeDoor) {
    trainSafeDoor.position.set(240, 0.9, 39.94);
    trainSafeDoor.rotation.y = 0;
  }
  if (cathedralDoors.length === 2) {
    cathedralDoors[0].position.set(299.1, 1.75, -6.28);
    cathedralDoors[0].rotation.y = 0;
    cathedralDoors[1].position.set(300.9, 1.75, -6.28);
    cathedralDoors[1].rotation.y = 0;
  }
  if (finalCathedralDoors.length === 2) {
    finalCathedralDoors[0].position.set(359.08, 2.05, -17.75);
    finalCathedralDoors[0].rotation.y = 0;
    finalCathedralDoors[1].position.set(360.92, 2.05, -17.75);
    finalCathedralDoors[1].rotation.y = 0;
  }
  if (bear) {
    bear.position.set(112, 0, -9);
    bear.visible = level === 4;
  }
  for (const scenery of movingTrainScenery) scenery.visible = level === 6;
  trainChooClock = 35;
  bearWarningTimer = 0;
  letterOpen = false;
  pendingLevelWin = false;
  pendingDialogueAfterDocument = null;
  letterEl.classList.add("hidden");
  bossQuizEl.classList.add("hidden");
  gameOverEl.classList.add("hidden");
  theEndEl.classList.add("hidden");
  document.querySelector("#hud").classList.remove("hidden");
  dialogueCaptionEl.classList.remove("visible");
  if (dialogueTimer) {
    clearTimeout(dialogueTimer);
    dialogueTimer = null;
  }
  levelTitleEl.textContent = level === 1
    ? "SNOWBOUND VOLUMES"
    : level === 2
      ? "THE QUIET SANCTUARY"
      : level === 3
        ? "THE CRESCENT GRAVES"
        : level === 4
          ? "RIVER OF SHADOWS"
          : level === 5
            ? "THE URAL EXPRESS"
            : level === 6
              ? "THE NIGHT TRAIN"
              : level === 7
                ? "RED SQUARE"
                : "THE FINAL SANCTUARY";
  levelSubtitleEl.textContent = level === 1
    ? "Level 1: Russian log cabin, winter 1998"
    : level === 2
      ? "Level 2: Orthodox church street, built 1874"
      : level === 3
        ? "Level 3: Forest cemetery under a crescent moon"
        : level === 4
          ? "Level 4: The Volga forest"
          : level === 5
            ? "Level 5: Ural Mountains railway station"
            : level === 6
              ? "Level 6: Six cars through the winter forest"
              : level === 7
                ? "Level 7: Unlock St. Basil's Cathedral"
                : "Level 8: Rescue Dmitry's friend";
  if (level === 3) {
    setTimeMode("night");
  } else {
    setTimeMode(timeMode);
  }
  if (level === 7) scene.fog.density = timeMode === "day" ? 0.009 : 0.014;
  if (level === 8) scene.fog.density = 0.012;
  winEl.classList.add("hidden");
  updateBookList();
}

function ensureAudio() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioContext.state === "suspended") audioContext.resume();
}

function playFootstep() {
  if (!audioContext) return;
  const now = audioContext.currentTime;
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(stepSide ? 72 : 58, now);
  osc.frequency.exponentialRampToValueAtTime(34, now + 0.08);
  filter.type = "lowpass";
  filter.frequency.value = 180;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.18, now + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.13);
  osc.connect(filter);
  filter.connect(gain);
  gain.connect(audioContext.destination);
  osc.start(now);
  osc.stop(now + 0.14);
  stepSide = 1 - stepSide;
}

function playBookCollectSound() {
  if (!audioContext) return;
  const now = audioContext.currentTime;

  const noiseBuffer = audioContext.createBuffer(1, Math.floor(audioContext.sampleRate * 0.12), audioContext.sampleRate);
  const noise = noiseBuffer.getChannelData(0);
  for (let i = 0; i < noise.length; i++) {
    noise[i] = (Math.random() * 2 - 1) * (1 - i / noise.length);
  }
  const rustle = audioContext.createBufferSource();
  const rustleFilter = audioContext.createBiquadFilter();
  const rustleGain = audioContext.createGain();
  rustle.buffer = noiseBuffer;
  rustleFilter.type = "bandpass";
  rustleFilter.frequency.value = 1450;
  rustleFilter.Q.value = 0.7;
  rustleGain.gain.setValueAtTime(0.14, now);
  rustleGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
  rustle.connect(rustleFilter);
  rustleFilter.connect(rustleGain);
  rustleGain.connect(audioContext.destination);
  rustle.start(now);

  [392, 523].forEach((frequency, index) => {
    const start = now + 0.04 + index * 0.07;
    const tone = audioContext.createOscillator();
    const toneGain = audioContext.createGain();
    tone.type = "triangle";
    tone.frequency.setValueAtTime(frequency, start);
    toneGain.gain.setValueAtTime(0.0001, start);
    toneGain.gain.exponentialRampToValueAtTime(0.11, start + 0.018);
    toneGain.gain.exponentialRampToValueAtTime(0.0001, start + 0.28);
    tone.connect(toneGain);
    toneGain.connect(audioContext.destination);
    tone.start(start);
    tone.stop(start + 0.3);
  });
}

function playPaperFoldSound() {
  if (!audioContext) return;
  const now = audioContext.currentTime;
  for (const [delay, duration, volume, frequency] of [[0, 0.18, 0.12, 1800], [0.1, 0.14, 0.09, 1250]]) {
    const sampleCount = Math.floor(audioContext.sampleRate * duration);
    const buffer = audioContext.createBuffer(1, sampleCount, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < sampleCount; i++) {
      const envelope = 1 - i / sampleCount;
      data[i] = (Math.random() * 2 - 1) * envelope;
    }
    const rustle = audioContext.createBufferSource();
    const filter = audioContext.createBiquadFilter();
    const gain = audioContext.createGain();
    rustle.buffer = buffer;
    filter.type = "bandpass";
    filter.frequency.value = frequency;
    filter.Q.value = 0.65;
    gain.gain.setValueAtTime(volume, now + delay);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + duration);
    rustle.connect(filter);
    filter.connect(gain);
    gain.connect(audioContext.destination);
    rustle.start(now + delay);
  }
}

function startTrainRumble() {
  if (!audioContext || trainRumbleOscillator) return;
  trainRumbleOscillator = audioContext.createOscillator();
  trainRumbleGain = audioContext.createGain();
  const rumbleFilter = audioContext.createBiquadFilter();
  trainRumbleOscillator.type = "triangle";
  trainRumbleOscillator.frequency.value = 43;
  rumbleFilter.type = "lowpass";
  rumbleFilter.frequency.value = 165;
  trainRumbleGain.gain.value = 0.045;
  trainRumbleOscillator.connect(rumbleFilter);
  rumbleFilter.connect(trainRumbleGain);
  trainRumbleGain.connect(audioContext.destination);
  trainRumbleOscillator.start();
}

function stopTrainRumble() {
  if (!trainRumbleOscillator) return;
  trainRumbleOscillator.stop();
  trainRumbleOscillator.disconnect();
  trainRumbleGain.disconnect();
  trainRumbleOscillator = null;
  trainRumbleGain = null;
}

function playTrainChoo() {
  if (!audioContext) return;
  const now = audioContext.currentTime;
  const master = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.16, now + 0.12);
  master.gain.setValueAtTime(0.16, now + 0.9);
  master.gain.exponentialRampToValueAtTime(0.0001, now + 1.65);
  filter.type = "lowpass";
  filter.frequency.value = 1250;
  master.connect(filter);
  filter.connect(audioContext.destination);
  for (const frequency of [392, 494]) {
    const whistle = audioContext.createOscillator();
    whistle.type = "triangle";
    whistle.frequency.setValueAtTime(frequency, now);
    whistle.frequency.exponentialRampToValueAtTime(frequency * 0.92, now + 1.6);
    whistle.connect(master);
    whistle.start(now);
    whistle.stop(now + 1.7);
  }
}

function updateTrainEffects(dt) {
  const active = level === 6
    && !paused
    && !letterOpen
    && startEl.classList.contains("hidden")
    && winEl.classList.contains("hidden");
  if (!active) {
    stopTrainRumble();
    return;
  }

  for (const scenery of movingTrainScenery) {
    scenery.position.z += 10.5 * dt;
    if (scenery.position.z > 52) scenery.position.z -= 104;
  }

  if (!audioContext) return;
  startTrainRumble();
  trainChooClock -= dt;
  if (trainChooClock <= 0) {
    playTrainChoo();
    trainChooClock = 35;
  }
}

function resetOwlTimer(soon = false) {
  owlTimer = soon ? 4 + Math.random() * 4 : 11 + Math.random() * 15;
}

function playOwlHoot() {
  if (!audioContext) return;
  const now = audioContext.currentTime;
  const master = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.22, now + 0.08);
  master.gain.exponentialRampToValueAtTime(0.0001, now + 1.25);
  filter.type = "lowpass";
  filter.frequency.value = 760;
  filter.Q.value = 1.7;
  master.connect(filter);
  filter.connect(audioContext.destination);

  for (let i = 0; i < 2; i++) {
    const start = now + i * 0.38;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(i ? 310 : 255, start);
    osc.frequency.exponentialRampToValueAtTime(i ? 190 : 165, start + 0.34);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.55, start + 0.06);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.42);
    osc.connect(gain);
    gain.connect(master);
    osc.start(start);
    osc.stop(start + 0.48);
  }
}

function lockPointer() {
  if (!("pointerLockElement" in document) || !renderer.domElement.requestPointerLock) {
    locked = true;
    return;
  }
  try {
    const request = renderer.domElement.requestPointerLock();
    if (request && request.catch) {
      request.catch(() => {
        locked = true;
      });
    }
  } catch {
    locked = true;
  }
}

function beginSelectedLevel() {
  ensureAudio();
  resetOwlTimer(true);
  resetGame(selectedStartLevel);
  startEl.classList.add("hidden");
  lockPointer();
}

function advanceToNextLevel() {
  ensureAudio();
  resetOwlTimer(true);
  resetGame(level === 1 ? 2 : level === 2 ? 3 : level === 3 ? 4 : level === 4 ? 5 : level === 5 ? 6 : level === 6 ? 7 : level === 7 ? 8 : 1);
  lockPointer();
}

startButton.addEventListener("click", beginSelectedLevel);
againButton.addEventListener("click", advanceToNextLevel);
levelSelectEl.addEventListener("click", (event) => {
  const option = event.target.closest("[data-level]");
  if (!option) return;
  selectedStartLevel = Number(option.dataset.level);
  for (const button of levelSelectEl.querySelectorAll("[data-level]")) {
    button.classList.toggle("active", button === option);
  }
});
bossAnswersEl.addEventListener("click", (event) => {
  const answer = event.target.closest("[data-answer]");
  if (!answer || !bossQuizActive) return;
  const current = bossQuestions[bossQuestionIndex];
  if (Number(answer.dataset.answer) !== current.correct) bossWrongAnswers++;
  if (bossWrongAnswers >= 2) {
    bossQuizActive = false;
    const health = 0;
    bossHealthFillEl.style.width = `${health}%`;
    bossHealthTextEl.textContent = String(health);
    setTimeout(showBossGameOver, 320);
    return;
  }
  bossQuestionIndex++;
  if (bossQuestionIndex >= bossQuestions.length) {
    startFinalEnding();
  } else {
    renderBossQuestion();
  }
});
retryFinalButton.addEventListener("click", () => {
  gameOverEl.classList.add("hidden");
  resetGame(8);
  lockPointer();
});
gameOverTitleButton.addEventListener("click", returnToTitleScreen);
resumeButton.addEventListener("click", () => {
  paused = false;
  pauseEl.classList.add("hidden");
  lockPointer();
});
closeLetterButton.addEventListener("click", () => {
  playPaperFoldSound();
  letterOpen = false;
  letterEl.classList.add("hidden");
  if (pendingDialogueAfterDocument) {
    showDialogueCaption(pendingDialogueAfterDocument);
    pendingDialogueAfterDocument = null;
  }
  if (pendingLevelWin) {
    pendingLevelWin = false;
    showLevelComplete();
  } else {
    lockPointer();
  }
});
timeButton.addEventListener("click", () => {
  setTimeMode(timeMode === "night" ? "day" : "night");
});
renderer.domElement.addEventListener("click", () => {
  if (paused) return;
  if (!locked) {
    lockPointer();
    return;
  }
  performAction();
});

actionButton.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  performAction();
});

renderer.domElement.addEventListener("pointerdown", (event) => {
  if (event.button !== 0) return;
  draggingLook = true;
});

document.addEventListener("pointerup", () => {
  draggingLook = false;
});

document.addEventListener("pointerlockchange", () => {
  locked = document.pointerLockElement === renderer.domElement;
});
document.addEventListener("mousemove", (event) => {
  if (paused || (!locked && !draggingLook)) return;
  targetYaw -= event.movementX * 0.0021;
  targetPitch -= event.movementY * 0.0021;
  targetPitch = Math.max(-1.05, Math.min(1.05, targetPitch));
});
document.addEventListener("keydown", (event) => {
  if (event.code === "Enter" && !event.repeat) {
    if (!startEl.classList.contains("hidden")) {
      event.preventDefault();
      beginSelectedLevel();
      return;
    }
    if (!winEl.classList.contains("hidden")) {
      event.preventDefault();
      advanceToNextLevel();
      return;
    }
  }
  if (event.code === "KeyP") {
    togglePause();
    return;
  }
  if (paused) return;
  if (event.code === "KeyO") {
    if (!event.repeat) performAction();
    return;
  }
  ensureAudio();
  if (!owlTimer) resetOwlTimer(true);
  keys[event.code] = true;
});
document.addEventListener("keyup", (event) => {
  keys[event.code] = false;
});

function showLevelComplete() {
  document.exitPointerLock();
  if (level === 1) {
    winTitleEl.textContent = "Cabin Library Complete";
    winTextEl.textContent = "The ten books are safe. Beyond the snowy trail, candlelight glows inside an old village church.";
    againButton.textContent = "Enter the Church";
  } else if (level === 2) {
    winTitleEl.textContent = "Sanctuary Restored";
    winTextEl.textContent = "You recovered all ten prayer books and sacred objects. A forest cemetery waits beyond the last street lantern.";
    againButton.textContent = "Enter the Cemetery";
  } else if (level === 3) {
    winTitleEl.textContent = "Cemetery Secrets Found";
    winTextEl.textContent = "All ten memorial objects are safe. Beyond the forest, the Volga River cuts through darker woods.";
    againButton.textContent = "Follow the Volga";
  } else if (level === 4) {
    winTitleEl.textContent = "Volga Cache Recovered";
    winTextEl.textContent = "You found all ten forest relics and escaped the bear's patrol. A train ticket points east toward the Ural Mountains.";
    againButton.textContent = "Travel to the Urals";
  } else if (level === 5) {
    winTitleEl.textContent = "Ural Luggage Recovered";
    winTextEl.textContent = "All ten belongings have been recovered from the mountain station. The night train is ready to depart.";
    againButton.textContent = "Board the Train";
  } else if (level === 6) {
    winTitleEl.textContent = "Night Train Complete";
    winTextEl.textContent = "The safe clue points to Red Square. St. Basil's Cathedral waits beyond the station.";
    againButton.textContent = "Enter Red Square";
  } else if (level === 7) {
    winTitleEl.textContent = "Cathedral Unlocked";
    winTextEl.textContent = "The doors of St. Basil's Cathedral stand open. Dmitry must enter and find his missing friend.";
    againButton.textContent = "Enter the Cathedral";
  } else {
    winTitleEl.textContent = "The Captor Defeated";
    winTextEl.textContent = "Dmitry has rescued his friend.";
    againButton.textContent = "Play Again";
  }
  winEl.classList.remove("hidden");
}

function collectBook(book) {
  playBookCollectSound();
  book.userData.found = true;
  collected.add(book.userData.id);
  book.visible = false;
  nearestBook = null;
  updateBookList();
  const levelComplete = collected.size === activeItemData.length;
  const completionUnlocked = (level !== 6 || trainSafeOpen) && (level !== 7 || cathedralDoorOpen) && level !== 8;
  const isExplorerLetter = book.userData.id === "volga-letter-trunk";
  const isTrainReceipt = book.userData.id === "volga-train-receipt";
  const isUralCampLetter = book.userData.id === "ural-camp-letter";
  const isUralTelegram = book.userData.id === "ural-telegram";
  const isTrainSecretLetter = book.userData.id === "train-secret-letter";
  if (isExplorerLetter || isTrainReceipt || isUralCampLetter || isUralTelegram || isTrainSecretLetter) {
    letterOpen = true;
    pendingLevelWin = levelComplete && completionUnlocked;
    document.exitPointerLock();
    letterLabelEl.textContent = isExplorerLetter
      ? "Letter found in the hollow trunk"
      : isTrainReceipt
        ? "Train ticket receipt"
        : isUralCampLetter
          ? "Letter found inside the mountain tent"
          : isUralTelegram
            ? "Telegram found on the clerk's desk"
            : "Letter beside the secret-room typewriter";
    letterMessageEl.textContent = isExplorerLetter
      ? '"Whoever who finds this letter, watch out for the bear that patrols the Volga! I, myself, almost got bit by that very bear. - Explorer"'
      : isTrainReceipt
        ? "Moscow Railways"
        : isUralCampLetter
          ? '"December 16th, 1998. I made my way to this little train station in hopes to making it to Moscow."'
          : isUralTelegram
            ? '"December 15th, 1998, We are informing you about the recent missing people in the area, we advise caution"'
            : '"Finally on my way to Moscow. I might as well make myself at home and drink some vodka"';
    closeLetterButton.textContent = isTrainReceipt ? "Fold Receipt" : isUralTelegram ? "Fold Telegram" : "Fold Letter";
    pendingDialogueAfterDocument = isUralCampLetter ? 'Dmitry: "I wonder why he was going to Moscow?"' : null;
    letterEl.classList.remove("hidden");
    if (isExplorerLetter) showDialogueCaption('Dmitry: "Maybe this is my friends letter?"');
    return;
  }
  if (levelComplete && completionUnlocked) showLevelComplete();
}

function openDoor() {
  if (doorOpen || !cabinDoor) return;
  doorOpen = true;
  // Keep the right edge fixed like a hinge and fold the door into the cabin.
  cabinDoor.position.set(3.64, 1.3, 5.18);
  cabinDoor.rotation.y = -Math.PI / 2;
}

function openChurchDoors() {
  if (churchDoorOpen || churchDoors.length !== 2) return;
  churchDoorOpen = true;
  churchDoors[0].position.set(58.58, 1.65, 10.08);
  churchDoors[0].rotation.y = Math.PI / 2;
  churchDoors[1].position.set(61.42, 1.65, 10.08);
  churchDoors[1].rotation.y = -Math.PI / 2;
}

function openTreasureChest() {
  if (chestOpen || !treasureChestLid) return;
  chestOpen = true;
  treasureChestLid.position.set(127.0, 1.35, -17.45);
  treasureChestLid.rotation.x = -0.9;
  for (const item of bookMeshes) {
    if (item.userData.level === 4 && item.userData.lockedInChest && !item.userData.found) item.visible = true;
  }
  nearestChest = null;
}

function openSecretTrainDoor() {
  if (secretTrainDoorOpen || !secretTrainDoor) return;
  secretTrainDoorOpen = true;
  secretTrainDoor.position.set(239.48, 1.45, 30.92);
  secretTrainDoor.rotation.y = Math.PI / 2;
}

function openLocomotiveDoor() {
  if (locomotiveDoorOpen || !locomotiveDoor) return;
  locomotiveDoorOpen = true;
  locomotiveDoor.position.set(239.38, 1.45, -21.3);
  locomotiveDoor.rotation.y = Math.PI / 2;
}

function getTrainToolCount() {
  return nightTrainToolIds.filter((id) => collected.has(id)).length;
}

function openTrainSafe() {
  if (trainSafeOpen || !trainSafeDoor || getTrainToolCount() !== nightTrainToolIds.length) return;
  trainSafeOpen = true;
  trainSafeDoor.position.set(239.22, 0.9, 39.32);
  trainSafeDoor.rotation.y = Math.PI / 2;
  letterOpen = true;
  pendingLevelWin = collected.size === activeItemData.length;
  pendingDialogueAfterDocument = null;
  letterLabelEl.textContent = "Clue found inside the train safe";
  letterMessageEl.textContent = "Red Square";
  closeLetterButton.textContent = "Fold Note";
  document.exitPointerLock();
  letterEl.classList.remove("hidden");
}

function getRedSquareUnlockCount() {
  return redSquareUnlockIds.filter((id) => collected.has(id)).length;
}

function openCathedralDoors() {
  if (cathedralDoorOpen || cathedralDoors.length !== 2 || getRedSquareUnlockCount() !== redSquareUnlockIds.length) return;
  cathedralDoorOpen = true;
  cathedralDoors[0].position.set(298.28, 1.75, -5.48);
  cathedralDoors[0].rotation.y = -Math.PI / 2;
  cathedralDoors[1].position.set(301.72, 1.75, -5.48);
  cathedralDoors[1].rotation.y = Math.PI / 2;
  setTimeout(() => {
    resetGame(8);
    lockPointer();
  }, 650);
}

function getFinalCathedralUnlockCount() {
  return cathedralFinalUnlockIds.filter((id) => collected.has(id)).length;
}

function renderBossQuestion() {
  const health = 100 - bossWrongAnswers * 50;
  bossHealthFillEl.style.width = `${health}%`;
  bossHealthTextEl.textContent = String(health);
  bossProgressEl.textContent = `Question ${bossQuestionIndex + 1} / ${bossQuestions.length}`;
  const current = bossQuestions[bossQuestionIndex];
  bossQuestionEl.textContent = current.question;
  bossAnswersEl.innerHTML = current.answers
    .map((answer, index) => `<button data-answer="${index}">${answer}</button>`)
    .join("");
}

function startBossQuiz() {
  bossQuizActive = true;
  bossQuestionIndex = 0;
  bossWrongAnswers = 0;
  document.exitPointerLock();
  bossQuizEl.classList.remove("hidden");
  renderBossQuestion();
}

function openFinalCathedralDoors() {
  if (finalCathedralDoorOpen || finalCathedralDoors.length !== 2 || getFinalCathedralUnlockCount() !== cathedralFinalUnlockIds.length) return;
  finalCathedralDoorOpen = true;
  finalCathedralDoors[0].position.set(358.22, 2.05, -18.55);
  finalCathedralDoors[0].rotation.y = Math.PI / 2;
  finalCathedralDoors[1].position.set(361.78, 2.05, -18.55);
  finalCathedralDoors[1].rotation.y = -Math.PI / 2;
  setTimeout(startBossQuiz, 700);
}

function returnToTitleScreen() {
  bossQuizActive = false;
  endingActive = false;
  bossQuizEl.classList.add("hidden");
  gameOverEl.classList.add("hidden");
  theEndEl.classList.add("hidden");
  document.exitPointerLock();
  selectedStartLevel = 1;
  for (const button of levelSelectEl.querySelectorAll("[data-level]")) {
    button.classList.toggle("active", button.dataset.level === "1");
  }
  resetGame(1);
  startEl.classList.remove("hidden");
  introStoryEl.classList.remove("visible");
  setTimeout(() => {
    if (!startEl.classList.contains("hidden")) introStoryEl.classList.add("visible");
  }, 15000);
}

function startFinalEnding() {
  bossQuizActive = false;
  bossQuizEl.classList.add("hidden");
  endingActive = true;
  endingTimer = 15;
  document.querySelector("#hud").classList.add("hidden");
  camera.position.set(430, 2.8, 14.0);
  yaw = 0;
  pitch = -0.08;
  targetYaw = 0;
  targetPitch = -0.08;
  endingDmitry.position.set(429.4, 0, 8.0);
  endingFriend.position.set(430.6, 0, 8.3);
}

function showBossGameOver() {
  bossQuizActive = false;
  bossQuizEl.classList.add("hidden");
  gameOverEl.classList.remove("hidden");
}

function performAction() {
  if (nearestBook) {
    collectBook(nearestBook);
    return;
  }
  if (nearestChest) {
    openTreasureChest();
    return;
  }
  if (nearestSafe) {
    openTrainSafe();
    return;
  }
  if (!nearestDoor) return;
  if (nearestDoor.userData.kind === "churchDoor") {
    openChurchDoors();
  } else if (nearestDoor.userData.kind === "secretTrainDoor") {
    openSecretTrainDoor();
  } else if (nearestDoor.userData.kind === "locomotiveDoor") {
    openLocomotiveDoor();
  } else if (nearestDoor.userData.kind === "cathedralDoor") {
    openCathedralDoors();
  } else if (nearestDoor.userData.kind === "finalCathedralDoor") {
    openFinalCathedralDoors();
  } else if (!doorOpen) {
    openDoor();
  }
}

function collides(pos) {
  const player = new THREE.Box3(
    new THREE.Vector3(pos.x - 0.28, pos.y - 1.65, pos.z - 0.28),
    new THREE.Vector3(pos.x + 0.28, pos.y + 0.15, pos.z + 0.28)
  );
  if (!doorOpen) {
    const doorBlocker = new THREE.Box3(new THREE.Vector3(2.2, 0, 5.58), new THREE.Vector3(3.8, 2.65, 6.35));
    if (doorBlocker.intersectsBox(player)) return true;
  }
  if (level === 2 && !churchDoorOpen) {
    const churchDoorBlocker = new THREE.Box3(new THREE.Vector3(58.45, 0, 10.5), new THREE.Vector3(61.55, 3.5, 11.25));
    if (churchDoorBlocker.intersectsBox(player)) return true;
  }
  if (level === 6 && !secretTrainDoorOpen) {
    const secretDoorBlocker = new THREE.Box3(new THREE.Vector3(239.4, 0, 31.15), new THREE.Vector3(240.6, 3.0, 31.75));
    if (secretDoorBlocker.intersectsBox(player)) return true;
  }
  if (level === 6 && !locomotiveDoorOpen) {
    const locomotiveDoorBlocker = new THREE.Box3(new THREE.Vector3(239.3, 0, -21.05), new THREE.Vector3(240.7, 3.0, -20.4));
    if (locomotiveDoorBlocker.intersectsBox(player)) return true;
  }
  if (level === 7 && !cathedralDoorOpen) {
    const cathedralDoorBlocker = new THREE.Box3(new THREE.Vector3(298.15, 0, -6.8), new THREE.Vector3(301.85, 3.7, -6.0));
    if (cathedralDoorBlocker.intersectsBox(player)) return true;
  }
  if (level === 8 && !finalCathedralDoorOpen) {
    const finalDoorBlocker = new THREE.Box3(new THREE.Vector3(358.1, 0, -18.3), new THREE.Vector3(361.9, 4.3, -17.5));
    if (finalDoorBlocker.intersectsBox(player)) return true;
  }
  return colliders.some((box3) => box3.intersectsBox(player));
}

function tryMove(delta) {
  const next = camera.position.clone().add(delta);
  if (collides(next)) return false;
  camera.position.copy(next);
  return delta.lengthSq() > 0;
}

function updatePlayer(dt) {
  if (paused || letterOpen || bossQuizActive || endingActive || !gameOverEl.classList.contains("hidden")) return;
  camera.rotation.order = "YXZ";
  if (keys.ArrowLeft || keys.KeyK) targetYaw += 2.0 * dt;
  if (keys.ArrowRight || keys.KeyL) targetYaw -= 2.0 * dt;
  if (keys.ArrowUp) targetPitch = Math.min(0.55, targetPitch + 1.35 * dt);
  if (keys.ArrowDown) targetPitch = Math.max(-0.75, targetPitch - 1.35 * dt);
  yaw += (targetYaw - yaw) * Math.min(1, dt * 13);
  pitch += (targetPitch - pitch) * Math.min(1, dt * 13);
  camera.rotation.y = yaw;
  camera.rotation.x = pitch;

  camera.getWorldDirection(forward);
  forward.y = 0;
  forward.normalize();
  right.crossVectors(forward, up).normalize();
  const move = temp.set(0, 0, 0);
  if (keys.KeyW) move.add(forward);
  if (keys.KeyS) move.sub(forward);
  if (keys.KeyD) move.add(right);
  if (keys.KeyA) move.sub(right);
  if (move.lengthSq() > 0) move.normalize().multiplyScalar(3.05 * dt);
  const isWalking = tryMove(move);
  if (isWalking) {
    stepClock -= dt;
    if (stepClock <= 0) {
      playFootstep();
      stepClock = 0.43;
    }
  } else {
    stepClock = 0;
  }

  const floorY = 1.7;
  if (camera.position.y > floorY) {
    velocityY -= 8.5 * dt;
    camera.position.y = Math.max(floorY, camera.position.y + velocityY * dt);
  } else {
    velocityY = 0;
    camera.position.y = floorY;
  }
  if (level === 1) {
    camera.position.x = Math.max(-24.0, Math.min(24.0, camera.position.x));
    camera.position.z = Math.max(-24.0, Math.min(32.0, camera.position.z));
  } else if (level === 2) {
    camera.position.x = Math.max(48.7, Math.min(71.3, camera.position.x));
    camera.position.z = Math.max(-10.45, Math.min(40.0, camera.position.z));
  } else {
    if (level === 3) {
      camera.position.x = Math.max(-80.4, Math.min(-39.6, camera.position.x));
      camera.position.z = Math.max(-21.4, Math.min(23.4, camera.position.z));
    } else if (level === 4) {
      camera.position.x = Math.max(102.5, Math.min(137.5, camera.position.x));
      camera.position.z = Math.max(-24.0, Math.min(24.0, camera.position.z));
    } else if (level === 5) {
      camera.position.x = Math.max(160.5, Math.min(199.5, camera.position.x));
      camera.position.z = Math.max(-48.0, Math.min(18.0, camera.position.z));
    } else if (level === 6) {
      camera.position.x = Math.max(237.65, Math.min(242.35, camera.position.x));
      camera.position.z = Math.max(-28.55, Math.min(41.35, camera.position.z));
    } else if (level === 7) {
      camera.position.x = Math.max(280.0, Math.min(320.0, camera.position.x));
      camera.position.z = Math.max(-20.0, Math.min(29.0, camera.position.z));
    } else {
      camera.position.x = Math.max(350.5, Math.min(369.5, camera.position.x));
      camera.position.z = Math.max(-25.3, Math.min(17.3, camera.position.z));
    }
  }
}

function updatePrompt() {
  nearestBook = null;
  nearestDoor = null;
  nearestChest = null;
  nearestSafe = null;
  if (paused || letterOpen || bossQuizActive || endingActive || !gameOverEl.classList.contains("hidden") || !startEl.classList.contains("hidden") || !winEl.classList.contains("hidden")) {
    promptEl.classList.remove("visible");
    actionButton.classList.add("hidden");
    return;
  }
  if (bearWarningTimer > 0) {
    promptEl.textContent = "The bear drove you back to the forest entrance";
    promptEl.classList.add("visible");
    actionButton.classList.add("hidden");
    return;
  }
  raycaster.setFromCamera({ x: 0, y: 0 }, camera);
  const hits = raycaster.intersectObjects(bookMeshes, true);
  for (const hit of hits) {
    const group = hit.object.parent;
    if (!group || !group.visible || group.userData.found || group.userData.level !== level) continue;
    if (hit.distance < 2.25) {
      nearestBook = group;
      break;
    }
  }
  if (!nearestBook) {
    let closest = null;
    let closestDistance = Infinity;
    for (const book of bookMeshes) {
      if (!book.visible || book.userData.found || book.userData.level !== level) continue;
      const distance = camera.position.distanceTo(book.position);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = book;
      }
    }
    if (closestDistance < 1.35) nearestBook = closest;
  }

  if (level === 1 && !nearestBook && cabinDoor && !doorOpen) {
    const doorHits = raycaster.intersectObject(cabinDoor, false);
    if (doorHits.length && doorHits[0].distance < 2.65) nearestDoor = cabinDoor;
    if (!nearestDoor && camera.position.distanceTo(cabinDoor.position) < 1.45) nearestDoor = cabinDoor;
  }
  if (level === 2 && !nearestBook && !churchDoorOpen) {
    const churchDoorHits = raycaster.intersectObjects(churchDoors, false);
    if (churchDoorHits.length && churchDoorHits[0].distance < 2.8) nearestDoor = churchDoorHits[0].object;
    if (!nearestDoor && camera.position.distanceTo(churchDoors[0].position) < 1.7) nearestDoor = churchDoors[0];
  }
  if (level === 4 && !nearestBook && !chestOpen && treasureChest) {
    const chestHits = raycaster.intersectObjects([treasureChest, treasureChestLid], false);
    if (chestHits.length && chestHits[0].distance < 2.8) nearestChest = treasureChest;
    if (!nearestChest && camera.position.distanceTo(treasureChest.position) < 1.7) nearestChest = treasureChest;
  }
  if (level === 6 && !nearestBook && !secretTrainDoorOpen && secretTrainDoor) {
    const secretDoorHits = raycaster.intersectObject(secretTrainDoor, false);
    if (secretDoorHits.length && secretDoorHits[0].distance < 2.8) nearestDoor = secretTrainDoor;
    if (!nearestDoor && camera.position.distanceTo(secretTrainDoor.position) < 1.55) nearestDoor = secretTrainDoor;
  }
  if (level === 6 && !nearestBook && !nearestDoor && !locomotiveDoorOpen && locomotiveDoor) {
    const locomotiveDoorHits = raycaster.intersectObject(locomotiveDoor, false);
    if (locomotiveDoorHits.length && locomotiveDoorHits[0].distance < 2.8) nearestDoor = locomotiveDoor;
    if (!nearestDoor && camera.position.distanceTo(locomotiveDoor.position) < 1.55) nearestDoor = locomotiveDoor;
  }
  if (level === 6 && !nearestBook && !nearestDoor && !trainSafeOpen && trainSafeDoor) {
    const safeHits = raycaster.intersectObjects([trainSafe, trainSafeDoor], false);
    if (safeHits.length && safeHits[0].distance < 2.8) nearestSafe = trainSafe;
    if (!nearestSafe && camera.position.distanceTo(trainSafeDoor.position) < 1.65) nearestSafe = trainSafe;
  }
  if (level === 7 && !nearestBook && !cathedralDoorOpen && cathedralDoors.length === 2) {
    const cathedralDoorHits = raycaster.intersectObjects(cathedralDoors, false);
    if (cathedralDoorHits.length && cathedralDoorHits[0].distance < 3.0) nearestDoor = cathedralDoorHits[0].object;
    if (!nearestDoor && camera.position.distanceTo(cathedralDoors[0].position) < 1.8) nearestDoor = cathedralDoors[0];
  }
  if (level === 8 && !nearestBook && !finalCathedralDoorOpen && finalCathedralDoors.length === 2) {
    const finalDoorHits = raycaster.intersectObjects(finalCathedralDoors, false);
    if (finalDoorHits.length && finalDoorHits[0].distance < 3.0) nearestDoor = finalDoorHits[0].object;
    if (!nearestDoor && camera.position.distanceTo(finalCathedralDoors[0].position) < 1.8) nearestDoor = finalCathedralDoors[0];
  }

  if (nearestBook) {
    promptEl.textContent = nearestBook.userData.title;
    actionButton.textContent = "Take";
    promptEl.classList.add("visible");
    actionButton.classList.remove("hidden");
  } else if (nearestSafe) {
    const toolCount = getTrainToolCount();
    promptEl.textContent = `Train safe - tools ${toolCount}/${nightTrainToolIds.length}`;
    actionButton.textContent = toolCount === nightTrainToolIds.length ? "Open" : "Locked";
    promptEl.classList.add("visible");
    actionButton.classList.remove("hidden");
  } else if (nearestChest) {
    promptEl.textContent = "Locked treasure chest";
    actionButton.textContent = "Open";
    promptEl.classList.add("visible");
    actionButton.classList.remove("hidden");
  } else if (nearestDoor && nearestDoor.userData.kind === "cathedralDoor") {
    const unlockCount = getRedSquareUnlockCount();
    promptEl.textContent = `St. Basil's doors - items ${unlockCount}/${redSquareUnlockIds.length}`;
    actionButton.textContent = unlockCount === redSquareUnlockIds.length ? "Open" : "Locked";
    promptEl.classList.add("visible");
    actionButton.classList.remove("hidden");
  } else if (nearestDoor && nearestDoor.userData.kind === "finalCathedralDoor") {
    const unlockCount = getFinalCathedralUnlockCount();
    promptEl.textContent = `Inner sanctuary - items ${unlockCount}/${cathedralFinalUnlockIds.length}`;
    actionButton.textContent = unlockCount === cathedralFinalUnlockIds.length ? "Open" : "Locked";
    promptEl.classList.add("visible");
    actionButton.classList.remove("hidden");
  } else if (nearestDoor) {
    promptEl.textContent = nearestDoor.userData.kind === "churchDoor"
      ? "Church entrance doors"
      : nearestDoor.userData.kind === "secretTrainDoor"
        ? "Concealed carriage panel"
        : nearestDoor.userData.kind === "locomotiveDoor"
          ? "Locomotive cab door"
          : "Cabin door";
    actionButton.textContent = "Open";
    promptEl.classList.add("visible");
    actionButton.classList.remove("hidden");
  } else {
    promptEl.classList.remove("visible");
    actionButton.classList.add("hidden");
  }
}

function updateBear(t, dt) {
  if (!bear) return;
  bear.visible = level === 4;
  if (level !== 4 || paused || letterOpen || !startEl.classList.contains("hidden") || !winEl.classList.contains("hidden")) return;

  const phase = t * 0.34;
  const nextX = 120 + Math.sin(phase) * 10.5;
  const nextZ = -11 + Math.sin(phase * 1.7) * 5.0;
  const directionX = Math.cos(phase) * 10.5;
  const directionZ = Math.cos(phase * 1.7) * 8.5;
  bear.position.set(nextX, 0, nextZ);
  bear.rotation.y = Math.atan2(-directionX, -directionZ);
  for (let i = 2; i < 6; i++) {
    bear.children[i].rotation.x = Math.sin(t * 5 + i * Math.PI) * 0.22;
  }

  if (camera.position.distanceTo(bear.position) < 1.75 && bearWarningTimer <= 0) {
    camera.position.set(120, 1.7, 22.0);
    yaw = 0;
    targetYaw = 0;
    bearWarningTimer = 2.6;
  }
  if (bearWarningTimer > 0) bearWarningTimer = Math.max(0, bearWarningTimer - dt);
}

function updateFinalEnding(dt, t) {
  if (!endingActive) return;
  endingTimer = Math.max(0, endingTimer - dt);
  const elapsed = 15 - endingTimer;
  const walkZ = 8.0 - elapsed * 0.42;
  endingDmitry.position.z = walkZ;
  endingFriend.position.z = walkZ + 0.3;
  endingDmitry.position.y = Math.abs(Math.sin(t * 5.2)) * 0.035;
  endingFriend.position.y = Math.abs(Math.sin(t * 5.2 + 0.7)) * 0.035;
  for (let i = 2; i < 4; i++) {
    endingDmitry.children[i].rotation.x = Math.sin(t * 5.2 + i * Math.PI) * 0.25;
    endingFriend.children[i].rotation.x = Math.sin(t * 5.2 + i * Math.PI + 0.7) * 0.25;
  }
  camera.position.x = 430 + Math.sin(t * 0.35) * 0.08;
  camera.rotation.order = "YXZ";
  camera.rotation.y = 0;
  camera.rotation.x = -0.08;

  if (endingTimer <= 0) {
    endingActive = false;
    theEndEl.classList.remove("hidden");
    setTimeout(returnToTitleScreen, 4000);
  }
}

function animate() {
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = performance.now() * 0.001;
  updatePlayer(dt);
  updateBear(t, dt);
  updateTrainEffects(dt);
  updateFinalEnding(dt, t);
  updatePrompt();
  if ((level === 1 || level === 3 || level === 4) && !paused && audioContext && owlTimer > 0 && startEl.classList.contains("hidden")) {
    owlTimer -= dt;
    if (owlTimer <= 0) {
      playOwlHoot();
      resetOwlTimer();
    }
  }
  for (const book of bookMeshes) {
    if (!book.userData.found) {
      book.rotation.x = Math.sin(t * 2 + book.position.x) * 0.035;
    }
  }
  if (timeMode === "night") lamp.intensity = 2.55 + Math.sin(t * 7) * 0.35;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

resetGame();
setTimeMode("night");
animate();
