# Foodism - Food Delivery Application Documentation

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Technology Stack](#technology-stack)
5. [Getting Started](#getting-started)
6. [Component Architecture](#component-architecture)
7. [State Management](#state-management)
8. [Routing](#routing)
9. [Data Flow](#data-flow)
10. [Styling](#styling)
11. [Responsive Design](#responsive-design)
12. [Build and Deployment](#build-and-deployment)
13. [Testing](#testing)
14. [Performance Optimization](#performance-optimization)
15. [Troubleshooting](#troubleshooting)

## Overview

Foodism is a modern React-based food delivery web application that provides users with a complete e-commerce experience for ordering food online. The application features a responsive design, intuitive navigation, and a seamless checkout process.

## Features

### Core Features
- **Navigation System**: Home, Menu, Offers, About, Contact, and Cart pages
- **Menu Page**: Dynamic rendering of food items with images, descriptions, and prices
- **Cart System**: Add/remove items, update quantities, and persist data using LocalStorage
- **Checkout Process**: Form validation with name, phone, and address requirements
- **Order Tracking**: Simulated order status progression (Order Placed → Preparing → Out for Delivery → Delivered)
- **Responsive Design**: Mobile-first approach with adaptive layouts

### Technical Features
- **React Hooks**: useState, useEffect, useContext, useReducer for state management
- **Context API**: Centralized cart state management
- **React Router**: Client-side routing for navigation
- **LocalStorage**: Persistence of cart data between sessions
- **CSS Modules**: Component-specific styling

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── FoodCard.jsx
│   ├── CartItem.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── Menu.jsx
│   ├── Offers.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   └── Confirmation.jsx
├── context/
│   └── CartContext.jsx
├── data/
│   └── foodItems.js
├── assets/
│   ├── logo.svg
│   └── favicon.ico
├── App.jsx
└── index.js
```

## Technology Stack

- **React** (v19.2.0) - Frontend library for building user interfaces
- **React Router DOM** (v7.9.6) - Declarative routing for React applications
- **Context API** - Built-in React state management solution
- **CSS** - Styling and layout
- **LocalStorage** - Client-side data persistence
- **React Scripts** (v5.0.1) - Configuration and scripts for Create React App

## Getting Started

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

## Component Architecture

### Root Components
- **App.js**: Main application component that sets up routing and context providers
- **index.js**: Entry point that renders the App component

### Layout Components
- **Navbar**: Navigation header with links to all pages and cart indicator
- **Footer**: Site footer with copyright information

### Page Components
- **Home**: Landing page with hero section and featured content
- **Menu**: Displays all food items in a grid layout
- **Offers**: Shows promotional deals and discounts
- **About**: Company information and values
- **Contact**: Contact form and information
- **Cart**: Shopping cart with itemized list and order summary
- **Checkout**: Order form with validation
- **Confirmation**: Order confirmation and tracking

### UI Components
- **FoodCard**: Displays individual food items with image, description, and add button
- **CartItem**: Represents items in the shopping cart with quantity controls

## State Management

The application uses React's Context API with useReducer for centralized state management of the shopping cart.

### CartContext.jsx

Key features:
- **useReducer**: Manages complex cart state transitions
- **LocalStorage persistence**: Cart data survives page refreshes
- **Custom hooks**: useCart hook for easy consumption in components

#### Actions
- `ADD_TO_CART`: Adds items to cart or increments quantity
- `REMOVE_FROM_CART`: Removes items from cart
- `UPDATE_QUANTITY`: Updates item quantities
- `CLEAR_CART`: Empties the entire cart

#### Selectors
- `getCartTotal`: Calculates total price of all items
- `getCartCount`: Counts total number of items

## Routing

Implemented with React Router DOM v6+ using the new Routes/Route syntax.

### Routes
- `/` - Home page
- `/menu` - Menu page
- `/offers` - Special offers
- `/about` - About page
- `/contact` - Contact form
- `/cart` - Shopping cart
- `/checkout` - Checkout process
- `/confirmation` - Order confirmation

All routes are wrapped in:
- CartProvider for state management
- BrowserRouter for routing functionality

## Data Flow

### Food Data
Static food data is imported from `src/data/foodItems.js` containing:
- Unique IDs
- Names
- Descriptions
- Prices
- Image URLs (from Unsplash)

### Cart Data Flow
1. User interacts with FoodCard components
2. ADD_TO_CART action dispatched to CartContext
3. Cart state updated with new item or incremented quantity
4. State persisted to LocalStorage
5. Navbar cart indicator updates in real-time
6. Cart page reflects current state

### Order Flow
1. Browse menu items
2. Add items to cart
3. Review cart and proceed to checkout
4. Complete checkout form
5. Receive order confirmation
6. Track order status in real-time

## Styling

### CSS Strategy
- Component-scoped CSS files (e.g., FoodCard.css)
- Utility classes for common styles
- CSS variables for consistent theming

### Color Scheme
- Primary: #ff6b6b (red)
- Secondary: Various shades of gray for text and backgrounds
- Accent: White for contrast

### Typography
- System fonts for optimal performance and readability
- Responsive font sizing
- Clear hierarchy with heading tags

## Responsive Design

### Mobile-First Approach
- Base styles optimized for mobile devices
- Media queries for larger screens
- Flexible grids and flexbox layouts

### Breakpoints
- Small: Up to 576px
- Medium: 577px to 768px
- Large: 769px to 992px
- Extra Large: 993px and above

### Touch-Friendly Features
- Adequate tap targets (minimum 44px)
- Appropriate spacing between interactive elements
- Visual feedback for interactions

## Build and Deployment

### Build Process
Uses Create React App's build system:
- JSX transformation
- Module bundling with webpack
- Asset optimization
- Environment variable injection

### Output
- Static HTML, CSS, and JavaScript files
- Asset manifest for cache busting
- Service worker for offline support

### Deployment Options
- Static hosting (Netlify, Vercel, GitHub Pages)
- Traditional web servers
- CDN distribution

## Testing

### Test Framework
- Jest for unit testing
- React Testing Library for component testing

### Test Coverage
- Component rendering tests
- State management tests
- User interaction simulations

### Running Tests
```bash
npm test
```

## Performance Optimization

### Code Splitting
- Route-based code splitting
- Lazy loading of non-critical components

### Asset Optimization
- Optimized images from Unsplash
- Minified CSS and JavaScript
- Efficient component re-rendering

### Best Practices
- Memoization of expensive calculations
- Proper key props in lists
- Cleanup of effects in useEffect

## Troubleshooting

### Common Issues

#### Application Not Starting
1. Ensure all dependencies are installed:
   ```bash
   npm install
   ```
2. Check for port conflicts (default: 3000)

#### Cart Not Persisting
1. Verify browser supports LocalStorage
2. Check browser console for errors

#### Images Not Loading
1. Confirm internet connectivity
2. Verify Unsplash URLs are accessible

### Debugging Tips
- Use React DevTools browser extension
- Check browser console for errors
- Monitor Network tab for failed requests
- Use React's StrictMode during development

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features
- CSS Grid and Flexbox support required