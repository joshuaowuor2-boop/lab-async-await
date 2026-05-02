### Lab: Nested/Arrow Functions Putting it all together

**Overview**

**Scenario:** You are tasked with creating a login feature for an e-commerce website. You need to make sure that the login is secure by not allowing the user to login too many times. Using your knowledge of nested and arrow functions to complete this lab.

**Estimated Completion Time:** 30-60 minutes

**Tools and Resources**
- **Tools:** Visual Studio Code (VSCode), Node.js
- **Resources:** MDN Web Docs
- **Setup:** Fork and clone the provided GitHub repository, and run `npm install` to set up the project locally. 

**Instructions**

1. **Fork and Clone the Repository:**
   - Go to the provided GitHub repository link.
   - Fork the repository to your GitHub account.
   - Clone the forked repository to your local machine.
   - Open the project in VSCode.
   - Run `npm install` to install all necessary dependencies.

2. **Create a createLoginTracker function:**
   - Create a function named `createLoginTracker` and assign the following arguments:
     - `userInfo` (a object) with the following keys
       - `username` (a string)
       - `password` (a string)

3. **Initalize Attempt Count**
   - Inside `createLoginTracker` define the variable `attemptCount` initialized with `0`.

4. **Create and return arrow function**
   - Create an arrow function to return nested inside `createLoginTracker`, assign it the following arguments:
     - `passwordAttempt` (a string)

5. **Arrow function checks and counts password**
   - The Arrow Function will check to see if the password is correct or not. It will do this by:
      - Incrementing `attemptCount` by 1
      - Checks to see if `passwordAttempt` matches the password in `userInfo`
        - If they do match and the login attempt is less then 3, returns a message saying `Login successful`
        - If they do not match or the user has attempted to login more then 3 times, return one of the messages depending on the situation.
          - If user has called login attempt 3 or less times return a message saying `Attempt 1: Login failed`,`Attempt 2: Login failed`, or `Attempt 3: Login failed`
          - If the user has exceeded 3 calls return the message saying `Account locked due to too many failed login attempts`






