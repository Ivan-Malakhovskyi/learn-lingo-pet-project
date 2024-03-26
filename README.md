# Learn Lingo

## Installation

-- **install dependencies** - `npm install` or `yarn`

-- **dev** - `npm run dev` or `yarn dev`

-- **build** - `npm run build` or ``yarn build

## Introductions and Usage

This application is designed for a company that offers online language learning services. The app consists of three main pages: `"Home"`, `"Teachers"` and `"Favorites."`

1.`Home Page`: Learn about the company's advantages and navigate to the "Teachers" page.

2. `Teachers Page`: Choose teachers based on your preferences, adding them to your favorites. Get more information and book a trial lesson

3. `Favorites Page`: If you are logged in, review the teachers you liked and added to your favorites

### Key Features

#### Home Page

-- **View the company's advantages and start working with the app. Link to redirect to the "Teachers" page.**

#### Teachers Page

-- **Browse a list of teachers with the ability to filter by language, students' proficiency level, and hourly rate.**

-- **Implementation of "Load more" to dynamically load additional teacher cards.**

-- **Add teachers to the user's favorites list.**

-- **View detailed information about a teacher and reviews from students. Booking trial lessons through a modal window.**

#### Favorites Page

-- **A private page for authorized users.**

-- **View the list of selected teachers.**

### Technical Details

#### Authorization

-- **Use Firebase Realtime Database for storing and retrieving teacher data.**

-- **Introduce user authentication, registration, login, and logout through Firebase.**

#### Forms

-- **Utilize Formik and Yup for registration and authentication forms.**

-- **Minimal validation of all mandatory fields in the forms.**

#### `"Favorites" Functionality`

-- **Store selected teachers using redux-persist.**

-- **Display the state of selected teachers after page refresh.**

#### `Bonus*: Routing and Filtering`

-- **Implement React Router for application routing.**

-- **Add functionality for filtering by language, students' proficiency level, and pricing $.**
