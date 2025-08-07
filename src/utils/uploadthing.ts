import { generateUploadButton } from "@uploadthing/react";
import global from "../config";

//Replace with your actual server URL
export const UploadButton = generateUploadButton({
  url: global.ROOTURL.prod + "/api/uploadthing", // or your deployed server
});
