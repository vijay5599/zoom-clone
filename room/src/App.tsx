import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import Signin from "./components/auth/sign-in";
import Signup from "./components/auth/sign-up";
import MeetingPage from "./components/meeting";
import Upcoming from "./Pages/upcoming";
import Previous from "./Pages/previous";
import Recordings from "./Pages/Recordings";
import PersonalRoom from "./Pages/personal-room";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StreamVideoProvider from "./providers/StreamClientProvider";

function NavigationWrapper() {
  const location = useLocation();
  const [hideNavbarAndSidebar, setHideNavbarAndSidebar] = useState(false);

  // Update hideNavbarAndSidebar based on the current location
  React.useEffect(() => {
    setHideNavbarAndSidebar(
      location.pathname.includes("/meeting/") ||
        location.pathname === "/signin" ||
        location.pathname === "/signup"
    );
  }, [location.pathname]);

  return (
    <div className="flex bg-dark-4">
      {!hideNavbarAndSidebar && (
        <>
          <Navbar />
          <Sidebar />
        </>
      )}
      <div className="mt-20 ml-4 w-[80%] overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="previous" element={<Previous />} />
          <Route path="/meeting/:id" element={<MeetingPage />} />
          <Route path="/personal-room" element={<PersonalRoom />} />
          <Route path="/recordings" element={<Recordings />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <StreamVideoProvider>
        <NavigationWrapper />
      </StreamVideoProvider>
    </BrowserRouter>
  );
}

export default App;
