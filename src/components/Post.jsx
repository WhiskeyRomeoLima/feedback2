import {useParams, Navigate, useNavigate, Routes, Route} from 'react-router-dom'
// Navigate to redirct
function Post() {
  const navigate = useNavigate() //can not be called below executable code
  const params = useParams()
  console.log(params);
  
  const status = 200

  const onClick = () => {
    console.log('HELLO!');
    navigate('/about') //redirect example
  }
  //redirect
  if (status === 404) {
    return <Navigate to='/notfound' />
  }

  return (
    <div>
      <h1>POST</h1>
      <h2>id: {params.id} </h2> 
      <h2>name: {params.name} </h2>
      <button onClick={onClick}>Click</button>
      {/* nested route*/}
      <Routes>{/* remember to navigate from home via http://localhost:8889/post/show />  */}
        <Route 
        path='/show' 
          element={
          <>
            <h1>Hello World</h1>
            <h3>(above from localhost:8889/post/show )</h3>  
          </>
          } 
        />
      </Routes>
    </div>
  )
}
export default Post