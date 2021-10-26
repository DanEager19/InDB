global.TextEncoder = require('util').TextEncoder
global.TextDecoder = require('util').TextDecoder
const MongoClient = require('mongodb')

const uri = 'mongodb+srv://daniel:G9l$23mo0@cluster0.xcoys.mongodb.net/index?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

async function main () {
  try {
    await client.connect()
    await listDatabases(client)
  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }
}

async function listDatabases (client) {
  const databasesList = await client.db().admin().listDatabases()
  console.log('Databases:')
  databasesList.databases.forEach(db => console.log(` - ${db.name}`))
}

main().catch(console.error)
