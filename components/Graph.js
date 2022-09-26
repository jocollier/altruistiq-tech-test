import BarGroup from "./BarGroup"
import styles from '../styles/Graph.module.scss'

const Graph = ({ specificData }) => {
    const barHeight = 30

    return (
        <>
            <svg className={styles.svgPanel}>
                <g className='container' transform="translate(120,0)">
                    <g className="chart" transform="translate(200,75)">
                        {specificData['countries'].map((d, i) => {
                            if (i === 4) {
                                d['country'] = '....';
                                d['total'] = '....';
                                return (
                                    <g key={i} transform={`translate(0, ${i * barHeight})`}>
                                        <BarGroup d={d} barHeight={barHeight} />
                                    </g>
                                )
                            } else {
                                return (
                                    <g key={i} transform={`translate(0, ${i * barHeight})`}>
                                        <BarGroup d={d} barHeight={barHeight} />
                                    </g>
                                )
                            }
                        })}
                    </g>
                </g>
            </svg>
        </>
    )
}

export default Graph