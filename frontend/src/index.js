import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Universe from './landing_page/product/Universe';
import PricingPage from './landing_page/pricing/PricingPage';
import AboutPage from './landing_page/about/AboutPage';
import SupportPage from './landing_page/support/SupportPage';
import Signup from './landing_page/signup/Signup';

const pages = {
  '#/products': <Universe />,
  '#/pricing': <PricingPage />,
  '#/about': <AboutPage />,
  '#/support': <SupportPage />,
  '#/signup': <Signup />,
};

function LandingPage() {
  const [route, setRoute] = React.useState(window.location.hash);

  React.useEffect(() => {
    const handleRouteChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', handleRouteChange);
    return () => window.removeEventListener('hashchange', handleRouteChange);
  }, []);

  return pages[route] || <HomePage />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <LandingPage />
    </div>
  </React.StrictMode>
);
