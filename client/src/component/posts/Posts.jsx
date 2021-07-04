import { useContext, useEffect } from "react";
import { PostContext } from "../../context/PostState";
import PostItem from "./PostItem";

const Posts = () => {
    const { posts, getPosts, loading } = useContext(PostContext);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => getPosts(), []);

    return posts !== null && posts.length === 0 && !loading ? (
        <h1>No Post Found</h1>
    ) : posts === null && loading ? (
        <h1>No Post Found</h1>
    ) : (
        <>
            {posts.map(post => (
                <PostItem post={post} />
            ))}
        </>
    );
};

export default Posts;
