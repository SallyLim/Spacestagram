import React, { useState } from "react";
import './description.css';

export default function Description({text}) {
    const [toggle, setToggle] = useState(false)

    return(
        <div>            
            <div onClick={() => setToggle(!toggle)}>{toggle ? 
            <div>
                <p className="description_expanded">{text}</p>
                <button className="expanded_button">show less</button>
            </div>
            :
            <div>
                <p className="description">{text}</p>
                <button className="expand_button">read more</button>
            </div>
            }</div>
        </div>
    )
}