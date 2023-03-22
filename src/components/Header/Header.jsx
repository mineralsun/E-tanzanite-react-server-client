// import { useState, useEffect } from 'react';
// import axios from 'axios';
// props are passed into our function component!
// as an argument
// Destructuring
// const { textColor, headerText } = props;
// function Header({ textColor, headerText }) {
//     return (
//         <header>
//             <h1 style={{color: textColor}}>{headerTextProp}</h1>
//         </header>
//     );
// }
function Header(props) {
    return (
        <header>
            <h1 style={{color: props.textColor}}>{props.headerTextProp}</h1>
        </header>
    );
}

export default Header;