import { Layout } from './components/layout/Layout';

function App() {
  return (
    <Layout transparentHeader={false}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section will go here */}
        <section id="home" className="min-h-screen">
          <h1>Hero Section</h1>
        </section>
        
        {/* Other sections will go here */}
        <section id="about" className="py-20">
          <h2>About</h2>
        </section>
      </div>
    </Layout>
  );
}

export default App;