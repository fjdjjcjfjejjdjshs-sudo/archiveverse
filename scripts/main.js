/* ============================================
   ArchiveVerse - Main JavaScript
   ============================================ */

// ===== DATA =====
const categoriesData = [
  { id: 'movies', name: 'Global Movies', nameCn: '全球电影', size: '10PB+', itemCount: '12,847', icon: '🎬', route: 'cat-movies' },
  { id: 'tv', name: 'Global TV Series', nameCn: '全球电视剧', size: '620TB+', itemCount: '8,432', icon: '📺', route: 'cat-tv' },
  { id: 'anime', name: 'Global Anime', nameCn: '全球动漫', size: '220TB+', itemCount: '15,670', icon: '✨', route: 'cat-anime' },
  { id: 'variety', name: 'Variety & Shorts', nameCn: '全球综艺短剧', size: '80TB+', itemCount: '18,900', icon: '🎭', route: 'cat-variety' },
  { id: 'concert', name: 'Global Concerts', nameCn: '全球演唱会', size: '900TB+', itemCount: '6,240', icon: '🎤', route: 'cat-concert' },
  { id: 'music', name: 'Global Music', nameCn: '全球音乐', size: '70TB+', itemCount: '142,500', icon: '🎵', route: 'cat-music' },
  { id: 'books', name: 'Global Books', nameCn: '全球图书', size: '35TB+', itemCount: '890,000', icon: '📚', route: 'cat-books' },
  { id: 'documentary', name: 'Global Documentaries', nameCn: '全球纪录片', size: '600TB+', itemCount: '9,850', icon: '🌍', route: 'cat-documentary' },
  { id: 'games', name: 'Global Games', nameCn: '全球游戏', size: '50TB+', itemCount: '3,420', icon: '🎮', route: 'cat-games' }
];

// ===== COLLECTION DATA (Showcase) =====
const collectionsData = [
  {
    id: 'boxoffice',
    name: 'GLOBAL BOX OFFICE TOP 100',
    poster: 'https://image.tmdb.org/t/p/w500/jRXYjXNkEMIWfjg3XJkBAz3GYgR.jpg',
    desc: 'The highest-grossing films in cinema history, preserved in pristine 4K UHD and Blu-ray quality.'
  },
  {
    id: 'douban',
    name: 'DOUBAN TOP 100 BLU-RAY',
    poster: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    desc: 'The definitive collection of cinema\'s most acclaimed masterpieces, sourced from retail Blu-ray discs.'
  },
  {
    id: 'oscar',
    name: 'ACADEMY AWARD BEST PICTURES',
    poster: 'https://image.tmdb.org/t/p/w500/8Gxv80sTCOUZ9i4tyrBhJq2MNzm.jpg',
    desc: 'Every Best Picture winner in Academy history, from Wings (1927) to Oppenheimer (2023), in reference-grade quality.'
  },
  {
    id: 'tvseries',
    name: 'WESTERN TV SERIES',
    poster: 'https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg',
    desc: 'The golden age of television, featuring the most celebrated series from HBO, Netflix, AMC, and beyond.'
  },
  {
    id: 'anime',
    name: 'MUST-WATCH ANIME',
    poster: 'https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
    desc: 'The finest anime ever created, from Studio Ghibli masterpieces to groundbreaking series that defined generations.'
  }
];

// ===== COLLECTION DATA MAPPING =====
// Data is loaded from external JS files (data-boxoffice.js, data-douban.js, etc.)
const collectionDataMap = {
  boxoffice: typeof boxofficeTopData !== 'undefined' ? boxofficeTopData : [],
  douban: typeof doubanTopData !== 'undefined' ? doubanTopData : [],
  oscar: typeof oscarBestData !== 'undefined' ? oscarBestData : [],
  tvseries: typeof tvSeriesData !== 'undefined' ? tvSeriesData : [],
  anime: typeof animeMustWatchData !== 'undefined' ? animeMustWatchData : []
};

