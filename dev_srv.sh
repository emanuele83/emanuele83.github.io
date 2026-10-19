#!/bin/bash

# Get directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Navigate to the script directory
cd "$SCRIPT_DIR"

# Start the Python HTTP server
python3 -m http.server 8080
