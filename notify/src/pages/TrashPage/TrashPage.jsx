import { Header } from "../../component/header/header";
import { LeftSidebar } from "../../component/left-sidebar/leftSidebar";
import { TrashDisplayCard } from "../../component/page-container/TrashDisplayCard";
const TrashPage = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <LeftSidebar />
        <TrashDisplayCard />
      </div>
    </>
  );
};
export { TrashPage };
