# Music Setup Guide 🎵

Your portfolio now has Netflix-style audio! Here's how to set it up.

## What You Need

You need **2 audio files**:
1. **Netflix "ta-dum" sound** (1-2 seconds) - Plays once after the loader
2. **Lo-fi background music** (2-5 minutes) - Loops continuously in the background

---

## Option 1: Quick Setup (Recommended Free Sources)

### 1. Netflix "Ta-Dum" Sound

**Where to get it:**
- Search YouTube: "Netflix intro sound effect"
- Use a YouTube to MP3 converter: [y2mate.com](https://y2mate.com) or [ytmp3.cc](https://ytmp3.cc)
- Download the sound (should be 1-2 seconds long)
- Save as: `netflix-sound.mp3`

**OR use these free alternatives:**
- Search "cinematic logo sound" on [Pixabay](https://pixabay.com/sound-effects/)
- Search "whoosh impact" on [Freesound.org](https://freesound.org)

### 2. Lo-fi Background Music

**Recommended FREE sources:**

**🎹 Pixabay (No attribution required)**
- Visit: [https://pixabay.com/music/](https://pixabay.com/music/)
- Search for: "lofi" or "chill" or "ambient"
- Filter by: "Background Music"
- Download MP3
- Save as: `lofi-music.mp3`

**Popular tracks to search:**
- "Lofi Study" by Lexin_Music
- "Chill Abstract" by airtone
- "Lofi Chill" by QubeSounds

**🎵 YouTube Audio Library**
- Visit: [YouTube Audio Library](https://studio.youtube.com/channel/UC.../music)
- Filter: "Ambient" or "Electronic"
- Search: "lofi" or "chill"
- Download and use (free, no attribution needed)

**🎼 Free Music Archive**
- Visit: [freemusicarchive.org](https://freemusicarchive.org)
- Search: "lofi" + filter by CC0 (no attribution)
- Download MP3

---

## File Setup

1. **Download both audio files**
2. **Rename them:**
   - Netflix sound → `netflix-sound.mp3`
   - Background music → `lofi-music.mp3`

3. **Place them in the `assets` folder:**
   ```
   Resume-Website/
   ├── assets/
   │   ├── netflix-sound.mp3  ← Place here
   │   └── lofi-music.mp3     ← Place here
   ├── css/
   ├── js/
   └── index.html
   ```

---

## How It Works

### User Experience Flow:

1. **Visitor arrives** → Sees loader animation
2. **Loader finishes (2 seconds)** → Netflix "ta-dum" plays
3. **Netflix sound ends** → Lo-fi music starts automatically (looped)
4. **Music control appears** (bottom-right corner) → Visitor can toggle on/off

### Music Control Button:
- **Click to mute/unmute** music
- **Red button** = Music playing
- **Gray button** = Music muted
- **Pulsing icon** = Music is playing

---

## Browser Autoplay Policies

Modern browsers may block autoplay. Here's how the code handles it:

✅ **If autoplay works:**
- Netflix sound plays automatically
- Background music starts after Netflix sound
- Everything works seamlessly

⚠️ **If autoplay is blocked:**
- Music control button appears immediately
- User clicks music button to start
- OR user clicks anywhere on page to start music

---

## Customization Options

### Adjust Volume

Edit `js/main.js` (around line 430):

```javascript
// Background music volume (0.0 to 1.0)
backgroundMusic.volume = 0.3;  // 30% - change this!

// Netflix sound volume
netflixSound.volume = 0.5;     // 50% - change this!
```

### Change Music Button Position

Edit `css/style.css` (search for `.music-control`):

```css
.music-control {
    bottom: 30px;  /* Distance from bottom */
    right: 30px;   /* Distance from right */

    /* OR move to left side: */
    left: 30px;
    right: auto;
}
```

### Disable Netflix Sound (Only Background Music)

Edit `js/main.js`, comment out Netflix sound:

```javascript
// netflixSound.play() // Disabled
backgroundMusic.play(); // Just play background music
```

---

## Testing

1. **Test locally:**
   - Open `index.html` in browser
   - Wait for loader
   - Listen for Netflix sound
   - Check if background music starts
   - Click music button to toggle

2. **Test autoplay:**
   - Open in **Chrome Incognito** (strict autoplay policy)
   - Check if music control appears
   - Click to start music manually

3. **Test on mobile:**
   - Upload to a server (GitHub Pages, Netlify, etc.)
   - Test on phone browser
   - Mobile browsers are stricter with autoplay

---

## Troubleshooting

### Music not playing?
- ✅ Check files are named correctly: `netflix-sound.mp3` and `lofi-music.mp3`
- ✅ Check files are in the `assets/` folder
- ✅ Check browser console (F12) for errors
- ✅ Try clicking the music button manually
- ✅ Check file formats (MP3 is most compatible)

### Netflix sound plays but background music doesn't?
- Background music only starts after Netflix sound ends
- Check that `lofi-music.mp3` file exists and is valid
- Check browser console for errors

### Music button not showing?
- Button appears 3 seconds after page load
- Check that `index.html` has the music control HTML
- Check browser console for JavaScript errors

### File format issues?
- Use MP3 format (most compatible)
- WAV also works but larger file size
- OGG works in some browsers
- AAC/M4A may not work in all browsers

---

## Legal / Copyright

⚠️ **Important:**
- Use royalty-free music only
- Check license requirements
- Pixabay music = CC0 (no attribution needed)
- YouTube Audio Library = Free with optional attribution
- Never use copyrighted music without permission

---

## Recommended Settings

**For best experience:**
- Background music: 2-5 minutes long (will loop)
- File size: Under 5MB for fast loading
- Volume: 30% for background, 50% for Netflix sound
- Format: MP3 (128-192 kbps is fine)

---

## Example Search Terms

When looking for music:
- "lofi beats"
- "chill ambient"
- "background music lofi"
- "study music instrumental"
- "cafe ambience"
- "jazz lofi"
- "smooth electronic"

---

## Advanced: Want Different Music?

Replace the audio files anytime! Just keep the same names:
- `netflix-sound.mp3` (your intro sound)
- `lofi-music.mp3` (your background track)

The code automatically uses whatever files are there!

---

🎵 **That's it!** Download your audio files, place them in `/assets/`, and enjoy your musical portfolio! 🎵
