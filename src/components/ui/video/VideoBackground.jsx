import './VideoBackground.css';

const VideoBackground = ({ posterUrl, videoUrl }) => {
    const posterError = `${posterUrl}`;
    const src = `${videoUrl}`;

    return (
        <div className="video-background">
            <video 
                autoPlay
                muted
                loop
                playsInline
                poster={posterError}
                onCanPlay={(e) => (e.currentTarget.muted = true)}
            >
                <source src={src} type="video/mp4"/>
            </video>
        </div>
    );
};

export default VideoBackground;