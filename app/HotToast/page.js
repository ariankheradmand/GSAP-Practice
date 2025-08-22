import HotToast from "@/components/HotToast";
import React from "react";

function page() {
  return (
    <div>
      <HotToast
        timer={false}
        type={"success"}
        content={"Your changes have been saved successfully."}
      />
    </div>
  );
}

export default page;
