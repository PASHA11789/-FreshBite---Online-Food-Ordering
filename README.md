# FreshBite - Online Food Ordering Simulation

FreshBite is a responsive, highly polished online food ordering web application designed with a premium, warm culinary theme. The platform enables users to browse local restaurants, customize and filter menus, view product detailed reviews, manage their floating cart, simulated check out, and track order histories under a fully simulated user authentication profile.

The initial layout, typography hierarchy, and aesthetic themes were based on the original design work by **Stitch**, utilizing warm tones, modern geometric curves, and premium layouts.

---

## 🎨 Design System (Inspired by Stitch)

FreshBite adopts a rich, premium color palette and clean type scale to deliver a warm, appetizing user interface:
- **Primary Color**: `#FF6B35` (Warm Orange Accent)
- **Secondary Color**: `#2D1B12` (Sleek Dark Slate Chocolate)
- **Neutral Color**: `#87736C` (Muted Taupe / Earthy Brown)
- **Background Cream**: `#FFF8F0` (Soft Off-White Cream)
- **Typography**: 
  - Headlines: *Plus Jakarta Sans*
  - Body Copy: *Be Vietnam Pro*

---

## 🚀 Key Features

1. **Simulated Authentication System**:
   - Simulated credentials loaded from local mock databases.
   - Profile dashboards for logged-in users with logout capabilities.
2. **Dynamic Restaurant & Cuisine Explorer**:
   - Filter restaurants by categories, delivery ratings, and culinary genres.
   - Full food item search with dietary classification tags (e.g., Vegetarian, Vegan, Spicy, Gluten-Free).
3. **Product Detail Modal**:
   - Lists raw ingredients, detailed nutritional specifications (Calories, Proteins, Fats, Carbs), and interactive customer review scoreboards.
4. **Persistent Floating Cart**:
   - An overlay cart drawer storing selected products within standard browser local storage (`localStorage`).
   - Handles item quantity adjustments, clear-cart events, and dynamic calculations.
5. **Interactive Checkout & Promotion Engine**:
   - Validates coupon promo codes dynamically (e.g., discounts).
   - Dropdown selections for delivery speed modes (Standard, Express, Scheduled).
   - Checkout form validation paired with a simulated secure payment gateway processing loader.
6. **Order History & Active Progress Bar**:
   - Tracks simulated orders in the profile dashboard.
   - Employs a time-based status progress tracker (Order Placed ➔ Preparing ➔ Out for Delivery ➔ Delivered) based on time elapsed since checkout.

---

## 🛠️ Tech Stack

- **Core Framework**: React with Vite
- **Styling & Theme**: Tailwind CSS v4 + custom variables
- **Navigation**: React Router DOM (v6)
- **State Management**: React Context API (`CartContext`, `AuthContext`)
- **Data Store**: Custom Mock JSON datasets (`mockRestaurants.json`, `mockUsers.json`)
- **Persistence**: Browser `localStorage` API

---

## 💻 Quick Start & Installation

To run the application locally on your computer:

1. **Navigate to the app subdirectory**:
   ```bash
   cd app
   ```

2. **Install node packages and dependencies**:
   ```bash
   npm install
   ```

3. **Start the Vite development web server**:
   ```bash
   npm run dev
   ```

4. Open the displayed local host address (e.g., `http://localhost:5174/`) in your browser.