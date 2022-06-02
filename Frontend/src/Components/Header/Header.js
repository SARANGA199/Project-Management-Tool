import React,{ useState, useContext} from 'react'
import { GlobalState } from '../../GlobalState';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import logo from './images/SLIIT.png'
import home from './images/home-icon.svg'
import search from './images/search-icon.svg'
import watchlist from './images/watchlist-icon.svg'
import originals from './images/original-icon.svg'
import profile from './images/movie-icon.svg'
import series from './images/series-icon.svg'

function Header() {

    let navigate = useNavigate();
    const state = useContext(GlobalState)
    const [isLogged,setIsLogged ] = state.UserAPI.isLogged
    const [isAdmin,setIsAdmin ] = state.UserAPI.isAdmin
    const [crrUser, setCrrUser] = state.UserAPI.crrUser

    const logoutUser = async () =>{
      localStorage.clear()
      setIsAdmin(false)
      setIsLogged(false)
      navigate("/");
      window.location.reload(false)
    }

  return (
    <Nav>
    <Logo>
       <img src={logo} alt='sliit'/>
    </Logo>

    <NavMenu>
        <a href='/'>
           <img src={home} alt='home'/>
           <span>HOME</span>
        </a>
        <a href='/'>
           <img src={search} alt='search'/>
           <span>SEARCH</span>
        </a>
        <a href='/'>
           <img src={watchlist} alt='watchlist'/>
           <span>WATCHLIST</span>
        </a>
        <a href='/'>
           <img src={originals} alt='original'/>
           <span>ORIGINALS</span>
        </a>
        <a href='/profile'>
           <img src={profile} alt='move'/>
           <span>Profile</span>
        </a>
        
        <a href='/'>
           <img src={series} alt='series'/>
           <span>SERIES</span>
        </a>

        <div>
          {isLogged?
          <Logout onClick={logoutUser}>Logout</Logout>:
          <Logout><a href='/login'>Login</a></Logout>}
        </div>

    </NavMenu>
    {isLogged?
    <Avatar>
      <div>
        <img src={crrUser.image} alt=""/>
      </div>
    </Avatar>:null}
</Nav>
  )
}

const Nav = styled.nav`
 position : sticky ;
 top:0;
 left :0;
 right:0;
 height :70px;
 background-color:#ffad33;
 display:flex;
 justify-content:space-between;
 align-items:center;
 padding:0 36px;
 letter-spacing:16px;
 z-index:3;
`

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  overflow: hidden;
  position: relative;
  right: -230px;
  margin: 15px auto;
  border: 2px solid #ddd;
  border-radius: 50%;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
  }
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

/* To show underline bar when mouse is pointed*/
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 16px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  /* @media (max-width: 768px) {
    display: none;
  } */
`;

const Logout = styled.a`
  background-color: #f9f9f9;
  padding: 8px 16px;
  position: absolute;
  top: 20px;
  right: -620px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  cursor:pointer;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
 height:100%;
`;


const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

export default Header