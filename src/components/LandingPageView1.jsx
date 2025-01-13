import React, { useEffect, useState } from 'react';

const LandingPageView1 = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const username = "vishal12";

  useEffect(() => {
    const fetchLandingPageData = async () => {
      const response = {
        "artistPage": {
          "artistName": "Vishal Mishra",
          "stageTitles": "5-Star Performer | Chart-Topping Artist | Voice Artist",
          "artistBio": "Hello, my name is Vishal Mishra, a passionate musician creating soulful melodies.",
          "artistPhoto": "https://c.saavncdn.com/artists/Vishal_Mishra_004_20230804115745_500x500.jpg",
          "gradientStart": "#1e3c72",
          "gradientEnd": "#2a5298"
        },
        "performances": [
          {
            "performanceId": "perf1",
            "eventTitle": "Live at Mumbai Arena",
            "description": "An acoustic performance for music lovers.",
            "ticketPrice": 1499,
            "durationMinutes": 120,
            "platform": "Stage",
            "performanceType": "Team"
          },
          {
            "performanceId": "perf2",
            "eventTitle": "Melody Night",
            "description": "A night of soulful tunes.",
            "ticketPrice": 699,
            "durationMinutes": 30,
            "platform": "Party",
            "performanceType": "Solo"
          },
          {
            "performanceId": "perf3",
            "eventTitle": "Symphony Session",
            "description": "A virtual symphony session with fans.",
            "ticketPrice": 499,
            "durationMinutes": 45,
            "platform": "Theater",
            "performanceType": "Solo"
          }
        ],
        "merchandise": [
          {
            "merchId": "merc1",
            "merchName": "Signed TShirt + Signed Cup + Signed Vinyl",
            "merchDescription": "Limited edition signed merchandise.",
            "price": 399,
            "merchType": "Exclusive",
            "imageURL": "https://img.freepik.com/premium-psd/assortment-merchandising-items_23-2150799377.jpg?semt=ais_hybrid"
          }
        ],
        "songSales": [
          {
            "songId": "song1",
            "title": "Melody of Dreams",
            "priceType": "Variable",
            "price": 150,
            "description": "An enchanting melody inspired by the beauty of nature.",
            "imageURL": "https://images.t2online.in/cdn-cgi/image/width=1280,quality=70/https://apis.t2online.in/image/journal/article.jpg?img_id=1204123&t=1730672058584"
          },
          {
            "songId": "song2",
            "title": "Echoes of the Heart",
            "priceType": "Set",
            "price": 100,
            "description": "A heartfelt ballad that resonates deeply with listeners.",
            "imageURL": "https://vishal-mishra.com/wp-content/uploads/2024/05/5.jpg"
          },
          {
            "songId": "song3",
            "title": "Rhythm of the Night",
            "priceType": "Set",
            "price": 200,
            "description": "A vibrant and energetic track perfect for dancing.",
            "imageURL": "https://vishal-mishra.com/wp-content/uploads/2024/05/1.jpg"
          },
          {
            "songId": "song4",
            "title": "Journey Within",
            "priceType": "Set",
            "price": 50,
            "description": "A soulful piece reflecting the artist's inner journey.",
            "imageURL": "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg"
          }
        ],
        "musicVideos": [
          {
            "videoId": "vid1",
            "title": "Melodic Memories",
            "description": "A visual treat of my recent performance.",
            "platform": "YouTube",
            "redirectURL": "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            "imageURL": "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg"
          },
          {
            "videoId": "vid2",
            "title": "Melodic Memories",
            "description": "A visual treat of my recent performance.",
            "platform": "YouTube",
            "redirectURL": "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            "imageURL": "https://clikrecords.com/wp-content/uploads/2022/09/Vishal-Mishra-2.jpg"
          },
        ],
        "fanMessages": {
          "title": "Message Vishal Mishra",
          "description": "Send me your thoughts or questions.",
          "promisedReplyTime": "3"
        },
        "supportPage": {
          "title": "Show Your Love"
        },
        "musicPlatformLinks": [
          {
            "musicPlatform": "JioSaavan",
            "url": "https://www.jiosaavn.com/artist/vishal-mishra-songs/f0sXoS0mUnE_",
            "icon": "https://images.sftcdn.net/images/t_app-icon-m/p/4b3bebe9-f429-42cc-89db-2a9493062a5e/2230401414/jiosaavn-logo"
          },
          {
            "musicPlatform": "Spotify",
            "url": "https://open.spotify.com/artist/5wJ1H6ud777odtZl5gG507",
            "icon": "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
          }
        ]
      };

      setLandingPageData(response);
      setProfileImage(response.artistPage.artistPhoto);
    };
    fetchLandingPageData();
  }, [username]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector('#navbar');
    const navbarHeight = navbar.offsetHeight;

    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    } else {
      console.log(`Section with ID ${id} not found`);
    }
  };

  if (!landingPageData) {
    return (
      <div className="max-w-md mx-auto mt-8 bg-white rounded-lg shadow-md p-6">
        <div className="text-center">Landing page not found</div>
      </div>
    );
  }

  const { artistPage, performances, merchandise, songSales, musicVideos, fanMessages, supportPage, musicPlatformLinks } = landingPageData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-purple-700 to-pink-600">
      {/* Navbar Section */}
      <nav id="navbar" className="fixed top-0 w-full z-50 bg-black bg-opacity-90 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="font-semibold text-xl text-white">@{username}</h2>
          <div className="hidden md:flex space-x-4">
            <button className="text-white hover:text-yellow-400" onClick={() => scrollToSection('performances')}>Performances</button>
            <button className="text-white hover:text-yellow-400" onClick={() => scrollToSection('videos')}>Videos</button>
            <button className="text-white hover:text-yellow-400" onClick={() => scrollToSection('songsSale')}>Songs Sale</button>
            <button className="text-white hover:text-yellow-400" onClick={() => scrollToSection('merchandise')}>Merchandise</button>
            <button className="text-white hover:text-yellow-400" onClick={() => scrollToSection('messages')}>Messages</button>
            <button className="text-white hover:text-yellow-400" onClick={() => scrollToSection('support')}>Support</button>
          </div>
        </div>
      </nav>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 pt-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-[100px] lg:h-[calc(100vh-100px)] overflow-auto">
            {/* Profile Section */}
            <div className="bg-white bg-opacity-40 rounded-lg shadow-lg p-6 text-black">
              <div className="flex flex-col items-center">
                <img src={profileImage} alt="Profile photo of Vishal Mishra" className="w-32 h-32 rounded-full" />
                <h2 className="text-2xl font-bold mt-4">{artistPage.artistName}</h2>
                <span className="text-gray-800 text-sm font-semibold mt-2 px-4 py-1 rounded-full text-center border-dotted border-4 border-gray-800 hover:bg-slate-100 hover:border-slate-100">{artistPage.stageTitles}</span>
              </div>
              {/* Social Links Section */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Connect with me on:</h3>
                <div className="flex flex-col gap-4">
                  {musicPlatformLinks.map((link) => (
                    <button key={link.musicPlatform} className="flex items-center p-2 border border-gray-300 rounded-full shadow-md hover:bg-gray-800 hover:text-white transition" onClick={() => window.open(link.url, '_blank')}>
                      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 mr-4">
                        <img src={link.icon} alt={`${link.musicPlatform} icon`} className="w-14 h-14 object-cover rounded-full" />
                      </div>
                      <span className="text-sm font-medium">{link.musicPlatform}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8">
            {/* About Section */}
            <div className="bg-white bg-opacity-40 rounded-lg shadow-lg p-6 mb-8 text-black">
              <h2 className="text-3xl font-bold mb-4">About</h2>
              <p>{artistPage.artistBio}</p>
            </div>

            {/* Music Videos Section */}
            <div id="videos" className="bg-white bg-opacity-40 rounded-lg shadow-lg p-6 mb-8 text-black">
              <h2 className="text-3xl font-bold mb-4">Music Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {musicVideos.map((video) => (
                  <div key={video.videoId} className="overflow-hidden cursor-pointer w-full" onClick={() => window.open(video.redirectURL, '_blank')}>
                    <div className="relative">
                      <div className="w-full" style={{ paddingTop: '66.66%' }}>
                        <img src={video.imageURL} alt={`Thumbnail of ${video.title} music video`} className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover" />
                      </div>
                      <div className="p-2 bg-black bg-opacity-80 backdrop-blur-sm flex justify-between items-center">
                        <span className="font-medium text-white">{video.title}</span>
                        <button className="text-gray-300 hover:text-yellow-400">
                          <i className="fas fa-edit"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performances Section */}
            <div id="performances" className="bg-white bg-opacity-40 rounded-lg shadow-lg p-6 mb-8 text-black">
              <h2 className="text-3xl font-bold mb-4">Performances</h2>
              <div className="space-y-4">
                {performances.map((perf) => (
                  <div key={perf.performanceId} className="bg-white bg-opacity-40 rounded-lg shadow-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="text-xl font-bold mb-2">{perf.eventTitle}</h3>
                    <p>{perf.description}</p>
                    <p>Duration: {perf.durationMinutes} mins</p>
                    <p>Location: {perf.platform}</p>
                    <p>Price: ${perf.ticketPrice}</p>
                    <button className="mt-2 w-full px-4 py-2 text-white bg-yellow-400 hover:bg-yellow-500 rounded-lg">Book Now</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Songs for Sale Section */}
            <div id="songsSale" className="bg-white bg-opacity-40 rounded-lg shadow-lg p-6 mb-8 text-black">
              <h2 className="text-3xl font-bold mb-4">Songs for Sale</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {songSales.map((song) => (
                  <div key={song.songId} className="bg-gray-100 rounded-lg shadow-lg p-4 hover:bg-opacity-40 transition">
                    <img src={song.imageURL} alt={song.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-xl font-semibold">{song.title}</h3>
                    <p>{song.description}</p>
                    {song.price && (
                      <p className="font-bold text-yellow-400 mt-2">${song.price}</p>
                    )}
                    <button className="mt-4 w-full px-4 py-2 text-white bg-yellow-400 hover:bg-yellow-500 rounded-lg">Buy Now</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Merchandise Section */}
            <div id="merchandise" className="bg-white bg-opacity-40 rounded-lg shadow-lg p-6 mb-8 text-black">
              <h2 className="text-3xl font-bold mb-4">Merchandise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {merchandise.map((item) => (
                  <div key={item.merchId} className="bg-white bg-opacity-40 rounded-lg shadow-lg p-4 hover:bg-gray-100 transition">
                    <img src={item.imageURL} alt={item.merchName} className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-xl font-semibold">{item.merchName}</h3>
                    <p>{item.merchDescription}</p>
                    <p className="font-bold text-yellow-400 mt-2">${item.price}</p>
                    <button className="mt-4 w-full px-4 py-2 text-white bg-yellow-400 hover:bg-yellow-500 rounded-lg">Buy Now</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Fan Messages Section */}
            <div id="messages" className="bg-white bg-opacity-40 rounded-lg shadow-lg p-6 mb-8 text-black">
              <h2 className="text-3xl font-bold mb-4">{fanMessages.title}</h2>
              <p>{fanMessages.description}</p>
              <form className="mt-4">
                <textarea className="w-full p-2 text-gray-800 bg-gray-200 rounded-lg mb-4" placeholder="Your message" rows="4"></textarea>
                <button className="w-full px-4 py-2 text-white bg-yellow-400 hover:bg-yellow-500 rounded-lg">Send Message</button>
              </form>
            </div>

            {/* Support Section */}
            <div id="support" className="bg-white bg-opacity-40 rounded-lg shadow-lg p-6 mb-8 text-black">
              <h2 className="text-3xl font-bold mb-4">{supportPage.title}</h2>
              <p className="text-lg">Show your love and support by donating or sharing with others!</p>
              <button className="w-full px-4 py-2 text-white bg-yellow-400 hover:bg-yellow-500 rounded-lg mt-4">Support Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageView1;