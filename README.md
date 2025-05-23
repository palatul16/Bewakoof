# 🧪 Bewakoof Clone - End-to-End Testing Project

This is a **solo project** focused on conducting both **manual and automation testing** for a clone of the Bewakoof website:  
👉 [Live Website Link](https://bewakoooff.netlify.app/html/index.html)

The project demonstrates professional-quality **end-to-end test coverage** using **Cypress** integrated with the **Page Object Model (POM)** architecture to ensure clean, scalable, and maintainable test scripts.

---

## 📌 Project Overview

- ✅ **Manual Testing**: Functional, UI, and usability testing.
- 🤖 **Automation Testing**: Cypress + POM for end-to-end workflow validation.
- 📁 **Tech Stack**: JavaScript, Cypress, Git, VS Code.

---

## 👨‍💻 Author

**Atul Pal**  
Software Development Engineer in Testing (SDET)  
Email: `atulpaldelhi@gmail.com`  
LinkedIn: [linkedin.com/in/atulpal](https://www.linkedin.com/in/atul-pal-451b13251/)  
GitHub: [github.com/palatul16](https://github.com/palatul16)

---

## 🧰 Tools & Technologies

| Area                  | Tool / Tech             |
|-----------------------|-------------------------|
| Manual Testing        | Test Scenarios, Test Cases |
| Automation Framework  | Cypress                 |
| Code Structure        | Page Object Model (POM) |
| Language              | JavaScript              |
| Editor                | Visual Studio Code      |
| Version Control       | Git                     |

---

## 📋 Manual Testing

### 🔹 Test Case Coverage
- Home Page Elements
- Navigation Bar
- Product Listing and Filtering
- Product Details Page
- Add to Cart Functionality
- Checkout Flow
- Login/Signup Flows
- Responsive Design Checks

### 🔹 Bug Reports
All bugs and observations were documented during manual testing and fixed before automation began.

---

## 🤖 Automation Testing with Cypress

### 🔹 Features Tested
- ✅ Home Page Load
- ✅ Search Product
- ✅ Add to Cart
- ✅ Remove from Cart
- ✅ Login and Logout
- ✅ Navigation Links

### 🔹 Folder Structure
<pre> ```cypress/ </br>
│ </br>
├── e2e/ </br>
│ ├── Bewakoof.cy.js </br>
│ </br>
└── support/ </br>
| ├── pages/ </br>
│ │ ├── add_to_bag.js </br>
│ │ ├── Login.js </br>
│ │ ├── coupan.js </br>
│ │ ├── order.js </br>
│ │ ├── search_functionality.js </br>
│ │ ├── signUp.js </br>
│ │ ├── verifying_product.js </br>
│ │ ├── wishlis.js </br>
│ </br>
├── fixtures/ </br>
│ └── testData.json </br>
│ </br>
└── commands.js </br> ``` </pre>

### 🔹 Why POM?
- Code reusability
- Better maintenance
- Improved readability
- Cleaner test cases

---

### 📦 Prerequisites

Make sure you have:
- Node.js installed
- Cypress installed globally or as a dev dependency

### ⚙️ Installation

```bash
git clone https://github.com/yourusername/bewakoof-testing-project.git
cd bewakoof-testing-project
npm install
