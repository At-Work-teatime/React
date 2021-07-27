import React from 'react';
import { SearchInput } from '../style/input';
import Header from './Header';
import Layout from './Layout';
import { Route } from 'react-router-dom';
import ProfilePage from '../Profile/ProfilePage';

function Main({ history }) {
  return (
    <Layout>
      <Header history={history} />
      <Route path="/main" exact>
        <SearchInput defaultValue="동료의 이름을 검색해 보세요" />
        <hr />
        여기에 어떤 컴포넌트를 넣어야 할까?
      </Route>
      <Route path="/main/profile" component={ProfilePage} />
    </Layout>
  );
}

export default Main;
