import React from 'react'
import styles from '../styles/GraphHeader.module.scss'


const GraphHeader = ({ year, total }) => {
    return (
        <div className={styles.container}>
            <div className={`${styles.yearTitle} ${styles.title}`}>year</div>
            <div className={`${styles.yearData} ${styles.data}`}>{year}</div>
            <div className={`${styles.totalTitle} ${styles.title}`}>global total</div>
            <div className={`${styles.totalData} ${styles.data}`}>{Math.round(total * 100)}</div>
        </div >
    )
}

export default GraphHeader