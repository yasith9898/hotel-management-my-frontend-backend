# MongoDB Atlas & Image URL Setup Guide

## 1. MongoDB Atlas Cloud Connection ✅

Your MongoDB Atlas connection string has been configured:

```
mongodb+srv://yasith:yasith123@cluster0.cdkpovy.mongodb.net/hotel-management?retryWrites=true&w=majority&appName=Cluster0
```

### To Update Your Backend .env File:

1. Navigate to `backend` folder
2. Update your `.env` file with the connection string above
3. The database name is set to `hotel-management`
4. Restart your backend server

**Note:** An `.env.example` file has been created in the backend folder as a template.

---

## 2. Using Google Drive Images for Hotel Rooms 🖼️

You can use Google Drive links or any public image URLs for room images. Here's how:

### Option A: Google Drive (Recommended for your own images)

1. **Upload image to Google Drive**
2. **Right-click the image → Share**
3. **Change access to "Anyone with the link"**
4. **Copy the sharing link** (format: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`)
5. **Convert to direct image URL:**
   - Original: `https://drive.google.com/file/d/1ABC123xyz/view?usp=sharing`
   - Convert to: `https://drive.google.com/uc?export=view&id=1ABC123xyz`
   
   **Formula:** `https://drive.google.com/uc?export=view&id=FILE_ID`

### Option B: Direct Image URLs

You can use any publicly accessible image URL:
- Imgur: `https://i.imgur.com/abc123.jpg`
- Unsplash: `https://images.unsplash.com/photo-...`
- Your own server: `https://yourwebsite.com/images/room1.jpg`

### Adding Images in Admin Panel:

1. Go to **Admin Dashboard → Manage Rooms**
2. Click **"Add Room"** or **"Edit"** existing room
3. In the **"Image URLs"** field, enter URLs separated by commas:
   ```
   https://drive.google.com/uc?export=view&id=1ABC123,
   https://drive.google.com/uc?export=view&id=2DEF456,
   https://i.imgur.com/example.jpg
   ```
4. Click **"Create Room"** or **"Update Room"**

### Example Google Drive Image URLs:

```
https://drive.google.com/uc?export=view&id=1a2b3c4d5e6f7g8h9i0j
https://drive.google.com/uc?export=view&id=1k2l3m4n5o6p7q8r9s0t
```

---

## 3. Sri Lankan Rupees (LKR) Currency ₨

The application has been updated to display prices in **Sri Lankan Rupees (LKR)** instead of USD.

### Changes Made:

✅ **Rooms Page** - Shows "LKR 15,000" instead of "$15000"
✅ **Room Details Page** - Shows "LKR 15,000" with proper formatting
✅ **Admin Panel** - Label updated to "Price (LKR per night)"
✅ **Number Formatting** - Prices display with thousand separators (e.g., 15,000)

### Price Examples:

- Standard Room: LKR 8,500 /night
- Deluxe Room: LKR 15,000 /night
- Suite: LKR 25,000 /night

---

## 4. Quick Start Checklist

- [ ] Update `backend/.env` with MongoDB Atlas connection string
- [ ] Restart backend server: `npm run dev` in backend folder
- [ ] Upload room images to Google Drive
- [ ] Convert Google Drive links to direct image URLs
- [ ] Add rooms with image URLs in Admin Panel
- [ ] Set prices in Sri Lankan Rupees (LKR)
- [ ] Test by viewing rooms on the frontend

---

## 5. Testing Your Setup

### Test MongoDB Connection:
1. Start backend server
2. Check console for: `MongoDB Connected: cluster0.cdkpovy.mongodb.net`
3. If connection fails, verify:
   - Username: `yasith`
   - Password: `yasith123`
   - Network access in MongoDB Atlas (allow your IP)

### Test Image Display:
1. Add a room with Google Drive image URL
2. Visit the Rooms page
3. Image should display correctly
4. If image doesn't show:
   - Verify the Google Drive link is set to "Anyone with the link"
   - Check the URL format is correct
   - Try using a different image hosting service (Imgur, etc.)

### Test Currency Display:
1. Create a room with price: 15000
2. Frontend should show: "LKR 15,000"
3. Admin panel should show: "LKR 15,000"

---

## 6. Troubleshooting

### MongoDB Connection Issues:
- **Error: "Authentication failed"**
  - Check username/password in connection string
  - Verify user exists in MongoDB Atlas
  
- **Error: "Network timeout"**
  - Add your IP address to MongoDB Atlas Network Access
  - Check if your firewall is blocking the connection

### Image Not Displaying:
- **Google Drive image not showing:**
  - Make sure sharing is set to "Anyone with the link"
  - Use the direct URL format: `https://drive.google.com/uc?export=view&id=FILE_ID`
  - Check browser console for CORS errors
  
- **Image shows broken icon:**
  - Verify the URL is accessible in a new browser tab
  - Check if the image file is not deleted from Drive

### Currency Display Issues:
- If prices still show "$", clear browser cache and refresh
- Check that you're viewing the latest version of the app

---

## Need Help?

If you encounter any issues:
1. Check the browser console for errors (F12)
2. Check the backend server logs
3. Verify all environment variables are set correctly
4. Ensure MongoDB Atlas cluster is running

---

**Last Updated:** December 13, 2025
