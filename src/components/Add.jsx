import React, { useState } from "react";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import Buttons from "../ele/Button";
import styled from "styled-components";
import '../css/Add.css'

const Add = () => {
  const naviation = useNavigate();
  const [modal, Setmodal] = useState(false);
  return (
    <div>
      <H1 data-shadow='TODOLIST!'>TODOLIST!</H1>
      <section className="mainSection">
      <Buttons 
      onClick={() => {
      Setmodal(true);
    }}
  >
    +
  </Buttons>

      <Buttons 
      size ="large"
        onClick={() => {
          naviation("/list");
        }}
      >
       <span style={{fontSize:"25px" }}> 목록</span>
      </Buttons>
        

      <div className="modal">{modal === true ? <Modal Setmodal={Setmodal}></Modal> : null}</div>
      </section>
    </div>
  );
};
export default Add;

const H1 = styled.h1`
  margin-left: 50px;
`;