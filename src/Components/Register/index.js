import styled from 'styled-components'
import Logo from '../../Assets/images/Logo.jpg'

export default function Register() {
  return (
    <Container>
      <Header>
        <img src={Logo} alt="Logo" />
      </Header>
      <Wrapper>
        <h1>Cadastro</h1>
        <Form>
          <Input placeholder="Nome" />
          <Input placeholder="Email" />
          <Input placeholder="Senha"/>
          <Input placeholder="Confirme a senha"/>
          <RegisterButton>Cadastrar!</RegisterButton>
          <LoginButton>Já tem uma conta? <span>Entre agora!</span></LoginButton>
        </Form>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  background-color: #EDEDED;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`

const Header = styled.header`
  height: 80px;
  width: 100vw;
  background-color: #FFF159;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 0px 16px 2px rgba(0,0,0,0.43); 
  box-shadow: 0px 0px 16px 2px rgba(0,0,0,0.43);

  img {
    width: 180px;
    height: 60px;
    object-fit: cover;
  }
`

const Wrapper = styled.div`
  margin: auto;
  padding: 30px;
  background-color: #FFFFFF;
  max-width: 380px;
  width: 100%;
  border-radius: 5px;

  h1 {
    text-align: center;
    font-size: 1.5rem;
    padding-bottom: 50px;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input`
  border: 0;
  border-radius: 3px;
  background-color: #EFEFEF;
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
`

const RegisterButton = styled.button`
  cursor: pointer;
  font-size: 18px;
  border: 0;
  border-radius: 35px;
  background-color: #FFF159;
  width: 150px;
  height: 50px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`

const LoginButton = styled.button`
  cursor: pointer;
  border: 0;
  margin-top: 20px;
  background-color: inherit;

  span {
    color: blue;
  }
`