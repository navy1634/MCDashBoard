import { useEffect, useRef, useState } from 'react';

export function commandForm() {
  const commands = { 'time': { '': '' }, '': { '': '' }, '': { '': '' }, '': { '': '' } };

  const command_ref = useRef(null);
  const props1_ref = useRef(null);
  const props2_ref = useRef(null);

  const [command, setCommand] = useState();
  const [props1, setProps1] = useState();
  const [props2, setProps2] = useState();

  const setMainCommand = () => {
    for (let com in Object.keys(commands)) {
      const option = document.createElement('option');
      option.value = `${com}`;
      option.text = `${com}`;
      command_ref.appendChild(option);
    }
  };
  const setProps = () => {
    for (let p in Object.values(commands['1'])) {
      const option = document.createElement('option');
      option.value = `${p}`;
      option.text = `${p}`;
      props1_ref.current.appendChild(option);
    }
  };
  const setSubProps = () => {
    for (let p in Object.values(commands['2'])) {
      const option = document.createElement('option');
      option.value = `${p}`;
      option.text = `${p}`;
      props2_ref.current.appendChild(option);
    }
  };

  const selectCommand = (e: any) => {
    setCommand(e.target.value);
  };

  const selectProps1 = (e: any) => {
    setProps1(e.target.value);
  };

  const selectProps2 = (e: any) => {
    setProps2(e.target.value);
  };

  useEffect(() => {
    setMainCommand();
    setProps();
    setSubProps();
  }, []);

  return (
    <div>
      <p>コマンド</p>
      <label>
        <select ref={command_ref} value={command} onChange={selectCommand}></select>年
      </label>
      <label>
        <select ref={props1_ref} value={props1} onChange={selectProps1}></select>月
      </label>
      <label>
        <select ref={props2_ref} value={props2} onChange={selectProps2}></select>日
      </label>
    </div>
  );
}
