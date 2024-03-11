//ABOUT PAGE ---- INFORMATION ON COMPANY SELLING ITEMS!
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [companies, setCompanies] = useState(null);

  useEffect(() => {
    fetch(`/api/get-companies`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCompanies(data.data);
      });
  }, []);

  return (
    <Wrapper>
      {companies &&
        companies.map((company) => {
          return (
            <Div>
              <Name>{company.name} </Name>
              <Country>{company.country}</Country>
              <Link>{company.url}</Link>
            </Div>
          );
        })}
    </Wrapper>
  );
};



const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 1000px;
  padding-top: 50px;
  padding-left: 20px;
  padding-bottom: 200px;
`;

const Div = styled.div`
  border: 3px solid #9ee493;;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  margin-right: 20px;
  border-radius: 10px;
  padding: 20px;
`;

const Name = styled.div`
  font-size: 20px;
`;

const Country = styled.div`
  font-size: 14px;
  opacity: 0.5;
  margin-bottom: 10px;
`;

export default About;
