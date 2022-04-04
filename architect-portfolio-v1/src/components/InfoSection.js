import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const InfoSection = ({
  heading,
  paragraphone,
  paragraphtwo,
  buttonlabel,
  reverse,
  image,
  details,
  link
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft className={reverse ? "align-end" : ""} >
          <h1>{heading}</h1>
          <p>{paragraphone}</p>
          <p>{paragraphtwo}</p>
          <Button
            to={{
              pathname: link,
              details: details
            }}
            primary={1}
          >
            {buttonlabel}
          </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt="design" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;

const Section = styled.section`
  width: 100%;
  padding: 4rem 0rem;
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};

  h1 {
      margin-bottom: 1rem;
      font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 768px) {
    align-items: center !important;

  }

  &.align-end {
    align-items: flex-end;
  }
`;

const ColumnRight = styled.div`
    padding 1rem 2rem;
    order: ${({ reverse }) => (reverse ? "2" : "1")};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        order: 1;
    }

    img {
        width: 100%;
        heigh: 100%;
        object-fit:cover;
        @media screen and (max-width: 768px){
            width: 90%;
            heigh: 90%;
        }
    }
`;

