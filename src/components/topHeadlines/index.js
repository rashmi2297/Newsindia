import React, { useEffect, useState } from "react";


function TopHeadlines() {
    const [topHeadlines, setTopHeadlines] = useState([]);
    useEffect(() => {
        fetch(
            "https://newsapi.org/v2/top-headlines?country=in&apiKey=68825892e0354082b6776c34857a459c"
        )
            .then((res) => res.json())
            .then((res) => setTopHeadlines(res.articles));
    }, []);

    console.log(topHeadlines);
    return (
        // <marquee direction="right" width="100%">
        
        <div style={{ padding: "10px"}} className="top-headlines">
            <div style={{ display:"flex"}}>
                {topHeadlines.map((dt) => {
                    return (
                        <div
                            style={{
                                marginRight: "10px",
                                minHeight: "200px",
                                minWidth: "230px",
                                border: "1px solid black",
                                borderRadius: "12px",
                            }}
                            className="top-headlines-card"
                        >
                            <img
                                style={{ width: "100%", borderRadius: "12px", height: "200px"}}
                                src={dt.urlToImage}
                                alt="Not found"
                            />
                            <div style={{ padding: "10px" }}>
                                {dt.content ? (
                                    <span>{dt.content}</span>
                                ) : <span>Content not found</span>}

                                <div style={{ marginTop: "10px" }}>-{dt.author}</div>
                                <div style={{ color: "gray", marginTop: "10px" }}>-{dt.publishedAt}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        
        // </marquee>
    );
}

export default TopHeadlines;
