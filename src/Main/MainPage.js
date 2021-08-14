import React from 'react';
import { SearchInput, Title,SubTitle ,ImportantText} from '../style/style';
import Header from './Header';
import Layout from './Layout';
import { Route } from 'react-router-dom';
import ProfilePage from '../Profile/ProfilePage';
import Search from './Search';
import Frip from '../css/source/Frip.png'
import { Card } from 'antd';
import Component1 from './Component1'

function MainPage({ history }) {
  return (
    <Layout>
      <Header history={history} />
      <Route path="/main" exact>
      <Search />
      <Card title="업무 날씨">
        <img src ={Frip} width = "40px" />
        <ImportantText>프립, 오늘의 업무 날씨는<br/> 맑음!</ImportantText>
        </Card>
        <Component1 />
      </Route>
      <Route path="/main/profile" component={ProfilePage} />
    </Layout>
  );
}

export default MainPage;
