# Netflix-Inspired Portfolio Website

A stunning, interactive portfolio website that combines Netflix's cinematic dark theme with Suno's beautiful gradient aesthetics. Features smooth animations, carousel sections, and an IBM referral request system.

## Features

- **Netflix-Style Design**: Dark, cinematic interface with smooth animations
- **Suno-Inspired Gradients**: Vibrant, eye-catching color gradients throughout
- **Interactive Carousels**: Showcase your experience and projects in Netflix-style carousels
- **Comprehensive Sections**:
  - Hero section with animated stats
  - About Me with highlights
  - Work Experience carousel
  - Skills with animated progress bars
  - Projects showcase with hover effects
  - Interests grid
  - IBM Referral form with file upload
- **Fully Responsive**: Optimized for desktop, tablet, and mobile
- **Smooth Animations**: Scroll animations, hover effects, and transitions
- **Form Integration**: Web3Forms integration for referral submissions

## Quick Start

### 1. Open the Website

Simply open `index.html` in your web browser to view the website locally.

### 2. Customize Your Content

#### Personal Information

Edit `index.html` and replace the placeholder content:

- **Line 27**: Change "Your Name" in the title
- **Line 52-54**: Update navigation links if needed
- **Line 70**: Update your job title
- **Line 71-73**: Update your name and headline
- **Lines 74-76**: Update your subtitle/bio
- **Lines 84-94**: Update your stats (years of experience, projects, etc.)
- **Lines 133-144**: Update your About Me description
- **Lines 146-170**: Update education, current role, and location

#### Social Links

Update all social media links throughout the file:
- Search for `href="#"` and replace with your actual profile URLs
- LinkedIn, GitHub, Twitter, Email links appear in multiple sections

#### Work Experience

Edit the experience carousel cards (starting around line 208):
- Update job titles, company names, dates
- Modify responsibilities lists
- Change technology tags
- Add or remove experience cards as needed

#### Skills

Update skill categories and proficiency levels (starting around line 278):
- Modify skill names and levels
- Adjust progress bar widths (`style="width: 95%"`)
- Add or remove skill categories

#### Projects

Update project cards (starting around line 419):
- Change project titles and descriptions
- Update technology tags
- Add GitHub/demo links
- Replace placeholder icons with actual project images

#### Interests

Customize interest cards (starting around line 525) with your hobbies and passions.

### 3. Add Your Profile Image

Replace the profile placeholder:

1. Add your image to the `images/` folder (e.g., `profile.jpg`)
2. In `index.html` (around line 100), replace:
   ```html
   <div class="profile-placeholder">
       <i class="fas fa-user"></i>
   </div>
   ```
   with:
   ```html
   <img src="images/profile.jpg" alt="Your Name" style="width: 100%; height: 100%; object-fit: cover;">
   ```

### 4. Add Project Images

Replace project placeholders:

1. Add project images to the `images/` folder
2. In each project card, replace:
   ```html
   <div class="project-placeholder">
       <i class="fas fa-laptop-code"></i>
   </div>
   ```
   with:
   ```html
   <img src="images/project1.jpg" alt="Project Name" style="width: 100%; height: 100%; object-fit: cover;">
   ```

### 5. Set Up Form Submissions

To enable the referral form:

1. Go to [Web3Forms](https://web3forms.com/)
2. Sign up for a free account
3. Get your Access Key
4. In `js/main.js` (line 242), replace:
   ```javascript
   formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY_HERE');
   ```
   with your actual access key:
   ```javascript
   formData.append('access_key', 'your-actual-access-key');
   ```

## Customization

### Colors & Gradients

Edit `css/style.css` (lines 11-18) to customize gradients:

```css
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
--gradient-secondary: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
/* Add your own gradients */
```

### Fonts

The website uses **Inter** font. To change it:

1. In `index.html` (line 13), update the Google Fonts link
2. In `css/style.css` (line 45), update the font-family

### Animations

Adjust animation speeds in `css/style.css`:
- Scroll animations: Lines 58-63
- Carousel autoplay: `js/main.js` lines 99 and 122

## File Structure

```
Resume-Website/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles and animations
├── js/
│   └── main.js        # Interactive features and form handling
├── images/            # Your images (add your own)
├── assets/            # Additional assets
└── README.md          # This file
```

## Deployment

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```
3. Go to Settings > Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)

1. Go to [Netlify](https://www.netlify.com/)
2. Drag and drop your project folder
3. Your site will be live instantly with a custom URL

### Option 3: Vercel (Free)

1. Go to [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Deploy with one click

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Performance Tips

1. **Optimize Images**: Compress images before adding them
   - Use tools like [TinyPNG](https://tinypng.com/)
   - Recommended max size: 500KB per image

2. **Reduce Animations**: If performance is slow, comment out cursor glow effect in `js/main.js` (lines 331-350)

3. **Lazy Loading**: For many projects, add lazy loading to images:
   ```html
   <img src="image.jpg" loading="lazy" alt="Description">
   ```

## Customization Ideas

- Add a blog section with carousel
- Include certifications or awards
- Add a contact form alongside the referral form
- Implement dark/light mode toggle
- Add more project details with modal pop-ups
- Include testimonials section
- Add downloadable resume button

## Troubleshooting

### Carousels not working
- Ensure Swiper CDN links are loaded (check browser console)
- Verify `js/main.js` is properly linked

### Form not submitting
- Check your Web3Forms access key is correct
- Verify internet connection
- Check browser console for errors

### Animations not smooth
- Close other browser tabs
- Disable cursor glow effect
- Reduce carousel autoplay speed

### Mobile menu not working
- Check JavaScript console for errors
- Ensure all scripts are loaded

## Credits

- **Swiper.js**: For carousel functionality
- **Font Awesome**: For icons
- **Google Fonts**: For Inter font family
- **Web3Forms**: For form handling

## License

This project is open source and available for personal and commercial use.

## Support

For questions or issues:
- Check browser console for errors
- Ensure all CDN links are working
- Verify file paths are correct
- Make sure JavaScript is enabled

---

**Made with ❤️ and lots of coffee**

Inspired by Netflix's sleek design and Suno's beautiful gradients.
