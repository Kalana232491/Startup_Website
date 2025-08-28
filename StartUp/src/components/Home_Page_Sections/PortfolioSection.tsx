"use client";

import { motion } from "framer-motion";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Modern online store with advanced filtering and seamless checkout experience.",
      tags: ["Next.js", "Stripe", "Tailwind CSS"],
      image: "/modern-ecommerce-interface.png",
      category: "E-commerce",
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      description: "Analytics dashboard with real-time data visualization and user management.",
      tags: ["React", "D3.js", "Node.js"],
      image: "/saas-analytics-dashboard-dark-theme.png",
      category: "SaaS",
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication.",
      tags: ["React Native", "TypeScript", "Firebase"],
      image: "/mobile-banking-app.png",
      category: "Finance",
    },
    {
      id: 4,
      title: "Healthcare Portal",
      description: "Patient management system with appointment scheduling and telemedicine.",
      tags: ["Vue.js", "Python", "PostgreSQL"],
      image: "/healthcare-patient-portal.png",
      category: "Healthcare",
    },
    {
      id: 5,
      title: "Real Estate Platform",
      description: "Property listing platform with virtual tours and mortgage calculator.",
      tags: ["Angular", "Express", "MongoDB"],
      image: "/real-estate-website.png",
      category: "Real Estate",
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "Educational platform with course creation, progress tracking, and assessments.",
      tags: ["Next.js", "Prisma", "Vercel"],
      image: "/online-learning-platform.png",
      category: "Education",
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Work
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our latest projects and successful collaborations
          </p>
        </motion.div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-xs font-semibold text-gray-700 dark:text-gray-300 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <button className="w-full py-2 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/50 dark:hover:to-purple-800/50 transition-all duration-200 text-sm group-hover:shadow-md">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Want to see more of our work? Check out our complete portfolio.
          </p>
          <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-200">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;