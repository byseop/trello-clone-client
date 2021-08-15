import Card from '../Card';

type CardSetPropTypes = {
  className?: string;
  title: string;
};

export default function CardSetFeature({ className, title }: CardSetPropTypes) {
  return (
    <div className={`${className} card_set`}>
      <div className="title_wrap">
        <textarea defaultValue={title} />
      </div>
      <div className="card_list_wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
