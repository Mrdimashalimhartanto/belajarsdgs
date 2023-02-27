/* This example requires Tailwind CSS v2.0+ */
import { UsersIcon } from "@heroicons/react/outline";

export default function EkosistemDarat() {
  return (
    <div className="relative bg-white">
      <div className="h-56 bg-indigo-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/11/17/1887496953.png"
          alt="Support team"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
          <h2
            className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl"
            data-aos="fade-left">
            Apa itu Ekosistem Darat ?
          </h2>
          <p className="mt-6 text-lg text-black font-bold" data-aos="fade-up">
            Ekosistem darat adalah ekosistem yang lingkungan fisiknya berupa
            daratan. Ekosistem ini tidak bisa dipisahkan dari kehidupan manusia,
            karena manusia hidup dan tinggal di daratan serta sebagian besar
            kebutuhan hidup manusia juga bisa ditemuka di ekosistem darat, maka
            dari itu ekosistem darat sangat penting untuk kehidupan kita.
          </p>
        </div>
      </div>
    </div>
  );
}
