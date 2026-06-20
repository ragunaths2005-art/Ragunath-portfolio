/* --------------------------------------------------
   NETFLIX CLONE - CORE JAVASCRIPT
   Engine: Modern ES6 Vanilla JS
   Features: Dynamic rendering, LocalStorage, Sliders, Search, YouTube Trailer API
-------------------------------------------------- */

// ==========================================
// 1. MOCK DATABASE (30+ High-Fidelity Movies)
// ==========================================
const MOVIES_DATABASE = [
  // Trending Now
  {
    id: "t1",
    title: "Cosmic Horizon",
    categories: ["trending", "scifi", "popular"],
    description: "In the year 2184, a deep-space research vessel encounters an ancient, non-terrestrial anomaly that threatens to collapse the fabric of space-time itself. As gravity warps, the crew must choose between self-preservation and the survival of humanity.",
    rating: "98% Match",
    year: "2024",
    duration: "2h 18m",
    maturity: "16+",
    genres: ["Sci-Fi", "Suspense", "Thriller"],
    moods: ["Mind-bending", "Exciting", "Atmospheric"],
    cast: ["Lucas Vance", "Elara Voss", "Dr. Julian Black"],
    backdrop: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1200&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&auto=format&fit=crop",
    trailerId: "n9xhJrPXop4" // Dune-like cinematic trailer
  },
  {
    id: "t2",
    title: "Neon Syndicate",
    categories: ["trending", "action", "popular"],
    description: "Inside the cybernetic sprawl of Neo-Tokyo, a rogue data smuggler is blackmailed by a high-ranking corporate syndicate. Armed with cutting-edge tech and a lethal cyber-blade, he embarks on a high-octane quest to expose the city's corruption.",
    rating: "95% Match",
    year: "2023",
    duration: "6 Seasons",
    maturity: "18+",
    genres: ["Action", "Cyberpunk", "Drama"],
    moods: ["Gritty", "Exciting", "Adrenaline-fueled"],
    cast: ["Kenji Takahashi", "Reiko Chen", "Marcus Steel"],
    backdrop: "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?w=1200&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&auto=format&fit=crop",
    trailerId: "oqxAJKy0R4A" // Squid Game style tension
  },
  {
    id: "t3",
    title: "The Haunted Cabin",
    categories: ["trending", "horror"],
    description: "Five long-time friends rent an isolated forest cabin for a weekend reunion. They inadvertently awaken a sinister, shape-shifting entity dormant in the woods, turning their peaceful getaway into a desperate, terrifying fight for survival.",
    rating: "91% Match",
    year: "2024",
    duration: "1h 45m",
    maturity: "18+",
    genres: ["Horror", "Mystery", "Supernatural"],
    moods: ["Chilling", "Suspenseful", "Scary"],
    cast: ["Sarah Jenkins", "Tyler Miller", "Amanda Thorne"],
    backdrop: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=1200&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop",
    trailerId: "Di310WS8zLk" // Wednesday-like mystery mood
  },
  {
    id: "t4",
    title: "Shadow Assassin",
    categories: ["trending", "action", "popular"],
    description: "An elite shadow mercenary seeking quiet retirement is pulled back into the underworld when his former master becomes the target of a transnational intelligence conspiracy. Survival means eliminating every assassin in his path.",
    rating: "94% Match",
    year: "2024",
    duration: "2h 5m",
    maturity: "18+",
    genres: ["Action", "Thriller", "Martial Arts"],
    moods: ["Violent", "Slick", "Intense"],
    cast: ["Christian Zhao", "Natalia Romanov", "Arthur Pendelton"],
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop",
    trailerId: "b9EkMc79ZSU" // Stranger Things epic scale action
  },
  {
    id: "t5",
    title: "Laughter Therapy",
    categories: ["trending", "comedy"],
    description: "A brilliant but socially inept therapist decides to use extreme, unorthodox methods to cure his eccentric patients, with highly unpredictable and hilarious consequences that spiral completely out of control.",
    rating: "93% Match",
    year: "2023",
    duration: "3 Seasons",
    maturity: "13+",
    genres: ["Comedy", "Sitcom", "Drama"],
    moods: ["Witty", "Feel-Good", "Eccentric"],
    cast: ["David Cross", "Mila Kunis", "Simon Pegg"],
    backdrop: "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?w=1200&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=600&auto=format&fit=crop",
    trailerId: "dQw4w9WgXcQ" // Rick Roll loop as placeholder, or general fun
  },

  // Popular on Netflix
  {
    id: "p1",
    title: "Deep Abyss",
    categories: ["popular", "scifi"],
    description: "When a deep-sea research laboratory at the bottom of the Mariana Trench is breached by an unknown aquatic super-organism, a specialist rescue team must submerge into pitch darkness to retrieve the surviving scientists.",
    rating: "96% Match",
    year: "2023",
    duration: "2h 12m",
    maturity: "13+",
    genres: ["Action", "Sci-Fi", "Adventure"],
    moods: ["Suspenseful", "Claustrophobic", "Thrilling"],
    cast: ["Jack Mercer", "Elena Rostova", "Cmdr. David Vance"],
    backdrop: "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=1200&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop",
    trailerId: "d9MyW72ELq0" // Avatar scale ocean
  },
  {
    id: "p2",
    title: "Cyber City Chronicles",
    categories: ["popular", "scifi", "action"],
    description: "In a neon metropolis ruled by synthetic intelligence, a cybernetic detective investigates a series of memory-theft homicides. The investigation leads him directly to the neural mainframe that manages the city's entire population.",
    rating: "94% Match",
    year: "2024",
    duration: "1 Season",
    maturity: "16+",
    genres: ["Sci-Fi", "Mystery", "Cyberpunk"],
    moods: ["Cerebral", "Dark", "Slick"],
    cast: ["Ray Sterling", "Kira Cole", "Nexus-9 Robot"],
    backdrop: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop",
    trailerId: "zSWdZATo3Es" // Interstellar depth
  },
  {
    id: "p3",
    title: "The Golden Valley",
    categories: ["popular", "toprated"],
    description: "An awe-inspiring cinematic documentary exploring the world's most remote mountain valleys, showcasing the extraordinary, resilient species that live on the vertical borders of glaciers and survive extreme climates.",
    rating: "97% Match",
    year: "2024",
    duration: "1h 38m",
    maturity: "PG",
    genres: ["Documentary", "Nature", "Adventure"],
    moods: ["Inspiring", "Breathtaking", "Relaxing"],
    cast: ["Sir David Attenborough (Narrator)"],
    backdrop: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=600&auto=format&fit=crop",
    trailerId: "n9xhJrPXop4"
  },
  {
    id: "p4",
    title: "Vapor Neon",
    categories: ["popular", "comedy"],
    description: "Two slacker programmers accidentally create a sentient, retro AI that only communicates through 80s pop song references. Together they launch an underground internet radio empire that gets hunted by the FBI.",
    rating: "89% Match",
    year: "2024",
    duration: "1h 50m",
    maturity: "16+",
    genres: ["Comedy", "Sci-Fi", "Music"],
    moods: ["Goofy", "Retro", "Quirky"],
    cast: ["Leo Stark", "Gary Cole", "Alexa Echo"],
    backdrop: "https://images.unsplash.com/photo-1568849676085-51415703900f?w=1200&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop",
    trailerId: "Di310WS8zLk"
  },

  // Action
  {
    id: "a1",
    title: "Apex Velocity",
    categories: ["action", "popular"],
    description: "A former Formula 1 racer is forced to drive getaway vehicles for a highly planned vault heist. Under the nose of federal agents, he must weave through high-stakes urban pursuits while figuring out a way to escape both the law and his gang.",
    rating: "92% Match",
    year: "2023",
    duration: "2h 0m",
    maturity: "16+",
    genres: ["Action", "Thriller", "Crime"],
    moods: ["Suspenseful", "Exciting", "Adrenaline-fueled"],
    cast: ["Dominic Cruz", "Michelle Reyes", "Bryan Stone"],
    backdrop: "https://images.unsplash.com/photo-1542204172-e7052809f852?w=1200&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop",
    trailerId: "oqxAJKy0R4A"
  },
  {
    id: "a2",
    title: "Iron Wall",
    categories: ["action", "toprated"],
    description: "An elite SWAT commander defending a crucial court witness in an abandoned apartment complex must coordinate defensive strategies against waves of corrupt, heavily armed mercs sent by an oligarch.",
    rating: "93% Match",
    year: "2022",
    duration: "1h 56m",
    maturity: "18+",
    genres: ["Action", "Suspense", "Crime"],
    moods: ["Gritty", "Violent", "Intense"],
    cast: ["Marcus Cole", "Jace Hunter", "Nadia Vance"],
    backdrop: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop",
    trailerId: "b9EkMc79ZSU"
  },
  {
    id: "a3",
    title: "Rogue Wave",
    categories: ["action"],
    description: "An ex-Navy SEAL is vacationing on a remote tropical island when it is suddenly seized by a paramilitant group holding the world's most powerful tech CEOs hostage. Time is running out before they execute their final extortion threat.",
    rating: "88% Match",
    year: "2023",
    duration: "2h 4m",
    maturity: "16+",
    genres: ["Action", "Adventure"],
    moods: ["Exciting", "Intense", "Suspenseful"],
    cast: ["Brad Pittman", "Chris Evanson", "Zoe Saldano"],
    backdrop: "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?w=1200&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&auto=format&fit=crop",
    trailerId: "d9MyW72ELq0"
  },

  // Comedy
  {
    id: "c1",
    title: "Double Trouble",
    categories: ["comedy"],
    description: "When twin brothers separated at birth—one a sophisticated diplomat, the other a clumsy street magician—accidentally swap passports at an international airport, they trigger a chaotic series of diplomatic misunderstandings.",
    rating: "90% Match",
    year: "2024",
    duration: "1h 52m",
    maturity: "13+",
    genres: ["Comedy", "Farce", "Family"],
    moods: ["Zany", "Heartwarming", "Goofy"],
    cast: ["Ryan Reynolds", "Ryan Reynolds", "Emma Stone"],
    backdrop: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=1200&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?w=600&auto=format&fit=crop",
    trailerId: "dQw4w9WgXcQ"
  },
  {
    id: "c2",
    title: "Stand Up NYC",
    categories: ["comedy", "trending"],
    description: "An intimate, unfiltered look behind the scenes of New York's competitive stand-up comedy circuit. Five aspiring comedians rehearse, face hecklers, and risk everything at open mic nights, hoping for their big break.",
    rating: "94% Match",
    year: "2023",
    duration: "2 Seasons",
    maturity: "18+",
    genres: ["Comedy", "Documentary", "Drama"],
    moods: ["Witty", "Raw", "Inspiring"],
    cast: ["Dave Chappelle", "Ali Wong", "Bill Burr"],
    backdrop: "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?w=1200&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop",
    trailerId: "Di310WS8zLk"
  },
  {
    id: "c3",
    title: "Holiday Mishap",
    categories: ["comedy"],
    description: "An uptight corporate executive's family vacation turns into an epic disaster when they book a house swap program and end up in a rural farm run by eccentric eco-hippies who have outlawed all forms of technology.",
    rating: "85% Match",
    year: "2022",
    duration: "1h 40m",
    maturity: "PG-13",
    genres: ["Comedy", "Adventure"],
    moods: ["Lighthearted", "Silly", "Feel-Good"],
    cast: ["Steve Carell", "Tina Fey", "Jack Black"],
    backdrop: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=1200&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&auto=format&fit=crop",
    trailerId: "dQw4w9WgXcQ"
  },

  // Horror
  {
    id: "h1",
    title: "The Foggy Manor",
    categories: ["horror", "popular"],
    description: "An investigator of paranormal fraud is hired to debunk the infamous spirits haunting a historic mansion. But when night falls and a thick, unnatural fog wraps around the grounds, she realizes she is dealing with absolute, terrifying evil.",
    rating: "93% Match",
    year: "2023",
    duration: "2h 10m",
    maturity: "18+",
    genres: ["Horror", "Mystery", "Supernatural"],
    moods: ["Ominous", "Gothic", "Scary"],
    cast: ["Vera Farmiga", "Patrick Wilson", "Florence Pugh"],
    backdrop: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=1200&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop",
    trailerId: "Di310WS8zLk"
  },
  {
    id: "h2",
    title: "Crimson Eclipse",
    categories: ["horror", "scifi"],
    description: "Astronauts stationed in a lunar base witness a mysterious solar eclipse that turns the moon's surface red. Shortly after, a biological contagion begins infecting the crew, transforming them into hyper-violent predators.",
    rating: "90% Match",
    year: "2024",
    duration: "1h 55m",
    maturity: "18+",
    genres: ["Horror", "Sci-Fi", "Thriller"],
    moods: ["Gory", "Suspenseful", "Terrifying"],
    cast: ["Dev Patel", "Jessica Chastain", "John Boyega"],
    backdrop: "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?w=1200&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=600&auto=format&fit=crop",
    trailerId: "zSWdZATo3Es"
  },
  {
    id: "h3",
    title: "Echoes of the Past",
    categories: ["horror"],
    description: "Using a newly developed experimental neural headset, a neuroscientist logs into the memories of a deceased serial killer. But the digital ghost of the killer starts manipulating the scientist's physical reality, breaking the border of safety.",
    rating: "87% Match",
    year: "2023",
    duration: "1h 48m",
    maturity: "16+",
    genres: ["Horror", "Psychological", "Mystery"],
    moods: ["Mind-bending", "Dark", "Chilling"],
    cast: ["Cillian Murphy", "Rebecca Hall", "Willem Dafoe"],
    backdrop: "https://images.unsplash.com/photo-1504701954957-2390f806e9b4?w=1200&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&auto=format&fit=crop",
    trailerId: "oqxAJKy0R4A"
  },

  // Top Rated
  {
    id: "r1",
    title: "Eternal Twilight",
    categories: ["toprated", "trending"],
    description: "An artistic, sweeping romance following two classical musicians in post-war Paris. As their careers pull them in separate directions, they make a pact to meet on the autumn equinox at a small bridge every five years.",
    rating: "99% Match",
    year: "2022",
    duration: "2h 25m",
    maturity: "PG-13",
    genres: ["Drama", "Romance", "Music"],
    moods: ["Emotional", "Poetic", "Romantic"],
    cast: ["Timothée Chalamet", "Saoirse Ronan", "Louis Garrel"],
    backdrop: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&auto=format&fit=crop",
    trailerId: "n9xhJrPXop4"
  },
  {
    id: "r2",
    title: "The Maestro's Mind",
    categories: ["toprated"],
    description: "An intense biographical thriller mapping the chaotic mental descent of a brilliant symphonic conductor as he attempts to compose his final masterpiece under heavy pressure from corporate sponsors.",
    rating: "98% Match",
    year: "2023",
    duration: "2h 8m",
    maturity: "13+",
    genres: ["Drama", "Thriller"],
    moods: ["Intense", "Cerebral", "Suspenseful"],
    cast: ["Benedict Cumberbatch", "Cate Blanchett", "Mark Rylance"],
    backdrop: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&auto=format&fit=crop",
    trailerId: "zSWdZATo3Es"
  },
  {
    id: "r3",
    title: "Mountain Ridge",
    categories: ["toprated", "popular"],
    description: "During a historic blizzard, two rival mountain climbers are stranded on the sheer face of K2. They must set aside their intense competition and combine their specialized skills to construct a survival shelter and make it down alive.",
    rating: "97% Match",
    year: "2023",
    duration: "1h 58m",
    maturity: "13+",
    genres: ["Drama", "Action", "Adventure"],
    moods: ["Inspiring", "Tense", "Breathtaking"],
    cast: ["Tom Hardy", "Oscar Isaac", "Elizabeth Debicki"],
    backdrop: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&auto=format&fit=crop",
    trailerId: "d9MyW72ELq0"
  },

  // Sci-Fi Specials
  {
    id: "s1",
    title: "Quantum Glitch",
    categories: ["scifi", "trending"],
    description: "A physics graduate student working with a prototype quantum computer accidentally shifts her consciousness into an alternate timeline where she was never born. She must locate a parallel version of her advisor to reverse the shift.",
    rating: "95% Match",
    year: "2024",
    duration: "2h 3m",
    maturity: "PG-13",
    genres: ["Sci-Fi", "Mystery"],
    moods: ["Mind-bending", "Cerebral", "Suspenseful"],
    cast: ["Zendaya", "Lakeith Stanfield", "Tilda Swinton"],
    backdrop: "https://images.unsplash.com/photo-1505673542670-a5e3ff5b14a3?w=1200&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=600&auto=format&fit=crop",
    trailerId: "zSWdZATo3Es"
  },
  {
    id: "s2",
    title: "Synthetic Souls",
    categories: ["scifi", "toprated"],
    description: "An emotional sci-fi anthology exploring the intimate personal lives of human-like androids working as caregivers in a coastal retirement community. Over decades, they begin to develop memories and real affection for their patients.",
    rating: "96% Match",
    year: "2023",
    duration: "1 Season",
    maturity: "13+",
    genres: ["Sci-Fi", "Drama", "Anthology"],
    moods: ["Emotional", "Thought-provoking", "Poetic"],
    cast: ["Florence Pugh", "Rami Malek", "Helen Mirren"],
    backdrop: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=600&auto=format&fit=crop",
    trailerId: "n9xhJrPXop4"
  },
  {
    id: "s3",
    title: "Nebula Runner",
    categories: ["scifi"],
    description: "A fast-paced celestial space race follows a young mechanic who steals a experimental warp runner to win a bounty large enough to purchase her colony's independence. She must outrun military ships and stellar solar storms.",
    rating: "92% Match",
    year: "2024",
    duration: "1h 55m",
    maturity: "PG",
    genres: ["Sci-Fi", "Action", "Adventure"],
    moods: ["Exciting", "Colorful", "Adrenaline-fueled"],
    cast: ["Hailee Steinfeld", "Pedro Pascal", "Winston Duke"],
    backdrop: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1200&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop",
    trailerId: "d9MyW72ELq0"
  }
];

