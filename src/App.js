import './App.css';

function App() {
  const handleShare = () => {
    // Use the current page URL
    const currentUrl = window.location.href;

    // Ensure the URL is valid and properly encoded
    const shareUrl = encodeURIComponent(currentUrl);

    // Custom message for the share
    const shareText = encodeURIComponent("Check out this amazing content!");

    // Construct the Facebook share URL
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareText}`;

    // Open the Facebook share dialog
    window.open(facebookShareUrl, '_blank', 'width=600,height=400');
  };
  return (
    <div className="App">
         <button onClick={handleShare}>Share on Facebook</button>

    </div>
  );
}

export default App;
