//ALL PRODUCTS PAGE ---- SMALL DETAIL INFORMATION AND SHOWS ALL PRODUCTS!
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Watch } from "react-loader-spinner";

const AllProducts = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  // get all the watches from the db
  useEffect(() => {
    fetch(`api/get-watches`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
    // loads for a minimum of 2,5 seconds
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  // spinner if fetch is done
  if (loading) {
    return (
      <div style={style}>
        <Watch
          margin="200"
          height="200"
          width="200"
          radius="48"
          color="#2f4858"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
        <>Loading your favorite wearables...</>
      </div>
    );
  }

  return (
    <Div>
      {products &&
        products.map((item) => {
          return (
            <Wrapper>
              <Link to={`/all-products/${item._id}`}>
                <Img src={item.imageSrc} alt={item.name}></Img>
                <Div1>{item.name} </Div1>
                <Div2>{item.price}</Div2>
              </Link>
            </Wrapper>
          );
        })}
    </Div>
  );
};

const Wrapper = styled.section`
  display: inline-block;
  margin: 20px;
  width: 25vw;
`;
const Div = styled.section`
  text-align: center;
`;
const Div1 = styled.section``;
const Div2 = styled.section``;
const Img = styled.img`
  height: 200px;
  width: 200px;
`;

const style = {
  position: "fixed",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default AllProducts;
