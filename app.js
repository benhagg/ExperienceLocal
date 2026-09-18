/**
 * Experience Local Provo - Food, Events, Experiences Directory
 */

(function () {
  'use strict';

  // 1. FOOD DATA
  const FOOD_ITEMS = [
    {
      id: 'rockwell-ice-cream',
      name: 'Rockwell Ice Cream Co.',
      tag: 'Artisan Ice Cream',
      metaRight: '$',
      location: '43 N University Ave, Provo, UT',
      image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80',
      description: 'Named America’s #1 Ice Cream. Handcrafted micro-batch ice cream made with local Utah cream in fresh homemade waffle cones.',
      highlight: 'Must Try: The G.O.A.T. (honeycomb & goat cheese) or Salted Caramel',
      phone: '(801) 318-5950',
      website: 'https://rockwellicecream.com/',
      mapsQuery: 'Rockwell+Ice+Cream+Provo+UT'
    },
    {
      id: 'station-22-cafe',
      name: 'Station 22 Cafe',
      tag: 'Southern Comfort',
      metaRight: '$$',
      location: '22 W Center St, Provo, UT',
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=80',
      description: 'A Center Street classic. Southern-inspired comfort food, crispy chicken & waffles, gourmet burgers, and a vintage craft soda wall.',
      highlight: 'Must Try: Chicken & Waffles or The Grand Central Burger',
      phone: '(801) 607-1803',
      website: 'https://www.station22cafe.com/',
      mapsQuery: 'Station+22+Cafe+Provo+UT'
    },
    {
      id: 'black-sheep-cafe',
      name: 'Black Sheep Cafe',
      tag: 'Native Southwest',
      metaRight: '$$$',
      location: '19 N University Ave, Provo, UT',
      image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop&q=80',
      description: 'Renowned Native American Southwest cuisine. Known for their homemade Navajo frybread, braised pork posole, and cactus pear ribs in historic downtown.',
      highlight: 'Must Try: Hog Jowl Tacos on Frybread with Honey Butter',
      phone: '(801) 607-2485',
      website: 'https://blacksheepcafeprovo.com/',
      mapsQuery: 'Black+Sheep+Cafe+Provo+UT'
    },
    {
      id: 'chomp-burger',
      name: 'CHOMP Burger',
      tag: 'Smashburgers & Shakes',
      metaRight: '$',
      location: '45 E 800 N, Provo, UT',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80',
      description: 'Crispy lacy smash patties on toasted brioche buns, secret house sauce, seasoned crinkle fries, and thick malt shakes.',
      highlight: 'Must Try: Double Chomp Burger & Nutella Malt Shake',
      phone: '(801) 374-2466',
      website: 'https://chompburger.com/',
      mapsQuery: 'CHOMP+Burger+Provo+UT'
    },
    {
      id: 'brasas-mexican-grill',
      name: 'Brasas Mexican Grill',
      tag: 'Street Tacos',
      metaRight: '$',
      location: '238 S 100 W, Provo, UT',
      image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&auto=format&fit=crop&q=80',
      description: 'Authentic local taqueria featuring vertical trompo al pastor, grilled meats, fresh pressed tortillas, and salsa bar.',
      highlight: 'Must Try: Al Pastor Tacos with pineapple and Horchata',
      phone: '(801) 377-8226',
      website: 'https://brasasmexicangrill.com/',
      mapsQuery: 'Brasas+Mexican+Grill+Provo+UT'
    },
    {
      id: 'hruskas-kolaches',
      name: 'Hruska’s Kolaches',
      tag: 'Czech Bakery',
      metaRight: '$',
      location: '434 W Center St, Provo, UT',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80',
      description: 'Baked fresh every morning at 6 AM. Pillowy sweet and savory Czech breakfast pastries stuffed with bacon egg cheese, sausage, or berries.',
      highlight: 'Must Try: Jalapeño Sausage Cheddar or Raspberry Cream Cheese',
      phone: '(801) 623-3584',
      website: 'https://hruskaskolaches.com/',
      mapsQuery: 'Hruskas+Kolaches+Provo+UT'
    },
    {
      id: 'bombay-house',
      name: 'Bombay House',
      tag: 'Indian Cuisine',
      metaRight: '$$',
      location: '463 N University Ave, Provo, UT',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&auto=format&fit=crop&q=80',
      description: 'A Utah Valley staple for authentic Indian dishes, featuring rich Chicken Tikka Masala, Lamb Boti Kabobs, and fresh tandoori garlic naan.',
      highlight: 'Must Try: Chicken Tikka Masala & Warm Garlic Naan',
      phone: '(801) 373-6677',
      website: 'https://bombayhouse.com/',
      mapsQuery: 'Bombay+House+Provo+UT'
    },
    {
      id: 'communal',
      name: 'Communal',
      tag: 'Farm-to-Table',
      metaRight: '$$$',
      location: '102 W Center St, Provo, UT',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80',
      description: 'Focused on sustainable Utah farms and seasonal ingredients. Family-style dining on Center Street with locally roasted meats and fresh trout.',
      highlight: 'Must Try: Pan-Roasted Utah Trout and Butterscotch Budino',
      phone: '(801) 805-4770',
      website: 'https://communalrestaurant.com/',
      mapsQuery: 'Communal+Restaurant+Provo+UT'
    }
  ];

  // 2. EVENTS DATA
  const EVENTS_ITEMS = [
    {
      id: 'provo-farmers-market',
      name: 'Provo Farmers Market',
      tag: 'Weekly Market',
      metaRight: 'Saturdays 9am - 2pm',
      location: 'Pioneer Park (500 W Center St)',
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&auto=format&fit=crop&q=80',
      description: 'Local produce, artisan breads, local honey, food trucks, and live music from Utah Valley makers and growers.',
      highlight: 'Tip: Come early for fresh baked goods and artisan sourdough.',
      website: 'https://www.provofarmersmarket.com/',
      mapsQuery: 'Pioneer+Park+Provo+UT'
    },
    {
      id: 'downtown-art-stroll',
      name: 'Downtown Provo Art Stroll',
      tag: 'Community Art',
      metaRight: 'First Friday of the Month',
      location: 'Historic Center Street & University Ave',
      image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=600&auto=format&fit=crop&q=80',
      description: 'Galleries, local shops, and cafes along Center Street stay open late with local artist exhibitions, live performances, and snacks.',
      highlight: 'Highlight: Free admission at all participating downtown galleries.',
      website: 'https://www.downtownprovo.com/art-stroll',
      mapsQuery: 'Historic+Downtown+Provo+UT'
    },
    {
      id: 'rooftop-concert-series',
      name: 'Provo Rooftop Concert Series',
      tag: 'Live Music',
      metaRight: 'Seasonal Summer Evenings',
      location: 'Downtown Provo (Nu Skin Plaza)',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80',
      description: 'Provo’s famous free outdoor live music series featuring local and national bands against the scenic Wasatch Mountain backdrop.',
      highlight: 'Tip: Bring a blanket or lawn chair early for good lawn spots.',
      website: 'https://rooftopconcertseries.com/',
      mapsQuery: 'Nu+Skin+Plaza+Provo+UT'
    },
    {
      id: 'food-truck-roundup',
      name: 'Provo Food Truck Roundup',
      tag: 'Food Trucks',
      metaRight: 'Thursday Evenings',
      location: 'The Startup Building (560 S 100 W)',
      image: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=600&auto=format&fit=crop&q=80',
      description: 'A gathering of Utah Valley’s top food trucks serving street tacos, woodfired pizza, waffle cones, and Korean BBQ.',
      highlight: 'Highlight: Indoor and outdoor seating with live acoustic music.',
      website: 'https://thestartupbuilding.com/',
      mapsQuery: 'Startup+Building+Provo+UT'
    }
  ];

  // 3. EXPERIENCES DATA
  const EXPERIENCES_ITEMS = [
    {
      id: 'bridal-veil-falls',
      name: 'Bridal Veil Falls & Provo River Parkway',
      tag: 'Scenic Waterfall',
      metaRight: 'Free • All Year',
      location: 'Provo Canyon (Hwy 189)',
      image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600&auto=format&fit=crop&q=80',
      description: 'A stunning 607-foot double cataract waterfall just minutes up Provo Canyon with paved walking and biking trails along the river.',
      highlight: 'Best for: Easy scenic walk, family photos, and river watching.',
      website: 'https://www.utahvalley.com/listing/bridal-veil-falls/252/',
      mapsQuery: 'Bridal+Veil+Falls+Provo+Canyon+UT'
    },
    {
      id: 'rock-canyon',
      name: 'Rock Canyon Trail & Climbing',
      tag: 'Hiking & Climbing',
      metaRight: 'Moderate • Free',
      location: '2620 N Rock Canyon Trailhead',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=80',
      description: 'A dramatic limestone canyon trail passing over wooden bridges and soaring rock faces, popular for hikers and rock climbers alike.',
      highlight: 'Trail: 5.6 miles out-and-back to the Squaw Peak overlook.',
      website: 'https://www.utahvalley.com/listing/rock-canyon-trailhead/242/',
      mapsQuery: 'Rock+Canyon+Trailhead+Provo+UT'
    },
    {
      id: 'byu-moa',
      name: 'BYU Museum of Art (MOA)',
      tag: 'Art & Culture',
      metaRight: 'Free Admission',
      location: 'Campus Dr, North Campus Provo',
      image: 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=600&auto=format&fit=crop&q=80',
      description: 'One of the premier art museums in the Mountain West, featuring world-class rotating exhibitions, American art, and contemporary collections.',
      highlight: 'Perk: Completely free admission and peaceful indoor galleries.',
      website: 'https://moa.byu.edu/',
      mapsQuery: 'BYU+Museum+of+Art+Provo+UT'
    },
    {
      id: 'provo-river-tubing',
      name: 'Provo River Tubing & Fly Fishing',
      tag: 'Water & Outdoor',
      metaRight: 'Summer Activity',
      location: 'Lower Provo Canyon',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80',
      description: 'Float down the cool alpine waters of the Provo River on a tube or kayak, or enjoy blue-ribbon fly fishing for wild brown trout.',
      highlight: 'Best for: Cooling off on warm summer afternoons.',
      website: 'https://provoriveroutdoors.com/',
      mapsQuery: 'Provo+River+Parkway+UT'
    }
  ];

  // Google Analytics Event Helper
  function trackEvent(eventName, params = {}) {
    if (typeof gtag === 'function') {
      gtag('event', eventName, params);
    }
  }

  // Render Card Template
  function createCardHTML(item) {
    return `
      <article class="card">
        <div class="card-img-wrapper">
          <img src="${item.image}" alt="${escapeHtml(item.name)}" class="card-img" loading="lazy" />
          <span class="card-badge">${escapeHtml(item.tag)}</span>
        </div>
        <div class="card-body">
          <div class="card-title-row">
            <h3 class="card-title">${escapeHtml(item.name)}</h3>
            <span class="card-meta-right">${escapeHtml(item.metaRight)}</span>
          </div>

          <div class="card-info-row">
            <i class="fa-solid fa-location-dot"></i>
            <span>${escapeHtml(item.location)}</span>
          </div>

          <p class="card-desc">${escapeHtml(item.description)}</p>

          <div class="highlight-box">
            ${escapeHtml(item.highlight)}
          </div>

          <div class="card-actions">
            ${item.website ? `
              <a href="${item.website}" 
                 target="_blank" 
                 rel="noopener" 
                 class="btn-website" 
                 data-name="${escapeHtml(item.name)}">
                <i class="fa-solid fa-globe"></i> Website
              </a>
            ` : ''}
            <a href="https://www.google.com/maps/search/?api=1&query=${item.mapsQuery}" 
               target="_blank" 
               rel="noopener" 
               class="btn-directions" 
               data-name="${escapeHtml(item.name)}">
              <i class="fa-solid fa-diamond-turn-right"></i> Directions
            </a>
            ${item.phone ? `
              <a href="tel:${item.phone.replace(/[^0-9]/g, '')}" class="btn-call" title="Call">
                <i class="fa-solid fa-phone"></i>
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  // Populate Lists
  const foodList = document.getElementById('foodList');
  const eventsList = document.getElementById('eventsList');
  const experiencesList = document.getElementById('experiencesList');

  foodList.innerHTML = FOOD_ITEMS.map(createCardHTML).join('');
  eventsList.innerHTML = EVENTS_ITEMS.map(createCardHTML).join('');
  experiencesList.innerHTML = EXPERIENCES_ITEMS.map(createCardHTML).join('');

  document.getElementById('foodCount').textContent = `${FOOD_ITEMS.length} spots`;
  document.getElementById('eventsCount').textContent = `${EVENTS_ITEMS.length} events`;
  document.getElementById('experiencesCount').textContent = `${EXPERIENCES_ITEMS.length} activities`;

  // Attach tracking to buttons
  document.querySelectorAll('.btn-website').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const name = e.currentTarget.getAttribute('data-name');
      trackEvent('click_website', { item_name: name });
    });
  });

  document.querySelectorAll('.btn-directions').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const name = e.currentTarget.getAttribute('data-name');
      trackEvent('click_directions', { item_name: name });
    });
  });

  // Tab Navigation Handling
  const navTabs = document.querySelectorAll('.nav-tab');
  const tabPanels = {
    food: document.getElementById('foodSection'),
    events: document.getElementById('eventsSection'),
    experiences: document.getElementById('experiencesSection')
  };

  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');

      navTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      Object.keys(tabPanels).forEach(key => {
        if (key === targetTab) {
          tabPanels[key].classList.add('active');
        } else {
          tabPanels[key].classList.remove('active');
        }
      });

      trackEvent('switch_tab', { tab_name: targetTab });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

})();
