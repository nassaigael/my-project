import React from 'react';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';

function App() {
  return (
    <Layout transparentHeader={true}>
      <Hero />
      <About />
      <Projects />
    </Layout>
  );
}

export default App;