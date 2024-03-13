// Dividers in Class Progress Steps Section
import TriangleRightEdge from "@/components/helpers/TriangleRightEdge";
import TriangleBottomEdge from "@/components/helpers/TriangleBottomEdge";

// Icons
import { CiImageOn } from "react-icons/ci";

function ClassDelivery() {
  return (
    <div
      className=" px-[calc(5vw+2rem)] pt-8 pb-16 
              bg-[#d9ddd1] dark:bg-[#366247]"
    >
      <div className=" laptop:max-w-[70rem] laptop:mx-auto">
        <h2 className=" text-[2rem] pb-4">수업진행</h2>

        {/* Beginning of the Class Progress Section */}

        <div className=" flex flex-col laptop:flex-row">
          {/* Class Progress Step #1 */}
          <div
            className=" relative flex justify-around items-center
                      h-[9rem] rounded-t-3xl
                      bg-[#92C3A4] dark:bg-[#6E5221]
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

          {/* Divider Between Step #1 and #2 */}
          <span className=" laptop:hidden">
            <TriangleBottomEdge
              topColour="#92C3A4"
              darkTopColour="#6E5221"
              betweenColour="#d9ddd1"
              darkBetweenColour="#366247"
              botColour="#D8D797"
              darkBotColour="#8D2A78"
              height={"3rem"}
              width={"100%"}
            ></TriangleBottomEdge>
          </span>
          <span className=" hidden laptop:block">
            <TriangleRightEdge
              triColour={"#92C3A4"}
              darkTriColour={"#6e5221"}
              betweenColour={"#d9ddd1"}
              darkBetweenColour={"#366247"}
              rectColour={"#d8d797"}
              darkRectColour={"#8D2A78"}
              height={"18rem"}
              width={"3rem"}
            ></TriangleRightEdge>
          </span>

          {/* Class Progress Step #2 */}
          <div
            className=" relative flex justify-around items-center
          bg-[#D8D797] dark:bg-[#8D2A78] h-[9rem] 
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

          {/* Divider Between Step #2 and #3 */}
          <span className=" laptop:hidden">
            <TriangleBottomEdge
              botColour="#92C3A4"
              darkBotColour="#6E5221"
              betweenColour="#d9ddd1"
              darkBetweenColour="#366247"
              topColour="#D8D797"
              darkTopColour="#8D2A78"
              height={"3rem"}
              width={"100%"}
            ></TriangleBottomEdge>
          </span>
          <span className=" hidden laptop:block">
            <TriangleRightEdge
              triColour={"#d8d797"}
              darkTriColour={"#8D2A78"}
              betweenColour={"#d9ddd1"}
              darkBetweenColour={"#366247"}
              rectColour={"#92C3A4"}
              darkRectColour={"#6e5221"}
              height={"18rem"}
              width={"3rem"}
            ></TriangleRightEdge>
          </span>

          {/* Class Progress Step #3 */}
          <div
            className=" relative flex justify-around items-center
          bg-[#92C3A4] dark:bg-[#6E5221] h-[9rem]
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

          {/* Divider Between Step #3 and #4 */}
          <span className=" laptop:hidden">
            <TriangleBottomEdge
              topColour="#92C3A4"
              darkTopColour="#6E5221"
              betweenColour="#d9ddd1"
              darkBetweenColour="#366247"
              botColour="#D8D797"
              darkBotColour="#8D2A78"
              height={"3rem"}
              width={"100%"}
            ></TriangleBottomEdge>
          </span>
          <span className=" hidden laptop:block">
            <TriangleRightEdge
              triColour={"#92C3A4"}
              darkTriColour={"#6e5221"}
              betweenColour={"#d9ddd1"}
              darkBetweenColour={"#366247"}
              rectColour={"#d8d797"}
              darkRectColour={"#8D2A78"}
              height={"18rem"}
              width={"3rem"}
            ></TriangleRightEdge>
          </span>

          {/* Class Progress Step #4 */}
          <div
            className=" relative flex justify-around items-center
          bg-[#D8D797] dark:bg-[#8D2A78] h-[9rem] rounded-b-3xl
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

          {/* End of the Class Progress Section */}
        </div>
      </div>
    </div>
  );
}

export default ClassDelivery;
