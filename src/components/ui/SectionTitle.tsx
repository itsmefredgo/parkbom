type sectionTitleProps = {
  title: string;
};

function SectionTitle({ title }: sectionTitleProps) {
  return (
    <h2
      className=" text-[2.5rem] font-bold pb-16 border-black
        dark:border-[#BFD6D1] text-[#045329] dark:text-[#BFD6D1]"
    >
      {title}
    </h2>
  );
}

export default SectionTitle;
