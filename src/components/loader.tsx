import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/img/background/Glow loading.json";

type LoadingProps = {
  fullScreen?: boolean;
  size?: number;
  message?: string;
};

const Loading: React.FC<LoadingProps> = ({
  fullScreen = false,
  size = 150,
  message,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        fullScreen ? "fixed inset-0 bg-white/70 z-50" : ""
      }`}
    >
      <Lottie
        animationData={loadingAnimation}
        loop
        style={{ height: size, width: size }}
      />
      {message && <p className="mt-2 text-gray-600">{message}</p>}
    </div>
  );
};

export default Loading;
