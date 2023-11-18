import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactGraphic from "@/assets/ContactGraphic.png"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({setSelectedPage}: Props) => {

    const FormStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`
    
    const {
        register, 
        trigger,
        formState: {errors}
    } = useForm();

    const SubmitHandler = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

  return (
    <section id= "contact" className="mx-auto w-5/6 pt-24">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
        >
            {/* header  */}
            <motion.div 
            className="md: w-3/5"
            initial = "hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: {opacity: 0, x: -50},
                visible: { opacity: 1, x: 0},
            }}
            >
                <HText>
                    <span className="text-primary-500">JOIN NOW</span> TO ACCOMPLISH YOUR GOALS
                </HText>
                <p className="my-5">
                    There is never a better time to start chasing your goals than right now. 
                    Pack Fitness is eager to help and has helped many people in their journey to 
                    getting their dream body or accomplishing feats that felt unattainable before.
                    Push harder today if you want a different tomorrow.
                </p>
            </motion.div>
            {/* form and image  */}
            <div className="mt-10 justify-between gap-8 md:flex ">
                <motion.div className="mt-10 basis-3/5 md:mt-0"
                initial = "hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: { opacity: 1, y: 0},
                }}
                >
                <form
                name="Contact"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                target="_blank"
                onSubmit={SubmitHandler}
                method="POST"
                // action="https:formsubmit.co/99b53c0edb98c2592afd49337cb8b04a"
                >
                    <div hidden>
                        <input name="bot-field"/>
                    </div>
                    <input type="hidden" name="form-name" value="Contact" />
                    <input className={FormStyles}
                    type="text"
                    placeholder="NAME"
                    {...register("name", {
                        required: true,
                        maxLength: 50,
                    })} />
                    {errors.name && (
                        <p className="mt-1 text-primary-500">
                            {errors.name.type === "required" && "This field is required."}
                            {errors.name.type === "maxLength" && "Max Length is 50 Characters."}
                        </p>
                    )}
                    <input className={FormStyles}
                    type="email"
                    placeholder="EMAIL"
                    {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })} />
                    {errors.email && (
                        <p className="mt-1 text-primary-500">
                            {errors.email.type === "required" && "This field is required."}
                            {errors.email.type === "pattern" && "Invalid Email."}
                        </p>
                    )}
                    <textarea className={FormStyles}
                    placeholder="MESSAGE"
                    rows={4}
                    cols={50}
                    {...register("message", {
                        required: true,
                        maxLength: 1000,
                    })} />
                    {errors.message && (
                        <p className="mt-1 text-primary-500">
                            {errors.message.type === "required" && "This field is required."}
                            {errors.message.type === "maxLength" && "Max Length is 1000 Characters."}
                        </p>
                    )}
                    <button type="submit"
                    className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">
                        SUBMIT
                    </button>
                </form>
                </motion.div>
                <motion.div 
                className="relative mt-16 basis-2/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z[-1] md:before:content-hometext">
                        <img
                        className="w-[500px] rounded-lg mb-10"
                        alt="contact-us-graphic"
                        src={ContactGraphic}
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>

    </section>
    )
}

export default Contact;