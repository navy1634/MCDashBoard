import connectDatabase from './api/db';

export async function getServerSideProps() {
  const db = await connectDatabase();
  const data = await db.all('SELECT * FROM goods');
  return {
    props: { data },
  };
}

function TableForm(props: any) {
  
  return (
    <div>
      <table>
        <tr>
          <td>監視先URL</td>
          <td id='URL'>URL</td>
        </tr>
        <tr>
          <td>PORT番号</td>
          <td id='PORT'></td>
        </tr>
        <tr>
          <td>ping</td>
          <td id='ping'></td>
        </tr>
      </table>
    </div>
  );
}

export default TableForm;
