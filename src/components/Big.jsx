import React from "react";

const Big = ({ url, handleHideBig }) => {
    return (
        <div className="big" onClick={handleHideBig}>
            <div className="big-card">
                <img src={url} alt="" />
            </div>
        </div>
    );
};

export default Big;
