export interface ColourTheme {
  light: string;
  dark: string;
}

const possibleColours = [
  "fill-[#BFD6D1]",
  "dark:fill-[#5b6d68]",
  "fill-[#e8e8e8]",
  "dark:fill-[#1c1c1c]",
  "w-[3rem]",
  "h-[3rem]",
];

type props = {
  triangleColour: ColourTheme;
  dividerColour: ColourTheme;
  secondaryAxis: string;
  wideScreen: boolean;
};

// SVG component for About Us Programs section
function TriangularDivider(props: props) {
  return (
    <>
      {/* Laptop view */}
      <svg
        viewBox="0 0 30 180"
        className={` hidden laptop:block w-[${props.secondaryAxis}] h-full`}
      >
        <rect
          width={props.secondaryAxis}
          height={"100%"}
          className={` fill-[${props.triangleColour.light}] dark:fill-[${props.triangleColour.dark}]`}
        />
        <polygon
          points="0,0 25,90 0,180"
          className={` fill-[${props.triangleColour.light}] dark:fill-[${props.triangleColour.dark}]`}
        />
        <polygon
          points="0,0 5,0 30,90 5,180 0,180 25,90"
          className={` fill-[${props.dividerColour.light}] dark:fill-[${props.dividerColour.dark}]`}
        />
      </svg>
      {/* Mobile view */}
      <svg
        viewBox="0 0 20 3"
        preserveAspectRatio="none"
        className={` block laptop:hidden w-full h-[${props.secondaryAxis}]`}
      >
        <rect
          width={"100%"}
          height={`${props.secondaryAxis}`}
          className={` fill-[${props.triangleColour.light}] dark:fill-[${props.triangleColour.dark}]`}
        />
        <polygon
          points="0,0 20,0 10,2"
          className={` fill-[${props.triangleColour.light}] dark:fill-[${props.triangleColour.dark}]`}
        />
        <polygon
          points="0,0 10,2 20,0 20,1 10,3 0,1"
          className={` fill-[${props.dividerColour.light}] dark:fill-[${props.dividerColour.dark}]`}
        />
      </svg>
    </>
  );
}

export default TriangularDivider;
