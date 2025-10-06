
# Quiz API

A **RESTful API for an Online Quiz Application** built using **Node.js, Express.js, and PostgreSQL**.
This API supports **user registration, login with JWT authentication, and quiz management** with role-based access control (admin/user).

---

## **Features**

* **User Authentication**

  * Register new users
  * Login with JWT token
* **Role-Based Access**

  * Admins can create quizzes
  * Users can view quizzes
* **Secure**

  * Passwords hashed using bcrypt
  * JWT token used for protected routes
* **Database**

  * PostgreSQL used to store users and quizzes
* **API Testing**

  * Compatible with **Postman** or **Thunder Client**

---

## **Tech Stack**

* **Backend:** Node.js, Express.js
* **Database:** PostgreSQL
* **Authentication:** JWT, bcrypt
* **Middleware:** body-parser, cors
* **Environment Management:** dotenv

---

## **Setup & Installation**

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd quizapi
```

2. **Install dependencies**

```bash
npm install
```

3. **Create `.env` file** in the root:

```
PORT=3000
DB_HOST=localhost
DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_NAME=quizdb
JWT_SECRET=your_jwt_secret
```

4. **Run the server**

```bash
npm run dev
```

Server will run on `http://localhost:3000`

---

## **API Endpoints**

### **Auth**

* **Register** → `POST /api/auth/register`
* **Login** → `POST /api/auth/login`

**Example request body:**

```json
{
  "name": "Janhvi",
  "email": "janhvi@example.com",
  "password": "mypassword",
  "role": "user"
}
```

---

### **Quizzes**

* **Get all quizzes** → `GET /api/quizzes` (Protected, Bearer Token required)
* **Create quiz** → `POST /api/quizzes` (Protected, admin only)

**Example quiz object:**

```json
{
  "question": "Which language runs in a web browser?",
  "option_a": "Java",
  "option_b": "C",
  "option_c": "Python",
  "option_d": "JavaScript",
  "correct_option": "JavaScript"
}
```

---

## **Testing**

* Use **Postman** or **Thunder Client**
* Include **Authorization header** for protected routes:

```
Authorization: Bearer <your-jwt-token>
```

---

## **License**

This project is **open-source** and free to use.


