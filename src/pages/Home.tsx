import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, UtensilsCrossed, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-fixed">
      <div className="min-h-screen bg-white/95 pt-16">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-emerald-900 mb-20"
          >
            <h1 className="text-6xl font-bold mb-6">Fresh & Healthy</h1>
            <p className="text-xl text-emerald-700">Experience the art of mindful dining</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-32">
            {[
              {
                title: "Organic Ingredients",
                icon: Leaf,
                description: "We source the finest organic produce from local farmers"
              },
              {
                title: "Crafted with Care",
                icon: UtensilsCrossed,
                description: "Every dish is prepared with attention to detail"
              },
              {
                title: "Welcoming Atmosphere",
                icon: Users,
                description: "A perfect setting for memorable dining experiences"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg group hover:shadow-2xl transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 mb-4 text-emerald-600" />
                <h3 className="text-2xl font-bold mb-3 text-emerald-900">{feature.title}</h3>
                <p className="text-emerald-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
                alt="Healthy Food"
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <img 
                src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
                alt="Restaurant Interior"
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-xl text-emerald-700">
              Join us for a unique dining experience where health meets flavor. Our commitment to fresh, organic ingredients and mindful preparation ensures every meal is both nutritious and delicious.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;