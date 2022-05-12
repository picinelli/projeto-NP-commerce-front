import styled from "styled-components";
import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Assets/images/Logo.jpg";
import { ThreeDots } from "react-loader-spinner";
export default function Checkout() {
  const dog="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU"
  return (
    <>
    <Container>
      <Header>
      <img src={Logo} alt="Logo" />
      </Header>
      <AllProducts>
      <ItemProducts img={dog}/>
      <ItemProducts img={dog}/>
      <ItemProducts img={dog}/>
      <ItemProducts img={dog}/>
      <ItemProducts img={dog}/>
      <ItemProducts img={dog}/>
      <ItemProducts img={dog}/>
      <ItemProducts img={dog}/>
      <ItemProducts img={dog}/>
      <ItemProducts img={dog}/>
      
      </AllProducts>
      <Footer>
      </Footer>
    </Container>
    </>
  )
  function ItemProducts({img}){
   return(
    <Products>
      <div className="leftImgName">
      <img src={img} alt="doguinho"/>
      <h1>catiorroooooosssssssssssssssssssssssssssooooo</h1> 
      </div>
      <div className="rightPrice">
      <span>R$15.90</span>
      </div>
    </Products>
   )
  }
}
const Footer = styled.header`
  height: 100px;
  width: 100vw;
  background-color: #FFFFFF;
  display: flex;
  position: fixed;
  bottom: 0;
  /* align-items: center;
  justify-content: center; */
  -webkit-box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.43);
  box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.43);

  img {
    width: 180px;
    height: 60px;
    object-fit: cover;
  }
`;
const AllProducts = styled.div`
overflow: scroll;
/* background-color: black; */
margin-top:10px;
/* margin-bottom: 100px; */

`
const Products = styled.div`
  &:last-child {
        margin-bottom: 200px;
        /* color: red ; */
    }
  display: flex;
  margin: auto;
  margin-bottom: 1px;
  justify-content: space-between;
  padding: 15px;
  background-color: #ffffff;
  min-height: 50px;
  width: 90%;
  /* border-radius: 5px; */
  img{
    border-radius: 5px;
    height:80px;
    width:80px;
  }
  h1{
    max-width:100%;
    /* width: 100%; */
    background-color: aqua;
    font-family: "Roboto", sans-serif;
    margin-top:5px;
    margin-left: 15px;
    font-size: 25px;
    font-weight: bold;
    overflow: hidden;
    
  }
  .leftImgName{
    display: flex ;
  }
  .rightPrice{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
  }
  span{
    font-size: 30px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
  }
  `
const Container = styled.div`
  background-color: #ededed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  
`;
const Header = styled.header`
  height: 80px;
  width: 100vw;
  background-color: #fff159;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.43);
  box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.43);

  img {
    width: 180px;
    height: 60px;
    object-fit: cover;
  }
`;