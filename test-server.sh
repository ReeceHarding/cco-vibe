#!/bin/bash

# Test script for Postel Clone server on port 3001

echo "🚀 Testing Postel Clone Server on Port 3001..."
echo "============================================="

# Check if server is running
if lsof -i:3001 -P | grep -q LISTEN; then
    echo "✅ Server is running on port 3001"
    
    # Get process info
    PID=$(lsof -ti:3001)
    echo "   Process ID: $PID"
else
    echo "❌ Server is NOT running on port 3001"
    echo "   Run 'npm run dev' to start the server"
    exit 1
fi

# Test HTTP response
echo -e "\n📡 Testing HTTP Response..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3001)

if [ "$HTTP_STATUS" = "200" ]; then
    echo "✅ Server responded with HTTP 200 OK"
    
    # Check response time
    RESPONSE_TIME=$(curl -s -o /dev/null -w "%{time_total}" http://localhost:3001)
    echo "   Response time: ${RESPONSE_TIME}s"
    
    # Check content
    CONTENT_CHECK=$(curl -s http://localhost:3001 | grep -c "Postel")
    echo "   Content check: Found 'Postel' $CONTENT_CHECK times"
else
    echo "❌ Server responded with HTTP $HTTP_STATUS"
    exit 1
fi

echo -e "\n✅ All tests passed! Server is healthy."
echo "🌐 Access your app at: http://localhost:3001" 