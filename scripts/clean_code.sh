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
BEGIN { in_console_log = 0 }
/^[[:space:]]*\/\/|^[[:space:]]*#/ { print; next }
/^[[:space:]]*console\.log/ { in_console_log = 1; print; next }
/^[[:space:]]*import/ { print; next }
in_console_log == 1 { 
    if ($0 ~ /\)$/) {
        print
        in_console_log = 0
    } else {
        print
    }
    next
}
' "$file" >"$temp_file"

# Replace the original file with the processed content
mv "$temp_file" "$file"

echo "File has been processed. Comments, multi-line console.log statements, and import statements have been preserved."
