type propsType = {
  triColour: string;
  darkTriColour: string;
  betweenColour: string;
  darkBetweenColour: string;
  rectColour: string;
  darkRectColour: string;
  height: string;
  width: string;
};

function TriangleRightEdge(props: propsType) {
  return (
    <svg width={props.width} height={props.height} viewBox="0 0 30 180">
      <rect
        width={props.width}
        height={props.height}
        className={` fill-[${props.rectColour}] dark:fill-[${props.darkRectColour}]`}
      />
      <polygon
        points="0,0 5,0 30,90 5,180 0,180 25,90"
        className={` fill-[${props.betweenColour}] dark:fill-[${props.darkBetweenColour}]`}
      />
      <polygon
        points="0,0 25,90 0,180"
        className={` fill-[${props.triColour}] dark:fill-[${props.darkTriColour}]`}
      />
    </svg>
  );
}

export default TriangleRightEdge;
