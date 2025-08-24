import AboutUs from "../components/AboutUs/AboutUs";
import CategoryBox from "../components/CategoryBox/CategoryBox";
import LandingPage from "../components/LandingPage/LandingPage";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <AboutUs />
      {/* <CategoryBox /> */}
      {/* <Products /> */}
    </div>
  );
}
