"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("87681e7e-2d6e-4fbb-9ee9-9334eef5a53e")
  }, [])

  return null
}
