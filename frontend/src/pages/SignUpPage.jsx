import React from "react";
("use client");
import { useState } from "react";
import { MessageSquare, User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import AuthImagePattern from "../components/AuthImagePattern.jsx";
import toast from "react-hot-toast";
import { useAuthStore } from "../store/useAuthStore.js";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const {signup, isSignUp} = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.fullName.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = validateForm();
    if(success === true) {
      signup(formData);
    }
    console.log("Form submitted:", formData);

    setIsSigningUp(true);

    try {
      // Simuler une requête API
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
      // Ici vous pouvez ajouter votre logique d'inscription
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setIsSigningUp(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-900 grid lg:grid-cols-2">
      {/* Left side - Form */}
      <div className="flex flex-col p-8 lg:p-12">

        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-sm">
            {/* Title */}
            <div className="text-center mb-8">
              <div className="flex flex-col items-center gap-2 group">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MessageSquare className="size-6 text-primary" />
                </div>
                <h1 className="text-2xl font-bold mt-2">Create Account</h1>
                <p className="text-base-content/60">
                  Get started with your free account
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:bg-gray-800/70 transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:bg-gray-800/70 transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-10 pr-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:bg-gray-800/70 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-400 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button avec Loader */}
              <button
                type="submit"
                disabled={isSigningUp}
                className="cursor-pointer w-full bg-gradient-to-r from-primary to-primary hover:from-primary hover:to-primary text-black font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-500/50 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:hover:from-amber-500 disabled:hover:to-orange-500"
              >
                {isSigningUp ? (
                  <div className="flex items-center justify-center gap-2">
                    <span>Creating Account</span>
                    <div className="flex gap-1">
                      <div
                        className="w-1 h-1 bg-black rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-1 h-1 bg-black rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-1 h-1 bg-black rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            {/* Sign In Link */}
            <div className="text-center mt-6">
              <p className="text-gray-400 text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary cursor-pointer hover:text-primary font-medium transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share comments, and stay in touch with your loved ones."
      />
    </div>
  );
};

export default SignUpForm;
