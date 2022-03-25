import type { NextPage } from "next";
import { Seo, Header, Footer, MainContent } from "../components";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-200 font-poppins">
      <Seo title="Home" />

      <Header />

      <MainContent className="flex items-center justify-center flex-1">
        <h1 className="text-2xl font-bold uppercase">Site em construção...</h1>
      </MainContent>

      <Footer />
    </div>
  );
};

export default Home;
