
function TableForm() {
  return (
    <>
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
    </>
  );
}

export default TableForm;
