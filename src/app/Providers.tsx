// app/Providers.tsx
'use client'

import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import { ConfigProvider, theme } from 'antd'
import { ReactNode } from 'react'
import { AntdRegistry } from '@ant-design/nextjs-registry'

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <NextThemesProvider attribute="class" defaultTheme="light" enableSystem={false}>
            <AntdConfigProvider>{children}</AntdConfigProvider>
        </NextThemesProvider>
    )
}

function AntdConfigProvider({ children }: { children: ReactNode }) {
    const { theme: currentTheme } = useTheme()

    const algorithms =
        currentTheme === 'dark'
            ? [theme.darkAlgorithm, theme.compactAlgorithm]
            : [theme.defaultAlgorithm, theme.compactAlgorithm]

    return (
        <ConfigProvider theme={{ algorithm: algorithms }}>
            <AntdRegistry>{children}</AntdRegistry>
        </ConfigProvider>
    )
}
