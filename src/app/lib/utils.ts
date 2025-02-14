import mongoose from 'mongoose'

const connection: { isConnected?: number } = {}

export const connectToDb = async () => {
  if (connection.isConnected) {
    console.log('Using existing database connection')
    return
  }

  try {
    const db = await mongoose.connect(process.env.MONGO as string)

    connection.isConnected = db.connections[0].readyState
    console.log('Database connected successfully!')
  } catch (error) {
    console.error('Database connection failed:', error)
    throw new Error((error as Error).message)
  }
}
