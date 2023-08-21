import { useParams } from "react-router-dom";

const BucketContent = () => {
  const params = useParams();
  return (
    <>
      <h1>콘텐츠 보기</h1>
      <p>{params.id}</p>
    </>
  );
};
export default BucketContent;
