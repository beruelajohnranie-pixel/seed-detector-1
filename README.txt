# BinhiScan — Professional UI Full System Prototype

## Files
- `index.html` — responsive mobile-friendly web application with refreshed professional UI
- `model.tflite` — the provided Teachable Machine seed model
- `labels.txt` — model class labels
- `manifest.webmanifest` — installable web-app metadata
- `sw.js` — caches the app shell and model files for later offline use

## Current supported AI classes
- Palay (Rice)
- Mais (Corn)
- Kamatis (Tomato)
- Talong (Eggplant)

The app cannot identify crop classes that are not present in the trained model. The current planting guides and seasons are general estimates and should be checked with local agricultural guidance.

## Deploy to GitHub Pages
1. Download and extract this ZIP.
2. Open your GitHub repository.
3. Upload/replace `index.html`, `model.tflite`, `labels.txt`, `manifest.webmanifest`, and `sw.js` in the repository root.
4. Commit the changes.
5. Open your GitHub Pages site over HTTPS.
6. On first use, connect to the internet so the TensorFlow.js scripts and WebAssembly runtime can load. The app shell/model can then be cached by the service worker. Offline AI availability still depends on whether the browser has cached the external TensorFlow libraries.
7. On a phone, allow camera access. If the camera fails, choose an image from the phone instead.

## Important technical notes
- Confidence values are converted to a probability distribution when the model output is not already a probability distribution. This is a display interpretation; verify the model's output/quantization details before using scores for formal accuracy evaluation.
- The soil checklist is an observation-based estimate. A photo cannot reliably measure soil pH or nutrient levels.
- The season checker uses the device's current month and the seasonal windows stored in the app; it does not use live weather.
- Scan history is saved in local browser storage on the current device and is not synchronized across devices.
- This is a student-project prototype. Test with multiple known seed samples before relying on results.

## Design refresh
This version uses a cleaner green agricultural theme, improved spacing and typography, refined cards and forms, accessible focus states, and a desktop sidebar / mobile navigation layout. Core app functions and the provided AI model files are retained.
