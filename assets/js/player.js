/**
 * Player Modal & Episodes Explorer Controller
 */
const PlayerModal = (function() {
  let modalElement = null;
  let videoContainer = null;
  let titleElement = null;

  let episodesModal = null;
  let episodesContainer = null;
  let episodesTitle = null;

  function init() {
    modalElement = document.getElementById('cinema-modal');
    if (modalElement) {
      videoContainer = document.getElementById('cinema-player-container');
      titleElement = document.getElementById('cinema-modal-title');
      const closeBtn = document.getElementById('cinema-modal-close');
      if (closeBtn) closeBtn.addEventListener('click', closePlayer);

      modalElement.addEventListener('click', (e) => {
        if (e.target === modalElement) closePlayer();
      });
    }

    episodesModal = document.getElementById('episodes-modal');
    if (episodesModal) {
      episodesContainer = document.getElementById('episodes-list-container');
      episodesTitle = document.getElementById('episodes-modal-title');
      const epClose = document.getElementById('episodes-modal-close');
      if (epClose) epClose.addEventListener('click', closeEpisodes);

      episodesModal.addEventListener('click', (e) => {
        if (e.target === episodesModal) closeEpisodes();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closePlayer();
        closeEpisodes();
      }
    });
  }

  function openPlayer(item) {
    if (!modalElement) init();
    if (!modalElement) return;

    const title = item.title || 'Trailer';
    titleElement.textContent = title;

    const trailerUrl = item.trailerUrl || 'https://www.youtube-nocookie.com/embed/X4bF_quwNtw?autoplay=1';

    videoContainer.innerHTML = `
      <iframe 
        class="cinema-video-iframe" 
        src="${trailerUrl}" 
        title="${title}" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `;

    modalElement.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closePlayer() {
    if (!modalElement) return;
    modalElement.classList.remove('is-open');
    if (videoContainer) videoContainer.innerHTML = '';
    document.body.style.overflow = '';
  }

  function openEpisodesModal(episodesData) {
    if (!episodesModal) init();
    if (!episodesModal) return;

    const title = episodesData.seriesTitle || 'Lucifer';
    if (episodesTitle) {
      episodesTitle.textContent = `${title} - Season ${episodesData.currentSeason || 1} Episodes`;
    }

    if (episodesContainer && episodesData.episodes) {
      episodesContainer.innerHTML = episodesData.episodes.map(ep => `
        <div class="episode-card-item" onclick="PlayerModal.openPlayer({ title: '${title}: ${ep.title}', trailerUrl: 'https://www.youtube-nocookie.com/embed/X4bF_quwNtw?autoplay=1' })">
          <div class="episode-thumb-box">
            <img src="${ep.thumbnailUrl || 'assets/images/lucifer_hero_banner.jpg'}" alt="${ep.title}" />
            <div class="episode-play-icon">▶</div>
          </div>
          <div class="episode-info-box">
            <div class="episode-title-row">
              <span class="episode-title-text">${ep.episodeNumber}. ${ep.title}</span>
              <span class="episode-duration-text">${ep.duration}</span>
            </div>
            <p class="episode-synopsis-text">${ep.synopsis}</p>
          </div>
        </div>
      `).join('');
    }

    episodesModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeEpisodes() {
    if (!episodesModal) return;
    episodesModal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  return {
    init,
    openPlayer,
    closePlayer,
    openEpisodesModal,
    closeEpisodes
  };
})();

window.PlayerModal = PlayerModal;
