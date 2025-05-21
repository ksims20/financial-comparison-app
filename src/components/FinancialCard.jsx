/**
 * FinancialCard.jsx
 * 
 * A React component that displays financial information in a card layout.
 * This component is used within the app to show individual financial items clearly.
 */

import '../FinancialCard.css';

export default function FinancialCard({ title, description, rate, fees }) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <div className="card-footer">
        <span>Rate: {rate}</span>
        <span>Fees: {fees}</span>
      </div>
    </div>
  );
}

  