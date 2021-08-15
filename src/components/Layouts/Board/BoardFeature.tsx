import CardSet from '@src/components/CardSet';
import BoardHeader from '../BoardHeader';

type BoardPropTypes = {
  className?: string;
};
export default function BoardFeature({ className }: BoardPropTypes) {
  return (
    <div id="board" className={`${className}`}>
      <BoardHeader />
      <div className="contents">
        <div className="card_sets_wrap">
          <CardSet title="짱" />
          <CardSet title="짱" />
          <CardSet title="짱" />
          <CardSet title="짱" />
          <CardSet title="짱" />
          <CardSet title="짱" />
          <CardSet title="짱" />
          <CardSet title="짱" />
          <CardSet title="짱" />
        </div>
      </div>
    </div>
  );
}
