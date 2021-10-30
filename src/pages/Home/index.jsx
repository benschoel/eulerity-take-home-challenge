import React from "react";
import Axios from "axios";

import STATUS_CODES from "../../utils/STATUS_CODES";
import { PetsGrid } from "./components/PetsGrid";
import { DownloadBar } from "./components/DownloadBar";
import { useSelector, useDispatch } from "react-redux";
import { addAllPets, setStatus } from "../../redux/slices/petsSlice";
import { QueryBar } from "./components/QueryBar";
import { filterPets } from "../../utils/filterPets";

const Home = () => {
    const pets = useSelector((state) => state.pets.allPets);
    const status = useSelector((state) => state.pets.status);
    const dispatch = useDispatch();

    const [query, setQuery] = React.useState("");

    React.useEffect(() => {
        if (status !== STATUS_CODES.UNLOADED) return;

        dispatch(setStatus(STATUS_CODES.LOADING));

        Axios.get("http://eulerity-hackathon.appspot.com/pets")
            .then(({ data }) => {
                dispatch(addAllPets(data));
                dispatch(setStatus(STATUS_CODES.LOADED));
            })
            .catch(() => {
                dispatch(setStatus(STATUS_CODES.ERROR));
            });
    }, [status, dispatch]);

    if (status === STATUS_CODES.ERROR) {
        return <div>An error occurred, please try again...</div>;
    } else if (status !== STATUS_CODES.LOADED) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <QueryBar query={query} setQuery={setQuery} />
            <PetsGrid pets={pets.filter(filterPets(query))} />
            <DownloadBar query={query} />
        </div>
    );
};

export { Home };
