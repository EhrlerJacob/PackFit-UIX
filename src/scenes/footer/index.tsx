import Logo from "@/assets/WhiteLogo.png"


const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16 mt-20">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="logo" src={Logo} className="w-20"/>
                <p className="my-5">
                    Pack Fitness is dedicated to serving you the only way we know how,
                    through thorough analysis and a forward approach to helping you become 
                    a better you. Make The Pact, Join The Pack.
                </p>
                <p> Hand Coded and Designed by Jacob Ehrler</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Partners</h4>
                <p className="my-5 underline hover:text-white">
                    <a href="https://builtwilddna.com/">BuiltWildDNA</a>
                </p>
                <p className="my-5 underline hover:text-white">
                    <a href="https://faithleticsfamily.com/">Faithletics</a>
                </p>
                <p></p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">Alex Mitchell</p>
                <p> Mobile Number:
                    <a href="tel:13864064840">
                    +1 (386)-406-4840
                    </a></p>
            </div>
        </div>
    </footer>
    )
}

export default Footer;