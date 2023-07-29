import { ReactNode, createContext, useState } from "react";
import { Post } from '@/types/Post';

type PostContextType = {
    posts: Post[];
    addPost: (title: string, text: string) => void;
}

export const PostContext = createContext<PostContextType | null>(null);

type Props = {
    children: ReactNode;
}

export const PostContextProvider = ({children}: Props) => {

    const [posts, setPosts] = useState<Post[]>([]);

    const addPost = (title:string, text: string) => {
        setPosts([...posts, {
            id: posts.length,
            title: title,
            text: text
        }])
    }

    return(
        <PostContext.Provider value={{posts, addPost}}>
            {children}
        </PostContext.Provider>
    );
}