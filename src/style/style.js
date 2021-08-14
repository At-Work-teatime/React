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

// export const Title = styled.div`
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//   font-weight: 700;
//   font-size: 24px;
//   margin: 30px 0px 14px 0px;
//   width: 235px;
//   color: #303030;

//   margin:${props => props.margin || '0px 0px 0px 0px'};
//   text-align:${props => props.textalign || 'left'};
// `;

// export const SubTitle = styled.div`
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//   font-weight: 400;
//   font-size: 16px;
//   width: 193px;

//   color:${props => props.color || '#707070'};
//   margin:${props => props.margin || '0px 0px 0px 0px'};
//   text-align:${props => props.textalign || 'left'};
//   width:${props => props.width || '163px'};
// `;


// export const SearchInput = styled.input`
//   border: none;
//   border-right: 0px;
//   border-top: 0px;
//   boder-left: 0px;
//   boder-bottom: 0px;
// `;

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

// export const FloatingBtn = styled.button`
//   position: fixed;
//   bottom: 50px;
//   right: 24px;
//   background-color: #3182f6;
//   border: none;
//   padding: 11px;
//   border-radius: 40px;
//   align-items: center;
//   z-index: 99%;

//   color:${props => props.color || '#3182f6'};

// `;

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

// export const TextBtn= styled.span`
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
//   Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//   font-size: 16px;
//   font-weight: 500;
//   position: fixed;
//   bottom: 71px;
//   left: 24px;
//   color: #707070;
// `;
  
  
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