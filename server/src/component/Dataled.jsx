import { useDispatch, useSelector } from "react-redux";
import { removeUser,deleteUser } from "../store/slice/userSlice";

function Dataled()
{

    const dispatch = useDispatch();

    const handleRemove =(id) =>{
        dispatch(removeUser(id));
    }

    const delUser = (payload) =>{
        dispatch(deleteUser(payload));
    }

    const data = useSelector((state)=>{
        return state.users;
    })

    return(
        <>
            {
                data.map((user, id)=>{
                    return <li key={id}>
                        {user},
                        <button className="btn-two"  onClick={handleRemove}><i class="fa-regular fa-trash-can"></i></button>
                    </li>
                })
            }
            <hr />
            <button className="btn-three" onClick={delUser}>clear user</button>
        </>
    )
}
export default Dataled;