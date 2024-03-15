import React from "react";
import "./card.css";
import { StaticImageData } from "next/image";
import { Button } from "../Button";

type Price = {
    price: String;
    salePrice: String;
};
type Link = {
    text: String;
    link: String;
};
type Image = {
    src: StaticImageData;
    alt: String;
};

interface CardProps {
    date?: String;
    title?: String;
    location?: String;
    price?: Price;
    salePrice?: String;
    button1?: Link;
    button2?: Link;
}

/**
 * Primary UI component for user interaction
 */
export const Card = ({
    date,
    title,
    location,
    price,
    salePrice,
    button1,
    button2,
    ...props
}: CardProps) => {
    const image = {
        src: "./placeholder.jpg",
        alt: "my image",
    };

    const buttonOne = {
        text: "hey",
        link: "#",
    };

    return (
        <>
            <div className="card">
                <div className="image">
                    <img src={image.src} alt={image.alt} />
                    {date && <div className="date">{date}</div>}
                </div>
                <div className="content">
                    <div className="heading">{title}</div>
                    <div className="location">
                        {location && <div className="inner">{location}</div>}
                    </div>
                    <div className="pricing">
                        <div className="price">{price?.price}</div>
                        <div className="salePrice">{price?.salePrice}</div>
                    </div>
                    <div className="buttons">
                        {button1?.text && (
                            <>
                                <Button primary={true} label={button1?.text} />
                            </>
                        )}
                        {button2?.text && (
                            <>
                                <Button primary={false} label={button2?.text} />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
