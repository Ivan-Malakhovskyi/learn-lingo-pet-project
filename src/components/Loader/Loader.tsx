import { Puff } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Puff
      visible={true}
      height="80"
      width="80"
      ariaLabel="puff-loading"
      color="#F4C550"
      wrapperStyle={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};
