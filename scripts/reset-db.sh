#!/bin/bash

echo "🗑️  Removing local database..."
rm -rf .wrangler/state

echo "📦 Removing .next build cache..."
rm -rf .next

echo "✅ Database and cache cleared!"
echo ""
echo "📝 Next steps:"
echo "1. Run: npm run payload migrate"
echo "2. Run: npm run dev"
echo ""

