import React,{useRef} from "react";
const Sample=()=>{
const usernameRef= useRef(null);
const handleSubmit=(e) => {
e.preventDefault();
    const username = usernameRef.current.value;
    alert(username)
}
return (
    <div>
        <form onSubmit={handleSubmit}>
         <input type="text" ref={usernameRef}></input>
         <button>Submit</button>   
        </form>
    </div>
)
}
export default Sample;