// Define Category Names mapping
const CATEGORY_NAMES = {
  trending: "Trending Now",
  popular: "Popular on Netflix",
  action: "Action Thrillers",
  comedy: "Comedy Favorites",
  horror: "Horror & Suspense",
  toprated: "Top Rated Masterpieces",
  scifi: "Sci-Fi & Fantasy"
};

// Continue Watching Seed (Recently Watched)
const CONTINUE_WATCHING_SEED = [
  { movieId: "t1", progress: 68 },
  { movieId: "p1", progress: 35 },
  { movieId: "a2", progress: 88 },
  { movieId: "s1", progress: 15 }
];

// ==========================================
// 2. STATE MANAGEMENT & GLOBALS
// ==========================================
let myFavoritesList = JSON.parse(localStorage.getItem("netflix_mylist")) || [];
let activeTrailerPlayer = null; // Stores references to active YT widget instance
let searchDebounceTimeout = null;

// DOM Cache Elements
const mainHeader = document.getElementById("main-header");
const loaderScreen = document.getElementById("loader-screen");
const mainFeed = document.getElementById("main-feed");
const heroBgImg = document.getElementById("hero-bg-img");
const heroTitle = document.getElementById("hero-title");
const heroMatch = document.getElementById("hero-match");
const heroYear = document.getElementById("hero-year");
const heroMaturity = document.getElementById("hero-maturity");
const heroDuration = document.getElementById("hero-duration");
const heroDescription = document.getElementById("hero-description");
const heroRatingBadge = document.getElementById("hero-rating-badge");
const heroPlayBtn = document.getElementById("hero-play-btn");
const heroInfoBtn = document.getElementById("hero-info-btn");
const heroAudioToggle = document.getElementById("hero-audio-toggle");
const audioIcon = document.getElementById("audio-icon");

