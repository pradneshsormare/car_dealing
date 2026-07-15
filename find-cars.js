// find-cars.js

const cars = [
  {
    id: 1,
    brand: "BMW",
    model: "M4 Competition",
    price: 15300000,
    formattedPrice: "₹1.53 Crore",
    emi: "₹2.5L/month",
    image: "cars_image1/bmw_m4_compi.jpeg",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: "10.75 km/l",
    category: "Sports Car",
    badge: "Premium",
    featured: true,
    addedAt: "2023-10-01"
  },
  {
    id: 2,
    brand: "BMW",
    model: "X5",
    price: 9800000,
    formattedPrice: "₹98 Lakh",
    emi: "₹1.8L/month",
    image: "cars_image1/bmw x5.jpg",
    fuelType: "Diesel",
    transmission: "Automatic",
    mileage: "12 km/l",
    category: "SUV",
    badge: "Best Seller",
    featured: true,
    addedAt: "2023-09-15"
  },
  {
    id: 3,
    brand: "Mercedes-Benz",
    model: "C-Class",
    price: 6100000,
    formattedPrice: "₹61 Lakh",
    emi: "₹1.1L/month",
    image: "cars_image1/bmwop12.jpg",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: "14 km/l",
    category: "Sedan",
    badge: "New",
    featured: false,
    addedAt: "2023-11-20"
  },
  {
    id: 4,
    brand: "Mercedes-Benz",
    model: "GLE",
    price: 9600000,
    formattedPrice: "₹96 Lakh",
    emi: "₹1.7L/month",
    image: "cars_image1/mercedes2.jpeg",
    fuelType: "Diesel",
    transmission: "Automatic",
    mileage: "11 km/l",
    category: "SUV",
    badge: "",
    featured: true,
    addedAt: "2023-08-10"
  },
  {
    id: 5,
    brand: "Audi",
    model: "A6",
    price: 6400000,
    formattedPrice: "₹64 Lakh",
    emi: "₹1.2L/month",
    image: "cars_image1/garagewhite.jpg",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: "14.1 km/l",
    category: "Sedan",
    badge: "",
    featured: false,
    addedAt: "2023-05-12"
  },
  {
    id: 6,
    brand: "Audi",
    model: "Q7",
    price: 8800000,
    formattedPrice: "₹88 Lakh",
    emi: "₹1.5L/month",
    image: "cars_image1/audi Q7.jpeg",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: "11.2 km/l",
    category: "SUV",
    badge: "Premium",
    featured: true,
    addedAt: "2023-12-01"
  },
  {
    id: 7,
    brand: "Porsche",
    model: "911",
    price: 19000000,
    formattedPrice: "₹1.90 Crore",
    emi: "₹3.2L/month",
    image: "cars_image1/Porsche 911 GT3 wallpaper front view.jpeg",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: "9 km/l",
    category: "Coupe",
    badge: "Premium",
    featured: true,
    addedAt: "2024-01-15"
  },
  {
    id: 8,
    brand: "Porsche",
    model: "Cayenne",
    price: 13600000,
    formattedPrice: "₹1.36 Crore",
    emi: "₹2.2L/month",
    image: "cars_image1/bmwop12.jpg",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: "10.8 km/l",
    category: "SUV",
    badge: "",
    featured: false,
    addedAt: "2023-07-22"
  },
  {
    id: 9,
    brand: "Jaguar",
    model: "F-Pace",
    price: 7800000,
    formattedPrice: "₹78 Lakh",
    emi: "₹1.4L/month",
    image: "cars_image1/garageop.jpg",
    fuelType: "Diesel",
    transmission: "Automatic",
    mileage: "12.9 km/l",
    category: "SUV",
    badge: "",
    featured: false,
    addedAt: "2023-04-18"
  },
  {
    id: 10,
    brand: "Land Rover",
    model: "Range Rover Sport",
    price: 16900000,
    formattedPrice: "₹1.69 Crore",
    emi: "₹2.8L/month",
    image: "cars_image1/range rover sport.jpg",
    imagePosition: "bottom",
    fuelType: "Diesel",
    transmission: "Automatic",
    mileage: "11.3 km/l",
    category: "SUV",
    badge: "Premium",
    featured: true,
    addedAt: "2024-02-10"
  },
  {
    id: 11,
    brand: "Volvo",
    model: "XC90",
    price: 10000000,
    formattedPrice: "₹1.00 Crore",
    emi: "₹1.8L/month",
    image: "cars_image1/bmw2.png",
    fuelType: "Hybrid",
    transmission: "Automatic",
    mileage: "17.2 km/l",
    category: "SUV",
    badge: "Electric",
    featured: false,
    addedAt: "2023-06-05"
  },
  {
    id: 12,
    brand: "Toyota",
    model: "Fortuner",
    price: 3900000,
    formattedPrice: "₹39 Lakh",
    emi: "₹75K/month",
    image: "cars_image1/bmwop.jpg",
    fuelType: "Diesel",
    transmission: "Manual",
    mileage: "10 km/l",
    category: "SUV",
    badge: "Best Seller",
    featured: false,
    addedAt: "2023-02-11"
  }
];

