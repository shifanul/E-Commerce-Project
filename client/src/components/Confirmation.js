//CONFIRMATION PAGE ---- CONFIRMATION INFORMATION AND DETAILS OF PURCHASE!
import { RiTruckLine } from "react-icons/ri";
import { AiFillCreditCard } from "react-icons/ai";
import { SiPointy } from "react-icons/si";
import { BsClockHistory } from "react-icons/bs";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Confirmation = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    fetch(`/api/get-order/${orderId}`)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data.data);
      });
  }, []);

  return (
    <>
      {order ? (
        <Wrapper>
          <div>
            <Thank>Thank You!</Thank>

            <OrderNumber> Your order has been placed!</OrderNumber>
            <div>#{order._id}</div>
            <Confirm>
              {" "}
              We sent an email to you with your order confirmation and receipt.
              If the email hasn't arrived within two minutes, please check your
              spam folder to see if the email was routed there.
            </Confirm>

            <Time>
              <BsClockHistory></BsClockHistory> Time Placed{" "}
            </Time>
          </div>

          <WrapperTwo>
            <Shipping>
              <p>
                <SiPointy></SiPointy>Shipping
              </p>
              <div> {order.name}</div>
              <div> {order.address}</div>
            </Shipping>

            <Billing>
              <p>
                <AiFillCreditCard></AiFillCreditCard>Biling Details
              </p>
              <div> {order.name}</div>
              <div> {order.address}</div>
            </Billing>

            <Method>
              <p>
                <RiTruckLine></RiTruckLine> Shipping Method
              </p>
              {order.shipping}
            </Method>
          </WrapperTwo>
          {/* Stretch  */}
          {/* <WrapperThree>
            <OrderList>
              <h1>Order List</h1>
              <p>:Items here"</p>
            </OrderList>

            <OrderSummary>
              <h1>Order Summary</h1>
              <p>Subtotal:</p>
              <p>Shipping & Handling:</p>
              <p>Est Sales Tax:</p>
              <h2>Total "total here"</h2>
            </OrderSummary>
          </WrapperThree> */}
        </Wrapper>
      ) : (
        "loading"
      )}
      ;
    </>
  );
};

// WRAPPER OF WHOLE PAGE DETAILS
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 70vh;
`;

//WRAPPER OF MID LEVEL DETAILS -----> SHIPPING, BILLING, SHIPPING METHOD
const WrapperTwo = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

//WRAPPER OF BOTTOM LEVEL DETAILS ----> ORDER LIST, ORDER SUMMARY
const WrapperThree = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

//THANK YOU STYLED
const Thank = styled.h1`
  font-size: 40px;
`;

//ORDER NUMBER
const OrderNumber = styled.p`
  font-size: 20px;
  margin-bottom: 5px;
`;

//CONFIRMATION OF ORDER
const Confirm = styled.p`
  margin-top: 12px;
  font-size: 15px;
  width: 400px;
  margin-bottom: 5px;
`;

//TIME AND DATE OF ORDER
const Time = styled.p`
  font-size: 12px;
  margin-bottom: 20px;
`;

//SHIPPING DETAILS
const Shipping = styled.div`
  padding-top: 10px;
  font-size: 12px;
  border: 2px solid gray;
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

//BILLING DETAILS
const Billing = styled.div`
  padding-top: 10px;
  font-size: 12px;
  border: 2px solid gray;
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

//SHIPPING METHOD
const Method = styled.div`
  padding-top: 10px;
  font-size: 12px;
  border: 2px solid gray;
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

//ITEMS ORDERED/PURCHASED
const OrderList = styled.div`
  border: 2px solid gray;
  width: 300px;
`;

//TOTAL SUMARRY OF HOW MUCH IT COSTS.
const OrderSummary = styled.div`
  width: 150px;
  border: 2px solid gray;
`;

export default Confirmation;
