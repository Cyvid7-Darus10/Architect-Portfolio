import React, { useState } from "react";
import styled from "styled-components/macro";
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";
import DesignFour from "../images/image-4.jpg";

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
    justify-content: center;
    align-items: center;
    

    @media screen and (max-width: 768px){
        order: 1;
        padding 0rem 2rem;
    }

    img {
        width: 100%;
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
    

    p {
        margin-bottom: 10rem;
    }
`;

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
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.
                    </p>
                </InfoContainer>
            </ContactContainer>
        </ContactWrapper>
        </>
    );
}

export default Contact;