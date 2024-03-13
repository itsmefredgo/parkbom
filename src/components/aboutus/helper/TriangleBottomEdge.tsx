function TriangleBottomEdge() {
  return (
    <svg
      width={"100%"}
      height={"3rem"}
      viewBox="0 0 20 3"
      preserveAspectRatio="none"
      className=" laptop:hidden"
    >
      <rect
        width={"100%"}
        height={"3rem"}
        className={` fill-[#BFD6D1] dark:fill-[#3f4b48]`}
      />
      <polygon
        points="0,0 20,0 10,2"
        className={` fill-[#BFD6D1] dark:fill-[#3f4b48]`}
      />
      <polygon
        points="0,0 10,2 20,0 20,1 10,3 0,1"
        className={` fill-[#d9ddd1] dark:fill-[#1c1c1c]`}
      />
    </svg>
  );
}

export default TriangleBottomEdge;
