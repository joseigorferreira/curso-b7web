import { PostContext } from "@/contexts/PostContext";
import { useContext } from "react";

export const FooterPost = () =>{

    const posts = useContext(PostContext);

    return(
        <footer>
            Total de Posts: {posts?.posts.length}
        </footer>
    );
}