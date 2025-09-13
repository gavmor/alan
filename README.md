# Alan

Alan continuously captures screenshots and performs image recognition. The results of the image recognition are logged for further analysis.

> 👋 Hey! Watch me code it in this 📺[recorded livestream](https://youtube.com/live/B8EmMTJGcaA).

## Features

- Automated screenshot capture
- Image recognition using Ollama AI model
- Results logging to file
- Built with TypeScript and Bun runtime

## Prerequisites

- [Bun](https://bun.sh) runtime installed
- [Ollama](https://ollama.ai) installed and running locally
- TypeScript 5.x

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gavmor/alan.git
   cd alan
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

## Usage

Run the application:

```bash
bun run index.ts
```

The application will:
1. Take screenshots of your desktop
2. Process the screenshots through Ollama for image recognition
3. Save the recognition results to a text file

## Development

To run tests:

```bash
bun test
```

## Dependencies

- `screenshot-desktop`: For capturing desktop screenshots
    - (Linux) `image-magick`
- `ollama`: For interfacing with Ollama AI models
- TypeScript: For type-safe development