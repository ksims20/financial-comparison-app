/**
 * Header.jsx
 *
 * The site’s global navigation bar.
 * - Uses React Router <Link> components to navigate between:
 * Home
 * Products
 * Resume
 * Contact
 * Sticks to the top of the viewport on scroll.
 */

import '../Header.css';
import RVLogo from '../assets/RVLogo.jpg';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header className="site-header">
      <div className="logo"><img src={RVLogo} alt="Red Ventures Logo" className="logo" />
</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
