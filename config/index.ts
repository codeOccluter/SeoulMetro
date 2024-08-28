import dotenv from 'dotenv'
import path from 'path'

const mode = process.env.MODE || 'windows'
const envFile = mode === 'macos' ? '.env.macos' : 'env.windows'

dotenv.config({ path: path.resolve(process.cwd(), envFile) })

export const DATABASE_URL = process.env.DATABASE_URL
export const JWT_SECRET = process.env.JWT_SECRET