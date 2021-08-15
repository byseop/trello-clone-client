type BoardHeaderPropTypes = {
  className?: string;
};

export default function BoardHeaderFeature({
  className
}: BoardHeaderPropTypes) {
  return <header className={`${className}`}></header>;
}
