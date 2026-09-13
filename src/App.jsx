import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load technologies:", error);
        toast.error("Failed to load technologies.");
        setLoading(false);
      });
  }, []);

  const handleAdd = (technology) => {
    if (selectedIds.includes(technology.id)) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedIds((prevIds) => [...prevIds, technology.id]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id) => {
    const technology = technologies.find((item) => item.id === id);

    setSelectedIds((prevIds) =>
      prevIds.filter((technologyId) => technologyId !== id)
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (selectedIds.length === 0) {
      return;
    }

    setSelectedIds([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      <Navbar />
      <Hero />

      {loading ? (
        <div className="flex min-h-[300px] items-center justify-center">
          <p className="text-lg font-medium text-gray-500">
            Loading technologies...
          </p>
        </div>
      ) : (
        <TechnologyGrid
          technologies={technologies}
          selectedIds={selectedIds}
          onAdd={handleAdd}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      )}

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;