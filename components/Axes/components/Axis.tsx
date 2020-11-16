/**
 * Axis
 */
const Axis = (props: React.SVGProps<SVGLineElement>) => (
  <line
    {...props}
    stroke="black"
    strokeWidth={1}
    vectorEffect="non-scaling-stroke"
  />
);

export default Axis;
