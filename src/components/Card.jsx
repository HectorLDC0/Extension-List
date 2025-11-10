import { useState } from "react";
import './Card.css';
import Button from'./Button.jsx';

function Card({ text, paragraph, imageUrl}) {
    const [active, setActive] = useState(false);

    return (
        <>
            <div className="card">

                <div className="imgWrapper">
                    <img src={imageUrl}/>
                    <div className="textWrapper">
                        <h2>{text}DevLens</h2>
                        <p>{paragraph}Quicly inspectr page layout ande viusualzie elemtnes borudnaris</p>
                    </div>
                </div>

                <div className="togleWrapper">
                    <Button text="Remove"/>

                    {/* Toggle */}
                    <div
                        className={`toggle ${active ? "active" : ""}`} onClick={() => setActive(!active)}>
                        <div className="circle"></div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Card;
