import React from 'react'

export default function Sidebar(props) {
    const toggle = props.boxes.map(box => {
        return (
            <div className="toggle">
                <span>{box.title}</span>
                <label className="toggle-control">
                    <input type="checkbox" checked={props.activeBoxes.includes(box.id)} />
                    <span className="control" onClick={(e) => this.handelToggleBtn(box.id)}></span>
                </label>
            </div>
        )
    })

  return (
    <aside>
        {toggle}
    </aside>
  )
}
