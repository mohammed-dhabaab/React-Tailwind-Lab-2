import styles from "../styles"
function Hero() {
    return (
        <header className={`${styles.outerWrapper} relative group text-white h-screen bg-cover bg-center `} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1458712197423-adcdc2a426ee?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            <div className="absolute  inset-0 bg-black opacity-50 transition-opacity duration-300"></div>

            <div className={`${styles.wrapper} z-10 relative h-full flex flex-col justify-center align-middle gap-4`}>
                <p className="text-xl">Fresh<b>Goods</b></p>
                <div className="text-4xl sm:text-5xl md:text-7xl flex flex-col">
                    <span>Concisely
                    </span>
                    <span>describe your</span>
                    <span>product or service</span>
                </div>

                <p className="max-w-[50ch]">No need to get clever. Tell people exactly what you're offering,
                    then use this space to communicate your key value proposition.</p>

                <button className="py-2 px-8 bg-yellow-500 text-black font-semibold w-fit rounded-sm">Order Now</button>
            </div>
        </header>
    )
}

export default Hero