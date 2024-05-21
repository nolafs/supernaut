import {useRef} from 'react'

export function useIsFirstRender(): boolean {
  const isFirst = useRef<boolean>(true)

  if (isFirst.current) {
    isFirst.current = false
    return true
  }

  return isFirst.current;
}

export default useIsFirstRender;