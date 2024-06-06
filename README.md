# 🎬 Movie Store Backend Testing

Welcome to the **Movie Store** backend testing project! This repository is dedicated to testing the REST API endpoints of the Movie Store application using Postman and Apidog.

<img width="600" alt="Postman_movie_testing" src="https://github.com/MildaRuz/node.js_postman_testing_project1/assets/145338483/c078832f-df62-4fa4-b73a-e10d6864289c">

<img width="600" alt="APIdog_movie_testing" src="https://github.com/MildaRuz/node.js_postman_testing_project1/assets/145338483/42a6dc5b-856c-4ed4-8517-a0e9df447e08">

## 📝 Overview

The Movie Store backend testing project focuses on ensuring the reliability and correctness of the REST API endpoints. While Postman is primarily used for testing, due to its running tests limits, some tests have been exported to Apidog to perform comprehensive testing on various endpoints.

## ✨ Features

- **API Testing**: Comprehensive testing of REST API endpoints.
- **Postman and Apidog**: Utilizes both Postman and Apidog for extensive testing capabilities.
- **No Database Required**: Mock data is used, eliminating the need for a database setup.
- **CI/CD**: Automated testing using GitHub Actions.

## 🛠 Technologies Used

- **Backend**:
  - Node.js
  - Express
  
- **Testing Tools**:
  - Newman
  - Postman
  - Apidog

## ⚙️ Installation

1. **Clone the repository:**

```sh
git clone https://github.com/MildaRuz/node.js_postman_testing_project1.git
```

2. **Navigate to the project directory in your terminal using VS Code or any other terminal application.**
```
cd node.js_postman_testing_project1
```

3. **Install dependencies:**
   ```sh
   npm install
   ```

## 🚀 Running the Application

Start the backend server.
```sh
npm run dev
```

The server will run on http://localhost:3000.


## 🧪 Testing
**Postman**

Open Postman.
Import the collection from the tests directory.
Run the collection to execute the tests.

**Apidog**
Open Apidog.
Import the collection choose apidog format file from the apidog directory:
<img width="440" alt="ApiDog_import_instruction" src="https://github.com/MildaRuz/node.js_postman_testing_project1/assets/145338483/8bb0cc0b-fdc8-49b6-b41c-db3218567f4e">

and go to Tests, Movie folder, check one or all scenarios and click Batch Run to execute the tests.
<img width="440" alt="RunTests_instruction" src="https://github.com/MildaRuz/node.js_postman_testing_project1/assets/145338483/8fad947f-dca1-44e8-80fd-e3ba3c4b4bd7">

**Running Tests via CLI**
For running tests via CLI, use the following commands.

```sh
npm run apidog
```

or
```sh
npm run newman
```

Thank you for your interest in the Movie Store backend testing project! If you have any questions or feedback, please feel free to reach out.

