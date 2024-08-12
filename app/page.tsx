import Image from "next/image";
import Hero from "./Components/Hero/Hero";
import CourseCard from "./Components/Cards/CourseCard";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex gap-4">
        <CourseCard moduleName="Problem Solving with C" />
        <CourseCard moduleName="Database management systems" />
        <CourseCard moduleName="Network programming" />
      </div>

    </main>
  );
}
