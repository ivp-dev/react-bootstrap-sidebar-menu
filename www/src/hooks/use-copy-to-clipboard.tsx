import { useCallback, useEffect, useState } from "react"

const useCopyToClipboard = (text: string, notifyTimeout = 2500): [string, () => void] => {
  const [copyStatus, setCopyStatus] = useState('inactive')
  
  const copy = useCallback(() => {
    navigator.clipboard.writeText(text).then(
      () => setCopyStatus('copied'),
      () => setCopyStatus('failed'),
    )
  }, [text])

  useEffect(() => {
    if (copyStatus === 'inactive') {
      return
    }

    const timeoutId = setTimeout(() => setCopyStatus('inactive'), notifyTimeout)

    return () => clearTimeout(timeoutId);
  }, [copyStatus, notifyTimeout])

  return [copyStatus, copy]
}

export default useCopyToClipboard;