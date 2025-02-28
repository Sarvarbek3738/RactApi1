import React, { use, useEffect, useState } from 'react'
import { data, Link, useParams } from 'react-router-dom'
import "./Users.css"

function Users() {
    const { id } = useParams()
    console.log(id);

    const [users, setUsers] = useState(null)
    const getData = async () => {
        const req = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await req.json()
        setUsers(data)
    }
    useEffect(() => {
        getData()
    }, [id])



    return (
        <>
            <div className="container">

                <h1>
                    Users info
                </h1>
                <div className="users">
                    {
                        <div className="card">
                            <div>
                                <img src="https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png" alt="" />
                            </div>
                            <div className='usersData'>
                                <div className="col">
                                    <h5> name : {users?.name}</h5>
                                    <h5> username : {users?.username}</h5>
                                    <h5> phone : {users?.phone}</h5>
                                    <h5> email : {users?.email}</h5>
                                    <h5> street : {users?.address.street}</h5>
                                </div>
                                <div className="col">
                                    <h5> suite : {users?.address.suite}</h5>
                                    <h5> city : {users?.address.city}</h5>
                                    <h5> zipcode : {users?.address.zipcode}</h5>
                                    <h5> name : {users?.company.name}</h5>
                                    <Link to={"/"}>
                                        back home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>

        </>
    )
}

export default Users