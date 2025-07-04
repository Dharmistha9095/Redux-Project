import react, { useState } from "react";

const Create = () => {

    const [users,setUsers] = useState({});
    setUsers({...users ,[e.target.name] : e.target.value })
    {name : "himanshu"}
    return (
        <div >

            <form className="w-50 mx-auto my-5">
                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input type="email" name="name" class="form-control" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" name="email" class="form-control" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Age</label>
                    <input type="age" name="age" class="form-control" />
                </div>
                <div class="mb-3 ">
                    <label class="form-check-label me-3" >Male</label>
                    <input type="checkbox" name="gender" value="Male" class="form-check-input" />
                </div>
                  <div class="mb-3">
                    <label class="form-check-label me-3" >Female</label>
                    <input type="checkbox" name="gender" value="Female" class="form-check-input" />
                </div>
             
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}

export default Create