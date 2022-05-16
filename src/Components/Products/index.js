import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Cart from "../../Assets/images/shopping-cart.png";
import Logo from "../../Assets/images/Logo.jpg";

export default function Products() {
  const navigate = useNavigate();
  const [myProducts, setMyProducts] = useState({ data: [] });
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    async function getProducts() {
      try {
        setProducts(await axios.get("https://projeto-np-commerce-back.herokuapp.com/products"));
        setMyProducts(
          await axios.get("https://projeto-np-commerce-back.herokuapp.com/myproducts", config)
        );
        setUser(await axios.get("https://projeto-np-commerce-back.herokuapp.com/user", config))
      } catch (e) {
        console.log(e);
      }
    }
    getProducts();
  }, []);

  return (
    <Container>
      <Header>
        <img src={Logo} alt="Logo" />
        <h1>Bem vindo, {user.data} :&#41;</h1>
        <CartWrapper
          onClick={() => {
            navigate("/checkout");
          }}
        >
          <img src={Cart} alt="Cart" />
          <p>Carrinho</p>
          <LoadQuantity />
        </CartWrapper>
      </Header>
      <Wrapper>
        <RenderProducts />
      </Wrapper>
    </Container>
  );

  function RenderProducts() {
    if (products.length < 1) return <></>;
    return products.data.map((product) => {
      let { image, title, price, id } = product;
      price = price.toString().replace(".", ",");
        return (
          <ProductWrapper key={id + title}>
            <img src={image} alt="product"></img>
            <h2>{title}</h2>
            <h3>
              R$ {price}
              <span>11% OFF</span>
            </h3>
            <h4>Frete Grátis</h4>
            <BuyButton
              onClick={(e) => {
                goBuy(e, product);
              }}
            >
              Comprar
            </BuyButton>
            <CartBuyButton
              onClick={(e) => {
                addCart(e, product);
              }}
            >
              Carrinho+
            </CartBuyButton>
          </ProductWrapper>
        );
    });
  }

  async function goBuy(e, product) {
    e.target.setAttribute("disabled", "")
    const today = Date.now();
    product = {...product, today}

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios.post("https://projeto-np-commerce-back.herokuapp.com/products", product, config);
      setMyProducts(
        await axios.get("https://projeto-np-commerce-back.herokuapp.com/myproducts", config)
      );
    } catch (e) {
      console.log(e);
      if (e.response.status === 401) {
        return navigate("/");
      }
    }
    navigate("/checkout");
  }

  async function addCart(e, product) {
    e.target.setAttribute("disabled", "")
    const today = Date.now();
    product = {...product, today}

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios.post("https://projeto-np-commerce-back.herokuapp.com/products", product, config);
      setMyProducts(
        await axios.get("https://projeto-np-commerce-back.herokuapp.com/myproducts", config)
      );
    } catch (e) {
      console.log(e);
      if (e.response.status === 401) {
        return navigate("/");
      }
      return window.alert("Nao foi possivel adicionar o produto");
    }
  }

  function LoadQuantity() {
    if (myProducts.data.length < 1) {
      return <></>;
    }
    return <QuantityWrapper>{myProducts.data.length}</QuantityWrapper>;
  }
}

const Container = styled.div`
  background-color: #ededed;
  padding-bottom: 100px;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;

const Header = styled.header`
  position: fixed;
  z-index: 1;
  height: 80px;
  width: 100vw;
  padding: 0 40px 0 40px;
  background-color: #fff159;
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.43);
  box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.43);

  h1 {
    font-size: 1.3rem;
    text-align: center;
    padding-right: 60px;
  }

  img {
    width: 180px;
    height: 60px;
    object-fit: cover;
  }

  @media (max-width: 800px) {
    img {
      width: 120px;
    }

    h1 {
      font-size: 1.0rem;
      padding-right: 35px;
    }
  }

  @media (max-width: 500px) {
    padding: 0 5px 0 5px;
  }
`;

const CartWrapper = styled.div`
  cursor: pointer;
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

  @media (max-width: 800px) {
    img {
      width: 30px
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

const QuantityWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(231, 221, 24);
  box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.43);
  font-size: 14px;
  font-weight: bold;
  top: 0;
  left: 7px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 130px;
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
  background-color: #ffffff;
  margin: 10px 10px 10px 10px;
  padding: 10px 10px 10px 10px;

  img {
    border-radius: 3px 3px 0 0;
    width: 100%;
    height: 50%;
    object-fit: center;
  }

  h2 {
    padding-top: 10px;
    color: gray;
    font-size: 0.9rem;
    word-break: break-all;
  }

  h3 {
    padding: 10px 0 10px 0;
    font-size: 1.5rem;
    color: #333333;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 75px;
  }

  span {
    padding-left: 10px;
    font-size: 0.8rem;
    color: #56be82;
    font-weight: bold;
  }

  h4 {
    color: #56be82;
    font-weight: bold;
    position: absolute;
    bottom: 65px;
  }
`;

const BuyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  border: 0;
  border-radius: 5px;
  background-color: #2968c8;
  width: 110px;
  height: 40px;
  bottom: 10px;
  left: 10px;
  font-size: 1.2rem;
  font-weight: bold;

  :active {
    background-color: #0b53bf;
    box-shadow: 0 2px #666;
    transform: translateY(4px);
  }
`;

const CartBuyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  border: 0;
  border-radius: 5px;
  background-color: #d8e7fa;
  width: 110px;
  height: 40px;
  bottom: 10px;
  right: 10px;
  font-size: 1rem;

  :active {
    background-color: #adcdf7;
    box-shadow: 0 2px #666;
    transform: translateY(4px);
  }
`;
