import Head from "next/head";
import PostCard from "../../components/PostCard";
import { travelPosts } from "../../posts/posts";

const Posts = ({ postDatas }) => {
  return (
    <>
      <Head>
        <title>Travel Journals | Charlie Lin</title>
      </Head>
      <div className="bg-stone-50 min-h-screen pb-20 pt-32 md:pt-48 px-6 md:px-20">
        <div className="max-w-screen-2xl mx-auto">
            <div className="mb-20">
                <h1 className="font-serif text-6xl md:text-8xl text-stone-900 mb-6">
                    Travel <br/>
                    <span className="italic text-amber-600 ml-12 md:ml-24">Journals</span>
                </h1>
                <p className="text-xl font-light text-stone-500 max-w-lg ml-2 md:ml-26">
                    Curated stories from my journeys. Capturing the essence of places, people, and moments that define our world.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {postDatas.map((postData, index) => (
                <PostCard postData={postData} key={index} />
                ))}
            </div>
        </div>
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
