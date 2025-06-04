import Picture from "./components/Picture/Picture";
import Text from "./components/Text/Text";
import "./clock.css";
import "./window.css";
import "./desktop.css";
export default function App() {
  return (
    <>
      <Picture id={"dial"} src={"dial.svg"} width={100} className={"clock"}>
        <Picture id={"arrow_big"} src={"arrow.svg"} width={100}/>
        <Picture id={"arrow"} src={"arrow.svg"} width={100}/>
      </Picture>
      <Picture id={"window"} src={"window.svg"} width={200} className={"outside"}>
        <Picture id={"window_ground"} src={"window_ground.svg"} width={200}></Picture>
        <Picture id={"bush"} src={"bush.svg"} width={200}></Picture>
      </Picture>
      <Text>
        COMING SOON
      </Text>
      <Picture id={"table"} src={"table.svg"} width={320} className={"desktop"}>
        <Picture id={"laptop"} src={"laptop.svg"} width={150}/>
        <Picture id={"calculator"} src={"calculator.svg"} width={60}/>
      </Picture>
    </>
  );  
}