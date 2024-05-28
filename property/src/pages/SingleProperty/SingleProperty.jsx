import Footer from "../../components/Footer/Footer";
import MainHeader from "../../components/Header/Header";
import Single from "../../components/Single/Single";

const SingleProperty = () => {
  return (
    <>
      <MainHeader />
      <main className="xl:px-20 lg:px-20 md:px-8 px-5">
        <Single />
      </main>
      <footer className="bg-[#efecf3] xl:px-20 xl:py-16 px-8 py-16">
        <Footer />
      </footer>
    </>
  );
};

export default SingleProperty;
