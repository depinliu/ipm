import React, {useState, useEffect} from 'react';
import NavbarMenu from '../../organisms/Navbar';

const Profile = (props) => {
    const [count, setCount] = useState(1)
    const [users, setUsers] = useState([])
    const changeCount = () => setCount(count+1)

    // async function getUsers () {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/users')
    //     res.json()
    //     .then(res => setUsers(res))
    //     console.log(users)
    // }

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res=> setUsers(res))
        setCount('hmm')
        console.log(users[0])
    }

    useEffect(()=>{
        getUsers()
    })

    return (
        <div>
            <NavbarMenu count />
            <h2>Profile Page</h2>
            <button onClick={changeCount}>Click {count}</button>

            <div className="mt-5 border-top">
                <h2>Users JsonPlaceholder Data</h2>
                <ul>
                    {users.map((user, id)=>(
                        <li key={id}>Name: {user.name} | Username: {user.username}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default Profile;