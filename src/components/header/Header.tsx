import React from 'react'
import { BodyHeader } from './BodyHeader'
import { MenuBar } from './MenuBar'

export const Header = () => {
    return (
        <div className="py-4">
            <MenuBar />
            <BodyHeader />
        </div>
    )
}
