import React from 'react'
import { categories } from '../utils/content'
const Category = ({ selectCategory, setSelectCategory }) => {
  return (
    <div>
      {categories.map((category) => (
        <button
          style={{
            backgroundColor:
              category.name === selectCategory
                ? 'rgb(97, 92, 92)'
                : 'transparent',
          }}
          key={category.name}
          onClick={() => setSelectCategory(category.name)}
        >
          <span className="catiIcon">{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  )
}
export default Category
