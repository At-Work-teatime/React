import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { PoweroffOutlined } from 'antd';
import { RightOutlined } from '@ant-design/icons';


function InputInterest() {
      
    return (
        <div class = "contents">
          5
            <h3>
                알리고 싶은 관심사를 설정해주세요!
            </h3>
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
            <Link to="/main">
                <Button
                type="primary"
                shape="circle"
                size="large"
                icon={<RightOutlined />}
                ></Button>
            </Link>
        </div>
      );
    }

export default InputInterest;