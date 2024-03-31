# WikiTainment - WikiTainment is the wikipedia of entertainment. 

## Description
Contest Hub is a MERN (MongoDB, Express.js, React.js, Node.js) stack project designed to create and manage contents like movies, web series etc. It provides a platform for administrators and users to efficiently manage and enjoy content. Its provides all movies, web series etc content details just in few moments and this is 100% original and true data collect from various source.

## Source Code:
## [ Client Side Code](https://github.com/sahosskhan/wiki-tainment-client)

## [ Server Side Code](https://github.com/sahosskhan/wiki-tainment-server)

## Preview: 
## [ Client Side Preview](https://wiki-tainment.web.app)

## [ Server Side Preview](https://wiki-tainment-server.vercel.app/)

 # Admin Dashboard:
## Email: sahosskhan@gmail.com
## Password: Sahoss@123

# User Dashboard:
## Email: sangramkhan@gmail.com
## Password: Sangram@123




## Features
- Two dashboard controls panel role admin & user.
- In home user interface there are 15 categories for content.
- A beautiful & responsive dashboard controls panel
- We give top priority to our service like a dark theme for the user who needs to access the service in dark mode, also we are making better UI for users who visit our site & enjoy our service.
- Users enjoy content then need to log in via Google or create a new account and log in manually.
- We are responsive on mobile and tablet Devices.




### Admin Dashboard
- Admin can manage content.
- Admin can add content.
- Admin can edit content within 24 hours of after content add. After 24 hours of content add it will automatic disable.
- Admin can delete content anytime.
- Admin can not add content to watchlist. 



### User Dashboard
- Users can see their profiles.
- Users can add content to watchlist.
- User can delete content from watchlist.
- User can add same content to watchlist two times.
- User must have registered or logged in for adding content to watchlist.



### Database Operations
- MongoDB CRUD operations for efficient data management.

### Authentication
- Firebase  for secure user authentication.



## Technology Used

### Frontend
- **React.js**: A JavaScript library for building user interfaces.
- **React Router DOM**: Declarative routing for React applications.
- **Tailwind CSS**: A utility-first CSS framework packed with classes.
- **Daisy UI**: The most popular component library for Tailwind CSS.
- **React-Spinners**: A collection of loading spinner components for react.
- **Sweetalert2**: A beautiful, responsive, highly customizable and accessible (WAI-ARIA) replacement for JavaScript's popup boxes. Zero dependencies.
- **React-helmet-async**: A document head manager for React. 

### Backend
- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express.js**: Fast, un opinionated, minimalist web framework for Node.js.
- **MongoDB**: A NoSQL database for storing application data.
- **Mongoose**: An object modeling tool for MongoDB and Node.js.
- **Nodemon**: Nodemon is a utility depended on  projects, that will monitor for any changes in your source and automatically restart your server.
- **CORS**: Cross-origin resource sharing (CORS) is a mechanism for integrating applications. CORS defines a way for client web applications that are loaded in one domain to interact with resources in a different domain.

### Authentication
- **Firebase Authentication**: A service that provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.


### Other Tools
- **dotenv**: A zero-dependency module that loads environment variables from a `.env` file into `process.env`.
- **npm**: A package manager for Node.js packages.

## Installation
1. Clone the repository:
    ```
    git clone https://github.com/sahosskhan/wiki-tainment-client.git
    ```
2. Navigate to the project directory:
    ```
    cd wiki-tainment-client
    ```
3. Install dependencies:
    ```
    npm install
    ```
4. Install other packages & dependencies:(Clients)
    ```
    npm install react-router-dom
    npm install react-helmet-async
    npm install react-spinners
    npm install sweetalert2
    npm install firebase
    ```
5. Start the client localhost:
    ```
    npm run build
    npm run dev
    ```
6. Install other packages & dependencies:(Server)

    ```
    npm install dotenv
    npm install express
    npm install mongodb
    npm install cors
    npm install nodemon
    ```
7. Start the server localhost:
    ```
    nodemon index.js
    ```

8. Client side deployment:
    ```
    npm install firebase
    firebase login
    firebase init
    npm run build
    firebase deploy
    ```

9. Set up vercel for deployment:

- Create a `vercel.json` file in the root directory.
- Define the following variables:

    ```
{
    "version": 2,
    "builds": [
      {
        "src": "./index.js",
        "use": "@vercel/node"
      }
    ],
    "routes": [
      {
        "src": "/(.*)",
        "dest": "/",
        "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
      }
    ]
  }
    ```
10. Server side deployment

    ```
    vercel
    vercel --prod
    ```


11. Set up environment variables (server):
    - Create a `.env` file in the root directory.
    - Define the following variables:
        ```
        PORT=3000
        MONGO_URI=your_mongodb_connection_string
        FIREBASE_API_KEY=your_firebase_api_key
        JWT_SECRET=your_jwt_secret_key
        STRIPE_SECRET_KEY=your_stripe_secret_key
        ```

11. Set up environment variables (client):
    - Create a `env.local` file in the root directory.
    - Define the following variables:
        ```
         VITE_apiKey= your_vite_api_key
  VITE_authDomain= your_vite_auth_domain
  VITE_projectId= your_vite_project_id
  VITE_storageBucket= your_vite_storageBucket
  VITE_messagingSenderId= your_vite_messagingSenderId 
  VITE_appId= your_vite_appId
        ```

13. Navigate to `http://localhost:5173`(Client)  `http://localhost:5000`(Server) in your browser to view the application.

## Contributors
- [sahosskhan](https://github.com/sahosskhan)

## License
This project is licensed under the [MIT License](https://github.com/sahosskhan).

## Acknowledgements
- This project was inspired by the need for a comprehensive content management & info streaming platform Like IMDb. 
- Special thanks to the creators of MongoDB, Express.js, React.js, and Node.js for their incredible frameworks.
- Thanks to Firebase for providing secure authentication services.
- Thanks to Vite for react project templates create and integration. 


## Support
For any inquiries or issues, please contact [sahosskhan359@email.com](mailto:sahosskhan359@email.com).