// Search DOM
const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const searchClearBtn = document.getElementById("search-clear-btn");
const searchResultsSection = document.getElementById("search-results-section");
const searchQueryText = document.getElementById("search-query-text");
const searchGrid = document.getElementById("search-grid");

// Modal DOM
const detailsModal = document.getElementById("details-modal");
const modalOverlay = document.getElementById("modal-overlay");
const modalContainer = document.getElementById("modal-container");
const modalClose = document.getElementById("modal-close");
const modalTitle = document.getElementById("modal-title");
const modalSynopsis = document.getElementById("modal-synopsis");
const modalMatch = document.getElementById("modal-match");
const modalYear = document.getElementById("modal-year");
const modalMaturity = document.getElementById("modal-maturity");
const modalDuration = document.getElementById("modal-duration");
const modalCast = document.getElementById("modal-cast");
const modalGenres = document.getElementById("modal-genres");
const modalMoods = document.getElementById("modal-moods");
const modalPlayBtn = document.getElementById("modal-play-btn");
const modalMyListBtn = document.getElementById("modal-mylist-btn");
const modalLikeBtn = document.getElementById("modal-like-btn");
const modalVolumeBtn = document.getElementById("modal-volume-btn");
const modalVideoWrapper = document.getElementById("modal-video-wrapper");
const modalBackdropFallback = document.getElementById("modal-backdrop-fallback");
const recommendationsGrid = document.getElementById("recommendations-grid");

