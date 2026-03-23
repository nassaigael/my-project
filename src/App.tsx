import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <Layout transparentHeader={true}>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default App;