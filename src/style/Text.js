import styled from "styled-components";

export const Title = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 700;
  font-size: 24px;
  margin: 30px 0px 14px 0px;
  width: 235px;
  color: #303030;

  margin:${props => props.margin || '0px 0px 0px 0px'};
  text-align:${props => props.textalign || 'left'};
`;

export const SubTitle = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: 16px;
  width: 193px;

  color:${props => props.color || '#707070'};
  margin:${props => props.margin || '0px 0px 0px 0px'};
  text-align:${props => props.textalign || 'left'};
  width:${props => props.width || '163px'};
`;