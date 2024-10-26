import useFetch from "./useFetch"

const Hook =()=>{
  const {loading,error,data}=useFetch('https://react30.onrender.com/api/user/blog')
  if(loading){
    return(
      <p>Loading....</p>
    )
  }

  if(error){
    return(
      <p>{error}</p>
    )
  }
  return(
    <div>
      {
        data.map ((post)=>(
          <ul key={post._id}>
            <li  > {post.title}</li>
          </ul>
        ))
      }
    </div>
  )
}

export default Hook