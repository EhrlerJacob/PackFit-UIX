import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText2.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
import Statement from "@/assets/statement.png";
import Sponsor1 from "@/assets/sponsor1.png"
import Sponsor2 from "@/assets/sponsor2.png"
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section
    id="home"
    className="gap-16 py-10 md:h-full md:pb-0"
    >
        {/* {image and main header } */}
        <motion.div 
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
            {/* main header */}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* headings */}
                <motion.div 
                className="md:-mt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x: 0},
                }}>
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-hometext">
                            <img 
                            alt="home page text"
                            src={HomePageText}
                            />
                        </div>
                    </div>
                    <p className="mt-8 text-sm">
                        The Best Of The Best In All Things Fitness. Unparalleled Training. Pack Fitness Is Dedicated
                        To Help You Become The Best Version Of You Physically and Spritually.
                    </p>
                </motion.div>
                {/* Actions  */}
                <motion.div 
                className="mt-8 flex items-center gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x: 0},
                }}>
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink
                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                    onClick={() => setSelectedPage(SelectedPage.Contact)}
                    href={`#${SelectedPage.Contact}`}>
                        <p>Learn More</p>
                    </AnchorLink>
                </motion.div>
            </div>

            {/* image */}
            <div className="flex basis-3/5 justify-center md:z-10
                            md:ml-40 md:mt-16 md:justify-items-end">
                <img 
                alt="home page graphic"
                src={Statement} />
            </div>
        </motion.div>

        {/* sponsors */}
        {isAboveMediumScreens && (
            <div className="h-[150px] w-full bg-primary-500 py-10">
                <div className="mx-auto w-5/6">
                    <div className="flex w-3/5 items-center justify-between gap-8">
                        <img alt="built wild logo"
                        src={Sponsor1}
                        className="w-20" />
                        <img alt="faithletics logo"
                        src={Sponsor2}
                        className="w-20" />
                    </div>
                </div>
            </div>
        )}
    </section>
  )
};

export default Home;
