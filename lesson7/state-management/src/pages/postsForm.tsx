// PostsForm.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../store';
import { addPost } from '../store/posts';

interface IFormInput {
    userId: number;
    title: string;
    body: string;
}

const PostsForm: React.FC = () => {
    const { register, handleSubmit, reset, formState  } = useForm<IFormInput>();
  
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        const newPost = {
            id: Date.now(),
            ...data,
        };

        dispatch(addPost(newPost));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-4'>
            
            <div className='flex flex-col'>
                <label htmlFor="userId">User ID</label>
                <input
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    id="userId" type="number"  {...register('userId', { required: "معرف المستخدم مطلوب !" })} />
          
          
                {formState.errors.userId && <span className="text-red-500">{formState.errors.userId?.message}</span>}
            </div>
            <div className='flex flex-col'>
                <label htmlFor="title">Title</label>
                <input
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    id="title" {...register('title', { required: true })} />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="body">Body</label>
                <textarea
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    id="body" {...register('body', { required: true })} />
            </div>
            <div className="w-full h-full flex items-end justify-end">

                <button type='submit' className="px-6 py-2 w-max h-max font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Create Post
                </button>
            </div>
        </form>
    );
};

export default PostsForm;