// App State
let filteredCars = [...cars];
let wishlist = JSON.parse(localStorage.getItem('pdCarsWishlist')) || [];
let cart = JSON.parse(localStorage.getItem('pdCarsCart')) || [];
let currentSort = 'featured';

// DOM Elements
const carGrid = document.getElementById('carGrid');
const resultCount = document.getElementById('resultCount');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const wishlistCount = document.getElementById('wishlistCount');
const cartCount = document.getElementById('cartCount');
const filterForm = document.getElementById('filterForm');
const clearBtn = document.getElementById('clearBtn');
const priceSlider = document.getElementById('priceSlider');
const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateCounts();
  applyFilters(); // Initial render
  initSlideshow();
});

// Update Badge Counts
function updateCounts() {
  wishlistCount.textContent = wishlist.length;
  cartCount.textContent = cart.length;
}

// Save to LocalStorage
function saveState() {
  localStorage.setItem('pdCarsWishlist', JSON.stringify(wishlist));
  localStorage.setItem('pdCarsCart', JSON.stringify(cart));
  updateCounts();
}

// Toggle Wishlist
window.toggleWishlist = function(id) {
  const index = wishlist.indexOf(id);
  if (index > -1) {
    wishlist.splice(index, 1);
  } else {
    wishlist.push(id);
  }
  saveState();
  renderCars(); // re-render to update heart icon
}

// Toggle Cart
window.toggleCart = function(id) {
  const index = cart.indexOf(id);
  if (index > -1) {
    cart.splice(index, 1);
  } else {
    cart.push(id);
  }
  saveState();
  renderCars(); // re-render to update button text
}

// Render Cars
function renderCars() {
  carGrid.innerHTML = '';
  resultCount.textContent = `Showing ${filteredCars.length} cars`;

  if (filteredCars.length === 0) {
    carGrid.innerHTML = '<div class="no-results">No cars match your filters. Try adjusting your search criteria.</div>';
    return;
  }

  filteredCars.forEach(car => {
    const isWishlisted = wishlist.includes(car.id);
    const inCart = cart.includes(car.id);
    
    const imgUrl = car.image;

    const cardHTML = `
      <div class="car-card">
        <div class="card-img-container">
          ${car.badge ? `<span class="badge">${car.badge}</span>` : ''}
          <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${car.id})">
            <ion-icon name="${isWishlisted ? 'heart' : 'heart-outline'}"></ion-icon>
          </button>
          <img src="${imgUrl}" alt="${car.brand} ${car.model}" style="object-position: ${car.imagePosition || 'center'};" onerror="this.src='cars_image1/bmw2.png'">
        </div>
        <div class="card-content">
          <div class="card-brand">${car.brand}</div>
          <div class="card-model">${car.model}</div>
          <div class="card-price">${car.formattedPrice}</div>
          <div class="card-emi">EMI from ${car.emi}</div>
          
          <div class="card-specs">
            <span><ion-icon name="water-outline"></ion-icon> ${car.fuelType}</span>
            <span><ion-icon name="settings-outline"></ion-icon> ${car.transmission}</span>
            <span><ion-icon name="speedometer-outline"></ion-icon> ${car.mileage}</span>
          </div>
          
          <div class="card-actions">
            <button class="btn-secondary" onclick="window.location.href='car-details.html?id=${car.id}'">View Details</button>
            <button class="btn-primary" onclick="toggleCart(${car.id})">
              ${inCart ? 'Selected' : 'Buy'}
            </button>
          </div>
        </div>
      </div>
    `;
    carGrid.insertAdjacentHTML('beforeend', cardHTML);
  });
}

