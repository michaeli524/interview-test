import Example from "./test1";
import MyComponent from "./test2";

function App() {
  const data = [
    {
      id: "1",
      title: "title1",
      description: "des1",
    },
    {
      id: "2",
      title: "title2",
      description: "des2",
    },
    {
      id: "3",
      title: "title3",
      description: "des3",
    },
  ];
  return (
    <>
      <Example />
      <MyComponent data={data} />
    </>
  );
}

export default App;
