import Image from "next/image";
import Link from "next/link";

const PostList = ({ postDatas, imageSize }) => {
  return (
    <>
      {postDatas.map((postData, index) => (
        <div className="border-t-2 border-t-slate-200" key={index}>
          <div className="flex gap-4 py-4 md:px-4">
            <div className="flex shrink-0">
              <Image
                src={postData.cover_image}
                alt="cover-image"
                width={imageSize.width}
                height={imageSize.height}
                className="rounded-lg"
              />
            </div>
            <div className="flex w-1/2 flex-col gap-1">
              <div className="text-lg md:text-2xl">{postData.title}</div>
              <div className="text-sm text-gray-500">{postData.date}</div>
              <div className="mt-auto">
                <i className="fa-solid fa-credit-card text-black mr-3"></i>
                {postData.price.average}
              </div>
              <iframe
                className="mt-4 hidden h-3/5 w-full md:block"
                frameBorder="0"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAbFmwpMXyGVjJCkgEHk1J_8hqJ9cvO-Z8&q=${postData.title}&zoom=13`}
                allowFullScreen
              ></iframe>
            </div>
            <div className="ml-auto flex flex-col justify-between">
              <div className="flex items-center gap-1 self-end">
                <i className="fa-solid fa-star text-lg text-amber-400" />
                <div className="text-lg">{postData.rate}</div>
              </div>
              <div className="text-sm md:text-lg rounded-md bg-slate-200 px-4 py-1 text-center text-amber-700 duration-200 hover:bg-slate-700 hover:text-amber-400">
                <Link href={`/food/posts/${postData.slug}`}>
                  details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostList;
