# Getting Started with Create React App

**Approach to Completing the Challenge Using React**
**1. Setting Up the React App**
Use create-react-app to initialize the project.
Install necessary libraries:
-React Router (react-router-dom) for routing between pages.
-Context API or Redux for state management (to manage cart and booking details).
-Axios for making API requests if the data is fetched from a backend.
-React Hook Form for handling forms during the checkout process.
-Styled-components or CSS modules for styling to ensure scoped styles and responsive design.

**2. Property Listings Page**
Components:
-PropertyCard: Displays each property with its image, title, description, price, and a "Book Now" button.
-Filters: Contains filter options (location, price range, number of bedrooms, amenities).
-PropertyList: Fetches and displays the list of properties and manages filtering logic.
-Cart: Displays the properties added for booking, with options to increase, decrease, or remove properties from the cart.
Functionality:
-Fetch the list of properties from a local JSON file or API using useEffect and display them in a grid format.
-Implement filtering by location, price range, bedrooms, and amenities using controlled inputs.
-"Book Now" button will add the property to the cart (Booking system).

**3. Booking Management**
-Cart: Displays the properties added for booking, with options to increase, decrease, or remove properties from the cart.
-CheckoutForm: Captures user details like name, email, payment information, and booking details.
-CheckoutSummary: Shows a summary of the booking, including total cost and booking details before submission.
Functionality:
-Use React Hook Form for form validation and state management in the checkout process.
-Submit booking details and payment information to the backend for processing.
-Display the summary of the booking before final submission.

**4. Responsive Design**
-Mobile First: Start with mobile design and expand to larger screen sizes.
-CSS Grid & Flexbox: Use these layout techniques to create a flexible grid system for property listings.
-Media Queries: Implement media queries to ensure elements (e.g., the property grid, cart, and checkout form) reflow properly on different screen sizes.
-Responsive Nav Bar: Implement a responsive navigation bar that collapses into a hamburger menu on small screens.

Website Link: https://redwolf1007.github.io/
