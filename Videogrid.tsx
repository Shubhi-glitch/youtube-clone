import React, { useEffect, useMemo, useState } from "react";
import Videocard from "./videocard";
import axiosInstance from "@/lib/axiosinstance";

const Videogrid = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"latest" | "views" | "title">("latest");

  const dummyVideos = [
    {
      _id: "1",
      videotitle: "My Uploaded Video",
      filename: "2025-06-25T06-09-29.296Z-vdo.mp4",
      filetype: "video/mp4",
      filepath: "2025-06-25T06-09-29.296Z-vdo.mp4",
      filesize: "7MB",
      videochanel: "Shubhi Channel",
      Like: 10,
      views: 100,
      uploader: "shubhi",
      createdAt: new Date().toISOString(),
    },
    {
      _id: "2",
      videotitle: "Amazing Nature Documentary",
      filename: "2025-06-25T06-09-29.296Z-vdo.mp4",
      filetype: "video/mp4",
      filepath: "2025-06-25T06-09-29.296Z-vdo.mp4",
      filesize: "7MB",
      videochanel: "Nature Channel",
      Like: 1250,
      views: 45000,
      uploader: "nature_lover",
      createdAt: new Date().toISOString(),
    },
    {
      _id: "3",
      videotitle: "Cooking Tutorial: Perfect Pasta",
      filename: "2025-06-25T06-09-29.296Z-vdo.mp4",
      filetype: "video/mp4",
      filepath: "2025-06-25T06-09-29.296Z-vdo.mp4",
      filesize: "7MB",
      videochanel: "Chef's Kitchen",
      Like: 890,
      views: 23000,
      uploader: "chef_master",
      createdAt: new Date(Date.now() - 86400000).toISOString(),
    },
  ];

  useEffect(() => {
    const fetchvideo = async () => {
      try {
        const res = await axiosInstance.get("/video/getall");
        const data = Array.isArray(res.data) ? res.data : [];

        if (data.length > 0) {
          setVideos(data);
        } else {
          setVideos(dummyVideos);
        }
      } catch (error) {
        console.log("Error fetching videos:", error);
        setVideos(dummyVideos);
      } finally {
        setLoading(false);
      }
    };

    fetchvideo();
  }, []);

  const filteredAndSorted = useMemo(() => {
    let list = [...videos];

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter(
        (v) =>
          v.videotitle?.toLowerCase().includes(q) ||
          v.videochanel?.toLowerCase().includes(q)
      );
    }

    if (sortBy === "latest") {
      list.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    } else if (sortBy === "views") {
      list.sort((a, b) => (b.views || 0) - (a.views || 0));
    } else if (sortBy === "title") {
      list.sort((a, b) =>
        (a.videotitle || "").localeCompare(b.videotitle || "")
      );
    }

    return list;
  }, [videos, searchTerm, sortBy]);

  return (
    <div className="space-y-4">
      {/* Search + Sort controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <input
          type="text"
          placeholder="Search by title or channel..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 border rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-600">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "latest" | "views" | "title")
            }
            className="border rounded-full px-3 py-1 text-sm outline-none"
          >
            <option value="latest">Latest</option>
            <option value="views">Most Viewed</option>
            <option value="title">Title (A–Z)</option>
          </select>
        </div>
      </div>

      {/* Videos grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {loading ? (
          <>Loading..</>
        ) : filteredAndSorted.length > 0 ? (
          filteredAndSorted.map((video: any) => (
            <Videocard key={video._id || video.filename} video={video} />
          ))
        ) : (
          <p className="text-center col-span-full">No videos found</p>
        )}
      </div>
    </div>
  );
};

export default Videogrid;
