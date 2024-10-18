import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {


    return (
        <div className='flex flex-1'>
        <div className='home-container'>
            <div className='home-posts'>
            <h2 className='h3-bold md-h2-bold text-left w-full'>About</h2>
        <div className="post-card">
          <div className="flex-between">
            <div className="flex items-center gap-3">
            </div>
          </div>
    
            <img
              src="/assets/images/jake-orange.jpg"
              alt="post image"
              className="post-card_img h-full w-full"
            />

            <h2 className='h3-bold md-h2-bold text-left w-full'>Jakob Reid (2005 - 2024)</h2>
            <div className="small-medium lg:base-medium py-5">
                <p>Hello testing this. <br></br> <br></br> Click the button below to create a post containing a picture of Jake to keep his memory alive. 
                </p>
                <div className="flex items-center gap-3">
                </div>
                <Link
                to={`/create-post`}
                className={`h-12 px-5 text-light-1 flex-center gap-2 rounded-lg`}>
                                  <Button type="button" size="sm" className="shad-button_primary px-5">
                Create Post
                </Button>
              </Link>
            </div>
            </div>
          </div>
          </div>
        </div>
      );
}

export default About