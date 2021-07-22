import styled from "styled-components";

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ProfileBox = styled.div`
  top: 24px;
  right: 24px;
  width: ${props => props.width || "150px"};
  height: ${props => props.height || "150px"};
  border-radius: 100%;
  overflow: hidden;
  text-align: center;
  position:fixed;
`;
