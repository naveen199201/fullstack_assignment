# Fullstack Assignment

## Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/iAmritMalviya/fullstack_assignment
   cd fullstack_assignment
   ```
2. **Backend:**
    ```bash
   $ cd fullstack_assignment/backend
   ```
   Then install the dependencies:
   ```sh
   npm install express sequelize pg pg-hstore
   npx sequelize-cli init
   ```
   Before starting the app update your
   ```bash
   $ cd fullstack_assignment/backend/config/config.json
   ```
   with your database credentials.
   
   To start the app
   ```bash
   node app.js
   ```
3. **Frontend:**
   ```bash
   $ cd fullstack_assignment/frontend
   npm install
   npm start
   ```


```bash
How can you implement shared functionality across a component tree?

I implement shared functionality across a component tree by using context API as well as React Redux library.
```
```bash
Why is the useState hook appropriate for handling state in a complex component?

The useState hook is appropriate for handling state in complex components because it simplifies state management, allows for localized and independent state variables, supports functional updates. Basically it follows DRY(Dont Repeat Yourself) principle  to make the code clean.
```

---

