import { useState } from "react";

export function AddCategory({ onNewCategory }) {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length < 1) return;
    // setCategories((categories) => {
    //   const categoryExist = categories.find((c) => c === inputValue);
    //   if (categoryExist === undefined) return [inputValue, ...categories];
    //   const newArray = categories.filter((c) => c !== inputValue);
    //   console.log(inputValue);
    //   return [inputValue, ...newArray];
    // });
    
    setInputValue("");
    onNewCategory(inputValue)
  };
  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Search Gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}
