import { Fragment } from "react";
import Preloader from "./components/Preloader";
// import DPNavbar from "./components/DPNavbar";
import Outlets from "./components/Outlets/Outlets";
import HistoryTimeline from "./components/History/HistortTimeline";
// import OrderOnline from "./components/OrderOnline/OrderOnline";
import MenuGallary from "./components/MenuGallary";
// import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Preloader />
      {/* <DPNavbar /> */}
      <Outlets />
      <HistoryTimeline />
      {/* <OrderOnline /> */}
      <MenuGallary />
      {/* <Testimonials /> */}
      <Footer />
    </Fragment>
  );
}

export default App;
