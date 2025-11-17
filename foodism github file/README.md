# Foodism - Food Delivery Application

A modern React-based food delivery web application with a complete e-commerce flow including menu browsing, cart management, checkout process, and order tracking.

##  features

### Core Features
- **Navigation System**: Home, Menu, Offers, About, Contact, and Cart pages
- **Menu Page**: Dynamic rendering of food items with images, descriptions, and prices
- **Cart System**: Add/remove items, update quantities, and persist data using LocalStorage
- **Coupon System**: Apply discount coupons for savings on orders
- **Checkout Process**: Form validation with name, phone, and address requirements
- **Order Tracking**: Simulated order status progression (Order Placed → Preparing → Out for Delivery → Delivered)
- **Responsive Design**: Mobile-first approach with adaptive layouts

### Technical Features
- **React Hooks**: useState, useEffect, useContext, useReducer for state management
- **Context API**: Centralized cart state management
- **React Router**: Client-side routing for navigation
- **LocalStorage**: Persistence of cart data between sessions
- **CSS Modules**: Component-specific styling

## 📁 Project Structure

```
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── FoodCard.jsx
 │    ├── CartItem.jsx
 │    └── Footer.jsx
 ├── pages/
 │    ├── Home.jsx
 │    ├── Menu.jsx
 │    ├── Offers.jsx
 │    ├── About.jsx
 │    ├── Contact.jsx
 │    ├── Cart.jsx
 │    ├── Checkout.jsx
 │    └── Confirmation.jsx
 ├── context/
 │    └── CartContext.jsx
 ├── data/
 │    └── foodItems.js
 ├── assets/
 │    ├── logo.svg
 │    └── favicon.ico
 ├── App.jsx
 └── index.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd food-delivery-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:
```bash
npm start
```
The application will be available at `http://localhost:3000`

### Production

To create a production build:
```bash
npm run build
```

To serve the production build locally:
```bash
npx serve -s build
```

## 💡 Key Components

### Cart Context
Manages the global cart state using React Context API and useReducer. Features include:
- Adding items to cart
- Removing items from cart
- Updating item quantities
- Applying coupon codes for discounts
- Calculating totals with discounts
- LocalStorage persistence

### Food Items
Sample data includes 12 food items with:
- Images (from Unsplash)
- Names
- Descriptions
- Prices (in Rupees)

### Routing
Implemented with React Router DOM:
- `/` - Home page
- `/menu` - Menu page
- `/offers` - Special offers
- `/about` - About page
- `/contact` - Contact form
- `/cart` - Shopping cart
- `/checkout` - Checkout process
- `/confirmation` - Order confirmation

## 🎨 Design Elements

- **Color Scheme**: Primary red (#ff6b6b) with clean whites and greys
- **Typography**: System fonts for optimal readability
- **Icons**: Emoji-based icons for lightweight design
- **Animations**: CSS transitions for interactive elements
- **Responsive Grids**: Flexible layouts for all screen sizes

## 🛠️ Technologies Used

- **React** (v18+)
- **React Router DOM** (v6+)
- **Context API** for state management
- **CSS** for styling
- **LocalStorage** for data persistence

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Adaptive components
- Touch-friendly interfaces

## 🔄 Order Flow

1. Browse menu items
2. Add items to cart
3. Apply coupon codes for discounts (optional)
4. Review cart and proceed to checkout
5. Complete checkout form
6. Receive order confirmation
7. Track order status in real-time

## 🏢 Pages Overview

### Home
- Hero banner with call-to-action
- Feature highlights
- Direct navigation to menu

### Menu
- Grid layout of food items
- Add/remove functionality with animations
- Real-time cart updates

### Cart
- Itemized list with quantities
- Price calculations
- Coupon code application
- Order summary
- Clear cart option

### Checkout
- Form validation
- Payment method selection
- Order review
- Discount display if coupon applied

### Confirmation
- Order details
- Status tracking simulation
- Order ID generation

### Offers
- Discount cards with promo codes
- Expiry information

### About
- Company story
- Values and team information

### Contact
- Contact information
- Message form

## 🎟️ Coupon System

The application includes a coupon system with the following features:
- Apply discount coupons at checkout
- Percentage-based discounts
- Sample coupons included:
  - WEEKEND20: 20% off
  - FIRST50: 50% off
  - HAPPY24: 30% off
- Visual indication of applied coupons
- Ability to remove coupons

## 📞 Support

For support, contact the development team or create an issue in the repository.