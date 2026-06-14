#!/bin/bash
set -e

# ==============================================================================
# anchor.md Installer Script
# ==============================================================================
# USAGE: curl -sSL https://raw.githubusercontent.com/Dhairya0707/anchor.md/main/install.sh | bash
#
# IMPORTANT: Replace "Dhairya0707" below with your actual GitHub username
#            before sharing this script with others!
# ==============================================================================

GITHUB_USERNAME="Dhairya0707"
REPO_NAME="anchor.md"
BRANCH_NAME="main"

ANCHOR_DIR="anchor.md"
INST_DIR="$ANCHOR_DIR/INSTRUCTIONS"

# Check if anchor.md folder already exists
if [ -d "$ANCHOR_DIR" ]; then
    echo "⚠️  anchor.md folder already exists in the current directory. Skipping setup."
    exit 0
fi

echo "🚀 Initializing anchor.md in $(pwd)..."

# Create directories
mkdir -p "$INST_DIR"

# Base URL to fetch files from your GitHub repository
BASE_URL="https://raw.githubusercontent.com/$GITHUB_USERNAME/$REPO_NAME/$BRANCH_NAME/anchor.md"

# List of files to download
FILES=(
    "@main.md"
    "@projectoverview.md"
    "ARCHITECTURE.md"
    "TECH_STACK.md"
    "DATABASE_SCHEMA.md"
    "SECURITY.md"
    "UI_UX_GUIDELINES.md"
    "DECISIONS.md"
    "CONTEXT_MEMORY.md"
    "TODO.md"
)

# Download main files
for file in "${FILES[@]}"; do
    echo "  Downloading $file..."
    curl -fsSL "$BASE_URL/$file" -o "$ANCHOR_DIR/$file"
done

# List of instruction files to download
INSTRUCTIONS=(
    "@backend-dev.md"
    "@frontend-dev.md"
    "@designer.md"
    "@security-audit.md"
    "@devops.md"
    "@qa-tester.md"
)

# Download instruction files
for inst in "${INSTRUCTIONS[@]}"; do
    echo "  Downloading INSTRUCTIONS/$inst..."
    curl -fsSL "$BASE_URL/INSTRUCTIONS/$inst" -o "$INST_DIR/$inst"
done

echo -e "\n✅ anchor.md initialized successfully! Open anchor.md/@main.md to get started."
