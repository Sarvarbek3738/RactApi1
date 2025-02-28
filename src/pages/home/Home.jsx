import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"

function Home() {
    const [apilink, setApilink] = useState("https://jsonplaceholder.typicode.com/users")
    const [users, setUsers] = useState(null)
    const getData = async (link) => {
        const req = await fetch(link)
        const data = await req.json()
        setUsers(data)
    }
    useEffect(() => {
        getData(apilink)
    }, [])
    return (
        <>
            <h1>Hello React API</h1>
            <div className="block">
                {users?.map((item) => {
                    return <div className="box">
                        <h3>{item.name}</h3>
                        <Link to={`users/${item.id}`}>
                            read more
                        </Link>
                    </div>
                })

                }
            </div>
        </>
    )
}

export default Home