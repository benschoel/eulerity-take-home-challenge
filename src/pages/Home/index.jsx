import React from "react";
import Axios from "axios";

import STATUS_CODES from "../../utils/STATUS_CODES";
import { PetsGrid } from "./components/PetsGrid";
import { DownloadBar } from "./components/DownloadBar";
import { useSelector, useDispatch } from "react-redux";
import { addAllPets } from "../../redux/slices/petsSlice";

const Home = () => {
    const pets = useSelector((state) => state.pets.allPets);
    const dispatch = useDispatch();
    const [status, setStatus] = React.useState(STATUS_CODES.UNLOADED);

    // const [pets, setPets] = React.useState([]);

    React.useEffect(() => {
        if (status !== STATUS_CODES.UNLOADED) return;

        setStatus(STATUS_CODES.LOADING);

        Axios.get("http://eulerity-hackathon.appspot.com/pets")
            .then(({ data }) => {
                dispatch(addAllPets(data));
                setStatus(STATUS_CODES.LOADED);
            })
            .catch(() => {
                setStatus(STATUS_CODES.ERROR);
            });
    }, [status, dispatch]);

    if (status === STATUS_CODES.ERROR) {
        return <div>An error occurred, please try again...</div>;
    } else if (status !== STATUS_CODES.LOADED) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <PetsGrid pets={pets} />
            <DownloadBar />
        </div>
    );
};

export { Home };
