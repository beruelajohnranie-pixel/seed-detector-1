BinhiScan — Professional Responsive UI Package

Included files
- index.html: application structure, interactions, and existing feature logic
- professional.css: additional responsive styling, desktop sidebar navigation, improved focus states, and mobile layout refinements
- model.tflite: supplied seed classification model
- labels.txt: model class labels
- manifest.webmanifest: installable web-app metadata
- sw.js: service-worker cache configuration

Current model classes
- Palay (Rice)
- Mais (Corn)
- Kamatis (Tomato)
- Talong (Eggplant)

Design updates
- Desktop layout with a persistent vertical navigation rail
- Responsive mobile navigation and spacing
- Refined cards, buttons, focus states, form controls, and content spacing
- Scan page uses a two-column layout on wide screens
- Existing features and the supplied AI model are retained

Run/deploy
1. Extract all files into the same folder.
2. For camera access and service-worker behavior, serve the folder over HTTPS or localhost rather than opening index.html directly.
3. On first launch, internet access is required to load TensorFlow.js libraries from the CDN.
4. Allow camera access or use the image upload option.

Important limitations
- The model only recognizes the four classes listed above.
- Confidence is a model score, not a guarantee of correctness.
- Soil suitability is a checklist estimate and does not measure pH or nutrients.
- Seasonal guidance is based on stored month ranges, not live weather.
- Scan history is stored locally on the current browser/device.
- Offline AI use depends on browser caching of external TensorFlow libraries; it is not guaranteed on every first/offline launch.
