import React, { useContext } from "react";
// import images
import AiApp from "../img/portfolio/ai app.png";
import NomadDesk from "../img/portfolio/NomadDesk-logos_transparent.png";
import adminproX from "../img/portfolio/ADMINAPP.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  Button,
  BtnWrap,
} from "../components/ProjectElements";

const Portfolio = ({ buttonLabel, primary, dark, dark2 }) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const nomadDeskDemo = () => {
    window.open("https://coworking-booking-fullstack-app.vercel.app/");
  };

  const nomadDeskCode = () => {
    window.open(
      "https://github.com/Martynacodes/coworking-booking-fullstack-app"
    );
  };

  const adminDashboardDemo = () => {
    window.open(
      "https://admin-dashboard-react-lp8ec8st5-martynacodes-projects.vercel.app/"
    );
  };

  const adminDashboardCode = () => {
    window.open("https://github.com/Martynacodes/admin-dashboard-react-app");
  };

  const aiImageGeneratorDemo = () => {
    window.open(
      "https://64ad73cd22f2e807e100b1b2--cozy-starlight-9eb433.netlify.app/"
    );
  };

  const aiImageGeneratorCode = () => {
    window.open("https://github.com/Martynacodes/ai-image-generating-app");
  };

  const myPortfolioDemo = () => {
    window.open("https://martynacodes.com/");
  };

  const myPortfolioCode = () => {
    window.open("https://github.com/Martynacodes/new-react-portfolio");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 ">
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            {/* <h1 className="h1">Projects</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <b> Exercitationem, veritatis.</b> Veritatis illum aut,
              reprehenderit sed dolorem dolore.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae, iure! Ullam, dolore? Eligendi, quam mollitia.
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Hire me
            </Link> */}
          </motion.div>
          {/* image grid */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="grid lg:gap-2"
          >
            <ProjectsContainer id="projects">
              <ProjectsH1 className="h1">My Projects</ProjectsH1>
              <ProjectsWrapper>
                {/* Project No 1 */}
                <ProjectsCard>
                  <ProjectsIcon src={NomadDesk} />
                  <ProjectsH2 className="h1"> NomadDesk</ProjectsH2>
                  <ProjectsP>
                    A fullstack Next 13 app for booking coworking spaces around
                    the world. CRUD functionality, authorization and
                    authentication, booking.
                  </ProjectsP>
                  <BtnWrap>
                    <Button
                      onClick={nomadDeskDemo}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      Demo
                    </Button>
                    <Button
                      onClick={nomadDeskCode}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      Code
                    </Button>
                  </BtnWrap>
                </ProjectsCard>

                {/* Project No 2 */}
                <ProjectsCard>
                  <ProjectsIcon src={adminproX} />
                  <ProjectsH2 className="h1">Admin Dashboard App</ProjectsH2>
                  <ProjectsP>
                    Admin Dashboard app featuring four various charts, data
                    tables page and calendar integration. Built with React, Data
                    Grid, Material UI.
                  </ProjectsP>
                  <BtnWrap>
                    <Button
                      onClick={adminDashboardDemo}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      Demo
                    </Button>
                    <Button
                      onClick={adminDashboardCode}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      Code
                    </Button>
                  </BtnWrap>
                </ProjectsCard>

                {/* Project No 3 */}
                <ProjectsCard>
                  <ProjectsIcon src={AiApp} />
                  <ProjectsH2 className="h1"> AI Image Generator</ProjectsH2>
                  <ProjectsP>
                    Fully responsive image creating app. App generate four image
                    variations based on a text prompt. Built with OpenAI DALL-E
                    API.
                  </ProjectsP>
                  <BtnWrap>
                    <Button
                      onClick={aiImageGeneratorDemo}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      Demo
                    </Button>
                    <Button
                      onClick={aiImageGeneratorCode}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      Code
                    </Button>
                  </BtnWrap>
                </ProjectsCard>
              </ProjectsWrapper>
            </ProjectsContainer>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
