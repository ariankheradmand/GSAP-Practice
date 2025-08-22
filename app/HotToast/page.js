"use client";

import React, { useState } from "react";
import HotToast from "@/components/HotToast";

function Page() {
  const [toast, setToast] = useState(null);

  const showToast = (type, content) => {
    setToast({ type, content });
  };

  const hideToast = () => {
    setToast(null);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center gap-4">
      <button
        onClick={() =>
          showToast("warning", "Careful! Something might go wrong.")
        }
        className="bg-yellow-500 px-2 py-1 rounded-md text-white"
      >
        Warning
      </button>

      <button
        onClick={() => showToast("info", "Just so you know, this is info.")}
        className="bg-blue-500 px-2 py-1 rounded-md text-white"
      >
        Info
      </button>

      <button
        onClick={() => showToast("error", "Oops! Something went wrong.")}
        className="bg-red-500 px-2 py-1 rounded-md text-white"
      >
        Error
      </button>

      <button
        onClick={() => showToast("success", "Your changes were saved!")}
        className="bg-green-500 px-2 py-1 rounded-md text-white"
      >
        Success
      </button>

      {toast && (
        <HotToast
          timer={true}
          type={toast.type}
          content={toast.content}
          onClose={hideToast} // pass close handler
        />
      )}
    </div>
  );
}

export default Page;
