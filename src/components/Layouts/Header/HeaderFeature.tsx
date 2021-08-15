import Button from '@components/Button';

type HeaderPropTypes = {
  className?: string;
};

export default function HeaderFeature({ className }: HeaderPropTypes) {
  return (
    <header id="header" className={`${className}`}>
      <div className="header_inner">
        <div className="left_menu">
          <Button>123</Button>
        </div>
        <div className="logo"></div>
        <div className="right_menu"></div>
      </div>
    </header>
  );
}
