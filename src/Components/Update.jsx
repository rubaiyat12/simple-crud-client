import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loaderUser = useLoaderData();
    return (
        <div>
            <h3>Updated information of {loaderUser.email}</h3>
            
        </div>
    );
};

export default Update;