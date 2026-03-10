'use client'

import { useState } from 'react'

export default function VideoPlayer() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)

    return (
        <div
            className="mission-video-container reveal"
            style={{ '--delay': '0.1s' }}
            onClick={() => setIsVideoPlaying(true)}
        >
            {!isVideoPlaying ? (
                <>
                    <img
                        src="https://img.youtube.com/vi/Y91Bf2lBcM8/maxresdefault.jpg"
                        alt="UniBand Solution Video Thumbnail"
                        className="video-thumbnail"
                    />
                    <div className="play-button-overlay">
                        <div className="play-button">
                            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                    </div>
                </>
            ) : (
                <iframe
                    className="mission-video"
                    src="https://www.youtube.com/embed/Y91Bf2lBcM8?autoplay=1&controls=1&showinfo=0&rel=0&modestbranding=1"
                    title="UniBand YouTube Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            )}
            <div className="video-overlay-glow" />
        </div>
    )
}
