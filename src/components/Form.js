import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addpost, Updata } from '../rtk/Slices/PostSlice'
import { useSelector } from 'react-redux'
import { Del } from '../rtk/Slices/PostSlice'
import { ToastContainer, toast } from 'react-toastify';
import '../style/Page.scss'
function Form() {
    const [title,setTitle]=useState("")
    const [Des,setDes]=useState("")

    const items =useSelector(state=>state.posts.items)

    const [updata,setUpdata]=useState(false)

    const [id,setid]=useState(null)

    const dispatch=useDispatch()

    const [updatatitle,setUpdatatitle]=useState("")
    const [updataDes,setupdataDes]=useState("")


    const notify = () => toast("done successfully!");

  return (
    <div className='Formapp'>
    <ToastContainer
position="bottom-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLossb 
draggable
pauseOnHover
theme="dark"
/>

<div className='Form'>
<input type="text" placeholder='enter  title' value={title} onChange={(e)=>setTitle(e.target.value)} />
<input type="text" placeholder='enter  Des' value={Des} onChange={(e)=>setDes(e.target.value)} />



<br/>

{Des.length === 0 ?
 <p>No value</p>
:
<button onClick={
()=>{dispatch(addpost({id:items.length +1,title,Des}))
setTitle("")
setDes("")
notify()
}}> Add </button>
}
</div>

  <div className='posts'>
  {items.map((item)=>{return(
     <div key={item.id}  className="item">
    <h2>{item.title}</h2>
    <p>{item.Des}</p>
    <button onClick={
      ()=>{dispatch(Del(item.id))
      notify()}}
      >Del</button>
    
    <button onClick={
      ()=>{setUpdata(true)
      setid(item.id)
    }}>Updata</button> 


 {updata && item.id === id && (
<div className='updata'>
<input type="text" placeholder='enter  title'  value={updatatitle} onChange={(e)=>setUpdatatitle(e.target.value)} />
<input type="text" placeholder='enter  Des'  value={updataDes} onChange={(e)=>setupdataDes(e.target.value)} />
<button  onClick={
  ()=>{dispatch(Updata({id:item.id,title:updatatitle,Des:updataDes}))
  setUpdata(false)
  notify()
}
}>Done</button>
</div>
  
 )
}

</div>)})}</div>


</div>
  )
}

export default Form