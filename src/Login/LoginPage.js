import React from 'react';
import styled from "styled-components";

export const Title = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 700;
  font-size: 24px;
  margin: 30px 0px 14px 0px;
  width: 235px;
  color: #303030;
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

function Login({history}) {
  return (
    <div>
    <Title> 
    직장생활을 위한 네트워킹 플랫폼, at-work!
    </Title>
      <FullButton color="#3182F6" onClick={() => history.push("./SignUp")}>
      계정 만들기
      </FullButton>
      <FullButton color="#303030">
      이미 계정이 있어요!
      </FullButton>
    </div>
  );
}

export default Login;
