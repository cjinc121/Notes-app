import { Header } from "../../component/header/header";
import { LeftSidebar } from "../../component/left-sidebar/leftSidebar";
import { TrashDisplayCard } from "../../component/page-container/TrashDisplayCard";
import { useSidebarConext } from "../../context/sidebar-context";
const TrashPage = () => {
  const { theme } = useSidebarConext();

  return (
    <div className={`${theme}`}>
      <Header />
      <div className="main-content">
        <LeftSidebar />
        <TrashDisplayCard />
      </div>
    </div>
  );
};
export { TrashPage };
