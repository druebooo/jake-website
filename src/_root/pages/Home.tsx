import Postcard from '@/components/shared/Postcard';
import { useGetRecentPosts } from '@/lib/react-query/queriesAndMutations';
import { Models } from 'appwrite';
import { Loader } from 'lucide-react';

const Home = () => {

  const { data : posts, isPending: isPostLoading} = useGetRecentPosts();

  return (
    <div className='flex flex-1'>
      <div className='home-container'>
          <div className='home-posts'>
            <h2 className='h3-bold md-h2-bold text-left w-full'>Home Feed</h2>
            {isPostLoading && !posts ? (
              <Loader></Loader>
            ) : (
              <ul className='flex flex-col flex-1 gap-9 w-full'>
                {posts?.documents.map((post: Models.Document) => (
                  <Postcard post = {post}/>
                ))}
              </ul>
            )}
          </div>
      </div>
    </div>
  )
}

export default Home