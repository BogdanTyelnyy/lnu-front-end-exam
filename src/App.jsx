import Picture from "./components/Picture/Picture";
import "./styles/clock.css";
import "./styles/window.css";
import "./styles/desktop.css";
import "./styles/sign.css";
export default function App() {
  return (
    <>
      <Picture id={"dial"} src={"dial.svg"} width={150} className={"clock"}>
        <Picture id={"arrow_big"} src={"arrow.svg"} width={150}/>
        <Picture id={"arrow"} src={"arrow.svg"} width={150}/>
      </Picture>
      <Picture id={"window"} src={"window.svg"} width={200} className={"outside"}>
        <Picture id={"window_ground"} src={"window_ground.svg"} width={200}></Picture>
        <Picture id={"bush"} src={"bush.svg"} width={200}></Picture>
      </Picture>
      <Picture id={"sign"} src={"sign.svg"} width={200}/>
      <Picture id={"table"} src={"table.svg"} width={320} className={"desktop"}>
        <Picture id={"laptop"} src={"laptop.svg"} width={150}/>
        <Picture id={"calculator"} src={"calculator.svg"} width={60}/>
      </Picture>
    </>
  );  
}