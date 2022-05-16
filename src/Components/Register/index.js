import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import Logo from "../../Assets/images/Logo.jpg";

export default function Register() {
  const inputEmailRef = useRef()
  const inputPasswordRef = useRef()
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [allUsers, setAllUsers] = useState([])
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    endereco: ""
  });

  useEffect(() => {
    async function getAllUsers() {
      try {
        setAllUsers(await axios.get("https://projeto-np-commerce-back.herokuapp.com/all-users"))
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
    if(existentEmail) {
      input.current.classList.remove("valid")
      input.current.classList.add("invalid")
    } else {
      input.current.classList.add("valid")
      input.current.classList.remove("invalid")
    }
  }

  function validatePasswordInput(e) {
    if(e.target.value !== inputPasswordRef.current.value) {
      inputPasswordRef.current.classList.add("invalid")
      e.target.classList.add("invalid")
      inputPasswordRef.current.classList.remove("valid")
      e.target.classList.remove("valid")
    } else {
      inputPasswordRef.current.classList.add("valid")
      e.target.classList.add("valid")
      inputPasswordRef.current.classList.remove("invalid")
      e.target.classList.remove("invalid")
    }
  }

  return (
    <Container>
      <Header>
        <img src={Logo} alt="Logo" />
      </Header>
      <Wrapper>
        <h1>Cadastro</h1>
        <Form onSubmit={handleSubmit}>
          <Input
            className="valid"
            placeholder="Nome"
            type="text"
            value={user.name}
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
            required
          />
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
            placeholder="Endereço"
            type="text"
            value={user.endereco}
            onChange={(e) => {
              setUser({ ...user, endereco: e.target.value });
            }}
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
          <Input
            className="valid"
            placeholder="Confirme a senha"
            type="password"
            value={user.confirm}
            onChange={(e) => {
              setUser({ ...user, confirm: e.target.value });
            }}
            onBlur={(e) => {validatePasswordInput(e)}}
            required
          />
          <LoadButtons />
        </Form>
      </Wrapper>
    </Container>
  );

  async function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    try {
      await axios.post("https://projeto-np-commerce-back.herokuapp.com/register", user);
      setDisabled(false);
      navigate("/");
    } catch (e) {
      setDisabled(false);
      window.alert(e);
      console.log(e);
    }
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
        <RegisterButton type="submit">Cadastrar!</RegisterButton>
        <LoginButton
          onClick={() => {
            navigate("/");
          }}
        >
          Já tem uma conta? <span>Entre agora!</span>
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

  span {
    color: blue;
  }
`;
