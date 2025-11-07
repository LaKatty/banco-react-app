import React from "react";

interface CardProps{
    imgUrl: string;
    titleCard: string;
    description: string;
}

const Card: React.FC <CardProps> = ({titleCard, description, imgUrl})  => {
    return(
        <div className="">
            <img src={imgUrl} alt={titleCard} />
            <div className="">
                <h2 className="card-title flex justify-center-safe p-5">{titleCard}</h2>
                <p className="flex justify-center-safe p-5">{description}</p>
            </div>
        </div>
    )
}

export default Card