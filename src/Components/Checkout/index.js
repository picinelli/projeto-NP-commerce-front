import styled from "styled-components";
import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Assets/images/Logo.jpg";
import { ThreeDots } from "react-loader-spinner";
export default function Checkout() {
  const test="testinho"
  const dog="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU"
  const promise= axios.get("")
   return (
    <>
    <Container>
      <Header>
      <img src={Logo} alt="Logo" />
      </Header>
      <AllProducts>
      <ItemProducts img={dog} text="gatin reverse" price="15.75"/>
      <ItemProducts img={dog} text="gatin reverse" price="15.75"/>
      <ItemProducts img={dog} text="gatin reverse" price="15.75"/>
      <ItemProducts img={dog} text="gatin reverse" price="15.75"/>
      <ItemProducts img={dog} text="gatin reverse" price="15.75"/>
      <ItemProducts img={dog} text="gatin reverse" price="15.75"/>
      <ItemProducts img={dog} text="gatin reverse" price="15.75"/>
      <ItemProducts img={dog} text="gatin reverse" price="15.75"/>
      <ItemProducts img={dog} text="gatin reverse" price="15.75"/>
      <ItemProducts img={dog} text="gatin reverse" price="15.75"/>
      </AllProducts>
      <Footer  numberItems="15" />
    </Container>
    </>
  )
  function Footer({numberItems}){
    return(
      <CssFooter>
        <Price>
          <span><h1>Total:<s className="numberItems">(items  {numberItems})</s>  </h1>  <h1 className="blue">R$ 15.90</h1></span>
          <span></span>
          </Price>
        <button>
          Finalizar
        </button>
      </CssFooter>
    )
  }
  function ItemProducts({img,text,price}){
    // const randomNumber=Math.random() * (-1 - 0) + 1;
    // randomNumber.toFixed(2)
    // randomNumber*100).toFixed(0)
    const priceDescont=price*(1-0.11);
   return(
    <Products>
      <div className="leftImgName">
      <img src={img} alt="doguinho"/>
      <h1>{text}</h1> 
      </div>
      <div className="rightPrice">
      <span className=""><s className="green">%{11}</s><s className="risco">R${price}</s></span>
      <span className="duoSpan blue">R${ priceDescont.toFixed(2)}</span>
      {/* <ion-icon name="trash"></ion-icon> */}
      </div>
    </Products>
   )
  }
}
const Price= styled.div`
display: flex;
justify-content: space-between;
padding: 10px;
max-width: 100%;
width: 91%;
height: 32px;
margin: 1px auto;
.numberItems{
  margin-right: 5px;
  font-family: "Roboto", sans-serif;
    font-size: 80%;
    font-weight: 400;

}
span{
  display: flex;
  font-size: 25px;
    font-weight: bold;
}
h1{
  margin-right: 1px;
  font-family: "Roboto", sans-serif;
    font-size: 90%;
    font-weight: bold;
}
`
const CssFooter = styled.footer`
  height: 100px;
  width: 100vw;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  /* align-items: center;
  justify-content: center; */
  -webkit-box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.43);
  box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.43);
  button{
    display: flex;
    margin: auto;
    min-width: 100px;
    max-width: 300px;
    width: 100%;
    min-height: 20px;
    height: 50px;
    border-radius: 25px;
    border:none;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    background-color: #FFF159;
    cursor: pointer;
    
  }
  button:hover{
      transition: 0.8s;
      background-color: #f3df09;
    }

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
    /* background-color: aqua; */
    font-family: "Roboto", sans-serif;
    margin-top:5px;
    margin-left: 15px;
    font-size: 100%;
    font-weight: bold;
    overflow: hidden;
    
  }
  .leftImgName{
    display: flex ;
  }
  .rightPrice{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
  }
  .green{
    color:green;
    font-weight: bold;
  }
  .risco{
    text-decoration: line-through;
    margin-left:5px;
}
  .duoSpan{
    font-size: 140%;
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
  .blue{
    color: rgb(59, 59, 217);
  }  
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