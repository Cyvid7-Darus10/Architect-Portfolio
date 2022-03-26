import React, { useState } from "react";
import styled from "styled-components/macro";
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";
import DesignFour from "../images/me.jpg";
import { SocialIcon } from 'react-social-icons';

function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <ContactWrapper>
        <ContactContainer>
          <ContactImage>
            <img src={DesignFour} alt="design" />
          </ContactImage>
          <InfoContainer>
            <p>
                I'm a 3rd year BS Architecture student studying at La Consolacion College Bacolod.
            </p>
            <SocialContainer>
              <SocialIcon url="http://www.linkedin.com/in/shea-lou" />
              <SocialIcon url="https://www.instagram.com/udream.idesign/" />
            </SocialContainer>
          </InfoContainer>
        </ContactContainer>
      </ContactWrapper>
    </>
  );
}

export default Contact;


const ContactWrapper = styled.div`
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

const ContactContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 600px;
    }
`;

const ContactImage = styled.div`
    padding 1rem 2rem;
    order: 2;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: 768px){
        justify-content: center;
        align-items: flex-start;
        order: 1;
        padding 0;
    }

    img {
        width: 75%;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: 1;
    color: white;
    text-align: right;
    align-items: flex-end;

    p {
        margin-bottom: 10rem;
        width: 75%;
    }

    @media screen and (max-width: 768px){
        align-items: center;
        p {
            text-align: center;
            position: absolute;
        }
    }

`;

const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;

    a {
        margin-left: 1rem;
    }
`;