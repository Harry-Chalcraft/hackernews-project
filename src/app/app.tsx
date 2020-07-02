import React from "react";
import "./app.scss";
import NewsDetails, { Column } from "../components/news-details/news-details";
import Pagination from "../components/pagination/pagination";
import TimelineChart from "../components/timeline-chart/timeline-chart";

export interface AppProps { }
export interface AppState { }

class App extends React.Component<AppProps, AppState> {
  
  renderNewDetails(rowData: any) {

    const timeAgoText = (dateTime: any) => {

      let seconds = Math.floor((new Date().getTime() - new Date(dateTime).getTime()) / 1000);
      let interval = Math.floor(seconds / 31536000);

      if (interval > 1) { return interval + " years"; }
      interval = Math.floor(seconds / 2592000);

      if (interval > 1) { return interval + " months"; }
      interval = Math.floor(seconds / 86400);

      if (interval > 1) { return interval + " days"; }
      interval = Math.floor(seconds / 3600);

      if (interval > 1) { return interval + " hours"; }
      interval = Math.floor(seconds / 60);

      if (interval > 1) { return interval + " minutes"; }

      return Math.floor(seconds) + " seconds";
    }

    return (<div><span className="story-title"><a href={rowData["url"]} >{rowData["title"]}</a></span> <span className="story-link">({rowData["url"] ? rowData["url"].split("/")[2].replace("www.", "") : ""})</span> by <span className="story-author">{rowData["author"]}</span> <span className="story-time-ago">({timeAgoText(rowData["created_at"]) + " ago"})</span> [<span className="story-hide-option">hide</span>]</div>);
  }
  renderVoteCount(rowData: any) {
    return (<div>{rowData["points"]}</div>);
  }
  renderUpVote(rowData: any) {
    return (<div className="story-up-vote"></div>);
  }

  render() {
    return (
      <div className="app-component">
        <header className="app-header">
          <div className="app-header-image"><img src="../images/y18.gif" alt="Hacker News" width="20px" height="20px" /></div>
          <div className="app-header-text">Hacker News</div>
        </header>
        <section className="app-section">
          
          <NewsDetails data={data[0]["hits"]} showColumnHeader={true}>
            <Column name="num_comments" align="center" displayName="Comments" ></Column>
            <Column name="age" align="center" displayName="VoteCount" customRenderer={this.renderVoteCount}></Column>
            <Column name="company" align="center" displayName="UpVote" customRenderer={this.renderUpVote}></Column>
            <Column name="title" displayName="News Details" customRenderer={this.renderNewDetails}></Column>
          </NewsDetails>

          <Pagination></Pagination>

          <TimelineChart></TimelineChart>
          
        </section>
        <footer className="app-footer">Hacker News</footer>
      </div>
    );
  }
}
export default App;


