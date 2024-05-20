import Footer from './Footer';
import Header from './Header';

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Header />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
}
export default RootLayout;
