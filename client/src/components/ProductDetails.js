//PRODUCT DETAILS PAGE ---- INFORMATION ON A SINGLE PRODUCT SELECTED!
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router";
import { Watch } from "react-loader-spinner";

const ProductDetails = () => {
  //GRABBING THE PRODUCT ID
  const { productId } = useParams();
  //GRABBING THE WATCH DATA
  const [watch, setWatch] = useState(null);
  //CHECKING QUANTITY
  const quantityRef = useRef(null);
  //CHECKING STOCK
  const [maxStock, setMaxStock] = useState(0);
  //NAVIGATING OUT OF SITE
  const navigate = useNavigate();
  //LOADING SPINNER
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/get-watch/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setWatch(data.data);
        setMaxStock(data.data.numInStock);
      });
    // loads for a minimum of 2,5 seconds
    setTimeout(() => {
      setLoading(false);
      quantityRef.current.value = 1;
    }, 2500);
  }, []);

  const handlePlusMinus = (e) => {
    if (e.target.innerText === "+") {
      quantityRef.current.value < maxStock && quantityRef.current.value++;
    } else {
      quantityRef.current.value > 1 && quantityRef.current.value--;
    }
  };

  const addToCart = async (e, watch) => {
    const stock = Number(quantityRef.current.value);
    //Check if stock valid
    if (stock < 1 || stock > maxStock) {
      window.alert("Please select a valid amount");
      return;
    }

    const addingToCart = await fetch("/api/add-to-cart", {
      method: "POST",
      body: JSON.stringify({
        ...watch,
        quantity: stock,
      }),
      headers: { "Content-Type": "application/json" },
      Accept: "application/json",
    });

    alert("added to cart!");
  };

  // spinner if fetch is done
  if (loading) {
    return (
      <div style={style}>
        <Watch
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
    <div>
      {watch && (
        <Wrapper>
          <Img src={watch.imageSrc}></Img>

          <Info>
            <Name>{watch.name}</Name>
            <Company>Company id : {watch.companyId}</Company>
            <Body>Body Location : {watch.body_location}</Body>
            <Cat>Category : {watch.category}</Cat>
            <Stock>Stock : {watch.numInStock}</Stock>
            <ButtonWrapper>
              <Clicker>
                <PlusMinus onClick={handlePlusMinus}>-</PlusMinus>
                <QuanityInput type="text" ref={quantityRef} />
                <PlusMinus onClick={handlePlusMinus}>+</PlusMinus>
              </Clicker>
              <Price>
                <White>{watch.price}</White>
                <Add
                  disabled={!watch.numInStock}
                  onClick={(e) => addToCart(e, watch)}
                >
                  {watch.numInStock ? "Add to Cart" : "Out of Stock"}
                </Add>
              </Price>

              <Cart
                onClick={(e) => {
                  navigate("/cart");
                }}
              >
                go 🛒
              </Cart>
            </ButtonWrapper>
          </Info>
        </Wrapper>
      )}
    </div>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Clicker = styled.div`
  display: flex;
`;
const PlusMinus = styled.button`
  font-size: 100%;
  font-family: inherit;
  border: 0;
  padding: 10px;
  margin: 2px;
  width: fit-content;
  color: white;
  background: var(--color-lapis-lazuli);
  font-weight: bold;
  width: 30px;
  &:hover {
    background: var(--color-charcoal);
  }

  &:active {
    background: var(--color-lapis-lazuli);
  }
`;
const QuanityInput = styled.input`
  padding: 6px;
  font-size: 18px;
  width: 24px;
  text-align: center;
`;

const Img = styled.img`
  border-radius: 10px;
  box-shadow: 3px 3px 10px 5px;
  width: 200px;
  height: 200px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const Info = styled.div`
  padding: 1%;
  width: fit-content;
  height: 200px;
  border-radius: 10px;
  background-color: #daf7dc;
  margin-left: 40px;
`;

const Body = styled.p`
  font-family: sans-serif;
`;

const Cat = styled.p`
  font-family: sans-serif;
`;

const Company = styled.p`
  font-size: 15px;
  opacity: 0.5;
  margin-bottom: 10px;
`;

const Name = styled.p`
  font-size: 25px;
`;
const Stock = styled.p`
  font-family: sans-serif;
`;
const Price = styled.p`
  font-size: 20px;
  border: none;
  width: fit-content;
  display: flex;
`;

const White = styled.div`
  background: white;
  border-radius: 3px;
  margin: 0px 3px;
  padding: 6px;
`;

const Add = styled.button`
  background-color: #86bbd8;
  height: 35px;
  width: 200px;
  margin-left: 10px;
  color: white;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 20px;
  border: none;

  &:hover {
    background: var(--color-charcoal);
  }

  &:active {
    background: var(--color-lapis-lazuli);
  }
`;

const Cart = styled.button`
  background-color: orange;
  height: 35px;
  width: 100px;
  color: white;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 20px;
  border: none;

  &:hover {
    background: red;
  }

  &:active {
    background: orange;
  }
`;

const style = {
  position: "fixed",
  padding: "200px",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default ProductDetails;
