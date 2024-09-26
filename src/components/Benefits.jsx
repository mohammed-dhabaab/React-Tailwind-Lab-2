import React from 'react'
import styles from '../styles'
import { GiMilkCarton } from "react-icons/gi";
import { FaTruck } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";


function Benefits() {
    return (
        <section className={`${styles.outerWrapper}`}>
            <div className={`${styles.wrapper} flex flex-col items-center justify-center text-center gap-6 `}>
                <h2 className='text-3xl'>Here are some of the benefits
                    of your offer</h2>

                <p className='max-w-[60ch]'>Explain what makes your product or service great. Talk about features in a way
                    that highlights the real value people get out of them.</p>

                <div className='grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-3 '>
                    <div className='flex flex-col items-center justify-center text gap-2 '>
                        <div>
                            <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/b41bc87d-freshgoods-benefit2-icon_1000000000000000000028.png" alt="" />
                            {/* <GiMilkCarton size={60} fill='#eab308' /> */}
                        </div>
                        <h3 className='font-bold text-lg'>Benefit 1</h3>
                        <p className='max-w-[30ch] font-medium'>
                            For example, restaurants
                            and bakeries could outline
                            the health benefits of their
                            all-natural ingredients</p>
                    </div>

                    <div className='flex flex-col items-center justify-center text gap-2 '>
                        <div>
                            <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/3a18a275-freshgoods-benefit1-icon_1000000000000000000028.png" alt="" />

                            {/* <FaLock size={60} fill='#eab308' /> */}
                        </div>
                        <h3 className='font-bold text-lg'>Benefit 2</h3>
                        <p className='max-w-[32ch] font-medium'>
                            Florists and other small retailers might
                            use this space to describe how their
                            products make delightful, one-of-a-
                            kind gifts.</p>
                    </div>

                    <div className='flex flex-col items-center justify-center text gap-2 '>
                        <div>
                            {/* <FaTruck size={60} fill='#eab308' /> */}
                            <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6622ad60-freshgoods-benefit3-icon_1000000000000000000028.png" alt="" />

                        </div>
                        <h3 className='font-bold text-lg'>Benefit 3</h3>
                        <p className='max-w-[31ch] font-medium'>You could also add buttons to
                            this section and share links to
                            other products or available
                            delivery methods.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits