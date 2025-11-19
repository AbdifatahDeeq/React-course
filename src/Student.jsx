import { useState } from "react";

export default function Student() {
  const [state, setState] = useState("overview");

  const courses = [
    {
      id: 1,
      subject: "React Foundational",
      progress: 75,
      instructor: "Abdalla",
      nextLesson: "Components & Props",
      color: "blue",
    },
    {
      id: 2,
      subject: "JavaScript",
      progress: 45,
      instructor: "Faarah",
      nextLesson: "Async/Await",
      color: "purple",
    },
    {
      id: 3,
      subject: "Tailwind CSS",
      progress: 75,
      instructor: "Yousuf",
      nextLesson: "Color Theory",
      color: "pink",
    },
  ];

  const assignments = [
    {
      id: 1,
      title: "TODO-APP",
      course: "React",
      dueDate: "30/10/2025",
      status: "pending",
    },
    {
      id: 2,
      title: "API Integration",
      course: "Javascript Advanced",
      dueDate: "24/10/2025",
      status: "in-progress",
    },
    {
      id: 3,
      title: "Designing",
      course: "Tailwind CSS",
      dueDate: "05/11/2025",
      status: "completed",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "New Courses Available",
      message: "Check out our new TypeScript course!",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Maintenance Notice",
      message: "Platform updates scheduled for tonight",
      time: "5 hours ago",
    },
  ];

  const stats = [
    { label: "Average Grade", value: "80%", icon: "📊" },
    { label: "Courses", value: "3", icon: "📚" },
    { label: "Study Hours", value: "45h", icon: "⏰" },
    { label: "Assignments", value: "12", icon: "✍️" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 ">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Welcome back, Student!
              </h1>
              <p className="text-gray-500">
                Here's what's happening with your courses today.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <span className="absolute top-0 right-0 block h-2 w-2 bg-red-500 rounded-full ring-2 ring-white" />
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  🔔
                </button>
              </div>

              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white font-semibold">
                S
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">

          {stats.map((s, index) => (
            <div key={index} className={`cursor-pointer${setState === state? " bg-red-500 text-white" :"`bg-white rounded-xl shadow-sm p-6 "}`}>
              <div className="flex items-center">
                <div className="text-2xl mr-4">{s.icon}</div>
                <div>
                  <p className="text-sm text-gray-500">{s.label}</p>
                  <p className="text-2xl font-bold text-gray-800">{s.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Course Progress Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Course Progress
              </h2>

              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-medium text-gray-800">
                        {course.subject}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {course.progress}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 h-2.5 rounded-full">
                      <div
                        className={`h-2.5 rounded-full bg-${course.color}-500`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>

                    <div className="mt-2 flex justify-between text-sm text-gray-500">
                      <span>Next: {course.nextLesson}</span>
                      <span>{course.instructor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Assignments */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Upcoming Assignments
              </h2>

              <div className="space-y-4">
                {assignments.map((a) => (
                  <div key={a.id} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">{a.title}</h3>
                      <p className="text-sm text-gray-500">{a.course}</p>
                    </div>

                    <div className="text-right">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                          ${
                            a.status === "completed"
                              ? "bg-green-100 text-green-800"
                              : a.status === "in-progress"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                      >
                        {a.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">
                        Due {a.dueDate}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Announcements */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Announcements
              </h2>

              <div className="space-y-4">
                {announcements.map((n) => (
                  <div key={n.id} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-medium text-gray-800">{n.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{n.message}</p>
                    <p className="text-xs text-gray-400 mt-1">{n.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
