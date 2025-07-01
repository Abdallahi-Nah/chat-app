import React from "react";
"use client";

import { MessageSquare, Settings } from "lucide-react";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex flex-col bg-gray-800/30 relative overflow-hidden">
      {/* Header avec Settings */}
      <div className="flex justify-end p-8 lg:p-12">
        <div className="flex items-center gap-4 text-gray-400 text-sm">
          <span>100% ✓</span>
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex-1 flex items-center justify-center relative">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 gap-4 h-full p-8">
            {Array.from({ length: 48 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-600 rounded-lg aspect-square animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: "3s",
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-transparent to-gray-900/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-md px-8">
          {/* Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-amber-500/20">
              <MessageSquare className="w-10 h-10 text-amber-500" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg leading-relaxed">{subtitle}</p>

          {/* Decorative Elements */}
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        {/* Floating Elements */}
        <div
          className="absolute top-20 left-20 w-4 h-4 bg-amber-500/30 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 right-16 w-3 h-3 bg-orange-500/40 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-32 w-2 h-2 bg-amber-400/50 rounded-full animate-bounce"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>
    </div>
  );
};

export default AuthImagePattern;
