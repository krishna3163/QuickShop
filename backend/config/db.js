const mongoose = require('mongoose');
const mysql = require('mysql2/promise');

// MongoDB Connection
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✓ MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

// MySQL Connection Pool
const mysqlPool = mysql.createPool({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test MySQL Connection
const testMySQLConnection = async () => {
  try {
    const connection = await mysqlPool.getConnection();
    console.log('✓ MySQL Connected');
    connection.release();
  } catch (error) {
    console.error('MySQL connection error:', error.message);
  }
};

// Connect to both databases
const connectDB = async () => {
  await connectMongoDB();
  await testMySQLConnection();
};

module.exports = { connectDB, mysqlPool };
