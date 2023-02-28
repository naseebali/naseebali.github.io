import styled from "styled-components";
import { Link } from "../components/core";
import { media, theme, MixStyle } from "../components/Style";
import Carousel from "react-multi-carousel";
const { colors, fontSizes, fonts } = theme;
const clientReviews = [
  {
    clientAvatar: "/assets/Images/usama-project1.jpg",
    clientName: "Passport Paws",
    Technologis: ["HTML5", "CSS3", "Nextjs", "Styled Components", "Ant Design"],
    id: "passportPaws",
  },
  {
    clientAvatar: "/assets/Images/usama-project2.jpg",
    clientName: "Nithias Accadmy",
    Technologis: ["HTML5", "CSS3", "Nextjs", "styled Components", "Ant Design"],
    id: "nithiasAccadmy",
  },
  {
    clientAvatar: "/assets/Images/usama-project3.jpg",
    clientName: "Lazard Plumbing",
    Technologis: ["HTML5", "CSS3", "Bootstrap", "Squarespace"],
    id: "lazardPlumbing",
  },
  {
    Technologis: ["HTML5", "CSS3", "Bootstrap"],
    clientAvatar: "/assets/Images/usama-project4.jpg",
    clientName: "ANIT Services",
    id: "anitService",
  },
  {
    clientAvatar: "/assets/Images/usama-project5.jpg",
    clientName: "Ebay Label Generator Tool",
    Technologis: ["HTML5", "CSS3", "Reactjs"],
    id: "ebayTool",
  },
  {
    clientAvatar: "/assets/Images/usama-project6.jpg",
    clientName: "Carstreet",
    Technologis: ["HTML5", "CSS3", "Nextjs", "styled component", "Ant Design"],
    id: "carstreet",
  },
];
const Section = styled.section`
  ${media.phablet`padding:20px;`}
  .react-multiple-carousel__arrow {
    background: ${colors.navy};
    &:before {
      color: ${colors.green};
    }
  }
  .react-multi-carousel-item {
    height: 400px;
    ${media.phone`height: 350px; `}
    ${media.tiny`height: 300px; `}
  }
  .viwe-more {
    ${MixStyle.xsmallButton};
    margin-bottom: 20px;
    &:hover {
      color: ${colors.green};
    }
  }
  padding: 50px;
  position: relative;
`;
const Heading = styled.h3`
  position: relative;
  font-family: ${fonts.SFMono};
  ${MixStyle.flexCenter}
  margin: 10px 0 40px;
  width: 100%;
  white-space: nowrap;
  letter-spacing: 0.5rem;
  font-size: ${fontSizes.h3};
  ${media.tablet`font-size: 24px;`};
  &:before {
    content: "";
    display: block;
    height: 10px;
    width: 100px;
    border-radius: 12px;
    background-color: ${colors.green};
    position: relative;
    top: 0px;
    margin-right: 20px;
    ${media.desktop`width: 100px;`};
    ${media.tablet`width: 80px;`};
    ${media.thone`margin-left: 10px;`};
    ${media.phone`width: 80px;`};
  }
  &:after {
    content: "";
    display: block;
    height: 10px;
    width: 100px;
    border-radius: 12px;
    background-color: ${colors.green};
    position: relative;
    top: 0px;
    margin-left: 20px;
    ${media.desktop`width: 100px;`};
    ${media.tablet`width: 80px;`};
    ${media.thone`margin-left: 10px;`};
    ${media.phone`width: 80px;`};
  }
`;
const ProjectContainer = styled.div`
  height: 100%;
  margin: 0px 10px;
  position: relative;
  background: none;
  cursor: pointer;
  &&:hover .hover-effect {
    transition: all 0.8s;
    transform: scale(1);
    position: absolute;
    top: 0px;
    background-color: rgba(45, 54, 83, 0.8);
    height: 100%;
    width: 100%;
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  border-radius: 15px;
`;
const HoverContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  transition: all 1s;
  transform: scale(0);
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-color: rgba(45, 54, 83, 0.8);
  box-sizing: border-box;
  border-radius: 12px;
`;
const H3 = styled.h3`
  font-size: ${fontSizes.xl};
  color: ${colors.white};
  text-align: center;
  font-family: ${fonts.SFMono};
  line-height: 20px;
`;
const TechnologContainer = styled.div`
  padding: 0px 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  display: flex;
  div {
    margin: 3px;
    ${MixStyle.xsmallButton};
  }
`;
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Projects = () => {
  return (
    <Section id="work">
      <Heading style={{ marginTop: "50px" }}>PROJECTS</Heading>
      <div>
        <Carousel
          className="custome--carousal"
          arrows={true}
          swipeable={false}
          draggable={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          transitionDuration={500}
          renderButtonGroupOutside={true}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          responsive={responsive}
        >
          {clientReviews.map((key, index) => (
            <CarousalContainer key={index}>
              {console.log(key.clientAvatar)}
              <Image src={key.clientAvatar} alt={key.clientName} />
            </CarousalContainer>
          ))}
          {/* <CarousalContainer style={{ background: "red" }}>
            Item 1
          </CarousalContainer>
          <CarousalContainer style={{ background: "blue" }}>
            Item 2
          </CarousalContainer>
          <CarousalContainer style={{ background: "yellow" }}>
            Item 3
          </CarousalContainer>
          <CarousalContainer style={{ background: "pink" }}>
            Item 4
          </CarousalContainer> */}
        </Carousel>
      </div>
    </Section>
  );
};

const Container = styled.div`
  height: 100%;
  margin: 0px 10px;
`;
const CarousalContainer = () => {
  return <Container>USama</Container>;
};
export default Projects;
