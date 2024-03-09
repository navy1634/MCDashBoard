import axios from "axios";
import React from "react";
import "./App.css";


function App() {
  const url = "http://127.0.0.1:8000";
  const [data, setData] = React.useState();

  const getData = () => {
    axios.get(url).then((res) => {
      setData(res.data)
    });
  };

  return (
    <div className="App">
      {data ? <div>{data.Hello}</div> : <button onClick={getData}>データを取得</button>}
    </div>
  );
}

export default App;
