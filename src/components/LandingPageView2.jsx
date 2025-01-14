import React from 'react';
import { useEffect, useState } from "react";
import { Edit2, Music, Package, MessageSquare, Heart, Video } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import Footer from './Footer';

const LandingPageView2 = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [activeTab, setActiveTab] = useState("");
  const username = "vishal12";

  useEffect(() => {
    const fetchLandingPageData = async () => {
      const response =
      {
        "artistPage": {
          "artistName": "Vishal Mishra",
          "stageTitles": "5-Star Performer | Chart-Topping Artist | Voice Artist",
          "artistBio": "Hello, my name is Vishal Mishra, a passionate musician creating soulful melodies.",
          "artistPhoto": "https://c.saavncdn.com/artists/Vishal_Mishra_004_20230804115745_500x500.jpg",
          "gradientStart": "#0bf9b2",
          "gradientEnd": "#f1ce09"
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["performances", "videos", "songsSale", "merchandise", "messages", "support"];
      let currentActiveTab = activeTab;

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();

          const isSectionVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;

          const isLastSection = sectionId === "support" && rect.top < window.innerHeight && rect.bottom > 0;
          const isSecondLastSection = sectionId === "messages" && rect.top < window.innerHeight && rect.bottom > 0;

          if (isSectionVisible || isLastSection || isSecondLastSection) {
            currentActiveTab = sectionId;
          }
        }
      });

      setActiveTab(currentActiveTab);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!landingPageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-96">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <Music className="w-12 h-12 mx-auto text-gray-400 animate-pulse" />
              <div className="text-lg font-semibold">Loading artist profile...</div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const { artistPage, performances, merchandise, songSales, musicVideos, fanMessages, supportPage, musicPlatformLinks } = landingPageData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navbar */}
      <nav id="navbar" className="fixed top-0 w-full z-50 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 bg-opacity-80 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo or Username */}
          <h2 className="font-bold text-2xl text-white flex items-center gap-2">
            <Avatar className="w-10 h-10">
              <AvatarImage src={profileImage} alt="Profile" />
              <AvatarFallback className="bg-gradient-to-br from-purple-600 to-blue-600">
                {username[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            @{username}
          </h2>

          {/* Tabs for Larger Screens */}
          <Tabs value={activeTab} className="hidden md:flex items-center gap-4">
            <TabsList className="bg-black/20 p-1 rounded-lg">
              <TabsTrigger value="performances" onClick={() => scrollToSection('performances')} className="flex items-center gap-2 text-white hover:text-yellow-400 transition">
                <Music className="w-4 h-4" /> Performances
              </TabsTrigger>
              <TabsTrigger value="videos" onClick={() => scrollToSection('videos')} className="flex items-center gap-2 text-white hover:text-yellow-400 transition">
                <Video className="w-4 h-4" /> Videos
              </TabsTrigger>
              <TabsTrigger value="songsSale" onClick={() => scrollToSection('songsSale')} className="flex items-center gap-2 text-white hover:text-yellow-400 transition">
                <Music className="w-4 h-4" /> Songs
              </TabsTrigger>
              <TabsTrigger value="merchandise" onClick={() => scrollToSection('merchandise')} className="flex items-center gap-2 text-white hover:text-yellow-400 transition">
                <Package className="w-4 h-4" /> Merch
              </TabsTrigger>
              <TabsTrigger value="messages" onClick={() => scrollToSection('messages')} className="flex items-center gap-2 text-white hover:text-yellow-400 transition">
                <MessageSquare className="w-4 h-4" /> Messages
              </TabsTrigger>
              <TabsTrigger value="support" onClick={() => scrollToSection('support')} className="flex items-center gap-2 text-white hover:text-yellow-400 transition">
                <Heart className="w-4 h-4" /> Support
              </TabsTrigger>
            </TabsList>
          </Tabs>

        </div>
      </nav>
      {/* Main Content */}
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        {/* Enhanced Profile Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <Avatar className="w-48 h-48 ring-4 ring-white/10 shadow-2xl">
              <AvatarImage src={profileImage} alt="Profile" className="object-cover" />
              <AvatarFallback className="bg-gradient-to-br from-purple-600 to-blue-600">
                {username[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
          <h1 className="mt-6 text-4xl font-bold text-white">{artistPage.artistName}</h1>
          <Badge variant="secondary" className="mt-4 px-4 py-1 text-white text-lg bg-white/10 hover:bg-white/20">
            {artistPage.stageTitles}
          </Badge>

          {/* Enhanced Social Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {musicPlatformLinks.map((link) => (
              <Button
                key={link.musicPlatform}
                variant="ghost"
                className="bg-white/5 text-white rounded-full p-6 text-lg"
                onClick={() => link.url && window.open(link.url, '_blank')}
              >
                <img
                  src={link.icon}
                  alt={link.musicPlatform}
                  className="w-8 h-8 object-contain mr-3"
                />
                <span>{link.musicPlatform}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* About Section */}
        <Card className="mb-16 bg-white/5 text-white border-none">
          <CardHeader>
            <CardTitle className="text-2xl">About</CardTitle>
            <CardDescription className="text-gray-300 text-lg">
              {artistPage.artistBio}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Enhanced Sections */}
        <ScrollArea className="h-full">
          {/* Videos Section */}
          <section id="videos" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Music Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {musicVideos.map((video) => (
                <Card
                  key={video.videoId}
                  className="group bg-white/5 hover:bg-white/10 transition-all duration-300 border-none overflow-hidden"
                  onClick={() => window.open(video.redirectURL, '_blank')}
                >
                  <div className="relative aspect-video">
                    <img
                      src={video.imageURL}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 p-4 w-full">
                      <h3 className="text-xl font-bold text-white">{video.title}</h3>
                      <p className="text-gray-200 mt-2">{video.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Performances Section */}
          <section id="performances" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Performances</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {performances.map((perf) => (
                <Card key={perf.performanceId} className="bg-white/5 hover:bg-white/10 transition-all duration-300 border-none">
                  <CardHeader>
                    <CardTitle className="text-white">{perf.eventTitle}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {perf.description}
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div className="bg-white/10 p-3 rounded-lg">
                          <p className="text-sm text-gray-400">Duration</p>
                          <p className="text-lg text-white">{perf.durationMinutes} mins</p>
                        </div>
                        <div className="bg-white/10 p-3 rounded-lg">
                          <p className="text-sm text-gray-400">Price</p>
                          <p className="text-lg text-white">${perf.ticketPrice}</p>
                        </div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-white/10 hover:bg-white/20 text-white">
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Songs Sale Section */}
          <section id="songsSale" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Songs for Sale</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {songSales.map((song) => (
                <Card
                  key={song.songId}
                  className="bg-white/5 hover:bg-white/10 transition-all duration-300 border-none overflow-hidden"
                >
                  <div className="relative h-48">
                    <img
                      src={song.imageURL}
                      alt={song.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">{song.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {song.description}
                      <div className="mt-2">
                        <span className="text-white">{song.priceType}</span>
                        {song.price && <span className="text-white ml-2">${song.price}</span>}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-white/10 hover:bg-white/20 text-white">
                      View Songs
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Merchandise Section */}
          <section id="merchandise" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Merchandise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {merchandise.map((merc) => (
                <Card
                  key={merc.merchId}
                  className="bg-white/5 hover:bg-white/10 transition-all duration-300 border-none overflow-hidden"
                >
                  <div className="relative h-48">
                    <img
                      src={merc.imageURL}
                      alt={merc.merchName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">{merc.merchName}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {merc.merchDescription}
                      <div className="mt-2">
                        <span className="text-white">Price: ${merc.price}</span>
                        <span className="text-gray-400 ml-2">({merc.merchType})</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-white/10 hover:bg-white/20 text-white">
                      View Bundle
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Messages Section */}
          {fanMessages && (
            <section id="messages" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Fan Messages</h2>
              <Card className="bg-white/5 border-none">
                <CardHeader>
                  <CardTitle className="text-white">{fanMessages.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {fanMessages.description}
                    <div className="mt-2">
                      <span className="text-white">Reply Time: {fanMessages.promisedReplyTime} hours</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="bg-white/10 hover:bg-white/20 text-white">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </section>
          )}

          {/* Support Section */}
          {supportPage && (
            <section id="support" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Support Me</h2>
              <Card className="bg-white/5 border-none">
                <CardHeader>
                  <CardTitle className="text-white">{supportPage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="bg-white/10 hover:bg-white/20 text-white">
                    Support
                  </Button>
                </CardContent>
              </Card>
            </section>
          )}
        </ScrollArea>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPageView2;