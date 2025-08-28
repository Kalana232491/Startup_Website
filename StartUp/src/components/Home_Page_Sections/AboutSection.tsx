"use client";

import { motion } from "framer-motion";
import { Star, Users, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About TechVision
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a forward-thinking technology company dedicated to creating innovative solutions 
            that drive business growth and digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Star className="h-12 w-12 text-cyan-400" />,
              title: "Excellence",
              description: "We deliver exceptional quality in every project, exceeding expectations through meticulous attention to detail."
            },
            {
              icon: <Users className="h-12 w-12 text-purple-400" />,
              title: "Collaboration",
              description: "We believe in the power of teamwork, working closely with clients to achieve shared goals and success."
            },
            {
              icon: <Zap className="h-12 w-12 text-yellow-400" />,
              title: "Innovation",
              description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges."
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="mb-4 flex justify-center">{value.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;