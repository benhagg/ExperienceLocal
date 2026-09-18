/**
 * Experience Local Provo - Curated Field Guide
 * Authentic, varied editorial layouts (Non-AI template)
 */

(function () {
  'use strict';

  // 1. EVENTS DATA (Calendar / Bulletin Digest)
  // 1. DOWNTOWN PROVO EVENTS
  const DOWNTOWN_EVENTS = [
    {
      id: 'provo-farmers-market',
      name: 'Provo Farmers Market',
      tag: 'Weekly Market',
      badge: 'Local Tradition',
      dateDay: 'Saturdays',
      dateTime: '9am – 2pm',
      location: 'Pioneer Park (500 W Center St)',
      image: 'images/the-provo-farmers-market.jpg',
      icon: 'images/farmers-market-icon.png',
      description: 'Local produce, artisan sourdough, Utah honey, food trucks, and live music from Utah Valley makers and growers every Saturday at Pioneer Park.',
      website: 'https://www.provofarmersmarket.com/',
      mapsQuery: 'Pioneer+Park+Provo+UT'
    },
    {
      id: 'downtown-art-stroll',
      name: 'Downtown Provo Art Stroll',
      tag: 'Community Art',
      dateDay: '1st Friday',
      dateTime: '6pm – 9pm',
      location: 'Historic Center Street & University Ave',
      image: 'images/downtown-art-stroll.jpg',
      description: 'Galleries, local shops, and cafes along Center Street stay open late with local artist exhibitions, live performances, and refreshments.',
      website: 'https://www.downtownprovo.com/art-stroll',
      mapsQuery: 'Historic+Downtown+Provo+UT'
    },
    {
      id: 'food-truck-roundup',
      name: 'Provo Food Truck Roundup',
      dateDay: 'Every Thursday',
      dateTime: '6pm – 9pm (Mid Apr – Dec)',
      location: 'The Startup Building (560 S 100 W)',
      image: 'images/food-truck-roundup.jpg',
      description: 'A gathering of Utah Valley’s top food trucks serving street tacos, woodfired pizza, artisan ice cream, and Korean BBQ.',
      website: 'https://www.instagram.com/provoroundup',
      mapsQuery: 'Startup+Building+Provo+UT'
    },
    {
      id: 'rooftop-concert-series',
      name: 'Provo Rooftop Concert Series',
      tag: 'Live Music',
      dateDay: 'Summer',
      dateTime: 'Seasonal Eves',
      location: 'Downtown Provo (Nu Skin Plaza)',
      image: 'images/rooftop-concert-series.webp',
      description: 'Provo’s famous free outdoor live music series featuring local and national bands against the scenic Wasatch Mountain backdrop.',
      website: 'https://rooftopconcertseries.com/',
      mapsQuery: 'Nu+Skin+Plaza+Provo+UT'
    }
  ];

  // 2. SUNDANCE MOUNTAIN RESORT EVENTS
  const SUNDANCE_EVENTS = [
    {
      id: 'oktoberfest',
      name: 'Oktoberfest at Sundance',
      tag: 'Alpine Autumn Festival',
      dateDay: 'Fall Wknds',
      dateTime: '12pm – 5pm',
      location: 'Sundance Mountain Resort',
      image: 'images/oktoberfest-sundance.jpg',
      description: 'Bavarian-inspired autumn festival featuring authentic German beer, bratwurst and pretzels, live alpine polka music, scenic chairlift rides, and golden canyon foliage.',
      website: 'https://www.sundanceresort.com/events/oktoberfest/',
      mapsQuery: 'Sundance+Mountain+Resort+UT'
    },
    {
      id: 'harvest-mini-markets',
      name: 'Harvest Mini Markets',
      tag: 'Artisan Market',
      dateDay: 'Saturdays',
      dateTime: '11am – 4pm',
      location: 'The Village Lawn at Sundance',
      image: 'images/sundance-harvest-mini-market.jpg',
      description: 'Celebration of the harvest season with local Utah craftsmen, handmade pottery, jewelry, seasonal produce, baked goods, and live acoustic music on the village lawn.',
      website: 'https://www.sundanceresort.com/events/harvest-mini-markets/',
      mapsQuery: 'Sundance+Mountain+Resort+Village+UT'
    },
    {
      id: 'owl-bar-live-music',
      name: 'Owl Bar Live Music',
      tag: 'Weekend Sessions',
      dateDay: 'Fri & Sat',
      dateTime: '8pm – 11pm',
      location: 'Owl Bar, Sundance Resort',
      image: 'images/owl-bar-sundance.jpg',
      description: 'Intimate live performances from local and touring folk, blues, and acoustic artists inside the restored 1890s Western bar. Keeping the west just wild enough.',
      website: 'https://www.sundanceresort.com/events/owl-bar-live-music/',
      mapsQuery: 'Owl+Bar+Sundance+UT'
    }
  ];

  // 2. FOOD DATA (Curated Local Dining)
  const FOOD_ITEMS = [
    {
      id: 'rockwell-ice-cream',
      name: 'Rockwell Ice Cream Co.',
      price: '$',
      location: '43 N University Ave, Historic Downtown',
      image: 'images/rockwell-ice-cream.jpg',
      description: 'Voted America’s #1 Ice Cream. Handcrafted micro-batch ice cream made exclusively with local Utah cream, churned in-house and served in warm homemade waffle cones.',
      phone: '(801) 318-5950',
      website: 'https://rockwellicecream.com/',
      mapsQuery: 'Rockwell+Ice+Cream+Provo+UT'
    },
    {
      id: 'brasas-mexican-grill',
      name: 'Brasas Mexican Grill',
      price: '$',
      location: '238 S 100 W',
      image: 'images/brasas-mexican-grill.jpg',
      description: 'Authentic taqueria known for roasted vertical trompo al pastor with pineapple, carne asada, handmade tortillas, and salsa bar.',
      phone: '(801) 377-8226',
      mapsQuery: 'Brasas+Mexican+Grill+Provo+UT'
    },
    {
      id: 'chom-burger',
      name: 'CHOM Burger',
      price: '$',
      location: '45 E 800 N',
      image: 'images/chom-burger.jpg',
      description: 'Crispy lacy-edge smash patties on toasted brioche buns, seasoned crinkle fries, house fry sauce, and thick malt shakes.',
      phone: '(801) 374-2466',
      website: 'https://chomburger.com/',
      mapsQuery: 'CHOM+Burger+Provo+UT'
    },
    {
      id: 'bombay-house',
      name: 'Bombay House',
      price: '$$',
      location: '463 N University Ave',
      image: 'images/bombay-house.png',
      description: 'A Utah Valley staple for decades. Rich chicken tikka masala, sizzling lamb boti kabobs, mango lassi, and fresh tandoori garlic naan.',
      phone: '(801) 373-6677',
      website: 'https://bombayhouse.com/',
      mapsQuery: 'Bombay+House+Provo+UT'
    },
    {
      id: 'two-jacks-pizza',
      name: 'Two Jack’s Pizza',
      price: '$$',
      location: '80 W Center St',
      image: 'images/two-jacks-pizza.jpg',
      description: 'Beloved Center Street staple with dough made fresh daily, generous gourmet toppings, calzones, and hot cheese breadsticks.',
      phone: '(801) 377-4747',
      website: 'https://www.twojackspizza.com/',
      mapsQuery: 'Two+Jacks+Pizza+Provo+UT'
    },
    {
      id: 'hruskas-kolaches',
      name: 'Hruska’s Kolaches',
      price: '$',
      location: '434 W Center St',
      image: 'images/hruskas-kolaches.jpg',
      description: 'Baked fresh daily at 6 AM. Pillowy sweet and savory Czech dough stuffed with sausage egg cheese, bacon jalapeño, or fresh fruit.',
      phone: '(801) 623-3584',
      website: 'https://hruskaskolaches.com/',
      mapsQuery: 'Hruskas+Kolaches+Provo+UT'
    },
    {
      id: 'station-22-cafe',
      name: 'Station 22 Cafe',
      price: '$$',
      location: '22 W Center St, Downtown',
      image: 'images/station-22-cafe.jpg',
      description: 'A Center Street landmark. Southern-inspired comfort food, crispy buttermilk chicken & waffles, artisan smash burgers, and a vintage craft soda wall.',
      phone: '(801) 607-1803',
      website: 'https://www.station22cafe.com/',
      mapsQuery: 'Station+22+Cafe+Provo+UT'
    }
  ];

  // 3. EXPERIENCES DATA (Field Guide & Outdoor Landscape Layout)
  const EXPERIENCES_ITEMS = [
    {
      id: 'bridal-veil-falls',
      name: 'Bridal Veil Falls & Provo River Parkway',
      location: 'Provo Canyon (Hwy 189)',
      image: 'images/bridal-veil-falls.jpg',
      description: 'A dramatic 607-foot double cataract waterfall cascading down canyon cliffs. Paved walking and cycling paths run right along the cool river.',
      mapsQuery: 'Bridal+Veil+Falls+Provo+Canyon+UT'
    },
    {
      id: 'rock-canyon',
      name: 'Rock Canyon Trailhead & Cliffs',
      location: '2620 N Rock Canyon Trailhead',
      image: 'images/rock-canyon.jpg',
      description: 'A rugged mountain hike winding through limestone gorge towers, wooden footbridges, and world-class sport climbing routes.',
      mapsQuery: 'Rock+Canyon+Trailhead+Provo+UT'
    },
    {
      id: 'byu-moa',
      name: 'BYU Museum of Art (MOA)',
      tag: 'Art & Cultural Gallery',
      metaPill: 'Free Admission • Peaceful Indoor',
      location: 'Campus Dr, North Campus Provo',
      image: 'images/byu-moa.jpg?v=seamless2',
      description: 'One of the Mountain West’s finest museums, hosting world-class rotating exhibitions, contemporary American works, and light-filled sculpture courtyards.',
      website: 'https://moa.byu.edu/',
      mapsQuery: 'BYU+Museum+of+Art+Provo+UT',
      event: {
        title: 'Art After Dark',
        tag: 'Signature Evening Event',
        badge: 'Free Admission',
        timing: 'Select Friday Evenings • 7:00 – 10:00 PM',
        image: 'images/byu-moa-art-after-dark.png',
        description: 'The MOA’s flagship after-hours celebration featuring live musical performances, student art exhibitions, light refreshments, and late-night gallery strolls.',
        website: 'https://moa.byu.edu/art-after-dark'
      }
    },
    {
      id: 'provo-river-tubing',
      name: 'Provo River Tubing & Fly Fishing',
      tag: 'Canyon River Activity',
      metaPill: 'Summer Float • Blue Ribbon Trout',
      location: 'Lower Provo Canyon',
      image: 'images/provo-river-tubing.jpg',
      description: 'Float down cold canyon mountain water on a warm afternoon or enjoy premier catch-and-release fly fishing along the river parkway.',
      mapsQuery: 'Provo+River+Parkway+UT'
    }
  ];

  // Helper: Analytics Tracking
  function trackEvent(eventName, params = {}) {
    if (typeof gtag === 'function') {
      gtag('event', eventName, params);
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  // =========================================================
  // RENDERERS (Mobile-First, Image-Centric, Tag-Free)
  // =========================================================

  // 1. Event Item (Hero Image Focal Point + Integrated Date Overlay)
  function renderEventItem(event) {
    return `
      <article class="local-card event-card">
        ${event.image ? `
          <div class="card-media">
            <img src="${event.image}" alt="${escapeHtml(event.name)}" class="card-img" loading="lazy" />
            ${event.icon ? `
              <img src="${event.icon}" alt="Emblem" class="card-media-emblem" title="${escapeHtml(event.name)}" />
            ` : ''}
            <div class="card-media-date">
              <i class="fa-regular fa-calendar"></i>
              <span>${escapeHtml(event.dateDay)} • ${escapeHtml(event.dateTime)}</span>
            </div>
          </div>
        ` : ''}
        <div class="card-body">
          <h3 class="card-title">${escapeHtml(event.name)}</h3>
          <div class="card-location">
            <i class="fa-solid fa-location-dot"></i>
            <span>${escapeHtml(event.location)}</span>
          </div>
          <p class="card-desc">${escapeHtml(event.description)}</p>
          <div class="card-actions">
            ${event.website ? `
              <a href="${event.website}" target="_blank" rel="noopener" class="btn-nav-primary" data-name="${escapeHtml(event.name)}">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Details
              </a>
            ` : ''}
            <a href="https://www.google.com/maps/search/?api=1&query=${event.mapsQuery}" target="_blank" rel="noopener" class="btn-nav-accent" data-name="${escapeHtml(event.name)}">
              <i class="fa-solid fa-diamond-turn-right"></i> Directions
            </a>
          </div>
        </div>
      </article>
    `;
  }

  // 2. Food Item (Appetizing Full-Width Hero Image Focal Point)
  function renderFoodItem(item) {
    return `
      <article class="local-card food-card">
        <div class="card-media">
          <img src="${item.image}" alt="${escapeHtml(item.name)}" class="card-img" loading="lazy" />
          ${item.price ? `
            <span class="card-media-price">${escapeHtml(item.price)}</span>
          ` : ''}
        </div>
        <div class="card-body">
          <h3 class="card-title">${escapeHtml(item.name)}</h3>
          <div class="card-location">
            <i class="fa-solid fa-location-dot"></i>
            <span>${escapeHtml(item.location)}</span>
          </div>
          <p class="card-desc">${escapeHtml(item.description)}</p>
          <div class="card-actions">
            ${item.website ? `
              <a href="${item.website}" target="_blank" rel="noopener" class="btn-nav-primary" data-name="${escapeHtml(item.name)}">
                <i class="fa-solid fa-globe"></i> Website
              </a>
            ` : ''}
            <a href="https://www.google.com/maps/search/?api=1&query=${item.mapsQuery}" target="_blank" rel="noopener" class="btn-nav-accent" data-name="${escapeHtml(item.name)}">
              <i class="fa-solid fa-diamond-turn-right"></i> Directions
            </a>
            ${item.phone ? `
              <a href="tel:${item.phone.replace(/[^0-9]/g, '')}" class="btn-nav-icon" title="Call ${escapeHtml(item.name)}">
                <i class="fa-solid fa-phone"></i>
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `;
  }

  // 3. Experience / Trailhead Card (Full-Bleed Nature Photography Focal Point)
  function renderExperienceCard(exp) {
    const hasSubcard = !!exp.event;
    return `
      <article class="local-card experience-card ${hasSubcard ? 'card-full-bleed moa-cluster-card' : ''}">
        <div class="card-media trail-media">
          <img src="${exp.image}" alt="${escapeHtml(exp.name)}" class="card-img" loading="lazy" />
        </div>
        ${hasSubcard ? '<div class="moa-body-stage">' : ''}
        <div class="card-body">
          <h3 class="card-title">${escapeHtml(exp.name)}</h3>
          <div class="card-location">
            <i class="fa-solid fa-location-dot"></i>
            <span>${escapeHtml(exp.location)}</span>
          </div>
          <p class="card-desc">${escapeHtml(exp.description)}</p>

          ${exp.event ? `
            <div class="moa-featured-event">
              <div class="moa-event-media">
                <img src="${escapeHtml(exp.event.image)}" alt="${escapeHtml(exp.event.title)}" class="moa-event-img" loading="lazy" />
                <div class="card-media-date">
                  <i class="fa-regular fa-clock"></i>
                  <span>${escapeHtml(exp.event.timing)}</span>
                </div>
              </div>
              <div class="moa-event-body">
                <h4 class="moa-event-title">${escapeHtml(exp.event.title)}</h4>
                <p class="moa-event-desc">${escapeHtml(exp.event.description)}</p>
                <a href="${escapeHtml(exp.event.website)}" target="_blank" rel="noopener" class="btn-nav-accent btn-full" data-name="${escapeHtml(exp.event.title)}">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Art After Dark Details &amp; Dates
                </a>
              </div>
            </div>
          ` : ''}

          <div class="card-actions">
            ${exp.website ? `
              <a href="${exp.website}" target="_blank" rel="noopener" class="btn-nav-primary" data-name="${escapeHtml(exp.name)}">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Museum Info
              </a>
            ` : ''}
            <a href="https://www.google.com/maps/search/?api=1&query=${exp.mapsQuery}" target="_blank" rel="noopener" class="btn-nav-accent" data-name="${escapeHtml(exp.name)}">
              <i class="fa-solid fa-diamond-turn-right"></i> Directions
            </a>
          </div>
        </div>
        ${hasSubcard ? '</div>' : ''}
      </article>
    `;
  }

  // Build the Food Tab HTML (Clean, Tag-Free Mobile Feed)
  function renderFoodSection() {
    return `
      <div class="local-cards-feed">
        ${FOOD_ITEMS.map(renderFoodItem).join('')}
      </div>
    `;
  }

  // Build the Events Tab HTML
  function renderEventsSection() {
    return `
      <!-- 1. First Event: Provo Farmers Market -->
      <div class="local-cards-feed">
        ${renderEventItem(DOWNTOWN_EVENTS[0])}
      </div>

      <!-- 2. Second: Sundance Mountain Resort Encompassing Section (Extends to screen edge) -->
      <section class="sundance-cluster-card card-full-bleed">
        <div class="sundance-banner">
          <img src="images/sundance-fall.jpg" alt="Sundance Mountain Resort in Fall" class="sundance-banner-img" loading="lazy" />
          <div class="sundance-banner-overlay"></div>
          <div class="sundance-banner-content">
            <div class="sundance-banner-inner">
              <h3 class="sundance-title">Sundance Mountain Resort</h3>
              <p class="sundance-desc">Rustic alpine culture, seasonal harvest markets, and weekend live music at the base of Mount Timpanogos.</p>
            </div>
          </div>
        </div>
        <div class="sundance-subcards">
          <div class="sundance-subcards-inner">
            ${SUNDANCE_EVENTS.map(renderEventItem).join('')}
          </div>
        </div>
      </section>

      <!-- 3. Remaining Downtown Events -->
      <div class="local-cards-feed" style="margin-top: 20px;">
        ${DOWNTOWN_EVENTS.slice(1).map(renderEventItem).join('')}
      </div>
    `;
  }

  // Populate Containers
  const eventsList = document.getElementById('eventsList');
  const foodList = document.getElementById('foodList');
  const experiencesList = document.getElementById('experiencesList');

  if (eventsList) {
    eventsList.innerHTML = renderEventsSection();
  }
  if (foodList) {
    foodList.innerHTML = renderFoodSection();
  }
  if (experiencesList) {
    experiencesList.innerHTML = EXPERIENCES_ITEMS.map(renderExperienceCard).join('');
  }

  // Attach Analytics Tracking to Interactive Links
  document.querySelectorAll('a[data-name]').forEach(link => {
    link.addEventListener('click', (e) => {
      const name = e.currentTarget.getAttribute('data-name');
      const isDir = e.currentTarget.classList.contains('btn-nav-accent');
      trackEvent(isDir ? 'click_directions' : 'click_website', { item_name: name });
    });
  });

  // =========================================================
  // TAB NAVIGATION & QUERY PARAM STATE (?tab=events)
  // =========================================================
  const navTabs = document.querySelectorAll('.nav-tab');
  const tabPanels = {
    events: document.getElementById('eventsSection'),
    food: document.getElementById('foodSection'),
    experiences: document.getElementById('experiencesSection')
  };

  function switchTab(targetTab, updateHistory = true, shouldScroll = false) {
    if (!tabPanels[targetTab]) {
      targetTab = 'events';
    }

    // Update tab button active state
    navTabs.forEach(tab => {
      if (tab.getAttribute('data-tab') === targetTab) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Update panels
    Object.keys(tabPanels).forEach(key => {
      if (tabPanels[key]) {
        if (key === targetTab) {
          tabPanels[key].classList.add('active');
        } else {
          tabPanels[key].classList.remove('active');
        }
      }
    });

    // Sync query parameter (?tab=...)
    if (updateHistory) {
      const url = new URL(window.location);
      url.searchParams.set('tab', targetTab);
      window.history.replaceState({ tab: targetTab }, '', url);
    }

    trackEvent('switch_tab', { tab_name: targetTab });

    if (shouldScroll) {
      const navEl = document.querySelector('.site-nav');
      if (navEl) {
        const navTop = navEl.getBoundingClientRect().top + window.pageYOffset;
        if (window.pageYOffset > navTop) {
          window.scrollTo({ top: navTop, behavior: 'smooth' });
        }
      }
    }
  }

  // Tab click listeners
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');
      switchTab(targetTab, true, true);
    });
  });

  // Browser back / forward buttons
  window.addEventListener('popstate', () => {
    const params = new URLSearchParams(window.location.search);
    const tabFromUrl = params.get('tab') || 'events';
    switchTab(tabFromUrl, false, false);
  });

  // Initialize active tab on load/reload (defaults to events)
  const initialParams = new URLSearchParams(window.location.search);
  const initialTab = initialParams.get('tab');
  if (initialTab && tabPanels[initialTab]) {
    switchTab(initialTab, false, false);
  } else {
    switchTab('events', false, false);
  }

})();
