import "./HomePage.css";
import { LeftSidebar } from "../../component/left-sidebar/leftSidebar";
import { MainBody } from "../../component/main-body/mainBody";
import { Header } from "../../component/header/header";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <LeftSidebar />
        <MainBody />
      </div>
    </>
  );
};
export { HomePage };
