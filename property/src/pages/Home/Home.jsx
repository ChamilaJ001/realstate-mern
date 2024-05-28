import AddedToday from "../../components/AddedToday/AddedToday";
import Footer from "../../components/Footer/Footer";
import MainHeader from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import PropertyCardByCity from "../../components/PropertyCardByCity/PropertyCardByCity";
import PropertyTypesCard from "../../components/PropertyTypesCard/PropertyTypesCard";
import TopOffers from "../../components/TopOffers/TopOffers";

const Home = () => {
  return (
    <>
      <MainHeader />
      <main className="xl:px-20 lg:px-20 md:px-8 px-5">
        <Hero />
        <PropertyTypesCard />
        <TopOffers />
        <AddedToday />
        <PropertyCardByCity />
      </main>
      <footer className="bg-[#efecf3] xl:px-20 xl:py-16 px-8 py-16">
        <Footer />
      </footer>
    </>
  );
};

export default Home;
