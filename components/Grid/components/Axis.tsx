/**
 * Axis
 */
const Axis = (props: React.SVGProps<SVGLineElement>) => (
  <line
    {...props}
    opacity={0.3}
    stroke="black"
    strokeWidth={0.5}
    vectorEffect="non-scaling-stroke"
  />
);

export default Axis;
