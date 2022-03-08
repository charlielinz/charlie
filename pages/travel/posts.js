import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PostCard from "../../components/PostCard";
import { travelPosts } from "../../posts/posts";

const posts = ({ postDatas }) => {
  return (
    <>
      <Navbar />
      <div className="grid lg:grid-cols-2 gap-10 py-32 max-w-screen-lg mx-6 md:mx-auto md:px-6">
        {postDatas.map((postData, index) => (
          <div className="" key={index}>
            <PostCard postData={postData} />
          </div>
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
