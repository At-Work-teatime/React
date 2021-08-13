import styled from "styled-components";

export const FloatingBtn = styled.button`
  position: fixed;
  bottom: 50px;
  right: 24px;
  background-color: #3182f6;
  border: none;
  padding: 11px;
  border-radius: 40px;
  align-items: center;
  z-index: 99%;

  color:${props => props.color || '#3182f6'};

`;

export const FullBtn = styled.button`
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

export const TextBtn= styled.span`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 500;
  position: fixed;
  bottom: 71px;
  left: 24px;
  color: #707070;
`;
  
  
export const ChipBtn = styled.button`
  display: inline;
  align-items: center;
  border: none;
  border-radius: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 350;
  padding: 14px 20px 12px 20px;
  color:#000000;
  
  background-color:${props => props.backgroundColor || '#EEEDF4'};
  margin:${props => props.margin || '0px 12px 0px 0px'};
  
  & + button {margin-top: 1rem;}
`;


export const Chip2Btn = styled.button`
  display: inline;
  align-items: center;
  border: 1px #000000;
  border-radius: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 350;
  padding: 14px 20px 12px 20px;
  color:#000000;
  background-color:'withe'
  
  margin:${props => props.margin || '0px 12px 0px 0px'};
  
  & + button {margin-top: 1rem;}
`;