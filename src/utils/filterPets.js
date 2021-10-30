const filterPets = (query) => (pet) => {
    return (
        pet.title.toLowerCase().includes(query.toLowerCase()) ||
        pet.description.toLowerCase().includes(query.toLowerCase())
    );
};

export { filterPets };
