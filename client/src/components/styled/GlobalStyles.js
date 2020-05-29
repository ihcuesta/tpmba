import styled from "styled-components";

export const s = {
  green: "#00EF9F",
  darkGreen: "#00D08B",
  gray: "#253648"
};

export const Bg = styled.div`
  background-image: url("bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  width: 100vw;
  min-height: 100vh;
`;

export const Loader = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;

  & img {
    width: 64px;
    height: 64px;
    position: absolute;
    top: 50%;
    margin-top: -32px;
    left: 50%;
    margin-left: -32px;
  }
`;
