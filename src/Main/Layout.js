import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-top: 60px;
`;

export const Layout = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
);

export const Center = styled.div`
    padd display: flex;
    flex-direction: column;
    align-items: center;ing-top: 60px;
`;

export default Layout;
