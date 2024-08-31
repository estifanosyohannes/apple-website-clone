import React, { useState, useEffect } from "react";
import "./Youtube.css";
function Appleyoutube() {
  const [youTubeVideos, setVideos] = useState([]);
  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const channelId = import.meta.env.VITE_APP_CHANNEL_ID;
    const requestUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=9`;

    fetch(requestUrl)
      .then((Response) => Response.json())
      .then((data) => {
        const youTubeVideosData = data.items;
        setVideos(youTubeVideosData);
      });
  }, []);

  // console.log(youTubeVideos);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper">
              <br />
              <br />
              latest videos <br />
              <br />
              <br />
            </div>
          </div>
          {youTubeVideos.map((singleVideo) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let videoWWrapper = (
              <div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img src={singleVideo.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return videoWWrapper;
          })}
        </div>
      </div>
    </div>
  );
}

export default Appleyoutube;
