import Link from "next/link";
import { useRouter } from "next/router";

const DesktopNavigation = () => {
  const router = useRouter();
  
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Travel", path: "/travel/posts" },
    { name: "Food", path: "/food/posts" },
    { name: "Recital", path: "/recital" },
  ];

  const socialLinks = [
    { icon: "fa-brands fa-facebook-f", url: "https://www.facebook.com/profile.php?id=100000764741703" },
    { icon: "fa-brands fa-instagram", url: "https://www.instagram.com/eilrahc.c_/" },
    { icon: "fa-brands fa-linkedin-in", url: "https://www.linkedin.com/in/charlie-lin-0a424b117/" },
    { icon: "fa-brands fa-github", url: "https://github.com/charlielinz" },
  ];

  return (
    <div className="flex items-center gap-12">
      <ul className="flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = router.asPath.startsWith(link.path) || (link.path === "/travel/posts" && router.asPath.includes("/travel")) || (link.path === "/food/posts" && router.asPath.includes("/food"));
          return (
            <li key={link.name}>
              <Link 
                href={link.path}
                className={`text-sm tracking-wider uppercase transition-colors duration-300 relative group py-2
                    ${isActive ? "text-amber-600 font-medium" : "text-stone-500 hover:text-stone-900"}`}
              >
                 {link.name}
                 <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-amber-600 transform origin-left transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="w-[1px] h-6 bg-stone-300"></div>

      <ul className="flex gap-6">
        {socialLinks.map((social, idx) => (
            <li key={idx}>
                <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-stone-400 hover:text-amber-600 transition-colors duration-300"
                >
                    <i className={`${social.icon} text-lg`}></i>
                </a>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopNavigation;
