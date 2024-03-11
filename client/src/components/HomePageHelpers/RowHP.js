import styled from "styled-components";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const RowHP = ({ category, items }) => {
  const limit = 25;
  const first5 = items.slice(0, limit);

  const WheelEvent = () => {
    //Stretch Horizontal scroll
  }
  

  return (
    <Wrapper>
      <Header>{category}</Header>
      <Row onWheel={WheelEvent}>
        {first5.map((item) => {
          return (
            <Tile to={`all-products/${item._id}`}>
              <Image src={item.imageSrc} />
              <Info>
                <Name>{item.name}</Name>
                <Price>{item.price}</Price>
              </Info>
            </Tile>
          );
        })}
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`

  padding: 12px;
`;

const Header = styled.div`
  font-size: 36px;
  font-weight: bold;
  max-width: 50%;
  margin-bottom: 12px;
  border-bottom: 3px solid lightgrey;
`;

const Row = styled.div`
  display: flex;
  height: auto;
  overflow:scroll;
  overflow-y: hidden;
  height:100%
`;

const Image = styled.img`
  width: 150px;
  height: auto;
  max-height: 100%;
`;

const Info = styled.div`
  visibility: hidden;
  opacity: 0;

  position: absolute;
  bottom: 0px;
  background: rgba(200,200,200,0.7);
  box-shadow:0px -10px 2px rgba(200,200,200,0.7);
  transition: opacity 0.2s, visibility 0.2s;
`;

const Name = styled.div`
  margin-bottom: 4px;
  word-break: break-all;

  
`;

const Price = styled.div`
  font-weight: bold;
`;

const Tile = styled(Link)`
  margin: 12px;
  width: 200px;
  height: 200px;

  display:flex;
  align-items: center;
  justify-content: center;
  position: relative;

  border-radius: 4px;
  box-shadow:0px 0px 3px 3px rgba(100,100,100,0.5);

  &:hover ${Info} {
    visibility: visible;
    opacity: 1;
  }
`;



export default RowHP;
