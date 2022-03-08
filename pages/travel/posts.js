import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PostCard from "../../components/PostCard";
import { travelPosts } from "../../posts/posts";

const posts = ({ postDatas }) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10 py-32 max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-6 md:mx-auto">
        {postDatas.map((postData, index) => (
          <PostCard postData={postData} key={index} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const postInfos = travelPosts;
  const postDatas = Object.values(postInfos);
  return {
    props: { postDatas },
  };
};

export default posts;
