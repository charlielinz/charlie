import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Recitals = () => {
  const recitalDatas = Object.values(recitalInfos);
  return (
    <>
      <Head>
        <title>Recital</title>
        <meta name="title" content="This is Charlie Lin"></meta>
        <meta name="author" content="Charlie Lin"></meta>
        <meta name="og:title" content="This is Charlie Lin"></meta>
        <meta name="og:author" content="Charlie Lin"></meta>
      </Head>
      <div className="sticky top-0 z-50 w-full bg-gray-50 md:opacity-95">
        <Navbar />
      </div>
      <div className="flex flex-col max-w-screen-xl mx-auto px-6 py-12">
        {recitalDatas.map((recitalData, index) => (
          <div key={index}>
            <p className="max-w-fit bg-slate-900 text-gray-50 text-2xl md:space-x-4 px-6 py-2 flex flex-col md:block">
              <span className="space-x-2">
                <i className="fa-solid fa-circle-play text-amber-500" />
                <span>{recitalData.date}</span>
              </span>
              <span>{recitalData.title}</span>
            </p>
            <div className="flex flex-col gap-2 bg-slate-100 w-full md:w-3/4 border-t-2 border-r-2 border-b-2 border-slate-900 py-8 px-6">
              <p className="text-xl text-bold pb-4">Programs:</p>
              {recitalData.program.map((program, index) => (
                <a
                  href={program.url}
                  className="hover:text-amber-900"
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                >
                  {program.slug}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
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
