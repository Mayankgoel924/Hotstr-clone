import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebase'
import { doc, getDoc } from "firebase/firestore";

function Detail() {

    const { id } = useParams();
    const [movie, setMovie] = useState("");

    useEffect(()=>{
        const ans = async() =>{
            //grab the movie from the db
            const docRef = doc(db,"movies",id);
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                // saves the movie data
                setMovie(docSnap.data());
            }
            else{
                 // redirect to home page
                console.log("No such document!");
            }
        }
        ans();
    },[id]);
    return (
        <Container>
            <Background>
                <img src={movie.backgroundImg} />
            </Background>
            <ImageTitle>
                <img src={movie.titleImg} />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                {movie.subTitle}
            </SubTitle>
            <Description>
                {movie.description}
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow: hidden;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 30vw;
    min-width: 200px;
    margin-top: 60px;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249,249,249);
    border: none;
    padding: 0 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover{
        background: rgb(198,198,198);
    }

    @media(max-width: 660px){
        font-size: 12px;  
        height: 46px; 
        padding: 0 18px;
        margin-right: 18px;
    }
    @media(max-width: 470px){
        font-size: 12px;  
        height: 40px; 
        padding: 0 9px;
        margin-right: 10px;
    }
    @media(max-width: 380px){
        height: 40px; 
        padding: 0 5px;
        margin-right: 10px;
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);
    text-transform: uppercase;
`

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0,0,0,0.6); 
    cursor: pointer;
    span{
        font-size: 30px;
        color: white;
    }

    @media(max-width: 660px){
        width: 35px;
        height: 35px;
        span{
            font-size: 22px;
        }
    }
    @media(max-width: 380px){
        margin-right: 10px
    }
`

const GroupWatchButton = styled(AddButton)`
    background: black;
    @media(max-width: 380px){
        margin-right: 0px
    }
`
const SubTitle = styled.div`
    color: rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;

    @media(max-width: 660px){
        font-size: 13px;
    }
    @media(max-width: 470px){
        font-size: 12px;
    }
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249,249,249);
    max-width: 760px;

    @media(max-width: 660px){
        font-size: 15px;
    }
    @media(max-width: 470px){
        font-size: 13px;
    }
`