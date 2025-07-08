"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Pill, PillIcon, Radiation, RadiationIcon } from "lucide-react";
import prescriptionsTests from "@/data/prescriptionsTests";

const PrescriptionsTestsPage = () => {
  const router = useRouter();
  console.log(prescriptionsTests);

  const formatDate = (date) => {
    const formattedDate = new Intl.DateTimeFormat("es-CL", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
    return formattedDate;
  };

  return (
    <div className="flex flex-col w-full h-full items-center min-h-screen bg-blue-200">
      <div className="w-full max-w-[500px]">
        <h1 className="text-2xl text-blue-800 font-bold py-1 text-center">
          Recetas y Examenes
        </h1>

        <div className="flex items-center justify-between w-full bg-blue-200 px-3 py-2 gap-2">
          <div className="w-1/2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 p-2">
            <Link
              href="/uploaderFiles"
              className="flex flex-row items-center justify-center cursor-pointer transition-all duration-200 gap-1"
            >
              <PillIcon
                className="w-8 h-8 border-white p-1 border-1 rounded-full"
                strokeWidth="1.5"
              />
              Agregar Receta
            </Link>
          </div>
          <div className="w-1/2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 p-2">
            <Link
              href="/uploaderFiles"
              className="flex flex-row items-center justify-center cursor-pointer transition-all duration-200 gap-1"
            >
              <RadiationIcon
                className="w-8 h-8 border-white p-1 border-1 rounded-full"
                strokeWidth="1.5"
              />
              Agregar Examen
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-full p-3 gap-3">
          {prescriptionsTests.map((prescriptionTest) => (
            <div
              key={prescriptionTest.id}
              className="flex items-center justify-between w-full h-20 bg-white rounded-lg shadow-md p-4 hover:transition-transform hover:scale-102 hover:bg-blue-50"
            >
              {/* DATOS DEL EXAMEN/RECETA*/}
              <div className="flex items-center justify-center gap-3">
                {prescriptionTest.type === "prescription" ? (
                  <Pill
                    className="w-8 h-8 text-blue-500 border-blue:500 p-1 border-1 rounded-full"
                    strokeWidth="1.5"
                  />
                ) : (
                  <Radiation
                    className="w-8 h-8 text-blue-500 border-blue:500 p-1 border-1 rounded-full"
                    strokeWidth="1.5"
                  />
                )}
                <div className="flex flex-col">
                  <span className="text-md text-blue-800 font-bold">
                    {prescriptionTest.title}
                  </span>
                  <span className="text-sm text-blue-700">
                    {prescriptionTest.description}
                  </span>
                  <span className="text-sm text-blue-700">
                    {formatDate(prescriptionTest.createdAt)}
                  </span>
                </div>
              </div>
              {/* IMAGEN DEL EXAMEN/RECETA*/}
              <div>
                {prescriptionTest.mediaType === "video" ? (
                  <video
                    src={prescriptionTest.media}
                    className="h-18 object-cover rounded-lg"
                    autoPlay
                    loop
                    muted
                  />
                ) : prescriptionTest.mediaType === "image" ? (
                  <Image
                    src={prescriptionTest.media}
                    alt=""
                    width={100}
                    height={72}
                    className="h-18 object-cover rounded-lg"
                  />
                ) : prescriptionTest.mediaType === "pdf" ? (
                  <span className="text-xs text-red-500 font-bold">
                    PDF File Preview
                  </span>
                ) : (
                  <span className="text-xs text-red-500 font-bold">
                    No File Preview
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrescriptionsTestsPage;
