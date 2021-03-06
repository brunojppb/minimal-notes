import React from 'react';
import styled from "styled-components";

const LoaderContainer = styled('div')`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
  display: grid;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  align-content: center;


  .loader, .loader:after {
    border-radius: 50%;
    width: 8em;
    height: 8em;
  }
  .loader {
    position: relative;
    margin: 60px auto;
    font-size: 10px;
    border-top: 1em solid rgba(56,151,240, 0.2);
    border-right: 1em solid rgba(56,151,240, 0.2);
    border-bottom: 1em solid rgba(56,151,240, 0.2);
    border-left: 1em solid #2d3748;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: loading 1.1s infinite linear;
    animation: loading 1.1s infinite linear;
  }
  @-webkit-keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export default function Loader() {
  return(
    <LoaderContainer>
      <div className="loader"/>
    </LoaderContainer>
  )
}