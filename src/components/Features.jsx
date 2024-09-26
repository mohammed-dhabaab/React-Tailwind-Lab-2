import React from 'react'
import styles from '../styles'

function Features() {
    return (
        <section className={`${styles.outerWrapper} py-20 bg-neutral-200`}>
            <div className={`${styles.wrapper} grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-3`}>


                <div className='flex flex-col items-center justify-center text-center gap-4 '>
                    <div className='flex items-center justify-center'>
                        <img className='max-w-full max-h-full object-contain rounded-sm' src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6765ae81-freshgoods-feature1_10go0b20go09e00000001o.jpg" alt="Photo" />
                    </div>
                    <dir>
                        <h3 className='font-bold text-xl mb-4'>Feature 1</h3>
                        <p>Talk about some of the details
                            of your offer with a focus on the
                            value people get back.</p>
                    </dir>
                </div>

                <div className='flex flex-col items-center justify-center text-center gap-4 '>
                    <div>
                        <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/bf92a2f6-freshgoods-feature2_10go0ku0go09e00009e01o.jpg" alt="Photo" />
                    </div>
                    <dir>
                        <h3 className='font-bold text-xl mb-4'>Feature 1</h3>
                        <p>Talk about some of the details
                            of your offer with a focus on the
                            value people get back.</p>
                    </dir>
                </div>

                <div className='flex flex-col items-center justify-center text-center gap-4 '>
                    <div>
                        <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/f55dfcfa-freshgoods-feature3_10go0b40go09e00000601o.jpeg" alt="Photo" />
                    </div>
                    <dir>
                        <h3 className='font-bold text-xl mb-4'>Feature 1</h3>
                        <p>Talk about some of the details
                            of your offer with a focus on the
                            value people get back.</p>
                    </dir>
                </div>
            </div>
        </section>
    )
}

export default Features