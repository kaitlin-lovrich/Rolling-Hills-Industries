export function Video() {
    return (
        <video
            width="100%"
            height="100%"
            controls
            preload="none"
            className="rounded-xl"
            poster="/rolling-hills-video-poster.png"
        >
            <source
                src="rolling-hills-industry-gbdjh8zma-081501.mp4"
                type="video/mp4"
            />
            <p>
                Your browser doesn&apos;t support HTML video. Here is a
                <a
                    href="rolling-hills-industry-gbdjh8zma-081501.mp4"
                    download="rolling-hills-industry-gbdjh8zma-081501.mp4"
                >
                    link to the video
                </a>{" "}
                instead.
            </p>
        </video>
    );
}
