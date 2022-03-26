import type { NextPage } from "next";
import { CSSProperties } from "react";
import { Parallax } from "react-parallax";
import {
  Seo,
  Header,
  Footer,
  SectionContent,
  Sticky,
  FirstAndSecondSection,
} from "../components";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const insideStyles: CSSProperties = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const Home: NextPage = () => {
  return (
    <div
      style={{ height: "1610vh" }}
      className="flex flex-col h-screen bg-gray-200 font-poppins"
    >
      <Seo title="Home" />

      <Header />

      <SectionContent
        style={{ height: "9.7%" }}
        className="flex justify-center flex-1"
      >
        <Sticky className="third">
          <h1 className="mt-4 text-2xl font-bold uppercase">
            Site em construção...
          </h1>
        </Sticky>
      </SectionContent>

      <SectionContent
        style={{ height: "10.1%" }}
        className="flex justify-center flex-1"
      >
        <Sticky className="fourth">
          <h1 className="mt-4 text-2xl font-bold uppercase">
            Site em construção...
          </h1>
        </Sticky>
      </SectionContent>

      <Parallax
        bgImage={image4}
        strength={200}
        renderLayer={(percentage: any) => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgba(255, 125, 0, ${percentage * 1})`,
                left: "50%",
                top: "50%",
                borderRadius: "1%",
                transform: "translate(-50%,-50%)",
                width: percentage * 500,
                height: percentage * 500,
              }}
            />
          </div>
        )}
      >
        <div style={{ height: 500 }}>
          <div style={insideStyles}>renderProp</div>
        </div>
      </Parallax>

      <Footer />
    </div>
  );
};

export default Home;
