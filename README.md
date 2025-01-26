📖 BlogPro - Modern Blogging Platform

BlogPro is a modern, feature-rich blogging platform built with React.js, Redux Toolkit, Tailwind CSS, and Markdown support. It allows users to create, edit, and publish blog posts with live Markdown preview. The platform is designed for performance, scalability, and easy content management.

🚀 Features
✅ Fully Responsive UI – Optimized for mobile & desktop
✅ Markdown Support – Write blogs using Markdown with live preview
✅ Syntax Highlighting – Code snippets are beautifully styled using Prism.js
✅ JWT Authentication – Secure login & registration system
✅ User Roles – Readers, Authors, and Admins with different permissions
✅ REST API Integration – Fetch & manage blog posts dynamically
✅ SEO Optimized – Uses React Helmet for metadata optimization
✅ Light & Dark Mode – Theme switcher for a better reading experience

🛠️ Tech Stack
Technology	Usage
React.js	Frontend framework
Redux Toolkit	State management
Tailwind CSS	UI styling
React Router	Page navigation
Axios	API requests
React Markdown	Markdown rendering
Prism.js	Code syntax highlighting
React Hook Form	Form validation
React Helmet	SEO optimization
📂 Project Structure
bash
Copy
Edit
/frontend  
│── src/  
│   ├── components/        # Reusable UI components (Navbar, Footer, MarkdownEditor)  
│   ├── pages/             # Pages (Home, Blog, Login, Register, Dashboard)  
│   ├── redux/             # Redux Toolkit slices (Auth, Blogs, Comments)  
│   ├── utils/             # Helper functions (API calls, formatters)  
│   ├── App.jsx            # Main App Component  
│   ├── index.jsx          # React entry point  
│── public/                # Static files  
│── package.json           # Dependencies  
│── tailwind.config.js     # Tailwind setup  
│── vite.config.js         # Vite config  
⚡ Installation & Setup
1️⃣ Clone the Repository

bash
Copy
Edit
git clone https://github.com/noman158/BlogPro.git
cd BlogPro/frontend

2️⃣ Install Dependencies

bash
Copy
Edit
npm install

3️⃣ Start the Development Server

bash
Copy
Edit
npm run dev

4️⃣ Open in Browser

Visit http://localhost:5173/ to see BlogPro in action
📌 API Endpoints
(Example endpoints for backend integration)

Method	Endpoint	Description
GET	/api/blogs	Fetch all blogs
GET	/api/blogs/:id	Get a single blog post
POST	/api/blogs	Create a new blog (Auth required)
PUT	/api/blogs/:id	Edit a blog post
DELETE	/api/blogs/:id	Delete a blog (Admin only)
POST	/api/users/login	User authentication
POST	/api/users/register	Register a new user
🛠️ Contributing
Contributions are welcome! Follow these steps:

Fork the repo
Create a new branch (feature-newComponent)
Commit your changes (git commit -m "Added new feature")
Push to your branch (git push origin feature-newComponent)
Submit a Pull Request

📜 License
This project is MIT Licensed – feel free to use and modify it as needed.

💬 Contact
📧 Developer: Noman
🔗 GitHub: noman158

This README ensures clarity, professionalism, and easy onboarding for new users & contributors. Let me know if you need any modifications! 🚀
