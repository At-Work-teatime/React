import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Button, PoweroffOutlined } from 'antd';

import { RightOutlined } from '@ant-design/icons';
import {  FloatingBtn } from '../../style/style';
import { getTargetUrl }from './util'

function InputInterest({history,match}) {
  return (
    <div className="contents">
      5<h3>알리고 싶은 관심사를 설정해주세요!</h3>
      <div>
        <Button type="primary" size="small">
          수영
        </Button>
        <Button type="primary" size="small">
          강아지
        </Button>
        <Button type="primary" size="small">
          노래부르기
        </Button>
      </div>
      <FloatingBtn onClick={()=>history.push(getTargetUrl(match.path))} />

    </div>
  );
}

export default InputInterest;
