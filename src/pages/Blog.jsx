import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { User, Calendar } from "lucide-react";
import SEO from '../components/SEO';

export default function Blog() {
  const categories = [
    "All",
    "Advices",
    "Announcements",
    "News",
    "Consultation",
    "Development",
  ];

  const blogs = [
    { id: 1, category: "Advices", title: "CPRI Type-Tested Safety Guidelines", image: "/photos/DSC_9596.JPG", date: "June 20, 2026" },
    { id: 2, category: "News", title: "Commissioning 100+ MW Switchyards", image: "/photos/DSC_9597.JPG", date: "June 15, 2026" },
    { id: 3, category: "Consultation", title: "Plant Load Analysis Best Practices", image: "/photos/DSC_9598.JPG", date: "June 10, 2026" },
    { id: 4, category: "Development", title: "Next-Gen Online Double Conversion UPS", image: "/photos/DSC_9600.JPG", date: "June 05, 2026" },
    { id: 5, category: "Advices", title: "Preventing Harmonic Grid Pollution", image: "/photos/DSC_9601.JPG", date: "May 28, 2026" },
    { id: 6, category: "News", title: "Severe-Weather MMS Mounting Milestones", image: "/photos/DSC_9602.JPG", date: "May 20, 2026" },
    { id: 7, category: "Consultation", title: "Industrial Battery Charging Profiles", image: "/photos/DSC_9603.JPG", date: "May 12, 2026" },
    { id: 8, category: "Development", title: "Microprocessor APFC Advancements", image: "/photos/DSC_9604.JPG", date: "May 04, 2026" },
  ];

  const [active, setActive] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 6;

  // Filter
  const filtered =
    active === "All"
      ? blogs
      : blogs.filter((b) => b.category === active);

  // Pagination
  const totalPages = Math.ceil(filtered.length / blogsPerPage);

  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = filtered.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  return (
    <div className="min-h-screen flex flex-col font-outfit">
      <SEO 
        title="Blog & Insights | Synergy Systems" 
        description="Read the latest insights and updates from Synergy Systems on power electronics, solar installations, and industrial switchgear."
        url="https://www.denver.com/blog"
      />
      <Navbar />

      {/* HERO */}
      <section className="relative h-[450px] md:h-[600px] bg-cover bg-center bg-no-repeat" 
               style={{backgroundImage: "url('/photos/DSC_9599.JPG')"}}>
        <div className="absolute inset-0  bg-opacity-50"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
           
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Blog
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
              Nostrum exercitationem ullam corporis suscipit laboriosam, nisiaeruo aliuid consenua rearehenderit in volutate esse acia incidieunt magna.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="bg-gray-50 py-20 pb-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* FILTER */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActive(cat);
                  setCurrentPage(1);
                }}
                className={`px-6 py-2 rounded-md transition ${
                  active === cat
                    ? "bg-green-500 text-white"
                    : "text-gray-700 hover:text-green-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid gap-8 sm:grid-cols-2">
            {currentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition group"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <User size={14} className="text-green-500" />
                      Admin
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-green-500" />
                      {blog.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-500 transition">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Explore expert engineering standards, facility telematics insights, and turnkey power contract benchmarks.
                  </p>

                  <button className="flex items-center gap-2 font-medium text-gray-900 group-hover:text-green-500 transition">
                    Read More
                    <span className="w-6 h-[2px] bg-gray-900 group-hover:bg-green-500 transition"></span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-16 flex-wrap">

              {/* Prev */}
              <button
                disabled={currentPage === 1}
                onClick={() =>
                  setCurrentPage((p) => Math.max(p - 1, 1))
                }
                className={`text-gray-500 ${
                  currentPage === 1
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:text-green-500"
                }`}
              >
                ‹
              </button>

              {/* Pages */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-md transition ${
                      currentPage === page
                        ? "bg-green-500 text-white"
                        : "text-gray-700 hover:text-green-500"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              {/* Next */}
              <button
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((p) =>
                    Math.min(p + 1, totalPages)
                  )
                }
                className={`text-gray-500 ${
                  currentPage === totalPages
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:text-green-500"
                }`}
              >
                ›
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}