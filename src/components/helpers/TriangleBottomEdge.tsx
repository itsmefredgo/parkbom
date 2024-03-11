type propsType = {
  topColour: string;
  betweenColour: string;
  botColour: string;
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
          fill={props.botColour}
        />
        <polygon points="0,0 20,0 10,2" fill={props.topColour} />
        <polygon
          points="0,0 10,2 20,0 20,1 10,3 0,1"
          fill={props.betweenColour}
        />
      </svg>
    </div>
  );
}

export default TriangleBottomEdge;
