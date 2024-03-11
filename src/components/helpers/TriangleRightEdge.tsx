type propsType = {
  triColour: string;
  betweenColour: string;
  rectColour: string;
  height: string;
  width: string;
};

function TriangleRightEdge(props: propsType) {
  return (
    <svg width={props.width} height={props.height} viewBox="0 0 30 80">
      <rect width={props.width} height={props.height} fill={props.rectColour} />
      <polygon points="0,0 25,40 0,80" fill={props.triColour} />
      <polygon
        points="0,0 5,0 30,40 5,80 0,80 25,40"
        fill={props.betweenColour}
      />
    </svg>
  );
}

export default TriangleRightEdge;
