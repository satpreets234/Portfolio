import { BackgroundAnimation } from "./component/AnimatedBackground";
import { Header } from "./component/Navbar";
import { HeroSection } from "./component/HeroSection";
import { Skills } from "./component/Skills";
import { Projects } from "./component/Project";
import { About } from "./component/About";

const Layout = (props) => {
  return (
    <div className="relative w-full min-h-screen ">
      {" "}
      {/* Dark gray background */}
      {/* Fixed background particles - will show through transparent areas */}
      <div className="absolute inset-0 -z-10">
        <BackgroundAnimation />
      </div>
      {/* Content container with higher z-index */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
};
export default Layout;
