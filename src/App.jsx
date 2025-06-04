import Picture from "./components/Picture/Picture";

export default function App() {
  return (
    <>
      <Picture id={"dial"} src={"dial.svg"} width={100}>
        <Picture id={"arrow"} src={"arrow.svg"} width={100}/>
      </Picture>
    </>
  );
}