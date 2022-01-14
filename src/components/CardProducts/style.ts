import styled from "styled-components";

interface ButtonProps {
  isOnCart: boolean;
  backgroundTrue: boolean;
}

export const Container = styled.div`
  width: 190px;
  height: calc(45vh - 35px);
  background-color: white;
  border-radius: 6px;
  margin-right: 2em;
  .Title {
    font-size: 13px;
  }

  .Price {
    color: #9115a6;
    font-weight: bold;
  }
`;

export const Image = styled.img`
  height: 130px;
`;

export const Button = styled.button<ButtonProps>`
  width: 170px;
  height: 30px;
  color: whitesmoke;
  border: none;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  background-color: ${props => (props.backgroundTrue ? "#df6523" : "#9115a6")};
`;
