import React from "react";
import Axios from "axios";

import { PageTitle } from "../_components/PageTitle";
import STATUS_CODES from "../../utils/STATUS_CODES";
import { PetsGrid } from "./components/PetsGrid";

const Home = () => {
    const [status, setStatus] = React.useState(STATUS_CODES.UNLOADED);

    const [pets, setPets] = React.useState([]);

    React.useEffect(() => {
        if (status !== STATUS_CODES.UNLOADED) return;

        setStatus(STATUS_CODES.LOADING);

        Axios.get("http://eulerity-hackathon.appspot.com/pets")
            .then(({ data }) => {
                setPets(data);
                setStatus(STATUS_CODES.LOADED);
            })
            .catch(() => {
                setStatus(STATUS_CODES.ERROR);
            });
    }, [status]);

    if (status === STATUS_CODES.ERROR) {
        return <div>An error occurred, please try again...</div>;
    } else if (status !== STATUS_CODES.LOADED) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* <PageTitle>Home</PageTitle> */}
            <PetsGrid pets={pets} />
        </div>
    );
};

export { Home };
