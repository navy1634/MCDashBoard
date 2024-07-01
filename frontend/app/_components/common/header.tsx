import style from "@/public/css/style.module.scss";
import Link from "next/link";

function Header() {
  return (
    <header className={style.header_wrapper}>
      <div className={style.header}>
        <img alt="ヘッダー" />
        <div className={style.search}>
          <ul key={1}>
            <li>
              <Link className={style.nav_items} href={{ pathname: "/" }}>
                ログイン
              </Link>
            </li>
            <li>
              <Link className={style.nav_items} href={{ pathname: "/" }}>
                アカウント
              </Link>
            </li>
            <li>
              <Link className={style.nav_items} href={{ pathname: "/" }}>
                設定
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <nav>
        <ul key={"nav"}>
          <li>
            <Link className={style.nav_items} href={{ pathname: "/" }}>
              bbb
            </Link>
          </li>
          <li>
            <Link className={style.nav_items} href={{ pathname: "/" }}>
              bbb
            </Link>
          </li>
          <li>
            <Link className={style.nav_items} href={{ pathname: "/" }}>
              bbb
            </Link>
          </li>
          <li>
            <Link className={style.nav_items} href={{ pathname: "/" }}>
              bbb
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
