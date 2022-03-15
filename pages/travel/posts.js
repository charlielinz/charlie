import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PostCard from "../../components/PostCard";
import { travelPosts } from "../../posts/posts";

const posts = ({ postDatas }) => {
  return (
    <>
      <Navbar />
      <div className="grid lg:grid-cols-2 gap-10 py-16 max-w-screen-xl mx-6 md:mx-auto md:px-6">
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
