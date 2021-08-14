import styled from 'styled-components';
import iconA from '../css/icon/arrow-right.svg'

export const Onboarding = styled.div`
  position : fixed;
  top: 40px;
`

export const Screen = styled.div`
  height: 100vh;
  background-color: #ffffff;
  margin: 0px auto;
  width: ${(props) => `${(props.width * 3) / 4 }px` || '300px'};
`;

export const FloatingBtn = styled.button`
  position: fixed;
  bottom: 50px;
  right: 10%;
  background-color: #3182f6;
  border: none;
  border-radius: 100%;
  width:65px;
  height:65px;
  object-fit: cover;
  &:before {
    top: 2px;
    left: 2px;
    position: relative;
    content: url(${iconA});   
  }
`;

export const TextBtn = styled.button`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 500;
  position: fixed;
  bottom: 71px;
  left: 10%;
  background-color: transparent;
  border: none;
`;

export const FullButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: none;
  border-radius: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 350;
  padding: 17px 0px;
  color: #ffffff;

  background-color: ${(props) => props.color || 'blue'};

  & + button {
    margin-top: 1rem;
  }
`;

export const SearchInput = styled.input`
  border: none;
  border-right: 0px;
  border-top: 0px;
  boder-left: 0px;
  boder-bottom: 0px;
`;

export const ProfileImage = styled.img`
  width: ${(props) => props.width || '150px'};
  height: ${(props) => props.height || '150px'};
  object-fit: cover;
  border-radius: 100%;
`;
export const ProfileBox = styled.div`
  width: ${(props) => props.width || '150px'};
  height: ${(props) => props.height || '150px'};
  object-fit: cover;
  border-radius: 100%;
  overflow: hidden;
  text-align: center;
`;

export const Title = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-weight: 700;
  font-size: 24px;
  margin: 30px 0px 14px 0px;
  width: 235px;
  color: #303030;
`;

export const SubTitle = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: 16px;
  width: 193px;
  color: #707070;
`;

export const ImportantText = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
'Helvetica Neue', sans-serif;
font-weight: 500;
font-size: 20px;
width: 235px;
color: #303030;
`