import React, { memo } from "react"

const deco = () => {
  return (
    <>
      <div className="deco1"></div>
      <div className="deco2"></div>
      <div className="deco3"></div>
      <div className="deco4"></div>
    </>
  )
}

export default memo(deco)
