import React from 'react';
import { ImportantText } from '../style/style';
import Header from './Header';
import Layout from './Layout';
import { Route } from 'react-router-dom';
import ProfilePage from '../Profile/ProfilePage';
import Search from './Search';
import Frip from '../css/source/Frip.png';
import { Card } from 'antd';
// import Component1 from './Component1';
import Carousel from './Carousel';

function MainPage({ history }) {
  return (
    <Layout>
      <Header history={history} />
      <Route path="/main" exact>
        <Search />
        <Card>
          <img src={Frip} width="40px" alt="" />
          <ImportantText>
            프립, 오늘의
            <br /> 업무 날씨는 맑음!
          </ImportantText>
        </Card>
        <Carousel />
      </Route>
      <Route path="/main/profile" component={ProfilePage} />
    </Layout>
  );
}

export default MainPage;
