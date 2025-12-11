import About from "./components/About";
import Bottom from "./components/Bottom";
import ClientMatters from "./components/ClientMatters";
import ExpertTeachers from "./components/ExpertTeachers";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import PopularCourses from "./components/PopularCourses";
import Pricing from "./components/Pricing";
import Stats from "./components/Stats";
import Testimonial from "./components/Testimonial";
import WatchCourses from "./components/WatchCourses";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Stats />
      <ClientMatters />
      <Features />
      <ExpertTeachers />
      <About />
      <Testimonial />
      <Pricing />
      <PopularCourses />
      <FAQ />
      <WatchCourses />
      <Footer />
      <Bottom />
    </div>
  );
}

export default App;
