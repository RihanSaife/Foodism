# Foodism - Developer Guide

## Table of Contents
1. [Project Overview](#project-overview)
2. [Development Environment Setup](#development-environment-setup)
3. [Code Structure and Conventions](#code-structure-and-conventions)
4. [Component Development](#component-development)
5. [State Management](#state-management)
6. [Adding New Features](#adding-new-features)
7. [Testing](#testing)
8. [Deployment](#deployment)
9. [Contributing Guidelines](#contributing-guidelines)

## Project Overview

Foodism is a React-based food delivery application built with modern web technologies. The application follows a component-based architecture with centralized state management through React Context API.

### Key Technologies
- React 19+
- React Router v7+
- CSS Modules
- LocalStorage API
- Create React App

## Development Environment Setup

### Prerequisites
- Node.js v14+
- npm v6+
- Git
- Code editor (VS Code recommended)

### Initial Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd food-delivery-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

### Project Scripts
- `npm start`: Start development server
- `npm test`: Run test suite
- `npm run build`: Create production build
- `npm run eject`: Eject from Create React App (irreversible)

## Code Structure and Conventions

### File Organization
```
src/
├── components/     # Reusable UI components
├── pages/          # Page-level components
├── context/        # State management
├── data/           # Static data
├── assets/         # Images and static assets
├── App.js          # Main application component
└── index.js        # Entry point
```

### Naming Conventions
- Component files: PascalCase.jsx (e.g., FoodCard.jsx)
- CSS files: PascalCase.css (e.g., FoodCard.css)
- Data files: camelCase.js (e.g., foodItems.js)
- Variables: camelCase
- Components: PascalCase
- Constants: UPPER_SNAKE_CASE

### Code Style
- Use functional components with hooks
- Prefer arrow functions for component definitions
- Destructure props in function parameters
- Use meaningful variable names
- Comment complex logic
- Keep components small and focused

## Component Development

### Creating a New Component

1. Create a new file in the appropriate directory:
   ```
   src/components/NewComponent.jsx
   ```

2. Implement the component:
   ```jsx
   import React from 'react';
   import './NewComponent.css';
   
   const NewComponent = ({ prop1, prop2 }) => {
     return (
       <div className="new-component">
         {/* Component content */}
       </div>
     );
   };
   
   export default NewComponent;
   ```

3. Create a corresponding CSS file:
   ```
   src/components/NewComponent.css
   ```

4. Import and use the component:
   ```jsx
   import NewComponent from './components/NewComponent';
   
   <NewComponent prop1="value1" prop2="value2" />
   ```

### Component Best Practices
- Keep components focused on a single responsibility
- Use props for data flow into components
- Use callbacks for communication from child to parent
- Implement proper error boundaries for critical components
- Use React.memo() for performance optimization when needed
- Validate props with PropTypes or TypeScript

## State Management

### Context API Usage

The application uses React's Context API for global state management, specifically for the shopping cart.

#### Accessing Cart Context
```jsx
import { useCart } from './context/CartContext';

const MyComponent = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  
  // Use cart data and functions
};
```

#### Adding Actions to Cart Reducer
1. Define the action type in the reducer:
   ```javascript
   case 'NEW_ACTION':
     return {
       ...state,
       // New state
     };
   ```

2. Create a corresponding function in the provider:
   ```javascript
   const newAction = (payload) => {
     dispatch({ type: 'NEW_ACTION', payload });
   };
   ```

3. Export the function in the context value:
   ```javascript
   value={{
     // ... other values
     newAction
   }}
   ```

## Adding New Features

### Adding a New Food Item
1. Edit `src/data/foodItems.js`
2. Add a new object to the array:
   ```javascript
   {
     id: 13,
     name: "New Food Item",
     description: "Description of the new item",
     price: 9.99,
     image: "https://images.unsplash.com/..."
   }
   ```

### Adding a New Page
1. Create a new component in `src/pages/`
2. Add the route in `src/App.js`:
   ```jsx
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add a navigation link in `src/components/Navbar.jsx`

### Adding a New Route Parameter
1. Update the route in `App.js`:
   ```jsx
   <Route path="/items/:id" element={<ItemDetail />} />
   ```
2. Access the parameter in the component:
   ```jsx
   import { useParams } from 'react-router-dom';
   
   const ItemDetail = () => {
     const { id } = useParams();
     // Use the id parameter
   };
   ```

## Testing

### Test Structure
Tests are located alongside the components they test with the `.test.js` extension.

### Running Tests
```bash
npm test
```

### Writing Tests
```jsx
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders component correctly', () => {
  render(<MyComponent />);
  const element = screen.getByText(/expected text/i);
  expect(element).toBeInTheDocument();
});
```

### Test Coverage Areas
- Component rendering
- User interactions
- State changes
- Edge cases
- Error conditions

## Deployment

### Building for Production
```bash
npm run build
```

This creates an optimized build in the `build/` directory.

### Deployment Options
1. **Static Hosting** (Netlify, Vercel, GitHub Pages)
2. **Traditional Web Server** (Apache, Nginx)
3. **Cloud Platforms** (AWS, Azure, Google Cloud)

### Environment Variables
Create a `.env` file in the project root:
```
REACT_APP_API_URL=https://api.example.com
REACT_APP_VERSION=1.0.0
```

Access in components:
```javascript
const apiUrl = process.env.REACT_APP_API_URL;
```

## Contributing Guidelines

### Git Workflow
1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Make changes and commit:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your fork:
   ```bash
   git push origin feature/new-feature
   ```
5. Create a pull request

### Commit Message Guidelines
- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 72 characters or less
- Reference issues and pull requests liberally

### Code Review Process
1. All pull requests require review
2. Automated tests must pass
3. Code must follow established conventions
4. Changes should be well-documented
5. Performance impact should be considered

### Reporting Issues
1. Use the issue tracker
2. Include steps to reproduce
3. Provide environment details
4. Include screenshots if applicable
5. Tag with appropriate labels

### Pull Request Requirements
- Description of changes
- Related issues referenced
- Tests included for new functionality
- Documentation updated
- Code follows style guidelines