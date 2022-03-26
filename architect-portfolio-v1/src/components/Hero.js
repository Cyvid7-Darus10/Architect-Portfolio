import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { Button } from "./Button";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

var stop = 0;

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(1);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      if (!stop) {
        setCurrent((current) => (current === length - 1 ? 0 : current + 1));
        setFade(0);
        timeout.current = setTimeout(toggleFade, 50);
      }
    };

    const toggleFade = () => {
      setFade(1);
    };

    if (!stop) {
      timeout.current = setTimeout(nextSlide, 2000);
    }

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    stop = 1;
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    stop = 1;
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <div>
      <HeroSection>
        <HeroWrapper>
          {slides.map((slide, index) => {
            return (
              <HeroSlide key={index}>
                {index === current && (
                  <HeroSlider>
                    <HeroImage
                      src={slide.image}
                      alt={slide.alt}
                      className={fade ? "active" : ""}
                    />
                    <HeroContent>
                      <h1>{slide.title}</h1>
                      <p>{slide.location}</p>
                      <Button to={slide.path} primary="true">
                        {slide.label}
                        <Arrow />
                      </Button>
                    </HeroContent>
                  </HeroSlider>
                )}
              </HeroSlide>
            );
          })}
          <SliderButtons>
            <PrevArrow onClick={prevSlide} />
            <NextArrow onClick={nextSlide} />
          </SliderButtons>
        </HeroWrapper>
      </HeroSection>
    </div>
  );
};

export default Hero;

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

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  opacity: 0.4;
  transition: 0.7s;

  &.active {
    opacity: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.7);
    text-alight: left;
    margin-bottom: 0.8rem;
  }

  p {
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.7);
    margin-bottom: 1.3rem;
  }
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #193c52;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: graynp;
    transform: scale(1.05);
  }
`;

const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;
