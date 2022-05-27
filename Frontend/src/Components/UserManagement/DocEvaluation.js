import React from 'react'
import './Styles/docEvaluation.css';

function DocEvaluation() {
    return (
        <>
        <br/>
        <center>
        <h1>Document Evaluation</h1>
        </center>
        <div className="docEval_page">
            <div className="col-left">
            <div className='card'>
                <h2>Document Details</h2><br/>

                <div className="form-group">
                    <label htmlFor="Gid">Group ID</label>
                    <input type="text" name="Gid" id="Gid"
                    placeholder="ID of the group" disabled/>
                </div><br/>

                <div className="form-group">
                    <label htmlFor="Gmem">Group Members</label>
                    <input type="text" name="mem1" id="mem1" 
                    placeholder="Member 1 name" disabled />
                    <input type="text" name="mem2" id="mem2" 
                    placeholder="Member 2 name" disabled />
                    <input type="text" name="mem3" id="mem3" 
                    placeholder="Member 3 name" disabled />
                    <input type="text" name="mem4" id="mem4" 
                    placeholder="Member 4 name" disabled />
                </div><br/>

                <div className="form-group">
                    <label htmlFor="Tname">Topic Name</label>
                    <input type="text" name="Tname" id="Tname"
                    placeholder="Name of the Topic" disabled/>
                </div>
                <br/>
                <button>Download</button>
                </div>
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