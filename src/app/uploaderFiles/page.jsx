"use client";

import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import ImagePreview from "@/components/ImagePreview";

const uploaderFilesPage = () => {
  const [files, setFiles] = useState([]);
  const [rejected, setRejected] = useState([]);

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }

    console.log(rejectedFiles);
    if (rejectedFiles?.length) {
      setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxSize: 1024 * 50,
  });

  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
    console.log(files);
  };

  const removeRejectedFile = (name) => {
    setRejected((files) => files.filter(({ file }) => file.name !== name));
    console.log(rejected);
  };

  const removeAll = () => {
    setFiles([]);
    setRejected([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!files?.length) return;

    const formData = new FormData();
    files.forEach((file) => formData.append("file", file));
    formData.append("upload_preset", "friendsbook");

    const data = await fetch("/api/prescriptionExams", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    console.log(data);
  };

  return (
    <form
      className="flex flex-col items-center justify-start mx-auto w-full h-[calc(100vh-128px)] bg-blue-200 p-6 cursor-pointer overflow-x-hidden overflow-y-auto "
      onSubmit={handleSubmit}
    >
      <div className="w-full sm:w-4/5 md-2/5">
        <div
          {...getRootProps({
            className:
              "flex items-center justify-center w-full h-40 p-16 mt-3 border-dashed border-2 border-blue-400 rounded-lg",
          })}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>

        {/* Preview */}
        {(files?.length > 0 || rejected?.length > 0) && (
          <section className="mt-10 w-full">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-2xl font-bold text-blue-600">Preview</h2>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={removeAll}
                  className={`text-[12px] tracking-wider font-bold bg-red-500 text-white border border-red-500 rounded-md py-2 px-4 hover:bg-red-700 hover:text-white transition-colors ${
                    !files?.length && !rejected?.length ? "hidden" : ""
                  }`}
                >
                  Descartar todo
                </button>

                <button
                  type="submit"
                  className={`text-[12px] tracking-wider font-bold text-white bg-green-500 rounded-md py-2 px-4 hover:bg-green-700 hover:text-white transition-colors ${
                    !files?.length ? "hidden" : ""
                  }
              `}
                >
                  Enviar
                </button>
              </div>
            </div>

            {/** Accepted Files */}
            {files?.length > 0 && (
              <div>
                <h3 className="flex self-start text-xl font-semibold text-blue-600 mt-5 border-b pb-2 border-b-blue-600">
                  Accepted Files
                </h3>
                <div className="flex items-center w-full h-48 mt-2 gap-2 p-0 overflow-hidden overflow-x-auto">
                  {files.map((file, index) => (
                    <ImagePreview
                      key={index}
                      file={file}
                      onRemoveFile={removeFile}
                    />
                  ))}
                </div>
              </div>
            )}

            {/** Rejected Files */}
            {rejected?.length > 0 && (
              <div>
                <h3 className="flex self-start text-xl font-semibold text-blue-600 mt-10 border-b pb-2 border-b-blue-600">
                  Rejected Files
                </h3>
                <div className="flex flex-col gap-2">
                  {rejected.map(({ file, errors }) => (
                    <li
                      key={file.name}
                      className="flex items-start justify-between border-b-1 border-b-red-300 py-2"
                    >
                      <div>
                        <p className="mt-2 text-neutral-500 text-sm font-medium">
                          {file.name}
                        </p>
                        <ul className="text-[12px] text-red-400">
                          {errors.map((error) => (
                            <li key={error.code}>{error.message}</li>
                          ))}
                        </ul>
                      </div>
                      <button
                        type="button"
                        className="flex items-center bg-red-500 hover:bg-red-700 text-white mt-1 py-2 px-4 text-[12px] tracking-wider font-bold rounded-md transition-colors"
                        onClick={() => removeRejectedFile(file.name)}
                      >
                        Rechazar
                      </button>
                    </li>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </form>
  );
};

export default uploaderFilesPage;
