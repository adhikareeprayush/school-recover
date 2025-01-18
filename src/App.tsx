import ClientMatters from "./components/ClientMatters";
import ExpertTeachers from "./components/ExpertTeachers";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import PopularCourses from "./components/PopularCourses";
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
      <ExpertTeachers />
      <Testimonial />
      <PopularCourses />
      <WatchCourses />
      <Footer />
    </div>
  );
}

export default App;
