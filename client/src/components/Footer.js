//FOOTER PAGE ---- FOOTER INFORMATION!
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <Wrapper>
      
      <Slogan>Stay Connected </Slogan>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
      <FiFacebook/>
    </a>
    <a href="https://instagram.com" target="_blank" rel="noreferrer">
      <FiInstagram/>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noreferrer">
      <FiTwitter/>
    </a>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  background-color: #2f4858;
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  align-items: center;
`;


const Slogan = styled.p`
  color: #daf7dc;
  padding: 2%;
  font-size: 30px;
  margin-right: 55%;
`;

export default Footer;
