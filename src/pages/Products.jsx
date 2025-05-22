/**
 * Products.jsx
 *
 * Displays curated financial products in a scrollable list:
 * Top hero section with title and description.
 * A vertical list of product rows, each containing:
 *  A FinancialCard on the left.
 *  A detailed description on the right.
 */

import FinancialCard from '../components/FinancialCard';
import '../Products.css'; 

const productData = [
  {
    type: "Credit Card",
    title: "Chase Sapphire Preferred",
    description: "2% cash back on groceries and gas",
    rate: "0% APR",
    fees: "$0 monthly fees",
    longDescription: "Great for frequent travelers and everyday purchases. The reward structure and no annual fee make it ideal for smart spenders."
  },
  {
    type: "Savings Account",
    title: "Ally High Yield Savings",
    description: "Online savings with competitive APY",
    rate: "3.5% APY",
    fees: "$0 monthly fees",
    longDescription: "A solid choice for building an emergency fund. No fees and a high APY help your money grow safely over time."
  },
  {
    type: "Loan",
    title: "SoFi Personal Loan",
    description: "Flexible personal loans up to $50K",
    rate: "7.2% APR",
    fees: "No origination fee",
    longDescription: "Useful for consolidating debt or covering major expenses. SoFi offers flexible repayment terms with no hidden costs."
  },
  {
    type: "Investment",
    title: "RoboinHood IRA",
    description: "Automated investing with low fees",
    rate: "Varies",
    fees: "0.25% management fee",
    longDescription: "A great start for beginners wanting long-term investing with automation. Small fees, big potential growth."
  },
];

const Products = () => {
  return (
    <div className="products-page">

      <section className="highlight-hero">
      <section className="hero">
        <h1>Explore Top Financial Tools</h1>
        <p>We’ve hand-picked financial products to help you grow, save, or borrow smarter.</p>
      </section>
      </section>

      <div className="products-list">
        {productData.map((item, index) => (
          <div className="product-row" key={index}>
            <FinancialCard
              type={item.type}
              title={item.title}
              description={item.description}
              rate={item.rate}
              fees={item.fees}
            />
            <div className="product-description">
              <p className="product-text">{item.longDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
