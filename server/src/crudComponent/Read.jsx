import React, { useEffect } from "react";
import { Link,  useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { showUser,deleteUser } from "../react-crud/slice/userDetails";
import Update from "./Update";
function Read()
{
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const {user, loading} = useSelector((state)=>state.app)

    useEffect(()=>{
        dispatch(showUser())
    },[dispatch])

    if(loading)
    {
        return <h2>loading</h2>
    }

    const handleDelete = (d) =>{
        dispatch(deleteUser(d.id));
        Navigate("/");
    }


    return(
        <>
        <div className="currenTable">
            <Link to={"../create"} className="link-create">create +</Link>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>profile_image_path</th>
                        <th>name</th>
                        <th>Email</th>
                        <th>password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {user && user.map((d, i) => {
                        return (
                            <tr key={i}> {/* Each child in a list should have a unique "key" prop */}
                                <td>{d.id}</td>
                                <td>
                                    {d.profile_image_path && (
                                            <img src={`http://localhost:4000/${d.profile_image_path}`} alt={`Profile ${d.name}`} style={{ width: '100px', height: '100px', borderRadius: "100px" , border: "2px solid blue" }} />
                                    )}
                                </td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.password}</td>
                                <td>
                                    <div className='btn'>
                                        <Link to={`/Update/${d.id}`} className="link-class" >edit</Link> 
                                        <button onClick={() => handleDelete(d)} className="btn-del">del</button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        </>
    )
}
export default Read;