# Poker Association App (High Fidelity Wireframes)

A comprehensive digital ecosystem for managing a Poker Association, replacing traditional offline processes with a modern, high-fidelity web and mobile experience. This project includes a Player Mobile App, a Poker House Dashboard, and an Admin Console.

## 🚀 Project Overview

This application streamlines the operations of a Poker Association, handling everything from player check-ins and chip management to food ordering and game administration. It serves as a high-fidelity prototype and MVP (Minimum Viable Product) to demonstrate the look, feel, and core functionality of the platform.

## ✨ Features

### 📱 Player Mobile App
- **User Authentication**: Secure login for players.
- **Wallet Management**: View balance, add chips, and redeem chips.
- **Game Access**: Browse available games and join tables.
- **Food & Beverage**: Order food and drinks directly from the app.

### 🖥️ Poker House Dashboard
- **Staff Interface**: Tools for floor managers and dealers.
- **Table Management**: Open/close tables, manage seats, and track active games.
- **Chip Transactions**: Process buy-ins and cash-outs for players.
- **Order Management**: Receive and fulfill food and drink orders.

### 🛠️ Admin Console
- **System Administration**: Manage users, roles, and permissions.
- **Analytics**: View reports on game activity and financial metrics.
- **Configuration**: Set up game types, blinds, and house rules.

## 💻 Tech Stack

- **Framework**: [React](https://react.dev/) (via [Vite](https://vitejs.dev/))
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (based on Radix UI)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router](https://reactrouter.com/)

## 🛠️ Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd hfw-ipa
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── player/         # Player-specific components (Wallet, Login, etc.)
│   ├── ui/             # Shadcn UI primitives (Button, Dialog, etc.)
│   └── ...
├── lib/                # Utility functions and helpers
├── pages/              # Route components (if applicable)
├── App.tsx             # Main application component
├── main.tsx            # Entry point
└── index.css           # Global styles and Tailwind directives
```

## 🎨 Design System

The project uses a premium, dark-themed aesthetic with high-contrast elements, glassmorphism effects, and smooth animations to provide a state-of-the-art user experience.

---

*Original design inspiration: [Figma Link](https://www.figma.com/design/QRAvnM1LMn4ePJ9rq57jiQ/High-Fidelity-Wireframes)*