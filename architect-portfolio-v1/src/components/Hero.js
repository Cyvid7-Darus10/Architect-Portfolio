import React from "react";
import styled, { css } from "styled-components/macro";
import { Button } from "./Button";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  positon: relative;
`;

const HeroSlide = styled.div``;
const HeroSlider = styled.div``;
const HeroImage = styled.img``;
const HeroContent = styled.div``;
const Arrow = styled(IoMdArrowRoundForward)``;
const SliderButtons = styled.div``;
const PrevArrow = styled(IoArrowBack)``;
const NextArrow = styled(IoArrowForward)``;

const Hero = ({ slides }) => {
  return (
    <div>
      <HeroSection>
        <HeroWrapper>
          {slides.map((slide, index) => {
            return (
              <HeroSlide key={index}>
                <HeroSlider>
                  <HeroImage />
                  <HeroContent>
                    <h1>{slide.title}</h1>
                    <h1>{slide.location}</h1>
                    <Button
                      to={slide.path}
                      primary="true"
                      css={`
                        max-width: 150px;
                      `}
                    >
                      {slide.label}
                      <Arrow />
                    </Button>
                  </HeroContent>
                </HeroSlider>
              </HeroSlide>
            );
          })}
          <SliderButtons>
            <PrevArrow />
            <NextArrow />
          </SliderButtons>
        </HeroWrapper>
      </HeroSection>
    </div>
  );
};

export default Hero;
