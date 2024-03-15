import englishClassList from "@/components/data/englishClassesList";

function EnglishClassList() {
  return (
    <div
      className="grid grid-cols-1 w-full
                  "
    >
      {englishClassList.map(({ classTitle, description }, index) => (
        <div
          className={` break-keep flex tablet:flex-row my-4
                      ${index == 0 ? "flex-row" : "flex-col"}`}
          key={index}
        >
          <div
            className={` w-min-fit w-[8rem] text-lg
                        ${
                          index == 0 &&
                          "border-b-2 border-[#045329] w-fit font-bold text-[#045329]"
                        }`}
          >
            {classTitle}
          </div>
          <div
            className={` flex-1 pl-4 mt-4 tablet:mt-0 ${
              index == 0 && "border-b-2 border-[#a7bf81] flex-1"
            }`}
          >
            {description.map((information) => (
              <ul key={index}>
                <li>- {information}</li>
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default EnglishClassList;
