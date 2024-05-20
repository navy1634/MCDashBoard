import style from '@/styles/style.module.scss';

function Footer() {
  return (
    <div>
      <footer className={style.footer_wrapper}>
        <p>フッター</p>
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
      </footer>
    </div>
  );
}
export default Footer;
