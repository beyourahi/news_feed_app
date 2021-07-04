const PostForm = () => {
    const onSubmit = e => {
        e.preventDefault();
        // register({ username, email, password });
    };

    return (
        <div className="flex justify-center">
            <div className="mt-5 md:mt-0 md:col-span-2 w-2/4">
                <form onSubmit={onSubmit}>
                    <div className="shadow-2xl rounded-lg sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div className="flex">
                                <div className="mt-1 flex items-center w-1/6">
                                    <span className="inline-block h-16 w-16 rounded-full overflow-hidden bg-gray-100">
                                        <svg
                                            className="h-full w-full text-gray-300"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </span>
                                </div>

                                <div className="mt-1 w-5/6">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows={4}
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                        placeholder="What's on your mind?"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>

                            <div className="mt-1 flex justify-center py-2.5 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <div className="flex text-sm text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                        >
                                            <span>
                                                <svg
                                                    className="mx-auto h-12 w-12 text-gray-400"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 48 48"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                            <input
                                                id="file-upload"
                                                name="file-upload"
                                                type="file"
                                                className="sr-only"
                                            />
                                            <span className="font-semibold text-indigo-500 hover:text-indigo-700 duration-500 transition-all">
                                                Upload a photo
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="px-4 py-3 text-right sm:px-6 bg-gray-50">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 duration-500 transition-all transform active:scale-90 active:outline-none appearance-none w-full"
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostForm;
