import { Toaster } from "sonner";

const Providers = ({ children }) => {
  return (
    <div>
      {children} <Toaster position="top-right" expand={true} richColors />
    </div>
  );
};

export default Providers;
