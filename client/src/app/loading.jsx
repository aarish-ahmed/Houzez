export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-sm px-8">
        
        {/* Brand */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-[0.25em] text-gray-900">
            Houzez
          </h1>

          <p className="mt-2 text-[11px] uppercase tracking-[0.35em] text-gray-400">
            Property Management
          </p>
        </div>

        {/* Loading animation */}
        <div className="relative h-[2px] w-full overflow-hidden bg-gray-100">
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gray-900 animate-loading-bar" />
        </div>

        {/* Status */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs uppercase tracking-widest text-gray-400">
            Loading
          </span>

          <span className="text-xs text-gray-300">
            Please wait
          </span>
        </div>

      </div>
    </div>
  );
}