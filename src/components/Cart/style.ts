import styled from "styled-components";

export const Container = styled.div`
  width: 87vw;
  max-width: 970px;
  height: 47vh;
  margin: 10px 0px 10px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 50vw;
  height: 35px;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    margin: 0;
    margin-bottom: 5px;
    width: 20vw;
  }
`;

export const CartContainer = styled.div`
  width: 85vw;
  max-width: 915px;
  box-sizing: border-box;
  height: 313px;
  border-radius: 5px;
  background-color: #f2f3f0;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const EmptyContainer = styled.div`
  width: 85vw;
  max-width: 915px;
  box-sizing: border-box;
  min-height: 313px;
  border-radius: 5px;
  background-color: #f2f3f0;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
`;
