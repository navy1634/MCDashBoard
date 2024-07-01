import RootLayout from '@/app/_components/layouts';
import style from '@/public/css/style.module.scss';

function HomePageIndex() {
  return (
    <RootLayout>
      <h1 className={style.title}>Start Your MineCraft</h1>
    </RootLayout>
  );
}

export default HomePageIndex;
