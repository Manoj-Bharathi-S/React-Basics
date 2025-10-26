import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

function Post (){

  const {id} = useParams();
  console.log(id);
  
  const [post, error] = useFetch("http://localhost:3000/posts/"+id);
  console.log(post);
  return (
    <>
    <div>
     { post && <div>
          <h1>Post id {id}</h1>
          <h1>{post.title}</h1>
          <h1>{post.content}</h1>
      </div>}
    </div>

    </>
  );
}

export default Post;