import logo from './logo.svg';
import './App.css';

function App() {
  let myData = "안녕1111안녕1111안녕1111";
  function testData() {
    return 100
  }
  return (
    <>
      {myData} <br />
      <img src={logo} />
      {testData()}
    </>
  );
}

export default App;