// Mobile navigation dropdowns
const mobileNavToggle = document.getElementById("mobile-nav-toggle");
const mobileNavDropdown = document.getElementById("mobile-nav-dropdown");
const navLinksContainer = document.getElementById("nav-links");

// Dropdowns Header
const notificationBtn = document.getElementById("notification-btn");
const notificationDropdown = document.getElementById("notification-dropdown");
const profileBtn = document.getElementById("profile-btn");
const profileDropdown = document.getElementById("profile-dropdown");

// ==========================================
// 3. INITIALIZATION & LOADER
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Page Feed
  setupHeroBanner();
  renderMainFeed();
  setupEventListeners();

  // Load YouTube Iframe API asynchronously
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Dissolve Loading Intro Screen
  setTimeout(() => {
    loaderScreen.classList.add("fade-out");
  }, 2500); // 2.5s allows path animation to draw and scale beautifully
});

// ==========================================
// 4. HEADER CONTROL (SCROLL & MENU POPUPS)
// ==========================================
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    mainHeader.classList.add("scrolled");
  } else {
    mainHeader.classList.remove("scrolled");
  }
});

// Close all active dropdown menus
function closeAllDropdowns() {
  notificationDropdown.classList.remove("show");
  profileDropdown.classList.remove("show");
  mobileNavDropdown.classList.remove("show");
}

// ==========================================
// 5. HERO BILLBOARD INITIALIZATION
// ==========================================
let heroMovie = null;

function setupHeroBanner() {
  // Select first film in trending category as Spotlight Hero
  const trendingList = MOVIES_DATABASE.filter(m => m.categories.includes("trending"));
  heroMovie = trendingList[0] || MOVIES_DATABASE[0];

  if (heroMovie) {
    heroBgImg.src = heroMovie.backdrop;
    heroTitle.innerText = heroMovie.title;
    heroMatch.innerText = heroMovie.rating;
    heroYear.innerText = heroMovie.year;
    heroMaturity.innerText = heroMovie.maturity;
    heroDuration.innerText = heroMovie.duration;
    heroDescription.innerText = heroMovie.description;
    heroRatingBadge.innerText = heroMovie.maturity;

    // Attach Play / More Info buttons trigger details modal
    heroPlayBtn.addEventListener("click", () => openDetailModal(heroMovie.id, true));
    heroInfoBtn.addEventListener("click", () => openDetailModal(heroMovie.id, false));
  }
}

// ==========================================
// 6. MAIN FEED BUILDER
// ==========================================
function renderMainFeed() {
  mainFeed.innerHTML = ""; // Clear existing containers

  // Row 1: Continue Watching (Only render if we have seed content)
  renderContinueWatchingRow();

  // Row 2: My List (Dynamic container)
  renderMyListRow();

  // Render rest of categories
  Object.keys(CATEGORY_NAMES).forEach(categoryKey => {
    const categoryMovies = MOVIES_DATABASE.filter(movie => movie.categories.includes(categoryKey));
    if (categoryMovies.length > 0) {
      createMovieRow(CATEGORY_NAMES[categoryKey], categoryMovies);
    }
  });
}

