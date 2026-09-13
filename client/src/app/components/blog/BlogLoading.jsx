export default function BlogLoading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="w-full max-w-sm px-8">

        <div className="text-center mb-10">
          <h1 className="text-6xl font-light tracking-[-0.06em] text-gray-900">
            Houzez
          </h1>

          <p className="mt-3 text-[10px] uppercase tracking-[0.4em] text-gray-400">
            Property Management
          </p>
        </div>

        <div className="h-px w-full bg-gray-100 overflow-hidden">
          <div className="h-full w-1/3 bg-gray-900 animate-loading-bar" />
        </div>

        <p className="mt-5 text-center text-[10px] uppercase tracking-[0.3em] text-gray-400">
          Loading article
        </p>

      </div>
    </div>
  );
}