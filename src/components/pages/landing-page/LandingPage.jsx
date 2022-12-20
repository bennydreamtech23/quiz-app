
import HeroSection from '../../landing-page/hero-section/HeroSection';
import CardComponent from '../../landing-page/card-component/CardComponent';
import Preparation from '../../landing-page/preparation/Preparation';
import Testimonies from '../../landing-page/testimony/Testimonies';
import Layout from "../../layout/Layout";
import Contact from '../../landing-page/contact/Contact';
const LandingPage = () => {
  return (
<>
<Layout>
   <HeroSection/>
   <CardComponent/>
   <Preparation/>
   <Testimonies/>
   <Contact/>
   </Layout>
    </>
  );
};

export default LandingPage;
