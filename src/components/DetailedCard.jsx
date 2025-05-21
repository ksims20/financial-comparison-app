/**
 * DetailedCard.jsx
 *
 * A two‐column card component for the Products page.
 * Left column: product type, title, rate, and fees.
 * Right column: a longer description of why to choose this product.
 */

export default function DetailedCard({ type, title, description, rate, fees }) {
  return (
    <div className="detailed-card">
      <div className="left-side">
        <span className="badge">{type}</span>
        <h3>{title}</h3>
        <p><strong>Rate:</strong> {rate}</p>
        <p><strong>Fees:</strong> {fees}</p>
      </div>
      <div className="right-side">
        <p>{description}</p>
      </div>
    </div>
  );
}
