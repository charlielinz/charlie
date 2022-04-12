import Head from "next/head";
import PostCard from "../../components/PostCard";
import { travelPosts } from "../../posts/posts";

const Posts = ({ postDatas }) => {
  return (
    <>
      <Head>
        <title>Travel Posts</title>
        <meta name="title" content="This is Charlie Lin"></meta>
        <meta name="author" content="Charlie Lin"></meta>
        <meta name="og:title" content="This is Charlie Lin"></meta>
        <meta name="og:author" content="Charlie Lin"></meta>
      </Head>
      <div className="grid lg:grid-cols-2 gap-10 py-16 max-w-screen-xl mx-6 md:mx-auto md:px-6">
        {postDatas.map((postData, index) => (
          <PostCard postData={postData} key={index} />
        ))}
      </div>
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

export default Posts;
