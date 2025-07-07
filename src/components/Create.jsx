import react, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
const Create = () => {

    const [users, setUsers] = useState({});
    const dispatch = useDispatch({});
    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
        console.log(users)
    }
    const handleSubmit = (e) => {
     e.preventDefault();  // ✅ This prevents the browser from reloading
     dispatch(createUser(users));
    }

    return (
        <div >
            <h1 className="my-22">Fill the Data</h1>
              <form className="w-25 mx-auto my-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="name" name="name" className="form-control" onChange={getUserData} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" onChange={getUserData} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="age" name="age" className="form-control " onChange={getUserData} />
                </div>
                <div className="mb-3 ">
                    <label className="form-check-label me-3" >Male</label>
                    <input type="checkbox" name="gender" value="Male" className="form-check-input" onChange={getUserData} />
                </div>
                <div className="mb-3">
                    <label className="form-check-label me-3" >Female</label>
                    <input type="checkbox" name="gender" value="Female" className="form-check-input" onChange={getUserData} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}

export default Create