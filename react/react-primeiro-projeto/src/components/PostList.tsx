import { PostContext } from "@/contexts/PostContext";
import { useContext } from "react";

export const PostList = () => {
    const posts = useContext(PostContext);
    return(
        <div>
            {posts?.posts.map( item =>
                <div key={item.id}>
                    <div>
                        {item.title}
                    </div>
                    <div>
                        {item.text}
                    </div>
                </div>
            )}
        </div>
    );
}