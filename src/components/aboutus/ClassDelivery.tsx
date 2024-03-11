import TriangleRightEdge from "@/components/helpers/TriangleRightEdge";
import TriangleBottomEdge from "@/components/helpers/TriangleBottomEdge";
import { CiImageOn } from "react-icons/ci";

function ClassDelivery() {
  return (
    <div className=" mx-4  my-8">
      <h2 className=" text-[2rem] mb-4">수업진행</h2>
      <div className=" flex flex-col">
        <div
          className=" bg-[#D37676] relative flex justify-around items-center h-[9rem] rounded-t-3xl
          tablet:w-[calc((100%-9rem)/4)]"
        >
          <div className=" h-fit w-[50%]">
            <h1 className=" text-[1.5rem]">1. 예습 (준비)</h1>
            <p className=" text-[0.75rem]">
              목표: 집중적으로 배우기 전에 자료에 대한 일반적인 이해를 습득하는
              것
            </p>
          </div>
          <CiImageOn className=" h-20 w-20" />
        </div>

        <span className=" tablet:hidden">
          <TriangleBottomEdge
            topColour={"#D37676"}
            betweenColour={"#efefec"}
            botColour={"#F1EF99"}
            height={"3rem"}
            width={"100%"}
          ></TriangleBottomEdge>
        </span>
        <span className=" hidden tablet:block">
          <TriangleRightEdge
            triColour={"#D37676"}
            betweenColour={"#efefec"}
            rectColour={"#F1EF99"}
            height={"8rem"}
            width={"3rem"}
          ></TriangleRightEdge>
        </span>

        <div
          className=" bg-[#F1EF99] relative flex justify-around items-center h-[8rem]
          tablet:w-[calc((100%-9rem)/4)]"
        >
          <CiImageOn className=" h-20 w-20" />
          <div className=" h-fit w-[50%]">
            <h1 className=" text-[1.5rem]">2. 능동 학습 (참여)</h1>
            <p className=" text-[0.75rem]">
              목표: 집중적으로 배우기 전에 자료에 대한 일반적인 이해를 습득하는
              것
            </p>
          </div>
        </div>

        <span className=" hidden tablet:block">
          <TriangleRightEdge
            triColour={"#F1EF99"}
            betweenColour={"#efefec"}
            rectColour={"#D37676"}
            height={"8rem"}
            width={"3rem"}
          ></TriangleRightEdge>
        </span>
        <span className=" tablet:hidden">
          <TriangleBottomEdge
            topColour={"#F1EF99"}
            betweenColour={"#efefec"}
            botColour={"#D37676"}
            height={"3rem"}
            width={"100%"}
          ></TriangleBottomEdge>
        </span>

        <div
          className=" bg-[#D37676] relative flex justify-around items-center h-[8rem]
          tablet:w-[calc((100%-9rem)/4)]"
        >
          <div className=" h-fit w-[50%]">
            <h1 className=" text-[1.5rem]">3. 복습 및 정리</h1>
            <p className=" text-[0.75rem]">
              목표: 집중적으로 배우기 전에 자료에 대한 일반적인 이해를 습득하는
              것
            </p>
          </div>
          <CiImageOn className=" h-20 w-20" />
        </div>

        <span className=" hidden tablet:block">
          <TriangleRightEdge
            triColour={"#D37676"}
            betweenColour={"#efefec"}
            rectColour={"#F1EF99"}
            height={"8rem"}
            width={"3rem"}
          ></TriangleRightEdge>
        </span>
        <span className=" tablet:hidden">
          <TriangleBottomEdge
            topColour={"#D37676"}
            betweenColour={"#efefec"}
            botColour={"#F1EF99"}
            height={"3rem"}
            width={"100%"}
          ></TriangleBottomEdge>
        </span>

        <div
          className=" bg-[#F1EF99] relative flex justify-around items-center h-[9rem] rounded-b-3xl
          tablet:w-[calc((100%-9rem)/4)]"
        >
          <CiImageOn className=" h-20 w-20" />
          <div className=" h-fit w-[50%]">
            <h1 className=" text-[1.5rem]">4. 반성 및 응용</h1>
            <p className=" text-[0.75rem]">
              목표: 집중적으로 배우기 전에 자료에 대한 일반적인 이해를 습득하는
              것
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassDelivery;
