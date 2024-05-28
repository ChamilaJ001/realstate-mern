import AllProperties from "../../components/AllProperties/AllProperties";
import Footer from "../../components/Footer/Footer";
import MainHeader from "../../components/Header/Header";

const PropertyForRent = () => {
  return (
    <>
      <MainHeader />
      <main>
        <AllProperties />
      </main>
      <footer className="bg-[#efecf3] xl:px-20 xl:py-16 px-8 py-16">
        <Footer />
      </footer>
    </>
  );
};

export default PropertyForRent;
