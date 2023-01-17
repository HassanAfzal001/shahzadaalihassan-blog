// import  { useState } from 'react';
// import BurgerMenu from 'react-burger-menu';

// // const MyDrawer = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <div>
// //       <button onClick={() => setIsOpen(!isOpen)}>Open Drawer</button>
// //       <BurgerMenu isOpen={isOpen}>
// //         <a href="/">Home</a>
// //         <a href="/about">About</a>
// //         <a href="/contact">Contact</a>
// //       </BurgerMenu>
// //     </div>
// //   );
// // }

// // export default MyDrawer;
// import React from 'react';

// const withClient = (WrappedComponent) => {
//   WrappedComponent.getInitialProps = async (context) => {
//     return {};
//   }

//   return WrappedComponent;
// }

// const MyDrawer = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>Toggle Drawer</button>
//       {isOpen && (
//         <div className="drawer">
//           <button onClick={() => setIsOpen(false)}>Close</button>
//           <p>This is the content of the drawer</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default withClient(MyDrawer);

import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    
    return (
        <nav>
            <h1 className="heading1"> Course_Spot </h1>
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/services">
                        Services
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link href="/courses">
                        Courses
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
