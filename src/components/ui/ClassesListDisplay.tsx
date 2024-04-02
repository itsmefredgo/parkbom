import {
  mathClassList,
  englishClassList,
} from "../../../public/data/classesListData";

type propsType = {
  selectedSubject: string;
};

function ClassesListDisplay(props: propsType) {
  let selectedClassList = mathClassList;

  if (props.selectedSubject === "Math") {
    selectedClassList = mathClassList;
  } else {
    selectedClassList = englishClassList;
  }

  return (
    <div className="grid grid-cols-1 w-full">
      {selectedClassList.map(({ classTitle, description }, index) => (
        <div
          className={` break-keep flex tablet:flex-row my-8
                      ${index == 0 ? "flex-row" : "flex-col"}`}
          key={index}
        >
          <div
            className={` w-min-fit w-[8rem] text-lg ${
              index == 0 &&
              "border-b-2 border-[#045329] dark:border-[#b7e2cb] w-fit font-bold text-[#045329] dark:text-[#b7e2cb]"
            }`}
          >
            {classTitle}
          </div>
          <div
            className={` flex-1 pl-4 md:pl-[4rem] mt-4 tablet:mt-0 ${
              index == 0 && "border-b-2 border-[#a7bf81] flex-1"
            }`}
          >
            {description.map((information, index) => (
              <ul key={index}>
                <li className=" list-disc">{information}</li>
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ClassesListDisplay;
