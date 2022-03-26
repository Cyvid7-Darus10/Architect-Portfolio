import React, { useState } from "react";
import styled from "styled-components/macro";
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { detail1 } from "../data/InfoData";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';

function DesignDetails(props) {
  var details = props.location.details;

  if (!details) { details = detail1 }
  const size = details.album.length;

  const toggle = () => {
      setIsOpen(!isOpen);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [imgSrc, setImgSrc] = useState("");

  function showImage(img) {
    setShow(true);
    setImgSrc(img);
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Design</Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <img className="w-100" src={imgSrc}></img>
        </Modal.Body>
      </Modal>

      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <DesignWrapper>
        <DesignContainer>
            <CarouselProvider
              naturalSlideWidth={500}
              naturalSlideHeight={500}
              totalSlides={size}
              visibleSlides={size > 5 ? 3 : 2}
              infinite={true}
              >
              <Slider>
                {details.album.map((slide, index) => {
                    return (
                      <Slide index={index} key={index}>
                        <a onClick={() => showImage(slide)}>
                          <img src={slide}></img>
                        </a>
                      </Slide>
                    );
                })}
              </Slider>
              <ButtonWrapper>
                <ButtonBack>
                  <IoArrowBack></IoArrowBack>
                </ButtonBack>
                <ButtonNext>
                  <IoArrowForward></IoArrowForward>
                </ButtonNext>
              </ButtonWrapper>
          </CarouselProvider>
        </DesignContainer>
      </DesignWrapper>
    </>
  );
};

export default DesignDetails;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;

  button {
    width: 40px;
    height: 40px;
    margin: 1em;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    transition: all .2s;
  }
`;

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
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 75%;

  .carousel {
    width: 100%;

    .carousel__inner-slide {
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      left: 10px;
      top: 10px;
      margin-top: auto;
      background-color: burlywood;

      img {
        height: 100%;
      }

      a {
        cursor: pointer;
      }
    }      
  }

  img {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
