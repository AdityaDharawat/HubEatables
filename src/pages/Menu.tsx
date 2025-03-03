import React from 'react';
import { motion } from 'framer-motion';

const Menu = () => {
  const menuItems = [
    {
      category: "Starters",
      items: [
        { name: "Quinoa Buddha Bowl", price: "$14", description: "Fresh vegetables, avocado, and tahini dressing" },
        { name: "Green Detox Salad", price: "$12", description: "Kale, spinach, apple, and ginger vinaigrette" }
      ]
    },
    {
      category: "Main Courses",
      items: [
        { name: "Grilled Salmon", price: "$28", description: "Wild-caught salmon with roasted vegetables" },
        { name: "Plant-Based Curry", price: "$22", description: "Coconut curry with seasonal vegetables" }
      ]
    },
    {
      category: "Desserts",
      items: [
        { name: "Chia Pudding", price: "$9", description: "Coconut milk chia pudding with fresh berries" },
        { name: "Raw Cacao Truffles", price: "$8", description: "Date-sweetened chocolate truffles" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-fixed">
      <div className="min-h-screen bg-white/95 pt-16">
        <div className="container mx-auto px-4 py-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center text-emerald-900 mb-12"
          >
            Our Menu
          </motion.h1>

          <div className="space-y-12 max-w-4xl mx-auto">
            {menuItems.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h2 className="text-2xl font-bold text-emerald-800 mb-6">{category.category}</h2>
                <div className="space-y-6">
                  {category.items.map((item, itemIdx) => (
                    <motion.div
                      key={itemIdx}
                      whileHover={{ x: 10 }}
                      className="flex justify-between items-start group cursor-pointer"
                    >
                      <div>
                        <h3 className="text-xl font-medium text-emerald-900 group-hover:text-emerald-600 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-emerald-700">{item.description}</p>
                      </div>
                      <span className="text-xl font-semibold text-emerald-600">{item.price}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;