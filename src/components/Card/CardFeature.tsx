type CardPropTypes = {
  className?: string;
};

export default function CardFeature({ className }: CardPropTypes) {
  return <div className={`${className}`}>귀엽네요</div>;
}
