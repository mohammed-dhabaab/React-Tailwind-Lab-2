import React from 'react'
import styles from '../styles'

function Footer() {
    return (
        <section className={`${styles.outerWrapper} bg-neutral-800 text-white`}>
            <div className={`${styles.wrapper} flex justify-between flex-wrap gap-4 `}>
                <p className="text-xl">Fresh<b>Goods</b></p>
                <p>© 2020 Insert Name Here. All rights reserved.</p>
            </div>
        </section>
    )
}

export default Footer