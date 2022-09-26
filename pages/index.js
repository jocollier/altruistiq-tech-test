import { getData } from './api/countries'

export default function Home({ emissionResults }) {
  return (
    <>

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