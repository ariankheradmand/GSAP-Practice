"use client";

import React, { useState } from "react";
import HotToast from "@/components/HotToast";

function Page() {
  const [toast, setToast] = useState(null);
  const [withTimer, setWithTimer] = useState(true); // ⬅️ checkbox state

  const showToast = (type, content) => {
    setToast(null);
    setTimeout(() => {
      setToast({ type, content, id: Date.now() });
    }, 50);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-6">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
          HotToast Playground
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Try out different toast styles and auto-close options
        </p>
      </div>

      {/* Toggle for timer */}
      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-6">
        <input
          type="checkbox"
          checked={withTimer}
          onChange={(e) => setWithTimer(e.target.checked)}
          className="w-4 h-4 accent-green-600 rounded"
        />
        <span>{withTimer ? "Auto-Close Enabled" : "Manual Close"}</span>
      </label>

      {/* Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-lg">
        <button
          onClick={() =>
            showToast("warning", "Careful! Something might go wrong.")
          }
          className="bg-yellow-500 px-4 py-2 rounded-xl text-white font-medium shadow hover:shadow-lg hover:scale-105 transition-all"
        >
          Warning
        </button>

        <button
          onClick={() => showToast("info", "Just so you know, this is info.")}
          className="bg-blue-500 px-4 py-2 rounded-xl text-white font-medium shadow hover:shadow-lg hover:scale-105 transition-all"
        >
          Info
        </button>

        <button
          onClick={() => showToast("error", "Oops! Something went wrong.")}
          className="bg-red-500 px-4 py-2 rounded-xl text-white font-medium shadow hover:shadow-lg hover:scale-105 transition-all"
        >
          Error
        </button>

        <button
          onClick={() => showToast("success", "Your changes were saved!")}
          className="bg-green-500 px-4 py-2 rounded-xl text-white font-medium shadow hover:shadow-lg hover:scale-105 transition-all"
        >
          Success
        </button>
      </div>

      {/* Toast */}
      {toast && (
        <HotToast
          key={toast.id}
          timer={withTimer} // ⬅️ controlled by checkbox
          type={toast.type}
          content={toast.content}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default Page;
