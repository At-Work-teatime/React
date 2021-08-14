import React,{useRef,useState,useEffect} from 'react';
import { SearchInput, Title,SubTitle ,ImportantText} from '../style/style';
import Header from './Header';
import Layout from './Layout';
import { Route } from 'react-router-dom';
import ProfilePage from '../Profile/ProfilePage';
import Search from './Search';
import Frip from '../css/source/Frip.png'
import { Card } from 'antd';
import styled from 'styled-components';

function Component1({ history }) {
    const sliderRef = useRef();
const [mobileTypes, setMobileTypes] = useState(["좌측 카드","중앙 카드","우측 카드"]);
const BusCard = styled.div`
  display: inline-block;
  width: 75%;
  transform: scale(${props => props.index === 1 ? 1.0 : 0.9 });
  transition: transform .3s;

`

const MobileSwiper = styled.div`
  position: relative;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`
useEffect(() => {(
  sliderRef.current.scrollLeft = window.innerWidth*0.46
)}, [])
// 슬라이더의 변위
let walk;

// 화면 기준 슬라이더의 터치된 지점
let startX;

// 슬라이더 터치된 슬라이더의 터치된 지점
let scrollValue;


// e.touches[0] 을 통해 터치된 지점을 확인할 수 있다.
// 터치가 되는 순간, startX와 scrollValue값을 초기화한다.
function slideTouchStart (e){
  startX = e.touches[0].pageX - sliderRef.current.offsetLeft;
  scrollValue = sliderRef.current.scrollLeft;
}

// 터치가 진행되는 동안, walk값이 변한다.
function slideTouchMove (e){
  e.preventDefault()
  
  // 0.9를 곱한 이유는, 카드의 너비가 화면보다 작았기 때문에, 드래그로 화면을 초과하는 것을 막았다.
  walk = (e.touches[0].pageX - sliderRef.current.offsetLeft - startX) * 0.9;
  
  // 이를 scrollLeft에 적용시킴으로써 실질적으로 드래그되는 변화량을 줄였다.
  sliderRef.current.scrollLeft = scrollValue - walk;
}


// End하거나 Cancel되면, walk값의 변화량에 따라 왼쪽으로 변화시킬 지, 오른쪽으로 변화시킬 지 정한다.
function slideTouchEnd (){
  if(walk) {
    sliderRef.current.scrollLeft = (window.innerWidth*0.75 - (window.innerWidth - window.innerWidth*0.75) / 2);
    if (walk < 0) {
    
      // 변위가 너무 작으면, 이동하지 않는다.
      if (walk < -120) {
        setMobileTypes((state) => state.slice(1, 3).concat(state[0]))
      }
    } 
    else if (walk > 0) {
      if (walk > 120) {
        setMobileTypes((state) => [state[2]].concat(state.slice(0, 2)))
      }
    }
  }
  walk = 0;
}

function slideTouchCancel (){
  if(walk) {
    sliderRef.current.scrollLeft = (window.innerWidth*0.75 - (window.innerWidth - window.innerWidth*0.75) / 2);
    if (walk < 0) {
      if (walk < -120) {
        setMobileTypes((state) => state.slice(1, 3).concat(state[0]))
      }
    } else if (walk > 0) {
      if (walk > 120) {
        setMobileTypes((state) => [state[2]].concat(state.slice(0, 2)))
      }
    }
  }
  walk = 0;
}

useEffect(() => {
  sliderRef.current.addEventListener('touchstart', slideTouchStart);
  sliderRef.current.addEventListener('touchend', slideTouchEnd);
  sliderRef.current.addEventListener('touchmove', slideTouchMove);
  sliderRef.current.addEventListener('touchcancel', slideTouchCancel);
}, [])

  return (<Card title="신규 입사자">
<MobileSwiper ref={sliderRef}>  
  {mobileTypes.map((type, index) => (
      <BusCard busType={type} key={type} index={index}>
        <Card>
          cards..
        </Card>
      </BusCard>
    ))}
</MobileSwiper>
</Card>
  );
}

export default Component1;
