import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
    <>
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" />
            </Wrap>
        </Container>

        <Container2>
            <Contain1>
            <Wrap>
                <img src="/images/viewers-disney.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" />
            </Wrap>
            </Contain1>
            <Contain2>
            <Wrap>
                <img src="/images/viewers-starwars.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" />
            </Wrap>
            </Contain2>
        </Container2>
    </>
  )
}

export default Viewers

const Container2 = styled.div`
    @media(min-width: 735px){
        display: none;
    }
`
const Contain1 = styled.div`
    margin-top: 30px;
    padding: 30px 0 26px 0;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(3,minmax(0,1fr));
`
const Contain2 = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(2,minmax(0,0.33fr));
    justify-content: center;
`

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0 26px 0;
    @media(min-width: 735px){
        display: grid;
        grid-gap: 25px;
        grid-template-columns: repeat(5,minmax(0,1fr));
    }
    @media(max-width: 734px){
        display: none;
    }
`
const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);
    }
`