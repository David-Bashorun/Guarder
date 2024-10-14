
import Nav from './Components/Nav';
import Banner from './Components/banner';
import Services from './Components/Services';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    
      <>
        <section className='sect'>
        <Nav />
        <Banner />
        </section>
        <Services />
        <About />
        <Blog />
        <Contact />
        <Footer />
      </>
    
  )

}

export default App;
