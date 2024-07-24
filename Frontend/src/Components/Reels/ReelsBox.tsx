import React, { useEffect, useRef, useState ,useCallback} from 'react';
import {fetchPosts} from './server';
import {PostProps} from './server';


const ReelsBox: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[] | []>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);
  // const audioRef = useRef();

      const call=async()=>{

          setLoading(true);
          fetchPosts(1,page).then((data:PostProps[]) => {
          // console.log(data);
          setPosts([...data]);
          setLoading(false);
        });
      }

      useEffect(() => {

            
             call();
      }, [page]);

     
      const lastPostElementRef = useCallback(
        (node:Element | null) => {
          if (loading || !hasMore) return; // Stop observing if loading or no more posts
          if (observer.current) observer.current.disconnect();
    
          observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
              setPage((prevPage) => prevPage + 1); // Trigger loading of new posts by changing page number
            }
          })
    
          if (node) observer.current.observe(node);
        },
        [loading, hasMore]
      );
      




  return (
    <>
                    {/* <button  className="absolute top-1 left-2" onClick={increasepage}>Start</button> */}
      <div className='w-screen h-screen lg:p-10 md:p-8 p-3  bg-black  overflow-hidden flex justify-center items-center'>

        <div className="h-[90%] bg-blue-700 w-96 overflow-y-scroll">


         
          {posts.map((post, index) => (


                <div  key={index}
                      ref={posts.length === index + 1 ? lastPostElementRef : null}
                  
                  className='w-full h-full flex justify-center p-10 text-white flex-col items-center gap-10 overflow-hidden'>
                   <h1 className="font-bold text-xl">Your Feed {index+1}</h1>

              
                
                  <div className='text-white bg-gray p-5 rounded-lg'>
                    <audio controls> 
                       <source src={post.videoUrl} type="audio/mp3" onPlay={()=>{console.log("on play")}} onPlaying={()=>console.log("palying")} />
                    </audio>
                    <p className='text-white capitalize text-sm'>{post.tag}</p>
                  </div>
                
              
             

            </div>

))}
 {loading && <p>Loading...</p>}

          </div>









        </div>


    </>
  )



}

export default ReelsBox;