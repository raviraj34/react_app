import { NavLink, useRouteError } from "react-router-dom";

export const Error = () => {
    const Error = useRouteError();
    return (
        <div>
            <h1>Oops..! An Error Occured</h1>
            {Error && <p>{Error.data}</p>}
        <NavLink to="/"><button>Home</button></NavLink>
        </div>
    )
}