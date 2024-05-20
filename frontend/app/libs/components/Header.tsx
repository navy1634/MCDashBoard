import style from '@/styles/style.module.scss';

function Header() {
  return (
    <div>
      <header className={style.header_wrapper}>
        <div className='header'>
          <img alt='ヘッダー' />
          <div>
            <ul>
              <li>
                <a href='/'>aaa</a>
              </li>
              <li>
                <a href='/'>bbb</a>
              </li>
              <li>
                <a href='/'>ccc</a>
              </li>
            </ul>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <a href='/dashboard'>1111</a>
            </li>
            <li>
              <a href='/'>1111</a>
            </li>
            <li>
              <a href='/'>1111</a>
            </li>
            <li>
              <a href='/'>1111</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
