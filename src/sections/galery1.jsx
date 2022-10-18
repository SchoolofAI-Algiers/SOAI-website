import Card1 from "../components/Galeries/Card1";

export default function Galery1() {
  const courses = [
    {
      id: 1,
      title: "courses",
      text: "random text descriping the course of ai ",
      all: false,
    },
    {
      id: 2,
      title: "courses",
      text: "random text descriping the course of ai ",
      all: true,
    },
    {
      id: 3,
      title: "courses",
      text: "random text descriping the course of ai ",
      all: false,
    },
    {
      id: 4,
      title: "courses",
      text: "random text descriping the course of ai ",
      all: false,
    },
    {
      id: 5,
      title: "courses",
      text: "random text descriping the course of ai ",
      all: false,
    },
  ];
  return (
    <div className="flex flex-col pt-24 justify-center bg-white items-center min-h-screen">
      <div className="sm:w-2/3 w-2/3">
        <div className="text-5xl text-blue my-10 font-extrabold text-center">
          Talks and Courses
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-6 gap-x-6">
          {courses.map((course) => (
            <Card1
              title={course.title}
              text={course.text}
              all={course.all}
              key={course.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
