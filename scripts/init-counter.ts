import { MongoClient } from 'mongodb';

// Parse command line arguments
const args = process.argv.slice(2);
if (args.length !== 1 || isNaN(Number(args[0]))) {
    console.error('Please provide one command line argument: the initial value for the counter.');
    process.exit(1);
}
const initialValue = Number(args[0]);

// Connection URL
const url = 'mongodb://localhost:27017/your-db-name';

// Database Name
const dbName = 'your-db-name';

async function run() {
    let client;

    try {
        // Use connect method to connect to the server
        client = await MongoClient.connect(url, { });
        console.log("Connected successfully to server");

        const db = client.db(dbName);

        // Get the counters collection
        const counters = db.collection('counters');

        // Initialize the counter
        const result = await counters.updateOne(
            { _id: 'issue_id' } as any,
            { $set: { seq: initialValue } },
            { upsert: true }
        );

        console.log(`Counter initialized with value ${initialValue}`);
    } catch (err) {
        console.log(err);
    }

    // Close connection
    if (client) {
        client.close();
    }
}

run().catch(console.dir);