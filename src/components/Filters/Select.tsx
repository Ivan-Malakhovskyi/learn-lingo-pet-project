// import { useState } from "react";
// import {
//   DropDownItem,
//   DropDownStyled,
//   SelectContainer,
//   SelectLabelButton,
// } from "./Filters.styled";

// type SelectProps = {
//   label:
//   values:
//   onChange: () => void
// }

// export const Select = ({ label, values, onChange }) => {
//   const [currentValue, setCurrentValue] = useState("");
//   const [open, setOpen] = useState<boolean>(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleValueChange = (value) => {
//     setCurrentValue(value);
//   };

//   const handleChange = (value) => {
//     handleValueChange(value);
//     // call method, if it exists
//     if (onChange) onChange(value);
//     // close, after all tasks are finished
//     handleClose();
//   };
//   return (
//     <>
//       <SelectContainer>
//         <SelectLabelButton onClick={handleOpen}>
//           {currentValue !== "" ? currentValue : label}
//         </SelectLabelButton>
//         <DropDownStyled isVisible={open}>
//           {values.map((value, idx) => (
//             <>
//               <DropDownItem
//                 onClick={() => handleChange(value)}
//                 active={value === currentValue}
//                 key={idx}
//               />
//               {value}
//               <DropDownItem />
//             </>
//           ))}
//         </DropDownStyled>
//       </SelectContainer>
//     </>
//   );
// };
