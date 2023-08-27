import { CallToAction } from "./components/CallToAction";
import { Colaborators } from "./components/Colaborators";
import { Comments } from "./components/Comments";
import { Expertise } from "./components/Expertise";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import NavBarComponent from "./components/NavBarComponent";
import { Products } from "./components/Products";

function App() {
  return (
    <main style={{ backgroundColor: "black" }}>
      <NavBarComponent />
      <Hero />
      <Expertise />
      <Products />
      <Colaborators />
      <Comments />
      <CallToAction />
      <Footer />
    </main>
  );
}

export default App;
