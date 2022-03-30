const H1 = ({ children }) => {
  return <h1 className="text-2xl py-2">{children}</h1>;
};
const H2 = ({ children }) => {
  return (
    <h2 className="my-2 py-1 border-l-4 border-amber-500 pl-4 text-gray-700 bg-slate-200 text-lg">
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
      className="font-extrabold transform duration-300 hover:text-opacity-70"
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
};

export const components = {
  h1: H1,
  h2: H2,
  p: P,
  a: A,
};
