import React from "react";
import styled from "styled-components";
import { AddPost } from "./AddPost/AddPost";
import ShowPost from "./ShowPost/ShowPost";
function PostComponent() {
  return (
    <Container>
      <AddPost />
      <ShowPost />
    </Container>
  );
}

const Container = styled.div`
  grid-area: postcomponent;
`;

export default PostComponent;
