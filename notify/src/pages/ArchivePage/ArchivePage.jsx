import { Header } from "../../component/header/header";
import { LeftSidebar } from "../../component/left-sidebar/leftSidebar";
import { ArchiveDisplayCard } from "../../component/page-container/ArchiveDisplayCard";
import { useSidebarConext } from "../../context/sidebar-context";

const Archivepage = () => {
  const { theme } = useSidebarConext();

  return (
    <div className={`${theme}`}>
      <Header />
      <div className="main-content">
        <LeftSidebar />
        <ArchiveDisplayCard />
      </div>
    </div>
  );
};
export { Archivepage };
