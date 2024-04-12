// import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
// import Signin from './components/auth/sign-in'
// import Signup from './components/auth/sign-up';
// import MeetingPage from './components/meeting';
// import Upcoming from './Pages/upcoming';
// import Previous from './Pages/previous';
// import Recordings from './Pages/Recordings';
// import PersonalRoom from './Pages/personal-room';
// import Home from './Pages/Home';
// import Layout from './Pages/layout';

// function App() {
//   const router = createBrowserRouter([
//     {
//       path:"/",
//       element : <Layout/>,
//       children: [
//         {
//           index:true,
//           element: <Home/>,
//         },
//         {
//           path:"/upcoming",
//           element: <Upcoming/>,
//         },
//         {
//           path:"/previous",
//           element: <Previous/>,
//         },
//         {
//           path:"/recordings",
//           element: <Recordings/>,
//         },
//         {
//           path:"/personal-room",
//           element: <PersonalRoom/>,
//         },
//       ]
//     },
//     {
//       path:"/signin",
//       element: <Signin/>
//     },
//     {
//       path:"/signup",
//       element: <Signup/>
//     },
//     {
//       path:"/meeting/:id",
//       element: <MeetingPage/>
//     },
//   ])
//   return (
//     <RouterProvider router={router}/>
//   );
// }
// export default App;

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Signin from "./components/auth/sign-in";
import Signup from "./components/auth/sign-up";
import MeetingPage from "./components/meeting";
import Upcoming from "./Pages/upcoming";
import Previous from "./Pages/previous";
import Recordings from "./Pages/Recordings";
import PersonalRoom from "./Pages/personal-room";
import Home from "./Pages/Home";
import Layout from "./Pages/layout";
import StreamVideoProvider from "./providers/StreamClientProvider";

function App() {
  return (
    // <div>
    //   <StreamVideoProvider>
    //     <Router>
    //       <Routes>
    //         <Layout>
    //           <Route>
    //             <Route index element={<Home />} />
    //             <Route path="upcoming" element={<Upcoming />} />
    //             <Route path="previous" element={<Previous />} />
    //             <Route path="recordings" element={<Recordings />} />
    //             <Route path="personal-room" element={<PersonalRoom />} />
    //           </Route>
    //         </Layout>
    //         <Route path="signin" element={<Signin />} />
    //         <Route path="signup" element={<Signup />} />
    //         <Route path="meeting/:id" element={<MeetingPage />} />
    //       </Routes>
    //     </Router>
    //   </StreamVideoProvider>
    // </div>
    <Router>
      {/* <StreamVideoProvider> */}
      {/* <Layout> */}
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="upcoming" element={<Upcoming />} />
            <Route path="previous" element={<Previous />} />
            <Route path="recordings" element={<Recordings />} />
            <Route path="personal-room" element={<PersonalRoom />} />
          </Route>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      {/* </Layout>/ */}
      {/* </StreamVideoProvider> */}
    </Router>
  );
}

export default App;
