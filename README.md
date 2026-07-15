# 🚗 PDcars — Premium Car Buying Consultancy

A modern, responsive multi-page website for **PDcars**, an independent car buying and consulting service based in Nagpur & Pune, India. Browse premium cars, view detailed specifications, calculate EMIs, and connect with automotive consultants.

---

## ✨ Features

- **Car Marketplace** — Browse 12+ premium cars with filters (brand, price, fuel type, transmission) and sorting
- **Car Details Page** — Image gallery, full specifications accordion, color selector, and EMI calculator
- **Checkout Flow** — Complete purchase simulation with invoice PDF generation
- **About Page** — Company story, team profiles, pillars, and client testimonials
- **Contact Page** — Company details grid and enquiry form with success feedback
- **Login & Register** — Authentication pages with video background
- **Responsive Design** — Works on desktop, tablet, and mobile
- **Wishlist & Cart** — Client-side persistence using localStorage

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (Vanilla) with CSS Custom Properties |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts (Poppins, Montserrat, Pacifico, Roboto) |
| Icons | Ionicons 5.5.2, Material Symbols |
| PDF Generation | html2pdf.js |

---

## 📄 Pages

| Page | File | Description |
|---|---|---|
| Home | `hellow.html` | Landing page with hero section and CTA |
| Find Cars | `find-cars.html` | Car marketplace with filters, search, and hero slideshow |
| Car Details | `car-details.html` | Individual car page with gallery, specs, EMI calculator, and checkout |
| About | `newabout.html` | Company info, team, achievements, and testimonials |
| Contact | `contact.html` | Contact details and enquiry form |
| Login | `login.html` | User login with video background |
| Register | `register.html` | User registration with video background |

---

## 🚀 How to Run

1. **Clone the repository**
   ```bash
   git clone https://github.com/pradneshsormare/car_dealing.git
   cd car_dealing
   ```

2. **Open in browser**
   - Simply open `index.html` (or `hellow.html`) in any modern browser
   - No build step or server required — it's pure HTML/CSS/JS

3. **Or use a local server** (recommended for best results)
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .
   ```
   Then visit `http://localhost:8000`

---

## 📁 Project Structure

```
PDcars/
├── index.html            # Entry point (redirects to hellow.html)
├── hellow.html           # Homepage
├── find-cars.html        # Car marketplace
├── find-cars.css         # Marketplace styles
├── find-cars.js          # Marketplace logic (filters, search, wishlist)
├── car-details.html      # Individual car detail page
├── car-details.css       # Car detail page styles
├── car-details.js        # Car detail page logic (gallery, EMI, checkout)
├── car-data.js           # Car data (specs, images, colors)
├── newabout.html         # About Us page
├── contact.html          # Contact page
├── login.html            # Login page
├── register.html         # Register page
├── hii.css               # Global shared stylesheet
├── king.js               # Homepage scripts
├── tyres.png             # Logo image
├── garageop.jpg          # Background image
├── garagewhite.jpg       # Background image
├── cars_image1/          # Car images directory
│   ├── bmw_m4_compi.jpeg
│   ├── bmw x5.jpg
│   ├── mercedes2.jpeg
│   ├── Porsche 911 GT3 wallpaper front view.jpeg
│   ├── audi Q7.jpeg
│   └── ... (16 images total)
├── videos/               # Background video assets
│   ├── realone.mp4
│   ├── classic.mp4
│   ├── maclaren.mp4
│   └── 16532416-hd_1920_1080_60fps.mp4
└── .gitignore
```

---

## 📸 Screenshots

> _Screenshots coming soon — deploy the site and capture key pages._

---

## 📝 License

This project is for educational and portfolio purposes.

---

** Built By coder **
