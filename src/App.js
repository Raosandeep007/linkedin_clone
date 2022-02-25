import styled from "styled-components";
import { LeftSideComponents } from "./components/LeftSide/LeftSideComponent";
import PostComponent from "./components/Post/PostComponent";
import { RightSide } from "./components/RightSide/RightSide";

function App() {
  return (
    <div className="App">
      <Layout>
        <LeftSideComponents />
        <PostComponent />
        <RightSide />
      </Layout>
    </div>
  );
}

export default App;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside postcomponent rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  margin: 0px 0;
  padding: 3% 12%;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    padding: 5% 3%;
  }
`;
