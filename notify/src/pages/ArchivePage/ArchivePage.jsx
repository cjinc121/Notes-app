import { Header } from "../../component/header/header";
import { LeftSidebar } from "../../component/left-sidebar/leftSidebar";
import { ArchiveDisplayCard } from "../../component/page-container/ArchiveDisplayCard";

const Archivepage = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <LeftSidebar />
        <ArchiveDisplayCard />
      </div>
    </>
  );
};
export { Archivepage };
