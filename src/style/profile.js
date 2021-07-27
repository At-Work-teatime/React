import styled from 'styled-components';

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
