import { useEffect, useState } from 'react'

type Props = {
  url: string
  opts?: {
    [key: string]: unknown
  }
}

type Obj = {
  [key: string]: unknown
}

type Return = {
  data: Obj | undefined
  isFetching: boolean
  error: unknown
}

export default function useFetch({ url, opts }: Props): Return {
  const [{ data, isFetching, error }, setState] = useState({
    isFetching: true,
    data: undefined,
    error: undefined,
  })

  if (!url) {
    console.error('No URL provided; could not fetch')
    setState({
      isFetching: false,
      data: undefined,
      error: undefined,
    })
  }

  async function fetchData() {
    try {
      const res = await fetch(url)
      const result = await res.json()
      setState({
        isFetching: false,
        data: result,
        error: undefined,
      })
    } catch (error: any) {
      setState({
        isFetching: false,
        data: undefined,
        error,
      })
    }
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return { data, isFetching, error }
}
