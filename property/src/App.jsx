import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddProperty from "./pages/AddProperties/AddProperty";
import PropertyForRent from "./pages/PropertyForRent/PropertyForRent";
import SingleProperty from "./pages/SingleProperty/SingleProperty";
import Account from "./pages/Account/Account";
import Wishlist from "./components/AccountInfo/Wishlist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-property" element={<AddProperty />} />
      <Route path="/property-for-rent" element={<PropertyForRent />} />
      <Route path="/properties/:id" element={<SingleProperty />} />
      <Route path="/account" element={<Account />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
}

export default App;
