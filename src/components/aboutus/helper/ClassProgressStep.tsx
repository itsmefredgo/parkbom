import { CiImageOn } from "react-icons/ci";

type propsArgument = {
  title: string;
  description: string;
};

function ClassProgressStep(props: propsArgument) {
  return (
    <>
      <div className=" h-fit w-[50%] laptop:w-[80%]">
        <h1 className=" text-[1.5rem]">{props.title}</h1>
        <p className=" text-[0.75rem]">{props.description}</p>
      </div>
      <CiImageOn className=" h-20 w-20" />
    </>
  );
}

export default ClassProgressStep;
