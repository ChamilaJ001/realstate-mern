import AccountInfo from "../../components/AccountInfo/AccountInfo";
import Footer from "../../components/Footer/Footer";
import MainHeader from "../../components/Header/Header";

const Account = () => {
  return (
    <>
      <MainHeader />
      <main className="xl:px-20 lg:px-20 md:px-8 px-5">
        <AccountInfo />
      </main>
      <footer className="bg-[#efecf3] xl:px-20 xl:py-16 px-8 py-16">
        <Footer />
      </footer>
    </>
  );
};

export default Account;
