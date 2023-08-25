import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  & div {
    width: 100%;
    display: flex;

    & h1 {
      color: rgb(255, 90, 90);
      text-shadow: 1px 1px 1px black;
    }
  }
`;

const BucketIndex = () => {
  return (
    <Container>
      <div>
        <h1>나의 버킷 리스트</h1>
      </div>
    </Container>
  );
};

export default BucketIndex;
