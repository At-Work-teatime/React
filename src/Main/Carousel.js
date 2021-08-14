import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, Button } from 'antd';
import { SubTitle, Title, Chip2Btn, ProfileImage, ProfileCard } from '../style/style';
import profile from '../css/source/img_company_1.png';
import styled from 'styled-components';

const Center = styled.div`
  width: 1000px;
  height: 1000px;
  background: #ff5e57;
  margin: 0 auto;
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Title>새로운 입사자</Title>
        <Slider {...settings}>
          <div>
            <Card style={{ alignItems: 'center', width: '200px' }}>
              <ProfileImage width="100px" height="100px" src={profile} />
              <Title>김건우</Title>
              <SubTitle>소프트웨어 엔지니어</SubTitle>
              <Chip2Btn> 맞팔로우 하기 </Chip2Btn>
            </Card>
          </div>
          <div>
            <Card style={{ alignItems: 'center', width: '200px' }}>
              <ProfileImage width="100px" height="100px" src={profile} />
              <Title>김건우</Title>
              <SubTitle>소프트웨어 엔지니어</SubTitle>
              <Chip2Btn> 맞팔로우 하기 </Chip2Btn>
            </Card>
          </div>
          <div>
            <Card style={{ alignItems: 'center', width: '200px' }}>
              <ProfileImage width="100px" height="100px" src={profile} />
              <Title>김건우</Title>
              <SubTitle>소프트웨어 엔지니어</SubTitle>
              <Chip2Btn> 맞팔로우 하기 </Chip2Btn>
            </Card>
          </div>
          <div>
            <Card style={{ alignItems: 'center', width: '200px' }}>
              <ProfileImage width="100px" height="100px" src={profile} />
              <Title>김건우</Title>
              <SubTitle>소프트웨어 엔지니어</SubTitle>
              <Chip2Btn> 맞팔로우 하기 </Chip2Btn>
            </Card>
          </div>
          <div>
            <Card style={{ alignItems: 'center', width: '200px' }}>
              <ProfileImage width="100px" height="100px" src={profile} />
              <Title>김건우</Title>
              <SubTitle>소프트웨어 엔지니어</SubTitle>
              <Chip2Btn> 맞팔로우 하기 </Chip2Btn>
            </Card>
          </div>
          <div>
            <Card style={{ alignItems: 'center', width: '200px' }}>
              <ProfileImage width="100px" height="100px" src={profile} />
              <Title>김건우</Title>
              <SubTitle>소프트웨어 엔지니어</SubTitle>
              <Chip2Btn> 맞팔로우 하기 </Chip2Btn>
            </Card>
          </div>
        </Slider>
      </div>
    );
  }
}
