import Picture from "./components/Picture/Picture";
import "./clock.css";
import "./window.css";
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
    </>
  );  
}