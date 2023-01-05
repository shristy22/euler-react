import './form.css';

const Form = () => {

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("https://httpbin.org/post", {
            method: "POST",
            body: JSON.stringify({
              name: 'shrity',
              email: 'email',
              mobileNumber: 'mobileNumber',
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            // setName("");
            // setEmail("");
            // setMessage("User created successfully");
            console.log("success")
          } else {
            // setMessage("Some error occured");
            console.log("not success")
          }
        } catch (err) {
          console.log(err);
        }
      };

    return(
        <div className='layout'>
    <form onSubmit={handleSubmit}>
        <h1>Create Labels</h1>
        <div>
      <label className='left label'>Select</label><br/>
      <select className='select-dropdown'>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select><br/><br/>
      </div>
      <label className='label'>Name:</label><br/>
      <input type="text" className='text-input'/><br/><br/>
      <label className='label'>Place:</label><br/>
      <input type="text" className='text-input'/><br/><br/>
      <label className='label'>Animal:</label><br/>
      <input type="text" className='text-input'/><br/><br/>
      <button type="submit" className='btn-style'>Create</button>
      </form>
        </div>
    )
}

export default Form;
