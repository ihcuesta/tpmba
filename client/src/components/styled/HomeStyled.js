import styled from "styled-components";
import { s } from "../styled/GlobalStyles";

// Form

export const ThePowerMovies = styled.img`
  display: block;
  margin: auto;
`;

export const FormContainer = styled.form`
  max-width: 400px;
  margin: auto;
  padding-top: 70px;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid ${s.green};
  width: 100%;
  height: 40px;
  background-color: ${s.gray};
  margin-top: 20px;
  -webkit-box-shadow: inset 1px 1px 5px 1px #000000;
  box-shadow: inset 1px 1px 5px 1px #000000;
  color: #fff;
  font-size: 1rem;
  padding: 0px 15px;
  box-sizing: border-box;
`;

export const AddCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Add = styled.input`
  border-radius: 5px;
  border: 1px solid ${s.green};
  width: 170px;
  height: 40px;
  background-color: ${s.green};
  margin-top: 20px;
  color: ${s.gray};
  font-size: 1rem;
  text-align: center;
  padding: 0px 15px;
  cursor: pointer;

  &:hover {
    background-color: ${s.darkGreen};
  }
`;

export const Error = styled.div`
  margin: 10px 0px;
  background-color: #d65538;
  border-radius: 5px;
  padding: 1px 15px;
  box-sizing: border-box;
  width: 100%;

  & p {
    color: #fff;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;

export const Tag = styled.div`
  padding: 5px;
  margin-top: 5px;
  margin-right: 5px;
  border-radius: 10px;
  background-color: ${s.gray};
  color: ${s.green};
  border: 1px solid ${s.green};
`;
