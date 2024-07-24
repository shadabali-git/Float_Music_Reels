
export type PostProps = 
    {
        id: number;
        videoUrl:string;
        tag:string[];
       
    }

const fetchPosts= async (limit:number,page:number) => {
    // console.log('fetchPosts');
    const response= await fetch(`http://localhost:3000/videos`)
    const data:PostProps[]= await response.json()
       const result:PostProps[]=[];

       data.map((post)=>{
        if(data[0].id <= page){
              result.push(post);
         }
         })

  

    return result;
}



export {fetchPosts}

// https://jsonplaceholder.typicode.com/posts?_page=1&_limit=4

// https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}