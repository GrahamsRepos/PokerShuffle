#!/bin/bash
echo "Installing"
npm install
echo "Runnning Unit Tests...."
npm run test
sleep 3s
npm run start