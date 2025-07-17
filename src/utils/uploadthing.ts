import { generateUploadButton } from "@uploadthing/react";

//Replace with your actual server URL
export const UploadButton = generateUploadButton({
  url: "http://localhost:3002/api/uploadthing", // or your deployed server
});
