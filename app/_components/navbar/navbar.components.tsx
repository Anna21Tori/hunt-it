import NavBrand from "./nav-brand.component";
import NavButton from "./nav-button.component";
import NavLink from "./nav-link.components";
import "./styles.scss";
const Navbar = () => {
    return(
        <div className="d-flex justify-content-between">
            <div>
                <NavBrand/>
            </div>
            <div>
                {/* <NavLink slug="/for-employers/" className="standard-offset">For Employers</NavLink> */}
                <NavButton slug="/for-employers/" className="standard-offset">For Employers</NavButton>
            </div>
        </div>
    )
}
export default Navbar;