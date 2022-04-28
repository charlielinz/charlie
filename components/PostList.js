import Image from "next/image";
import Link from "next/link";

const PostList = ({ postDatas, imageSize }) => {
  return (
    <>
      {postDatas.map((postData, index) => (
        <div
          className="border-t-2 border-t-slate-200"
          key={index}
        >
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
            <div className="flex flex-col gap-1 w-1/2">
              <div className="text-xl md:text-2xl">
                {postData.title}
              </div>
              <div className="text-sm text-gray-500">
                {postData.date}
              </div>
              <div className="mt-auto">{postData.price.average}</div>
              <iframe
                className="mt-4 hidden md:block w-full h-3/5"
                frameBorder="0"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAbFmwpMXyGVjJCkgEHk1J_8hqJ9cvO-Z8&q=${postData.title}`}
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col ml-auto justify-between">
              <div className="flex gap-1 self-end items-center">
                <i className="fa-solid fa-star text-lg text-amber-400" />
                <div className="text-lg">{postData.rate}</div>
              </div>
              <div className="bg-slate-200 text-amber-700 hover:bg-slate-700 hover:text-amber-400 duration-200 rounded-md text-center px-4 py-1">
                <Link href={`/food/posts/${postData.slug}`}>
                  <a>details</a>
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
