## Food Delivery App

A modern, modular React Native food delivery application with responsive UI, feature-based architecture, and TypeScript support.

---

## Features

- Modular codebase (`features/` directory: home, categories, etc.)
- Responsive layouts using [`react-native-size-matters`](https://github.com/nirsky/react-native-size-matters)
- Redux Toolkit for state management
- TypeScript throughout
- Custom theming and hooks
- Well-commented, maintainable code

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or above recommended)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) or [npm](https://www.npmjs.com/get-npm)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (`npm install -g expo-cli`)

---

## Setup

1. **Clone the repository:**

   ```sh
   git clone <your-repo-url>
   cd Food-Delivery
   ```

2. **Install dependencies:**

   ```sh
   yarn install

   ```

3. **Start the Expo development server:**

   ```sh
   yarn start

   ```

4. **Run on your device or simulator:**
   - **iOS:** Press `i` in the Expo terminal (requires Mac & Xcode)
   - **Android:** Press `a` (requires Android Studio or emulator)
   - **Physical device:** Scan the QR code with the [Expo Go](https://expo.dev/client) app

---

## Project Structure

```Food-Delivery/
├── src/
│   ├── features/
│   │   ├── home/
│   │   └── categories/
│   ├── hooks/
│   ├── contexts/
│   ├── store/
│   └── types/
├── App.tsx
├── package.json
└── ...
```

---

## Key Scripts

- `yarn start` / `npm start` — Start Expo server
- `yarn android` / `npm run android` — Run on Android
- `yarn ios` / `npm run ios` — Run on iOS
- `yarn lint` — Lint codebase

---

## Notes

- All layout, margin, and sizing use responsive scaling (`scale`, `verticalScale`).
- Font sizes are kept static for design consistency.
- The codebase is well-commented for maintainability and onboarding.
- For custom environment variables, see `.env.example` if present.

---

## Troubleshooting

- If you encounter Metro bundler or dependency issues, try:

  ```sh
  rm -rf node_modules
  yarn install
  expo start -c
  ```

- For native dependencies, ensure you have the correct environment for React Native (see [React Native Environment Setup](https://reactnative.dev/docs/environment-setup)).

---

## License

This project is for demo purposes.
