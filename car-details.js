// car-details.js

let currentCar = null;
let selectedColor = null;

document.addEventListener('DOMContentLoaded', () => {
    // 1. Get Car ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const carId = urlParams.get('id');

    if (!carId) {
        // Fallback to first car if no ID provided (for testing purposes)
        currentCar = cars[0];
    } else {
        currentCar = getCarById(carId);
        if (!currentCar) currentCar = cars[0];
    }

    renderCarDetails();
    setupEmiCalculator();
});

function renderCarDetails() {
    if (!currentCar) return;

    // Header info
    document.getElementById('carBadge').innerText = currentCar.badge;
    document.getElementById('carFullName').innerText = `${currentCar.brand} ${currentCar.model}`;
    document.getElementById('carPriceFormatted').innerText = currentCar.priceFormatted;
    document.getElementById('carEmiFormatted').innerText = currentCar.emiFormatted;
    
    // Quick Specs
    document.getElementById('qsFuel').innerText = currentCar.fuelType;
    document.getElementById('qsTrans').innerText = currentCar.transmission;
    document.getElementById('qsMileage').innerText = currentCar.mileage;
    document.getElementById('qsSeating').innerText = currentCar.seatingCapacity;
    document.getElementById('qsBody').innerText = currentCar.bodyType;

    // Gallery
    const mainImage = document.getElementById('mainImage');
    const thumbContainer = document.getElementById('thumbnailContainer');
    
    if (currentCar.images && currentCar.images.length > 0) {
        mainImage.src = currentCar.images[0];
        thumbContainer.innerHTML = '';
        currentCar.images.forEach((imgSrc, index) => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.classList.add('thumbnail');
            if (index === 0) img.classList.add('active');
            img.onclick = () => {
                mainImage.src = imgSrc;
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                img.classList.add('active');
            };
            thumbContainer.appendChild(img);
        });
    }

    // Colors
    const colorsContainer = document.getElementById('colorsContainer');
    colorsContainer.innerHTML = '';
    if (currentCar.colors && currentCar.colors.length > 0) {
        selectedColor = currentCar.colors[0]; // default selection
        currentCar.colors.forEach((color, index) => {
            const swatch = document.createElement('div');
            swatch.classList.add('color-swatch');
            swatch.style.backgroundColor = color.hex;
            swatch.title = color.name;
            if (index === 0) swatch.classList.add('active');
            
            swatch.onclick = () => {
                document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
                swatch.classList.add('active');
                selectedColor = color;
            };
            colorsContainer.appendChild(swatch);
        });
    }

    // Full Specs Accordion
    const specsContainer = document.getElementById('fullSpecsContainer');
    specsContainer.innerHTML = '<h3>Full Specifications</h3>';
    
    const sections = [
        { key: 'engine', title: 'Engine & Performance' },
        { key: 'tyres', title: 'Tyres & Wheels' },
        { key: 'dimensions', title: 'Dimensions & Weight' },
        { key: 'interior', title: 'Interior & Comfort' },
        { key: 'safety', title: 'Safety Features' }
    ];

    sections.forEach((sec, index) => {
        if (currentCar.specs[sec.key]) {
            const accItem = document.createElement('div');
            accItem.classList.add('accordion-item');
            
            const accHeader = document.createElement('div');
            accHeader.classList.add('accordion-header');
            accHeader.innerHTML = `<span>${sec.title}</span> <ion-icon name="chevron-down-outline"></ion-icon>`;
            
            const accContent = document.createElement('div');
            accContent.classList.add('accordion-content');
            // First one active by default
            if (index === 0) {
                accContent.classList.add('active');
                accHeader.querySelector('ion-icon').name = 'chevron-up-outline';
            }
            
            let htmlStr = '';
            for (const [k, v] of Object.entries(currentCar.specs[sec.key])) {
                // simple formatting of keys
                const label = k.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                htmlStr += `<div class="spec-row"><span>${label}</span> <span>${v}</span></div>`;
            }
            accContent.innerHTML = htmlStr;
            
            accHeader.onclick = () => {
                const isActive = accContent.classList.contains('active');
                // close all
                document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('active'));
                document.querySelectorAll('.accordion-header ion-icon').forEach(i => i.name = 'chevron-down-outline');
                
                if (!isActive) {
                    accContent.classList.add('active');
                    accHeader.querySelector('ion-icon').name = 'chevron-up-outline';
                }
            };
            
            accItem.appendChild(accHeader);
            accItem.appendChild(accContent);
            specsContainer.appendChild(accItem);
        }
    });
}

