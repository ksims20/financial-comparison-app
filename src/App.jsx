/**
 * App.jsx
 * 
 * The main entry point of the React application.
 * Sets up the primary layout.
 * Manages the overall app structure and serves as the starting page.
 */

import './App.css';
import FinancialCard from './components/FinancialCard.Jsx';

function App() {
  return (
    <div className="app-container">

      <h1 className="app-title">Financial Comparison</h1>
      
      <div className="cards-grid">
        <FinancialCard 
          title="Savings Account"
          description="A safe place to keep your money with easy access."
          rate="1.2% APY"
          fees="$0 monthly fees"
        />
        <FinancialCard 
          title="Checking Account"
          description="Everyday account with debit card access."
          rate="0.1% APY"
          fees="$5 monthly maintenance fee"
        />
        {/* Add more cards here */}
      </div>
    </div>
  );
}

export default App;
