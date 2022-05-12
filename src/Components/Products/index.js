import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import Cart from "../../Assets/images/shopping-cart.png"
import Logo from "../../Assets/images/Logo.jpg";

export default function Products() {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  return (
    <Container>
      <Header>
        <img src={Logo} alt="Logo" />
        <CartWrapper>
          <img src={Cart} alt="Cart" />
          <p>Carrinho</p>
          <QuantityWrapper>
            1
          </QuantityWrapper>
        </CartWrapper>
      </Header>
      <Wrapper>
      <ProductWrapper>
        <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="product"></img>
        <h2>Camiseta feminina manga curtfawfasfwfasfaaaaaaaaaaaaaaaaaaaaaawfasfawfawfsafwasfwfawfa</h2>
        <h3>R$121.04 <span>11% OFF</span></h3>
        <h4>Frete Grátis</h4>
        <BotaoComprar>Comprar</BotaoComprar>
        <BotaoCarrinho>Carrinho+</BotaoCarrinho>
      </ProductWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: #ededed;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;

const Header = styled.header`
  height: 80px;
  width: 100vw;
  padding: 0 40px 0 40px;
  background-color: #fff159;
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.43);
  box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.43);

  img {
    width: 180px;
    height: 60px;
    object-fit: cover;
  }
`;

const CartWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 5px;
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
`

const QuantityWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
  top: 0;
  left: 7px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 130px;

  background-color: orange;
  max-width: 1200px;
  width: 100%;
  border-radius: 5px;

  h1 {
    text-align: center;
    font-size: 1.5rem;
    padding-bottom: 50px;
  }
`;

const ProductWrapper = styled.div`
  position: relative;
  border-radius: 3px;
  width: 250px;
  height: 350px;
  background-color: #FFFFFF;
  margin: 10px 10px 10px 10px;

  img {
    border-radius: 3px 3px 0 0;
    width: 100%;
    height: 50%;
    object-fit: center;
  }

  h2 {
    padding-top: 10px;
    color: gray;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 0.9rem;
    word-break: break-all;
  }

  h3 {
    padding: 10px 10px 10px 10px;
    font-size: 1.5rem;
    color: #333333;
    display: flex;
    align-items: center;
  }

  span {
    padding-left: 10px;
    font-size: 0.8rem;
    color: #56BE82;
    font-weight: bold;
  }

  h4 {
    color: #56BE82;
    font-weight: bold;
    padding-left: 10px;
  }
`

const BotaoComprar = styled.button`
  position: absolute;
  border: 0;
  border-radius: 5px;
  background-color: #2968C8;
  width: 110px;
  height: 40px;
  bottom: 10px;
  left: 10px;
  font-size: 1.2rem;
  font-weight: bold;
`

const BotaoCarrinho = styled.button`
  position: absolute;
  border: 0;
  border-radius: 5px;
  background-color: #D8E7FA;
  width: 110px;
  height: 40px;
  bottom: 10px;
  right: 10px;
  font-size: 1.0rem;
`