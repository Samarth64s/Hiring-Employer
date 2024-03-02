// import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "./../components/Sidebar";
const Layout = ({ children }) => {
  return (
    <>
      <div className="flex h-screen">
        <div className="flex w-1/6 p-4 bg-black">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col bg-slate-100">
          <Header />
          <main>{children}</main>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default Layout;
