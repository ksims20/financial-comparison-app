/**
 * App.jsx
 * 
 * The main entry point of the React application.
 * Sets up the primary layout.
 * Uses react routing in between pages
 * Manages the overall app structure and serves as the starting page.
 */

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FinancialCard from './components/FinancialCard.jsx';
import Header from './components/Header';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


function Home() {
  return (
    <div className="app-container">
      <section className="hero">
    <h1>Smart Tools for Smarter Money Moves</h1>
    <p>Quickly compare leading credit cards, savings accounts, and personal loans, all in one place.</p>
    </section>

      <h1 className="app-title">Compare and Choose</h1>
      <div className="cards-grid">
        <FinancialCard 
          type="Credit Card"
          title="Chase Sapphire Preffered"
          description="2% cash back on groceries and gas"
          rate="0% APR"
          fees="$0 monthly fees"
        />
        <FinancialCard 
          type="Savings Account"
          title="Ally High Yield Savings"
          description="Online savings with competitive APY"
          rate="3.5% APY"
          fees="$0 monthly fees"
        />
         <FinancialCard 
          type="Loan"
          title="SoFi Personal Loan"
          description="Flexible personal loans up to $50K"
          rate="7.2% APR"
          fees="No origination fee"
        />
         <FinancialCard 
          type="Investment"
          title="RoboinHood IRA"
          description="Automated investing with low fees"
          rate="Varies"
          fees="0.25% management fee"
        />
       
      </div>
    </div>
  );
}


function App() {
  return (
    <Router>
      <Header />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
