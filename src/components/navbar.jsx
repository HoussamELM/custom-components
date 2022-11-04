import React from 'react'
import styled from 'styled-components';
import gsap from "gsap";
import { useState } from 'react';
import { Link } from 'react-router-dom'; 


const Div  = styled.div`
 z-index: 1;
 display: flex;
 align-items: center;
 justify-content: space-between;
 background: transparent;
 padding: 1.6rem 2.4rem;
 border-bottom: 1px solid grey;
 overflow: hidden;
 z-index: 100
`
const Li = styled.li`
 padding : 0.2rem;
 transform: translateY(-200px);
 overflow: hidden;
 border-bottom: 1px solid grey;
 background-color : white; 
 z-index: 0;
 line-height: 2rem;
 
 `
 const Nav = styled.nav`
 height: 15.5vh;
 ;
 `



const Navbar = () => {

    const [isMenuClicked, setIsMenuClicked] = useState(false)
    let tl2 = gsap.timeline();
    let tl = gsap.timeline();


const updateMenu = () => {

const li = document.querySelectorAll("li");

if(!isMenuClicked){
    setIsMenuClicked(true)
    // list animation in
    li.forEach(li => {
        gsap.to("Li", {y:0, stagger: 0.04, duration: 0.4});
    })
    // burgerMenu in
    tl.to(".middle", {opacity: 0}, "<")
    tl.to(".top", {y:33}, "<")
    tl.to(".bottom", {y:-33}, "<")
    tl.to(".top", {rotate: 45,transformOrigin:"50% 50%"}, "<90%")
    tl.to(".bottom", {rotate: -45,transformOrigin:"50% 50%"}, "<");
    

   
}else{
    setIsMenuClicked(false)
    // list animation out
    li.forEach(li => {
        gsap.to("Li", {y:-200, stagger: -0.04, duration: 0.4});
    })
    // burgerMenu out
    tl2.to(".bottom", {rotate: 0,transformOrigin:"50% 50%"}, "<");
    tl2.to(".top", {rotate: 0,transformOrigin:"50% 50%"}, "<")
    tl2.to(".middle", {opacity: 1},"<40%")
    tl2.to(".bottom", {y:0}, "<50%")
    tl2.to(".top", {y:0}, "<")
}

console.log(isMenuClicked);

}


  return (
<Nav style={{position:"fixed",top:"0",right:"0",left:"0", }}>
 <Div>
  <div>
  <Link to="/" style={{marginLeft: "-10px"}}><img src='src\assets\logo.png' alt='logo' style={{scale:"1.2"}}/></Link>
  </div>
  <div>
  <div>
  <a onClick={()=> updateMenu()}>
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="25.002" height="25.002" viewBox="0 0 104 104">
  <defs>
    <image id="image" width="106" height="12" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAADCAYAAABmpKSeAAAAaElEQVQYla3PTQ6CUAwE4A9BE9/We3AeL+AhvB23YcPKLQikSV8krmkymf5Mpm2DN3p8sGD1iyUxJ38TUW+4pP6oqRyzO4YODzwPxmfHGJ8UvHDN7bfM44CY14trL9Am/+tqHR7BBdMODTYXMY29vtQAAAAASUVORK5CYII="/>
  </defs>
  <use className="bottom" x="-1" y="79" xlinkHref="#image"/>
  <use className="middle" x="-2" y="46" xlinkHref="#image"/>
  <use className="top" x="-2" y="13" xlinkHref="#image"/>
</svg>

  </a>
  </div>
  </div>
 </Div>
  <ul style={{width: '100%', textAlign: 'center',overflow: 'hidden'}}>
        <Li><Link to="/project" onClick={()=>updateMenu()}>My projects</Link></Li>
        <Li><Link to="/resume" onClick={()=>updateMenu()}>My resume</Link></Li>
        <Li><Link to="/contact" onClick={()=>updateMenu()}>Contact</Link></Li>
        <Li><Link to="/about" onClick={()=>updateMenu()}>About</Link></Li>
  </ul>

</Nav>

  )
}

export default Navbar