import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import MainLayout from "../Components/Static/MainLayout";

// Lazy-loaded components
const Home = lazy(() => import("../Index"));
const Birthday = lazy(() => import("../Main/Search_Files/Birthday"));
const Flowers = lazy(() => import("../Main/Search_Files/Flowers"));
const Relations = lazy(() => import("../Main/Search_Files/Relations"));
const Cakes = lazy(() => import("../Main/Search_Files/Cakes"));
const Occasions = lazy(() => import("../Main/Search_Files/Occasions"));
const Plants = lazy(() => import("../Main/Search_Files/Plants"));
const Themes = lazy(() => import("../Main/Search_Files/Themes"));

// For special Categories
const NewArrivals = lazy(() => import("../Main/SpecialCategories/NewArrivals"));
const BestSellers = lazy(() => import("../Main/SpecialCategories/BestSellers"));
const PersonalizeGifts = lazy(() => import("../Main/SpecialCategories/PersonalizeGifts"));
const Deals = lazy(() => import("../Main/SpecialCategories/Deals"));

//  for account settings
const Profile = lazy(() => import("../Components/Account/Profile"));
const Orders = lazy(() => import("../Components/Account/Orders"));
const Cart = lazy(() => import("../Components/Account/Cart"));
const Wishlist = lazy(() => import("../Components/Account/Wishlist"));

// Dynamic Routes needed
const ProductDescription = lazy(() => import("../Components/Product_Description/Product_Description"));





const loaderStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <div style={loaderStyle}>
          <ClipLoader color="#36d7b7" size={50} />
        </div>
      }
    >      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Routes with Navbar and Footer */}
          <Route index element={<Home />} /> {/* Default route */}

          {/* Define other routes */}
          <Route path="/Birthday" element={<Birthday />} />
          <Route path="/Flowers" element={<Flowers />} />
          <Route path="/Relations" element={<Relations />} />
          <Route path="/Cakes" element={<Cakes />} />
          <Route path="/Occasions" element={<Occasions />} />
          <Route path="/Plants" element={<Plants />} />
          <Route path="/Themes" element={<Themes />} />

          {/* For special Categories*/}
          <Route path="/NewArrivals" element={<NewArrivals />} />
          <Route path="/BestSellers" element={<BestSellers />} />
          <Route path="/PersonalizeGifts" element={<PersonalizeGifts />} />
          <Route path="/Deals" element={<Deals />} />

          {/* For account settings*/}
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Wishlist" element={<Wishlist />} />


          {/* Product Description */}
          <Route path="/:id/:title" element={<ProductDescription />} />

          {/* Optionally, you can redirect undefined routes back to Home or a 404 page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
