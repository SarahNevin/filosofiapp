import Navigation from "../components/Navigation";
import ScreenHeader from "../components/ScreenHeader";
import ScrollableSlider from "../components/ScrollableSlider";
import LessonCard from "../components/LessonCard";
import platonHule from "../assets/images/platons-hule.webp";
import oplevFortaellingen from "../assets/images/oplev-fortaellingen.png";
import testDinForstaelse from "../assets/images/test-din-forstaelse.png";
import klassequiz from "../assets/images/klassequiz.png";
import taenkSammen from "../assets/images/taenk-sammen.png";
import Guidetekst from "../components/Guidetekst";

export default function EmneView() {
  const lessons = [
    {
      title: "Oplev fortællingen",
      image: oplevFortaellingen,
      link: "/historie",
    },

    {
      title: "Test din forståelse",
      image: testDinForstaelse,
      link: "/quiz",
    },

    {
      title: "Quiz i klassen",
      image: klassequiz,
    },

    {
      title: "Tænk sammen – rollespil",
      image: taenkSammen,
      link: "/taenk-sammen",
    },
  ];

  return (
    <div className="min-h-screen pb-[91px]">
      <ScreenHeader
        tagline="Platon"
        title="Ud af hulen"
        level="h1"
        visTilbageknap={true}
      />

      <div className="w-full flex justify-center mt-6">
        <img
          src={platonHule}
          alt="Platons hule"
          className="w-full h-[300px] object-cover"
        />
      </div>

      <Guidetekst kanKlikkes={false}>
        “Hvis alle tror noget er sandt, er det så sandt?”
      </Guidetekst>

      {/* Slider */}
      <div className="mt-8">
        <ScrollableSlider>
          {lessons.map((lesson, index) => (
            <div key={index} className="w-[332px] h-[300px] flex-shrink-0">
              <LessonCard title={lesson.title} image={lesson.image} link={lesson.link} />
            </div>
          ))}
        </ScrollableSlider>

        <Navigation />
      </div>
    </div>
  );
}
