import {useEffect, useState} from "react";

// eslint-disable-next-line react/prop-types
export default function ItemsList({ getItems }) {

    const [items, setItems] =useState([])

    useEffect(() => {
        const newItems = getItems()
        setItems(newItems)

    }, [getItems])
    return(
        <div>
            <ul>
                {items.map(i => (
                    <li key={i}>{i}</li>
                ))}
            </ul>
        </div>
    )
}
