import { useRef, useEffect } from "react";


const useClickOutside = (ref, callback) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target))
        callback()
    }
    document.addEventListener("mouseup", handleClickOutside)
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    }
  }, [ref])
}

const clickOutside = (props) => {
    const wrapperRef = useRef(null)
    useClickOutside(wrapperRef, props.callback)
    return <div ref={wrapperRef}>{props.children}</div>
}


export { 
  clickOutside
}