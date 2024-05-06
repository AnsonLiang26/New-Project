// React-Router-Dom import
import { Form, NavLink } from "react-router-dom"
// Media import
import home from "../media/home.svg"
// Heroicons import
import { TrashIcon } from '@heroicons/react/24/solid'
/*-------------------------------------------------*/

const Nav = ({ userName }) => {
    return (
        <nav>
            <NavLink to="/" aria-label="Go to home">
            <img src={home} alt="" height={30} />
            <span>Home</span>
            </NavLink>
        {
            userName && (
                <Form method="post" action="/logout" onSubmit={(event) => {
                    if(!confirm("Are you sure you want to remove the User?")) {
                        event.preventDefault()
                    }
                }}>
                    <button type="submit" className="btn btn--warning">
                        <span>Remove User</span>
                        <TrashIcon width={24}/>
                    </button>
                </Form>
            )
        }
        </nav>
    )
}
export default Nav