import programItems, { ProgramItem } from "../data/programs";
import { CiImageOn } from "react-icons/ci";

function checkEven(number: number): boolean {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function ClassMethods() {
  return (
    <div className="my-20 px-[5vw]  laptop:max-w-[80rem] laptop:mx-auto">
      <h2 className=" text-[2rem] pb-2 pl-2 border-b-2 border-black dark:border-[#efeba6] border-solid">
        수업방식
      </h2>
      <div className=" grid grid-cols-1 tablet:grid-cols-2">
        {programItems.map(({ programAttribute, description }, index) => (
          <div
            key={index}
            className={` border-b-2 border-black border-solid 
            dark:border-[#efeba6]
            p-8 relative ${
              checkEven(index)
                ? " tablet:border-r-2" // Even
                : "" // Odd
            }`}
          >
            <div className=" flex sm:h-[8rem] tablet:h-auto">
              <div className=" text-[1.25rem]">
                <span className=" font-bold text-[2rem]">{index + 1}.</span>{" "}
                {programAttribute}
              </div>
            </div>
            <div
              className=" mt-4 flex justify-center
              sm:mt-0 sm:w-[calc(100%-4rem)] sm:absolute sm:top-8
              tablet:relative tablet:top-0 tablet:w-auto tablet:mt-2"
            >
              <CiImageOn className=" h-[8rem] w-[8rem]"></CiImageOn>
            </div>
            <div className=" p-4">{description}</div>
          </div>
        ))}
        {/* <div className=" border-b-2 tablet:border-r-2 border-black border-solid p-4">
          <div className=" text-[1.5rem] mb-4">수업방식1</div>
          <div>
            조용한 공원 길을 따라 걷다 보면 시원한 가을 바람이 스쳐 지나가고
            마음이 편안해집니다. 이맘때 따뜻한 커피 한 잔과 함께 가을의
            아름다움을 만끽하는 것은 정말 즐거운 일입니다.
          </div>
        </div>
        <div className=" border-b-2 border-black border-solid p-4">
          <div className=" text-[1.5rem] mb-4">수업방식2</div>
          <div>
            조용한 공원 길을 따라 걷다 보면 시원한 가을 바람이 스쳐 지나가고
            마음이 편안해집니다. 이맘때 따뜻한 커피 한 잔과 함께 가을의
            아름다움을 만끽하는 것은 정말 즐거운 일입니다.
          </div>
        </div>
        <div className=" border-b-2 tablet:border-r-2 border-black border-solid p-4">
          <div className=" text-[1.5rem] mb-4">수업방식3</div>
          <div>
            조용한 공원 길을 따라 걷다 보면 시원한 가을 바람이 스쳐 지나가고
            마음이 편안해집니다. 이맘때 따뜻한 커피 한 잔과 함께 가을의
            아름다움을 만끽하는 것은 정말 즐거운 일입니다.
          </div>
        </div>
        <div className=" border-b-2 border-black border-solid p-4">
          <div className=" text-[1.5rem] mb-4">수업방식4</div>
          <div>
            조용한 공원 길을 따라 걷다 보면 시원한 가을 바람이 스쳐 지나가고
            마음이 편안해집니다. 이맘때 따뜻한 커피 한 잔과 함께 가을의
            아름다움을 만끽하는 것은 정말 즐거운 일입니다.
          </div>
        </div>
        <div className=" border-b-2 tablet:border-r-2 border-black border-solid p-4">
          <div className=" text-[1.5rem] mb-4">수업방식5</div>
          <div>
            조용한 공원 길을 따라 걷다 보면 시원한 가을 바람이 스쳐 지나가고
            마음이 편안해집니다. 이맘때 따뜻한 커피 한 잔과 함께 가을의
            아름다움을 만끽하는 것은 정말 즐거운 일입니다.
          </div>
        </div>
        <div className=" border-b-2 border-black border-solid p-4">
          <div className=" text-[1.5rem] mb-4">수업방식6</div>
          <div>
            조용한 공원 길을 따라 걷다 보면 시원한 가을 바람이 스쳐 지나가고
            마음이 편안해집니다. 이맘때 따뜻한 커피 한 잔과 함께 가을의
            아름다움을 만끽하는 것은 정말 즐거운 일입니다.
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ClassMethods;
