import { Header } from "../../component/header/header";
import { LeftSidebar } from "../../component/left-sidebar/leftSidebar";
import { LabelDisplayCard } from "../../component/page-container/LabelDisplayCard";
import { useSidebarConext } from "../../context/sidebar-context";
const LabelPage = () => {
  const { theme } = useSidebarConext();
  return (
    <div className={`${theme}`}>
      <Header />
      <div className="main-content">
        <LeftSidebar />
        <LabelDisplayCard />
      </div>
    </div>
  );
};
export { LabelPage };
