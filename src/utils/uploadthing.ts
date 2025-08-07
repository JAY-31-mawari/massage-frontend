import { generateUploadButton } from "@uploadthing/react";

//Replace with your actual server URL
export const UploadButton = generateUploadButton({
  url: global.config.ROOTURL.prod + "/api/uploadthing", // or your deployed server
});
