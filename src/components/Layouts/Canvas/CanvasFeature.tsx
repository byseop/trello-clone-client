import Board from '../Board';
import Header from '../Header';

type CanvasPropTypes = {
  className?: string;
};

export default function CanvasFeature({ className }: CanvasPropTypes) {
  return (
    <div id="canvas" className={`${className}`}>
      <div className="bg" />
      <Header />
      <Board />
    </div>
  );
}
