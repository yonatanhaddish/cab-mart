import AboutUs from "../components/AboutUs/AboutUs";
import CategoryBox from "../components/CategoryBox/CategoryBox";
import LandingPage from "../components/LandingPage/LandingPage";
import Navbar from "../components/Navbar/Navbar";
import Service from "../components/Service/Service";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <AboutUs />
      <Service />
      {/* <CategoryBox /> */}

      {/* <Products /> */}
    </div>
  );
}
