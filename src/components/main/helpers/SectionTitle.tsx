import Link from "next/link";

type propsType = {
  sectionTitle: string;
  hrefLink: string;
};

export default function MainTitle(props: propsType) {
  return (
    <div className=" border-b-2 border-b-parkbom19 dark:border-b-parkbom04  flex justify-between pb-1">
      <div className=" text-xl">
        <h1>{props.sectionTitle}</h1>
      </div>
      <div className=" text-xs flex flex-col">
        <Link
          className=" mb-0 mt-auto"
          href={props.hrefLink}
        >
          자세히보기
        </Link>
      </div>
    </div>
  );
}
