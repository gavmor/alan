# Alan

Alan continuously captures screenshots and performs image recognition. The results of the image recognition are logged for further analysis.

> 👋 Hey! Watch me code it in this 📺[recorded livestream](https://youtube.com/live/B8EmMTJGcaA).

## Features

- Automated screenshot capture
- Image recognition using Google's Gemini 2.0 Flash model
- Continuous results logging with timestamps
- Built with TypeScript and Bun runtime

## Prerequisites

- [Bun](https://bun.sh) runtime installed
- Gemini API key
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

3. Set up your Gemini API key:
   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Create an API key
   - Set the API key in your environment:
     ```bash
     export GEMINI_API_KEY='your-api-key-here'
     ```

## Usage

Run the application:

```bash
bun run index.ts
```

The application will:
1. Take screenshots of your desktop
2. Process the screenshots through Gemini Pro Vision for image recognition
3. Append the recognition results with timestamps to results.txt

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