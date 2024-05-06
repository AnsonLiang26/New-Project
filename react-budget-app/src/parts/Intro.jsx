// React-Router-Dom import
import { Form } from "react-router-dom"
// Heroicons import
import { UserPlusIcon } from "@heroicons/react/24/solid"
// Asset import
import stonks from "../media/stonks.jpg"
/*----------------------------------------------------*/

const Intro = () => {
    return (
        <div className="intro">
            <img src={ stonks } alt="Stonks meme" width={600} />
            <div>
                <h1>
                    Do you want to see where <span className="accent">Your Money</span> is going?
                </h1>
                <p>
                    Start budgeting using our app today!
                </p>
                <Form method="post">
                    <input type="text" name="userName" required placeholder="Enter your name" aria-label="Your Name" autoComplete="off"/>
                    <input type="hidden" name="_action" value="newUser" />
                    <button type="submit" className="btn btn--dark">
                        <span>Create Account</span>
                        <UserPlusIcon width={24} />
                    </button>
                </Form>
            </div>
            
        </div>
    )
}
export default Intro