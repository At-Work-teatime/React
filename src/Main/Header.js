import React from 'react';
import { ProfileImage } from '../style/profile';
import profile from '../css/source/profile.png';
import styled from 'styled-components';

const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 5px;
  bottom: 5px;
  width: 100%;
  height: 60px;
`;

const HeaderContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 1rem;
  padding-left: 1rem;
`;
const Spacer = styled.div`
  flex-grow: 0.8;
`;
const Logo = styled.div`
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-family: 'Rajdhani';
`;

function Header({ history }) {
  return (
    <div>
      <Positioner>
        <HeaderContents>
          <Logo onClick={() => history.push('/main')}>AtWork</Logo>
          <Spacer />
          <ProfileImage width="40px" height="40px" src={profile} onClick={() => history.push('/main/profile')} />
        </HeaderContents>
      </Positioner>
    </div>
  );
}

export default Header;
