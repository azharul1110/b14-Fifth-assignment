const TechnologyCard = ({ technology, onAdd, isAdded }) => {
  return (
    <div className="flex min-h-[245px] flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-7 w-7 object-contain"
          />
        </div>

        {technology.badge && (
          <span className="rounded-full bg-pink-50 px-2.5 py-1 text-[10px] font-medium text-pink-500">
            {technology.badge}
          </span>
        )}
      </div>

      <h3 className="mb-2 text-base font-bold text-gray-900">
        {technology.name}
      </h3>

      <p className="mb-4 line-clamp-3 text-[11px] leading-5 text-gray-500">
        {technology.description}
      </p>

      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-gray-100 px-2 py-1 text-[9px] text-gray-500">
          {technology.category}
        </span>

        <span className="rounded-md bg-gray-100 px-2 py-1 text-[9px] text-gray-500">
          {technology.difficulty}
        </span>

        <span className="ml-auto flex items-center gap-1 text-[10px]">
          <span className="text-yellow-400">★</span>

          <span className="font-medium text-gray-600">
            {technology.rating}
          </span>
        </span>
      </div>

      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-auto w-full rounded-md py-2 text-[10px] font-medium transition ${
          isAdded
            ? "cursor-not-allowed bg-gray-200 text-gray-500"
            : "bg-gray-950 text-white hover:bg-pink-600"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;