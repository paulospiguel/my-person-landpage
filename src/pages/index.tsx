import type { NextPage } from "next";
import {Seo, Header, Footer, MainContent} from "../components";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-200 h-screen">
      <Seo title="Home" />

      <Header />

      <MainContent>
        
      </MainContent>

      <Footer />
    </div>
  );
};

export default Home;
