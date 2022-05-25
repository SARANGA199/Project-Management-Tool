import React from 'react'

function AllUsers() {
  return (
    <div className="col-right">
    <h2>Users</h2>

    <div style={{overflowX: "auto"}}>
        <table className="customers">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Admin</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {/* {
                    users.map(user => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                {
                                    user.role === 1
                                    ? <i className="fas fa-check" title="Admin"></i>
                                    : <i className="fas fa-times" title="User"></i>
                                }
                            </td>
                            <td>
                                <Link to={`/edit_user/${user._id}`}>
                                    <i className="fas fa-edit" title="Edit"></i>
                                </Link>
                                <i className="fas fa-trash-alt" title="Remove"
                                onClick={() => handleDelete(user._id)} ></i>
                            </td>
                        </tr>
                    ))
                } */}
            </tbody>
        </table>
    </div>
</div>
  )
}

export default AllUsers