// Creating a standard sliding Row component
function createMovieRow(rowTitle, movies, customRowClass = "") {
  const rowContainer = document.createElement("div");
  rowContainer.className = `movie-row-container ${customRowClass}`;

  // Title
  const titleEl = document.createElement("h2");
  titleEl.className = "row-title";
  titleEl.innerText = rowTitle;
  rowContainer.appendChild(titleEl);

  // Wrapper
  const wrapperEl = document.createElement("div");
  wrapperEl.className = "slider-wrapper";

  // Arrow Left
  const arrowLeft = document.createElement("button");
  arrowLeft.className = "slider-arrow arrow-left";
  arrowLeft.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
  arrowLeft.setAttribute("aria-label", "Scroll left");

  // Arrow Right
  const arrowRight = document.createElement("button");
  arrowRight.className = "slider-arrow arrow-right";
  arrowRight.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
  arrowRight.setAttribute("aria-label", "Scroll right");

  // Slider Area
  const sliderEl = document.createElement("div");
  sliderEl.className = "movie-slider";

  // Add Movie Cards
  movies.forEach(movie => {
    const cardEl = createMovieCard(movie);
    sliderEl.appendChild(cardEl);
  });

  wrapperEl.appendChild(arrowLeft);
  wrapperEl.appendChild(sliderEl);
  wrapperEl.appendChild(arrowRight);
  rowContainer.appendChild(wrapperEl);
  mainFeed.appendChild(rowContainer);

  // Attach Arrow events
  arrowLeft.addEventListener("click", () => {
    sliderEl.scrollBy({ left: -sliderEl.offsetWidth * 0.75, behavior: "smooth" });
  });

  arrowRight.addEventListener("click", () => {
    sliderEl.scrollBy({ left: sliderEl.offsetWidth * 0.75, behavior: "smooth" });
  });
}

// Creating individual Movie Card DOM
function createMovieCard(movie, progressValue = null) {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.dataset.id = movie.id;

  // Image Thumbnail
  const img = document.createElement("img");
  img.src = movie.poster;
  img.alt = movie.title;
  img.loading = "lazy";
  card.appendChild(img);

  // If we have watch progress, add progress bar overlays
  if (progressValue !== null) {
    const progressBarContainer = document.createElement("div");
    progressBarContainer.className = "card-progress-bar-container";

    const progressBar = document.createElement("div");
    progressBar.className = "card-progress-bar";
    progressBar.style.width = `${progressValue}%`;

    progressBarContainer.appendChild(progressBar);
    card.appendChild(progressBarContainer);
  }

  // Hover Overlay Structure
  const hoverOverlay = document.createElement("div");
  hoverOverlay.className = "movie-card-overlay";

  const miniTitle = document.createElement("div");
  miniTitle.className = "card-title-mini";
  miniTitle.innerText = movie.title;

  const actionsRow = document.createElement("div");
  actionsRow.className = "card-actions-mini";
  actionsRow.innerHTML = `
    <button class="card-action-mini-btn play" aria-label="Play"><i class="fa-solid fa-play"></i></button>
    <button class="card-action-mini-btn add" aria-label="Add to list"><i class="fa-solid ${myFavoritesList.includes(movie.id) ? 'fa-check' : 'fa-plus'}"></i></button>
    <button class="card-action-mini-btn dropdown" aria-label="Details"><i class="fa-solid fa-chevron-down"></i></button>
  `;

  const metaRow = document.createElement("div");
  metaRow.className = "card-meta-mini";
  metaRow.innerHTML = `
    <span class="card-meta-match">${movie.rating}</span>
    <span class="card-meta-maturity">${movie.maturity}</span>
    <span>${movie.duration}</span>
  `;

  const genresRow = document.createElement("div");
  genresRow.className = "card-genres-mini";
  genresRow.innerText = movie.genres.slice(0, 2).join(" • ");

  hoverOverlay.appendChild(actionsRow);
  hoverOverlay.appendChild(miniTitle);
  hoverOverlay.appendChild(metaRow);
  hoverOverlay.appendChild(genresRow);
  card.appendChild(hoverOverlay);

  // Click card to open Details Modal
  card.addEventListener("click", (e) => {
    // If add button is clicked, prevent opening details immediately
    const addBtn = e.target.closest(".card-action-mini-btn.add");
    if (addBtn) {
      e.stopPropagation();
      toggleFavorite(movie.id);
      const icon = addBtn.querySelector("i");
      icon.className = myFavoritesList.includes(movie.id) ? "fa-solid fa-check" : "fa-solid fa-plus";
      return;
    }

    const playBtn = e.target.closest(".card-action-mini-btn.play");
    if (playBtn) {
      e.stopPropagation();
      openDetailModal(movie.id, true); // Open details modal directly in play/video mode
      return;
    }

    openDetailModal(movie.id, false);
  });

  return card;
}

// Rendering Continue Watching list
function renderContinueWatchingRow() {
  const watchMovies = CONTINUE_WATCHING_SEED.map(seed => {
    const movie = MOVIES_DATABASE.find(m => m.id === seed.movieId);
    return movie ? { ...movie, progress: seed.progress } : null;
  }).filter(Boolean);

  if (watchMovies.length > 0) {
    const rowContainer = document.createElement("div");
    rowContainer.className = "movie-row-container continue-watching-row";

    const titleEl = document.createElement("h2");
    titleEl.className = "row-title";
    titleEl.innerText = "Continue Watching for Sarah";
    rowContainer.appendChild(titleEl);

    const wrapperEl = document.createElement("div");
    wrapperEl.className = "slider-wrapper";

    const arrowLeft = document.createElement("button");
    arrowLeft.className = "slider-arrow arrow-left";
    arrowLeft.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';

    const arrowRight = document.createElement("button");
    arrowRight.className = "slider-arrow arrow-right";
    arrowRight.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';

    const sliderEl = document.createElement("div");
    sliderEl.className = "movie-slider";

    watchMovies.forEach(movie => {
      const cardEl = createMovieCard(movie, movie.progress);
      sliderEl.appendChild(cardEl);
    });

    wrapperEl.appendChild(arrowLeft);
    wrapperEl.appendChild(sliderEl);
    wrapperEl.appendChild(arrowRight);
    rowContainer.appendChild(wrapperEl);
    mainFeed.appendChild(rowContainer);

    arrowLeft.addEventListener("click", () => {
      sliderEl.scrollBy({ left: -sliderEl.offsetWidth * 0.75, behavior: "smooth" });
    });
    arrowRight.addEventListener("click", () => {
      sliderEl.scrollBy({ left: sliderEl.offsetWidth * 0.75, behavior: "smooth" });
    });
  }
}

