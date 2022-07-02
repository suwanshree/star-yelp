import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate } from "./store/session";
import NavBar from "./components/Navigation/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Listings from "./components/Listings";
import SplashPage from "./components/SplashPage";
import SingleListing from "./components/SingleListing";
import SearchResults from "./components/SearchResults";
import Profile from "./components/Profile";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <ProtectedRoute path="/listings" exact={true}>
          <Listings />
        </ProtectedRoute>
        <ProtectedRoute path="/results" exact={true}>
          <SearchResults />
        </ProtectedRoute>
        <ProtectedRoute path="/profile" exact={true}>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path="/listings/:listingId">
          <SingleListing />
        </ProtectedRoute>
        <Route path="/">
          <SplashPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
