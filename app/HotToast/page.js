"use client";

import React, { useState } from "react";
import HotToast from "@/components/HotToast";

function Page() {
  const [toast, setToast] = useState(null);

  const showToast = (type, content) => {
    // Reset first to cancel the old toast
    setToast(null);

    // Small timeout so React unmounts the old one before mounting new
    setTimeout(() => {
      setToast({ type, content, id: Date.now() });
    }, 50);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center gap-4">
      <button
        onClick={() =>
          showToast("warning", "Careful! Something might go wrong.")
        }
        className="bg-red-500 px-2 py-1 rounded-md text-white hover:scale-115 transition-all"
      >
        Warning
      </button>

      <button
        onClick={() => showToast("info", "Just so you know, this is info.")}
        className="bg-blue-500 px-2 py-1 rounded-md text-white hover:scale-115 transition-all"
      >
        Info
      </button>

      <button
        onClick={() => showToast("error", "Oops! Something went wrong.")}
        className="bg-yellow-500 px-2 py-1 rounded-md text-white hover:scale-115 transition-all"
      >
        Error
      </button>

      <button
        onClick={() => showToast("success", "Your changes were saved!")}
        className="bg-green-500 px-2 py-1 rounded-md text-white hover:scale-115 transition-all"
      >
        Success
      </button>

      {toast && (
        <HotToast
          key={toast.id}
          timer={true}
          type={toast.type}
          content={toast.content}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default Page;
