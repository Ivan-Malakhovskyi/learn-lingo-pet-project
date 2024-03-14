import { Oval } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled";
import { FC } from "react";

export const Loader: FC = () => {
  return (
    <LoaderWrapper>
      <Oval
        visible={true}
        color="#F4C550"
        height="80"
        width="80"
        ariaLabel="oval-loading"
      />
    </LoaderWrapper>
  );
};
