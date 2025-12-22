import SocialIcons from "./SocialIcons";
import { socialLinks } from "../data";

export default function EmailSection() {
  return (
    <div className="mb-6 sm:mb-0">
      <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Send Email</h3>
      <div className="relative mb-4 sm:mb-6">
        <div className="relative">
          <input
            type="email"
            placeholder="Email address"
            className="w-full bg-white text-gray-900 placeholder-gray-500 text-xs sm:text-sm px-3 sm:px-4 py-3 sm:py-4 pr-20 sm:pr-24 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#BE968E]"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#a9827a] hover:bg-[#5D4037] text-white text-xs sm:text-sm font-medium px-3 sm:px-5 py-3 rounded-md transition-colors">
            Send
          </button>
        </div>
      </div>
      <SocialIcons socialLinks={socialLinks} />
    </div>
  );
}