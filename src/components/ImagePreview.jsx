"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const ImagePreview = ({ file, onRemoveFile }) => {
  const fileSize = (file.size / 1024).toFixed(1);
  //console.log(fileSize);

  return (
    <div className="flex flex-col items-center w-32 h-44">
      <div className="flex w-[110px] h-[110px] mt-5 mb-2">
        <Image
          src={file.preview}
          alt={file.name}
          width={110}
          height={110}
          className="w-full h-full object-cover cursor-pointer rounded-lg"
        />
        <button
          className="flex w-6 h-6 items-center justify-center relative -top-3 right-5 text-white bg-red-500 p-1 rounded-full cursor-pointer"
          onClick={() => onRemoveFile(file.name)}
        >
          <X className="w-5 h-5 fill-white hover:fill-blue-300 transition-colors" />
        </button>
      </div>
      <span className="text-xs text-gray-500 w-[110px] mb-1 text-center truncate">
        {file.name}
      </span>
      <span className="text-xs text-gray-500 w-full text-center truncate mb-1">
        {fileSize} Kb.
      </span>
    </div>
  );
};

export default ImagePreview;
