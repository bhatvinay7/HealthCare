import dotenv from 'dotenv'
dotenv.config()
import { Redis } from '@upstash/redis'

const redis = new Redis({
  url:process.env.REACT_UPSTASH_REDIS_REST_URL,
  token:process.env.REACT_UPSTASH_REDIS_REST_TOKEN,
})

export default redis
