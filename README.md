🧩 Micro Frontend Workspace with Nx, Module Federation, and Shared Libraries
🚀 Overview

This repository demonstrates a Micro Frontend architecture built with Nx, Module Federation, and Angular.
It consists of one Host Application (employee) and two Remote Applications (login-app, todo), communicating and sharing features through federated modules and shared libraries.

The main goals of this project:

Establish a scalable monorepo structure using Nx.

Apply Module Federation for independent deployable micro frontends.

Share UI components, utilities, and feature modules between applications.

🏗️ Architecture Overview
🔸 1. Host Application

Name: employee

Acts as the container (shell) application.

Dynamically loads micro frontends (remotes) at runtime.

Handles routing, layout, and integration logic between remotes.

🔸 2. Remote Applications
App Name	Purpose	Federated Entry
login-app	Handles authentication (login)	remoteEntry.js
todo	Feature module to manage tasks/todos	remoteEntry.js

Each remote runs independently but can also be loaded into the host dynamically using Module Federation.

📂 Folder Structure
myapp/
├── apps/
│   ├── hosts/
│   │   └── employee/                   # Host application
│   │       ├── src/
│   │       │   ├── app/
│   │       │   └── assets/
│   │       └── webpack.config.js
│   │
│   └── remotes/
│       ├── login-app/                  # Remote app for authentication
│       │   ├── src/
│       │   └── webpack.config.js
│       │
│       └── todo/                       # Remote app for managing todos
│           ├── src/
│           └── webpack.config.js
│
├── libs/
│   └── shared/                         # Shared libraries across apps
│       ├── feature/                    # Shared feature modules
│       │   ├── auth/                   # Example shared login feature
│       │   ├── todo/                   # Example shared todo logic
│       │   └── ...
│       │
│       ├── common/                     # Shared directives, pipes, guards
│       │   ├── directives/
│       │   ├── pipes/
│       │   └── guards/
│       │
│       ├── ui/                         # Shared UI components (buttons, modals, etc.)
│       │   ├── button/
│       │   ├── modal/
│       │   ├── input/
│       │   └── ...
│       │
│       └── utils/                      # Helper functions, constants, etc.
│           ├── date/
│           ├── http/
│           └── ...
│           
│
├── nx.json
├── project.json
├── tsconfig.base.json
├── package.json
└── README.md

⚙️ Tech Stack
Layer	Technology
Framework	Angular 17+
Monorepo Tool	Nx
Module Federation	@angular-architects/module-federation
Styling	TailwindCSS
Shared UI	Angular Components (in /libs/shared/ui)
Utilities	TypeScript helpers (in /libs/shared/utils)
🔧 Setup & Development
1️⃣ Install dependencies
pnpm install


(or npm install / yarn install depending on your setup)

2️⃣ Serve applications
Run all apps (host + remotes)
pnpm run start

Or run individually:
nx serve employee     # Host
nx serve login-app    # Remote Login
nx serve todo         # Remote Todo
