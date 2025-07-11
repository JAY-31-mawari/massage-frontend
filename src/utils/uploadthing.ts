import React from "react";
import { generateUploadButton } from "@uploadthing/react";

// Replace with your actual server URL
export const UploadButton = generateUploadButton({
  url: "https://message-booking.onrender.com/api/uploadthing", // or your deployed server
});
