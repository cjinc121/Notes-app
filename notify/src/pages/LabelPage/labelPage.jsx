import { Header } from "../../component/header/header";
import { LeftSidebar } from "../../component/left-sidebar/leftSidebar";
import { LabelDisplayCard } from "../../component/page-container/LabelDisplayCard";
const LabelPage = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <LeftSidebar />
        <LabelDisplayCard />
      </div>
    </>
  );
};
export { LabelPage };
