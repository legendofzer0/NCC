import "./button.css";

const BUY_ITEM = () => {
  console.log("Hello world");
};

export default function BuyButton() {
  return <button onClick={BUY_ITEM}>Buy</button>;
}
