import cors from 'cors'
import deepmerge from 'deepmerge'

type EnvConfig = {
  PORT: number
  REST_API_URL: string
  corsOptions: {
    allowedHeaders: string[]
    credentials: boolean
    methods: string
    origin: string
    preflightContinue: boolean
  }
}

const REST_API_URL = 'http://localhost:8080'
const LOCAL_CLIENT_URL = 'http://localhost:3000'
const base = {
  PORT: 8080,
  REST_API_URL,
  corsOptions: {
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: LOCAL_CLIENT_URL,
    preflightContinue: false,
  },
}

const test: EnvConfig = deepmerge(base, {})
const local: EnvConfig = deepmerge(base, {})

function determinConfig() {
  switch (process.env.NODE_ENV) {
    case 'test':
      return test
    case 'dev':
      return local
    default:
      return base
  }
}

const config: EnvConfig = determinConfig()
export default config
