import { FC, ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";

import css from './Navigation.module.scss';
import { Logo } from "../../svg-components";

const Navigation: FC = () => {
    return (
        <>
            <div className={css.Navigation}>
                <Link to={'/'} className={css.LogoContainer}>
                    <Logo />
                </Link>
                <div className={css.NavLinksContainer}>
                    <Link to={'/shop'} className={css.NavLink}>
                        SHOP
                    </Link>
                    <Link to={'/sign-in'} className={css.NavLink}>
                        SIGN IN
                    </Link>
                </div>
            </div>

            <Outlet />
        </>
    )
};

export { Navigation };