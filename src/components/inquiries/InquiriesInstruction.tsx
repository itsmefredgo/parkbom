import { admissionSteps } from "../../../public/data/admissionSteps";
import { FaClipboardList } from "react-icons/fa6";

function InquiriesInstruction() {
  return (
    <section
      className=" mx-6 max-w-[60rem]
                sm:w-[80%] sm:mx-auto
                laptop:w-[60%]
                mb-12
      "
    >
      <div
        className=" flex flex-row text-[1.25rem] 
                  text-[#045329] dark:text-[#BFD6D1] font-bold"
      >
        <FaClipboardList className=" text-[1.6rem] mr-2 mb-2" />
        <h2 className=" ">입학 안내</h2>
      </div>
      <ol>
        {admissionSteps.map(({ stepNumber, stepTitle, stepDescription }) => (
          <li key={stepNumber} className="my-4 flex flex-row gap-2">
            <h3 className=" text-[1.125rem]">0{stepNumber}.</h3>
            <div>
              <h3 className=" underline text-[1.125rem]">{stepTitle}</h3>
              <p>{stepDescription}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default InquiriesInstruction;
