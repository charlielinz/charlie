import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PostList from "../../components/PostList";
import { foodPosts } from "../../posts/posts";

const posts = ({ postDatas }) => {
  return (
    <>
      <Navbar />
      <PostList postDatas={postDatas} />
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const postInfos = foodPosts;
  const postDatas = Object.values(postInfos);
  return {
    props: { postDatas },
  };
};

export default posts;
