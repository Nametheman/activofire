import React, { useState } from "react";
import { BsPlus, BsX } from "react-icons/bs";
import styled from "styled-components";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Container className="question">
      <div className="info">
        <h4>{title}</h4>
        {showInfo && <p>{info}</p>}
      </div>
      <button className="btn" onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? <BsX /> : <BsPlus />}
      </button>
    </Container>
  );
};

export default Question;
const Container = styled.article`
  display: flex;
  margin-bottom: 40px;
  width: 500px;
  justify-content: space-between;
  gap: 20px;

  .info {
    h4 {
      margin-bottom: 10px;
    }
    p {
      text-align: left;
      transition: 0.3s ease-in;
      color: grey;
    }
  }

  .btn {
    background: transparent;
    border: transparent;
    font-size: 25px;
    color: #ff3e4e;
    cursor: pointer;
    align-self: center;

    svg {
      transition: 0.3s ease-in;
    }
  }

  @media screen and (max-width: 1030px) {
    gap: 0;
    justify-content: space-between;
    width: 500px;

    .info {
      margin-left: 80px;
      h4 {
        font-size: 14px;
        margin-bottom: 0;
      }
      p {
        font-size: 13px;
      }
    }
  }
  @media screen and (max-width: 850px) {
    gap: 0;
    justify-content: space-between;
    width: 600px;

    .info {
      margin-left: 80px;
      h4 {
        font-size: 14px;
        margin-bottom: 0;
      }
      p {
        font-size: 13px;
      }
    }
  }
  @media screen and (max-width: 600px) {
    gap: 0;
    justify-content: space-between;
    width: 350px;

    .info {
      h4 {
        font-size: 10px;
        margin-bottom: 0;
      }
      p {
        font-size: 12px;
      }
    }
  }
  @media screen and (max-width: 400px) {
    gap: 0;
    justify-content: space-between;
    width: 300px;

    .info {
      h4 {
        font-size: 10px;
        margin-bottom: 0;
      }
      p {
        font-size: 12px;
      }
    }
  }
`;
