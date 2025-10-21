# Watermelon — Intelligence Analyst

A simple, fast, and accessible three-page site for an intelligence analyst portfolio.

## Pages
- Home (index.html): Overview and working approach
- About (about.html): Background, focus areas, and values
- Contact (contact.html): Validated contact form with success feedback

## Features
- Clean, consistent navigation with active state and skip-to-content link
- Accessible structure: labelled main regions, aria-current on active link
- Client-side validation with clear error messages and success toast
- Lightweight: HTML + Tailwind CDN + vanilla JavaScript

## Tech Stack
- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript

## Project Structure
```
HNG 02/
├─ index.html
├─ about.html
├─ contact.html
└─ script.js
```

## Run Locally
No build required.
- Option 1: Open `index.html` directly in your browser.
- Option 2: Serve with a static server (example using Node):
  - `npx serve .`  or `npx http-server -c-1 .`

## Accessibility Notes
- Skip link for keyboard users
- `aria-label` on primary nav, `aria-current="page"` on active link
- Form errors use role="alert" and toggle Tailwind's `hidden` class
- Success message is announced politely (`aria-live="polite"`)

## Contact Form Validation
- Name: required
- Email: required, format-checked
- Subject: required
- Message: required, minimum 10 characters

## License
Unlicensed or private. Add a license if you plan to share or distribute.

## Author
Watermelon
