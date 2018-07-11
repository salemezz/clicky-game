import React from "react";
import "./HeroCard.css";

const HeroCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectHero(props.hero)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.hero} src={props.image} />
            </a>
        </div>
    </div>
);

export default HeroCard;
