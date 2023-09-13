import axios from 'axios';
import { useState } from 'react';

type Props = {
    blogs: any,
    setBlogs: any,
};

const Form = ({blogs, setBlogs}: Props) => {
    const [category, setCategory] = useState("");
    const [length, setLength] = useState("");
    const [notes, setNotes] = useState("");

    const FormStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`

    const SubmitHandler = (e: any) => {
        e.preventDefault();
    
        axios.post('http://localhost:8000/api/blogs', {
            category,
            length,
            notes,
        })
            .then(res => {
                console.log(res)
                console.log(res.data);
                setBlogs([...blogs, res.data]);
                setCategory("");
                setLength("");
                setNotes("");
    
            })
            .catch(err => console.log(err));
    }


  return (
    <form
    method='POST'
    onSubmit={SubmitHandler}
    >
        <input className={FormStyles}
        type='text'
        placeholder='What Is It?'
        onChange={(e) => setCategory(e.target.value)}
        value={category} />
        <input className={FormStyles}
        type='number'
        placeholder='How long did it take?'
        onChange={(e) => setLength(e.target.value)}
        value={length} />
        <textarea className={FormStyles} 
        placeholder='Notes'
        onChange={(e) => setNotes(e.target.value)}
        value={notes}
        rows={4}
        cols={50} />
        <button type='submit'
        className='mt-5 rounded-lg bg-secondary-500 px-20
        py-3 transition duration-500 hover:text-white'>
            POST
        </button>
    </form>
  )
}

export default Form;