import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock } from 'lucide-react';
import Alert from '../components/Alert';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = [];

    if (!formData.email) {
      newErrors.push('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.push('Email should be valid & company email');
    }

    if (!isLogin && !formData.name) {
      newErrors.push('Add your name');
    }

    if (!formData.password) {
      newErrors.push('Password is required');
    }

    setErrors(newErrors);
  };

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1507914372368-b2b085b925a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-fixed">
      <div className="min-h-screen bg-white/95 pt-16">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-center text-emerald-900 mb-8">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>

            {errors.length > 0 && (
              <Alert
                title="You need to fill 2 steps yet"
                items={errors}
              />
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-emerald-700 mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-600 w-5 h-5" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-emerald-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-600 w-5 h-5" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-emerald-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-600 w-5 h-5" />
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-2 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
              >
                {isLogin ? 'Sign In' : 'Sign Up'}
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-emerald-600 hover:text-emerald-700 font-medium"
              >
                {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Auth;