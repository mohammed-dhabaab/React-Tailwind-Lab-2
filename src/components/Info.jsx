import React from 'react'
import styles from '../styles'

function Info() {
    return (
        <section className={`${styles.outerWrapper}`}>
            <div className={`${styles.wrapper} flex flex-col gap-6 items-center justify-center md:flex-row`}>
                <h2 className='md:hidden w-full mb-6 text-4xl text-start flex flex-col'>
                    <span>Some more</span>
                    <span>information about</span>
                    <span>your business</span>
                </h2>
                <div className='w-full flex items-center'>
                    <img className='w-full ' src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/ef9d9b9f-freshgoods-about_100000000000000000001o.jpg" alt="" />
                </div>

                <div>
                    <h2 className='hidden md:flex text-4xl flex-col mb-4'>
                        <span>Some more</span>
                        <span>information about</span>
                        <span>your business</span>
                    </h2>
                    <p className='leading-7 font-medium'>Share a little about yourself as a business owner, or maybe
                        describe what makes your product or service unique. Give
                        visitors one more reason to care about your offer and want to
                        buy from you.</p>
                </div>
            </div>
        </section>
    )
}

export default Info