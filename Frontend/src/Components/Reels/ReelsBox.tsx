import React, { useEffect, useRef, useState ,useCallback} from 'react';
import {fetchPosts} from './server';
import {PostProps} from './server';
import Symbol from '../../assets/index'
// import Style from './Reel.module.css'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';



const ReelsBox: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[] | []>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const audioRefs = useRef<Map<number, HTMLAudioElement>>(new Map());
  const observer = useRef<IntersectionObserver | null>(null);
  const Navi = useNavigate();
  // const audioRef = useRef();

       

      const call=async()=>{

          setLoading(true);
          setHasMore(true);
          // if(page>=10){
          //   setHasMore(false);
          //   return;
          // }
          fetchPosts(0,page).then((data:PostProps[]) => {
          // console.log(data);
          setPosts([...data]);
          setLoading(false);
        });
      }

      useEffect(() => {

            
             call();
      }, [page]);

      const playAudio = (index: number) => {
        audioRefs.current.forEach((audio, idx) => {
          if (index === idx) {
            audio.play();
          } else {
            audio.pause();
            audio.currentTime = 0;
          }
        });
      };
    

     
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
      
      const postObserver = useRef<IntersectionObserver | null>(null);

      useEffect(() => {
        postObserver.current = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              const index = Number(entry.target.getAttribute('data-index'));
              if (entry.isIntersecting) {
                playAudio(index);
              }
            });
          },
          { threshold: 0.5 } // Adjust the threshold as needed
        );
    
        const elements = document.querySelectorAll('.post');
        elements.forEach(element => {
          postObserver.current?.observe(element);
        });
    
        return () => {
          postObserver.current?.disconnect();
        };
      }, [posts]);




  return (
    <>
                    {/* <button  className="absolute top-1 left-2" onClick={increasepage}>Start</button> */}
      <div className='w-screen h-screen lg:p-10 md:p-8 p-3  bg-black  overflow-hidden flex justify-center items-center'>

        <div className={`h-[90%] bg-[url('https://www.refactoringui.com/_next/static/media/book.5380927448c9872170bbc9fc9e5828c4.png')] w-96 overflow-y-scroll`}>

         <button className={`p-4 text-3xl`} onClick={()=>{Navi('/dashboard')}}> <IoMdArrowRoundBack /> </button>

       
           

   
         
          {posts.map((post, index) => (


                <div  key={index}
                      ref={posts.length === index + 1 ? lastPostElementRef : null}
                      data-index={index}
                  
                  className='post w-full h-full flex justify-center p-10 text-white flex-col items-center gap-10 overflow-hidden'>
                   <h1 className="text-black inline text-5xl sm:text-5xl p-2 font-poppins font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-sky-500  to-green-600  "> Float </h1>

              
                
                  <div className={`text-white w-72 h-72 bg-black-800 p-5 rounded-full animate-spin`}>
                    <audio loop ref={el => {
                    if (el) audioRefs.current.set(index, el);
                  }}> 
                       <source src={post.videoUrl} type="audio/mp3" />
                    </audio>
                    <img src={Symbol.react} className='w-32 h-32' alt="" />
                   
                    {/* <p className='text-white capitalize text-sm'>{post.tag}</p> */}
                  </div>


                               
  {/* <div className={`card__title ${Style.textShadow}`}>Runaway</div> */}
  <div className="card__subtitle">Smalltown Boy , Shane D</div>
                
              
             

            </div>

    

))}
 {loading && <p>Loading...</p>}

          </div>









        </div>


    </>
  )



}

export default ReelsBox;