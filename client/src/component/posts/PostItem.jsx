const PostItem = ({ post }) => {
    return (
        <div className="flex flex-col mb-12 w-1/2 p-7 rounded-lg shadow-2xl">
            <div className="space-y-7">
                <div className="flex justify-between items-center w-min">
                    <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </span>
                    <h1 className="font-semibold text-base tracking-wide ml-4">
                        {"@" + post.username}
                    </h1>
                </div>
                <h5>{post.caption}</h5>
            </div>
            <img src={post.image} alt="post_image" className="mt-6" />
        </div>
    );
};

export default PostItem;
