import React from "react";

export const CourierLogo = ({ src }: { src: string }) => {
    return (
        <img
            style={{ height: "100%", width: "4.5rem", marginTop: "0.4rem" }}
            src={src}
            alt="courier logo"
        />
    );
};
