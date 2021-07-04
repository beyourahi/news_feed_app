import { Fragment, useContext, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PostContext } from "../../context/PostState";

const PostForm = () => {
    const { open, setOpen, addPost } = useContext(PostContext);
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(null);

    const cancelButtonRef = useRef(null);

    const onSubmit = e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("caption", caption);
        formData.append("image", image);

        addPost(formData);
    };

    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    static
                    className="fixed z-10 inset-0 overflow-y-auto"
                    initialFocus={cancelButtonRef}
                    open={open}
                    onClose={setOpen}
                >
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>
                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="flex justify-center">
                                    <div className="mt-5 md:mt-0 md:col-span-2 w-full">
                                        {/*//// FORM */}
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
                                                                rows={4}
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                                placeholder="What's on your mind?"
                                                                name="caption"
                                                                value={caption}
                                                                onChange={e =>
                                                                    setCaption(e.target.value)
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="mt-1 flex justify-center py-2.5 border-2 border-gray-300 border-dashed rounded-md">
                                                        <div className="space-y-1 text-center">
                                                            <div className="flex text-sm text-gray-600">
                                                                <label
                                                                    htmlFor="file"
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
                                                                        id="file"
                                                                        name="image"
                                                                        type="file"
                                                                        className="sr-only"
                                                                        value={image}
                                                                        onChange={e =>
                                                                            setImage(
                                                                                e.target.files[0]
                                                                            )
                                                                        }
                                                                    />
                                                                    <span className="font-semibold text-indigo-500 hover:text-indigo-700 duration-500 transition-all">
                                                                        Upload a photo
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                {/*//// BUTTONS */}
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm duration-500 transition-all transform active:scale-90 active:outline-none appearance-none"
                                        onClick={() => setOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                    {/* <button
                                        type="button"
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm duration-500 transition-all transform active:scale-90 active:outline-none appearance-none"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Post
                                    </button> */}
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 duration-500 transition-all transform active:scale-90 active:outline-none appearance-none"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Post
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};

export default PostForm;
