import { CiImageOn } from "react-icons/ci";

function ClassGallary() {
  return (
    <div className="px-[12vw]  laptop:max-w-[80rem] laptop:mx-auto">
      <h2 className=" text-[2rem]">갤러리</h2>
      <div className=" sm:grid sm:grid-cols-2 laptop:grid-cols-3 gap-4 ">
        <div className=" mt-4">
          <div className="ml-2 mb-2">Photo #1</div>
          <CiImageOn className="w-[100%] h-[auto] border-2 border-parkbomDarkBg02 rounded-xl"></CiImageOn>
        </div>
        <div className=" mt-4">
          <div className="ml-2 mb-2">Photo #2</div>
          <CiImageOn className="w-[100%] h-[auto] border-2 border-parkbomDarkBg02 rounded-xl"></CiImageOn>
        </div>
        <div className=" mt-4 sm:mt-8 laptop:mt-4">
          <div className="ml-2 mb-2">Photo #3</div>
          <CiImageOn className="w-[100%] h-[auto] border-2 border-parkbomDarkBg02 rounded-xl"></CiImageOn>
        </div>
        <div className=" mt-4 sm:mt-8">
          <div className="ml-2 mb-2">Photo #4</div>
          <CiImageOn className="w-[100%] h-[auto] border-2 border-parkbomDarkBg02 rounded-xl"></CiImageOn>
        </div>
        <div className=" mt-4 sm:mt-8">
          <div className="ml-2 mb-2">Photo #5</div>
          <CiImageOn className="w-[100%] h-[auto] border-2 border-parkbomDarkBg02 rounded-xl"></CiImageOn>
        </div>
        <div className=" mt-4 sm:mt-8">
          <div className="ml-2 mb-2">Photo #6</div>
          <CiImageOn className="w-[100%] h-[auto] border-2 border-parkbomDarkBg02 rounded-xl"></CiImageOn>
        </div>
      </div>
    </div>
  );
}

export default ClassGallary;
