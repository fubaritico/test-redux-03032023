import React, { ChangeEvent, MouseEvent, FC, useState, useEffect } from 'react'
import {
  FakeMultipleChoice,
  FakeMultipleChoiceOption,
  HiddenMultipleChoice,
  Root,
} from './CategorySelector.styled'

export type CategorySelectorProps = {
  categories: string[]
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const CategorySelector: FC<CategorySelectorProps> = ({
  categories,
  handleChange,
}) => {
  const [choices, setChoices] = useState<string[]>([])

  const handleMultipleChoice = (e: MouseEvent) => {
    e.stopPropagation()
    const value = e.currentTarget.innerHTML
    let temp = [...choices]
    if (temp.includes(value)) {
      const index = temp.indexOf(value)
      temp.splice(index, 1)
      setChoices([...temp])
      return
    }

    temp = [...temp, value]

    setChoices([...temp])
  }

  useEffect(() => {
    const select = document.getElementById('categories') as HTMLSelectElement
    const { options } = select
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (choices.includes(options[i].value)) {
        options[i].setAttribute('selected', 'selected')
      } else {
        options[i].removeAttribute('selected')
      }
    }
    select.dispatchEvent(new Event('change', { bubbles: true }))
  }, [choices])

  return (
    <Root>
      <FakeMultipleChoice>
        {categories.map((category) => (
          <FakeMultipleChoiceOption
            key={`${category}-fake`}
            onMouseUp={handleMultipleChoice}
            selected={choices.includes(category)}
          >
            {category}
          </FakeMultipleChoiceOption>
        ))}
      </FakeMultipleChoice>
      <HiddenMultipleChoice onChange={handleChange} multiple id="categories">
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </HiddenMultipleChoice>
    </Root>
  )
}

export default CategorySelector
