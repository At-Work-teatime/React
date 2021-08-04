import styled from 'styled-components';

export const SearchInput = styled.input`
  border: none;
  border-right: 0px;
  border-top: 0px;
  boder-left: 0px;
  boder-bottom: 0px;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  border-right: 0;
  border-top: 0;
  boder-left: 0;
  boder-bottom-width: 1;
  padding: 17px 0px 14px 0px;
  margin-top: 62px;
  font-size: 16px;
  color: #000000;
  width: 100%;

  placeholder:${props => props.placeholder || '이메일'};
  margin:${props => props.margin || '62px 0px 0px 0px'};
  
  & + button {margin-top: 1rem;}
`;
