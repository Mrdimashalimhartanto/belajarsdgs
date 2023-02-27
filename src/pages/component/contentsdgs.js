import Marquee from "react-fast-marquee";

export default function ContentSDGS() {
  return (
    <div className="bg-gradient-to-r from-hijau via-kuning to-kuning">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
          <Marquee speed={99}>
            Sudah siap untuk pembahasan selanjutnya ?
          </Marquee>
          {/* <span className="block">
            Sudah siap untuk pembahasan selanjutnya ?
          </span> */}
          {/* <span className="block">Start your free trial today.</span> */}
        </h2>
        <div className="mt-8 flex justify-center">
          {/* <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
              Learn more
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
