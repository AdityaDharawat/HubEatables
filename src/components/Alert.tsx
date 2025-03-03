import React from 'react';
import { AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface AlertProps {
  title: string;
  items: string[];
}

const Alert = ({ title, items }: AlertProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md mb-6"
    >
      <div className="flex items-start">
        <AlertCircle className="w-5 h-5 text-red-400 mt-0.5" />
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">{title}</h3>
          <ul className="mt-2 list-disc list-inside">
            {items.map((item, index) => (
              <li key={index} className="text-sm text-red-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Alert;