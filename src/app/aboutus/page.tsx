import parkbom_logo from "@/assets/images/parkbom-logo-tpbg.png";
import Image from "next/image";
import ClassDelivery from "@/components/aboutus/ClassDelivery";

export default function AboutUs() {
  return (
    <div
      className=" bg-[#efefec]
      px-[5vw] tablet:bg-blue-500"
    >
      <div className="pt-[6rem] text-[3rem] mb-8">
        <h1 className=" text-[#045329] font-bold">ABOUT US</h1>
      </div>

      <div>
        <Image
          src={parkbom_logo}
          alt="Parkbom"
          height={100}
          className=" ml-[-1rem] dark: brightness-200"
        ></Image>
        <div className=" w-[20rem] break-keep mb-8">
          조용한 공원 길을 따라 걷다 보면 시원한 가을 바람이 스쳐 지나가고
          마음이 편안해집니다. 이맘때 따뜻한 커피 한 잔과 함께 가을의 아름다움을
          만끽하는 것은 정말 즐거운 일입니다.
        </div>
      </div>

      <div>
        <h2 className=" text-[2rem] mb-2">수업방식</h2>
        <ul>
          <li className=" border-t-2 border-b-2 border-black border-dashed p-4">
            <h3 className=" text-[1.5rem] mb-4">수업방식1</h3>
            <p>
              조용한 공원 길을 따라 걷다 보면 시원한 가을 바람이 스쳐 지나가고
              마음이 편안해집니다. 이맘때 따뜻한 커피 한 잔과 함께 가을의
              아름다움을 만끽하는 것은 정말 즐거운 일입니다.
            </p>
          </li>
          <li className=" border-b-2 border-black border-dashed p-4">
            <h3 className=" text-[1.5rem] mb-4">수업방식2</h3>
            <p>
              조용한 공원 길을 따라 걷다 보면 시원한 가을 바람이 스쳐 지나가고
              마음이 편안해집니다. 이맘때 따뜻한 커피 한 잔과 함께 가을의
              아름다움을 만끽하는 것은 정말 즐거운 일입니다.
            </p>
          </li>
          <li className=" border-b-2 border-black border-dashed p-4">
            <h3 className=" text-[1.5rem] mb-4">수업방식3</h3>
            <p>
              조용한 공원 길을 따라 걷다 보면 시원한 가을 바람이 스쳐 지나가고
              마음이 편안해집니다. 이맘때 따뜻한 커피 한 잔과 함께 가을의
              아름다움을 만끽하는 것은 정말 즐거운 일입니다.
            </p>
          </li>
          <li className=" border-b-2 border-black border-dashed p-4">
            <h3 className=" text-[1.5rem] mb-4">수업방식4</h3>
            <p>
              조용한 공원 길을 따라 걷다 보면 시원한 가을 바람이 스쳐 지나가고
              마음이 편안해집니다. 이맘때 따뜻한 커피 한 잔과 함께 가을의
              아름다움을 만끽하는 것은 정말 즐거운 일입니다.
            </p>
          </li>
          <li className=" border-b-2 border-black border-dashed p-4">
            <h3 className=" text-[1.5rem] mb-4">수업방식5</h3>
            <p>
              조용한 공원 길을 따라 걷다 보면 시원한 가을 바람이 스쳐 지나가고
              마음이 편안해집니다. 이맘때 따뜻한 커피 한 잔과 함께 가을의
              아름다움을 만끽하는 것은 정말 즐거운 일입니다.
            </p>
          </li>
          <li className=" border-b-2 border-black border-dashed p-4">
            <h3 className=" text-[1.5rem] mb-4">수업방식6</h3>
            <p>
              조용한 공원 길을 따라 걷다 보면 시원한 가을 바람이 스쳐 지나가고
              마음이 편안해집니다. 이맘때 따뜻한 커피 한 잔과 함께 가을의
              아름다움을 만끽하는 것은 정말 즐거운 일입니다.
            </p>
          </li>
        </ul>
      </div>

      <ClassDelivery></ClassDelivery>

      <div>
        <h2 className=" text-[2rem]">갤러리</h2>
        <div className="">
          <div className="w-[20%]">some image</div>
          <div>some image2</div>
          <div>some image3</div>
          <div>some image4</div>
          <div>some image5</div>
          <div>some image6</div>
        </div>
      </div>
    </div>
  );
}
