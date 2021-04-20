import React from 'react'
import {Layer, Rect, Stage} from "react-konva";

function TopPage() {
  return (
    <Stage style={{ backgroundColor: '#eee' }} width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect draggable width={340} height={340} x={100} y={100} fill={'#737373'} shadowBlur={2} cornerRadius={8}/>
      </Layer>
    </Stage>
  )
}

export default TopPage
