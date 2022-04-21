import { useEffect, useState } from "react";

export function useClickAway({ boxRef }: any) {

  const [isOut, setIsOut] = useState(false)

  const onClickAway = (e: any) => {
    if (boxRef.current && !boxRef.current.contains(e.target)) {      
      setIsOut(!isOut)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', onClickAway);
    document.addEventListener('touchstart', onClickAway);
    return () => {
      document.removeEventListener('mousedown', onClickAway);
      document.addEventListener('touchstart', onClickAway);
    }
  }, [])

  return { isOut, setIsOut }
}