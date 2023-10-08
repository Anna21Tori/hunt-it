'use client'
import { useUser } from "@auth0/nextjs-auth0/client";
import NavBrand from "./nav-brand.component";
import NavButton from "./nav-button.component";

import "./styles.scss";

const Navbar = () => {
    const { user } = useUser();

    return(
        <div className="d-flex justify-content-between">
            <div>
                <NavBrand/>
            </div>
            <div>
                {/* <NavLink slug="/for-employers/" className="standard-offset">For Employers</NavLink> */}
                <NavButton slug="/for-employers/" >For Employers</NavButton>
                {user ? <NavButton slug="/api/auth/logout" >Log out</NavButton> : <NavButton slug="/api/auth/login">Sign in</NavButton>}
            </div>
        </div>
    )
}
export default Navbar;