import React from "react";

interface Client {
  name: string;
  adress: string;
  phone: string;
  product: string;
}

function Order(props: Client) {
  // props;
  return (
    <div>
      <h1>Hello from first component</h1>
      {props.name}
      {props.adress}
      {props.phone}
      {props.product}
    </div>
  );
}

export default Order;
