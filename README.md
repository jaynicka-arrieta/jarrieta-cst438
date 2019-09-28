# ClassApp

## Sprint 1

Changes made to the app include:

- Adding Home, Products, and Sign In components
- A navigation bar added to the app component
  - Navigation bar provides routes to all other components.
- An Http service has been created
  - Http service currently acts as a products service; will be renamed appropriately in sprint 2
  - getPlushies() function was added, and a hardcoded list of products is returned.
  - An interface has been added to make managing products in the future easier.
  - An addPlushies() function will be added later.
- Sign in component has basic input areas
  - Sign in button links to products page when clicked regardless if values have been inputted into username and password fields
    - Will eventually add alerts for successful login and login failures.
    - Successful login will also link to products while failure does not.
- Home component has welcome text and picture.
- Products component shows a list of all hardcoded products with corresponding price and image.

## Sprint 2

Changes made to the app include:

- Adding Details, Cart, Checkout, and Finalize components.
- From Products page, user can click on a product and be brought to the product details page.
- User can add product to their cart.
- From cart page, user can adjust quantity, however actual values do not change (will implement later).
  - Remove hyperlink will be turned into a button. Currently just reroutes to cart (does nothing).
  - Checkout link brings user to Checkout page.
- User can fill out form and press "Complete Order" to be brought to Confirmation page.
- User can click "Return Home" to be brought back to the home page.
