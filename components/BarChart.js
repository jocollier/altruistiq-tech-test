import { useEffect, useState } from "react"
import Graph from "./Graph"
import GraphHeader from './GraphHeader'
import styles from '../styles/GraphContainer.module.scss'

const BarChart2 = ({ data }) => {
    const [years] = useState(Object.keys(data))
    const [currentYear, setCurrentYear] = useState(Object.keys(data)[0])
    const [specificData, setSpecificData] = useState(data[Object.keys(data)[0]])

    useEffect(() => {
        setSpecificData(data[currentYear])
    }, [currentYear, data])

    const leftArrowClick = () => {
        if (years.indexOf(currentYear) - 1 !== -1) {
            setCurrentYear(years[years.indexOf(currentYear) - 1])
        }
    }

    const rightArrowClick = () => {
        if (years.indexOf(currentYear) + 1 < years.length) {
            setCurrentYear(years[years.indexOf(currentYear) + 1])
        }
    }

    return (
        <>
            <GraphHeader year={currentYear} total={specificData.total} />
            <div className={styles.container}>
                <div className={`${styles.leftArrow} ${styles.arrow}`} onClick={() => leftArrowClick()}>&larr;</div>
                <div className={styles.graph}><Graph specificData={specificData} /></div>
                <div className={`${styles.rightArrow} ${styles.arrow}`} onClick={() => rightArrowClick()}>&rarr;</div>
            </div>
            <p>data source: https://data.footprintnetwork.org </p>
        </>
    )
}

export default BarChart2
