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
      </AllProducts>
    </Container>
    </>
  )
  function ItemProducts({img}){
   return(
    <Products>
      <img src={img} alt="doguinho"/>
      <h1>catiorro</h1> 
    </Products>
   )
  }
}
const AllProducts = styled.div`
background-color: black;
margin-top:10px;


`
const Products = styled.div`
  display: flex;
 margin: auto;
  padding: 15px;
  background-color: #ffffff;
  min-height: 50px;
  width: 90%;
  border-radius: 5px;
  img{
    border-radius: 5px;
    height:80px;
    width:80px;
  }
  h1{
    max-width:600px;
    width: 100%;
    background-color: aqua;
    font-family: "Roboto", sans-serif;
    margin-top:5px;
    margin-left: 15px;
    font-size: 30px;
    font-weight: bold;
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