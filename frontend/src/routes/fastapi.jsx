import axios from 'axios';
import React from 'react';

function PraA() {
  const url = 'http://127.0.0.1:8000';
  const [data, setData] = React.useState();

  const getData = () => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  };

  return (
    <div className="PraA">
      {data ? (
        <div>{data.Hello}</div>
      ) : (
        // eslint-disable-next-line react/button-has-type
        <button onClick={getData}>データを取得</button>
      )}
    </div>
  );
}

export default PraA;
