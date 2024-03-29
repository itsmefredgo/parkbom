// Importing necessary react icons
import { CiImageOn } from "react-icons/ci";

// Props type
type propsArgument = {
  title: string;
  description: string;
  index: number;
};

function ClassProgressStep(props: propsArgument) {
  // Component printing a class step's title and its description
  return (
    <>
      {props.index % 2 == 1 && <CiImageOn className=" h-20 w-20" />}
      <div className=" h-fit w-[50%] ">
        <h1 className=" text-[1.5rem]">{props.title}</h1>
        <p className=" text-[0.75rem]">{props.description}</p>
      </div>
      {props.index % 2 == 0 && <CiImageOn className=" h-20 w-20" />}
    </>
  );
}

export default ClassProgressStep;
