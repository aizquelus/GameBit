import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApZpi2OCw9d_1-ibQvZGaan8MMIXsCaXc",
  authDomain: "gamebit-ecommerce.firebaseapp.com",
  projectId: "gamebit-ecommerce",
  storageBucket: "gamebit-ecommerce.appspot.com",
  messagingSenderId: "415568037074",
  appId: "1:415568037074:web:90f17f2e718e8d08f3d90b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>

)
