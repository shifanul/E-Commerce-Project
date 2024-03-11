//CART PAGE ---- INFORMATION ON ITEMS IN CART AND QUANTITY!
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);

  const nav = useNavigate();

  useEffect(() => {
    fetch(`api/get-cart`)
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data.data);
        setLoading(false);
      });
  }, []);

  //Cart Handlers
  const deleteItemHandler = (e, id) => {
    fetch(`/api/delete-item/${id}`, { method: "DELETE" }).then((res) =>
      console.log(res)
    );
    const newCart = cartItems.filter((item) => item._id !== id);
    setCartItems(newCart);
    e.preventDefault();
  };

  const clearCartHandler = (e) => {
    e.preventDefault();

    cartItems.forEach((item) => {
      fetch(`/api/delete-item/${item._id}`, { method: "DELETE" }).then((res) =>
        console.log(res)
      );
    });

    setCartItems([]);
  };

  const changeQuantity = () => {
    //Stretch goal
  };

  //Form Handlers
  const handleChange = (k, v) => {
    setFormData({ ...formData, [k]: v });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/purchase-cart", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        const id = uuidv4();
        fetch("api/new-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, _id: id, shipping: "standard" }),
        });
        nav(`/confirmation/${id}`);
      } else {
        window.alert("Error checking out cart.");
      }
    });
    console.log(formData);
  };

  return (
    <Wrapper>
      {cartItems.length ? (
        <>
          <Header>
            <Title>Shopping Cart</Title>
            <Clear href="" onClick={clearCartHandler}>
              clear cart
            </Clear>
          </Header>
          <ItemsBox>
            {cartItems.map((item) => {
              return (
                <Row key={item.name}>
                  <Image src={item.imageSrc} />
                  <Info>
                    <Name>{item.name}</Name>
                    <Price>{item.price}</Price>
                    <Quantity>Quanity: {item.quantity}</Quantity>
                  </Info>
                  <Delete>
                    <Click
                      href=""
                      onClick={(e) => deleteItemHandler(e, item._id)}
                    >
                      <FiTrash2 />
                    </Click>
                  </Delete>
                </Row>
              );
            })}
          </ItemsBox>

          <Billing>
            <Header>
              <Title>Billing Info</Title>
            </Header>

            <Form onSubmit={handleSubmit}>
              <CustomerInput
                placeholder="Name"
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
              <CustomerInput
                placeholder="Address"
                onChange={(e) => handleChange("address", e.target.value)}
                required
              />
              <CustomerInput
                placeholder="Credit Card"
                onChange={(e) => handleChange("creditcard", e.target.value)}
                required
              />
              <CustomerInput
                placeholder="mm/yy"
                onChange={(e) => handleChange("exp", e.target.value)}
                required
              />

              <Purchase type="submit">Purchase</Purchase>
            </Form>
          </Billing>
        </>
      ) : loading ? (
        <>
          <Header>
            <Title>Shopping Cart</Title>
            <Clear href="" onClick={clearCartHandler}>
              clear cart
            </Clear>
          </Header>
          Loading Cart...
        </>
      ) : (
        <>
          <Header>
            <Title>Shopping Cart</Title>
            <Clear href="" onClick={clearCartHandler}>
              clear cart
            </Clear>
          </Header>
          Cart is empty
        </>
      )}
    </Wrapper>
  );
};

{
  /* <>
        <Header>
            <Title>Shopping Cart</Title>
            <Clear href="" onClick={clearCartHandler}>
              clear cart
            </Clear>
          </Header>
          Cart is empty
        </> */
}

const Wrapper = styled.div`
  padding: 12px;
  width: 50%;
  margin-left: 25%;
`;

const Header = styled.div`
  border-bottom: 3px solid lightgrey;
  padding-bottom: 12px;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 12px; ;
`;
const Clear = styled.a``;

const ItemsBox = styled.div`
  margin-top: 24px;
`;
const Row = styled.div`
  display: flex;
  margin-top: 24px;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 3px rgba(100, 100, 100, 0.5);
  max-width: 100%;
  height: 150px;
`;

const Image = styled.img`
  width: auto;
  height: auto;
  max-height: 100%;
  margin: 12px;
  margin-right: 24px;
`;
const Info = styled.div`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.div`
  margin-bottom: 12px;
  font-size: 22px;
`;
const Price = styled.div`
  font-weight: bold;
  margin-bottom: 6px;
`;
const Quantity = styled.div`
  font-size: 12px;
`;

const Delete = styled.div`
  margin: 24px;
  font-size: 50px;
  display: flex;
  align-items: center;
`;

const Click = styled.a`
  text-decoration: none;
`;

const Billing = styled.div`
  margin-top: 150px;
`;

const Form = styled.form`
  margin-top: 24px;
  border: 5px solid var(--color-alabama-crimson);
  padding: 30px;
  margin: auto 0px auto;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

const CustomerInput = styled.input`
  padding: 8px;
  margin: 6px;
`;
const Purchase = styled.button`
  font-size: 100%;
  font-family: inherit;
  border: 0;
  padding: 10px;
  margin: 6px;
  width: fit-content;
  color: white;
  background: var(--color-lapis-lazuli);

  &:hover {
    background: var(--color-charcoal);
  }

  &:active {
    background: var(--color-lapis-lazuli);
  }
`;

export default Cart;
