node index.js &
PID=$!
node node_modules/.bin/mocha
kill -9 $PID
