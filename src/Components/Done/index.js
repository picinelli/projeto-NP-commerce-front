import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Logo from "../../Assets/images/Logo.jpg";
import DoneImage from "../../Assets/images/green-circle.png";

export default function Done() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <img src={Logo} alt="Logo" />
      </Header>
      <Wrapper>
        <WrapperTop>
          <img src={DoneImage} alt="Done" />
          <h1>Muito obrigado pela sua compra!</h1>
          <h2>
            Você receberá um email com todas as informações de sua compra.
          </h2>
        </WrapperTop>
        <h3>Produtos adquiridos:</h3>
        <p>Mochila Foldsack - Fjallraven, Cabe 15 Laptops</p>
        <p>Mochila Foldsack - Fjallraven, Cabe 15 Laptops</p>
        <p>Mochila Foldsack - Fjallraven, Cabe 15 Laptops</p>
        <p>Mochila Foldsack - Fjallraven, Cabe 15 Laptops</p>
        <p>Mochila Foldsack - Fjallraven, Cabe 15 Laptops</p>
        <p>Mochila Foldsack - Fjallraven, Cabe 15 Laptops</p>
        <p>
          Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA
          III 2.5
        </p>
        <h3>Total pago: R$ 2.405,78</h3>
        <WrapperBottom>
          <Botao onClick={() => {navigate("/products")}}>Voltar</Botao>
        </WrapperBottom>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: #ededed;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  padding-bottom: 120px;
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

const WrapperTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const WrapperBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 30px;
  margin-top: 80px;
  background-color: #ffffff;
  max-width: 650px;
  width: 100%;
  border-radius: 5px;

  img {
    width: 120px;
  }

  h1 {
    padding-top: 10px;
    text-align: center;
    font-size: 1.5rem;
    padding-bottom: 14px;
  }

  h2 {
    padding-bottom: 30px;
    color: gray;
  }

  h3 {
    padding-top: 10px;
    font-weight: bold;
    padding-bottom: 15px;
  }

  p {
    padding-bottom: 18px;
  }
`;

const Botao = styled.button`
  cursor: pointer;
  margin-top: 45px;
  display: flex;
  background-color: #fff159;
  border: 0;
  width: 160px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  font-size: 1.25rem;

  :hover {
    transition: 0.8s;
    background-color: #f3df09;
  }
`;
