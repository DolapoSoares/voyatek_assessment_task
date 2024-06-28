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
        <div>
      <input type="search" value={search} onChange={handleSearch} />
      <select value={filter} onChange={handleFilter}>
        <option value="all">All</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Name <svg><path /></svg></th>
            <th>Email <svg><path /></svg></th>
            <th>Role <svg><path /></svg></th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {searchData.map(item => (
            <tr key={(6588)}>
              <td><input type="checkbox" /></td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <span style={{ color: item.role === 'admin' ? 'red' : 'green' }}>
                  {item.role}
                </span>
              </td>
              <td>
                <button>View</button>
                <button>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
    </div>
    </div>
  )
}

export default Mainbody



