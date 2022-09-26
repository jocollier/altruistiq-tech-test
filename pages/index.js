import { getData } from './api/countries'
import BarChart from '../components/BarChart';

export default function Home({ emissionResults }) {
  return (
    <>
      <BarChart
        data={emissionResults}
      />
    </>
  )
}

export const getStaticProps = async () => {
  const res = await getData();
  const emissionResults = res

  return {
    props: {
      emissionResults,
    }
  }
}