import { Helmet } from "react-helmet";
import "./App.css";
import { useState } from "react";

const DynamicMetaTags = ({ title, description, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={window.location.href} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

function App() {
  const [post,setPost]= useState({
    title: "Get your Bite Score",
    description: "Your testing image",
    imageUrl: "https://fastly.picsum.photos/id/694/200/300.jpg?hmac=fAbYLUWtofDk7qWl4qOA_p9o2oSC3vylIK8clCV-ttk"
  })
  const currentUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent("Check out this amazing content!");

  // Facebook Share URL
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}&quote=${shareText}`;

  // Twitter Share URL
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${currentUrl}&text=${shareText}`;

  // Email Share URL
  const emailSubject = encodeURIComponent("Interesting Content to Check Out");
  const emailBody = encodeURIComponent(
    `I found this interesting and wanted to share it with you: ${window.location.href}`
  );
  const emailShareUrl = `mailto:?subject=${emailSubject}&body=${emailBody}`;

  const openShareWindow = (url) => {
    setPost({...post, imageUrl:'https://bite-model-app-stage-6e97f85a4713.herokuapp.com/static/Steve_hand.png'})
    window.open(url, "_blank", "width=600,height=400");
  };
  return (
    <div className="App">
      <DynamicMetaTags
        title={post.title}
        description={post.description}
        image={post.imageUrl}
      />
      <div>
        <button onClick={() => openShareWindow(facebookShareUrl)}>
          Share on Facebook
        </button>
        <button onClick={() => openShareWindow(twitterShareUrl)}>
          Share on Twitter
        </button>
        <a href={emailShareUrl} target="_blank" rel="noopener noreferrer">
          Share via Email
        </a>
      </div>
    </div>
  );
}

export default App;
