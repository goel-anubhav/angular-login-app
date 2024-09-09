
# JWT Authentication with Angular, Java Spring Boot, and PostgreSQL

Welcome to the JWT Authentication project! This repository contains the implementation of a secure authentication system using Angular for the frontend, Java Spring Boot for the backend, and PostgreSQL for the database.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **JWT Authentication**: Secure user authentication using JSON Web Tokens.
- **Role-based Access Control**: Different roles with specific permissions.
- **RESTful APIs**: Clean and efficient REST APIs using Spring Boot.
- **Secure Storage**: Passwords are hashed and stored securely in PostgreSQL.
- **Responsive UI**: Modern and responsive user interface with Angular.
- **Error Handling**: Robust error handling on both frontend and backend.

## Architecture

This project follows a three-tier architecture:

- **Frontend**: Angular application for the user interface.
- **Backend**: Java Spring Boot application for handling business logic and authentication.
- **Database**: PostgreSQL for data persistence.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **Angular CLI**: Install Angular CLI globally using `npm install -g @angular/cli`
- **Java 11**: [Download and install Java 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- **PostgreSQL**: [Download and install PostgreSQL](https://www.postgresql.org/download/)

### Installation

1. **Clone the repository**:
    \`\`\`bash
    git clone https://github.com/IssaEhtishamAli/jwt-auth-angular-springboot.git
    cd JwtAuthentication
    \`\`\`

2. **Backend Setup**:
    - Navigate to the \`backend\` directory:
      \`\`\`bash
      cd backend
      \`\`\`
    - Update \`application.properties\` with your PostgreSQL credentials.
    - Build the project using Maven:
      \`\`\`bash
      mvn clean install
      \`\`\`
    - Run the Spring Boot application:
      \`\`\`bash
      mvn spring-boot:run
      \`\`\`

3. **Frontend Setup**:
    - Navigate to the \`frontend\` directory:
      \`\`\`bash
      cd ../frontend
      \`\`\`
    - Install Angular dependencies:
      \`\`\`bash
      npm install
      \`\`\`
    - Run the Angular application:
      \`\`\`bash
      ng serve
      \`\`\`

## Usage

1. Open your web browser and navigate to \`http://localhost:4200\`.
2. Register a new user or log in with existing credentials.
3. Access protected routes based on user roles.

## Project Structure

``` plaintext
JwtAuthentication
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/yourusername/jwtauthentication/
│   │   │   ├── resources/
│   │   │   │   └── application.properties
│   │   └── test/
│   └── pom.xml
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── assets/
│   │   ├── environments/
│   │   └── index.html
│   └── angular.json
└── README.md
```
