# 🛒 QuickShop - Full-Stack E-Commerce Platform

[![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16.0+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Razorpay](https://img.shields.io/badge/Razorpay-UPI-0C2451?style=for-the-badge&logo=razorpay&logoColor=white)](https://razorpay.com/)

> A modern, full-featured e-commerce platform built with the MERN stack, featuring secure payment integration, real-time inventory management, and an intuitive admin dashboard.

## ✨ Features

### 🔐 User Authentication & Authorization
- Secure JWT-based authentication
- Password encryption with bcrypt
- Role-based access control (User/Admin)
- Session management and token refresh

### 🛍️ Shopping Experience
- **Product Catalog**: Browse products with advanced filtering and sorting
- **Search Functionality**: Real-time search with autocomplete
- **Shopping Cart**: Add, update, and remove items seamlessly
- **Wishlist**: Save favorite products for later
- **Product Reviews**: Rate and review purchased products

### 💳 Payment Integration
- **Razorpay UPI Integration**: Secure payment processing
- Multiple payment methods support
- Order confirmation and invoice generation
- Payment history tracking

### 📦 Order Management
- Real-time order tracking
- Order status updates (Processing, Shipped, Delivered)
- Order history for users
- Cancel and return requests

### 👨‍💼 Admin Dashboard
- **Product Management**: CRUD operations for products
- **Order Management**: View and update order status
- **User Management**: Monitor user activities
- **Analytics**: Sales reports and statistics
- **Inventory Control**: Stock management and alerts

### 🗄️ Database
- **SQL Database**: User authentication, orders, and transactions
- **MongoDB**: Product catalog and reviews
- Optimized queries for performance

## 🚀 Tech Stack

### Frontend
- **React 18+**: Modern UI with hooks
- **React Router**: Client-side routing
- **Redux Toolkit**: State management
- **Axios**: HTTP client
- **Tailwind CSS**: Utility-first styling
- **React Icons**: Icon library

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **JWT**: Token-based authentication
- **bcryptjs**: Password hashing
- **Mongoose**: MongoDB ODM
- **MySQL/PostgreSQL**: Relational database

### Payment & APIs
- **Razorpay**: Payment gateway integration
- **RESTful APIs**: Backend services

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js** (v16.0 or higher)
- **npm** or **yarn**
- **MongoDB** (v6.0 or higher)
- **MySQL** or **PostgreSQL**
- **Razorpay Account** (for payment integration)

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/krishna3163/QuickShop.git
cd QuickShop
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGO_URI=mongodb://localhost:27017/quickshop
SQL_HOST=localhost
SQL_USER=root
SQL_PASSWORD=yourpassword
SQL_DATABASE=quickshop

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d

# Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Email Configuration (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_EMAIL=your_email@gmail.com
SMTP_PASSWORD=your_app_password
```

Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in the frontend directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_RAZORPAY_KEY_ID=your_razorpay_key_id
```

Start the frontend development server:

```bash
npm start
```

### 4. Database Setup

#### MongoDB
Ensure MongoDB is running locally or use MongoDB Atlas:

```bash
mongod
```

#### SQL Database
Create the database and run migrations:

```sql
CREATE DATABASE quickshop;
```

Run the SQL schema file (located in `backend/database/schema.sql`):

```bash
mysql -u root -p quickshop < backend/database/schema.sql
```

## 🎯 Usage

### User Flow

1. **Register/Login**: Create an account or sign in
2. **Browse Products**: Explore the product catalog
3. **Add to Cart**: Select products and quantities
4. **Checkout**: Enter shipping details
5. **Payment**: Complete payment via Razorpay UPI
6. **Track Order**: Monitor order status

### Admin Flow

1. **Login**: Access admin dashboard with admin credentials
2. **Manage Products**: Add, edit, or delete products
3. **Process Orders**: Update order status and tracking
4. **View Analytics**: Monitor sales and user activity
5. **Manage Inventory**: Track and update stock levels

## 📁 Project Structure

```
QuickShop/
├── backend/
│   ├── config/
│   │   ├── db.js              # Database connections
│   │   └── razorpay.js        # Razorpay configuration
│   ├── controllers/
│   │   ├── authController.js  # Authentication logic
│   │   ├── productController.js
│   │   ├── orderController.js
│   │   └── paymentController.js
│   ├── middleware/
│   │   ├── auth.js            # JWT verification
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── User.js            # SQL User model
│   │   ├── Product.js         # MongoDB Product model
│   │   └── Order.js           # SQL Order model
│   ├── routes/
│   │   ├── auth.js
│   │   ├── products.js
│   │   ├── orders.js
│   │   └── payments.js
│   ├── database/
│   │   └── schema.sql         # SQL database schema
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── Cart.jsx
│   │   │   └── AdminDashboard.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── Checkout.jsx
│   │   │   └── Orders.jsx
│   │   ├── redux/
│   │   │   ├── store.js
│   │   │   └── slices/
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   └── index.js
│   ├── .env
│   └── package.json
│
└── README.md
```

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/register      # Register new user
POST   /api/auth/login         # User login
GET    /api/auth/profile       # Get user profile
PUT    /api/auth/profile       # Update profile
```

### Products
```
GET    /api/products           # Get all products
GET    /api/products/:id       # Get product by ID
POST   /api/products           # Create product (Admin)
PUT    /api/products/:id       # Update product (Admin)
DELETE /api/products/:id       # Delete product (Admin)
```

### Orders
```
GET    /api/orders             # Get user orders
GET    /api/orders/:id         # Get order by ID
POST   /api/orders             # Create new order
PUT    /api/orders/:id/status  # Update order status (Admin)
```

### Payments
```
POST   /api/payment/create     # Create Razorpay order
POST   /api/payment/verify     # Verify payment
```

## 🔒 Environment Variables

### Backend (.env)
| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port number | Yes |
| `MONGO_URI` | MongoDB connection string | Yes |
| `SQL_HOST` | SQL database host | Yes |
| `SQL_USER` | SQL database user | Yes |
| `SQL_PASSWORD` | SQL database password | Yes |
| `SQL_DATABASE` | SQL database name | Yes |
| `JWT_SECRET` | Secret key for JWT | Yes |
| `JWT_EXPIRE` | JWT expiration time | Yes |
| `RAZORPAY_KEY_ID` | Razorpay API key | Yes |
| `RAZORPAY_KEY_SECRET` | Razorpay secret key | Yes |
| `SMTP_HOST` | Email server host | No |
| `SMTP_PORT` | Email server port | No |
| `SMTP_EMAIL` | Sender email | No |
| `SMTP_PASSWORD` | Email password | No |

### Frontend (.env)
| Variable | Description | Required |
|----------|-------------|----------|
| `REACT_APP_API_URL` | Backend API base URL | Yes |
| `REACT_APP_RAZORPAY_KEY_ID` | Razorpay key for frontend | Yes |

## 🛡️ Security Features

- ✅ Password hashing with bcrypt
- ✅ JWT token-based authentication
- ✅ Protected API routes with middleware
- ✅ Input validation and sanitization
- ✅ SQL injection prevention
- ✅ XSS protection
- ✅ CORS configuration
- ✅ Rate limiting
- ✅ Secure payment processing

## 🧪 Testing

### Run Backend Tests
```bash
cd backend
npm test
```

### Run Frontend Tests
```bash
cd frontend
npm test
```

## 📱 Screenshots

*Add screenshots of your application here*

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Krishna**
- GitHub: [@krishna3163](https://github.com/krishna3163)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- React.js team for the amazing framework
- MongoDB team for the flexible database
- Razorpay for seamless payment integration
- All contributors and open-source libraries used

## 📞 Support

For support, email your-email@example.com or create an issue in this repository.

---

⭐ **If you like this project, please give it a star!** ⭐
