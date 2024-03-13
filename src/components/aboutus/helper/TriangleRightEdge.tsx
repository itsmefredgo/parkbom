function TriangleRightEdge() {
  return (
    <svg
      width={"3rem"}
      height={"18rem"}
      viewBox="0 0 30 180"
      className=" hidden laptop:block"
    >
      <rect
        width={"3rem"}
        height={"18rem"}
        className={` fill-[#BFD6D1] dark:fill-[#3f4b48]`}
      />
      <polygon
        points="0,0 5,0 30,90 5,180 0,180 25,90"
        className={` fill-[#d9ddd1] dark:fill-[#1c1c1c]`}
      />
      <polygon
        points="0,0 25,90 0,180"
        className={` fill-[#BFD6D1] dark:fill-[#3f4b48]`}
      />
    </svg>
  );
}

export default TriangleRightEdge;
