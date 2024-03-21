import { useEffect, useState } from "react";
import Card from "./components/Card";
import Big from "./components/Big";
function App() {
    const [images, setImages] = useState([]);
    const [showBig, setShowBig] = useState(false);
    useEffect(() => {
        const getImages = async () => {
            try {
                const response = await fetch(
                    `https://api.unsplash.com/photos/random?count=10`,
                    {
                        headers: {
                            Authorization: `Client-ID ${"Pb7YYc_XNPyIRO4wy8Jpinc1yDCctnsQ2mUysTismVE"}`,
                        },
                    }
                );
                const data = await response.json();
                setImages(data);
            } catch (error) {
                console.log(error.message);
            }
        };
        getImages();
    }, []);
    const handleShowBig = (url) => {
        setShowBig(url);
    };
    const handleHideBig = () => {
        setShowBig(false);
    };
    return (
        <>
            <div className="container">
                {images.length > 0 &&
                    (showBig ? (
                        <Big url={showBig} handleHideBig={handleHideBig}></Big>
                    ) : (
                        images.map((image) => (
                            <Card
                                image={image}
                                handleOnclick={handleShowBig}
                                key={image.id + Math.random()}
                            />
                        ))
                    ))}
            </div>
        </>
    );
}

export default App;
