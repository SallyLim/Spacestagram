import { range } from "lodash";
import React from "react";
import './pageNumber.css'


export default function PageNumbers({pageNum, setPageNum}) {

    return (
        <ul className="pg_num_list">
        {range(1,11).map(num => (
            <li 
             className={`pg_num ${pageNum === num ? "active_pg_num" : ""}`}
             onClick={() => setPageNum(num)}>{num}
            </li>
        ))}
    </ul>
    )
}