// Filtering Logic
function applyFilters() {
  const searchTerm = searchInput.value.toLowerCase();
  
  // Price
  const minPrice = parseInt(minPriceInput.value) || 0;
  const maxPrice = parseInt(maxPriceInput.value) || 20000000;

  // Checkboxes
  const getCheckedValues = (name) => {
    return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(cb => cb.value);
  };

  const selectedBrands = getCheckedValues('brand');
  const selectedTypes = getCheckedValues('type');
  const selectedFuels = getCheckedValues('fuel');
  const selectedTrans = getCheckedValues('transmission');

  filteredCars = cars.filter(car => {
    // Search
    const matchesSearch = car.brand.toLowerCase().includes(searchTerm) || car.model.toLowerCase().includes(searchTerm);
    
    // Price
    const matchesPrice = car.price >= minPrice && car.price <= maxPrice;

    // Checkboxes (if none selected, assume all)
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(car.brand);
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(car.category);
    const matchesFuel = selectedFuels.length === 0 || selectedFuels.includes(car.fuelType);
    const matchesTrans = selectedTrans.length === 0 || selectedTrans.includes(car.transmission);

    return matchesSearch && matchesPrice && matchesBrand && matchesType && matchesFuel && matchesTrans;
  });

  sortCars(); // Render is called inside sortCars
}

// Sorting Logic
function sortCars() {
  if (currentSort === 'low-high') {
    filteredCars.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'high-low') {
    filteredCars.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'newest') {
    filteredCars.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
  } else {
    // Featured first, then rest
    filteredCars.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }
  renderCars();
}

// Event Listeners
searchInput.addEventListener('input', applyFilters);

sortSelect.addEventListener('change', (e) => {
  currentSort = e.target.value;
  sortCars();
});

filterForm.addEventListener('change', applyFilters);

clearBtn.addEventListener('click', () => {
  filterForm.reset();
  searchInput.value = '';
  
  // Reset slider UI
  minPriceInput.value = 0;
  maxPriceInput.value = 20000000;
  priceSlider.value = 20000000;
  
  applyFilters();
});

// Sync slider and input
priceSlider.addEventListener('input', (e) => {
  maxPriceInput.value = e.target.value;
  applyFilters();
});
maxPriceInput.addEventListener('input', (e) => {
  priceSlider.value = e.target.value;
  applyFilters();
});


// Slideshow Logic
function initSlideshow() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  const sliderSection = document.querySelector('.hero-slider-section');
  
  let currentSlide = 0;
  let slideInterval;

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = (index + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  function startSlideshow() {
    slideInterval = setInterval(nextSlide, 4000);
  }

  function pauseSlideshow() {
    clearInterval(slideInterval);
  }

  nextBtn.addEventListener('click', () => {
    nextSlide();
    pauseSlideshow();
    startSlideshow(); // restart interval
  });
  
  prevBtn.addEventListener('click', () => {
    prevSlide();
    pauseSlideshow();
    startSlideshow();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
      pauseSlideshow();
      startSlideshow();
    });
  });

  sliderSection.addEventListener('mouseenter', pauseSlideshow);
  sliderSection.addEventListener('mouseleave', startSlideshow);

  startSlideshow();
}
