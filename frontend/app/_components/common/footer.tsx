import style from "@/public/css/style.module.scss";
import Link from "next/link";

function Footer() {
  return (
    <footer className={style.footer_wrapper}>
      <p>フッター</p>
      <div>
        <ul key={"links"}>
          <li>
            <Link href={{ pathname: "/" }}>aaa</Link>
          </li>
          <li>
            <Link href={{ pathname: "/" }}>bbb</Link>
          </li>
          <li>
            <Link href={{ pathname: "/" }}>ccc</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
