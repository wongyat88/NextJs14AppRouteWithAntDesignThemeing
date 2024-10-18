// app/(component)/Navbar/MyNavBar.tsx
'use client'

import { Button } from 'antd'
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const MyNavBar = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    // Avoid hydration mismatch by not rendering until mounted
    if (!mounted) {
        return null
    }

    return (
        <div>
            <li>Home</li>
            <li>
                <Button onClick={toggleTheme}>
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
                </Button>
            </li>
        </div>
    )
}

export default MyNavBar
