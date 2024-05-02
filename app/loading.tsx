export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <button type="button" className="bg-indigo-500 ..." disabled>
        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
          Processing...
        </svg>
      </button>
    </div>
  );
}
