# Full Stack Application

This is a full-stack application that consists of a React client and an Express server. Below are the instructions for setting up and running the project.

## Project Structure

```
full-stack-app
├── client
│   ├── src
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── components
│   │       └── ExampleComponent.tsx
│   ├── package.json
│   └── tsconfig.json
├── server
│   ├── src
│   │   ├── app.ts
│   │   ├── controllers
│   │   │   └── index.ts
│   │   ├── routes
│   │   │   └── index.ts
│   │   └── types
│   │       └── index.ts
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd full-stack-app
   ```

2. Install dependencies for the client:

   ```
   cd client
   npm install
   ```

3. Install dependencies for the server:

   ```
   cd ../server
   npm install
   ```

### Running the Application

1. Start the server:

   ```
   cd server
   npm start
   ```

2. In a new terminal, start the client:

   ```
   cd client
   npm start
   ```

### Usage

- The client application will be available at `http://localhost:3000`.
- The server API will be available at `http://localhost:5000`.

### Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.

### License

This project is licensed under the MIT License.