import TechnologyCard from "./TechnologyCard";

const TechnologyGrid = ({
  technologies,
  onAdd,
  selectedIds,
  onRemove,
  onRemoveAll,
}) => {
  const selectedTechnologies = technologies.filter((technology) =>
    selectedIds.includes(technology.id)
  );

  return (
    <section id="technologies" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Explore the{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">

          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                onAdd={onAdd}
                isAdded={selectedIds.includes(technology.id)}
              />
            ))}
          </div>

         
          <aside className="h-fit rounded-xl border border-gray-200 bg-white p-4 shadow-sm lg:sticky lg:top-24">

           
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-gray-900">
                  Your Stack
                </h3>

                <p className="mt-1 text-[10px] text-gray-400">
                  {selectedIds.length}{" "}
                  {selectedIds.length === 1
                    ? "technology"
                    : "technologies"}{" "}
                  selected
                </p>
              </div>

              {selectedIds.length > 0 && (
                <button
                  onClick={onRemoveAll}
                  className="text-[10px] font-medium text-pink-500 hover:text-pink-600"
                >
                  Remove All
                </button>
              )}
            </div>

            
            {selectedTechnologies.length === 0 ? (
              <div className="mt-4 rounded-lg border border-dashed border-gray-200 p-5 text-center">
                <p className="text-xs text-gray-400">
                  No technologies added yet.
                </p>

                <p className="mt-1 text-[10px] text-gray-300">
                  Add technologies to build your stack.
                </p>
              </div>
            ) : (
              
              <div className="mt-4 space-y-3">
                {selectedTechnologies.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 p-2"
                  >
                    
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-5 w-5 object-contain"
                      />
                    </div>

                    
                    <div className="min-w-0 flex-1">
                      <h4 className="truncate text-[11px] font-semibold text-gray-800">
                        {technology.name}
                      </h4>

                      <p className="text-[9px] text-gray-400">
                        {technology.category}
                      </p>
                    </div>

                    
                    <button
                      onClick={() => onRemove(technology.id)}
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-pink-50 hover:text-pink-500"
                      aria-label={`Remove ${technology.name}`}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default TechnologyGrid;