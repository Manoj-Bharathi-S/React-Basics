import React from 'react'
import useFetch from './useFetch';
import { useNavigate } from 'react-router-dom';



function Posts (){
    const navigate = useNavigate();
    const [posts, error] = useFetch("http://localhost:3000/posts");
  return (
    <>
    <div className='row justify-content-center m-3'>
        {posts && posts.map(post =>{
            return(
                <>
                <div key={post.id} className='card m-3' style={{width:'18rem'}} onClick={()=>navigate('/post/'+post.id)}>
                    <div>
                        <h5>{post.title}</h5>
                    </div>
                </div>
                </>
            );
        })}
    </div>
    </>
  );
}

export default Posts;