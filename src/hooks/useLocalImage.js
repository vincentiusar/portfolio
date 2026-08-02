import { useEffect, useState } from 'react'
import { fileToResizedDataUrl } from '../lib/image'

// Persists a single uploaded image (as a resized JPEG data URL) to
// localStorage under `key`, so it survives page reloads on this device.
//
// IMPORTANT LIMITATION: this is a *local preview* tool, not a real upload.
// Nothing leaves the browser, and other visitors to a deployed build will
// NOT see the photo — localStorage is private per-browser. To make a photo
// permanent for real visitors, save the file into /public and reference its
// path directly in src/data/profile.js instead.
export function useLocalImage(key) {
  const [image, setImage] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(key)
      if (stored) setImage(stored)
    } catch {
      // localStorage unavailable (e.g. private browsing) — fail silently,
      // upload will just not persist across reloads.
    }
  }, [key])

  async function upload(file) {
    setError(null)
    if (!file || !file.type.startsWith('image/')) {
      setError('Please choose an image file.')
      return
    }
    try {
      const dataUrl = await fileToResizedDataUrl(file)
      setImage(dataUrl)
      window.localStorage.setItem(key, dataUrl)
    } catch {
      setError('Could not process that image — try a different file.')
    }
  }

  function remove() {
    setImage(null)
    try {
      window.localStorage.removeItem(key)
    } catch {
      // ignore
    }
  }

  return { image, upload, remove, error }
}
