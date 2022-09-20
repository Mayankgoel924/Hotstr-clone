import React, { useEffect, useState } from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';
import styled from 'styled-components'
import { auth, provider } from '../../firebase'
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from '../../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

function Header() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged(async(user)=>{
            if(user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                navigate("/");
            }
        })
    },[])

    const signIn = () => {
        signInWithPopup(auth, provider)
        .then((result)=>{
            // console.log(result);
            let user = result.user;
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
            navigate("/");
        })
        .catch((error)=>{
            alert(error.message);
        });
    };

    const signout = () => {
        signOut(auth)
        .then(()=> {
            dispatch(setSignOut());
            navigate("/login");
        })
         .catch((error)=>{
            alert(error.message);
         });
    };
    const [isActive, setIsActive] = useState(true);
    const changeDisplay = () =>{
        setIsActive(!isActive);
    }
  return (
    <>
    <Nav>
        <a href="/">
            <Logo src="/images/logo.svg" />
        </a>
        {
            !userName ? (
            <LoginContainer>
                <Login onClick={signIn}>Login</Login>
            </LoginContainer> 
            ):
           ( <>
                <NavMenu>
                <a>
                    <img src="/images/home-icon.svg"/>
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg"/>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg"/>
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg"/>
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg"/>
                    <span>MOVIE</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg"/>
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg onClick={signout} src="https://static.zerochan.net/Link.full.841942.jpg" />
            </> )
        }
    </Nav>

    <Nav2>
        <a href="/">
            <Logo src="/images/logo.svg" />
        </a>
        <DehazeIcon style={{marginLeft:'auto'}} onClick={changeDisplay} />
    </Nav2>
    <PhoneNav style={{display: isActive?'none':'block'}}>
        <a>
            <img src="/images/home-icon.svg"/> &nbsp;
            <span>HOME</span>
        </a>
        <a>
                <img src="/images/search-icon.svg"/> &nbsp;
                <span>SEARCH</span>
            </a>
            <a>
                <img src="/images/watchlist-icon.svg"/> &nbsp;
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src="/images/original-icon.svg"/> &nbsp;
                <span>ORIGINALS</span>
            </a>
            <a>
                <img src="/images/movie-icon.svg"/> &nbsp;
                <span>MOVIE</span>
            </a>
            <a>
                <img src="/images/series-icon.svg"/> &nbsp;
                <span>SERIES</span>
            </a>
            <a>
                { !userName ? (
                    <Login onClick={signIn}>Login</Login> ):
                    <Logout onClick={signout}>Logout</Logout>
                }
            </a>
    </PhoneNav>
    </>
  )
}
export default Header

const PhoneNav = styled.div`
    background-color: #090b13;
    width: 100%;
    height: auto;
    a{
        padding : 10px 0;
        display: flex;
        align-items: center;
        cursor: pointer;
        justify-content: center;
        img{
            height: 20px;
        }
        border-bottom: 1px solid grey;
    }
`
const Nav2 = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    @media(min-width:736px){
        display: none;
    }
`

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x:hidden;
    @media(max-width: 825px){
        padding: 0 15px;
    }
    @media(max-width:735px){
        display: none;
    }
`

const Logo = styled.img`
    width: 80px;
`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img{
            height: 20px;
        }

        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
    @media(max-width: 825px) {
        margin-left: 10px;
        a{
            padding: 0 7px;
        }
    }
`
const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer

    @media(max-width: 825px) {
        width: 38px;
        height: 38px;
    }
`

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0,0,0,0.6);
    transform: all 250ms ease 0s;
    cursor: pointer;

    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`

const Logout = styled(Login)`

`

const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`