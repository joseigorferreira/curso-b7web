import { PostContextProvider } from "@/contexts/PostContext";
import { PostList } from "./PostList";
import { HeaderPost } from "./HeaderPost";
import { FooterPost } from "./FooterPost";

export const ExercicioPost = () => {
    return(
        <div>
            <PostContextProvider>
                <div className="container mx-auto">
                    <HeaderPost />
                    <PostList />
                    <FooterPost />
                </div>
            </PostContextProvider>
        </div>
    );
}