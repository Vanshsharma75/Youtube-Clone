let youtubeSearchForm = document.querySelector('.youtube-search');
let search_box = document.getElementById('search');
let search_button = document.getElementById('submit');


let videoSection = document.querySelector('.video-section');
let image=document.getElementById('image');
image.addEventListener('click',()=>{
window.location.href = './youtubehome.html';
});
let sampleData = {
    "kind": "youtube#searchListResponse",
    "etag": "oQEk7dFNBYzO_CYnA2Q4jX8RUko",
    "nextPageToken": "CDIQAA",
    "regionCode": "ZZ",
    "pageInfo": {
        "totalResults": 1000000,
        "resultsPerPage": 50
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "rdnAoeqA70nL82KvSVddWZKrC5g",
            "id": {
                "kind": "youtube#video",
                "videoId": "SqcY0GlETPk"
            },
            "snippet": {
                "publishedAt": "2023-03-12T08:00:07Z",
                "channelId": "UCWv7vMbMWH4-V0ZXdmDpPBA",
                "title": "React Tutorial for Beginners",
                "description": "Master React 18 with TypeScript! ⚛️ Build amazing front-end apps with this beginner-friendly tutorial. Want the ultimate React ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/SqcY0GlETPk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/SqcY0GlETPk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/SqcY0GlETPk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Programming with Mosh",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-12T08:00:07Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "1fDdxplpN-dn5S9ngQ4l7QvRnrk",
            "id": {
                "kind": "youtube#video",
                "videoId": "wIyHSOugGGw"
            },
            "snippet": {
                "publishedAt": "2024-03-18T12:00:52Z",
                "channelId": "UC-kHm7pG884IYQiYwqJWv9A",
                "title": "Every React Concept Explained in 12 Minutes",
                "description": "My React course: https://reactbootcamp.dev Chapters 0:00 - Intro 0:11 - Components 0:29 - JSX 1:02 - Curly Braces 1:29 ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/wIyHSOugGGw/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/wIyHSOugGGw/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/wIyHSOugGGw/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Code Bootcamp",
                "liveBroadcastContent": "none",
                "publishTime": "2024-03-18T12:00:52Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "o_wAJq5G4s64gtNFwzwwWG3MOEo",
            "id": {
                "kind": "youtube#video",
                "videoId": "Tn6-PIqc4UM"
            },
            "snippet": {
                "publishedAt": "2020-09-08T19:06:55Z",
                "channelId": "UCsBjURrPoezykLs9EqgamOA",
                "title": "React in 100 Seconds",
                "description": "React is a little JavaScript library with a big influence over the webdev world. Learn the basics of React in 100 Seconds ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Tn6-PIqc4UM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Tn6-PIqc4UM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Tn6-PIqc4UM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Fireship",
                "liveBroadcastContent": "none",
                "publishTime": "2020-09-08T19:06:55Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "SQ77AOxW7YoAuYMvTMH3WZz6YgI",
            "id": {
                "kind": "youtube#video",
                "videoId": "_oMsraV91yU"
            },
            "snippet": {
                "publishedAt": "2024-03-18T13:00:29Z",
                "channelId": "UCrL69sErRwEyr7_p0qVCkOQ",
                "title": "Stop Watching React Tutorials in 2024",
                "description": "Project React → https://cosden.solutions/project-react Join The Discord! → https://discord.cosden.solutions VSCode Theme | Font ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/_oMsraV91yU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/_oMsraV91yU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/_oMsraV91yU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Cosden Solutions",
                "liveBroadcastContent": "none",
                "publishTime": "2024-03-18T13:00:29Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "uryk6W_s8PGd8o_jJgFjulmD80c",
            "id": {
                "kind": "youtube#video",
                "videoId": "CgkZ7MvWUAA"
            },
            "snippet": {
                "publishedAt": "2024-01-16T15:55:09Z",
                "channelId": "UC4SVo0Ue36XCfOyb5Lh1viQ",
                "title": "React Full Course for free ⚛️ (2024)",
                "description": "reactjs #course #tutorial This is a beginners React JS course that should be enough to get you started using the React Library.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/CgkZ7MvWUAA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/CgkZ7MvWUAA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/CgkZ7MvWUAA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bro Code",
                "liveBroadcastContent": "none",
                "publishTime": "2024-01-16T15:55:09Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "K3Dh-xD44dlG-6_fHv1Qd0kThHI",
            "id": {
                "kind": "youtube#video",
                "videoId": "bMknfKXIFA8"
            },
            "snippet": {
                "publishedAt": "2022-01-10T14:47:57Z",
                "channelId": "UC8butISFwT-Wl7EV0hUK0BQ",
                "title": "React Course - Beginner&#39;s Tutorial for React JavaScript Library [2022]",
                "description": "Learn React by building eight real-world projects and solving 140+ coding challenges. You can also follow this course ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/bMknfKXIFA8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/bMknfKXIFA8/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/bMknfKXIFA8/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "freeCodeCamp.org",
                "liveBroadcastContent": "none",
                "publishTime": "2022-01-10T14:47:57Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "P4oyodZWwM_cz3lQqzkaRngvpoU",
            "id": {
                "kind": "youtube#video",
                "videoId": "s2skans2dP4"
            },
            "snippet": {
                "publishedAt": "2021-11-06T23:57:09Z",
                "channelId": "UCTZRcDjjkVajGL6wd76UnGg",
                "title": "React JS Explained In 10 Minutes",
                "description": "A list of the core concepts every React developer should have a solid grasp on. React Course: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/s2skans2dP4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/s2skans2dP4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/s2skans2dP4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Dennis Ivy",
                "liveBroadcastContent": "none",
                "publishTime": "2021-11-06T23:57:09Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "7ckp6mpXNkj8aG70VVehRbxT8o0",
            "id": {
                "kind": "youtube#video",
                "videoId": "Ke90Tje7VS0"
            },
            "snippet": {
                "publishedAt": "2018-07-16T16:51:44Z",
                "channelId": "UCWv7vMbMWH4-V0ZXdmDpPBA",
                "title": "React JS - React Tutorial for Beginners",
                "description": "Watch the latest version: https://youtu.be/SqcY0GlETPk?si=cir-2iVquJ3Eaw8X React JS Tutorial - Get up & running with React JS: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Ke90Tje7VS0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Ke90Tje7VS0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Programming with Mosh",
                "liveBroadcastContent": "none",
                "publishTime": "2018-07-16T16:51:44Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "B1xKhnLcXvRd6w_h0o1LfFaxPpc",
            "id": {
                "kind": "youtube#video",
                "videoId": "P0E4i2xCOJs"
            },
            "snippet": {
                "publishedAt": "2024-10-18T08:42:00Z",
                "channelId": "UCBH-5ctALmmOrm4kczL3urQ",
                "title": "Threejs &amp; React Avatar Builder Tutorial - Part 6: Camera Controls",
                "description": "Learn how to build a professional avatar builder with Three.js and React Three Fiber! In this sixth part, we will add camera controls ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/P0E4i2xCOJs/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/P0E4i2xCOJs/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/P0E4i2xCOJs/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Wawa Sensei",
                "liveBroadcastContent": "none",
                "publishTime": "2024-10-18T08:42:00Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "ZmewVdI2UgjmtmlwNUH3mLKTTYk",
            "id": {
                "kind": "youtube#video",
                "videoId": "LDB4uaJ87e0"
            },
            "snippet": {
                "publishedAt": "2024-03-18T14:28:48Z",
                "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
                "title": "React Crash Course 2024",
                "description": "Learn the basics of React, such as components, props, state, data fetching, and more, while building a job listing frontend.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/LDB4uaJ87e0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/LDB4uaJ87e0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/LDB4uaJ87e0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Traversy Media",
                "liveBroadcastContent": "none",
                "publishTime": "2024-03-18T14:28:48Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "JSVzInymcDB9MWau5kuzz5-Sb90",
            "id": {
                "kind": "youtube#video",
                "videoId": "82PXenL4MGg"
            },
            "snippet": {
                "publishedAt": "2024-04-25T14:00:10Z",
                "channelId": "UCPBK_brqoVQtO-fOWpxQGXw",
                "title": "React.JS Full Course - Build 4 Projects in 5 Hours | Zero to Hero",
                "description": "Learn to Code https://www.smoljames.com/roadmap Build a resume ✓ https://www.hyr.sh Learn everything you need to know ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/82PXenL4MGg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/82PXenL4MGg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/82PXenL4MGg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Smoljames",
                "liveBroadcastContent": "none",
                "publishTime": "2024-04-25T14:00:10Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "mp6__AuIXCkb5SiRYL7lZoBGDM8",
            "id": {
                "kind": "youtube#video",
                "videoId": "hn80mWvP-9g"
            },
            "snippet": {
                "publishedAt": "2023-10-09T17:56:33Z",
                "channelId": "UC4SVo0Ue36XCfOyb5Lh1viQ",
                "title": "React tutorial for beginners ⚛️",
                "description": "00:00:00 introduction 00:01:41 installation 00:02:48 new project 00:05:00 how to restart dev server 00:05:36 project folder ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/hn80mWvP-9g/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/hn80mWvP-9g/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/hn80mWvP-9g/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bro Code",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-09T17:56:33Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "vMuMhv6f_-MiOPHnFrEc6Tnn1KU",
            "id": {
                "kind": "youtube#video",
                "videoId": "DLX62G4lc44"
            },
            "snippet": {
                "publishedAt": "2018-12-18T16:21:19Z",
                "channelId": "UC8butISFwT-Wl7EV0hUK0BQ",
                "title": "Learn React JS - Full Course for Beginners - Tutorial 2019",
                "description": "React.js is a JavaScript library for building dynamic web applications. Upon completion of this course, you'll know everything you ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/DLX62G4lc44/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/DLX62G4lc44/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/DLX62G4lc44/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "freeCodeCamp.org",
                "liveBroadcastContent": "none",
                "publishTime": "2018-12-18T16:21:19Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "PtXSHXWsVTfAlTrED1AOmey1ym0",
            "id": {
                "kind": "youtube#video",
                "videoId": "Rh3tobg7hEo"
            },
            "snippet": {
                "publishedAt": "2023-04-08T16:00:14Z",
                "channelId": "UCFbNIlppjAuEX4znoulh0Cw",
                "title": "Learn React With This One Project",
                "description": "React Simplified Course: https://reactsimplified.com Learning React is hard. There are so many concepts to learn and mindsets ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Rh3tobg7hEo/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Rh3tobg7hEo/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Rh3tobg7hEo/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Web Dev Simplified",
                "liveBroadcastContent": "none",
                "publishTime": "2023-04-08T16:00:14Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "lw5xcmGEfp4m0VC1UO3_QbccIuc",
            "id": {
                "kind": "youtube#video",
                "videoId": "qnwFpjIqsrA"
            },
            "snippet": {
                "publishedAt": "2024-10-03T13:58:29Z",
                "channelId": "UCbBt6Ks7M5BZx_GHgGO_UNQ",
                "title": "THE BIGGEST REACT.JS COURSE ON THE INTERNET ( PART 1 )",
                "description": "Unlock the power of modern web development with The Biggest React.js Course on the Internet! This comprehensive course is ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/qnwFpjIqsrA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/qnwFpjIqsrA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/qnwFpjIqsrA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "HuXn WebDev",
                "liveBroadcastContent": "none",
                "publishTime": "2024-10-03T13:58:29Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Oa-P24JonssJv1vA3ggjmy6F_SE",
            "id": {
                "kind": "youtube#video",
                "videoId": "lAFbKzO-fss"
            },
            "snippet": {
                "publishedAt": "2024-04-26T13:00:49Z",
                "channelId": "UCvjXo25nY-WMCTEXZZb0xsw",
                "title": "React JS Full Course 2024",
                "description": "Code Repository: https://github.com/stuyy/react-tutorial-2024 Support the Channel: Become a Member: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/lAFbKzO-fss/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/lAFbKzO-fss/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/lAFbKzO-fss/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Anson the Developer",
                "liveBroadcastContent": "none",
                "publishTime": "2024-04-26T13:00:49Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "VNJFeaCX3S1GuoVt9MLOK_2vDhg",
            "id": {
                "kind": "youtube#video",
                "videoId": "b9eMGE7QtTk"
            },
            "snippet": {
                "publishedAt": "2022-03-04T11:06:59Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "React JS Full Course | Build an App and Master React in 1 Hour",
                "description": "After building this simple, half-hour movie application, imagine what a long and comprehensive 20-hour Next.js course would look ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/b9eMGE7QtTk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/b9eMGE7QtTk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/b9eMGE7QtTk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-03-04T11:06:59Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "z4rn2rQaHVTRMofoooUBojm6va0",
            "id": {
                "kind": "youtube#video",
                "videoId": "oTIJunBa6MA"
            },
            "snippet": {
                "publishedAt": "2024-01-31T12:00:53Z",
                "channelId": "UCrL69sErRwEyr7_p0qVCkOQ",
                "title": "React Router - Complete Tutorial",
                "description": "Project React → https://cosden.solutions/project-react Import React (Newsletter) → https://cosden.solutions/newsletter?s=ytd ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/oTIJunBa6MA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/oTIJunBa6MA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/oTIJunBa6MA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Cosden Solutions",
                "liveBroadcastContent": "none",
                "publishTime": "2024-01-31T12:00:53Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "aguVBKt5CMTC80ptrRID4sQltRc",
            "id": {
                "kind": "youtube#video",
                "videoId": "x_x5LkW6IXs"
            },
            "snippet": {
                "publishedAt": "2022-11-16T17:37:28Z",
                "channelId": "UCZUyPT9DkJWmS_DzdOi7RIA",
                "title": "React JS Full Course (20 HOUR All-in-One Tutorial for Beginners) - PART 1!",
                "description": "Mentorship to six figure software engineer - https://calcur.tech/mentorship ⚙️ Backend Engineering Mind Map ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/x_x5LkW6IXs/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/x_x5LkW6IXs/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/x_x5LkW6IXs/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Caleb Curry",
                "liveBroadcastContent": "none",
                "publishTime": "2022-11-16T17:37:28Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "YEbRk3cL1Mc68UiNTrie-3RtXgs",
            "id": {
                "kind": "youtube#video",
                "videoId": "RVFAyFWO4go"
            },
            "snippet": {
                "publishedAt": "2021-09-10T13:00:10Z",
                "channelId": "UCY38RvRIxYODO4penyxUwTg",
                "title": "React JS Full Course for Beginners | Complete All-in-One Tutorial | 9 Hours",
                "description": "Web Dev Roadmap for Beginners (Free!): https://bit.ly/DaveGrayWebDevRoadmap This React JS Full Course for Beginners is an ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/RVFAyFWO4go/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/RVFAyFWO4go/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/RVFAyFWO4go/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Dave Gray",
                "liveBroadcastContent": "none",
                "publishTime": "2021-09-10T13:00:10Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "h8LM_cHPwcFIIeJq8eYDj0L7f2Q",
            "id": {
                "kind": "youtube#video",
                "videoId": "f55qeKGgB_M"
            },
            "snippet": {
                "publishedAt": "2022-10-05T13:00:26Z",
                "channelId": "UC8S4rDRZn6Z_StJ-hh7ph8g",
                "title": "React Course For Beginners - Learn React in 8 Hours",
                "description": "Hey Everyone! Welcome to my full React Beginners Course where I teach you everything you need to know as a beginner in ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/f55qeKGgB_M/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/f55qeKGgB_M/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/f55qeKGgB_M/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "PedroTech",
                "liveBroadcastContent": "none",
                "publishTime": "2022-10-05T13:00:26Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "iUx8aJ5B_N2jH2iBU-z1MtE9rPk",
            "id": {
                "kind": "youtube#video",
                "videoId": "5ZdHfJVAY-s"
            },
            "snippet": {
                "publishedAt": "2024-02-05T15:30:28Z",
                "channelId": "UC8butISFwT-Wl7EV0hUK0BQ",
                "title": "Build 25 React Projects – Tutorial",
                "description": "Master React by building 25 different projects. If you follow along, you'll be ready to interview for a job as a React developer.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/5ZdHfJVAY-s/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/5ZdHfJVAY-s/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/5ZdHfJVAY-s/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "freeCodeCamp.org",
                "liveBroadcastContent": "none",
                "publishTime": "2024-02-05T15:30:28Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "MuUlNqeYhHHzmevDMSl4eRmBq4A",
            "id": {
                "kind": "youtube#video",
                "videoId": "dz458ZkBMak"
            },
            "snippet": {
                "publishedAt": "2024-07-16T09:30:09Z",
                "channelId": "UCuWZvXIeoDzZKCzpTuC5krQ",
                "title": "React JS Full Course 2024 | 6+ Projects | 15 Hours",
                "description": "Hi Everyone , In this video we will be learning A to Z concept of React JS. ⏰ ▭▭▭▭▭▭ T I M E S T A M P S  ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/dz458ZkBMak/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/dz458ZkBMak/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/dz458ZkBMak/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Sangam Mukherjee",
                "liveBroadcastContent": "none",
                "publishTime": "2024-07-16T09:30:09Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "xWf96pLnzRLmPwWt2o_ZQuV1tmg",
            "id": {
                "kind": "youtube#video",
                "videoId": "TNhaISOUy6Q"
            },
            "snippet": {
                "publishedAt": "2021-01-18T18:20:26Z",
                "channelId": "UCsBjURrPoezykLs9EqgamOA",
                "title": "10 React Hooks Explained // Plus Build your own from Scratch",
                "description": "React hooks provide a highly-efficient was to tap into framework features and organize reactive logic. Learn how use every built-in ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/TNhaISOUy6Q/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/TNhaISOUy6Q/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/TNhaISOUy6Q/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Fireship",
                "liveBroadcastContent": "none",
                "publishTime": "2021-01-18T18:20:26Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "vB77BFJC8TO56eD1prRhy3E8kr0",
            "id": {
                "kind": "youtube#video",
                "videoId": "F4ti9RIv_Rc"
            },
            "snippet": {
                "publishedAt": "2022-05-04T21:00:15Z",
                "channelId": "UCVyTG4sCw-rOvB9oHkzZD1w",
                "title": "Top 5 React JS projects for Beginners",
                "description": "If you like React, check out these awesome beginner projects on YouTube: “React Tutorial for beginners” by Dev Ed ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/F4ti9RIv_Rc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/F4ti9RIv_Rc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/F4ti9RIv_Rc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Creative Tim Tutorials",
                "liveBroadcastContent": "none",
                "publishTime": "2022-05-04T21:00:15Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "3FfuaRcHdrpeAqB7Hn3luJdRkdU",
            "id": {
                "kind": "youtube#video",
                "videoId": "u6gSSpfsoOQ"
            },
            "snippet": {
                "publishedAt": "2022-08-31T14:16:33Z",
                "channelId": "UC8butISFwT-Wl7EV0hUK0BQ",
                "title": "React JavaScript Framework for Beginners – Project-Based Course",
                "description": "Learn React in this full course for beginners. React is one of the most popular JavaScript frameworks and this course is the perfect ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/u6gSSpfsoOQ/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/u6gSSpfsoOQ/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/u6gSSpfsoOQ/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "freeCodeCamp.org",
                "liveBroadcastContent": "none",
                "publishTime": "2022-08-31T14:16:33Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "0zpJQs_OK9ofgbSsWFk2oYIJWTo",
            "id": {
                "kind": "youtube#video",
                "videoId": "Bvwq_S0n2pk"
            },
            "snippet": {
                "publishedAt": "2024-01-03T14:09:25Z",
                "channelId": "UC8butISFwT-Wl7EV0hUK0BQ",
                "title": "Full Stack React Developer Course with Appwrite",
                "description": "In this React course, you'll not only learn the nuances of React and its internal workings but also immerse yourself in building a ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Bvwq_S0n2pk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Bvwq_S0n2pk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Bvwq_S0n2pk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "freeCodeCamp.org",
                "liveBroadcastContent": "none",
                "publishTime": "2024-01-03T14:09:25Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "O9k2w3wAXO79Pzs_cUZq9yO8kXo",
            "id": {
                "kind": "youtube#video",
                "videoId": "0riHps91AzE"
            },
            "snippet": {
                "publishedAt": "2021-05-14T07:40:45Z",
                "channelId": "UChPxqdfDbulLE9PyUqhijWw",
                "title": "Learn React JS with Project in 2 Hours  | React Tutorial for Beginners | React Project Crash Course",
                "description": "This video is a complete React Crash Course for beginners. The video covers different React Topics and implementation in one ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/0riHps91AzE/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/0riHps91AzE/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/0riHps91AzE/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Dipesh Malvia",
                "liveBroadcastContent": "none",
                "publishTime": "2021-05-14T07:40:45Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "qZSBlFSiZmM-bjQqxn9SZgiII6I",
            "id": {
                "kind": "youtube#video",
                "videoId": "4DqAvWonPAg"
            },
            "snippet": {
                "publishedAt": "2023-11-15T08:17:38Z",
                "channelId": "UCXgGY0wkgOzynnHvSEVmE3A",
                "title": "Complete react course with 10 projects",
                "description": "Welcome to a youtube channel dedicated to programming and coding related tutorials. We talk about tech, write code, discuss ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/4DqAvWonPAg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/4DqAvWonPAg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/4DqAvWonPAg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Hitesh Choudhary",
                "liveBroadcastContent": "none",
                "publishTime": "2023-11-15T08:17:38Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "6KmNd8DSnif7gN2xRFXotnaZds0",
            "id": {
                "kind": "youtube#video",
                "videoId": "4UZrsTqkcW4"
            },
            "snippet": {
                "publishedAt": "2020-10-06T14:16:07Z",
                "channelId": "UC8butISFwT-Wl7EV0hUK0BQ",
                "title": "Full React Course 2020 - Learn Fundamentals, Hooks, Context API, React Router, Custom Hooks",
                "description": "Learn the basics of React in this comprehensive course. You will learn about fundamentals, hooks, context API, react router, ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/4UZrsTqkcW4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/4UZrsTqkcW4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/4UZrsTqkcW4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "freeCodeCamp.org",
                "liveBroadcastContent": "none",
                "publishTime": "2020-10-06T14:16:07Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "DfO2OvbAXTD17gbZzBUVliNFqCM",
            "id": {
                "kind": "youtube#video",
                "videoId": "6DP7cMN99zQ"
            },
            "snippet": {
                "publishedAt": "2023-03-02T09:32:36Z",
                "channelId": "UC4fxiAHHYmtQB4QYT41isnA",
                "title": "React full course in telugu in 45 minutes | Complete React.js course | Vamsi Bhavani",
                "description": "In this video, complete react language is explained in 45 minutes. This react.js full course includes all react basics like ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/6DP7cMN99zQ/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/6DP7cMN99zQ/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/6DP7cMN99zQ/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Vamsi Bhavani",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-02T09:32:36Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "a4C3gp1JCKTp5zLDrTCK_lT8V2A",
            "id": {
                "kind": "youtube#video",
                "videoId": "aYSDYRXLQFY"
            },
            "snippet": {
                "publishedAt": "2021-09-08T14:24:08Z",
                "channelId": "UCVyTG4sCw-rOvB9oHkzZD1w",
                "title": "React vs. React Native: Key Differences",
                "description": "Did you get confused by their names? Learn the key differences between these two popular #webdevelopment technologies: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/aYSDYRXLQFY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/aYSDYRXLQFY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/aYSDYRXLQFY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Creative Tim Tutorials",
                "liveBroadcastContent": "none",
                "publishTime": "2021-09-08T14:24:08Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "GAwxfXDgfS0fqsosNhHya3rzCoc",
            "id": {
                "kind": "youtube#video",
                "videoId": "gvkqT_Uoahw"
            },
            "snippet": {
                "publishedAt": "2021-09-28T15:56:21Z",
                "channelId": "UCsBjURrPoezykLs9EqgamOA",
                "title": "React Native in 100 Seconds",
                "description": "React Native allows developers to build cross-platform apps for iOS, Android, and the Web from a single JavaScript codebase.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/gvkqT_Uoahw/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/gvkqT_Uoahw/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/gvkqT_Uoahw/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Fireship",
                "liveBroadcastContent": "none",
                "publishTime": "2021-09-28T15:56:21Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "KH4zWgoytVRGH_EB4XBSuNlExuE",
            "id": {
                "kind": "youtube#video",
                "videoId": "2-crBg6wpp0"
            },
            "snippet": {
                "publishedAt": "2023-03-15T14:35:53Z",
                "channelId": "UC8butISFwT-Wl7EV0hUK0BQ",
                "title": "Learn React 18 with Redux Toolkit – Full Tutorial for Beginners",
                "description": "Learn how to use React version 18 and Redux Toolkit in this full course for beginners. React is a free and open-source front-end ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/2-crBg6wpp0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/2-crBg6wpp0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/2-crBg6wpp0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "freeCodeCamp.org",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-15T14:35:53Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "qKotmj6GyDaBDHDw-IO0jYWQjyQ",
            "id": {
                "kind": "youtube#video",
                "videoId": "2OTq15A5s0Y"
            },
            "snippet": {
                "publishedAt": "2023-02-03T16:34:18Z",
                "channelId": "UCsBjURrPoezykLs9EqgamOA",
                "title": "7 better ways to create a React app",
                "description": "What is the best tool for starting a new React project in 2023? Let's look at 7 good alternatives to create-react-app for starting a ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/2OTq15A5s0Y/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/2OTq15A5s0Y/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/2OTq15A5s0Y/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Fireship",
                "liveBroadcastContent": "none",
                "publishTime": "2023-02-03T16:34:18Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "SY1l9qEmR7jJji5Yav7fN2ilbKc",
            "id": {
                "kind": "youtube#video",
                "videoId": "I2UBjN5ER4s"
            },
            "snippet": {
                "publishedAt": "2020-08-11T17:00:02Z",
                "channelId": "UCsKsymTY_4BYR-wytLjex7A",
                "title": "React Website Tutorial - Beginner React JS Project Fully Responsive",
                "description": "Learn how to build a React website from scratch in this tutorial. We will use React Hooks and React Router for this beginner React ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/I2UBjN5ER4s/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/I2UBjN5ER4s/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/I2UBjN5ER4s/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Brian Design",
                "liveBroadcastContent": "none",
                "publishTime": "2020-08-11T17:00:02Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "GzMvx9axb5SAvv8ezcSaZJYwlNE",
            "id": {
                "kind": "youtube#video",
                "videoId": "Xe8CkYZvCig"
            },
            "snippet": {
                "publishedAt": "2023-12-23T15:40:01Z",
                "channelId": "UCc7gpqMnnOSbU_F2-5MVVZw",
                "title": "ReactJs Crash Course: Master the Basics in One Video! Ignite Your Front-End Mastery Series!",
                "description": "Welcome to the ultimate React JS crash course for beginners! In just 1.2 hours, you'll embark on a coding journey that will ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Xe8CkYZvCig/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Xe8CkYZvCig/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Xe8CkYZvCig/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Sheryians Coding School",
                "liveBroadcastContent": "none",
                "publishTime": "2023-12-23T15:40:01Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "cks3MRvYUZe3vhcmZXwlfnWeoKo",
            "id": {
                "kind": "youtube#video",
                "videoId": "m55PTVUrlnA"
            },
            "snippet": {
                "publishedAt": "2022-02-01T14:00:14Z",
                "channelId": "UC8S4rDRZn6Z_StJ-hh7ph8g",
                "title": "All The JavaScript You Need To Know For React",
                "description": "In this video I will go over all the JavaScript I believe is necessary for someone starting to learn react. Obviously, the more ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/m55PTVUrlnA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/m55PTVUrlnA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/m55PTVUrlnA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "PedroTech",
                "liveBroadcastContent": "none",
                "publishTime": "2022-02-01T14:00:14Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "bhsAUCxP-TRY8OjD5zfEgXTLj4E",
            "id": {
                "kind": "youtube#video",
                "videoId": "JR9wsVYp8RQ"
            },
            "snippet": {
                "publishedAt": "2021-12-14T17:00:10Z",
                "channelId": "UCFbNIlppjAuEX4znoulh0Cw",
                "title": "Do You Know Enough JavaScript To Learn React",
                "description": "JavaScript Simplified Course: https://javascriptsimplified.com React is hard to learn and it is made exponentially hard if you don't ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/JR9wsVYp8RQ/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/JR9wsVYp8RQ/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/JR9wsVYp8RQ/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Web Dev Simplified",
                "liveBroadcastContent": "none",
                "publishTime": "2021-12-14T17:00:10Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "bWI_j-RZUzKecthXDGbm8qGH0pw",
            "id": {
                "kind": "youtube#video",
                "videoId": "eILUmCJhl64"
            },
            "snippet": {
                "publishedAt": "2023-11-04T02:25:41Z",
                "channelId": "UC7uzuZJIYzcxV9JJ1yAtHHg",
                "title": "🚀🔥 React &amp; Redux Complete Course (2024) with Projects | Notes | Free Certification",
                "description": "For MERN stack admission queries, message us or WhatsApp on +91-8000121313 - GitHub Code Repo: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/eILUmCJhl64/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/eILUmCJhl64/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/eILUmCJhl64/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Complete Coding by Prashant Sir",
                "liveBroadcastContent": "none",
                "publishTime": "2023-11-04T02:25:41Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "oC-6fll9_fnQyPtInlF7nnR0Ktg",
            "id": {
                "kind": "youtube#video",
                "videoId": "4pO-HcG2igk"
            },
            "snippet": {
                "publishedAt": "2020-12-30T10:15:44Z",
                "channelId": "UCW5YeuERMmlnqo4oq8vwUpg",
                "title": "Full React Tutorial #8 - Using State (useState hook)",
                "description": "Hey gang, in this React tutorial we'll see how to use state (data) in our components using the useState hook. ‍   ‍   Course ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/4pO-HcG2igk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/4pO-HcG2igk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/4pO-HcG2igk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Net Ninja",
                "liveBroadcastContent": "none",
                "publishTime": "2020-12-30T10:15:44Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "FcCL33BJepKMDdyWdSEuUa-vIdA",
            "id": {
                "kind": "youtube#video",
                "videoId": "ZaC6oCIpjR0"
            },
            "snippet": {
                "publishedAt": "2024-01-28T13:30:12Z",
                "channelId": "UC0T6MVd3wQDB5ICAe45OxaQ",
                "title": "REACT JS Full Course for Beginners with Website Project (FREE) - 2024 Edition",
                "description": "REACT JS Full Course for Beginners with Website Project (FREE) - 2024 Edition To learn Mern Stack Development online with ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/ZaC6oCIpjR0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/ZaC6oCIpjR0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/ZaC6oCIpjR0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "WsCube Tech",
                "liveBroadcastContent": "none",
                "publishTime": "2024-01-28T13:30:12Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "uOdvDAPX5lpibwOqJdVrTQUo3kw",
            "id": {
                "kind": "youtube#video",
                "videoId": "Dorf8i6lCuk"
            },
            "snippet": {
                "publishedAt": "2021-05-05T15:00:03Z",
                "channelId": "UCSJbGtTlrDami-tDGPUV9-w",
                "title": "React Crash Course for Beginners - Learn ReactJS from Scratch in this 100% Free Tutorial!",
                "description": "Get Started with React.js and learn how to build amazing websites with ReactJS! Full Project included, 100% free! 🖥️ Official ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Dorf8i6lCuk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Dorf8i6lCuk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Dorf8i6lCuk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Academind",
                "liveBroadcastContent": "none",
                "publishTime": "2021-05-05T15:00:03Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "AwS1HZ86u_xLTPgtS9YN4DKZUD8",
            "id": {
                "kind": "youtube#video",
                "videoId": "NbTrGcz4DW8"
            },
            "snippet": {
                "publishedAt": "2020-12-29T09:37:18Z",
                "channelId": "UCW5YeuERMmlnqo4oq8vwUpg",
                "title": "Full React Tutorial #6 - Adding Styles",
                "description": "Hey gang, in this React tutorial we'll see how to add CSS to our React projects. ‍   ‍   Course Files: + ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/NbTrGcz4DW8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/NbTrGcz4DW8/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/NbTrGcz4DW8/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Net Ninja",
                "liveBroadcastContent": "none",
                "publishTime": "2020-12-29T09:37:18Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "W0CKdbUeUKgjNsvLqws3EW1MlBg",
            "id": {
                "kind": "youtube#video",
                "videoId": "L2KHCWJ3gjs"
            },
            "snippet": {
                "publishedAt": "2021-08-04T09:04:15Z",
                "channelId": "UCvM5YYWwfLwpcQgbRr68JLQ",
                "title": "Tailwind CSS React Tutorial",
                "description": "Tailwind CSS React Tutorial If you're looking to learn tailwindcss with react, this tutorial should cover the basics of getting it up and ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/L2KHCWJ3gjs/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/L2KHCWJ3gjs/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/L2KHCWJ3gjs/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Adrian Twarog",
                "liveBroadcastContent": "none",
                "publishTime": "2021-08-04T09:04:15Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "cG3X6N7GI5tx0M1q_vDS-w1MvEk",
            "id": {
                "kind": "youtube#video",
                "videoId": "Xoz31I1FuiY"
            },
            "snippet": {
                "publishedAt": "2021-02-28T15:24:45Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Learn Material UI in One Hour - React Material UI Project Tutorial [2022]",
                "description": "Are you new to Material UI? Have you heard about it but never actually tried it out? Maybe you dived into it but it felt overwhelming ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Xoz31I1FuiY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Xoz31I1FuiY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Xoz31I1FuiY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2021-02-28T15:24:45Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "mTf3RT8801oTx3EYbljT77jMBBA",
            "id": {
                "kind": "youtube#video",
                "videoId": "L0DWAVbdEaM"
            },
            "snippet": {
                "publishedAt": "2022-07-05T10:40:46Z",
                "channelId": "UCr-9zHfv8a5xdv1_eV7n91Q",
                "title": "React Most Asked Interview Question pt1 😎  #short #shorts #javascript  #react #developer #interview",
                "description": "Get my Interview notes - https://frontendsecrets.com/ This video contains the Most asked Reactjs Interview Questions.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/L0DWAVbdEaM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/L0DWAVbdEaM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/L0DWAVbdEaM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Sandip Guchait",
                "liveBroadcastContent": "none",
                "publishTime": "2022-07-05T10:40:46Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "EFD0Hb1NqDMTtfXD5GpWixJmkus",
            "id": {
                "kind": "youtube#video",
                "videoId": "0-S5a0eXPoc"
            },
            "snippet": {
                "publishedAt": "2020-05-11T16:00:11Z",
                "channelId": "UCWv7vMbMWH4-V0ZXdmDpPBA",
                "title": "React Native Tutorial for Beginners - Build a React Native App",
                "description": "Build amazing iOS & Android apps with React Native! This beginner-friendly tutorial gets you started. Ready for a deep dive?",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/0-S5a0eXPoc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/0-S5a0eXPoc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/0-S5a0eXPoc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Programming with Mosh",
                "liveBroadcastContent": "none",
                "publishTime": "2020-05-11T16:00:11Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "z2a9DMkC1RRFGg-4fgrDphKSIcM",
            "id": {
                "kind": "youtube#video",
                "videoId": "gv9ugDJ1ynU"
            },
            "snippet": {
                "publishedAt": "2021-01-06T10:14:13Z",
                "channelId": "UCW5YeuERMmlnqo4oq8vwUpg",
                "title": "Full React Tutorial #14 - useEffect Hook (the basics)",
                "description": "Hey gang, in this react tutorial we'll learn about the useEffect hook. ‍   ‍   Course Files: + ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/gv9ugDJ1ynU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/gv9ugDJ1ynU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/gv9ugDJ1ynU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Net Ninja",
                "liveBroadcastContent": "none",
                "publishTime": "2021-01-06T10:14:13Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "02LP6GfMQiUe4ha1GryUPF7MwhY",
            "id": {
                "kind": "youtube#video",
                "videoId": "Xrgddey8jcA"
            },
            "snippet": {
                "publishedAt": "2022-11-03T16:00:18Z",
                "channelId": "UCFbNIlppjAuEX4znoulh0Cw",
                "title": "Stop Using Create React App",
                "description": "Sorry about the bad audio quality. My computer changed my mic to use my webcam mic instead of my actual microphone. Find ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Xrgddey8jcA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Xrgddey8jcA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Xrgddey8jcA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Web Dev Simplified",
                "liveBroadcastContent": "none",
                "publishTime": "2022-11-03T16:00:18Z"
            }
        }
    ]
}


youtubeSearchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let searchValue = search_box.value;
    let valuesForUrl = {
        key : "AIzaSyD9NZ1estPeq_RfjEPiyMwqykH2ioZcB2k",
        part : 'snippet',
        q : searchValue,
        type : 'video',
        maxResults : 100
    }
    
    let {key, part, q, type, maxResults} = valuesForUrl;

    fetch(`https://www.googleapis.com/youtube/v3/search?key=${key}&part=${part}&q=${q}&type=${type}&maxResults=${maxResults}`)
    .then(response => response.json())
    .then(data =>  {
          displayThumbails(data.items)
    })
    .catch(err => console.log(err))


})


function displayThumbails(arr) {
    for(let t of arr){
        let card = document.createElement('div');
        card.className = 'youtube-card';
        let imgTag = document.createElement('img');
        imgTag.src = t.snippet.thumbnails.medium.url;
        let para = document.createElement('p');
        para.innerText = t.snippet.title;
        card.append(imgTag, para);
        videoSection.append(card);
          // closures
        card.addEventListener("click", ()=>{
            localStorage.setItem('currentVideo',JSON.stringify(t))
            location.href = 'watch.html'
        })
    }
}

displayThumbails(sampleData.items)




// `https://www.googleapis.com/youtube/v3/search?key=${key}&part=${part}&q=${q}&type=${type}&maxResults=${maxResults}`
document.addEventListener('DOMContentLoaded', () => {
 const form = document.querySelector('.youtube-search');
 const suggestionsDiv = document.querySelector('.suggestions');
 const videoSectionDiv = document.querySelector('.video-section');

 form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = document.querySelector('#search').value;
    const search = document.createElement('p');
    if (searchTerm === '') {
     search.innerHTML = 'Please enter a search item';
     return;
    }

   // Display the search term as a suggestion (For demonstration purposes)
//    const suggestion = document.createElement('p');
//    suggestion.textContent = `Suggestion: ${searchTerm}`;
//    suggestionsDiv.appendChild(suggestion);

   // You can add API call here to fetch the videos
   const video = document.createElement('p');
videoSectionDiv.innerHTML = ''; // Clear previous search results
video.textContent = `Video related to: ${searchTerm}`;
videoSectionDiv.appendChild(video);
 });
});
// show  user profile  in youtube  home  page  in userprofile  div  section  
//  show  user  profile  image  in userprofile  div  section    
let user=JSON.parse(localStorage.getItem('user'));
let userProfileImage = document.querySelector('.user-profile');





