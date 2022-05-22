import { useState, useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { TokenContext } from "../../context/TokenContext";
import Logo from "../../Assets/images/Logo.jpg";

import "../../Assets/css/style.css"

export default function Login() {
  const inputEmailRef = useRef()
  const inputPasswordRef = useRef()
  const { setToken } = useContext(TokenContext);
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [allUsers, setAllUsers] = useState([])
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    async function getAllUsers() {
      try {
        setAllUsers(await axios.get("http://localhost:5000/all-users"))
      } catch(e) {
        console.log("Nao foi possivel buscar os usuarios")
      }
    }
    getAllUsers()
  }, [])

  function validateEmailInput(input) {
    const existentEmail = allUsers.data.find((user) => {
      return (
        user.email === input.current.value
      )
    })
    if(existentEmail || input.current.value === "") {
      input.current.classList.add("valid")
      input.current.classList.remove("invalid")
    } else {
      input.current.classList.remove("valid")
      input.current.classList.add("invalid")
    }
  }

  return (
    <Container>
      <Header>
        <img src={Logo} alt="Logo" />
      </Header>
      <Wrapper>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Input
            className="valid"
            placeholder="Email"
            type="email"
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            ref={inputEmailRef}
            onBlur={() => {validateEmailInput(inputEmailRef)}}
            required
          />
          <Input
            className="valid"
            placeholder="Senha"
            type="password"
            value={user.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            ref={inputPasswordRef}
            required
          />

          <LoadButtons />
        </Form>
      </Wrapper>
    </Container>
  );

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    const promise = axios.post("http://localhost:5000/sign-in", user);
    promise.then((res) => {
      setToken(res.data);
      JSON.stringify(localStorage.setItem("token", res.data.token));

      setDisabled(false);
      navigate("/products");
    });
    promise.catch((e) => {
      setDisabled(false);
      window.alert(e);
      console.log(e);
    });
  }

  function LoadButtons() {
    if (disabled === true) {
      return (
        <>
          <RegisterButton disabled>
            <ThreeDots color="#2728EF" />
          </RegisterButton>
          <LoginButton disabled>
            Já tem uma conta? <span>Entre agora!</span>
          </LoginButton>
        </>
      );
    }
    return (
      <>
        <RegisterButton type="submit">Entrar</RegisterButton>
        <LoginButton>
          <Link to="/register">
            <span className="color">Não tem uma conta?</span>{" "}
            <span>faça agora!</span>
          </Link>
        </LoginButton>
      </>
    );
  }
}

const Container = styled.div`
  background-color: #ededed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Wrapper = styled.div`
  margin: auto;
  padding: 30px;
  background-color: #ffffff;
  max-width: 380px;
  width: 100%;
  border-radius: 5px;

  h1 {
    text-align: center;
    font-size: 1.5rem;
    padding-bottom: 50px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  border-radius: 3px;
  width: 100%;
  height: 40px;
  margin-bottom: 30px;
  padding-left: 10px;
  font-size: 16px;

  ::placeholder {
    font-size: 16px;
    color: #666666;
    padding-left: 4px;
    /* position: absolute;
  left: 10px;
  top: 30%; */
  }
`;

const RegisterButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border: 0;
  border-radius: 35px;
  background-color: #fff159;
  width: 150px;
  height: 50px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const LoginButton = styled.button`
  cursor: pointer;
  border: 0;
  margin-top: 20px;
  background-color: inherit;
  .color {
    color: black;
  }
  span {
    color: blue;
  }
`;
