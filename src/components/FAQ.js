import React from "react";
import styled from "styled-components";
import faq_banner from "../Images/faq.svg";
import Accordion from "./accordion/Accordion";

const FAQ = () => {
  return (
    <Wrapper>
      <p>FREQUENTLY ASKED QUESTIONS</p>
      <PageContainer>
        <img src={faq_banner} alt="" />
        <div>
          <Accordion />
        </div>
      </PageContainer>
    </Wrapper>
  );
};

export default FAQ;

const Wrapper = styled.div`
  padding: 20px 60px;
  margin-top: 50px;

  p {
    margin-bottom: 50px;
    text-align: center;
    font-weight: 500;
    font-family: "Lato", sans-serif;
    font-size: 14px;
  }
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 50%;
    margin-right: 20px;
  }

  @media screen and (max-width: 1030px) {
    display: flex;

    img {
      width: 40%;
      margin: bottom: 20px;
    }
  }
  @media screen and (max-width: 850px) {
    display: block;

    img {
      width: 100%;
      margin: bottom: 20px;
    }
  }
  @media screen and (max-width: 600px) {
    display: block;

    img {
      width: 100%;
      margin: bottom: 20px;
    }
  }
  @media screen and (max-width: 400px) {
    display: block;

    img {
      width: 90%;
      margin: bottom: 20px;
    }
  }
`;
