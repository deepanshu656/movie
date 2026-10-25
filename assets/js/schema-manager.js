/**
 * Schema & Data Manager Component
 * Enables live inspection, editing, and downloading of website schema datasets.
 */
const SchemaManager = (function() {
  let modalElement = null;
  let activeTab = 'hero';
  let tabsContainer = null;
  let jsonTextarea = null;
  let statusMsg = null;

  const schemasConfig = [
    { key: 'hero', label: 'Hero Series (Lucifer)', file: 'data/hero.json', schemaFile: 'schemas/hero.schema.json' },
    { key: 'siteConfig', label: 'Multi Movies Navigation', file: 'data/site-config.json', schemaFile: 'schemas/site-config.schema.json' },
    { key: 'episodes', label: 'Episodes Explorer', file: 'data/episodes.json', schemaFile: 'schemas/episodes.schema.json' },
    { key: 'cartoon', label: 'Cartoon Section', file: 'data/cartoon.json', schemaFile: 'schemas/cartoon.schema.json' },
    { key: 'trends', label: 'Trends & Grid', file: 'data/trends.json', schemaFile: 'schemas/trends.schema.json' },
    { key: 'continueWatching', label: 'Continue Watching', file: 'data/continue-watching.json', schemaFile: 'schemas/continue-watching.schema.json' }
  ];

  function init() {
    modalElement = document.getElementById('schema-modal');
    if (!modalElement) return;

    tabsContainer = document.getElementById('schema-tabs-container');
    jsonTextarea = document.getElementById('schema-json-editor');
    statusMsg = document.getElementById('schema-status-msg');

    const openBtn = document.getElementById('btn-open-schema-manager');
    const filterBtn = document.getElementById('btn-utility-filter');
    const closeBtn = document.getElementById('schema-modal-close');
    const applyBtn = document.getElementById('btn-schema-apply');
    const downloadBtn = document.getElementById('btn-schema-download');
    const resetBtn = document.getElementById('btn-schema-reset');

    if (openBtn) openBtn.addEventListener('click', openManager);
    if (filterBtn) filterBtn.addEventListener('click', openManager);
    if (closeBtn) closeBtn.addEventListener('click', closeManager);

    modalElement.addEventListener('click', (e) => {
      if (e.target === modalElement) closeManager();
    });

    if (applyBtn) applyBtn.addEventListener('click', handleApplyChanges);
    if (downloadBtn) downloadBtn.addEventListener('click', handleDownload);
    if (resetBtn) resetBtn.addEventListener('click', handleReset);

    renderTabs();
  }

  function renderTabs() {
    if (!tabsContainer) return;
    tabsContainer.innerHTML = schemasConfig.map(s => `
      <button class="schema-tab-btn ${s.key === activeTab ? 'active' : ''}" data-key="${s.key}">
        ${s.label}
      </button>
    `).join('');

    tabsContainer.querySelectorAll('.schema-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeTab = btn.getAttribute('data-key');
        renderTabs();
        loadCurrentSchemaData();
      });
    });
  }

  function openManager() {
    if (!modalElement) init();
    if (!modalElement) return;
    renderTabs();
    loadCurrentSchemaData();
    modalElement.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeManager() {
    if (!modalElement) return;
    modalElement.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function loadCurrentSchemaData() {
    if (!jsonTextarea) return;
    const currentData = window.App ? window.App.getData(activeTab) : {};
    jsonTextarea.value = JSON.stringify(currentData, null, 2);
    if (statusMsg) {
      statusMsg.textContent = `Viewing data for ${activeTab}. Edit and click 'Apply Changes' to test immediately.`;
      statusMsg.style.color = '#9c9295';
    }
  }

  function handleApplyChanges() {
    if (!jsonTextarea || !statusMsg) return;
    try {
      const parsed = JSON.parse(jsonTextarea.value);
      if (window.App && typeof window.App.updateData === 'function') {
        window.App.updateData(activeTab, parsed);
        statusMsg.textContent = `✓ Successfully applied changes for ${activeTab}! UI updated live.`;
        statusMsg.style.color = '#5af78e';
      }
    } catch (err) {
      statusMsg.textContent = `⚠️ Invalid JSON: ${err.message}`;
      statusMsg.style.color = '#ff5555';
    }
  }

  function handleDownload() {
    if (!jsonTextarea) return;
    try {
      const parsed = JSON.parse(jsonTextarea.value);
      const conf = schemasConfig.find(s => s.key === activeTab);
      const filename = conf ? conf.file.split('/').pop() : `${activeTab}.json`;
      
      const blob = new Blob([JSON.stringify(parsed, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      if (statusMsg) {
        statusMsg.textContent = `✓ Downloaded ${filename}! Replace file in data/ to keep permanently.`;
        statusMsg.style.color = '#5af78e';
      }
    } catch (err) {
      if (statusMsg) {
        statusMsg.textContent = `⚠️ Cannot download invalid JSON: ${err.message}`;
        statusMsg.style.color = '#ff5555';
      }
    }
  }

  function handleReset() {
    if (window.App && typeof window.App.resetData === 'function') {
      window.App.resetData(activeTab);
      loadCurrentSchemaData();
      if (statusMsg) {
        statusMsg.textContent = `Reset ${activeTab} to initial configuration.`;
        statusMsg.style.color = '#d1d1d1';
      }
    }
  }

  return {
    init,
    openManager,
    closeManager
  };
})();

window.SchemaManager = SchemaManager;
