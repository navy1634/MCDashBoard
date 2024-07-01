'use client';

function samplePage() {
  const getHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3032/api/check', { method: 'GET' });
    const rest = await res.json();
    console.log(rest);
  };

  const postHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const res = await fetch('/api/libs/DashBoard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'Hello' }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <div>
        <a>sample</a>
        <button onClick={getHandler}>GET</button>
        <button onClick={postHandler}>POST</button>
        {/* <PlayerPage players={players}></PlayerPage> */}
      </div>
    </>
  );
}
export default samplePage;