// Dummy static data (will be removed later) //
export const data = [
  {
    "hits": [
      {
        "created_at": "2018-10-28T17:57:59.000Z",
        "title": "IBM acquires Red Hat",
        "url": "https://www.redhat.com/en/blog/red-hat-ibm-creating-leading-hybrid-cloud-provider",
        "author": "nopriorarrests",
        "points": 2611,
        "story_text": null,
        "comment_text": null,
        "num_comments": 491,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1540749479,
        "relevancy_score": 8441,
        "_tags": [
          "story",
          "author_nopriorarrests",
          "story_18321884"
        ],
        "objectID": "18321884",
        "_highlightResult": {
          "title": {
            "value": "IBM acquires Red Hat",
            "matchLevel": "none",
            "matchedWords": []
          },
          "url": {
            "value": "https://www.redhat.com/en/blog/red-hat-ibm-creating-leading-hybrid-cloud-provider",
            "matchLevel": "none",
            "matchedWords": []
          },
          "author": {
            "value": "nopriorarrests",
            "matchLevel": "none",
            "matchedWords": []
          }
        }
      },
      {
        "created_at": "2019-12-24T10:15:42.000Z",
        "title": "My Business Card Runs Linux",
        "url": "https://www.thirtythreeforty.net/posts/2019/12/my-business-card-runs-linux/",
        "author": "rcarmo",
        "points": 2595,
        "story_text": null,
        "comment_text": null,
        "num_comments": 397,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1577182542,
        "_tags": [
          "story",
          "author_rcarmo",
          "story_21871026"
        ],
        "objectID": "21871026",
        "_highlightResult": {
          "title": {
            "value": "My Business Card Runs Linux",
            "matchLevel": "none",
            "matchedWords": []
          },
          "url": {
            "value": "https://www.thirtythreeforty.net/posts/2019/12/my-business-card-runs-linux/",
            "matchLevel": "none",
            "matchedWords": []
          },
          "author": {
            "value": "rcarmo",
            "matchLevel": "none",
            "matchedWords": []
          }
        }
      },
      {
        "created_at": "2017-02-28T17:45:58.000Z",
        "title": "Ask HN: Is S3 down?",
        "url": null,
        "author": "iamdeedubs",
        "points": 2589,
        "story_text": "I&#x27;m getting<p>{\n  &quot;errorCode&quot; : &quot;InternalError&quot;\n}<p>When I attempt to use the AWS Console to view s3",
        "comment_text": null,
        "num_comments": 1055,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1488303958,
        "relevancy_score": 7286,
        "_tags": [
          "story",
          "author_iamdeedubs",
          "story_13755673",
          "ask_hn"
        ],
        "objectID": "13755673",
        "_highlightResult": {
          "title": {
            "value": "Ask HN: Is S3 down?",
            "matchLevel": "none",
            "matchedWords": []
          },
          "author": {
            "value": "iamdeedubs",
            "matchLevel": "none",
            "matchedWords": []
          },
          "story_text": {
            "value": "I'm getting<p>{\n  &quot;errorCode&quot; : &quot;InternalError&quot;\n}<p>When I attempt to use the AWS Console to view s3",
            "matchLevel": "none",
            "matchedWords": []
          }
        }
      },
      {
        "created_at": "2020-04-14T16:05:04.000Z",
        "title": "GitHub is now free for teams",
        "url": "https://github.blog/2020-04-14-github-is-now-free-for-teams/",
        "author": "ig0r0",
        "points": 2589,
        "story_text": null,
        "comment_text": null,
        "num_comments": 622,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1586880304,
        "_tags": [
          "story",
          "author_ig0r0",
          "story_22867627"
        ],
        "objectID": "22867627",
        "_highlightResult": {
          "title": {
            "value": "GitHub is now free for teams",
            "matchLevel": "none",
            "matchedWords": []
          },
          "url": {
            "value": "https://github.blog/2020-04-14-github-is-now-free-for-teams/",
            "matchLevel": "none",
            "matchedWords": []
          },
          "author": {
            "value": "ig0r0",
            "matchLevel": "none",
            "matchedWords": []
          }
        }
      },
      {
        "created_at": "2018-09-16T19:44:57.000Z",
        "title": "Linus Torvalds apologizes for his behavior, takes time off",
        "url": "https://lore.kernel.org/lkml/CA+55aFy+Hv9O5citAawS+mVZO+ywCKd9NQ2wxUmGsz9ZJzqgJQ@mail.gmail.com/",
        "author": "fejkp",
        "points": 2585,
        "story_text": null,
        "comment_text": null,
        "num_comments": 996,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1537127097,
        "relevancy_score": 8361,
        "_tags": [
          "story",
          "author_fejkp",
          "story_18000698"
        ],
        "objectID": "18000698",
        "_highlightResult": {
          "title": {
            "value": "Linus Torvalds apologizes for his behavior, takes time off",
            "matchLevel": "none",
            "matchedWords": []
          },
          "url": {
            "value": "https://lore.kernel.org/lkml/CA+55aFy+Hv9O5citAawS+mVZO+ywCKd9NQ2wxUmGsz9ZJzqgJQ@mail.gmail.com/",
            "matchLevel": "none",
            "matchedWords": []
          },
          "author": {
            "value": "fejkp",
            "matchLevel": "none",
            "matchedWords": []
          }
        }
      },
      {
        "created_at": "2013-10-21T01:41:19.000Z",
        "title": null,
        "url": null,
        "author": "Systemic33",
        "points": 2567,
        "story_text": "USA",
        "comment_text": null,
        "num_comments": null,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": 6582647,
        "created_at_i": 1382319679,
        "relevancy_score": 4934,
        "_tags": [
          "pollopt",
          "author_Systemic33",
          "story_6582648"
        ],
        "objectID": "6582648",
        "_highlightResult": {
          "author": {
            "value": "Systemic33",
            "matchLevel": "none",
            "matchedWords": []
          },
          "story_text": {
            "value": "USA",
            "matchLevel": "none",
            "matchedWords": []
          }
        }
      },
      {
        "created_at": "2016-09-14T08:31:15.000Z",
        "title": "Pardon Snowden",
        "url": "https://www.pardonsnowden.org/",
        "author": "erlend_sh",
        "points": 2553,
        "story_text": null,
        "comment_text": null,
        "num_comments": 781,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1473841875,
        "relevancy_score": 6963,
        "_tags": [
          "story",
          "author_erlend_sh",
          "story_12494998"
        ],
        "objectID": "12494998",
        "_highlightResult": {
          "title": {
            "value": "Pardon Snowden",
            "matchLevel": "none",
            "matchedWords": []
          },
          "url": {
            "value": "https://www.pardonsnowden.org/",
            "matchLevel": "none",
            "matchedWords": []
          },
          "author": {
            "value": "erlend_sh",
            "matchLevel": "none",
            "matchedWords": []
          }
        }
      },
      {
        "created_at": "2013-08-12T20:29:01.000Z",
        "title": "Hyperloop",
        "url": "http://www.spacex.com/hyperloop",
        "author": "spikels",
        "points": 2549,
        "story_text": "",
        "comment_text": null,
        "num_comments": 943,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1376339341,
        "relevancy_score": 4799,
        "_tags": [
          "story",
          "author_spikels",
          "story_6201586"
        ],
        "objectID": "6201586",
        "_highlightResult": {
          "title": {
            "value": "Hyperloop",
            "matchLevel": "none",
            "matchedWords": []
          },
          "url": {
            "value": "http://www.spacex.com/hyperloop",
            "matchLevel": "none",
            "matchedWords": []
          },
          "author": {
            "value": "spikels",
            "matchLevel": "none",
            "matchedWords": []
          },
          "story_text": {
            "value": "",
            "matchLevel": "none",
            "matchedWords": []
          }
        }
      },
      {
        "created_at": "2019-10-08T09:23:08.000Z",
        "title": "Blizzard Suspends Professional Hearthstone Player for Hong Kong Comments",
        "url": "https://playhearthstone.com/en-us/blog/23179289/",
        "author": "hownottowrite",
        "points": 2525,
        "story_text": null,
        "comment_text": null,
        "num_comments": 1126,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1570526588,
        "_tags": [
          "story",
          "author_hownottowrite",
          "story_21190265"
        ],
        "objectID": "21190265",
        "_highlightResult": {
          "title": {
            "value": "Blizzard Suspends Professional Hearthstone Player for Hong Kong Comments",
            "matchLevel": "none",
            "matchedWords": []
          },
          "url": {
            "value": "https://playhearthstone.com/en-us/blog/23179289/",
            "matchLevel": "none",
            "matchedWords": []
          },
          "author": {
            "value": "hownottowrite",
            "matchLevel": "none",
            "matchedWords": []
          }
        }
      },
      {
        "created_at": "2019-06-24T06:00:28.000Z",
        "title": "Raspberry Pi 4",
        "url": "https://www.raspberrypi.org/blog/raspberry-pi-4-on-sale-now-from-35",
        "author": "MarcScott",
        "points": 2504,
        "story_text": null,
        "comment_text": null,
        "num_comments": 837,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1561356028,
        "relevancy_score": 8912,
        "_tags": [
          "story",
          "author_MarcScott",
          "story_20260863"
        ],
        "objectID": "20260863",
        "_highlightResult": {
          "title": {
            "value": "Raspberry Pi 4",
            "matchLevel": "none",
            "matchedWords": []
          },
          "url": {
            "value": "https://www.raspberrypi.org/blog/raspberry-pi-4-on-sale-now-from-35",
            "matchLevel": "none",
            "matchedWords": []
          },
          "author": {
            "value": "MarcScott",
            "matchLevel": "none",
            "matchedWords": []
          }
        }
      },
      {
        "created_at": "2018-10-04T09:21:28.000Z",
        "title": "The Big Hack: How China Used a Tiny Chip to Infiltrate Amazon and Apple",
        "url": "https://www.bloomberg.com/news/features/2018-10-04/the-big-hack-how-china-used-a-tiny-chip-to-infiltrate-america-s-top-companies",
        "author": "Osiris30",
        "points": 2493,
        "story_text": null,
        "comment_text": null,
        "num_comments": 769,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1538644888,
        "relevancy_score": 8401,
        "_tags": [
          "story",
          "author_Osiris30",
          "story_18138328"
        ],
        "objectID": "18138328",
        "_highlightResult": {
          "title": {
            "value": "The Big Hack: How China Used a Tiny Chip to Infiltrate Amazon and Apple",
            "matchLevel": "none",
            "matchedWords": []
          },
          "url": {
            "value": "https://www.bloomberg.com/news/features/2018-10-04/the-big-hack-how-china-used-a-tiny-chip-to-infiltrate-america-s-top-companies",
            "matchLevel": "none",
            "matchedWords": []
          },
          "author": {
            "value": "Osiris30",
            "matchLevel": "none",
            "matchedWords": []
          }
        }
      },
      {
        "created_at": "2013-10-10T12:40:26.000Z",
        "title": null,
        "url": null,
        "author": "wting",
        "points": 2482,
        "story_text": "Python - Like",
        "comment_text": null,
        "num_comments": null,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": 6527104,
        "created_at_i": 1381408826,
        "relevancy_score": 4907,
        "_tags": [
          "pollopt",
          "author_wting",
          "story_6527159"
        ],
        "objectID": "6527159",
        "_highlightResult": {
          "author": {
            "value": "wting",
            "matchLevel": "none",
            "matchedWords": []
          },
          "story_text": {
            "value": "Python - Like",
            "matchLevel": "none",
            "matchedWords": []
          }
        }
      },
      {
        "created_at": "2016-10-14T12:26:46.000Z",
        "title": "Be Kind",
        "url": "https://www.briangilham.com/blog/2016/10/10/be-kind",
        "author": "bgilham",
        "points": 2475,
        "story_text": null,
        "comment_text": null,
        "num_comments": 434,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1476448006,
        "relevancy_score": 7017,
        "_tags": [
          "story",
          "author_bgilham",
          "story_12707606"
        ],
        "objectID": "12707606",
        "_highlightResult": {
          "title": {
            "value": "Be Kind",
            "matchLevel": "none",
            "matchedWords": []
          },
          "url": {
            "value": "https://www.briangilham.com/blog/2016/10/10/be-kind",
            "matchLevel": "none",
            "matchedWords": []
          },
          "author": {
            "value": "bgilham",
            "matchLevel": "none",
            "matchedWords": []
          }
        }
      },
      {
        "created_at": "2019-10-30T20:07:19.000Z",
        "title": "Twitter to ban political advertising",
        "url": "https://twitter.com/jack/status/1189634360472829952",
        "author": "coloneltcb",
        "points": 2447,
        "story_text": null,
        "comment_text": null,
        "num_comments": 1001,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1572466039,
        "_tags": [
          "story",
          "author_coloneltcb",
          "story_21401973"
        ],
        "objectID": "21401973",
        "_highlightResult": {
          "title": {
            "value": "Twitter to ban political advertising",
            "matchLevel": "none",
            "matchedWords": []
          },
          "url": {
            "value": "https://twitter.com/jack/status/1189634360472829952",
            "matchLevel": "none",
            "matchedWords": []
          },
          "author": {
            "value": "coloneltcb",
            "matchLevel": "none",
            "matchedWords": []
          }
        }
      },
      {
        "created_at": "2020-06-23T06:08:51.000Z",
        "title": "I Am Deleting the Blog",
        "url": "https://slatestarcodex.com/2020/06/22/nyt-is-threatening-my-safety-by-revealing-my-real-name-so-i-am-deleting-the-blog/",
        "author": "perditus",
        "points": 2446,
        "story_text": null,
        "comment_text": null,
        "num_comments": 1508,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1592892531,
        "_tags": [
          "story",
          "author_perditus",
          "story_23610416"
        ],
        "objectID": "23610416",
        "_highlightResult": {
          "title": {
            "value": "I Am Deleting the Blog",
            "matchLevel": "none",
            "matchedWords": []
          },
          "url": {
            "value": "https://slatestarcodex.com/2020/06/22/nyt-is-threatening-my-safety-by-revealing-my-real-name-so-i-am-deleting-the-blog/",
            "matchLevel": "none",
            "matchedWords": []
          },
          "author": {
            "value": "perditus",
            "matchLevel": "none",
            "matchedWords": []
          }
        }
      },
      {
        "created_at": "2019-02-07T22:52:16.000Z",
        "title": "No Thank You, Mr. Pecker",
        "url": "https://medium.com/@jeffreypbezos/no-thank-you-mr-pecker-146e3922310f",
        "author": "coloneltcb",
        "points": 2444,
        "story_text": null,
        "comment_text": null,
        "num_comments": 730,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1549579936,
        "relevancy_score": 8643,
        "_tags": [
          "story",
          "author_coloneltcb",
          "story_19109474"
        ],
        "objectID": "19109474",
        "_highlightResult": {
          "title": {
            "value": "No Thank You, Mr. Pecker",
            "matchLevel": "none",
            "matchedWords": []
          },
          "url": {
            "value": "https://medium.com/@jeffreypbezos/no-thank-you-mr-pecker-146e3922310f",
            "matchLevel": "none",
            "matchedWords": []
          },
          "author": {
            "value": "coloneltcb",
            "matchLevel": "none",
            "matchedWords": []
          }
        }
      },
      {
        "created_at": "2011-06-22T19:12:04.000Z",
        "title": null,
        "url": null,
        "author": "daniel_levine",
        "points": 2432,
        "story_text": "MySQL",
        "comment_text": null,
        "num_comments": null,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": 2684620,
        "created_at_i": 1308769924,
        "relevancy_score": 3294,
        "_tags": [
          "pollopt",
          "author_daniel_levine",
          "story_2684621"
        ],
        "objectID": "2684621",
        "_highlightResult": {
          "author": {
            "value": "daniel_levine",
            "matchLevel": "none",
            "matchedWords": []
          },
          "story_text": {
            "value": "MySQL",
            "matchLevel": "none",
            "matchedWords": []
          }
        }
      },
      {
        "created_at": "2020-01-15T00:51:29.000Z",
        "title": "Thank HN: You helped me get a new job",
        "url": null,
        "author": "atum47",
        "points": 2425,
        "story_text": "I remember like it was yesterday: I applied to a job overseas through a job platform and didn&#x27;t get hired. People from the platform contacted me telling me one of the possible reasons was that I didn&#x27;t have any code on GitHub. After that I started uploading all my code as open source projects and began to search places to tell people about it.<p>Soon I learned about Hackernews and made a post that got 1 vote. I then decided to contact HN to ask how can I get more traction to my projects and they told me about the Show HN, a tag design to share small and even unfinished projects. Soon I was posting every idea I ever had made into a project. After InvaderZ - a space invaders clone that uses genetic algorithm (<a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=21577659\" rel=\"nofollow\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=21577659</a>) - people started liking my projects and I started to gain some attention. That was very important cause I was being approached by some companies.<p>I don&#x27;t do projects to gather attention, I do cause I have fun doing them. I already had a lot of things done when I decided to upload them to GitHub. Well, in one of those times when my post was in top 10, a cool company from São Paulo saw me and called me for an interview. They liked my project so much they offer me a job.<p>I&#x27;m living in São Paulo now, it&#x27;s a huge city full of things to do and places to visit. It&#x27;s been really cool so far and I have a huge appreciation for  Hackernews and the good people that work here. They provide a cool platform where people can share relevant news. They provide tools for people to start their own startup. They share job openings. They share companies that are hiring. It&#x27;s a neat place for programmers, hackers and tech enthusiasts in general. I wrote this cause you never know when your story will inspire others and maybe there&#x27;s someone on the struggle right now looking for a job. This was my experience. HN help me a lot and I think it might help you too. Thank you all and have a wonderful year.",
        "comment_text": null,
        "num_comments": 193,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1579049489,
        "_tags": [
          "story",
          "author_atum47",
          "story_22050802"
        ],
        "objectID": "22050802",
        "_highlightResult": {
          "title": {
            "value": "Thank HN: You helped me get a new job",
            "matchLevel": "none",
            "matchedWords": []
          },
          "author": {
            "value": "atum47",
            "matchLevel": "none",
            "matchedWords": []
          },
          "story_text": {
            "value": "I remember like it was yesterday: I applied to a job overseas through a job platform and didn't get hired. People from the platform contacted me telling me one of the possible reasons was that I didn't have any code on GitHub. After that I started uploading all my code as open source projects and began to search places to tell people about it.<p>Soon I learned about Hackernews and made a post that got 1 vote. I then decided to contact HN to ask how can I get more traction to my projects and they told me about the Show HN, a tag design to share small and even unfinished projects. Soon I was posting every idea I ever had made into a project. After InvaderZ - a space invaders clone that uses genetic algorithm (<a href=\"https://news.ycombinator.com/item?id=21577659\" rel=\"nofollow\">https://news.ycombinator.com/item?id=21577659</a>) - people started liking my projects and I started to gain some attention. That was very important cause I was being approached by some companies.<p>I don't do projects to gather attention, I do cause I have fun doing them. I already had a lot of things done when I decided to upload them to GitHub. Well, in one of those times when my post was in top 10, a cool company from São Paulo saw me and called me for an interview. They liked my project so much they offer me a job.<p>I'm living in São Paulo now, it's a huge city full of things to do and places to visit. It's been really cool so far and I have a huge appreciation for  Hackernews and the good people that work here. They provide a cool platform where people can share relevant news. They provide tools for people to start their own startup. They share job openings. They share companies that are hiring. It's a neat place for programmers, hackers and tech enthusiasts in general. I wrote this cause you never know when your story will inspire others and maybe there's someone on the struggle right now looking for a job. This was my experience. HN help me a lot and I think it might help you too. Thank you all and have a wonderful year.",
            "matchLevel": "none",
            "matchedWords": []
          }
        }
      },
      {
        "created_at": "2013-07-17T16:34:10.000Z",
        "title": null,
        "url": null,
        "author": "withoutfriction",
        "points": 2402,
        "story_text": "26-30",
        "comment_text": null,
        "num_comments": null,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": 6058598,
        "created_at_i": 1374078850,
        "relevancy_score": 4745,
        "_tags": [
          "pollopt",
          "author_withoutfriction",
          "story_6058603"
        ],
        "objectID": "6058603",
        "_highlightResult": {
          "author": {
            "value": "withoutfriction",
            "matchLevel": "none",
            "matchedWords": []
          },
          "story_text": {
            "value": "26-30",
            "matchLevel": "none",
            "matchedWords": []
          }
        }
      },
      {
        "created_at": "2016-07-11T19:34:57.000Z",
        "title": "Tell HN: New features and a moderator",
        "url": null,
        "author": "dang",
        "points": 2381,
        "story_text": "Today we&#x27;d like to introduce five new features and one moderator.<p>1. You can collapse comments in threads. If you&#x27;re logged in, collapses persist across page refreshes and devices for a week.<p>2. You can tell which way you voted and undo a vote if you want. An &#x27;unvote&#x27; or &#x27;undown&#x27; link appears after a post&#x27;s timestamp when you vote.<p>3. Save and share the best stories and comments. Click on a post&#x27;s timestamp to go to its page, then click &#x27;favorite&#x27; at the top. Your favorites are linked from your profile, and you can browse other users&#x27; from theirs.<p>4. On the front page and &#x2F;newest, click &#x27;hide&#x27; if you no longer want to see a story. The next story in the list will slide up at the bottom. If you change your mind, visit &#x2F;hidden and click &#x27;unhide&#x27;. If you&#x27;re logged in, hidden stories persist for a week.<p>5. Find out which stories were the most popular on HN on a given day by visiting &#x2F;front?day=yyyy-mm-dd. You&#x27;ll see all the front page stories for that day, sorted by how much time they spent there. For example, Alan Kay&#x27;s AMA had the most front page time on June 20: https:&#x2F;&#x2F;news.ycombinator.com&#x2F;front?day=2016-06-20.<p>Finally, I&#x27;m pleased to introduce sctb, a.k.a. Scott Bell, as a Hacker News moderator. Scott has been moderating HN incognito for a long time, but starting today he and I will be sharing the public part of the job. Since Scott is familiar with all aspects of HN moderation, you shouldn&#x27;t notice any changes in practice; this is just an internal refactoring to enable such innovations as vacations and a day off. Scott is my cofounder from Skysheet (YC W09), an excellent programmer with a meticulous eye for detail, and a thoroughly decent human being. Please welcome him and be nice!",
        "comment_text": null,
        "num_comments": 451,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1468265697,
        "relevancy_score": 6842,
        "_tags": [
          "story",
          "author_dang",
          "story_12073675"
        ],
        "objectID": "12073675",
        "_highlightResult": {
          "title": {
            "value": "Tell HN: New features and a moderator",
            "matchLevel": "none",
            "matchedWords": []
          },
          "author": {
            "value": "dang",
            "matchLevel": "none",
            "matchedWords": []
          },
          "story_text": {
            "value": "Today we'd like to introduce five new features and one moderator.<p>1. You can collapse comments in threads. If you're logged in, collapses persist across page refreshes and devices for a week.<p>2. You can tell which way you voted and undo a vote if you want. An 'unvote' or 'undown' link appears after a post's timestamp when you vote.<p>3. Save and share the best stories and comments. Click on a post's timestamp to go to its page, then click 'favorite' at the top. Your favorites are linked from your profile, and you can browse other users' from theirs.<p>4. On the front page and /newest, click 'hide' if you no longer want to see a story. The next story in the list will slide up at the bottom. If you change your mind, visit /hidden and click 'unhide'. If you're logged in, hidden stories persist for a week.<p>5. Find out which stories were the most popular on HN on a given day by visiting /front?day=yyyy-mm-dd. You'll see all the front page stories for that day, sorted by how much time they spent there. For example, Alan Kay's AMA had the most front page time on June 20: https://news.ycombinator.com/front?day=2016-06-20.<p>Finally, I'm pleased to introduce sctb, a.k.a. Scott Bell, as a Hacker News moderator. Scott has been moderating HN incognito for a long time, but starting today he and I will be sharing the public part of the job. Since Scott is familiar with all aspects of HN moderation, you shouldn't notice any changes in practice; this is just an internal refactoring to enable such innovations as vacations and a day off. Scott is my cofounder from Skysheet (YC W09), an excellent programmer with a meticulous eye for detail, and a thoroughly decent human being. Please welcome him and be nice!",
            "matchLevel": "none",
            "matchedWords": []
          }
        }
      }
    ],
    "nbHits": 21976124,
    "page": 2,
    "nbPages": 50,
    "hitsPerPage": 20,
    "exhaustiveNbHits": true,
    "query": "",
    "params": "advancedSyntax=true&analytics=true&analyticsTags=backend&page=2",
    "processingTimeMS": 1
  }
]
