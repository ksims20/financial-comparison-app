# Financial Comparison App

A simple React + Vite demo showing how to compare financial products side-by-side. Built as a one-page recruiter portfolio piece for Red Ventures, it showcases:

- **React Router** for multi-page navigation (Home, Products, Resume, Contact)  
- **Reusable components** (`FinancialCard`) and a custom detailed view  
- **Responsive layouts**: grid on Home, two-column scroll on Products  
- **Branded styling**: Red Ventures colors, Aleo & Helvetica fonts  
- **Embedded resume** with download link  
- **Contact section** with headshot and social/email icons  

---

## 📦 Tech Stack

- **React** (components, hooks)  
- **Vite** (fast build & dev server)  
- **React Router** (v6)  
- **Ionicons** (SVG icons)  
- **CSS** (modular files per component/page)  

---

## 🔧 Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/ksims20/financial-comparison-app.git
   cd financial-comparison-app
Install dependencies

bash
Copy
Edit
npm install
Run dev server

bash
Copy
Edit
npm run dev
Open http://localhost:5173 in your browser.

⚙️ Production Build
bash
Copy
Edit
npm run build
Deploy the contents of dist/ to any static host (e.g. Netlify, Vercel).

📝 Project Structure
css
Copy
Edit
src/
├── components/
│   ├── FinancialCard.jsx
│   ├── DetailedCard.jsx
│   ├── ContactIcons.jsx
│   └── Header.jsx
├── pages/
│   ├── Products.jsx
│   ├── Resume.jsx
│   └── Contact.jsx
├── assets/           # images & PDF if imported
├── App.jsx
├── main.jsx
└── App.css
👤 Author
Kamren Sims • GitHub @ksims20 • LinkedIn

