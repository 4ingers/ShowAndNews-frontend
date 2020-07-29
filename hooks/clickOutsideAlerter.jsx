import { useRef, useEffect } from "react";


function useOutsideAlerter(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target))
        callback();
    }
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref]);
}

function clickOutsideAlerter(props) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, props.callback);
    return <div ref={wrapperRef}>{props.children}</div>;
}


export { clickOutsideAlerter }




// export function useOuterClick(callback) {
//   const innerRef = useRef();
//   const callbackRef = useRef();

//   // set current callback in ref, before second useEffect uses it
//   useEffect(() => { // useEffect wrapper to be safe for concurrent mode
//     callbackRef.current = callback;
//   });

//   useEffect(() => {
//     document.addEventListener("click", handleClick);
//     return () => document.removeEventListener("click", handleClick);

//     // read most recent callback and innerRef dom node from refs
//     function handleClick(e) {
//       if (
//         innerRef.current && 
//         callbackRef.current &&
//         !innerRef.current.contains(e.target)
//       ) {
//         callbackRef.current(e);
//       }
//     }
//   }, []); // no need for callback + innerRef dep
  
//   return innerRef; // return ref; client can omit `useRef`
// }

// export default function useComponentVisible(initialIsVisible) {
//   const [isComponentVisible, setIsComponentVisible] = useState(
//     initialIsVisible
//   );
//   const ref = useRef(null);

//   const handleClickOutside = event => {
//     if (ref.current && !ref.current.contains(event.target)) {
//       setIsComponentVisible(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("click", handleClickOutside, true);
//     return () => {
//       document.removeEventListener("click", handleClickOutside, true);
//     };
//   });

//   return { ref, isComponentVisible, setIsComponentVisible };
// }