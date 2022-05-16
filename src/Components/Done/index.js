import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import Logo from "../../Assets/images/Logo.jpg";
import DoneImage from "../../Assets/images/green-circle.png";

export default function Done() {
  let totalPrice=0;
  const navigate = useNavigate();
  const [myproducts,setMyproducts]=useState([]);
  const token=localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(()=>{
    const promise= axios.get("http://localhost:5000/myproducts",config)
    promise.then((res)=>{
      setMyproducts(res.data)
    })
    promise.catch((e)=>{
      console.log(e)
      alert("ocorreu algum erro...")
    })
    },[])

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
        <div>
          {myproducts.map((prod,index)=>{
                    totalPrice+= prod.price;
            return(
              <div key={index+Date.now()+index+Date.now()}>
              <p key={index+Date.now()+index+Date.now()}>{prod.title}</p>
              <hr ></hr>
              </div>
            )
          })}
        </div>
        <h3>Total pago: R$ {(totalPrice*0.89).toFixed(2)}</h3>
        <WrapperBottom>
          <Botao onClick={() => {
            deleteProduct();
            navigate("/products")
            
            }}>Voltar</Botao>
        </WrapperBottom>
      </Wrapper>
    </Container>
  );
  async function deleteProduct(){
      try{
        await axios.delete(`http://localhost:5000/deletemyproducts/100`,config)
        const promise= axios.get("http://localhost:5000/myproducts",config)
           promise.then((res)=>{
              setMyproducts(res.data)
           })
           promise.catch((e)=>{
              console.log(e)
              alert("ocorreu algum erro...")
           })
      }catch(e){
        alert("erro no sistema...tente novamente")
      }
 
   }
};

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
