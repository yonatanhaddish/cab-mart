import AboutUs from "./component/AboutUs/AboutUs";
import CategoryBox from "./component/CategoryBox/CategoryBox";
import LandingPage from "./component/LandingPage/LandingPage";
import Navbar from "./component/Navbar/Navbar";
import Products from "./component/Products/Products";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <AboutUs />
      <CategoryBox />
      <Products />
    </div>
  );
}
