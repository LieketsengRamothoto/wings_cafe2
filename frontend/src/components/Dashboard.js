// src/components/Dashboard.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductBarChart from './ProductBarChart';
import './Dashboard.css';

const Dashboard = ({ products }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <form className="dashboard-form">
        <header className="dashboard-header">
          <h2>Dashboard</h2>
          <nav className="dashboard-nav">
            <Link to="/products" className="nav-link">Product Management</Link>
            <Link to="/users" className="nav-link">User Management</Link>
            <button onClick={handleLogout} className="btn logout-btn">Logout</button>
          </nav>
        </header>

        <section className="dashboard-main">
          <h3>Products Overview</h3>
          {products.length === 0 ? (
            <p>No products have been added yet.</p>
          ) : (
            <div className="dashboard-data">
              <div className="chart-container">
                <ProductBarChart products={products} />
              </div>
              <div className="carousel-container">
                <div>
                  <img src="/pictures/SodaBeverage.JPEG" alt="Soda Beverage" />
                  <p className="legend">Soda Beverage</p>
                </div>
                <div>
                  <img src="/pictures/platter.JPEG" alt="Platter" />
                  <p className="legend">Platter</p>
                </div>
                {/* Add more items as needed */}
              </div>
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    {/* Add table headings and rows here */}
                  </thead>
                </table>
              </div>
            </div>
          )}
        </section>
      </form>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <Link to="#" className="footer-link">About</Link>
            <Link to="#" className="footer-link">Privacy Policy</Link>
            <Link to="#" className="footer-link">Terms of Service</Link>
            <Link to="#" className="footer-link">Contact</Link>
          </div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
