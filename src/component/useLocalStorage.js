import { useState } from "react";

export default function useLocalStorage(uniqueID) {
    const initData = localStorage.getItem(uniqueID)==="true" ? true : false

    const likedArray = localStorage.getItem("liked")

    const [state, setState] = useState(initData)

    function mutateState() {
        localStorage.setItem(uniqueID, !state)
        setState(!state)
    }

    return [state, mutateState]
}