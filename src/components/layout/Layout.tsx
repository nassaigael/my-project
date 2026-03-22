import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  transparentHeader?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  transparentHeader = false 
}) => {
  return (
    <div className="min-h-screen bg-neumorph-bg">
      <Header transparent={transparentHeader} />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};