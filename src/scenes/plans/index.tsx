import HText from "@/shared/HText";
import { SelectedPage, PlanType } from "@/shared/types";
import {motion} from "framer-motion"
import Plan from "./Plan";
import image1 from "@/assets/gym.jpg";
import image2 from "@/assets/challenge.png";

const plans: Array<PlanType> = [
    {
        name: "Strength Training Programs",
        description: "Pack Fitness wants to help ypu become stronger in both the body and the mind. We offer strength training programs to help you gain both strength and muscle mass",
        image: image1,
    },
    {
        name: "Fitness Challenges",
        description: "At Pack Fitness, we strive to give you a sense of both community but also competition, so we like to sprinkle in fitness challenges every once in a while.",
        image: image2,
    },
    {
        name: "Nutritional Plans",
        description: "Our expert personal trainers write meal plans designed around your physical needs and ambitions",
        image: "",
    },
    {
        name: "Health and Wellness Training",
        description: "Pack Fitness understands that life happens, so we can design a plan just for you to help you get back on track",
        image: "",
    },
    {
        name: "Plans for Anyone, Anywhere",
        description: "Whether you are at the gym, in a park, or even in your own living room, we can make a plan for you.",
        image: "",
    },
    {
        name: "Stretching and Mobility",
        description: "The body performs at it's peak whenever it is stretched properly in order for it to maintain functionality. Here at Pack Fitness, we'll show you just how to do so.",
        image: "",
    }

]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const OurPlans = ({setSelectedPage}: Props) => {
  return (
    <section
    id="plans" className="w-full bg-primary-100 py-40">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Plans)}>
            <motion.div
            className="mx-auto w-5/6"
            initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x: 0},
                }}
                >
                <div className="md:w-3/5">
                    <HText>OUR PLANS</HText>
                    <p className="py-5">
                        Pack Fitness offers a plethora of plans, whether that be workout plans, 
                        nutritional plans, and even the occasional fitness challenges for the enitre 
                        Pack Fitness community. We take pride in our methodology that there is no 
                        true one size fits all nutrition/fitness plan, and tailor every last plan 
                        speficically to what you need.
                    </p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {plans.map((item: PlanType, index) => (
                        <Plan
                        key= {`${item.name}-${index}`}
                        name= {item.name}
                        description= {item.description}
                        image = {item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
    )
}

export default OurPlans;