// Rendering My List container
function renderMyListRow() {
  const myMoviesList = MOVIES_DATABASE.filter(m => myFavoritesList.includes(m.id));

  // Remove existing My List Row if rendered in past cycles
  const existingMyList = document.querySelector(".my-list-row-container");
  if (existingMyList) {
    existingMyList.remove();
  }

  // Render list if not empty
  if (myMoviesList.length > 0) {
    const rowContainer = document.createElement("div");
    rowContainer.className = "movie-row-container my-list-row-container";

    const titleEl = document.createElement("h2");
    titleEl.className = "row-title";
    titleEl.innerText = "My List";
    rowContainer.appendChild(titleEl);

    const wrapperEl = document.createElement("div");
    wrapperEl.className = "slider-wrapper";

    const arrowLeft = document.createElement("button");
    arrowLeft.className = "slider-arrow arrow-left";
    arrowLeft.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';

    const arrowRight = document.createElement("button");
    arrowRight.className = "slider-arrow arrow-right";
    arrowRight.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';

    const sliderEl = document.createElement("div");
    sliderEl.className = "movie-slider";

    myMoviesList.forEach(movie => {
      const cardEl = createMovieCard(movie);
      sliderEl.appendChild(cardEl);
    });

    wrapperEl.appendChild(arrowLeft);
    wrapperEl.appendChild(sliderEl);
    wrapperEl.appendChild(arrowRight);
    rowContainer.appendChild(wrapperEl);

    // Render it right after Continue Watching row (which is first child) or prepend if no Continue Watching
    const continueRow = document.querySelector(".continue-watching-row");
    if (continueRow) {
      continueRow.after(rowContainer);
    } else {
      mainFeed.prepend(rowContainer);
    }

    arrowLeft.addEventListener("click", () => {
      sliderEl.scrollBy({ left: -sliderEl.offsetWidth * 0.75, behavior: "smooth" });
    });
    arrowRight.addEventListener("click", () => {
      sliderEl.scrollBy({ left: sliderEl.offsetWidth * 0.75, behavior: "smooth" });
    });
  }
}

// ==========================================
// 7. MY LIST DYNAMIC STATE CONTROLLER
// ==========================================
function toggleFavorite(movieId) {
  if (myFavoritesList.includes(movieId)) {
    myFavoritesList = myFavoritesList.filter(id => id !== movieId);
  } else {
    myFavoritesList.push(movieId);
  }
  localStorage.setItem("netflix_mylist", JSON.stringify(myFavoritesList));
  renderMyListRow(); // Instantly update the homepage row!
  updateModalMyListBtn(movieId);
}

function updateModalMyListBtn(movieId) {
  if (!modalMyListBtn) return;
  const icon = modalMyListBtn.querySelector("i");
  if (myFavoritesList.includes(movieId)) {
    icon.className = "fa-solid fa-check";
    modalMyListBtn.setAttribute("aria-label", "Remove from My List");
    modalMyListBtn.classList.add("active");
  } else {
    icon.className = "fa-solid fa-plus";
    modalMyListBtn.setAttribute("aria-label", "Add to My List");
    modalMyListBtn.classList.remove("active");
  }
}

// ==========================================
// 8. DETAIL TRAILER MODAL SYSTEM
// ==========================================
let currentOpenMovie = null;
let isMutedInModal = true;

function openDetailModal(movieId, autoPlayVideo = false) {
  const movie = MOVIES_DATABASE.find(m => m.id === movieId);
  if (!movie) return;

  currentOpenMovie = movie;
  closeAllDropdowns();

  // Populate basic text nodes
  modalTitle.innerText = movie.title;
  modalSynopsis.innerText = movie.description;
  modalMatch.innerText = movie.rating;
  modalYear.innerText = movie.year;
  modalMaturity.innerText = movie.maturity;
  modalDuration.innerText = movie.duration;
  modalCast.innerText = movie.cast.join(", ");
  modalGenres.innerText = movie.genres.join(", ");
  modalMoods.innerText = movie.moods.join(", ");

  // Local storage List states
  updateModalMyListBtn(movie.id);

  // Setup backdrop fallback image initially
  modalBackdropFallback.src = movie.backdrop;
  modalBackdropFallback.classList.remove("fade");

  // Load YouTube Video Player Trailer
  loadModalTrailerVideo(movie.trailerId, autoPlayVideo);

  // Render Recommended "More Like This" Cards
  renderModalRecommendations(movie);

  // Display details container
  detailsModal.classList.add("show");
  document.body.style.overflow = "hidden"; // Prevent scrolling behind details card

  // Lock Like button state reset
  modalLikeBtn.classList.remove("active");
  modalLikeBtn.querySelector("i").className = "fa-solid fa-thumbs-up";
}

function closeDetailModal() {
  detailsModal.classList.remove("show");
  document.body.style.overflow = ""; // Restore background scrolling

  // Stop video playback by clearing DOM iframe contents
  const playerDiv = document.getElementById("player");
  if (playerDiv) {
    playerDiv.innerHTML = "";
  }
  activeTrailerPlayer = null;
  currentOpenMovie = null;
}

