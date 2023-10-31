import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  to: string;
  page: string;
}

const NavSideBar: FC<Props> = ({ to, page }) => {
  return (
    <NavLink className={({ isActive }) => classNames('nav-link', {
      'is-active': isActive
      })}
      to={to}>
        {page}
    </NavLink>
  )
}

export default NavSideBar;