function setupEmiCalculator() {
    const downSlider = document.getElementById('downPaymentSlider');
    const tenureSlider = document.getElementById('tenureSlider');
    const interestSlider = document.getElementById('interestSlider');
    
    const downVal = document.getElementById('downPaymentValue');
    const tenureVal = document.getElementById('tenureValue');
    const interestVal = document.getElementById('interestValue');
    const emiDisplay = document.getElementById('calculatedEmi');

    function calculate() {
        // Values
        let p = currentCar ? currentCar.price : 1000000;
        let dp = parseInt(downSlider.value);
        if (dp > p) {
            dp = p;
            downSlider.value = p;
        }
        
        downVal.innerText = dp.toLocaleString('en-IN');
        tenureVal.innerText = tenureSlider.value;
        interestVal.innerText = interestSlider.value;
        
        let principal = p - dp;
        let rate = parseFloat(interestSlider.value) / 12 / 100;
        let months = parseInt(tenureSlider.value);
        
        if (principal <= 0) {
            emiDisplay.innerText = "0";
            return;
        }
        
        // EMI formula = [P x R x (1+R)^N]/[(1+R)^N-1]
        let emi = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
        emiDisplay.innerText = Math.round(emi).toLocaleString('en-IN');
    }

    downSlider.addEventListener('input', calculate);
    tenureSlider.addEventListener('input', calculate);
    interestSlider.addEventListener('input', calculate);
    
    // Set max down payment based on car price
    if (currentCar) {
        downSlider.max = currentCar.price;
        downSlider.value = Math.min(currentCar.price * 0.2, downSlider.max); // 20% down payment by default
    }
    
    calculate();
}

function addToWishlist() {
    alert('Car added to your wishlist!');
}

/* Buy Flow */
function openCheckoutModal() {
    if (!currentCar) return;
    
    document.getElementById('checkoutCarName').innerText = `${currentCar.brand} ${currentCar.model}`;
    document.getElementById('checkoutCarPrice').innerText = currentCar.priceFormatted;
    document.getElementById('checkoutCarColor').innerText = selectedColor ? selectedColor.name : 'N/A';
    
    const taxes = 250000;
    const total = currentCar.price + taxes;
    document.getElementById('checkoutTotalPrice').innerText = `₹${total.toLocaleString('en-IN')}`;
    
    // Reset steps
    document.getElementById('checkoutFormStep').style.display = 'block';
    document.getElementById('successStep').style.display = 'none';
    
    document.getElementById('checkoutModal').classList.add('active');
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').classList.remove('active');
}

// Generate random Order ID and VIN
function generateRandomID(prefix, length) {
    let result = prefix;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

let currentOrderData = null;

function processPurchase(e) {
    e.preventDefault();
    
    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const address = document.getElementById('custAddress').value;
    const payment = document.getElementById('paymentMethod').value;
    
    const orderId = generateRandomID('ORD-', 8);
    const vin = generateRandomID('VIN-', 12);
    
    // Save to order data for Invoice
    currentOrderData = {
        orderId: orderId,
        date: new Date().toLocaleDateString(),
        name: name,
        phone: phone,
        address: address,
        payment: payment,
        vin: vin,
        car: currentCar,
        color: selectedColor ? selectedColor.name : 'N/A',
        taxes: 250000,
        total: currentCar.price + 250000
    };
    
    // Save to local storage (simulating My Orders)
    let myOrders = JSON.parse(localStorage.getItem('pdcars_orders') || '[]');
    myOrders.push(currentOrderData);
    localStorage.setItem('pdcars_orders', JSON.stringify(myOrders));
    
    // Show success step
    document.getElementById('checkoutFormStep').style.display = 'none';
    document.getElementById('successStep').style.display = 'block';
    document.getElementById('displayOrderId').innerText = orderId;
    
    // Update invoice template DOM
    populateInvoiceData();
}

function populateInvoiceData() {
    if (!currentOrderData) return;
    
    document.getElementById('invDate').innerText = `Date: ${currentOrderData.date}`;
    document.getElementById('invOrderNo').innerText = `Order No: ${currentOrderData.orderId}`;
    
    document.getElementById('invCustName').innerText = currentOrderData.name;
    document.getElementById('invCustPhone').innerText = currentOrderData.phone;
    document.getElementById('invCustAddress').innerText = currentOrderData.address;
    
    document.getElementById('invCarModel').innerText = `${currentOrderData.car.brand} ${currentOrderData.car.model}`;
    document.getElementById('invCarColor').innerText = currentOrderData.color;
    document.getElementById('invVin').innerText = currentOrderData.vin;
    document.getElementById('invCarPrice').innerText = currentOrderData.car.priceFormatted;
    
    document.getElementById('invTotal').innerText = `₹${currentOrderData.total.toLocaleString('en-IN')}`;
    document.getElementById('invPaymentMode').innerText = currentOrderData.payment;
}

function downloadInvoice() {
    const element = document.getElementById('invoice-container');
    
    // Generate PDF using html2pdf
    const opt = {
        margin:       0.5,
        filename:     `Invoice_${currentOrderData.orderId}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    // The container is hidden by positioning, temporarily make it visible for html2pdf
    element.style.position = 'relative';
    element.style.left = '0';
    element.style.top = '0';
    
    html2pdf().set(opt).from(element).save().then(() => {
        // Reset positioning
        element.style.position = 'absolute';
        element.style.left = '-9999px';
        element.style.top = '-9999px';
    });
}
