// import HText from "@/shared/HText";
// import { SelectedPage } from "@/shared/types";
// import { motion } from "framer-motion";
// import Form from "./Form";
// import { useState } from "react";
// import BlogDisplay from "./BlogDisplay";
// import axios from "axios";

// type Props = {
//     setSelectedPage: (value: SelectedPage) => void;
//     blogs?: any;
//     setBlogs?: any;
//     _id?: any; 

// }
    

// const Blog = ({setSelectedPage}: Props) => {

//     const [blogs, setBlogs] = useState([]);

//     const deleteBlog = (id: any) => {
//         axios.delete(`http://localhost:8000/api/blogs/${id}`)
//         .then(res => {
//             const updatedBlogs = blogs.filter(blog => blog._id !==
//                 res.data.id)
//                 console.log(res.data)
//                 setBlogs(updatedBlogs)
//         })
//     } 

    
//   return (
//     <section id="blog" className="mx-auto w-5/6 pt-24">
//         <motion.div 
//         onViewportEnter={() => setSelectedPage(SelectedPage.Blog)}
//         >
//             {/* header  */}
//             <motion.div 
//             className="md: w-3/5"
//             initial = "hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5}}
//             transition={{ duration: 0.5 }}
//             variants={{
//                 hidden: {opacity: 0, x: -50},
//                 visible: { opacity: 1, x: 0},
//             }}
//             >
//                 <HText>
//                     SHARE YOUR IDEAS <span className="text-primary-100">HERE</span>
//                 </HText>
//                 <p className="my-5">
//                     We like to give every member of the pack a sense of community and
//                     invite everyone to share their latest and greatest in all things health 
//                     and fitness. If you have any cool workout challenges or delicious meal recipes
//                     you have made or stumbled upon, feel free to share them with the rest of the 
//                     PackFit community!
//                 </p>
//             </motion.div>
//             {/* form and display  */}
//             <div className="mt-10 justify-between gap-8 md:flex">
//             <motion.div className="mt-10 basis-3/5 md:mt-0"
//                 initial = "hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.5}}
//                 transition={{ duration: 0.5 }}
//                 variants={{
//                     hidden: {opacity: 0, y: 50},
//                     visible: { opacity: 1, y: 0},
//                 }}
//                 >
//                     <Form blogs={blogs} setBlogs={setBlogs} />
//                 </motion.div>
//                 <motion.div className="mt-10 basis-3/5 md:mt-0"
//                 initial = "hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.5}}
//                 transition={{ duration: 0.5 }}
//                 variants={{
//                     hidden: {opacity: 0, y: 50},
//                     visible: { opacity: 1, y: 0},
//                 }}
//                 >
//                     <BlogDisplay blogs={blogs} setBlogs={setBlogs} deleteBlog={deleteBlog}/>
//                 </motion.div>
//             </div>
//         </motion.div>
//     </section>
//   )
// }

// export default Blog;