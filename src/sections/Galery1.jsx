import Card1 from "../components/Galeries/Card1";

export default function Galery1() {
  const courses = [
    {
      id: 1,
      title: "Reading Sessions",
      src: "/ReadingSession.png",
      text: "Each Friday at 8 pm, we discuss the content of a scientific paper. Take a look at the previous sessions here.",
      all: false,
    },
    {
      id: 2,
      title: "A break with a researcher",
      src: "/BreakReasearcher.png",
      text: "It’s a series of Facebook lives in which we invite great AI researchers to dig into their specialty or treat a specific concept in the field together. Check out the playlist of our previous lives here. ",
      all: true,
    },
    {
      id: 3,
      title: "AI2E",
      src: "/AI2E.png",
      text: "It’s a complete series dedicated to anyone interested in starting their AI journey. If you're kicking off, this is your starting point, hit the link and enjoy the playlist.",
      all: false,
    },
    {
      id: 4,
      title: "HackRamadan",
      src: "/HackRamadan.png",
      text: "An Ideathon organized in Ramadan. The concept is easy, you’re a participant thus you’ll propose an interesting AI solution for real-world issues. Here’s the link to the previous edition.",
      all: false,
    },
    {
      id: 5,
      title: "NeurIPS Algiers Meetup conference",
      src: "/NeurIPS.png",
      text: "You guessed it! it is an international conference, if you’re curious about the first edition of the event, check out our Youtube Channel.",
      all: false,
    },
  ];
  return (
    <div className="flex flex-col pt-10 lg:pt-16 justify-center bg-white items-center min-h-screen">
      <div className="sm:w-2/3 w-2/3">
        <div className="text-4xl sm:text-5xl mb-10 text-blue font-extrabold text-center">
          Talks and Courses
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6 gap-x-6">
          {courses.map((course) => (
            <Card1
              title={course.title}
              text={course.text}
              src={course.src}
              all={course.all}
              key={course.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
