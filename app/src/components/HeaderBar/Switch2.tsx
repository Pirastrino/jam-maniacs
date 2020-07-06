// import React, { useEffect } from 'react';
// import styled from 'styled-components';
// import useDarkMode from 'use-dark-mode';

// const Slider = styled.span`
//   position: absolute;
//   cursor: pointer;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: #ccc;
//   transition: 0.4s;
//   border-radius: 30px;

//   :before {
//     position: absolute;
//     content: '';
//     height: 26px;
//     width: 26px;
//     left: 4px;
//     bottom: 4px;
//     background-color: white;
//     transition: 0.4s;
//     border-radius: 50%;
//   }
// `;

// const Switch = styled.div`
//   position: relative;
//   display: inline-block;
//   width: 60px;
//   height: 34px;
//   align-self: center;

//   input {
//     opacity: 0;
//     width: 0;
//     height: 0;

//     :checked + ${Slider} {
//       background-color: #2196f3;
//     }

//     :checked + ${Slider}:before {
//       transform: translateX(26px);
//     }
//   }
// `;

// const Label = styled.label`
//   border: 0;
//   clip: rect(0 0 0 0);
//   height: 1px;
//   width: 1px;
//   margin: -1px;
//   overflow: hidden;
//   padding: 0;
//   position: absolute;
// `;

// const ThemeSwitch = () => {
//   const { value, toggle } = useDarkMode();

//   useEffect(() => {
//     console.log(value);
//   });

//   return (
//     <Switch onClick={toggle}>
//       <input id="ThemeSwitch" type="checkbox" />
//       <Slider />
//       <Label htmlFor="ThemeSwitch">Theme switcher</Label>
//     </Switch>
//   );
// };

// export { ThemeSwitch };
