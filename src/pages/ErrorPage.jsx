import OtherHeader from "../contents/OtherHeader";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ErrorPage() {
  return (
    <div>
      <Navbar />
      <div className="teams container min-h-[800px] flex justify-center items-center px-2 md:px-7  ">
        <div class="text-center">
          <h1 class="mb-4 text-6xl font-semibold text-orange-600">404</h1>
          <p class="mb-4 text-lg text-gray-600">Oops! Looks like you're lost.</p>
          <div class="animate-bounce">
            <svg class="mx-auto h-16 w-16 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </div>
          <p class="mt-4 text-gray-600">
            Let's get you back{" "}
            <a href="/" class="text-emerald-500">
              home
            </a>
            .
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ErrorPage;
