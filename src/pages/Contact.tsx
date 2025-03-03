import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-fixed">
      <div className="min-h-screen bg-black/70 pt-16">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg"
          >
            <h1 className="text-4xl font-bold text-center text-white mb-12">Contact Us</h1>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-4 text-white">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p>123 Gourmet Street, Foodie City, FC 12345</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-white">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p>(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-white">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>info@gourmethaven.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-white">
                  <Clock className="w-6 h-6 text-purple-400" />
                  <div>
                    <h3 className="font-semibold">Hours</h3>
                    <p>Mon-Sun: 11:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>

              <motion.form
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 bg-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 bg-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 bg-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg text-white font-semibold hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;