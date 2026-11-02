import { Oval } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled";

export const Loader = ({
  width = 80,
  height = 80,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <LoaderWrapper>
      <Oval
        visible={true}
        color="#F4C550"
        height={height}
        width={width}
        ariaLabel="oval-loading"
      />
    </LoaderWrapper>
  );
};
