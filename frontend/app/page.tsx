import RootLayout from '@/app/libs/components/layout';
import style from '@/styles/style.module.scss';

function HomePageIndex() {
  return (
    <RootLayout>
      <h1 className={style.title}>Start Your MineCraft</h1>
    </RootLayout>
  );
}

export default HomePageIndex;
