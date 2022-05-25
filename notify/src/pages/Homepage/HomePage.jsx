import "./HomePage.css";
import { LeftSidebar } from "../../component/left-sidebar/leftSidebar";
import { MainBody } from "../../component/main-body/mainBody";
import { Header } from "../../component/header/header";
import { useSidebarConext } from "../../context/sidebar-context";

const HomePage = () => {
  const { theme } = useSidebarConext();
  return (
    <div className={`home-page ${theme} `}>
      <Header />
      <div className="main-content">
        <LeftSidebar />
        <MainBody />
      </div>
    </div>
  );
};
export { HomePage };
