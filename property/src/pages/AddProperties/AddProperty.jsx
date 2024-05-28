import AddPropertyData from "../../components/AddPropertyData.jsx/AddPropertyData";
import Footer from "../../components/Footer/Footer";
import MainHeader from "../../components/Header/Header";

const AddProperty = () => {
  return (
    <>
      <MainHeader />
      <main className="px-20">
        <AddPropertyData />
      </main>
      <footer className="bg-[#efecf3] xl:px-20 xl:py-16 px-8 py-16">
        <Footer />
      </footer>
    </>
  );
};

export default AddProperty;
