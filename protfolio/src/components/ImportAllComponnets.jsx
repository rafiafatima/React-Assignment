import React, { useEffect } from 'react'
import HomePage from './HomePage/HomePage'

export default function ImportAllComponnets() {
    useEffect(() => {
        document.title = "Protflio Website Design";
    }, [])

    return (
        <div>
            <HomePage />
        </div>
    )
}
