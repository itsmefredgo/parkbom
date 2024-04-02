// Importing components
import TriangleRightEdge from "@/components/ui/TriangularDivider";
import ClassProgressStep from "@/components/ui/ClassProgressStep";
import data from "@/../public/data/data.json";
import SectionTitle from "../ui/SectionTitle";

function AboutUsDelivery() {
  // Third part of parkbom's ABOUT US page
  return (
    <section
      className=" pt-8 pb-16 transition-[300ms]
      bg-[#e8e8e8] dark:bg-[#1c1c1c]"
    >
      <div
        className=" px-[1rem] sm:px-[5rem] md:w-[90%] lg:w-[60rem] xl:w-[65rem] 
        laptop:w-[75rem] mx-auto my-[10rem]"
      >
        {/* Heading of the section */}
        <SectionTitle title="수업진행" />

        {/* Steps of class delivery steps */}
        <div className=" flex flex-col laptop:flex-row transition-[300ms]">
          {data.aboutus.delivery.map(
            ({ deliveryTitle, description }, index) => (
              <>
                <div
                  className={` relative flex justify-between items-center h-[9rem] 
                bg-[#BFD6D1] dark:bg-[#5b6d68] laptop:rounded-none p-12 laptop:p-0
                laptop:w-[calc((100%-9rem)/4)] laptop:h-[18rem] 
                laptop:flex-col laptop:justify-center laptop:gap-4
                    ${
                      index == 0
                        ? "rounded-t-3xl laptop:rounded-l-3xl"
                        : index == data.aboutus.delivery.length - 1
                        ? "rounded-b-3xl laptop:rounded-r-3xl"
                        : ""
                    }`}
                  key={index}
                >
                  <ClassProgressStep
                    title={deliveryTitle}
                    description={description}
                    index={index}
                  ></ClassProgressStep>
                </div>
                {index + 1 != data.aboutus.delivery.length && (
                  /* <TriangleBottomEdge></TriangleBottomEdge> */
                  <TriangleRightEdge
                    triangleColour={{ light: "#BFD6D1", dark: "#5b6d68" }}
                    dividerColour={{ light: "#e8e8e8", dark: "#1c1c1c" }}
                    secondaryAxis="3rem"
                    wideScreen={false}
                  ></TriangleRightEdge>
                )}
              </>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default AboutUsDelivery;
