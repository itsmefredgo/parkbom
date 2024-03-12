import TriangleRightEdge from "@/components/helpers/TriangleRightEdge";
import TriangleBottomEdge from "@/components/helpers/TriangleBottomEdge";
import { CiImageOn } from "react-icons/ci";

function ClassDelivery() {
  return (
    <div className=" px-[calc(5vw+2rem)] pt-8 pb-16 bg-[#d9ddd1]">
      <div className=" laptop:max-w-[70rem] laptop:mx-auto">
        <h2 className=" text-[2rem] pb-4">수업진행</h2>
        <div className=" flex flex-col laptop:flex-row">
          <div
            className=" relative flex justify-around items-center
          bg-[#D37676] h-[9rem] rounded-t-3xl
          laptop:w-[calc((100%-9rem)/4)] laptop:rounded-none 
          laptop:rounded-l-3xl laptop:h-[18rem] laptop:flex-col 
          laptop:justify-center laptop: gap-4"
          >
            <div className=" h-fit w-[50%] laptop:w-[80%]">
              <h1 className=" text-[1.5rem]">1. 예습 (준비)</h1>
              <p className=" text-[0.75rem]">
                목표: 집중적으로 배우기 전에 자료에 대한 일반적인 이해를
                습득하는 것
              </p>
            </div>
            <CiImageOn className=" h-20 w-20" />
          </div>

          <span className=" laptop:hidden">
            <TriangleBottomEdge
              topColour={"#D37676"}
              betweenColour={"#d9ddd1"}
              botColour={"#F1EF99"}
              height={"3rem"}
              width={"100%"}
            ></TriangleBottomEdge>
          </span>
          <span className=" hidden laptop:block">
            <TriangleRightEdge
              triColour={"#D37676"}
              betweenColour={"#d9ddd1"}
              rectColour={"#F1EF99"}
              height={"18rem"}
              width={"3rem"}
            ></TriangleRightEdge>
          </span>

          <div
            className=" relative flex justify-around items-center
          bg-[#F1EF99] h-[9rem] 
          laptop:w-[calc((100%-9rem)/4)] laptop:rounded-none 
          laptop:h-[18rem] laptop:flex-col 
          laptop:justify-center laptop: gap-4"
          >
            <CiImageOn className=" h-20 w-20" />
            <div className=" h-fit w-[50%]">
              <h1 className=" text-[1.5rem]">2. 능동 학습 (참여)</h1>
              <p className=" text-[0.75rem]">
                목표: 집중적으로 배우기 전에 자료에 대한 일반적인 이해를
                습득하는 것
              </p>
            </div>
          </div>

          <span className=" hidden laptop:block">
            <TriangleRightEdge
              triColour={"#F1EF99"}
              betweenColour={"#d9ddd1"}
              rectColour={"#D37676"}
              height={"18rem"}
              width={"3rem"}
            ></TriangleRightEdge>
          </span>
          <span className=" laptop:hidden">
            <TriangleBottomEdge
              topColour={"#F1EF99"}
              betweenColour={"#d9ddd1"}
              botColour={"#D37676"}
              height={"3rem"}
              width={"100%"}
            ></TriangleBottomEdge>
          </span>

          <div
            className=" relative flex justify-around items-center
          bg-[#D37676] h-[9rem]
          laptop:w-[calc((100%-9rem)/4)] laptop:rounded-none 
          laptop:h-[18rem] laptop:flex-col 
          laptop:justify-center laptop: gap-4"
          >
            <div className=" h-fit w-[50%]">
              <h1 className=" text-[1.5rem]">3. 복습 및 정리</h1>
              <p className=" text-[0.75rem]">
                목표: 집중적으로 배우기 전에 자료에 대한 일반적인 이해를
                습득하는 것
              </p>
            </div>
            <CiImageOn className=" h-20 w-20" />
          </div>

          <span className=" hidden laptop:block">
            <TriangleRightEdge
              triColour={"#D37676"}
              betweenColour={"#d9ddd1"}
              rectColour={"#F1EF99"}
              height={"18rem"}
              width={"3rem"}
            ></TriangleRightEdge>
          </span>
          <span className=" laptop:hidden">
            <TriangleBottomEdge
              topColour={"#D37676"}
              betweenColour={"#d9ddd1"}
              botColour={"#F1EF99"}
              height={"3rem"}
              width={"100%"}
            ></TriangleBottomEdge>
          </span>

          <div
            className=" relative flex justify-around items-center
          bg-[#F1EF99] h-[9rem] rounded-b-3xl
          laptop:w-[calc((100%-9rem)/4)] laptop:rounded-none 
          laptop:rounded-r-3xl laptop:h-[18rem] laptop:flex-col 
          laptop:justify-center laptop: gap-4"
          >
            <CiImageOn className=" h-20 w-20" />
            <div className=" h-fit w-[50%]">
              <h1 className=" text-[1.5rem]">4. 반성 및 응용</h1>
              <p className=" text-[0.75rem]">
                목표: 집중적으로 배우기 전에 자료에 대한 일반적인 이해를
                습득하는 것
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassDelivery;
