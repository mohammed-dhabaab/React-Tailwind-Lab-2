import React from 'react'
import styles from '../styles'

function End() {
    return (
        <section className={`${styles.outerWrapper} py-32 relative group bg-cover bg-center `} style={{ backgroundImage: "url('https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F1bf45807-806c-4ab9-a756-d7ff6c3f56f6%2FScreen_Shot_2023-11-26_at_11.03.28_AM_cleanup.png?table=block&id=fff185a2-dff1-81fe-af84-fb1490a042ab&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=1790&userId=&cache=v2')" }}>
            <div className={`${styles.wrapper} relative z-20 flex flex-col items-center gap-10`}>
                <h2 className='text-4xl'>End with one final
                    call to action</h2>
                <p className='max-w-[60ch] text-center'>This is your last shot at converting someone. Remind them about
                    the benefits of your offer and encourage them to act now.</p>

                <button className="py-2 px-10 bg-yellow-500 text-black font-bold w-fit rounded-sm">ORDER NOW</button>
            </div>
        </section>
    )
}

export default End