// ===== SPA ROUTER =====
function hideAllContainers() {
  const mainContent = document.getElementById('mainContent');
  const listPage = document.getElementById('listPage');
  const detailPage = document.getElementById('detailPage');
  if (mainContent) mainContent.style.display = 'none';
  if (listPage) listPage.style.display = 'none';
  if (detailPage) detailPage.style.display = 'none';
}

function router() {
  const hash = window.location.hash.slice(1);
  const parts = hash.split('/');
  const page = parts[0];
  const id = parts[1];

  const mainContent = document.getElementById('mainContent');
  const listPage = document.getElementById('listPage');
  const detailPage = document.getElementById('detailPage');

  let targetEl = null;

  // STEP 1: Render content into target container FIRST (no paint yet)
  if (!page || page === '' || page === '/') {
    targetEl = mainContent;
  } else if (directoryRouteMap.hasOwnProperty(page)) {
    if (id !== undefined && id !== '') {
      const idx = parseInt(id, 10);
      targetEl = renderDirectorySubgroup(page, isNaN(idx) ? 0 : idx);
      if (!targetEl) targetEl = mainContent;
    } else {
      targetEl = renderDirectoryCategory(page);
      if (!targetEl) targetEl = mainContent;
    }
  } else if (id) {
    renderDetailPage(page, id);
    targetEl = detailPage;
  } else if (collectionDataMap.hasOwnProperty(page)) {
    renderListPage(page);
    targetEl = listPage;
  } else {
    targetEl = mainContent;
  }

  // STEP 2: Swap visibility in ONE synchronous block — no blank frame
  mainContent.style.display = 'none';
  listPage.style.display = 'none';
  detailPage.style.display = 'none';
  targetEl.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function navigateTo(collectionId) {
  const targetHash = '#' + collectionId;
  if (window.location.hash === targetHash) {
    router();
  } else {
    window.location.hash = targetHash;
  }
}

function navigateToDetail(collectionId, itemId) {
  window.location.hash = collectionId + '/' + itemId;
}

// ===== LIST PAGE RENDERER =====
function renderListPage(collectionId) {
  const collection = collectionsData.find(c => c.id === collectionId);
  const items = collectionDataMap[collectionId] || [];
  const listPage = document.getElementById('listPage');

  if (!collection) {
    listPage.innerHTML = '<div style="text-align:center;padding:100px 20px;color:var(--text-muted);">Collection not found. <button onclick="navigateTo(\'\')" class="btn btn-primary" style="margin-top:16px;">Back to Home</button></div>';
    return;
  }

  let cardsHtml = '';
  if (items.length === 0) {
    cardsHtml = '<div style="text-align:center;padding:60px 20px;color:var(--text-muted);grid-column:1/-1;">Coming soon. More titles will be added shortly.</div>';
  } else {
    cardsHtml = items.map((item, i) => `
      <div class="list-card" onclick="event.preventDefault(); navigateToDetail('${collectionId}', '${item.id}')" style="animation: fadeInUp 0.5s ease ${i * 0.08}s both;">
        <img class="list-card-poster" src="${item.poster}" alt="${item.titleEn}" loading="lazy" onerror="this.style.background='linear-gradient(135deg,#1a0a2e,#16213e)';this.alt='Poster';">
        <div class="list-card-info">
          <div class="list-card-title">${item.titleEn}</div>
          <div class="list-card-meta">
            <span class="list-card-year">${item.year}</span>
            <span class="list-card-size">${item.size}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  listPage.innerHTML = `
    <div class="list-page-header">
      <button class="list-page-back" onclick="navigateTo('')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        Back to Home
      </button>
      <h1 class="list-page-title">${collection.name}</h1>
      <p class="list-page-subtitle">${collection.desc}</p>
      <p class="list-page-count">${items.length} titles available</p>
    </div>
    <div class="list-grid">
      ${cardsHtml}
    </div>
  `;
}

// ===== DETAIL PAGE RENDERER =====
function renderDetailPage(collectionId, itemId) {
  const items = collectionDataMap[collectionId] || [];
  const item = items.find(i => i.id === itemId);
  const detailPage = document.getElementById('detailPage');

  if (!item) {
    detailPage.innerHTML = '<div style="text-align:center;padding:100px 20px;color:var(--text-muted);">Item not found. <button onclick="navigateTo(\'' + collectionId + '\')" class="btn btn-primary" style="margin-top:16px;">Back to List</button></div>';
    return;
  }

  const genreTags = (item.genre || []).map(g => `<span class="detail-tag">${g}</span>`).join('');
  const desc = item.desc || item.synopsis || '';
  const version = item.version || (item.tags || []).join(', ') || 'Premium';
  const resolution = item.resolution || (item.tags && item.tags.includes('4K UHD') ? '3840x2160' : '1920x1080');
  const audio = item.audio || (item.tags && item.tags.includes('Dolby Atmos') ? 'Dolby Atmos' : item.tags && item.tags.includes('DTS-HD MA') ? 'DTS-HD MA' : 'Multi-channel');
  const subtitles = item.subtitles || 'English / Chinese';
  const source = item.source || 'Blu-ray';
  const rating = item.rating || '';
  const duration = item.duration || '';
  const titleCnHtml = item.titleCn ? `<p class="detail-title-cn">${item.titleCn}</p>` : '';

  // Related items (other items in same collection)
  const relatedItems = items.filter(i => i.id !== itemId).slice(0, 4);
  let relatedHtml = '';
  if (relatedItems.length > 0) {
    relatedHtml = `
      <div class="detail-section" style="margin-top:48px;">
        <h3 class="detail-section-title">Related Titles</h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:20px;">
          ${relatedItems.map(rel => `
            <div class="list-card" onclick="event.preventDefault(); navigateToDetail('${collectionId}', '${rel.id}')">
              <img class="list-card-poster" src="${rel.poster}" alt="${rel.titleEn}" loading="lazy" onerror="this.style.background='linear-gradient(135deg,#1a0a2e,#16213e)';">
              <div class="list-card-info">
                <div class="list-card-title">${rel.titleEn}</div>
                <div class="list-card-meta">
                  <span class="list-card-year">${rel.year}</span>
                  <span class="list-card-size">${rel.size}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  const ratingHtml = rating ? `
            <div class="detail-meta-item">
              <span class="detail-meta-label">Rating</span>
              <span class="detail-meta-value gold">${rating}/10</span>
            </div>` : '';
  const durationHtml = duration ? `
            <div class="detail-meta-item">
              <span class="detail-meta-label">Duration</span>
              <span class="detail-meta-value">${duration}</span>
            </div>` : '';

  detailPage.innerHTML = `
    <div class="detail-page">
      <button class="list-page-back" onclick="navigateTo('${collectionId}')" style="margin-bottom:32px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        Back to List
      </button>

      <div class="detail-hero">
        <div class="detail-poster-wrap">
          <img class="detail-poster" src="${item.poster}" alt="${item.titleEn}" onerror="this.style.background='linear-gradient(135deg,#1a0a2e,#16213e)';">
        </div>
        <div class="detail-info">
          <h1 class="detail-title">${item.titleEn}</h1>
          ${titleCnHtml}
          <p class="detail-subtitle">${item.year} &middot; ${(item.genre || []).join(', ')}${duration ? ' &middot; ' + duration : ''}</p>
          <div class="detail-tags">${genreTags}</div>
          <div class="detail-meta-grid">
            <div class="detail-meta-item">
              <span class="detail-meta-label">File Code</span>
              <span class="detail-meta-value">${item.fileCode || 'N/A'}</span>
            </div>
            <div class="detail-meta-item">
              <span class="detail-meta-label">Storage Size</span>
              <span class="detail-meta-value gold">${item.size}</span>
            </div>
            <div class="detail-meta-item">
              <span class="detail-meta-label">Format</span>
              <span class="detail-meta-value">${item.format}</span>
            </div>
            <div class="detail-meta-item">
              <span class="detail-meta-label">Version</span>
              <span class="detail-meta-value gold">${version}</span>
            </div>
            ${durationHtml}
            ${ratingHtml}
          </div>
          <p class="detail-desc">${desc}</p>
          <div class="detail-actions">
            <button class="btn btn-primary" onclick="handleWhatsApp()">Contact to Obtain Original Files</button>
          </div>
        </div>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">Technical Specifications</h3>
        <div class="detail-tech-grid">
          <div class="detail-tech-card">
            <div class="detail-tech-label">Resolution</div>
            <div class="detail-tech-value">${resolution}</div>
          </div>
          <div class="detail-tech-card">
            <div class="detail-tech-label">Audio</div>
            <div class="detail-tech-value">${audio}</div>
          </div>
          <div class="detail-tech-card">
            <div class="detail-tech-label">Subtitles</div>
            <div class="detail-tech-value">${subtitles}</div>
          </div>
          <div class="detail-tech-card">
            <div class="detail-tech-label">Source</div>
            <div class="detail-tech-value">${source}</div>
          </div>
        </div>
      </div>

      ${relatedHtml}

      <div class="detail-cta">
        <h3 class="detail-cta-title">Join ArchiveVerse as a Founding Member</h3>
        <p class="detail-cta-price"><strong>$99</strong> + $9.9/year renewal</p>
        <button class="btn btn-primary" onclick="handleWhatsApp()">Contact Us via WhatsApp</button>
      </div>
    </div>
  `;
}

// ===== PARTICLE ANIMATION =====
class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.connections = [];
    this.resize();
    this.init();
    this.animate();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    const count = Math.min(120, Math.floor(window.innerWidth * window.innerHeight / 12000));
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        gold: Math.random() > 0.7
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Update and draw particles
    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = this.canvas.width;
      if (p.x > this.canvas.width) p.x = 0;
      if (p.y < 0) p.y = this.canvas.height;
      if (p.y > this.canvas.height) p.y = 0;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      if (p.gold) {
        this.ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
      } else {
        this.ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.5})`;
      }
      this.ctx.fill();
    });

    // Draw connections
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const opacity = (1 - dist / 120) * 0.15;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          if (this.particles[i].gold || this.particles[j].gold) {
            this.ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
          } else {
            this.ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.5})`;
          }
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

// ===== CONTINUOUS SHOWCASE AUTO-SCROLL =====
function initShowcaseScroll() {
  const track = document.getElementById('showcaseTrack');
  if (!track) return;

  let scrollSpeed = 0.5; // pixels per frame - very slow
  let isPaused = false;
  let isDragging = false;
  let startX = 0;
  let scrollStart = 0;
  let rafId = null;

  function autoScroll() {
    if (!isPaused && !isDragging) {
      track.scrollLeft += scrollSpeed;
      // When scrolled past all content, loop back to start
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= maxScroll) {
        track.scrollLeft = 0;
      }
    }
    rafId = requestAnimationFrame(autoScroll);
  }

  // Start the auto-scroll loop
  rafId = requestAnimationFrame(autoScroll);

  // Pause on hover
  track.addEventListener('mouseenter', () => { isPaused = true; });
  track.addEventListener('mouseleave', () => { isPaused = false; });

  // Touch support - pause and allow manual scroll
  track.addEventListener('touchstart', (e) => {
    isPaused = true;
  }, { passive: true });

  track.addEventListener('touchend', () => {
    // Resume after 3 seconds of no interaction
    setTimeout(() => { isPaused = false; }, 3000);
  });

  // Mouse drag support
  track.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    scrollStart = track.scrollLeft;
    track.classList.add('grabbing');
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const diff = startX - e.clientX;
    track.scrollLeft = scrollStart + diff;
  });

  document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    track.classList.remove('grabbing');
    setTimeout(() => { isPaused = false; }, 3000);
  });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ===== COUNTER ANIMATION =====
function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.target);
        const isDecimal = target % 1 !== 0;
        const duration = 2000;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = target * eased;

          if (isDecimal) {
            el.textContent = current.toFixed(1);
          } else {
            el.textContent = Math.floor(current).toLocaleString();
          }

          if (progress < 1) {
            requestAnimationFrame(update);
          }
        }

        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
}

// ===== NAVIGATION =====
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.getElementById('navLinks');
  const navToggle = document.getElementById('navToggle');
  const links = document.querySelectorAll('.nav-link');

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile toggle
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile nav on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          links.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  });
}

// ===== CATEGORY GRID =====
function renderCategoryGrid() {
  const grid = document.getElementById('categoryGrid');
  grid.innerHTML = categoriesData.map((cat, i) => `
    <div class="category-card reveal" data-category="${cat.id}" onclick="navigateToDirectory('${cat.route}')" style="transition-delay: ${i * 0.05}s">
      <span class="card-icon">${cat.icon}</span>
      <h3 class="card-name">${cat.name}</h3>
      <div class="card-size">${cat.size}</div>
      <div class="card-count">${cat.itemCount} titles</div>
    </div>
  `).join('');

  // Re-observe new elements
  initScrollAnimations();
}

// ===== DIRECTORY NAVIGATION =====
function navigateToDirectory(route) {
  window.location.hash = route;
}

// ===== DIRECTORY SYSTEM (3-Level) =====
// Level 1: #cat-movies → subgroup list
// Level 2: #cat-movies/0 → item list (terminal)
// Level 3: Items are NOT clickable

const directoryRouteMap = {
  'cat-movies': 'movies', 'cat-tv': 'tv', 'cat-anime': 'anime',
  'cat-variety': 'variety', 'cat-concert': 'concert', 'cat-music': 'music',
  'cat-books': 'books', 'cat-documentary': 'documentary', 'cat-games': 'games'
};

// Level 1: Render subgroup cards for a category
function renderDirectoryCategory(route) {
  const catKey = directoryRouteMap[route];
  if (!catKey || typeof directoryData === 'undefined' || !directoryData[catKey]) return null;
  const cat = directoryData[catKey];
  const container = document.getElementById('listPage');

  let html = `
    <div class="spa-page">
      <div class="list-header">
        <button class="back-btn" onclick="navigateToHome()">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back
        </button>
        <div class="list-header-info">
          <h1 class="list-title"><span class="list-icon">${cat.icon}</span> ${cat.name}</h1>
          <p class="list-subtitle">${cat.subgroups.length} collections</p>
        </div>
      </div>
      <div class="directory-subgroup-grid">
        ${cat.subgroups.map((sg, idx) => {
          const totalSizeGB = sg.items.reduce((sum, item) => sum + parseSizeGB(item.size), 0);
          return `
            <div class="directory-subgroup-card" onclick="navigateToSubgroup('${route}', ${idx})">
              <div class="subgroup-card-header">
                <h3 class="subgroup-name">${sg.nameCn || sg.name}</h3>
                ${sg.nameCn && sg.nameCn !== sg.name ? `<span class="subgroup-name-en">${sg.name}</span>` : ''}
              </div>
              <div class="subgroup-card-stats">
                <span class="subgroup-count">${sg.items.length} items</span>
                <span class="subgroup-size">${formatSizeGB(totalSizeGB)}</span>
              </div>
              <div class="subgroup-card-preview">
                ${sg.items.slice(0, 3).map(item => `
                  <div class="preview-item">
                    <span class="preview-name">${item.name}</span>
                    <span class="preview-size">${item.size}</span>
                  </div>
                `).join('')}
                ${sg.items.length > 3 ? `<div class="preview-more">+${sg.items.length - 3} more</div>` : ''}
              </div>
              <div class="subgroup-card-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  container.innerHTML = html;
  return container;
}

// Level 2: Render item list (terminal - items NOT clickable)
function renderDirectorySubgroup(route, subgroupIdx) {
  const catKey = directoryRouteMap[route];
  if (!catKey || typeof directoryData === 'undefined' || !directoryData[catKey]) return null;
  const cat = directoryData[catKey];
  const sg = cat.subgroups[subgroupIdx];
  if (!sg) return null;

  const container = document.getElementById('listPage');
  let html = `
    <div class="spa-page">
      <div class="list-header">
        <button class="back-btn" onclick="navigateToDirectory('${route}')">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to ${cat.name}
        </button>
        <div class="list-header-info">
          <h1 class="list-title">${sg.nameCn || sg.name}</h1>
          <p class="list-subtitle">${sg.items.length} items</p>
        </div>
      </div>
      <div class="directory-items-list">
        ${sg.items.map((item, i) => `
          <div class="directory-item-row" style="animation-delay: ${i * 0.03}s">
            <div class="directory-item-index">${String(i + 1).padStart(2, '0')}</div>
            <div class="directory-item-info">
              <div class="directory-item-name">${item.name}</div>
              ${item.spec ? `<div class="directory-item-spec">${item.spec}</div>` : ''}
            </div>
            <div class="directory-item-size">${item.size || '—'}</div>
          </div>
        `).join('')}
      </div>
      <!-- Membership CTA -->
      <div class="directory-membership-cta">
        <div class="membership-cta-inner">
          <h3>Join ArchiveVerse</h3>
          <p>Get access to the complete archive library</p>
          <button class="membership-cta-btn" onclick="document.getElementById('membership').scrollIntoView({behavior:'smooth'}); navigateToHome();">
            Become a Member
          </button>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;
  return container;
}

function navigateToSubgroup(route, subgroupIdx) {
  window.location.hash = route + '/' + subgroupIdx;
}

function navigateToHome() {
  window.location.hash = '';
}

function parseSizeGB(sizeStr) {
  if (!sizeStr) return 0;
  const match = sizeStr.match(/([\d.]+)\s*(PB|TB|GB|MB)/i);
  if (!match) return 0;
  const val = parseFloat(match[1]);
  const unit = match[2].toUpperCase();
  if (unit === 'PB') return val * 1024 * 1024;
  if (unit === 'TB') return val * 1024;
  if (unit === 'GB') return val;
  if (unit === 'MB') return val / 1024;
  return 0;
}

function formatSizeGB(gb) {
  if (gb >= 1024 * 1024) return (gb / (1024 * 1024)).toFixed(2) + ' PB';
  if (gb >= 1024) return (gb / 1024).toFixed(1) + ' TB';
  if (gb >= 1) return gb.toFixed(1) + ' GB';
  return (gb * 1024).toFixed(0) + ' MB';
}

// ===== WHATSAPP INTEGRATION =====
const WHATSAPP_NUMBER = '8618902065009';
const WHATSAPP_DISPLAY = '+86 18902065009';

function handleWhatsApp() {
  // Copy number to clipboard
  navigator.clipboard.writeText(WHATSAPP_DISPLAY).then(() => {
    showWhatsAppPopup();
  }).catch(() => {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = WHATSAPP_DISPLAY;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showWhatsAppPopup();
  });
}

function showWhatsAppPopup() {
  const popup = document.getElementById('whatsappPopup');
  document.getElementById('popupNumber').textContent = WHATSAPP_DISPLAY;
  popup.classList.add('active');
  popup.setAttribute('aria-hidden', 'false');
}

function closeWhatsAppPopup() {
  const popup = document.getElementById('whatsappPopup');
  popup.classList.remove('active');
  popup.setAttribute('aria-hidden', 'true');
}

function redirectToWhatsApp() {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  closeWhatsAppPopup();
}

// ===== KEYBOARD HANDLING =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeResourceModal();
    closeCategoryOverlay();
    closeWhatsAppPopup();
  }
});

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  // Initialize particle animation
  const canvas = document.getElementById('particleCanvas');
  if (canvas) {
    new ParticleSystem(canvas);
  }

  // Initialize showcase continuous scroll
  initShowcaseScroll();

  // Initialize scroll animations
  initScrollAnimations();

  // Initialize counter animations
  initCounters();

  // Initialize navigation
  initNavigation();

  // Render category grid
  renderCategoryGrid();

  // Initialize SPA router
  window.addEventListener('hashchange', router);
  router();
});
