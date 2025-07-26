import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-muted py-3 mt-auto">
      <div className="container">
        <small>&copy; {new Date().getFullYear()} TriniTech. Tous droits réservés.</small>
      </div>
    </footer>
  );
};

export default Footer;