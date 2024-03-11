//SERVICES PAGE ---- INFORMATION ON SERVICES OFFERED!
import styled from "styled-components";

const Services = () => {
  return (
    <Wrapper>
      <h1>Services</h1>
      <br></br>
      <h2>Product Help</h2>
      <p>Customer Care Contact information:</p>
      <p>Toll free phone line: 123-4567-8920</p>
      <p>Email address: watchout@gmail.com</p>
      <br></br>

      <h2>Wear and Care</h2>
      <p>
        Please consult the individual brand's site for further information
        regarding best care practices for your product
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: space-evenly;
  margin: 20px;
  text-align: center;
`;

export default Services;
