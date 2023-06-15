import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { logger, errorlogger } from './shared/logger'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`Database is connected successfully`)

    app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (error) {
    errorlogger.error('Failed to connect database', error)
  }
}
main()
