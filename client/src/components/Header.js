import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Watch from "./images/Logo-for-ecom.png";

//HEADER PAGE ---- HEADER INFORMATION / NAVIGATION!

const Header = () => {
  return (
    <Wrapper>
      <Div1>
        <Logo to={"/"}>
          <H1> WatchOut </H1>
          <Img src={Watch}></Img>
        </Logo>
      </Div1>
      <Div2>
        <Services to={"/all-products"}>PRODUCTS </Services>
        <Services to={"/about"}>ABOUT </Services>
        <Services to={"/services"}>SERVICES </Services>
      </Div2>
      <Cart to={"/cart"}>
        <FaShoppingCart></FaShoppingCart>
      </Cart>
    </Wrapper>
  );
};
const H1 = styled.section`
  margin-left: 20px;
  margin-top: 30px;
  font-size: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #2f4858;
`;
const Img = styled.img`
  height: 150px;
  width: 150px;
  margin-left: 20px;
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: #daf7dc;
`;

const Cart = styled(Link)`
  text-decoration: none;
  color: #daf7dc;
  display: flex;
  align-items: center;
`;

const Div2 = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Div1 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Services = styled(Link)`
  flex-direction: row;
  text-decoration: none;
  justify-content: center;
  width: fit-content;
  color: #daf7dc;
  font-size: 25px;
  margin: 10px;
`;

export default Header;
