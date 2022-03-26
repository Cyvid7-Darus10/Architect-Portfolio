import React, { useState } from "react";
import styled from "styled-components/macro";
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";
import DesignFour from "../images/image-4.jpg";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const DesignDetails = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  images
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  };

  return (
      <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <DesignWrapper>
          <DesignContainer>
                <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}
                >
                <Slider>
                <Slide index={0}>I am the first Slide.</Slide>
                <Slide index={1}>I am the second Slide.</Slide>
                <Slide index={2}>I am the third Slide.</Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
          </DesignContainer>
      </DesignWrapper>
      </>
  );
};

export default DesignDetails;

const DesignWrapper = styled.div`
    background-color: #343434;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    positon: relative;

    @media screen and (max-width: 768px) {
        overflow: none;
    }
`;

const DesignContainer = styled.div`

`;
