// Dividers in Class Progress Steps Section
import TriangleRightEdge from "@/components/aboutus/helper/TriangleRightEdge";
import TriangleBottomEdge from "@/components/aboutus/helper/TriangleBottomEdge";
import ClassProgressStep from "./helper/ClassProgressStep";

// Data Imports
import classProgressSteps from "../../assets/data/classProgressSteps";

function ClassDelivery() {
  return (
    <div
      className=" px-[calc(5vw+2rem)] pt-8 pb-16 
                bg-[#d9ddd1] dark:bg-[#1c1c1c]"
    >
      <div className=" laptop:max-w-[70rem] laptop:mx-auto">
        <h2 className=" text-[2rem] pb-4">수업진행</h2>

        <div className=" flex flex-col laptop:flex-row">
          {classProgressSteps.map(({ stepTitle, description }, index) => (
            <>
              <div
                className={` relative flex justify-around items-center h-[9rem] 
                      bg-[#BFD6D1] dark:bg-[#5b6d68] laptop:rounded-none 
                      laptop:w-[calc((100%-9rem)/4)] laptop:h-[18rem] 
                      laptop:flex-col laptop:justify-center laptop:gap-4
                    ${
                      index == 0
                        ? "rounded-t-3xl laptop:rounded-l-3xl"
                        : index == classProgressSteps.length - 1
                        ? "rounded-b-3xl laptop:rounded-r-3xl"
                        : ""
                    }`}
              >
                <ClassProgressStep
                  title={stepTitle}
                  description={description}
                  index={index}
                ></ClassProgressStep>
              </div>
              {index + 1 != classProgressSteps.length && (
                <>
                  <TriangleBottomEdge></TriangleBottomEdge>
                  <TriangleRightEdge></TriangleRightEdge>
                </>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClassDelivery;