function loadModalTrailerVideo(trailerId, autoPlay = false) {
  // Clear previous player frame
  const playerWrapper = document.getElementById("modal-video-wrapper");
  const oldPlayer = document.getElementById("player");
  if (oldPlayer) oldPlayer.remove();

  const newPlayerDiv = document.createElement("div");
  newPlayerDiv.id = "player";
  playerWrapper.prepend(newPlayerDiv);

  isMutedInModal = true;
  updateModalVolumeBtnIcon();

  // Construct YouTube URL with parameters to hide branding, controls, and force auto-playing loop
  const autoPlayVal = autoPlay ? 1 : 1; // Always attempt auto-play for premium effect
  const embedUrl = `https://www.youtube.com/embed/${trailerId}?enablejsapi=1&autoplay=${autoPlayVal}&mute=1&controls=0&rel=0&loop=1&playlist=${trailerId}&showinfo=0&iv_load_policy=3&modestbranding=1`;

  const iframe = document.createElement("iframe");
  iframe.src = embedUrl;
  iframe.title = "YouTube Video Player";
  iframe.allow = "autoplay; encrypted-media";
  iframe.id = "yt-player-iframe";
  newPlayerDiv.appendChild(iframe);

  // Fade out fallback image shortly after trailer frame loads
  iframe.addEventListener("load", () => {
    setTimeout(() => {
      modalBackdropFallback.classList.add("fade");
    }, 1200);
  });
}

function toggleModalAudio() {
  const iframe = document.getElementById("yt-player-iframe");
  if (!iframe) return;

  isMutedInModal = !isMutedInModal;
  const func = isMutedInModal ? "mute" : "unMute";

  // PostMessage control to mute/unmute YouTube API without loading script fully
  iframe.contentWindow.postMessage(
    JSON.stringify({ event: "command", func: func, args: [] }),
    "*"
  );

  updateModalVolumeBtnIcon();
}

function updateModalVolumeBtnIcon() {
  const icon = modalVolumeBtn.querySelector("i");
  if (isMutedInModal) {
    icon.className = "fa-solid fa-volume-xmark";
  } else {
    icon.className = "fa-solid fa-volume-high";
  }
}

// Render 6 similar recommended film cards
function renderModalRecommendations(movie) {
  recommendationsGrid.innerHTML = ""; // Clear existing grid items

  // Search films sharing at least 1 genre, excluding current active open film
  const recommendations = MOVIES_DATABASE.filter(m => {
    if (m.id === movie.id) return false;
    return m.genres.some(g => movie.genres.includes(g));
  }).slice(0, 6);

  // If no genre match, just slice standard popular catalog
  if (recommendations.length === 0) {
    MOVIES_DATABASE.filter(m => m.id !== movie.id).slice(0, 6);
  }

  recommendations.forEach(rec => {
    const recCard = document.createElement("div");
    recCard.className = "rec-card";

    recCard.innerHTML = `
      <div class="rec-image-wrapper">
        <img src="${rec.backdrop}" alt="${rec.title}">
        <div class="rec-play-overlay">
          <i class="fa-solid fa-play"></i>
        </div>
        <span class="rec-duration-badge">${rec.duration}</span>
      </div>
      <div class="rec-body">
        <div class="rec-header-row">
          <span class="rec-match">${rec.rating}</span>
          <div class="rec-meta-tags">
            <span class="modal-maturity">${rec.maturity}</span>
            <span>${rec.year}</span>
          </div>
        </div>
        <h4 class="rec-title">${rec.title}</h4>
        <p class="rec-synopsis">${rec.description}</p>
      </div>
    `;

    // Click recommendations card to switch detail modal spotlight focus
    recCard.addEventListener("click", () => {
      modalContainer.scrollIntoView({ behavior: "smooth" });
      openDetailModal(rec.id, true);
    });

    recommendationsGrid.appendChild(recCard);
  });
}

// ==========================================
// 9. DYNAMIC LIVE SEARCH ENGINE
// ==========================================
function performSearch(query) {
  const normalizedQuery = query.toLowerCase().trim();

  if (normalizedQuery.length < 2) {
    // Restore home page sections feed
    searchResultsSection.classList.add("hidden");
    mainFeed.classList.remove("hidden");
    document.getElementById("hero-banner").classList.remove("hidden");
    return;
  }

  // Filter movies matching Title, Synopsis, Genres, or Cast items
  const matchedMovies = MOVIES_DATABASE.filter(movie => {
    return (
      movie.title.toLowerCase().includes(normalizedQuery) ||
      movie.description.toLowerCase().includes(normalizedQuery) ||
      movie.genres.some(g => g.toLowerCase().includes(normalizedQuery)) ||
      movie.cast.some(c => c.toLowerCase().includes(normalizedQuery))
    );
  });

  // Toggle Feed View
  document.getElementById("hero-banner").classList.add("hidden");
  mainFeed.classList.add("hidden");
  searchResultsSection.classList.remove("hidden");
  searchQueryText.innerText = `"${query}"`;

  // Render matched cards in results grid
  searchGrid.innerHTML = "";
  if (matchedMovies.length > 0) {
    matchedMovies.forEach(movie => {
      const card = createMovieCard(movie);
      searchGrid.appendChild(card);
    });
  } else {
    const noResults = document.createElement("div");
    noResults.className = "no-search-results";
    noResults.style.gridColumn = "1 / -1";
    noResults.style.textAlign = "center";
    noResults.style.padding = "100px 0";
    noResults.style.color = "var(--text-gray)";
    noResults.innerHTML = `
      <p style="font-size: 1.2rem; margin-bottom: 10px;">Your search for "${query}" did not find any matches.</p>
      <p style="font-size: 0.95rem;">Suggestions:</p>
      <ul style="list-style: none; display: inline-block; text-align: left; margin-top: 10px; font-size: 0.9rem;">
        <li>• Try different keywords</li>
        <li>• Looking for a movie or TV show? Search by its title</li>
        <li>• Try searching a genre like "Sci-Fi", "Action", or "Horror"</li>
      </ul>
    `;
    searchGrid.appendChild(noResults);
  }
}

