import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ImgSlider from '../ImgSlider'
import Movies from '../Movies'
import Viewers from '../Viewers'
import db from '../../firebase'
import { collection, getDocs } from "firebase/firestore";

export default function Home() {

  useEffect(()=>{
    const querySnapshot = async()=>{ 
      const snapshot = await getDocs(collection(db, "movies"));
      snapshot.docs.map((doc) => {
        return {id: doc.id, ...doc.data()};
})
      console.log(snapshot);
};
  querySnapshot();
  },[]);
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  )
}

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index:-1;
  } 
`