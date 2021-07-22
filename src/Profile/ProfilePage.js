import React from "react";
import profile from "../css/source/profile.png";
import { Button } from "antd";
import styled from "styled-components";
import { LeftOutlined } from "@ant-design/icons";

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
  ProfileImage.defaultProps = {
    src: profile,
  };
  return (
    <div>
      <Button shape="circle" size="large" icon={<LeftOutlined />}></Button>

      <ProfileBox>
        <ProfileImage />
      </ProfileBox>
      <h1>Software Engineer</h1>
      <div>Gunwoo Kim</div>
      <Button shape="round">강아지</Button>
      <Button shape="round">강아지</Button>
      <Button shape="round">강아지</Button>
      <Button shape="round">강아지</Button>
      <Button shape="round">강아지</Button>

      <hr />
      <div>최근 활동</div>
    </div>
  );
}

export default ProfilePage;
