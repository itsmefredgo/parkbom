type propsType = {
  topColour: string;
  darkTopColour: string;
  betweenColour: string;
  darkBetweenColour: string;
  botColour: string;
  darkBotColour: string;
  height: string;
  width: string;
};

function TriangleBottomEdge(props: propsType) {
  return (
    <div>
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 20 3"
        preserveAspectRatio="none"
      >
        <rect
          width={props.width}
          height={props.height}
          className={` fill-[${props.botColour}] dark:fill-[${props.darkBotColour}]`}
        />
        <polygon
          points="0,0 20,0 10,2"
          className={` fill-[${props.topColour}] dark:fill-[${props.darkTopColour}]`}
        />
        <polygon
          points="0,0 10,2 20,0 20,1 10,3 0,1"
          className={` fill-[${props.betweenColour}] dark:fill-[${props.darkBetweenColour}]`}
        />
      </svg>
    </div>
  );
}

export default TriangleBottomEdge;
