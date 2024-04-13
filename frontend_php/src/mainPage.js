import FrontPage from "./frontPage";
import WhoWeAre from "./whoWeAre";
import OurTeam from "./ourTeam";
import Footer from "./footer";
import OurPrograms from "./ourPrograms";
import OurResearch from "./ourResearch";
import OurEvents from "./ourEvents";
import DonateBanner from "./donateBanner";
import Navigation from "./navigation";

const MainPage = () => {
  return (
    <div>
      {" "}
      <Navigation />
      <FrontPage />
      <WhoWeAre />
      <OurTeam />
      <OurPrograms />
      <OurResearch />
      <DonateBanner />
      <OurEvents />
      <Footer />
    </div>
  );
};

export default MainPage;
