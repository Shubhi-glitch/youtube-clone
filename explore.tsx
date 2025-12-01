import Videogrid from "@/components/Videogrid";
import React from "react";

const ExplorePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Explore</h1>
        <Videogrid />
      </div>
    </div>
  );
};

export default ExplorePage;
