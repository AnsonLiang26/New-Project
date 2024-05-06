// React-Router-Dom import
import { Outlet, useLoaderData } from "react-router-dom";
// Helper import
import { fetchData } from "../helpers"
// Parts import
import Nav from "../parts/Nav";
/*-----------------------------------------------------*/

export function mainLoader() {
    const userName = fetchData("userName");
    return { userName }
}

const Main = () => {
    const { userName } = useLoaderData()
    return (
        <div className="layout">
            <Nav userName={userName} />
            <main>
            <Outlet />
            </main>
        </div>
    )
}
export default Main