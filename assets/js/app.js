/**
 * MULTI MOVIES - Main Application Controller
 * Dynamic schema loading, widescreen Lucifer hero showcase, pill navigation, and interactions.
 */

const App = (function () {
  // Default embedded state matching schemas
  const defaultData = {
    siteConfig: {
      brand: {
        title: "MOVIES 4 U",
        badgeText: "MOVIES",
        logoText: "4 U",
        badgeBgColor: "#E50914"
      },
      navigation: {
        pillMenu: [
          { id: "home", label: "Home", hasDropdown: false, isActive: true },
          { id: "genre", label: "Genre", hasDropdown: true, isActive: false, dropdownItems: ["Action", "Cartoon", "Crime", "Drama", "Fantasy", "Horror", "Mystery", "Sci-Fi"] },
          { id: "category", label: "Category", hasDropdown: true, isActive: false, dropdownItems: ["Trending Series", "Blockbusters", "Top 10 Today", "New Releases"] },
          { id: "ott", label: "OTT", hasDropdown: true, isActive: false, dropdownItems: ["Netflix", "HBO Max", "Disney+", "Prime Video", "Apple TV+"] },
          { id: "gen-z", label: "Gen Z", hasDropdown: true, isActive: false, dropdownItems: ["Viral Hits", "Anime", "K-Drama", "Cyberpunk", "Teen Mystery"] },
          { id: "collection", label: "Collection", hasDropdown: true, isActive: false, dropdownItems: ["DC Universe", "Marvel", "Dark Fantasy", "Crime Investigation"] },
          { id: "sos", label: "SOS", hasDropdown: true, isActive: false, dropdownItems: ["Roll Dice", "Quick Binge (<30m)", "Hidden Gems"] }
        ],
        utilities: [
          { id: "search", icon: "search", tooltip: "Search" },
          { id: "bookmark", icon: "bookmark", tooltip: "Watchlist" },
          { id: "filter", icon: "tune", tooltip: "Filters & Schema Manager" }
        ]
      }
    },
    hero: {
      activeSlideIndex: 8,
      slides: [
        {
          id: "slide-stranger-things",
          badge: "LATEST UPDATES",
          title: "Stranger Things",
          rating: 8.7,
          year: 2016,
          type: "Series",
          duration: "50 min",
          quality: "4K HDR",
          synopsis: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
          backdropUrl: "assets/images/lucifer_hero_banner.jpg",
          trailerUrl: "https://www.youtube-nocookie.com/embed/b9EkMc79ZSU?autoplay=1"
        },
        {
          id: "slide-breaking-bad",
          badge: "TOP RATED",
          title: "Breaking Bad",
          rating: 9.5,
          year: 2008,
          type: "Series",
          duration: "47 min",
          quality: "1080p",
          synopsis: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing methamphetamine with a former student to secure his family's future.",
          backdropUrl: "assets/images/tmdb_lucifer.jpg",
          trailerUrl: "https://www.youtube-nocookie.com/embed/HhesaQXLuRY?autoplay=1"
        },
        {
          id: "slide-peaky-blinders",
          badge: "FAN FAVORITE",
          title: "Peaky Blinders",
          rating: 8.8,
          year: 2013,
          type: "Series",
          duration: "55 min",
          quality: "1080p",
          synopsis: "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
          backdropUrl: "assets/images/lucifer_hero_banner.jpg",
          trailerUrl: "https://www.youtube-nocookie.com/embed/oVzVdvGIC7U?autoplay=1"
        },
        {
          id: "slide-the-witcher",
          badge: "LATEST UPDATES",
          title: "The Witcher",
          rating: 8.1,
          year: 2019,
          type: "Series",
          duration: "60 min",
          quality: "4K HDR",
          synopsis: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
          backdropUrl: "assets/images/tmdb_lucifer.jpg",
          trailerUrl: "https://www.youtube-nocookie.com/embed/ndl1W4ltcmg?autoplay=1"
        },
        {
          id: "slide-dark",
          badge: "SCI-FI MASTERPIECE",
          title: "Dark",
          rating: 8.7,
          year: 2017,
          type: "Series",
          duration: "53 min",
          quality: "1080p",
          synopsis: "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
          backdropUrl: "assets/images/lucifer_hero_banner.jpg",
          trailerUrl: "https://www.youtube-nocookie.com/embed/rrwycJ08PSA?autoplay=1"
        },
        {
          id: "slide-squid-game",
          badge: "GLOBAL PHENOMENON",
          title: "Squid Game",
          rating: 8.0,
          year: 2021,
          type: "Series",
          duration: "55 min",
          quality: "4K HDR",
          synopsis: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
          backdropUrl: "assets/images/tmdb_lucifer.jpg",
          trailerUrl: "https://www.youtube-nocookie.com/embed/oqxAJKy0ii4?autoplay=1"
        },
        {
          id: "slide-wednesday",
          badge: "TRENDING NOW",
          title: "Wednesday",
          rating: 8.1,
          year: 2022,
          type: "Series",
          duration: "48 min",
          quality: "1080p",
          synopsis: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends and foes at Nevermore Academy.",
          backdropUrl: "assets/images/lucifer_hero_banner.jpg",
          trailerUrl: "https://www.youtube-nocookie.com/embed/Di310BC8urU?autoplay=1"
        },
        {
          id: "slide-house-of-dragon",
          badge: "EPIC FANTASY",
          title: "House of the Dragon",
          rating: 8.5,
          year: 2022,
          type: "Series",
          duration: "60 min",
          quality: "4K HDR",
          synopsis: "An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.",
          backdropUrl: "assets/images/tmdb_lucifer.jpg",
          trailerUrl: "https://www.youtube-nocookie.com/embed/DotnJ7tTA34?autoplay=1"
        },
        {
          id: "slide-lucifer",
          badge: "LATEST UPDATES",
          title: "Lucifer",
          rating: 8.4,
          year: 2016,
          type: "Series",
          duration: "45 min",
          quality: "1080p",
          synopsis: "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat tha...",
          backdropUrl: "assets/images/multimovies_hero_bg.jpg",
          trailerUrl: "https://www.youtube-nocookie.com/embed/X4bF_quwNtw?autoplay=1"
        },
        {
          id: "slide-siksa-neraka",
          badge: "HORROR SPECIAL",
          title: "Siksa Neraka",
          rating: 7.8,
          year: 2023,
          type: "Movie",
          duration: "1j 38m",
          quality: "1080p",
          synopsis: "Four siblings get swept away by a river current and find themselves waking up in the harrowing underworld where their sins are judged with relentless torture.",
          backdropUrl: "assets/images/hero_banner.jpg",
          trailerUrl: "https://www.youtube-nocookie.com/embed/84qF8R1RjX4?autoplay=1"
        }
      ]
    },
    episodes: {
      seriesTitle: "Lucifer",
      currentSeason: 1,
      totalSeasons: 6,
      episodes: [
        {
          episodeNumber: 1,
          title: "Pilot",
          duration: "45m",
          synopsis: "Upon leaving hell, Lucifer Morningstar takes up residence in Los Angeles where he helps Detective Chloe Decker solve the murder of a pop star.",
          thumbnailUrl: "assets/images/lucifer_hero_banner.jpg"
        },
        {
          episodeNumber: 2,
          title: "Lucifer, Stay. Good Devil.",
          duration: "44m",
          synopsis: "Lucifer and Chloe work together to solve the murder of a paparazzo who caused the death of a movie star's son.",
          thumbnailUrl: "assets/images/tmdb_lucifer.jpg"
        },
        {
          episodeNumber: 3,
          title: "The Would-Be Prince of Darkness",
          duration: "43m",
          synopsis: "When a future superstar quarterback finds a dead girl floating in his pool, he turns to Lucifer for help.",
          thumbnailUrl: "assets/images/lucifer_season4_backdrop.jpg"
        },
        {
          episodeNumber: 4,
          title: "Manly Whatnots",
          duration: "44m",
          synopsis: "Lucifer seeks Chloe's advice on seduction after a girl rejects his charms, while they investigate a missing person case.",
          thumbnailUrl: "assets/images/lucifer_s4_promo.jpg"
        }
      ]
    },
    trends: {
      sectionTabs: [
        { id: "trends", label: "TRENDS NOW", isActive: true },
        { id: "popular", label: "POPULAR", isActive: false },
        { id: "premiers", label: "PREMIERS", isActive: false },
        { id: "favorit", label: "FAVORIT", isActive: false }
      ],
      movies: [
        { id: "m1", title: "Pengantin Iblis", rating: 4, posterUrl: "assets/images/poster_pengantin_iblis.jpg" },
        { id: "m2", title: "Siksa Neraka", rating: 4, posterUrl: "assets/images/poster_siksa_neraka.jpg" },
        { id: "m3", title: "DreadOut", rating: 4, posterUrl: "assets/images/poster_dreadout.jpg" },
        { id: "m4", title: "Annabelle", rating: 4, posterUrl: "assets/images/poster_annabelle.jpg" }
      ]
    },
    continueWatching: {
      sectionTitle: "CONTINUE WATCHING",
      items: [
        { id: "cw-1", title: "Malam Pencabut Nyawa", thumbnailUrl: "assets/images/thumb_malam_nyawa.jpg", progressPercentage: 85 },
        { id: "cw-2", title: "Jailangkung: Sandekala", thumbnailUrl: "assets/images/thumb_jailangkung.jpg", progressPercentage: 65 },
        { id: "cw-3", title: "Pengabdi Setan", thumbnailUrl: "assets/images/thumb_pengabdi_setan.jpg", progressPercentage: 90 }
      ]
    },
    cartoon: {
      sectionTitle: "CARTOON & ANIMATION HITS",
      badge: "FAMILY & GEN Z FAVORITES",
      items: [
        {
          id: "cartoon-spider-verse",
          title: "Spider-Man: Across the Spider-Verse",
          rating: 8.7,
          year: 2023,
          duration: "2j 20m",
          genre: "Cartoon / Animation",
          posterUrl: "assets/images/poster_spider_verse.jpg",
          synopsis: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
          trailerUrl: "https://www.youtube-nocookie.com/embed/cqGjhVJWtEg?autoplay=1"
        },
        {
          id: "cartoon-arcane",
          title: "Arcane: League of Legends",
          rating: 9.0,
          year: 2021,
          duration: "40 min",
          genre: "Cartoon / Animation",
          posterUrl: "assets/images/poster_arcane.jpg",
          synopsis: "Set in Piltover and Zaun, the story follows the origins of two iconic League champions-and the power that will tear them apart.",
          trailerUrl: "https://www.youtube-nocookie.com/embed/fXmAurh012s?autoplay=1"
        },
        {
          id: "cartoon-inside-out-2",
          title: "Inside Out 2",
          rating: 7.8,
          year: 2024,
          duration: "1j 36m",
          genre: "Cartoon / Animation",
          posterUrl: "assets/images/poster_inside_out_2.jpg",
          synopsis: "Joy, Sadness, Anger, Fear and Disgust manage operations until Anxiety shows up with an all-new crew of emotions.",
          trailerUrl: "https://www.youtube-nocookie.com/embed/LEjhY15eCx0?autoplay=1"
        },
        {
          id: "cartoon-despicable-me-4",
          title: "Despicable Me 4",
          rating: 7.3,
          year: 2024,
          duration: "1j 34m",
          genre: "Cartoon / Animation",
          posterUrl: "assets/images/poster_despicable_me_4.jpg",
          synopsis: "Gru, Lucy, and their family welcome Gru Jr., who is intent on tormenting his dad as a new nemesis forces them into hiding.",
          trailerUrl: "https://www.youtube-nocookie.com/embed/qQlr9-rF32A?autoplay=1"
        }
      ]
    },
    filterConfig: {
      types: ["Movies & series", "Movies", "Series"],
      categories: ["All categories", "Cartoon", "Anime", "Action", "Comedy", "Adventure", "Fantasy"],
      networks: ["All networks", "TV Asahi", "Toho", "Netflix", "Crunchyroll", "Disney+", "Hulu"],
      years: ["All years", "2025", "2024", "2023", "2014", "2009", "2002", "2001", "1999", "1996"],
      sortOptions: ["Recently added", "Rating: High to Low", "Year: Newest first", "Alphabetical"]
    },
    searchCatalog: {
      searchQuery: "shinchan",
      totalMatches: 33,
      subtitle: "33 matching titles. Explore by category, network, year, or a title you love.",
      items: [
        {
          id: "shinchan-spinoff",
          title: "Shinchan Spin-off",
          rating: 7.0,
          year: 2025,
          type: "Series",
          category: "Cartoon",
          network: "TV Asahi",
          posterUrl: "assets/images/poster_shinchan_spinoff.jpg",
          synopsis: "Shinnosuke embarks on hilarious intergalactic misadventures with strange aliens.",
          trailerUrl: "https://www.youtube-nocookie.com/embed/84qF8R1RjX4?autoplay=1"
        },
        {
          id: "shinchan-super-hot-spicy-dancers",
          title: "Shinchan the Movie: Super Hot Kasukabe Dancers",
          rating: 6.2,
          year: 2025,
          type: "Movie",
          category: "Cartoon",
          network: "Toho",
          posterUrl: "assets/images/poster_shinchan_spicy_dancers.jpg",
          synopsis: "The Kasukabe Defense Force takes on a festive spicy samba dance competition.",
          trailerUrl: "https://www.youtube-nocookie.com/embed/84qF8R1RjX4?autoplay=1"
        },
        {
          id: "shinchan-animal-kingdom",
          title: "Shinchan Kasukabe Animal Kingdom",
          rating: 6.9,
          year: 2009,
          type: "Movie",
          category: "Cartoon",
          network: "TV Asahi",
          posterUrl: "assets/images/poster_shinchan_animal_kingdom.jpg",
          synopsis: "Hiroshi and Misa drink a strange potion turning Kasukabe residents into wild animals.",
          trailerUrl: "https://www.youtube-nocookie.com/embed/84qF8R1RjX4?autoplay=1"
        },
        {
          id: "shinchan-warring-states",
          title: "Shinchan The Battle of the Warring States",
          rating: 7.3,
          year: 2002,
          type: "Movie",
          category: "Cartoon",
          network: "TV Asahi",
          posterUrl: "assets/images/poster_shinchan_warring_states.jpg",
          synopsis: "Shinnosuke travels back in time to feudal Sengoku Japan and helps a noble samurai.",
          trailerUrl: "https://www.youtube-nocookie.com/embed/84qF8R1RjX4?autoplay=1"
        },
        {
          id: "shinchan-adult-empire",
          title: "Shinchan: The Adult Empire Strikes Back",
          rating: 8.2,
          year: 2001,
          type: "Movie",
          category: "Cartoon",
          network: "Toho",
          posterUrl: "assets/images/poster_shinchan_adult_empire.jpg",
          synopsis: "A mysterious organization uses 20th-century nostalgia to hypnotize adults.",
          trailerUrl: "https://www.youtube-nocookie.com/embed/84qF8R1RjX4?autoplay=1"
        },
        {
          id: "shinchan-hot-springs",
          title: "Shinchan: Explosion! The Hot Spring's Battle",
          rating: 6.4,
          year: 1999,
          type: "Movie",
          category: "Cartoon",
          network: "TV Asahi",
          posterUrl: "assets/images/poster_shinchan_hot_spring.jpg",
          synopsis: "The Nohara household discovers a legendary therapeutic hot spring beneath their floorboards.",
          trailerUrl: "https://www.youtube-nocookie.com/embed/84qF8R1RjX4?autoplay=1"
        },
        {
          id: "shinchan-henderland",
          title: "Shinchan: Adventure in Henderland",
          rating: 7.5,
          year: 1996,
          type: "Movie",
          category: "Cartoon",
          network: "TV Asahi",
          posterUrl: "assets/images/poster_shinchan_warring_states.jpg",
          synopsis: "Shinchan visits the bizarre amusement park Henderland.",
          trailerUrl: "https://www.youtube-nocookie.com/embed/84qF8R1RjX4?autoplay=1"
        },
        {
          id: "shinchan-robot-dad",
          title: "Shinchan: Serious Battle! Robot Dad",
          rating: 7.9,
          year: 2014,
          type: "Movie",
          category: "Cartoon",
          network: "Toho",
          posterUrl: "assets/images/poster_shinchan_adult_empire.jpg",
          synopsis: "Hiroshi goes to an unusual massage parlor and returns as a powerful cyborg robot father.",
          trailerUrl: "https://www.youtube-nocookie.com/embed/84qF8R1RjX4?autoplay=1"
        }
      ]
    }
  };

  let state = JSON.parse(JSON.stringify(defaultData));

  /**
   * Render Multi Movies Header & Centered Pill Navigation
   */
  function renderHeader() {
    const { brand, navigation } = state.siteConfig;

    // Brand logo
    const brandContainer = document.getElementById('brand-logo-container');
    if (brandContainer) {
      brandContainer.innerHTML = `
        <a href="#home" class="multimovies-brand">
          <span class="brand-badge">${brand.badgeText || 'MULTI'}</span>
          <span class="brand-text">${brand.logoText || 'MOVIES'}</span>
        </a>
      `;
    }

    // Centered Pill Menu
    const pillNavContainer = document.getElementById('pill-nav-menu');
    if (pillNavContainer && navigation.pillMenu) {
      pillNavContainer.innerHTML = navigation.pillMenu.map(item => `
        <li class="pill-menu-item">
          <button class="pill-nav-link ${item.isActive ? 'active' : ''}" data-id="${item.id}">
            <span>${item.label}</span>
            ${item.hasDropdown ? '<span class="chevron-down-icon">⌵</span>' : ''}
          </button>
          ${item.hasDropdown && item.dropdownItems ? `
            <div class="pill-dropdown-menu">
              ${item.dropdownItems.map(drop => `<a href="#${drop.toLowerCase()}" class="dropdown-item-link">${drop}</a>`).join('')}
            </div>
          ` : ''}
        </li>
      `).join('');

      // View switching helper
      function switchView(viewName) {
        const homeView = document.getElementById('home-view-container');
        const searchView = document.getElementById('search-view-container');
        if (viewName === 'home') {
          if (homeView) homeView.style.display = '';
          if (searchView) searchView.style.display = 'none';
        } else if (viewName === 'search' || viewName === 'cartoon') {
          if (homeView) homeView.style.display = 'none';
          if (searchView) searchView.style.display = '';
        }
      }

      // Close all open dropdowns
      function closeAllDropdowns() {
        pillNavContainer.querySelectorAll('.pill-menu-item.dropdown-open').forEach(item => {
          item.classList.remove('dropdown-open');
        });
      }

      // Click handling on pills — toggle dropdown on click
      pillNavContainer.querySelectorAll('.pill-nav-link').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();

          const pillId = btn.getAttribute('data-id');
          const parentItem = btn.closest('.pill-menu-item');
          const hasDropdown = parentItem && parentItem.querySelector('.pill-dropdown-menu');

          // Mark pill as active
          pillNavContainer.querySelectorAll('.pill-nav-link').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          if (hasDropdown) {
            // Toggle this dropdown, close others
            const isOpen = parentItem.classList.contains('dropdown-open');
            closeAllDropdowns();
            if (!isOpen) {
              parentItem.classList.add('dropdown-open');
            }
          } else {
            closeAllDropdowns();
            // Navigate to view
            if (pillId === 'home') {
              switchView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }
        });
      });

      // Dropdown item click — navigate and close dropdown
      pillNavContainer.querySelectorAll('.dropdown-item-link').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const txt = link.textContent.trim().toLowerCase();

          // Close dropdown after selection
          closeAllDropdowns();

          if (txt.includes('cartoon') || txt.includes('animation')) {
            // Switch to home view & scroll to cartoon section
            switchView('home');
            setTimeout(() => {
              const cartoonEl = document.getElementById('cartoon-section');
              if (cartoonEl) {
                cartoonEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 150);
          }
        });
      });

      // Close dropdowns when clicking anywhere outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.pill-menu-item')) {
          closeAllDropdowns();
        }
      });
    }

    // Right Utilities (Search, Bookmark, Filter)
    const utilitiesContainer = document.getElementById('right-utilities-container');
    if (utilitiesContainer) {
      utilitiesContainer.innerHTML = `
        <button class="utility-circle-btn" id="btn-utility-search" title="Search">
          <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        </button>
        <button class="utility-circle-btn" id="btn-utility-bookmark" title="Watchlist">
          <svg viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>
        </button>
        <button class="utility-circle-btn" id="btn-utility-filter" title="Filters & Schema Manager">
          <svg viewBox="0 0 24 24"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/></svg>
        </button>
      `;

      // Attach Search and Watchlist handlers
      const searchBtn = document.getElementById('btn-utility-search');
      if (searchBtn) {
        searchBtn.onclick = () => {
          const query = prompt("Search MULTI MOVIES:", "Lucifer");
          if (query) alert(`Searching for "${query}" across streaming catalogs...`);
        };
      }

      const bookmarkBtn = document.getElementById('btn-utility-bookmark');
      if (bookmarkBtn) {
        bookmarkBtn.onclick = () => {
          alert("✓ Saved Lucifer Season 1-6 to your Watchlist!");
        };
      }
    }
  }

  /**
   * Render Hero Section (Lucifer & Multi Slides)
   */
  function renderHero() {
    const { activeSlideIndex, slides } = state.hero;
    const currentSlide = slides[activeSlideIndex] || slides[8] || slides[0];
    const totalSlides = slides.length;

    const heroContainer = document.getElementById('hero-showcase-container');
    if (!heroContainer) return;

    // Slide number formatted (e.g., "09 / 10")
    const formattedCurrent = String(activeSlideIndex + 1).padStart(2, '0');
    const formattedTotal = String(totalSlides).padStart(2, '0');

    heroContainer.innerHTML = `
      <div class="hero-backdrop-layer">
        <img class="hero-backdrop-img" id="hero-backdrop-image" src="${currentSlide.backdropUrl || 'assets/images/multimovies_hero_bg.jpg'}" alt="${currentSlide.title}" />
        <div class="hero-gradient-overlay"></div>
      </div>

      <div class="hero-main-content">
        <!-- Tagline: — LATEST UPDATES -->
        <div class="hero-tagline-row">
          <span class="hero-red-dash"></span>
          <span class="hero-tagline-text">${currentSlide.badge || 'LATEST UPDATES'}</span>
        </div>

        <!-- Massive Title: Lucifer -->
        <h1 class="hero-series-title">${currentSlide.title}</h1>

        <!-- Metadata: ★ 8.4  2016  Series  45 min  1080p -->
        <div class="hero-meta-badge-row">
          <span class="hero-rating-pill">
            <span class="hero-star-icon">★</span> ${currentSlide.rating}
          </span>
          <span class="hero-meta-item">${currentSlide.year}</span>
          <span class="hero-meta-item">${currentSlide.type || 'Series'}</span>
          <span class="hero-meta-item">${currentSlide.duration || '45 min'}</span>
          <span class="hero-quality-badge">${currentSlide.quality || '1080p'}</span>
        </div>

        <!-- Synopsis Description -->
        <p class="hero-synopsis-text">${currentSlide.synopsis}</p>

        <!-- Buttons Row -->
        <div class="hero-action-buttons-group">
          <!-- ▷ Explore episodes -->
          <button class="btn-explore-episodes" id="hero-btn-explore">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Explore episodes
          </button>

          <!-- ⓘ More info -->
          <button class="btn-more-info" id="hero-btn-info">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            More info
          </button>

          <!-- + Watchlist -->
          <button class="btn-add-watchlist" id="hero-btn-add" title="Add to Watchlist">
            +
          </button>
        </div>

        <!-- Slider Carousel Indicator: 09 / 10 + Dashes + Arrows -->
        <div class="hero-slider-controls">
          <div class="slider-index-counter">
            <span class="slider-current-num">${formattedCurrent}</span>
            <span class="slider-total-num">/ ${formattedTotal}</span>
          </div>

          <div class="slider-dash-track" id="slider-dash-track">
            ${slides.map((_, idx) => `
              <span class="slider-dash ${idx === activeSlideIndex ? 'active' : ''}" data-index="${idx}" title="Slide ${idx + 1}"></span>
            `).join('')}
          </div>

          <div class="slider-nav-arrows">
            <button class="slider-arrow-btn" id="slider-prev-btn" aria-label="Previous slide">
              <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
            </button>
            <button class="slider-arrow-btn" id="slider-next-btn" aria-label="Next slide">
              <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;

    // Attach Event Listeners
    // 1. Explore episodes
    const exploreBtn = document.getElementById('hero-btn-explore');
    if (exploreBtn) {
      exploreBtn.onclick = () => {
        if (window.PlayerModal) {
          window.PlayerModal.openEpisodesModal(state.episodes);
        }
      };
    }

    // 2. More info
    const infoBtn = document.getElementById('hero-btn-info');
    if (infoBtn) {
      infoBtn.onclick = () => {
        if (window.PlayerModal) {
          window.PlayerModal.openPlayer(currentSlide);
        }
      };
    }

    // 3. Add to Watchlist
    const addBtn = document.getElementById('hero-btn-add');
    if (addBtn) {
      addBtn.onclick = () => {
        alert(`✓ Added "${currentSlide.title}" to your Watchlist!`);
      };
    }

    // 4. Dash Indicators Click
    const dashTrack = document.getElementById('slider-dash-track');
    if (dashTrack) {
      dashTrack.querySelectorAll('.slider-dash').forEach(dash => {
        dash.onclick = () => {
          const idx = parseInt(dash.getAttribute('data-index'), 10);
          state.hero.activeSlideIndex = idx;
          renderHero();
        };
      });
    }

    // 5. Prev & Next Arrows
    const prevBtn = document.getElementById('slider-prev-btn');
    if (prevBtn) {
      prevBtn.onclick = () => {
        state.hero.activeSlideIndex = (state.hero.activeSlideIndex - 1 + totalSlides) % totalSlides;
        renderHero();
      };
    }

    const nextBtn = document.getElementById('slider-next-btn');
    if (nextBtn) {
      nextBtn.onclick = () => {
        state.hero.activeSlideIndex = (state.hero.activeSlideIndex + 1) % totalSlides;
        renderHero();
      };
    }
  }

  /**
   * Render Bottom Categories & Continue Watching Peek
   */
  function renderBottomSection() {
    const cw = state.continueWatching;
    const trends = state.trends;
    const container = document.getElementById('bottom-curved-content');
    if (!container) return;

    container.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
        <h2 style="font-family:'Montserrat', sans-serif; font-size:1.35rem; font-weight:800; color:#ffffff;">
          ${cw.sectionTitle || 'CONTINUE WATCHING'}
        </h2>
        <span style="font-size:0.8rem; color:#4a90e2; cursor:pointer; font-weight:600;">Explore All Series →</span>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1.5rem; margin-bottom:3rem;">
        ${cw.items.map(item => `
          <div class="cw-card" style="border-radius:10px; overflow:hidden; background:#08101a; border:1px solid rgba(255,255,255,0.08); cursor:pointer;" onclick="PlayerModal.openPlayer({ title: '${item.title}' })">
            <div style="position:relative; aspect-ratio:16/9; overflow:hidden;">
              <img src="${item.thumbnailUrl}" alt="${item.title}" style="width:100%; height:100%; object-fit:cover;" />
              <div style="position:absolute; inset:0; background:linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.85) 100%);"></div>
              <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:44px; height:44px; border-radius:50%; background:rgba(0,0,0,0.65); border:2px solid #fff; display:flex; align-items:center; justify-content:center; color:#fff;">▶</div>
            </div>
            <div style="padding:0.75rem 1rem;">
              <div style="font-weight:700; font-size:0.95rem; color:#fff; margin-bottom:0.4rem;">${item.title}</div>
              <div style="height:4px; width:100%; background:rgba(255,255,255,0.2); border-radius:2px; overflow:hidden;">
                <div style="height:100%; width:${item.progressPercentage}%; background:#e50914;"></div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- CARTOON & ANIMATION SECTION -->
      <div id="cartoon-section" style="margin-bottom:3.5rem; scroll-margin-top: 5rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
          <div>
            <div style="display:inline-flex; align-items:center; gap:0.4rem; font-size:0.72rem; font-weight:700; color:#e50914; letter-spacing:1.5px; text-transform:uppercase; margin-bottom:0.25rem;">
              <span style="width:8px; height:8px; border-radius:50%; background:#e50914; display:inline-block;"></span>
              ${state.cartoon ? state.cartoon.badge || 'FAMILY & GEN Z FAVORITES' : 'FAMILY & GEN Z FAVORITES'}
            </div>
            <h2 style="font-family:'Montserrat', sans-serif; font-size:1.35rem; font-weight:800; color:#ffffff;">
              ${state.cartoon ? state.cartoon.sectionTitle || 'CARTOON & ANIMATION HITS' : 'CARTOON & ANIMATION HITS'}
            </h2>
          </div>
          <span style="font-size:0.8rem; color:#f5b300; font-weight:600; cursor:pointer;">Top Animation Picks ★</span>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(210px, 1fr)); gap:1.25rem;">
          ${(state.cartoon ? state.cartoon.items : []).map(item => `
            <div class="cartoon-card" style="border-radius:10px; overflow:hidden; background:#0b1320; border:1px solid rgba(255,255,255,0.08); cursor:pointer; transition:transform 0.25s ease, box-shadow 0.25s ease;" 
                 onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 10px 25px rgba(229,9,20,0.35)'" 
                 onmouseout="this.style.transform='none'; this.style.boxShadow='none'"
                 onclick="PlayerModal.openPlayer({ title: '${item.title}', trailerUrl: '${item.trailerUrl}' })">
              <div style="position:relative; aspect-ratio:2/3; overflow:hidden;">
                <img src="${item.posterUrl}" alt="${item.title}" style="width:100%; height:100%; object-fit:cover;" />
                <div style="position:absolute; inset:0; background:linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.85) 100%);"></div>
                <div style="position:absolute; top:12px; right:12px; background:rgba(0,0,0,0.75); border:1px solid rgba(255,255,255,0.2); border-radius:4px; padding:2px 6px; font-size:0.75rem; font-weight:700; color:#f5b300;">
                  ★ ${item.rating}
                </div>
                <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:46px; height:46px; border-radius:50%; background:rgba(229,9,20,0.85); display:flex; align-items:center; justify-content:center; color:#fff; box-shadow:0 0 15px rgba(229,9,20,0.6);">
                  ▶
                </div>
              </div>
              <div style="padding:0.85rem 1rem;">
                <div style="font-weight:700; font-size:0.92rem; color:#fff; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                  ${item.title}
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.35rem; font-size:0.75rem; color:#8c93a0;">
                  <span>${item.year}</span>
                  <span style="border:1px solid rgba(255,255,255,0.15); padding:1px 5px; border-radius:3px;">${item.duration}</span>
                  <span style="color:#e50914; font-weight:600;">Cartoon</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
        <h2 style="font-family:'Montserrat', sans-serif; font-size:1.35rem; font-weight:800; color:#ffffff;">
          TRENDING BLOCKBUSTERS
        </h2>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:1.25rem;">
        ${trends.movies.map(movie => `
          <div style="border-radius:8px; overflow:hidden; background:#08101a; border:1px solid rgba(255,255,255,0.08); cursor:pointer;" onclick="PlayerModal.openPlayer({ title: '${movie.title}' })">
            <div style="aspect-ratio:2/3; overflow:hidden;">
              <img src="${movie.posterUrl}" alt="${movie.title}" style="width:100%; height:100%; object-fit:cover;" />
            </div>
            <div style="padding:0.6rem 0.8rem;">
              <div style="font-weight:700; font-size:0.88rem; color:#fff; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${movie.title}</div>
              <div style="color:#f5b300; font-size:0.8rem; margin-top:2px;">★★★★☆</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  /**
   * Load JSON schema files from data/ directory
   */
  async function loadDataFromFiles() {
    try {
      const fetchJson = async (path) => {
        const res = await fetch(path);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return await res.json();
      };

      const [siteConfig, hero, episodes, trends, continueWatching, cartoon] = await Promise.allSettled([
        fetchJson('data/site-config.json'),
        fetchJson('data/hero.json'),
        fetchJson('data/episodes.json'),
        fetchJson('data/trends.json'),
        fetchJson('data/continue-watching.json'),
        fetchJson('data/cartoon.json')
      ]);

      if (siteConfig.status === 'fulfilled') state.siteConfig = siteConfig.value;
      if (hero.status === 'fulfilled') state.hero = hero.value;
      if (episodes.status === 'fulfilled') state.episodes = episodes.value;
      if (trends.status === 'fulfilled') state.trends = trends.value;
      if (continueWatching.status === 'fulfilled') state.continueWatching = continueWatching.value;
      if (cartoon.status === 'fulfilled') state.cartoon = cartoon.value;

      console.log('✓ Successfully loaded Multi Movies data from schema data folder.');
    } catch (e) {
      console.info('Using embedded fallback data structures for file:// protocol compatibility.', e);
    }
  }

  function renderAll() {
    renderHeader();
    renderHero();
    renderBottomSection();
  }

  function getData(key) {
    return state[key] || {};
  }

  function updateData(key, newData) {
    state[key] = newData;
    renderAll();
  }

  function resetData(key) {
    state[key] = JSON.parse(JSON.stringify(defaultData[key]));
    renderAll();
  }

  async function init() {
    await loadDataFromFiles();
    renderAll();

    if (window.PlayerModal) window.PlayerModal.init();
    if (window.SchemaManager) window.SchemaManager.init();
  }

  return {
    init,
    renderAll,
    getData,
    updateData,
    resetData
  };
})();

document.addEventListener('DOMContentLoaded', App.init);
window.App = App;
