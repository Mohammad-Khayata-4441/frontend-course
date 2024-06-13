// PostsComponent.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../store';
import { setPosts, } from '../store/posts';
import PostsForm from './postsForm';

const PostsComponent: React.FC = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => state.posts.posts);
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

                dispatch(setPosts(response.data));

                setLoading(false);

            } catch (err) {
                setLoading(false);
            }
        };

        fetchData();
    }, [dispatch]);
    return <>

        {loading &&
            <div className="h-screen w-screen flex items-center justify-center">

                <div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>}

        {!loading && posts && <div className="container mx-auto grid grid-cols-2 gap-4">


            <div className="col-span-2 py-8">
                <div className="flex justify-between w-full items-center">
                    <h1 className='text-5xl font-bold '>Posts</h1>
                    {

                        !showForm && <button onClick={() => setShowForm(true)} className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            New Post
                        </button>
                    }
                </div>

            </div>

            {
                showForm &&
                <div className="col-span-2">
                    <PostsForm></PostsForm>
                </div>
            }



            {posts.map(p => <>
                <div className="  px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10, 2019</span>
                        <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" role="button">Design</a>
                    </div>

                    <div className="mt-2">
                        <a href="#" className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" role="link">{p.title}</a>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">{p.body}</p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline" role="link">Read more</a>

                        <div className="flex items-center">
                            <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" alt="avatar" />
                            <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" role="link">User ({p.userId})</a>
                        </div>
                    </div>
                </div>
            </>)}
        </div>

        }

    </>
};

export default PostsComponent;
