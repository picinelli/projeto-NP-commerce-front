import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/images/Logo.jpg";
import xImage from "../../Assets/images/x.png";
export default function Checkout() {
  const navigate = useNavigate();
  const [myproducts,setMyproducts]=useState([]);
  let totalPrice=0;
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
    <>
    <Container>
      <Header>
      <img src={Logo} alt="Logo" />
      </Header>
      <AllProducts>
      <Title>
        <h1>{myproducts.length===0?Cleancart():"Seus Produtos"}</h1>
      </Title>
      {myproducts.map((product,index)=>{
        totalPrice+= product.price;
       return(
          <ItemProducts today={product.today} key={index+Date.now()+index+Date.now()} id={product.id}img={product.image} text={product.title} price={product.price}/>
       )
        })}
        <SubTotal>
         <h1> {totalPrice!==0?"SubTotal:":""} <s className="blue">{totalPrice!==0?`R$  ${(totalPrice*0.89).toFixed(2)}`:" "}</s> </h1>
        </SubTotal>
      </AllProducts>
      <Footer  numberItems={myproducts.length} />
    </Container>
    </>
  )
  function Footer({numberItems}){
    const price= (totalPrice*0.89).toFixed(2)
    return(
      <CssFooter>
        <Price>
          <span><h1>Total:<s className="numberItems">(itens  {numberItems})</s>  </h1>  <h1 className="blue">R$ {price}</h1></span>
          <span></span>
          </Price>
        <button onClick={()=>{
         done({totalPrice,numberItems})
        }}>
          Finalizar
        </button>
      </CssFooter>
    )
  }
  function done({totalPrice,numberItems}){
    if(totalPrice ===0 || numberItems ===0){
        alert("voce não comprou nada....")
        return;
      }else{
      navigate("/done")
      }
  }
  function ItemProducts({img,text,price,today}){
    const priceDescont=price*(1-0.11);
   return(
    <Products>
      <div className="leftImgName">
      <div className="Img">
      <img src={img} alt="doguinho"/>
      </div>
      <h1>{text}</h1> 
      </div>
      <div className="right">
      <div className="rightPrice">
      <span className=""><s className="green">%{11}</s><s className="risco">R${price}</s></span>
      <span className="duoSpan blue">R${ priceDescont.toFixed(2)}</span>
      </div>
      <>
      <button onClick={()=>{deleteProduct({today})}}>x</button>
      </>
      </div>
    </Products>
   )
  }
  async function deleteProduct({today}){
   if(window.confirm("deseja realmente tirar do seu carrinho?")){
     try{
       await axios.delete(`http://localhost:5000/deletemyproducts/${today}`,config)
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

  }
  function Cleancart(){
      navigate("/products")
    alert("voce ainda não colocou  nada no carrinho")
    return(
      <AllProducts>
      <XX>
        <img  src={xImage} alt="é um x"/>
      </XX>
      </AllProducts>
    )
  }
  
}
const XX=styled.div`
width:300px;
height:300px;
z-index: 1;
display: flex;
justify-content: center;
align-items: center;
img{
  width: 100%;
  height: 100%;
}
`
const Title=styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
margin-left:3.5%;
h1{
  max-width:80%;
    font-family: "Roboto", sans-serif;
    margin-top:5%;
    margin-left: 15px;
    font-size: 30px;
    font-weight: bold;
    overflow: hidden;
}
`
const SubTotal=styled.div`
display: flex;
justify-content: center;
margin-bottom: 50px;
h1{
  max-width:80%;
    font-family: "Roboto", sans-serif;
    margin-top:5%;
    margin-left: 15px;
    font-size: 30px;
    font-weight: bold;
    overflow: hidden;
}
`
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
margin-top:10px;
margin-bottom: 100px;

`
const Products = styled.div`
  &:last-child {
        margin-bottom: 300px;
    }
  display: flex;
  margin: auto;
  margin-bottom: 1px;
  justify-content: space-between;
  padding: 15px;
  background-color: #ffffff;
  min-height: 50px;
  width: 90%;
  button{
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    background-color:rgb(244, 116, 116);
    border: none;
    border-radius: 3px;
    color: #ffffff;
    cursor: pointer;
;
  }
  button:hover{
      transition: 0.6s;
      background-color:rgb(241, 74, 74);

    }
  img{
    width: 75%;
    height: 70%;
    object-fit: cover;
  }
  .Img{
    border-radius: 5px;
    height:80px;
    width:80px;
  }
  h1{
    max-width:100%;
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
    margin-right: 30px;
  }
  .right{
    display: flex;
    justify-content: center;
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