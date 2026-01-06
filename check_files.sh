#!/bin/bash
echo "Checking critical files..."
files=(
  "README.md"
  "FEATURES.md"
  "SETUP_GUIDE.md"
  "package.json"
  "index.html"
  "vite.config.js"
  "src/App.jsx"
  "src/main.jsx"
  "backend/server.js"
  "backend/package.json"
  "backend/.env"
  "backend/src/config/database.js"
  "backend/src/routes/index.js"
)

missing=0
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "✓ $file"
  else
    echo "✗ $file - MISSING!"
    missing=$((missing + 1))
  fi
done

echo ""
if [ $missing -eq 0 ]; then
  echo "✅ All critical files present!"
else
  echo "❌ $missing files missing!"
fi
