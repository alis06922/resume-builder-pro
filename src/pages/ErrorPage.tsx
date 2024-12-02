import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Layout from './Layout';

function ErrorPage() {
    const error = useRouteError();
    return <>
        <Layout />
        <div>
            <h2>Oops</h2>
            <p>{isRouteErrorResponse(error) ? "This page does not exist" : "An unexoected error occured."} </p>
        </div>

    </>
}

export default ErrorPage