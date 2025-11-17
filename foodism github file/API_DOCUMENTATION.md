# Foodism - API Documentation

## Table of Contents
1. [Data Structures](#data-structures)
2. [Context API](#context-api)
3. [Component Props](#component-props)
4. [Routing Parameters](#routing-parameters)

## Data Structures

### FoodItem Object

Represents a single food item available for purchase.

```javascript
{
  id: Number,           // Unique identifier
  name: String,         // Name of the food item
  description: String,  // Detailed description
  price: Number,        // Price in Rupees (₹)
  image: String         // URL to the food image
}
```

**Example:**
```javascript
{
  id: 1,
  name: "Margherita Pizza",
  description: "Classic pizza with tomato sauce, mozzarella, and basil",
  price: 12.99,
  image: "https://images.unsplash.com/photo-..."
}
```

### CartItem Object

Represents a food item in the shopping cart with quantity information.

```javascript
{
  id: Number,           // Unique identifier (matches FoodItem id)
  name: String,         // Name of the food item
  description: String,  // Detailed description
  price: Number,        // Price in Rupees (₹)
  image: String,        // URL to the food image
  quantity: Number      // Quantity of this item in cart
}
```

**Example:**
```javascript
{
  id: 1,
  name: "Margherita Pizza",
  description: "Classic pizza with tomato sauce, mozzarella, and basil",
  price: 12.99,
  image: "https://images.unsplash.com/photo-...",
  quantity: 2
}
```

## Context API

### CartContext

Global state management for the shopping cart.

#### Provider
```jsx
<CartProvider>
  {/* Child components */}
</CartProvider>
```

#### Consumer Hook
```javascript
const cartContext = useCart();
```

#### Context Value

| Property | Type | Description |
|---------|------|-------------|
| cart | Array of CartItem | Current items in the shopping cart |
| addToCart | Function | Adds an item to the cart |
| removeFromCart | Function | Removes an item from the cart by ID |
| updateQuantity | Function | Updates the quantity of an item by ID |
| clearCart | Function | Empties the entire cart |
| getCartTotal | Function | Returns the total price of all items |
| getCartCount | Function | Returns the total number of items |

##### Function Signatures

**addToCart(item)**
- Parameters: `item` (FoodItem) - The item to add to the cart
- Returns: void

**removeFromCart(id)**
- Parameters: `id` (Number) - The ID of the item to remove
- Returns: void

**updateQuantity(id, quantity)**
- Parameters: 
  - `id` (Number) - The ID of the item to update
  - `quantity` (Number) - The new quantity (must be > 0)
- Returns: void

**clearCart()**
- Parameters: None
- Returns: void

**getCartTotal()**
- Parameters: None
- Returns: Number - Total price of all items in cart

**getCartCount()**
- Parameters: None
- Returns: Number - Total count of all items in cart

## Component Props

### FoodCard Component

```jsx
<FoodCard item={foodItem} onAddToCart={handleAddToCart} />
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| item | FoodItem | Yes | The food item to display |
| onAddToCart | Function | Yes | Callback function when "Add" button is clicked |

### CartItem Component

```jsx
<CartItem item={cartItem} onUpdateQuantity={handleUpdateQuantity} onRemove={handleRemove} />
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| item | CartItem | Yes | The cart item to display |
| onUpdateQuantity | Function | Yes | Callback function when quantity changes |
| onRemove | Function | Yes | Callback function when remove button is clicked |

### Page Components

#### Home Page
No props required.

#### Menu Page
No props required.

#### Cart Page
No props required.

#### Checkout Page
No props required.

#### Confirmation Page
No props required.

#### Offers Page
No props required.

#### About Page
No props required.

#### Contact Page
No props required.

## Routing Parameters

All routes are defined statically with no dynamic parameters.

### Available Routes

| Path | Component | Description |
|------|-----------|-------------|
| / | Home | Landing page |
| /menu | Menu | Food menu listing |
| /offers | Offers | Special promotions |
| /about | About | Company information |
| /contact | Contact | Contact form |
| /cart | Cart | Shopping cart |
| /checkout | Checkout | Order processing |
| /confirmation | Confirmation | Order confirmation |

### Navigation

Navigation is handled through:
1. Navbar links
2. Programmatic navigation using useNavigate hook
3. Direct URL entry

## LocalStorage Keys

| Key | Value Type | Description |
|-----|------------|-------------|
| cart | JSON string | Serialized cart state including items and quantities |

The cart data is automatically synchronized with LocalStorage on every cart state change.