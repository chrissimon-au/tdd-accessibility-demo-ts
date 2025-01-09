import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <h1>University Registration</h1>
        <label htmlFor="courses">Courses</label>
        <select id="courses">
          <option disabled>Select the course you'd like to register for...</option>
          <option data-course-id="28a7f254-5e2d-46ac-b512-83b6c8ba4b2a">Accessibility 101</option>
        </select>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
