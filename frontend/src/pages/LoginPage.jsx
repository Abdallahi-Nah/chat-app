import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Lock, Mail, MessageSquare, User } from "lucide-react";
import AuthImagePattern from "../components/AuthImagePattern";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogingUp, setIsLogingUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, setLoggingIn } = useAuthStore();


  const validateForm = () => {
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
    if (success === true) {
      login(formData);
    }
    console.log("Form submitted:", formData);

    setIsLogingUp(true);

    try {
      // Simuler une requête API
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
      // Ici vous pouvez ajouter votre logique d'inscription
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLogingUp(false);
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
                <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
                <p className="text-base-content/60">Sign in to your account</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
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
                disabled={isLogingUp}
                className="cursor-pointer w-full bg-gradient-to-r from-primary to-primary hover:from-primary hover:to-primary text-black font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-500/50 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:hover:from-amber-500 disabled:hover:to-orange-500"
              >
                {isLogingUp ? (
                  <div className="flex items-center justify-center gap-2">
                    <span>Signing</span>
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
                  "Sign in"
                )}
              </button>
            </form>

            {/* Sign In Link */}
            <div className="text-center mt-6">
              <p className="text-gray-400 text-sm">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-primary cursor-pointer hover:text-primary font-medium transition-colors"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <AuthImagePattern
        title="Welcome Back!"
        subtitle="Sign in to continue your conversations and catch up with your messages."
      />
    </div>
  );
};

export default LoginPage;
