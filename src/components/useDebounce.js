import { useCallback, useRef, useState } from 'react'

const useDebounce = (delay) => {
  const timeoutRef = useRef()

  const debounce = useCallback(
    (callback) => {

      console.log(`timeoutRef.current : `, timeoutRef.current);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        callback()
      }, delay)

      console.log(`timeoutRef.current 2 : `, timeoutRef.current);
    },
    [delay]
  )

  return {
    clear: () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    },
    debounce,
  }
}

export const useBody = (initialValue) => {
  const [body, setBody] = useState(initialValue);

  const onChange = (e) => {
    setBody(e.target.value)
  }

  return {
    body,
    onChange,
  }
}

export default useDebounce
