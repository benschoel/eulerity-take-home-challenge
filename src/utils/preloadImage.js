const preloadImage = (imageURL) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            resolve();
        };

        image.src = imageURL;
    });
};

export { preloadImage };
