export default function BannerTop() {
  return (
    <div className="w-full sticky top-0 z-50 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white text-center text-sm py-1 px-4 shadow-md flex items-center justify-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 animate-bounce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V5a2 2 0 10-4 0v.083A6 6 0 004 11v3.159c0 .538-.214 1.055-.595 1.436L2 17h5m5 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
      <span className="font-medium">
        Announcements - We are going live for clients on <strong>1 Nov</strong>.
      </span>
    </div>
  );
}
