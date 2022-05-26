import React from 'react'
import './Styles/docEvaluation.css';

function DocEvaluation() {
  return (
    <>
    <div className="profile_page">
        <div className="col-left">
            <h2>Admin Profile</h2>

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"
                placeholder="Your name"/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email"
                placeholder="Your email address"/>
            </div>

            <div className="form-group">
                <label htmlFor="password">New Password</label>
                <input type="password" name="password" id="password"
                placeholder="Your password"/>
            </div>

            <button>Update</button>
        </div>

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
                        {
                            // users.map(user => (
                            //     <tr key={user._id}>
                            //         <td>{user._id}</td>
                            //         <td>{user.name}</td>
                            //         <td>{user.email}</td>
                            //         <td>
                            //             {
                            //                 user.role === 1
                            //                 ? <i className="fas fa-check" title="Admin"></i>
                            //                 : <i className="fas fa-times" title="User"></i>
                            //             }
                            //         </td>
                            //         <td>
                            //             <Link to={`/edit_user/${user._id}`}>
                            //                 <i className="fas fa-edit" title="Edit"></i>
                            //             </Link>
                            //             <i className="fas fa-trash-alt" title="Remove"
                            //             onClick={() => handleDelete(user._id)} ></i>
                            //         </td>
                            //     </tr>
                            // ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
  )
}

export default DocEvaluation