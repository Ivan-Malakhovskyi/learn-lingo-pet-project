import { FC } from "react";
import { Toaster } from "react-hot-toast";

export const CustomToaster: FC = () => {
  return <Toaster containerStyle={{ top: 20, left: 20 }} />;
};
