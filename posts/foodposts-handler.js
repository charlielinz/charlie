const BlockQuate = ({ children }) => {
  return (
    <blockquote className="my-2 border-l-8 pl-4 text-lg text-gray-600">
      {children}
    </blockquote>
  );
};
const H1 = ({ children }) => {
  return <h1 className="py-2 text-2xl">{children}</h1>;
};
const H2 = ({ children }) => {
  return (
    <h2 className="my-2 border-l-4 border-amber-500 bg-slate-200 py-1 pl-4 text-lg text-gray-700">
      {children}
    </h2>
  );
};
const P = ({ children }) => {
  return <p className="py-2">{children}</p>;
};
const A = ({ children, href }) => {
  return (
    <a
      className="transform font-extrabold duration-300 hover:text-opacity-70"
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
};

export const components = {
  blockquote: BlockQuate,
  h1: H1,
  h2: H2,
  p: P,
  a: A,
};
