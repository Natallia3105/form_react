import {useState, useEffect} from "react";
const Effect = () => {
    const [type, setType] =useState('users')
    const [data, setData] = useState([])
    const [pos, setPos] = useState({
        x: 0,
        y: 0
    })

    const mouseMoveHandler = event => {
        setPos({
            x: event.clientX,
            y: event.clientY
        })
    }
    // useEffect(() => {
    //     console.log('render')
    // })
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))

        return () => {
            console.log('cleanType')
        }
    }, [type])

    useEffect(() => {
        console.log('component did mount')

        window.addEventListener('mousemove', mouseMoveHandler)

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])


    return (
        <div>
            <h1>Resources: {type}</h1>
            <button className="border-2" onClick={() => {setType('users')}}>Users</button>
            <button className="border-2" onClick={() => {setType('TODOS')}}>TODOS</button>
            <button className="border-2" onClick={() => {setType('Posts')}}>Posts</button>

            <pre>{JSON.stringify(data, null, 2)}</pre>
            <pre>{JSON.stringify (pos, null, 2)}</pre>

        </div>

    )
}

export default Effect;
