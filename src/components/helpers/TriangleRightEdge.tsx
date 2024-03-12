type propsType = {
  triColour: string;
  betweenColour: string;
  rectColour: string;
  height: string;
  width: string;
};

function TriangleRightEdge(props: propsType) {
  return (
    <svg width={props.width} height={props.height} viewBox="0 0 30 180">
      <rect width={props.width} height={props.height} fill={props.rectColour} />
      <polygon points="0,0 25,90 0,180" fill={props.triColour} />
      <polygon
        points="0,0 5,0 30,90 5,180 0,180 25,90"
        fill={props.betweenColour}
      />
    </svg>
  );
}

export default TriangleRightEdge;
