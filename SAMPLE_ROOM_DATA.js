/**
 * Sample Room Data with Google Drive Images
 * 
 * This file shows examples of how to add rooms with different image URL formats.
 * You can use this as a reference when adding rooms through the Admin Panel.
 */

const sampleRooms = [
    {
        roomNumber: "101",
        name: "Deluxe Ocean View",
        category: "deluxe", // Use actual category ID from your database
        description: "Spacious room with stunning ocean views, perfect for couples or small families.",
        price: 15000, // Price in LKR (Sri Lankan Rupees)
        capacity: 2,
        floor: 1,
        size: 350,
        amenities: ["WiFi", "TV", "AC", "Mini Bar", "Ocean View", "Balcony"],

        // Option 1: Google Drive sharing link (will be auto-converted)
        images: [
            "https://drive.google.com/file/d/1ABC123xyz/view?usp=sharing",
            "https://drive.google.com/file/d/1DEF456abc/view?usp=sharing"
        ],

        status: "available"
    },

    {
        roomNumber: "102",
        name: "Standard Double Room",
        category: "standard",
        description: "Comfortable double room with modern amenities and city view.",
        price: 8500,
        capacity: 2,
        floor: 1,
        size: 250,
        amenities: ["WiFi", "TV", "AC", "Work Desk"],

        // Option 2: Direct Google Drive URL
        images: [
            "https://drive.google.com/uc?export=view&id=1GHI789def",
            "https://drive.google.com/uc?export=view&id=1JKL012ghi"
        ],

        status: "available"
    },

    {
        roomNumber: "201",
        name: "Executive Suite",
        category: "suite",
        description: "Luxurious suite with separate living area, perfect for business travelers.",
        price: 25000,
        capacity: 4,
        floor: 2,
        size: 500,
        amenities: ["WiFi", "TV", "AC", "Mini Bar", "Living Room", "Kitchenette", "Balcony"],

        // Option 3: Mix of different image sources
        images: [
            "https://drive.google.com/file/d/1MNO345jkl/view?usp=sharing",
            "https://i.imgur.com/example1.jpg",
            "https://images.unsplash.com/photo-example"
        ],

        status: "available"
    },

    {
        roomNumber: "202",
        name: "Family Room",
        category: "family",
        description: "Spacious family room with two queen beds and extra space for children.",
        price: 18000,
        capacity: 5,
        floor: 2,
        size: 450,
        amenities: ["WiFi", "TV", "AC", "Mini Fridge", "Extra Beds"],

        // Option 4: Using Imgur or other image hosting
        images: [
            "https://i.imgur.com/abc123.jpg",
            "https://i.imgur.com/def456.jpg"
        ],

        status: "available"
    }
];

/**
 * HOW TO USE IN ADMIN PANEL:
 * 
 * 1. Go to Admin Dashboard → Manage Rooms
 * 2. Click "Add Room"
 * 3. Fill in the form fields
 * 4. In "Image URLs" field, paste URLs separated by commas:
 * 
 *    Example:
 *    https://drive.google.com/file/d/1ABC123/view, https://i.imgur.com/xyz.jpg
 * 
 * 5. The app will automatically:
 *    - Convert Google Drive sharing links to direct URLs
 *    - Display images on the frontend
 *    - Format prices in LKR with thousand separators
 */

/**
 * GOOGLE DRIVE IMAGE SETUP STEPS:
 * 
 * 1. Upload your room image to Google Drive
 * 2. Right-click the image → Share
 * 3. Change "Restricted" to "Anyone with the link"
 * 4. Click "Copy link"
 * 5. Paste the link in the Admin Panel
 * 
 * The link will look like:
 * https://drive.google.com/file/d/1ABC123xyz/view?usp=sharing
 * 
 * You can paste it directly - the app will convert it automatically!
 */

/**
 * PRICE EXAMPLES IN LKR:
 * 
 * Budget Rooms:     5,000 - 8,000 LKR/night
 * Standard Rooms:   8,000 - 12,000 LKR/night
 * Deluxe Rooms:     12,000 - 18,000 LKR/night
 * Suites:           18,000 - 35,000 LKR/night
 * Premium Suites:   35,000+ LKR/night
 */

module.exports = sampleRooms;
