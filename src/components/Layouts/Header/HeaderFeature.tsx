import Button from '@components/Button';
import { ReactComponent as MenuIcon } from '@assets/images/icons/icon-menus.svg';
import { ReactComponent as HomeIcon } from '@assets/images/icons/icon-home.svg';
import { ReactComponent as HomeBoard } from '@assets/images/icons/icon-board.svg';
import { ReactComponent as PlusIcon } from '@assets/images/icons/icon-plus.svg';
import { ReactComponent as InfoIcon } from '@assets/images/icons/icon-info.svg';
import { ReactComponent as NoticeIcon } from '@assets/images/icons/icon-notice.svg';

type HeaderPropTypes = {
  className?: string;
};

export default function HeaderFeature({ className }: HeaderPropTypes) {
  return (
    <header id="header" className={`${className}`}>
      <div className="header_inner">
        <div className="left_menu">
          <Button leftIcon={<MenuIcon />} />
          <Button leftIcon={<HomeIcon />} />
          <Button leftIcon={<HomeBoard />}>Board</Button>
        </div>
        <div className="logo">TRELLO</div>
        <div className="right_menu">
          <Button leftIcon={<PlusIcon />} />
          <Button leftIcon={<InfoIcon />} />
          <Button leftIcon={<NoticeIcon />} />
        </div>
      </div>
    </header>
  );
}
