import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #bdaea157;
  margin-top: 5rem;

  @media (max-width: 1000px) {
    height: 1400px;
  }

  @media (max-width: 768px) {
    height: auto;
    overflow-y: auto;
    margin-top: 30rem;
  }

  @media (max-width: 480px) {
    height: auto;
    margin-top: 12rem;
    overflow-y: auto;
  }
`;

export const ProjectsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProjectsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 450px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProjectsIcon = styled.img`
  height: 180px;
  width: 180px;
  margin-bottom: 10px;
`;

export const ProjectsH1 = styled.h1`
  /* font-size: 2.5rem;
  color: black;
  margin-bottom: 64px; */
  margin-bottom: 1rem;
  font-family: Playfair Display;
  font-size: 54px;
  font-weight: 700;
  text-transform: capitalize;
  line-height: 120%;
  letter-spacing: -0.05em;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Button = styled.button`
  border-radius: 50px;
  background: #010606;
  white-space: nowrap;
  margin: 5px;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#ffffff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    /* transition: all 0.2s ease-in-out;
    background: #fdd719;
    color: #010606; */
  }
`;
