import React from 'react'

type SliderProps = {
  label?: any
  value?: number
  min?: number
  max?: number
  onChange: (value: number) => void
  onClick: () => void
}

export default function Slider(props: SliderProps) {
  const { value, onChange, onClick, label, min, max } = props

  const step = ((max || 100) - (min || 0)) / 100

  return (
    <div className="editor-brush-slider">
      <span>{label}</span>
      <input
        type="range"
        step={step}
<!--         min={min} -->
        min=1
//         max={max}
        max=50
        value={value}
        onChange={ev => {
          ev.preventDefault()
          ev.stopPropagation()
          onChange(parseInt(ev.currentTarget.value, 10))
        }}
        onClick={onClick}
      />
    </div>
  )
}
