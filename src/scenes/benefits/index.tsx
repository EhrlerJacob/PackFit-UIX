import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, AcademicCapIcon, ChartPieIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import Statement2 from "@/assets/statement-2.jpg";

const benefits: Array<BenefitType> = [
   {
    icon: <HomeModernIcon className="h-6 w-6"/>,
    title: "Fitness Plans Designed For You",
    description: "Workout plans tailored to your own personal goals, with a flexibility of anywhere you need to exercise.",
   },
   {
    icon: <AcademicCapIcon className="h-6 w-6"/>,
    title: "Professional Personal Training",
    description:
    "NASM & ISSA Certified personal trainers with years of experience in all things fitness, eager to share their knowledge and help you become the best version of yourself.",
   },
   {
    icon: <ChartPieIcon className="h-6 w-6"/>,
    title: "Nutritional Plans Tailored to You",
    description: "Meal Plans written for your personal goals down to the single macro-nutrient."
   }
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    },
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>          
            {/* Header  */}
            <motion.div 
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0},
            }}>
                <HText>JOIN THE PACK.</HText>
                <p className="my-5 text-sm">
                    Pack Fitness is more than just your average fitness program. <br/> 
                    The Pack is a community of motivated people striving for greatness. <br/>
                    We provide you with nutritional plans, tailored fitness plans dedicated <br/>
                    to what you wish to achieve, and ease of access to our trainers to extend <br/>
                    their knowledge of all things health and fitness that they have aquired over <br/>
                    their vast years of experience. 
                </p>
            </motion.div>
            {/* Benefits */}
            <motion.div 
            className="md:flex items-center justify-between gap-8 mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            variants={container}>
                {benefits.map((benefit: BenefitType) => (
                    <Benefit 
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}/>
                ))}
            </motion.div>

                {/* Graphics & Description */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* Graphic */}
                <img
                className="mx-auto"
                alt="motvation"
                src={Statement2} />
                
                {/* Description */}
                <div>
                    {/* title */}
                    <div className="relative ">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1]">
                            <div className="md: my-15">
                                <HText>
                                    NEVER QUIT, GET PACK {" "}
                                    <span className="text-secondary-500">FIT</span>
                                </HText>
                            </div>
                        </div>
                    </div>

                    {/* description */}
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                        <p className="my-5">
                            Here at Pack Fitness, we strive to help you become the
                            the best version of you. We are eager to provide aid in training 
                            not only the body but also your mind. With the leadership provided by our
                            NASM & ISSA certified trainers, we seek to help our members improve overall
                            health, not just your body.  
                        </p>
                        <p className="mb-5">
                            Pack Fitness was founded by Alex Mitchell, a fitness guru who started
                            his fitness journey at a very young age, and has slowly but surely gained
                            a plethora of knowledge and experience in the field. Alex has a contagious 
                            passion for health & fitness, and has set out on an even greater journey
                            with hope that he can spread his passion to others through Pack Fitness.
                        </p>
                    </motion.div>
                    {/* button */}
                    <div className="relative mt-16">
                        <div>
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
    )
};

export default Benefits;