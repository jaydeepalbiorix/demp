import "./App.css";

function App() {
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
    window.open(url, "_blank", "width=600,height=400");
  };
  return (
    <div className="App">
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
