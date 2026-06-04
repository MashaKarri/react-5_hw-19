import { ThreeDots } from "react-loader-spinner";

import { LoaderWrapper } from "./Loader.styled.js";

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="40"
        width="40"
        radius="9"
        color="#b20404ff"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ margin: "20px" }}
        wrapperClass="custom-loader"
        visible={true}
      />
    </LoaderWrapper>
  );
};
