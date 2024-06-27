import React from 'react'
import axios from 'axios';

function Mainbody() {

        const [data, setData] = useState([]);
        const [search, setSearch] = useState('');
        const [filter, setFilter] = useState('all');
  return (
    <div>
        <h5>Settings / Users & Roles Settings</h5>
        <div>
            <h1>Users and Roles</h1>
            <p>Manage all users in your business</p>
        </div>
    </div>
  )
}

export default Mainbody



