// config.js
import dotenv from 'dotenv'
dotenv.config()

export const FRONTEND_URL = process.env.FRONTEND_URL
export const PRISMA_ENDPOINT = process.env.PRISMA_ENDPOINT
export const PRISMA_SECRET = process.env.PRISMA_SECRET
export const APP_SECRET = process.env.APP_SECRET
export const STRIPE_SECRET = process.env.STRIPE_SECRET
export const PORT = process.env.PORT
