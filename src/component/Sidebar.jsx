import React from 'react';
import Toggle from "./toggle"

export default function Sidebar(props) {
    const toggle = props.boxes.map(box => {
        return <Toggle box={box} activeBoxes={props.activeBoxes} handeleToggle={props.handeleToggle} />
    })

  return (
    <aside>
        {toggle}
    </aside>
  )
}
