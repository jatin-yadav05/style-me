import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-16">{children}</main>
    </div>
  );
};

export default Layout; 