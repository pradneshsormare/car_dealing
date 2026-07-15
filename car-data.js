const cars = [
    {
        id: 1,
        brand: "BMW",
        model: "M4 Competition",
        badge: "Best Seller",
        price: 15300000,
        priceFormatted: "₹1.53 Crore",
        emiFormatted: "₹2.5 Lakh/month",
        images: [
            "cars_image1/bmw_m4_compi.jpeg",
            "garagewhite.jpg",
            "garageop.jpg"
        ],
        colors: [
            { name: "Alpine White", hex: "#f0f0f0" },
            { name: "Isle of Man Green", hex: "#1e5939" },
            { name: "Sapphire Black", hex: "#0a0a0a" }
        ],
        fuelType: "Petrol",
        transmission: "Automatic",
        mileage: "9.7 kmpl",
        seatingCapacity: 4,
        bodyType: "Coupe",
        specs: {
            engine: {
                capacity: "2993 cc",
                power: "503 bhp",
                torque: "650 Nm",
                cylinders: 6,
                topSpeed: "250 km/h",
                zeroToHundred: "3.5 sec",
                fuelTank: "59 L",
                mileageCity: "8 kmpl",
                mileageHighway: "10 kmpl"
            },
            tyres: {
                tyreSize: "275/35 R19 (F) / 285/30 R20 (R)",
                wheelType: "Alloy",
                spareTyre: "Not available (Run-flat)",
                groundClearance: "120 mm"
            },
            dimensions: {
                length: "4794 mm",
                width: "1887 mm",
                height: "1393 mm",
                wheelbase: "2857 mm",
                bootSpace: "440 L",
                kerbWeight: "1725 kg"
            },
            interior: {
                seatingMaterial: "Merino Leather",
                ac: "3-Zone Automatic",
                infotainment: "14.9-inch Touchscreen",
                sunroof: "Carbon Fibre Roof (No Sunroof)",
                seatAdjustment: "14-way Electric"
            },
            safety: {
                airbags: 6,
                abs: "Yes, with EBD and BA",
                parking: "360 Camera & Front/Rear Sensors",
                ncap: "5 Star (Euro NCAP)"
            }
        }
    },
    {
        id: 7,
        brand: "Porsche",
        model: "911 GT3",
        badge: "Premium",
        price: 19000000,
        priceFormatted: "₹1.90 Crore",
        emiFormatted: "₹3.2 Lakh/month",
        images: [
            "cars_image1/Porsche 911 GT3 wallpaper front view.jpeg",
            "garagewhite.jpg",
            "garageop.jpg"
        ],
        colors: [
            { name: "Shark Blue", hex: "#1a5b8f" },
            { name: "Guards Red", hex: "#c41e1e" },
            { name: "Carrara White", hex: "#eaeaea" }
        ],
        fuelType: "Petrol",
        transmission: "PDK (Automatic)",
        mileage: "7.7 kmpl",
        seatingCapacity: 2,
        bodyType: "Coupe",
        specs: {
            engine: {
                capacity: "3996 cc",
                power: "502 bhp",
                torque: "470 Nm",
                cylinders: 6,
                topSpeed: "318 km/h",
                zeroToHundred: "3.4 sec",
                fuelTank: "64 L",
                mileageCity: "6 kmpl",
                mileageHighway: "8 kmpl"
            },
            tyres: {
                tyreSize: "255/35 ZR20 (F) / 315/30 ZR21 (R)",
                wheelType: "Forged Alloy",
                spareTyre: "No",
                groundClearance: "100 mm"
            },
            dimensions: {
                length: "4573 mm",
                width: "1852 mm",
                height: "1279 mm",
                wheelbase: "2457 mm",
                bootSpace: "132 L (Front)",
                kerbWeight: "1435 kg"
            },
            interior: {
                seatingMaterial: "Race-Tex & Leather",
                ac: "2-Zone Automatic",
                infotainment: "10.9-inch PCM",
                sunroof: "No",
                seatAdjustment: "Carbon Fiber Full Bucket"
            },
            safety: {
                airbags: 6,
                abs: "Yes",
                parking: "Rear Camera",
                ncap: "Not Rated"
            }
        }
    },
    {
        id: 4,
        brand: "Mercedes-Benz",
        model: "AMG GT",
        badge: "New",
        price: 9600000,
        priceFormatted: "₹96 Lakh",
        emiFormatted: "₹1.7 Lakh/month",
        images: [
            "cars_image1/mercedes2.jpeg",
            "garagewhite.jpg",
            "garageop.jpg"
        ],
        colors: [
            { name: "Selenite Grey", hex: "#4b4f54" },
            { name: "Obsidian Black", hex: "#0f0f0f" },
            { name: "Designo Diamond White", hex: "#f8f9fa" }
        ],
        fuelType: "Petrol",
        transmission: "Automatic",
        mileage: "8.5 kmpl",
        seatingCapacity: 4,
        bodyType: "Coupe",
        specs: {
            engine: {
                capacity: "3982 cc",
                power: "469 bhp",
                torque: "630 Nm",
                cylinders: 8,
                topSpeed: "304 km/h",
                zeroToHundred: "4.0 sec",
                fuelTank: "65 L",
                mileageCity: "7 kmpl",
                mileageHighway: "9 kmpl"
            },
            tyres: {
                tyreSize: "255/40 R19 (F) / 285/35 R19 (R)",
                wheelType: "AMG Alloy",
                spareTyre: "Run-flat",
                groundClearance: "115 mm"
            },
            dimensions: {
                length: "4544 mm",
                width: "1939 mm",
                height: "1287 mm",
                wheelbase: "2630 mm",
                bootSpace: "350 L",
                kerbWeight: "1645 kg"
            },
            interior: {
                seatingMaterial: "Nappa Leather",
                ac: "Dual-Zone Automatic",
                infotainment: "12.3-inch COMAND",
                sunroof: "Panoramic",
                seatAdjustment: "12-way Electric with Memory"
            },
            safety: {
                airbags: 8,
                abs: "Yes, with ESP",
                parking: "360 Camera & Active Parking Assist",
                ncap: "5 Star"
            }
        }
    }
];

function getCarById(id) {
    return cars.find(car => car.id === parseInt(id));
}
