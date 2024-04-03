import data from "@/../public/data/data.json";

type propsType = {
  selectedSubject: string;
};

function ClassesListDisplay(props: propsType) {
  let selectedClassList = data.classes.mathClasses;

  if (props.selectedSubject === "Math") {
    selectedClassList = data.classes.mathClasses;
  } else {
    selectedClassList = data.classes.englishClasses;
  }

  return (
    <div className="grid grid-cols-1 w-full">
      {selectedClassList.map(({ classTitle, description }, index) => (
        <div
          className={` break-keep flex tablet:flex-col my-8
                      ${index == 0 ? "flex-row" : "flex-col"}`}
          key={index}
        >
          <div
            className={` w-min-fit w-[8rem] ${
              index == 0
                ? " border-b-2 border-[#045329] dark:border-[#b7e2cb]" +
                  " font-bold text-[#045329] dark:text-[#b7e2cb] w-fit "
                : " flex items-center text-[1.25rem] " +
                  " h-fit pl-2 py-[-0.2rem]" +
                  " border-l-[0.5rem] border-[#045329] mb-8"
            }`}
          >
            {classTitle}
          </div>
          <div
            className={` flex-1 pl-4 md:pl-[2rem] mt-4 tablet:mt-0 ${
              index == 0 && "border-b-2 border-[#a7bf81] flex-1"
            }`}
          >
            {description.map((information, index) => (
              <ul key={index} className=" pt-1">
                <li className=" list-disc ">{information}</li>
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ClassesListDisplay;
