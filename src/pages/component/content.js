/* This example requires Tailwind CSS v2.0+ */
import { InboxIcon, SparklesIcon } from "@heroicons/react/outline";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function Content() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span
                  className="h-12 w-12 rounded-md flex items-center justify-center"
                  data-aos="fade-down">
                  <Player
                    autoplay
                    speed={1.5}
                    loop
                    className=""
                    src="https://assets9.lottiefiles.com/private_files/lf30_of1c2696.json"
                    style={{ height: "90px", width: "90px" }}></Player>
                </span>
              </div>
              <div className="mt-6">
                <h2
                  className="text-3xl font-extrabold tracking-tight text-gray-900"
                  data-aos="fade-right">
                  Apa itu SDGS
                </h2>
                <p
                  className="mt-4 text-lg text-gray-500"
                  data-aos="fade-up-left">
                  SDGS merupakan Sistem Development Goals yang merupakan suatu
                  rencana aksi global. SDGS disepakati oleh para pemimpin dunia,
                  termasuk Indonesia.guna mengakhiri kemiskinan, mengurangi
                  kesenjangan dan melindungi linkungan.
                </p>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6"></div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://www.ecoedu.id/wp-content/uploads/2022/09/Ecoedu.id-SDGs-Indonesia.jpg"
                alt="Inbox user interface"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span
                  className="h-12 w-12 rounded-md flex items-center justify-center"
                  data-aos="fade-right">
                  <Player
                    autoplay
                    speed={1.5}
                    loop
                    className=""
                    src="https://assets5.lottiefiles.com/packages/lf20_mm78f6k0.json"
                    style={{ height: "90px", width: "90px" }}></Player>
                </span>
              </div>
              <div className="mt-6">
                <h2
                  className="text-3xl font-extrabold tracking-tight text-gray-900"
                  data-aos="fade-up">
                  Pembahasan lanjutan SDGS
                </h2>
                <p className="mt-4 text-lg text-gray-500" data-aos="fade-down">
                  SDGS berlaku bagi seluruh negara(universal) sehingga seluruh
                  negara tanda terkecuali negara maju memiliki kewajiban moral
                  untuk mencapai tujugan dan target SDGS .
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://www.welthungerhilfe.de/fileadmin/_processed_/c/8/csm_sustainable-development-goals-welthungerhilfe-united-nations_2faf7396d1.jpg"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
