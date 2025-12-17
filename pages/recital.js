import Head from "next/head";
import { motion } from "framer-motion";

const Recitals = () => {
  const recitalDatas = Object.values(recitalInfos).sort((a, b) => new Date(b.date) - new Date(a.date));
  
  return (
    <>
      <Head>
        <title>Recitals | Charlie Lin</title>
      </Head>
      <div className="bg-stone-900 min-h-screen text-stone-50 pb-20 pt-32 md:pt-48 relative overflow-hidden">
        {/* Noise Texture */}
        <div 
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>

        <div className="max-w-screen-xl mx-auto px-6 md:px-20 relative z-10">
            <h1 className="font-serif text-6xl md:text-8xl leading-none mb-20">
                Performance <br/>
                <span className="italic text-amber-600 ml-12 md:ml-24">Archive</span>
            </h1>

            <div className="border-l border-stone-800 ml-0 md:ml-12 pl-8 md:pl-20 space-y-20">
                {recitalDatas.map((recital, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="relative"
                    >
                        <div className="absolute -left-[41px] md:-left-[89px] top-2 w-5 h-5 bg-stone-900 border-2 border-amber-600 rounded-full z-10"></div>
                        
                        <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-6">
                             <span className="font-mono text-amber-500 text-sm tracking-widest">{recital.date}</span>
                             <h2 className="text-3xl md:text-4xl font-serif">{recital.title}</h2>
                        </div>

                        <div className="bg-stone-800/50 p-8 rounded-sm backdrop-blur-sm border border-stone-800 hover:border-amber-900/50 transition-colors">
                            <h3 className="text-stone-400 font-serif italic mb-6">Program</h3>
                            <ul className="space-y-4">
                                {recital.program.map((prog, idx) => (
                                    <li key={idx} className="group flex items-start justify-between gap-4">
                                        <span className="text-stone-300 font-light group-hover:text-amber-500 transition-colors">{prog.slug}</span>
                                        <a 
                                            href={prog.url} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-stone-700 text-stone-400 group-hover:bg-amber-600 group-hover:text-stone-900 transition-all"
                                        >
                                            <i className="fa-solid fa-play text-xs pl-0.5"></i>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </>
  );
};

const recitalInfos = {
  "Piano Solo Recital": {
    title: "Piano Solo Recital",
    date: "2019-06-14",
    program: [
      {
        slug: "Bach: Prelude and Fugue in C major, BWV 870, from The Well Tempered Clavier Book II",
        url: "https://www.youtube.com/watch?v=FxwB1xpeN5k",
      },
      {
        slug: "Beethoven: Piano Sonata in A-flat Major, Op.26",
        url: "https://www.youtube.com/watch?v=ziTu5MGuFMQ",
      },
      {
        slug: "Rachmaninoff: Morceaux de fantaisie, Op.3",
        url: "https://www.youtube.com/watch?v=ZH58ImCTOtI",
      },
      {
        slug: "Schulhoff: Suite Dansante En Jazz, WV.98",
        url: "https://www.youtube.com/watch?v=TjekmPU6_-g",
      },
    ],
  },
  "Chamber Music Recital 1": {
    title: "Chamber Music Recital",
    date: "2018-06-23",
    program: [
      {
        slug: "F. Poulenc-Trio for Oboe, Bassoon and Piano, FP 43",
        url: "https://www.youtube.com/watch?v=8tC-ixacUms",
      },
      {
        slug: "J. Francaix-Trio for Oboe, Bassoon and Piano",
        url: "https://www.youtube.com/watch?v=CnvZ8QWQUpQ",
      },
      {
        slug: "A. Previn-Trio for Oboe, Bassoon and Piano",
        url: "https://www.youtube.com/watch?v=gs9OqtcCQ3Q",
      },
    ],
  },
  "Chamber Music Recital 2": {
    title: "Chamber Music Recital",
    date: "2018-06-03",
    program: [
      {
        slug: "F. Schimitt- Sonatine en Trio for Flute, Clarinet and Piano, op 85",
        url: "https://www.youtube.com/watch?v=q2f3EAjZr2A",
      },
      {
        slug: "C. Debussy-Prelude to 'Afternoon of of a Faun' for Flute, Clarinet and Piano",
        url: "https://www.youtube.com/watch?v=ifm3uDmyMQo",
      },
      {
        slug: "E. Bloch- Concertino for Flute, Clarinet and Piano",
        url: "https://www.youtube.com/watch?v=RyrPahDjhpw",
      },
      {
        slug: "B. Rossignal- Suite for Flute, Clarinet and Piano",
        url: "https://www.youtube.com/watch?v=B3vYgVczn-U",
      },
      {
        slug: "M. Emmanuel- Sonata for Flute, Clarinet and Piano, op 11",
        url: "https://www.youtube.com/watch?v=F7_M9S9-3Is",
      },
    ],
  },
};

export default Recitals;
