# IBM Referral Form Setup Guide

## Overview
Your portfolio includes an IBM Referral form that allows visitors to request referrals by submitting their information. The form uses **FormBold** - a free form backend service that **supports file uploads on the free plan**.

## Step-by-Step Setup

### 1. Create a FormBold Account (FREE)

1. Go to [https://formbold.com](https://formbold.com)
2. Click **"Get Started Free"** or **"Sign Up"**
3. Sign up with your email address (albinthomas231@gmail.com) or use Google/GitHub login
4. Verify your email address (check your inbox)

### 2. Create a New Form

1. After logging in, click **"Create New Form"** or **"+ New Form"**
2. Give it a name: **"IBM Referral Form"**
3. Configure your form settings:
   - **Email:** albinthomas231@gmail.com (where submissions will be sent)
   - **Enable file uploads:** ✅ (should be enabled by default)
4. Click **"Create Form"**
5. You'll get a **Form Endpoint URL** that looks like: `https://formbold.com/s/UNIQUE_ID`
6. **Copy this endpoint URL**

### 3. Update Your Website Code

1. Open the file: `js/main.js`
2. Find line **453** (search for `YOUR_FORMBOLD_ID`)
3. Replace it with your actual FormBold endpoint:

```javascript
// BEFORE:
const formboldEndpoint = 'https://formbold.com/s/YOUR_FORMBOLD_ID';

// AFTER (use your actual endpoint):
const formboldEndpoint = 'https://formbold.com/s/abc123xyz';
```

### 4. How It Works

When someone submits the referral form:

1. **Form data is collected:**
   - Full Name
   - Email Address
   - Phone Number
   - LinkedIn Profile
   - IBM Job ID
   - Position Title
   - Resume file (PDF, DOC, DOCX - max 10MB)
   - Why IBM message (optional)
   - Consent checkbox

2. **Data is sent to FormBold**
   - FormBold processes the submission
   - Sends an email to: **albinthomas231@gmail.com**

3. **You receive an email with:**
   - All form fields
   - Resume file as attachment ✅ (FREE!)
   - Timestamp of submission
   - Sender's email for direct reply

### 5. Email Format

You'll receive emails like this:

```
Subject: New Form Submission - IBM Referral Form

From: FormBold <noreply@formbold.com>
Reply-To: john.doe@example.com

Full Name: John Doe
Email: john.doe@example.com
Phone: +1234567890
LinkedIn: https://linkedin.com/in/johndoe
Job ID: JR-12345
Position: AI Engineer
Message: I'm very interested in joining IBM...

[Resume attachment: resume.pdf]
```

### 6. Testing the Form

1. Open your portfolio website
2. Navigate to the "IBM Referral" section
3. Fill out the form with test data:
   - Use a real email you can access
   - Upload a test PDF resume
   - Fill all required fields
4. Submit the form
5. Check your email (albinthomas231@gmail.com)
6. Verify you received the email with all details and the resume attachment

### 7. FormBold Features (FREE Plan)

✅ **250 submissions per month** (free tier)
✅ **File uploads INCLUDED** up to 10MB per file ⭐
✅ **Unlimited forms**
✅ **Email notifications** to your inbox
✅ **Spam protection** built-in
✅ **Dashboard** to view all submissions
✅ **Export to CSV**
✅ **No coding** required for backend
✅ **Custom email templates**
✅ **Works on any hosting** (GitHub Pages, Netlify, Vercel, etc.)

### 8. Managing Submissions with FormBold Dashboard

1. Log in to [formbold.com](https://formbold.com)
2. Click on **"Submissions"** or your form name: **"IBM Referral Form"**
3. View all submissions in one place
4. Download attachments
5. Export to CSV
6. See submission analytics
7. Configure spam filters
8. Customize email notifications

### 9. Optional: Customize Email Notifications

In the FormBold dashboard, you can:

- **Customize subject line** for email notifications
- **Add auto-responder** to send confirmation emails to users
- **Set up webhooks** for integrations
- **Configure reCAPTCHA** for spam protection
- **Add custom thank you page** redirect after submission

### 10. Troubleshooting

**Form not sending / 404 error?**
- Check that you replaced `YOUR_FORMBOLD_ID` with your actual FormBold endpoint in `js/main.js:453`
- Verify the form endpoint URL is correct: `https://formbold.com/s/YOUR_ID`
- Make sure you created the form in your FormBold dashboard

**Form not sending?**
- Open browser console (F12) and check for errors
- Verify file size is under 10MB
- Check that all required fields are filled
- Ensure your FormBold account is verified (check email)

**Not receiving emails?**
- Check spam/junk folder
- Verify email address in FormBold dashboard
- Check FormBold submission logs in your dashboard
- Make sure your email is verified with FormBold
- Check email settings in FormBold form configuration

**File upload not working?**
- Only PDF, DOC, DOCX files are allowed (as per your form validation)
- Maximum file size: 10MB (FormBold limit on free plan)
- Check browser console for validation errors
- Ensure file input has correct `name="resume"` attribute
- File uploads are enabled by default in FormBold - no extra configuration needed!

**Hit submission limit?**
- Free plan: 250 submissions/month
- Upgrade to paid plan for unlimited submissions
- Check your usage in FormBold dashboard

**CORS errors?**
- FormBold supports CORS by default
- If you see CORS errors, check that your domain is allowed in FormBold settings
- FormBold should work from any domain by default

### 11. Security Notes

✅ Form endpoint is **safe to expose** in client-side code
✅ FormBold has built-in **spam protection**
✅ File uploads are **scanned for malware**
✅ **reCAPTCHA v3** can be enabled for extra protection
✅ **GDPR compliant**
✅ **SSL encrypted** submissions
✅ No sensitive data is stored on your server

### 12. FormBold vs Other Services

**Why FormBold?**
- ✅ **File uploads on FREE plan** (unlike Formspree)
- ✅ **250 submissions/month** (vs Formspree's 50)
- ✅ **Unlimited forms** on free plan
- ✅ **Simpler setup** than Web3Forms
- ✅ **Better file size limits** (10MB vs 5MB)
- ✅ **No access key needed** in code, just endpoint URL

---

## Quick Start Commands

```bash
# 1. Sign up at formbold.com
# 2. Create a new form: "IBM Referral Form"
# 3. Copy your form endpoint URL
# 4. Update js/main.js line 453 with your endpoint
# 5. Test the form with a file upload
# 6. Deploy your website!
```

---

## Need Help?

- **FormBold Docs:** https://formbold.com/docs
- **FormBold Support:** support@formbold.com
- **FormBold Dashboard:** https://formbold.com/dashboard
- **Your email:** albinthomas231@gmail.com

---

## Alternative: Use FormBold HTML Form (No JavaScript)

If you prefer a simpler approach without JavaScript, you can update your HTML form directly:

```html
<form action="https://formbold.com/s/YOUR_FORMBOLD_ID"
      method="POST"
      enctype="multipart/form-data">
    <!-- Your form fields -->
    <input type="text" name="fullName" required>
    <input type="email" name="email" required>
    <input type="file" name="resume" required>
    <button type="submit">Submit</button>
</form>
```

But the current JavaScript implementation provides:
- ✅ Better UX with loading states
- ✅ Custom success/error messages
- ✅ Form validation
- ✅ No page reload on submit
- ✅ File upload preview

---

**That's it!** Your referral form is ready to use with FREE file uploads! 🎉
