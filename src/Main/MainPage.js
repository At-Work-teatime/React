import React from 'react';
import {ProfileBox, ProfileImage} from '../style/profile'
import profile from '../css/source/profile.png'

function MainPage({history}) {
 return (
    <div>
        <ProfileBox width="50px" height="50px">
          <ProfileImage src={profile} onClick={() => history.push('/profile')}/>
        </ProfileBox> 
    </div>
  );
}

export default MainPage;
