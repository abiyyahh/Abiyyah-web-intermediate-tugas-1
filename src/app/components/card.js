import Image from "next/image";
import foto from "../../../public/pas_foto.jpeg";
export default function card() {
  return (
    <div class="mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="flex flex-col items-center pb-10">
        <Image
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={foto}
          alt="foto abiyyah"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Username: {process.env.NEXT_PUBLIC_NAME}
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">
          Full Name: {process.env.NEXT_PUBLIC_INFO}
        </span>
        <div class="flex mt-4 md:mt-6">
          <a
            href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-purple-500 rounded-lg hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Info
          </a>
        </div>
      </div>
    </div>
  );
}
