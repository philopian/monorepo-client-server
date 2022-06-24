import deepmerge from 'deepmerge'

type EnvConfig = {
  url: string
}
const base = {
  url: 'http://localhost:8080',
}

const test: EnvConfig = deepmerge(base, {})
const local: EnvConfig = deepmerge(base, {})

function determinConfig() {
  const origin = window.location.origin
  switch (true) {
    case process.env.NODE_ENV === 'test':
      return test
    case origin.includes('localhost'):
      return local
    default:
      return base
  }
}

const config: EnvConfig = determinConfig()
export default config
