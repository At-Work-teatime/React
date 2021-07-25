import styled from "styled-components";

export const FloatingBtn = styled.button`
position:fixed;
bottom: 50px;
right: 24px;
background-color: #3182F6;
border: none;
padding: 11px;
border-radius: 40px;
align-items: center;
z-index: 99%;
`;

export const FullButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: none; 
  border-radius: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 350;
  padding: 17px 0px;
  color:#ffffff;
  
  background-color:${props => props.color || 'blue'};
  
  & + button {margin-top: 1rem;}
`;
  