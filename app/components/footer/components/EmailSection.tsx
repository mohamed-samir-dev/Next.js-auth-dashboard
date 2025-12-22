import SocialIcons from "./SocialIcons";
import { socialLinks } from "../data";

export default function EmailSection() {
  return (
    <div className="mt-[50px]">
      <h3 className="text-lg font-semibold mb-4">Send Email</h3>
      <div className="relative mb-6">
        <input
          type="email"
          placeholder="Email address"
          className="bg-white text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#BE968E]"
          style={{
            width: '369px',
            height: '62px',
            borderRadius: '12px',
            border: '0.5px solid rgba(0,0,0,0.2)',
            paddingLeft: '16px',
            paddingRight: '150px'
          }}
        />
        <button 
          className="bg-[#6D4C41] hover:bg-[#5D4037] text-white text-sm font-medium transition-colors"
          style={{
            width: '135px',
            height: '46px',
            top: '8px',
            left: '226px',
            borderRadius: '12px',
            border: '0.5px solid rgba(255,255,255,0.2)',
            position: 'absolute'
          }}
        >
          Send
        </button>
      </div>
      <SocialIcons socialLinks={socialLinks} />
    </div>
  );
}