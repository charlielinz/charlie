const BlockQuote = ({ children }) => {
  return (
    <>
      <blockquote className="italic my-2 border-l-8 border-gray-300 pl-4 text-gray-600">
        {children}
      </blockquote>
    </>
  );
};

const P = ({ children }) => {
  return <p className="py-2 text-lg">{children}</p>;
};

const A = ({ children, href }) => {
  return <a className="font-extrabold transform duration-300 hover:text-opacity-70" href={href} target="_blank">{children}</a>
}

const Img = ({ src, title }) => {
  return (
    <>
      {title && <span className="text-base list-item list-inside pl-1 text-gray-700">{title}</span>}
      <img src={src} className="inline w-auto p-1 sm:h-72" />
    </>
  );
};

export const components = {
  blockquote: BlockQuote,
  p: P,
  img: Img,
  a: A
};
