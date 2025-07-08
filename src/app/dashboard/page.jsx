import Link from "next/link";
import {
  CalendarDays,
  FileSpreadsheet,
  PiIcon,
  SquareActivity,
  Stethoscope,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex w-full h-[calc(100vh-128px)] bg-blue-100/50 items-center justify-center">
      <div className="max-w-md grid grid-cols-2 grid-rows-2 w-full h-full gap-4 p-4">
        <div className="bg-white rounded-lg shadow-md">
          <div className="flex flex-col w-full h-full items-center justify-center gap-3">
            <FileSpreadsheet
              size={48}
              className="text-white bg-blue-200 rounded-full border-none p-2"
            />
            <span className="text-md text-blue-700 font-bold">
              Ficha Clínica
            </span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <div className="flex flex-col w-full h-full items-center justify-center gap-3">
            <Stethoscope
              size={48}
              className=" text-white bg-green-200 rounded-full p-2"
            />
            <span className="text-md text-blue-800 font-bold">
              Especialidades
            </span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <div className="flex flex-col w-full h-full items-center justify-center gap-3">
            <CalendarDays
              size={48}
              className="w-12 h-12 text-white bg-purple-200 rounded-full p-2"
            />
            <span className="text-md text-blue-800 font-bold">Calendario</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <Link
            href="/prescriptionsTests"
            className="cursor-pointer transition-all duration-200"
          >
            <div className="flex flex-col w-full h-full items-center justify-center gap-3">
              <SquareActivity
                size={36}
                className="w-12 h-12 text-white bg-red-200 rounded-full p-2"
              />
              <span className="text-md text-blue-800 font-bold">
                Recetas y Exámenes
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
