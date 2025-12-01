import React from "react";
import Videogrid from "@/components/Videogrid";

const SubscriptionsPage = () => {
  // Future me yaha sirf subscribed channels ke videos laa sakti ho.
  // Abhi ke liye same grid dikhate hain.
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Subscriptions</h1>
        <p className="text-sm text-gray-600 mb-4">
          (Demo) Showing all videos. Later you can filter by subscribed channels.
        </p>
        <Videogrid />
      </div>
    </div>
  );
};

export default SubscriptionsPage;
