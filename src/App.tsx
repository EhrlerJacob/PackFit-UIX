import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar/index";
import { SelectedPage } from "./shared/types";
import Benefits from "@/scenes/benefits";
import Home from "@/scenes/home";
import OurPlans from "@/scenes/plans";
import Contact from "@/scenes/contact";
import Footer from "@/scenes/footer";
// import Blog from "@/scenes/blog";

function App () {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
    );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY === 0) {
          setIsTopOfPage(true);
          setSelectedPage(SelectedPage.Home);
        }
        if (window.scrollY !== 0) setIsTopOfPage(false);
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <div className="app">
    <Navbar
      isTopOfPage = {isTopOfPage}
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}
      />
    <Home setSelectedPage={setSelectedPage} />
    <Benefits setSelectedPage={setSelectedPage} />
    <OurPlans setSelectedPage={setSelectedPage} />
    <Contact setSelectedPage={setSelectedPage} />
    {/* <Blog setSelectedPage={setSelectedPage} />  */}
    <Footer />
    </div>
  )
}

export default App;