// ==========================================
// 10. SYSTEM EVENTS BINDING
// ==========================================
function setupEventListeners() {
  // Mobile browse toggle button
  mobileNavToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileNavDropdown.classList.toggle("show");
    profileDropdown.classList.remove("show");
    notificationDropdown.classList.remove("show");
  });

  // Notification button popup toggle
  notificationBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    notificationDropdown.classList.toggle("show");
    profileDropdown.classList.remove("show");
    mobileNavDropdown.classList.remove("show");
  });

  // Profile button popup toggle
  profileBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    profileDropdown.classList.toggle("show");
    notificationDropdown.classList.remove("show");
    mobileNavDropdown.classList.remove("show");
  });

  // Close menus when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest("#profile-container")) {
      profileDropdown.classList.remove("show");
    }
    if (!e.target.closest("#notification-container")) {
      notificationDropdown.classList.remove("show");
    }
    if (!e.target.closest("#mobile-nav-toggle")) {
      mobileNavDropdown.classList.remove("show");
    }
  });

  // Search input expansion events
  searchBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    searchBox.classList.add("active");
    searchInput.focus();
  });

  document.addEventListener("click", (e) => {
    // If click is outside search container and search input has no text, collapse it
    if (!e.target.closest("#search-box") && searchInput.value.trim() === "") {
      searchBox.classList.remove("active");
    }
  });

  // Search input change events with standard debouncing
  searchInput.addEventListener("input", (e) => {
    const value = e.target.value;
    
    if (value.trim() !== "") {
      searchClearBtn.style.display = "block";
    } else {
      searchClearBtn.style.display = "none";
    }

    clearTimeout(searchDebounceTimeout);
    searchDebounceTimeout = setTimeout(() => {
      performSearch(value);
    }, 300);
  });

  // Search input clear cross button
  searchClearBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchClearBtn.style.display = "none";
    searchInput.focus();
    performSearch("");
  });

  // Modal events bindings
  modalClose.addEventListener("click", closeDetailModal);
  modalOverlay.addEventListener("click", closeDetailModal);

  // Esc key closes details modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDetailModal();
    }
  });

  // Modal Volume mute toggle click
  modalVolumeBtn.addEventListener("click", toggleModalAudio);

  // Modal List actions toggle click
  modalMyListBtn.addEventListener("click", () => {
    if (currentOpenMovie) {
      toggleFavorite(currentOpenMovie.id);
    }
  });

  // Modal Like feedback animation toggle
  modalLikeBtn.addEventListener("click", () => {
    const icon = modalLikeBtn.querySelector("i");
    modalLikeBtn.classList.toggle("active");
    if (modalLikeBtn.classList.contains("active")) {
      icon.className = "fa-solid fa-thumbs-up fa-bounce";
      setTimeout(() => {
        icon.className = "fa-solid fa-thumbs-up";
        modalLikeBtn.style.color = "var(--netflix-red)";
      }, 1000);
    } else {
      modalLikeBtn.style.color = "";
      icon.className = "fa-solid fa-thumbs-up";
    }
  });

  // Modal Play simulated fullscreen video player
  modalPlayBtn.addEventListener("click", () => {
    if (!currentOpenMovie) return;
    closeDetailModal();
    
    // Create immersive fullscreen video loading layout
    const fullscreenDiv = document.createElement("div");
    fullscreenDiv.style.position = "fixed";
    fullscreenDiv.style.top = "0";
    fullscreenDiv.style.left = "0";
    fullscreenDiv.style.width = "100vw";
    fullscreenDiv.style.height = "100vh";
    fullscreenDiv.style.zIndex = "2000";
    fullscreenDiv.style.backgroundColor = "#000000";
    fullscreenDiv.style.display = "flex";
    fullscreenDiv.style.justifyContent = "center";
    fullscreenDiv.style.alignItems = "center";

    // Playback instructions and back key
    fullscreenDiv.innerHTML = `
      <button id="playback-back-btn" style="position: absolute; top: 30px; left: 30px; z-index: 2010; width: 50px; height: 50px; border-radius: 50%; background-color: rgba(20,20,20,0.8); border: 1px solid rgba(255,255,255,0.4); display: flex; justify-content: center; align-items: center; color: white; font-size: 1.4rem; cursor: pointer;">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <iframe src="https://www.youtube.com/embed/${currentOpenMovie.trailerId}?autoplay=1&controls=1&rel=0" style="width: 100%; height: 100%; border: none;"></iframe>
    `;

    document.body.appendChild(fullscreenDiv);
    document.body.style.overflow = "hidden";

    fullscreenDiv.querySelector("#playback-back-btn").addEventListener("click", () => {
      fullscreenDiv.remove();
      document.body.style.overflow = "";
      openDetailModal(currentOpenMovie.id, false); // Re-open details view
    });
  });

  // Navigation Links items click navigation
  const navItems = document.querySelectorAll(".nav-item, .mobile-nav-item");
  navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      
      // Update active header links styling
      const navTarget = item.getAttribute("data-nav");
      
      navItems.forEach(n => n.classList.remove("active"));
      document.querySelectorAll(`[data-nav="${navTarget}"]`).forEach(el => el.classList.add("active"));

      closeAllDropdowns();

      // Implement navigation view swapping
      if (navTarget === "home") {
        searchInput.value = "";
        performSearch("");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (navTarget === "mylist") {
        searchInput.value = "";
        performSearch("");
        // Scroll to My List row if exists
        const myListRow = document.querySelector(".my-list-row-container");
        if (myListRow) {
          myListRow.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
          // If no items in My List, open a search for a general keyword
          performSearch("sci-fi");
        }
      } else if (navTarget === "tv") {
        performSearch("Seasons");
      } else if (navTarget === "movies") {
        // Search duration formatting "h " or "m"
        performSearch("h ");
      } else if (navTarget === "new") {
        performSearch("2024");
      }
    });
  });

  // Audio mute toggle on Hero Banner
  heroAudioToggle.addEventListener("click", () => {
    // Cycle toggle display state (visual representation)
    const icon = audioIcon;
    if (icon.classList.contains("fa-volume-xmark")) {
      icon.className = "fa-solid fa-volume-high";
      heroAudioToggle.setAttribute("aria-label", "Mute Audio");
    } else {
      icon.className = "fa-solid fa-volume-xmark";
      heroAudioToggle.setAttribute("aria-label", "Unmute Audio");
    }
  });

  // Sign out button
  document.getElementById("sign-out-btn").addEventListener("click", (e) => {
    e.preventDefault();
    alert("Signing out of Netflix Clone... (Simulated)");
    window.location.reload();
  });
}
