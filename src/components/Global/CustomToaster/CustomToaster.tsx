import { FC } from "react";
import { Toaster } from "react-hot-toast";

export const CustomToaster: FC = () => (
  <Toaster position="top-right" reverseOrder={false} />
);
