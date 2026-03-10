'use client'

import { useEffect } from 'react'

export default function ScrollObserver() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.15 }
        )

        const observeNewElements = () => {
            document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => observer.observe(el))
        }

        observeNewElements()

        const mutationObserver = new MutationObserver(() => {
            observeNewElements()
        })

        mutationObserver.observe(document.body, { childList: true, subtree: true })

        return () => {
            observer.disconnect()
            mutationObserver.disconnect()
        }
    }, [])

    return null
}
