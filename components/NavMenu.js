import { motion } from "framer-motion";
import Link from "next/link";

const NavMenu = () => {
  const menuVariants = {
    initial: { clipPath: "circle(0% at 100% 0)" },
    animate: { 
        clipPath: "circle(150% at 100% 0)",
        transition: { type: "spring", stiffness: 40, damping: 15 }
    },
    exit: { 
        clipPath: "circle(0% at 100% 0)",
        transition: { type: "spring", stiffness: 40, damping: 15, delay: 0.1 }
    }
  };

  const linkVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({ 
        opacity: 1, 
        y: 0, 
        transition: { delay: 0.2 + (i * 0.1), duration: 0.4 } 
    }),
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

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
    <motion.div
      variants={menuVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 bg-stone-900 z-40 flex flex-col justify-center items-center"
    >
        <div className="flex flex-col items-center gap-8">
            {navLinks.map((link, i) => (
                <motion.div key={link.name} custom={i} variants={linkVariants}>
                    <Link 
                        href={link.path}
                        className="font-serif text-5xl text-stone-50 hover:text-amber-500 transition-colors"
                    >
                        {link.name}
                    </Link>
                </motion.div>
            ))}
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.6 } }}
            exit={{ opacity: 0 }}
            className="absolute bottom-20 flex gap-8"
        >
            {socialLinks.map((social, idx) => (
                <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-stone-400 hover:text-amber-500 transition-colors text-2xl"
                >
                    <i className={social.icon}></i>
                </a>
            ))}
        </motion.div>
    </motion.div>
  );
};

export default NavMenu;
