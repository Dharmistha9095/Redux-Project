import react, { useEffect, useState } from "react";
import { showUser } from "../features/userDetailSlice";
import { useDispatch, useSelector, } from "react-redux";
import CustomModal from "../components/CustomModal";
import { deleteUser } from "../features/userDetailSlice";
import { Link } from "react-router-dom";

const Read = () => {
    const dispatch = useDispatch();
    const { users, loading } = useSelector((state) => state.app);
    const [id, setId] = useState();
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        dispatch(showUser());
    }, []);

    if (loading) {
        return <h2>Loading</h2>
    }
    return (
        <div>
            {showPopup && <CustomModal id={id} setShowPopup={setShowPopup} />}
            <h2>All Data</h2>
            <div>
                {users &&
                    users.map((ele) => (
                        <div key={ele.id} className=" w-50 mx-auto card py-5 my-5">
                            <div className="card-body">
                                <h5 className="card-title">{ele.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{ele.email}</h6>
                                <p className="card-text">{ele.age}</p>
                                <button href="#" className="card-link"
                                    onClick={() => {
                                        setId(ele.id);
                                        setShowPopup(true);
                                    }}
                                >View</button>
                                <Link to={`/edit/${ele.id}`} className="card-link">Edit</Link>
                                <a href="#"  onClick={() => dispatch(deleteUser(ele.id))} className="card-link">Delete</a>
                            </div>
                        </div>))}
            </div>
        </div>
    )
}
export default Read;