// Importing components
import TriangleRightEdge from "@/components/aboutus/helper/TriangleRightEdge";
import TriangleBottomEdge from "@/components/aboutus/helper/TriangleBottomEdge";
import ClassProgressStep from "@/components/aboutus/helper/ClassProgressStep";

// Importing classes steps
import classProgressSteps from "@/assets/data/classProgressSteps";

function AboutUsDelivery() {
  // Third part of parkbom's ABOUT US page
  return (
    <section
      className=" pt-8 pb-16 
      bg-[#e8e8e8] dark:bg-[#1c1c1c]"
    >
      <div
        className=" px-[1rem] sm:px-[5rem] md:w-[90%] lg:w-[60rem] xl:w-[65rem] 
        laptop:w-[75rem] mx-auto my-[10rem]"
      >
        {/* Heading of the section */}
        <h2
          className=" text-[2.5rem] font-bold pb-16 pl-2 border-black 
        dark:border-[#BFD6D1] text-[#045329] dark:text-[#BFD6D1]"
        >
          수업진행
        </h2>

        {/* Steps of class delivery steps */}
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
    </section>
  );
}

export default AboutUsDelivery;
