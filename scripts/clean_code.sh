#!/bin/bash

# Check if a file is provided as an argument
if [ $# -eq 0 ]; then
    echo "Please provide a file name as an argument."
    exit 1
fi

file=$1

# Create a temporary file
temp_file=$(mktemp)

# Process the file
awk '
# Keep comments
/^[[:space:]]*\/\/|^[[:space:]]*#/ { print; next }

# Keep only console.log statements
/^[[:space:]]*console\.log/ { print; next }

# Skip everything else
{ next }
' "$file" >"$temp_file"

# Replace the original file with the processed content
mv "$temp_file" "$file"

echo "File has been processed. Only comments and console.log statements have been preserved."
