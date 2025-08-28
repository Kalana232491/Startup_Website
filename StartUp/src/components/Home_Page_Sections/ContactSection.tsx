"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { cn } from "../../lib/utils";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
      alert("Thank you for your message! We'll get back to you soon.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-cyan-400" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-300">ABC123@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-cyan-400" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-300">+94 (77) 1234567</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-cyan-400" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-300">Galle, Sri Lanka</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={cn(
                  "w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all",
                  formErrors.name ? "border-red-500" : "border-white/20"
                )}
                placeholder="Your name"
              />
              {formErrors.name && (
                <p className="text-red-400 text-sm mt-1">{formErrors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={cn(
                  "w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all",
                  formErrors.email ? "border-red-500" : "border-white/20"
                )}
                placeholder="your@email.com"
              />
              {formErrors.email && (
                <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={cn(
                  "w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none",
                  formErrors.message ? "border-red-500" : "border-white/20"
                )}
                placeholder="Tell us about your project..."
              />
              {formErrors.message && (
                <p className="text-red-400 text-sm mt-1">{formErrors.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              Send Message
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;