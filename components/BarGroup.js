import styles from '../styles/Graph.module.scss'

const BarGroup = ({ barHeight, d }) => {
    let barPadding = 2
    let barColour = '#348AA7'
    let widthScale = d => d * 10

    let width = widthScale(d.value * 2)
    let yMid = barHeight * 0.5
    let labelWidth = 500

    return (
        <>
            <g className={styles.barGroup}>
                <text className={styles.nameLabel} x="-6" y={yMid} alignmentBaseline="middle" >{d.country}</text>
                <rect y={barPadding * 0.5} width={width} height={barHeight - barPadding} fill={barColour} />
                <text className={styles.valueLabel} x={labelWidth} y={yMid} alignmentBaseline="middle" >{Math.round(d.value * 100)}</text>
            </g>
        </>
    )
}

export default BarGroup