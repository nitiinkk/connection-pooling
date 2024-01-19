## Connection Pooling

- If our app has say 10 connections available in Pool ,
then if concurrently 11 users hits request to our app, then the first 10 users, gets the connection available from Pool and connect to DB.
- The 11th user waits for one of the connection to go to idle state and then use it.
- If the config has connectionTimeoutMillis configured, then client waits for that much time before erroring out.`` Error in connectDB() fn  Error: timeout exceeded when trying to connect``

- Suppose Say our Another App tries to connect to a DB where MAX_CONNECTION limit is 100, and our DB already has 100 active DB connection, then when the user tries to connect he would see the below error: ```error: sorry, too many clients already```

# Benefits of Connection Pooling
- Reduces the latency delay the app takes in establishing the connection to DB

- Doubts ? \
[ ] - doesn't release the connection back to DB after idleTimeoutMillis\
[ ] - I see the connections has idle in DB , but new request to the app keeps hanging and doesn't resolve .. ?