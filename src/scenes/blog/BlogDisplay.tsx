import axios from "axios";
import { useEffect } from "react";

type Props = {
    blogs?: any;
    setBlogs?: any;
    category?: string;
    length?: number;
    notes?: string;
    deleteBlog?: any

}

const BlogDisplay = ({blogs, setBlogs, deleteBlog}: Props) => {

    const deleteHandler = (e: any) => {
        const blogId = e.target.id;
        deleteBlog(blogId);
    }

    useEffect(()=> {
        axios.get('http://localhost:8000/api/blogs')
        .then((res)=> {
            console.log(res.data);
            setBlogs(res.data);
        })
        .catch(err=> {
            console.log(err);
        })
    }, [])

  return (
    <div className="mt-10 h-[353px] overflow-auto overflow-x-hidden">
        <ul className="w-1/2 border-primary-300">
            {blogs.map((blog: any) => (
                <li
                key={blog._id} 
                >
                    <p className="text-2xl">{blog.category}</p>
                    <p className="mt-5">Time Elapsed: {blog.length} minutes</p>
                    <p className="mt-5">{blog.notes}</p>
                    <button className="mt-5 rounded-lg bg-secondary-500 px-10
        py-2 transition duration-500 hover:text-white"
                    onClick={deleteHandler} id={blog._id}>
                        Delete Blog
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default BlogDisplay;