import React from "react"
const DemoList = (props)=>{
    const {items} = props

    const sortList = items.sort((a,b)=> a-b)

    return(
        <div>
            <ul>
                {sortList.map((item)=>{
                   return <li key={item}>{item}</li>
                })}
            </ul>
        </div>
    )
}
export default React.memo(DemoList)