import React from "react";

export const CourierLogo = ({
    src,
    name,
    width,
    height,
}: {
    src: string;
    name: string;
    width?: string;
    height?: string;
}) => {
    return (
        <img
            style={{ height: height || "100%", width: width || "4.5rem", marginTop: "0.4rem" }}
            src={src}
            alt={name}
        />
    );
};
