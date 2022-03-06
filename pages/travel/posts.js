import Navbar from "../../components/Navbar";
import { travelPosts } from "../../postdata";

const posts = ({ postInfos }) => {
  const postDatas = Object.values(postInfos);
  return (
    <>
      <Navbar />
      {postDatas.map((postData, index) => (
        <div className="text-5xl h-32" key={index}>
          <div>{postData.title}</div>
          <div>{postData.travel_date}</div>
        </div>
      ))}
    </>
  );
};

export const getStaticProps = async () => {
  const postInfos = travelPosts;
  return {
    props: { postInfos },
  };
};

export default posts;
