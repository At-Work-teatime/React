import React from 'react';
import profile from '../css/source/profile.png';
import { Button } from 'antd';
import styled from 'styled-components';
import { LeftOutlined } from '@ant-design/icons';

function ProfilePage({ history }) {
  const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;
  const ProfileBox = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 100%;
    overflow: hidden;
  `;
  const Name = styled.h1`
    font-size: 1.5em;
    color: black;
  `;
  const Job = styled.h1`
    font-size: 1em;
    color: black;
  `;

  ProfileImage.defaultProps = {
    src: profile,
  };
  return (
    <div>
      <ProfileBox>
        <ProfileImage />
      </ProfileBox>
      <Name>Gunwoo Kim</Name>
      <Job>Software Engineer</Job>
      <div>관심사</div>
      <div>보유 포인트 : 100000</div>
      달성한 챌린지
      <div>
        <Button shape="round">운동왕</Button>
      </div>
      <div>
        <Button shape="round">청소왕</Button>
      </div>
      <hr />
    </div>
  );
}

export default ProfilePage;
