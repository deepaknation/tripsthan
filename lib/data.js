import { img } from "./images";

export const C = {
  phones: ["+91 7982625081", "+91 9953458949"],
  emails: ["Sonucarrentals@gmail.com", "Tripsthan@gmail.com"],
  address: "Agra, Uttar Pradesh, India",
};

export const tel = (p) => "tel:" + p.replace(/\s/g, "");
export const wa = "https://wa.me/917982625081";

export const packages = [
  // 1. Old & New Delhi Day Tour
  {
    slug: "old-new-delhi-day-tour",
    title: "Old & New Delhi Day Tour",
    days: 1,
    duration: "Full Day Tour",
    price: "On request",
    tag: "Cultural",
    category: "Day Tours",
    reg: "Delhi",
    imgKey: "gate",
    overview:
      "Explore the fascinating contrast between ancient and modern India on this full-day Old and New Delhi tour. In just one day, discover the narrow lanes and Mughal-era monuments of Old Delhi alongside the grand boulevards and colonial-era landmarks of New Delhi. Booked through a trusted delhi tour agency, this private, guided day trip is one of our most popular delhi tour packages for travelers wanting a complete introduction to the capital in a single day.\n\nTravel comfortably throughout in a private, air-conditioned vehicle with an experienced driver and knowledgeable local guide.",
    highlights: [
      "Full-day private tour covering both Old and New Delhi",
      "Jama Masjid, Red Fort, and Chandni Chowk",
      "Optional rickshaw ride through Old Delhi's markets",
      "India Gate and Rashtrapati Bhavan",
      "Humayun's Tomb and Qutub Minar",
      "Optional visit to Lotus Temple",
      "Private air-conditioned car with an experienced driver",
      "Knowledgeable local guide throughout the day",
      "Flexible pickup and drop-off options",
    ],
    itinerary: [
      {
        day: "Morning",
        title: "Morning: Old Delhi Sightseeing",
        desc: "Your day begins with pickup from your hotel, the airport, or another convenient location in Delhi. Head first into the vibrant heart of Old Delhi, where centuries of history come alive in every street.",
        points: [
          "Jama Masjid – one of India's largest and most magnificent mosques",
          "Red Fort – the imposing Mughal fortress and UNESCO World Heritage Site",
          "Chandni Chowk – Old Delhi's legendary market, alive with narrow lanes, street food, and centuries-old shops",
          "Raj Ghat – the peaceful memorial dedicated to Mahatma Gandhi",
          "For a truly local experience, enjoy an optional rickshaw ride through the bustling bylanes of Chandni Chowk.",
        ],
        overnight: "Day Tour – No Overnight Required",
      },
      {
        day: "Afternoon",
        title: "Afternoon: New Delhi Sightseeing",
        desc: "After lunch, continue into New Delhi to explore the city's grander, more spacious side, concluding with seamless drop-off at your hotel or the airport.",
        points: [
          "India Gate – Delhi's iconic war memorial",
          "Rashtrapati Bhavan – the majestic Presidential Palace, viewed along the ceremonial Rajpath",
          "Humayun's Tomb – a stunning UNESCO World Heritage Mughal garden-tomb",
          "Qutub Minar – the tallest brick minaret in the world, surrounded by centuries-old ruins",
          "Lotus Temple – a serene, lotus-shaped Bahá'í House of Worship, time permitting",
        ],
        overnight: "Drop-off at your hotel, airport, or chosen location in Delhi",
      },
    ],
    conclusion:
      "Looking for a reliable delhi tour agency to handle every detail of your day trip? This Old and New Delhi tour is one of our most well-rounded delhi tour packages, designed for comfort, flexibility, and a genuine feel for the capital's rich history — all in a single, well-planned day.",
  },

  // 2. Jaipur Day Tour – Full-Day Sightseeing Itinerary
  {
    slug: "jaipur-day-tour",
    title: "Jaipur Day Tour – Full-Day Sightseeing Itinerary",
    days: 1,
    duration: "Full Day Tour",
    price: "On request",
    tag: "Cultural",
    category: "Day Tours",
    reg: "Rajasthan",
    imgKey: "amber",
    overview:
      "Discover the best of Rajasthan's capital on this comprehensive jaipur city tour, covering the Pink City's most iconic palaces, forts, and landmarks in a single, well-organized day. This private jaipur sightseeing tour takes you through centuries of royal history, from hilltop forts to bustling old-city bazaars, offering a complete introduction to Jaipur's rich heritage.\n\nPerfect for travelers with limited time, this day tour combines comfort and flexibility, with a private air-conditioned vehicle, an experienced driver, and a knowledgeable local guide throughout the day.",
    highlights: [
      "Amber Palace with panoramic hilltop views",
      "Hawa Mahal, the Palace of Winds",
      "Jal Mahal photo stop on Man Sagar Lake",
      "Jantar Mantar astronomical observatory",
      "City Palace and its royal museums",
      "Pink City walking or rickshaw experience",
      "Private air-conditioned car with an experienced driver",
      "Knowledgeable local guide throughout the day",
      "Flexible pickup and drop-off options",
    ],
    itinerary: [
      {
        day: "Morning",
        title: "Morning: Amber Palace, Hawa Mahal & Jal Mahal",
        desc: "Your day begins with pickup from your hotel in Jaipur. Start the morning with a visit to Amber Palace, a magnificent hilltop fort blending Rajput and Mughal architecture, offering sweeping views over the surrounding hills and Maota Lake. Continue to the Hawa Mahal, Jaipur's iconic 'Palace of Winds,' known for its honeycomb-like façade of intricately latticed windows. Stop for a photo at Jal Mahal, the striking palace that appears to float at the center of Man Sagar Lake.",
        points: [
          "Amber Palace hilltop fort exploration with panoramic lake views",
          "Hawa Mahal iconic honeycomb facade photo stop",
          "Jal Mahal floating water palace on Man Sagar Lake",
        ],
        overnight: "Jaipur City Tour",
      },
      {
        day: "Afternoon",
        title: "Afternoon: Jantar Mantar, City Palace & Pink City Bazaars",
        desc: "Proceed to Jantar Mantar, a UNESCO World Heritage astronomical observatory featuring a fascinating collection of massive stone instruments. Visit the City Palace, the former royal residence of Jaipur's maharajas, home to museums, courtyards, and stunning architecture that blends Rajasthani and Mughal styles. In the afternoon, explore the vibrant streets of the old Pink City on foot or by rickshaw, browsing local markets known for textiles, jewelry, and handicrafts, and soaking in the everyday rhythm of city life beyond the monuments. Your Jaipur day tour concludes with drop-off at your hotel or another location of your choice.",
        points: [
          "Jantar Mantar UNESCO World Heritage astronomical observatory",
          "City Palace royal museums and courtyards",
          "Pink City walking or classic rickshaw shopping tour",
        ],
        overnight: "Drop-off at your hotel or location of choice in Jaipur",
      },
    ],
    conclusion:
      "Looking for a complete jaipur city tour that covers all the must-see highlights in a single day? This well-paced jaipur sightseeing tour is ideal for travelers wanting to experience the best of the Pink City without an overnight stay.",
  },

  // 3. 7 Days Golden Triangle Tour with Varanasi
  {
    slug: "7-day-golden-triangle-varanasi",
    title: "7 Days Golden Triangle Tour with Varanasi",
    days: 7,
    duration: "7 Days / 6 Nights",
    price: "On request",
    tag: "Spiritual",
    category: "Golden Triangle",
    reg: "Uttar Pradesh",
    imgKey: "varanasi",
    overview:
      "Combine India's most iconic monuments with the deep spirituality of the holy city of Varanasi on this 7-day journey through Delhi, Jaipur, Agra, Lucknow, and Varanasi. This golden triangle tour delhi itinerary blends royal palaces, Mughal architecture, and vibrant city life with the profound spiritual atmosphere of the Ganges' oldest city.\n\nAs one of our most complete golden triangle tour india packages, this journey goes beyond the classic circuit to include the Nawabi charm of Lucknow and an unforgettable varanasi spiritual tour, offering travelers a well-rounded experience of both India's royal heritage and its ancient religious traditions.\n\nTravel comfortably throughout in a private, air-conditioned vehicle with an experienced driver, and enjoy local guides at each destination.",
    highlights: [
      "Complete Jaipur, Agra, Lucknow, and Varanasi circuit",
      "Amber Palace, Hawa Mahal, Jal Mahal, and City Palace in Jaipur",
      "Taj Mahal and Agra Fort",
      "Nawabi heritage of Lucknow – Bara Imambara and Rumi Darwaza",
      "Evening Ganga Aarti ceremony in Varanasi",
      "Optional sunrise boat ride on the Ganges",
      "Private air-conditioned car with an experienced driver throughout",
      "Local guides available at each destination",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Day 1: Delhi to Jaipur",
        desc: "Your journey begins with a private drive from Delhi to Jaipur, the Pink City. On arrival, check into your hotel and spend the evening at leisure, taking in your first glimpse of Rajasthan's vibrant culture.",
        overnight: "Jaipur",
      },
      {
        day: "Day 2",
        title: "Day 2: Jaipur Sightseeing",
        desc: "Explore Jaipur's most celebrated landmarks, including Amber Palace, Hawa Mahal, Jal Mahal, Jantar Mantar, and City Palace, along with the vibrant markets of the old city.",
        overnight: "Jaipur",
      },
      {
        day: "Day 3",
        title: "Day 3: Jaipur to Agra",
        desc: "Drive to Agra, home of the iconic Taj Mahal. On arrival, visit the breathtaking Taj Mahal and the magnificent Agra Fort, exploring centuries of Mughal history and architecture.",
        overnight: "Agra",
      },
      {
        day: "Day 4",
        title: "Day 4: Agra to Lucknow",
        desc: "Drive to Lucknow, the city of Nawabs, known for its refined culture, Awadhi cuisine, and elegant architecture. Explore highlights such as the Bara Imambara, Chota Imambara, and Rumi Darwaza.",
        overnight: "Lucknow",
      },
      {
        day: "Day 5",
        title: "Day 5: Lucknow to Varanasi",
        desc: "Drive or transfer to Varanasi, one of the world's oldest continuously inhabited cities and among the holiest places in Hinduism. In the evening, witness the mesmerizing Ganga Aarti ceremony along the ghats of the Ganges.",
        overnight: "Varanasi",
      },
      {
        day: "Day 6",
        title: "Day 6: Varanasi Sightseeing",
        desc: "Rise early for an optional boat ride on the Ganges at sunrise, watching pilgrims perform their morning rituals along the ghats. Spend the day exploring Varanasi's ancient temples, narrow lanes, and the spiritual energy that has drawn pilgrims here for centuries.",
        overnight: "Varanasi",
      },
      {
        day: "Day 7",
        title: "Day 7: Departure",
        desc: "After breakfast, check out and transfer to the airport or railway station for your onward journey, concluding your 7-day Golden Triangle and Varanasi tour.",
        overnight: "Onward Journey / Airport Drop-off",
      },
    ],
    conclusion:
      "Looking for a complete golden triangle tour india packages experience that goes beyond monuments into spirituality? This golden triangle tour delhi itinerary, paired with an immersive varanasi spiritual tour, is ideal for travelers wanting to experience both India's royal heritage and its ancient religious traditions in one well-paced journey.",
  },

  // 4. 12 Days Himachal & Amritsar Tour
  {
    slug: "12-day-himachal-amritsar",
    title: "12 Days Himachal & Amritsar Tour",
    days: 12,
    duration: "12 Days / 11 Nights",
    price: "On request",
    tag: "Adventure",
    category: "Himachal & Mountains",
    reg: "Himachal",
    imgKey: "golden",
    overview:
      "Discover the best of North India's mountains and spirituality on this comprehensive 12-day journey through Delhi, Shimla, Manali, Dharamshala, Amritsar, and Chandigarh. This well-rounded himachal amritsar tour package takes you from the colonial charm of Shimla to the adventure-filled valleys of Manali, the peaceful Tibetan culture of Dharamshala, and the deeply moving Golden Temple in Amritsar.\n\nThis extensive shimla manali dharamshala tour is perfect for travelers who want more than just a quick hill station getaway — it offers a deeper, unhurried exploration of Himachal Pradesh combined with an unforgettable amritsar golden temple tour experience. Ideal for those seeking a complete north india hill station tour, this itinerary balances scenic mountain towns with cultural and spiritual highlights.\n\nTravel comfortably throughout in a private, air-conditioned vehicle with an experienced driver.",
    highlights: [
      "Complete Shimla, Manali, Dharamshala, Amritsar, and Chandigarh circuit",
      "Shimla's Mall Road, Ridge, Christ Church, and Jakhoo Temple",
      "Old Manali, Hadimba Temple, and optional Solang Valley or Rohtang Pass excursion",
      "Dharamshala's Tibetan culture – Tsuglagkhang Complex and McLeod Ganj",
      "Golden Temple, Jallianwala Bagh, and the Wagah Border ceremony in Amritsar",
      "Stopover in Chandigarh on the return journey",
      "Private air-conditioned car with an experienced driver throughout",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Day 1: Arrival in Delhi",
        desc: "Arrive in Delhi and check into your hotel. Depending on your arrival time, spend the day at leisure preparing for your journey into the mountains.",
        overnight: "Delhi",
      },
      {
        day: "Day 2",
        title: "Day 2: Drive to Shimla",
        desc: "Drive from Delhi to Shimla, the former summer capital of British India. On arrival, check into your hotel and enjoy the cool mountain air and colonial charm of the town.",
        overnight: "Shimla",
      },
      {
        day: "Day 3",
        title: "Day 3: Shimla Sightseeing",
        desc: "Spend the day exploring Shimla's most popular attractions, including the Mall Road, Ridge, Christ Church, and Jakhoo Temple, along with panoramic views of the surrounding hills.",
        overnight: "Shimla",
      },
      {
        day: "Day 4",
        title: "Day 4: Drive to Manali",
        desc: "After breakfast, drive to Manali through scenic valleys and riverside roads. Check into your hotel on arrival and spend the evening relaxing amid the mountain surroundings.",
        overnight: "Manali",
      },
      {
        day: "Day 5",
        title: "Day 5: Manali Sightseeing",
        desc: "Explore Manali's natural beauty and popular sights, including Hadimba Temple, Old Manali, and the Mall Road, along with the town's laid-back cafes and mountain views.",
        overnight: "Manali",
      },
      {
        day: "Day 6",
        title: "Day 6: Manali – Leisure Day / Excursions",
        desc: "Spend another day in Manali, with time for optional excursions such as Solang Valley or Rohtang Pass (subject to weather and road conditions), known for their adventure activities and stunning Himalayan scenery.",
        overnight: "Manali",
      },
      {
        day: "Day 7",
        title: "Day 7: Drive to Dharamshala",
        desc: "Drive from Manali to Dharamshala, home to a significant Tibetan community and the residence of His Holiness the Dalai Lama. Check into your hotel and enjoy the peaceful surroundings.",
        overnight: "Dharamshala",
      },
      {
        day: "Day 8",
        title: "Day 8: Dharamshala Sightseeing",
        desc: "Spend the day exploring Dharamshala and McLeod Ganj, including the Tsuglagkhang Complex, Namgyal Monastery, and the Tibet Museum, gaining insight into Tibetan culture and its community in exile.",
        overnight: "Dharamshala",
      },
      {
        day: "Day 9",
        title: "Day 9: Drive to Amritsar",
        desc: "Drive from Dharamshala to Amritsar, home to the revered Golden Temple. On arrival, check into your hotel and, in the evening, witness the moving Wagah Border ceremony at the India-Pakistan border.",
        overnight: "Amritsar",
      },
      {
        day: "Day 10",
        title: "Day 10: Amritsar Sightseeing",
        desc: "Spend the day exploring Amritsar's spiritual and historical sites, including the Golden Temple, Jallianwala Bagh, and the surrounding markets of the old city.",
        overnight: "Amritsar",
      },
      {
        day: "Day 11",
        title: "Day 11: Drive to Chandigarh",
        desc: "Drive from Amritsar to Chandigarh, India's well-planned city known for its modern architecture and greenery. Spend the evening at leisure exploring the city.",
        overnight: "Chandigarh",
      },
      {
        day: "Day 12",
        title: "Day 12: Drive Back to Delhi",
        desc: "After breakfast, check out and drive back to Delhi. Your 12-day Himachal and Amritsar tour concludes with drop-off at your hotel, the airport, or another location of your choice.",
        overnight: "Delhi Drop-off / Tour Concludes",
      },
    ],
    conclusion:
      "Looking for a comprehensive shimla manali dharamshala tour that also includes the unforgettable amritsar golden temple tour experience? This 12-day journey is ideal for travelers wanting an in-depth exploration of Himachal Pradesh's hill stations along with the rich history and spirituality of Punjab, all in one well-paced himachal amritsar tour package.",
  },

  // 5. 10 Days Rajasthan Tour – Royal Palaces, Forts & Desert Experience
  {
    slug: "10-day-rajasthan-tour",
    title: "10 Days Rajasthan Tour – Royal Palaces, Forts & Desert Experience",
    days: 10,
    duration: "10 Days / 9 Nights",
    price: "On request",
    tag: "Cultural",
    category: "Rajasthan Heritage",
    reg: "Rajasthan",
    imgKey: "hawa",
    overview:
      "Journey through the heart of India's most colorful state on this comprehensive 10 days rajasthan tour, covering Agra, Jaipur, Bikaner, Jaisalmer, Jodhpur, and Udaipur. This carefully paced itinerary is one of the most complete rajasthan tour packages available, blending Mughal heritage, desert forts, vibrant bazaars, and the romance of royal lake palaces.\n\nDesigned with comfort and immersion in mind, this journey also works beautifully as one of our rajasthan luxury tours, with the flexibility to upgrade accommodations to heritage havelis and palace hotels along the way. From the golden dunes of Jaisalmer to the lakeside charm of Udaipur, every stop reveals a different face of Rajasthan's royal legacy.\n\nTravel comfortably throughout in a private, air-conditioned vehicle with an experienced driver, and enjoy local guides at each destination.",
    highlights: [
      "Complete Agra, Jaipur, Bikaner, Jaisalmer, Jodhpur, and Udaipur circuit",
      "Taj Mahal and Agra Fort",
      "Amber Palace, Hawa Mahal, Jal Mahal, and City Palace in Jaipur",
      "Junagarh Fort in Bikaner",
      "Jaisalmer Fort, havelis, and optional desert camel safari",
      "Mehrangarh Fort in Jodhpur, the Blue City",
      "City Palace, Jagdish Temple, and Lake Pichola in Udaipur",
      "Flexible onward departure to Mumbai, Goa, or a destination of your choice",
      "Private air-conditioned car with an experienced driver throughout",
      "Local guides available at every destination",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Day 1: Delhi to Agra",
        desc: "Drive from Delhi to Agra, home of the iconic Taj Mahal. On arrival, check into your hotel and prepare for a day of sightseeing ahead.",
        overnight: "Agra",
      },
      {
        day: "Day 2",
        title: "Day 2: Agra to Jaipur",
        desc: "Visit the Taj Mahal and Agra Fort before driving onward to Jaipur, the Pink City. Check into your hotel on arrival and spend the evening at leisure.",
        overnight: "Jaipur",
      },
      {
        day: "Day 3",
        title: "Day 3: Jaipur Sightseeing",
        desc: "Explore Jaipur's most celebrated landmarks, including Amber Palace, Hawa Mahal, Jal Mahal, Jantar Mantar, and City Palace, along with the vibrant markets of the old city.",
        overnight: "Jaipur",
      },
      {
        day: "Day 4",
        title: "Day 4: Jaipur to Bikaner",
        desc: "Drive to Bikaner, a desert city known for its majestic Junagarh Fort and rich Rajputana heritage. Check into your hotel and explore the city's forts, havelis, and bustling local markets.",
        overnight: "Bikaner",
      },
      {
        day: "Day 5",
        title: "Day 5: Bikaner to Jaisalmer",
        desc: "Drive to Jaisalmer, the Golden City, rising from the Thar Desert. Check into your hotel and enjoy the evening amid the city's sandstone architecture and desert charm.",
        overnight: "Jaisalmer",
      },
      {
        day: "Day 6",
        title: "Day 6: Jaisalmer Sightseeing",
        desc: "Explore the magnificent Jaisalmer Fort, intricately carved havelis such as Patwon Ki Haveli, and the surrounding sand dunes. Enjoy an optional camel safari or desert camp experience for a taste of Rajasthan's iconic landscape.",
        overnight: "Jaisalmer",
      },
      {
        day: "Day 7",
        title: "Day 7: Jaisalmer to Jodhpur",
        desc: "Drive to Jodhpur, the Blue City, known for its striking indigo-hued old town. Visit the imposing Mehrangarh Fort and explore the winding lanes of the old city.",
        overnight: "Jodhpur",
      },
      {
        day: "Day 8",
        title: "Day 8: Jodhpur to Udaipur",
        desc: "Drive to Udaipur, the City of Lakes and one of Rajasthan's most romantic destinations. Check into your hotel and enjoy the serene lakeside views in the evening.",
        overnight: "Udaipur",
      },
      {
        day: "Day 9",
        title: "Day 9: Udaipur Sightseeing",
        desc: "Explore Udaipur's iconic sights, including the City Palace, Jagdish Temple, and Saheliyon Ki Bari. Enjoy an optional boat ride on Lake Pichola, taking in views of the Lake Palace and the city's romantic skyline.",
        overnight: "Udaipur",
      },
      {
        day: "Day 10",
        title: "Day 10: Departure",
        desc: "After breakfast, check out and transfer to Udaipur Airport for your onward flight to Mumbai, Goa, or your next chosen destination, concluding your 10-day Rajasthan tour.",
        overnight: "Udaipur Airport / Onward Journey",
      },
    ],
    conclusion:
      "Looking for one of the most complete rajasthan tour packages covering both heritage cities and the desert circuit? This 10 days rajasthan tour is ideal for travelers wanting an in-depth, well-paced journey through Rajasthan's forts, palaces, and vibrant culture, with the flexibility to end your trip in Mumbai, Goa, or anywhere else you choose.",
  },

  // 6. 7 Days Golden Triangle Tour with Pushkar
  {
    slug: "7-day-golden-triangle-pushkar",
    title: "7 Days Golden Triangle Tour with Pushkar",
    days: 7,
    duration: "7 Days / 6 Nights",
    price: "On request",
    tag: "Cultural",
    category: "Golden Triangle",
    reg: "Rajasthan",
    imgKey: "amber",
    overview:
      "Experience the best of North India's iconic monuments along with the spiritual charm of Rajasthan on this golden triangle tour with pushkar. This private journey takes you through Delhi, Agra, and Jaipur before concluding with a peaceful visit to Pushkar, one of Hinduism's holiest towns, known for its sacred lake and vibrant bazaars.\n\nAs one of our most complete golden triangle India tours, this itinerary is ideal for travelers who want to go beyond the classic circuit and add a touch of spirituality and small-town charm to their trip. Offered as a golden triangle private tour, it gives you full flexibility and comfort throughout the journey.\n\nTravel comfortably throughout in a private, air-conditioned vehicle with an experienced driver, and enjoy local guides at each destination.",
    highlights: [
      "Complete Delhi, Agra, Jaipur, and Pushkar circuit",
      "India Gate, Rashtrapati Bhavan, Humayun's Tomb, and Qutub Minar",
      "Agra Fort and the Taj Mahal",
      "Fatehpur Sikri, the deserted Mughal city",
      "Amber Palace, Hawa Mahal, Jal Mahal, and City Palace in Jaipur",
      "Sacred Pushkar Lake and the iconic Brahma Temple",
      "Pushkar's colorful bazaars and local markets",
      "Private air-conditioned car with an experienced driver throughout",
      "Local guides available in Delhi, Agra, and Jaipur",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Day 1: Delhi Sightseeing",
        desc: "Begin your tour with a day of sightseeing in Delhi, covering iconic landmarks such as India Gate, Rashtrapati Bhavan, Humayun's Tomb, Qutub Minar, and Jama Masjid, depending on time and interest.",
        overnight: "Delhi",
      },
      {
        day: "Day 2",
        title: "Day 2: Delhi to Agra",
        desc: "Drive by private, air-conditioned car to Agra. On arrival, visit the magnificent Agra Fort followed by the breathtaking Taj Mahal, spending time to admire its architecture and gardens.",
        overnight: "Agra",
      },
      {
        day: "Day 3",
        title: "Day 3: Agra to Jaipur via Fatehpur Sikri",
        desc: "After breakfast, check out and drive toward Jaipur. En route, stop at Fatehpur Sikri, the abandoned Mughal capital known for its striking red sandstone architecture and monumental gateways.",
        overnight: "Jaipur",
      },
      {
        day: "Day 4",
        title: "Day 4: Jaipur Sightseeing",
        desc: "Explore Jaipur's most celebrated landmarks, including Amber Palace, Hawa Mahal, Jal Mahal, Jantar Mantar, and City Palace, along with the vibrant markets of the Pink City.",
        overnight: "Jaipur",
      },
      {
        day: "Day 5",
        title: "Day 5: Jaipur to Pushkar",
        desc: "Drive from Jaipur to Pushkar, a serene town on the edge of the Thar Desert, revered as one of Hinduism's holiest pilgrimage sites. Check into your hotel and enjoy the peaceful surroundings of the sacred lake town.",
        overnight: "Pushkar",
      },
      {
        day: "Day 6",
        title: "Day 6: Pushkar Sightseeing",
        desc: "Spend the day exploring Pushkar's spiritual sites, including the sacred Pushkar Lake and its ghats, along with the famous Brahma Temple, one of the few temples in the world dedicated to Lord Brahma. Explore the town's colorful bazaars, known for their handicrafts, textiles, and vibrant street life.",
        overnight: "Pushkar",
      },
      {
        day: "Day 7",
        title: "Day 7: Drive Back to Delhi",
        desc: "After breakfast, check out and drive back to Delhi. Your Golden Triangle tour with Pushkar concludes with drop-off at your hotel, the airport, or another location of your choice.",
        overnight: "Delhi Drop-off / Tour Concludes",
      },
    ],
    conclusion:
      "Looking for one of the most complete golden triangle India tours available? This golden triangle tour with pushkar blends must-see heritage sightseeing with the sacred beauty of Pushkar, perfect for travelers wanting heritage and spirituality in one trip.",
  },

  // 7. Same Day Taj Mahal Tour from Delhi
  {
    slug: "same-day-taj-mahal-tour",
    title: "Same Day Taj Mahal Tour from Delhi",
    days: 1,
    duration: "Same Day Return",
    price: "₹8,500",
    tag: "Cultural",
    category: "Day Tours",
    reg: "Uttar Pradesh",
    imgKey: "taj2",
    overview:
      "Experience the wonder of the Taj Mahal without an overnight stay on this taj mahal tour from Delhi. Perfect for travelers with limited time, this private day trip takes you to Agra and back in a single day, covering the city's most iconic monuments in comfort.\n\nThis well-organized agra city tour is ideal for those who want to witness one of the Seven Wonders of the World along with Agra's rich Mughal heritage, all without the need for an overnight hotel stay. Travel throughout in a private, air-conditioned vehicle with an experienced driver.",
    highlights: [
      "Private same-day round trip from Delhi to Agra",
      "Guided visit to the Taj Mahal",
      "Agra Fort with views of the Taj Mahal",
      "Comfortable private air-conditioned car with an experienced driver",
      "Knowledgeable local guide in Agra",
      "Lunch and time for local shopping",
      "Flexible pickup and drop-off options",
      "No overnight stay required",
    ],
    itinerary: [
      {
        day: "Early Morning",
        title: "Early Pickup & Private Drive to Agra",
        desc: "Your day begins early with pickup from your hotel, airport, or another convenient location in Delhi. Drive by private, air-conditioned car to Agra, a journey of approximately 3 to 4 hours depending on traffic.",
        overnight: "Day Trip from Delhi",
      },
      {
        day: "Morning & Afternoon",
        title: "Guided Taj Mahal & Agra Fort Sightseeing",
        desc: "On arrival in Agra, visit the breathtaking Taj Mahal with a knowledgeable local guide, learning about its history and remarkable architecture as you explore the monument and its gardens. From there, continue to Agra Fort, an impressive Mughal-era fortress known for its stunning views of the Taj Mahal and centuries of rich history.",
        overnight: "Agra Sightseeing",
      },
      {
        day: "Evening",
        title: "Lunch, Shopping & Return Drive to Delhi",
        desc: "Enjoy lunch at a local restaurant before some free time for shopping in Agra's markets. Once your sightseeing is complete, begin your drive back to Delhi, with drop-off at your hotel, airport, or another location of your choice.",
        overnight: "Drop-off at your Delhi hotel, airport, or desired location",
      },
    ],
    conclusion:
      "Short on time but don't want to miss the Taj Mahal? This same-day taj mahal tour is a perfect, hassle-free option for travelers looking to combine a complete agra city tour with a quick return to Delhi, all in a single, well-organized day.",
  },

  // 8. 7 Days Golden Triangle with Jungle Tour
  {
    slug: "7-day-golden-triangle-jungle",
    title: "7 Days Golden Triangle with Jungle Tour",
    days: 7,
    duration: "7 Days / 6 Nights",
    price: "₹18,500",
    tag: "Wildlife",
    category: "Wildlife",
    reg: "Rajasthan",
    imgKey: "tiger",
    overview:
      "Combine India's most iconic monuments with an exciting wildlife adventure on this 7-day journey through Delhi, Agra, Bharatpur, Ranthambore, and Jaipur. This golden triangle tour ranthambore itinerary blends royal palaces, Mughal architecture, and vibrant city life with the thrill of spotting tigers in the wild. It is one of the most complete tour package for ranthambore options available, pairing classic heritage sightseeing with an unforgettable jungle safari experience.\n\nTravel comfortably throughout in a private, air-conditioned vehicle with an experienced driver, and enjoy local guides at each destination for a relaxed, well-paced trip.",
    highlights: [
      "Complete Delhi, Agra, Bharatpur, Ranthambore, and Jaipur circuit",
      "Half-day Delhi tour covering major landmarks",
      "Taj Mahal and Agra Fort",
      "Bharatpur Bird Sanctuary en route to Ranthambore",
      "Full-day tiger safari in Ranthambore National Park",
      "Amber Palace, Hawa Mahal, Jal Mahal, City Palace, and Jantar Mantar",
      "Jaipur's Pink City walking or rickshaw experience",
      "Private air-conditioned car with an experienced driver throughout",
      "Local guides available in Delhi, Agra, and Jaipur",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Day 1: Half-Day Delhi Tour & Drive to Agra",
        desc: "Start your morning with a half-day tour of Delhi, covering some of the city's most iconic landmarks such as India Gate, Rashtrapati Bhavan, Humayun's Tomb, and Qutub Minar, depending on time. Afterward, drive by private, air-conditioned car to Agra. On arrival, check into your hotel and relax for the evening.",
        overnight: "Agra",
      },
      {
        day: "Day 2",
        title: "Day 2: Agra Sightseeing",
        desc: "Spend the day exploring Agra's most celebrated monuments. Visit the breathtaking Taj Mahal, one of the Seven Wonders of the World, followed by the magnificent Agra Fort, known for its Mughal-era architecture and history.",
        overnight: "Agra",
      },
      {
        day: "Day 3",
        title: "Day 3: Agra to Ranthambore via Bharatpur Bird Sanctuary",
        desc: "After breakfast, check out and drive toward Ranthambore. En route, stop at the Bharatpur Bird Sanctuary (Keoladeo National Park), a UNESCO World Heritage Site and one of the finest birdwatching destinations in India, home to hundreds of resident and migratory bird species. Continue the drive to Ranthambore and check into your hotel or jungle lodge in the evening.",
        overnight: "Ranthambore",
      },
      {
        day: "Day 4",
        title: "Day 4: Ranthambore Safari",
        desc: "Enjoy a full day at Ranthambore National Park with jeep or canter safaris in search of tigers, leopards, deer, crocodiles, and a wide variety of birdlife. This ranthambore safari tour day offers some of the best opportunities in India to spot a tiger in its natural habitat.",
        overnight: "Ranthambore",
      },
      {
        day: "Day 5",
        title: "Day 5: Drive to Jaipur",
        desc: "After breakfast, check out and drive to Jaipur, the Pink City. On arrival, check into your hotel and spend the evening at leisure.",
        overnight: "Jaipur",
      },
      {
        day: "Day 6",
        title: "Day 6: Jaipur Sightseeing",
        desc: "Explore the highlights of Jaipur, including Amber Palace, Hawa Mahal, Jal Mahal, Jantar Mantar, and City Palace. In the evening, take a walk or rickshaw ride through Jaipur's lively old-city markets and bazaars.",
        overnight: "Jaipur",
      },
      {
        day: "Day 7",
        title: "Day 7: Drive to Delhi",
        desc: "After breakfast, check out and drive back to Delhi. Your 7-day Golden Triangle and jungle safari tour concludes with drop-off at your hotel, the airport, or another location of your choice in Delhi.",
        overnight: "Delhi Drop-off / Tour Concludes",
      },
    ],
    conclusion:
      "Looking for a well-rounded golden triangle tour ranthambore experience that goes beyond monuments into the wild? This 7-day journey is ideal for travelers who want to pair India's cultural heritage with a genuine wildlife and birdwatching adventure, all in one seamless, private trip.",
  },

  // 9. 7 Days Golden Triangle & Rishikesh Tour – Spiritual India Experience
  {
    slug: "7-day-golden-triangle-rishikesh",
    title: "7 Days Golden Triangle & Rishikesh Tour – Spiritual India Experience",
    days: 7,
    duration: "7 Days / 6 Nights",
    price: "On request",
    tag: "Spiritual",
    category: "Spiritual & Ganga",
    reg: "Uttarakhand",
    imgKey: "peaks",
    overview:
      "Discover the perfect blend of royal heritage and spiritual serenity on this 7-day journey through Jaipur, Agra, Delhi, and Rishikesh. This golden triangle rishikesh tour takes you through India's most iconic monuments — the palaces of Jaipur, the timeless Taj Mahal, and the historic streets of Delhi — before leading you to Rishikesh, the world-renowned yoga capital nestled in the Himalayan foothills along the sacred Ganges River.\n\nIdeal for travelers from the USA, UK, Australia, South Africa, Malaysia, and across Europe, this golden triangle tour with rishikesh combines cultural sightseeing with a peaceful, rejuvenating escape — making it one of the most well-rounded india golden triangle yoga tour options available for first-time visitors to India.\n\nTravel throughout in a private, air-conditioned vehicle with an experienced driver, and enjoy knowledgeable local guides at every destination.",
    highlights: [
      "Complete Jaipur, Agra, Delhi, and Rishikesh circuit",
      "Amber Palace, Hawa Mahal, Jal Mahal, City Palace, and Jantar Mantar",
      "Taj Mahal and Agra Fort",
      "Half-day Delhi city tour covering major landmarks",
      "Old Delhi exploration – Jama Masjid, Chandni Chowk, and Red Fort",
      "Laxman Jhula, Ram Jhula, and the sacred Ganges riverside in Rishikesh",
      "Optional yoga, meditation, rafting, and Ganga Aarti in Rishikesh",
      "Private air-conditioned car with an experienced driver throughout",
      "Local guides available in Jaipur, Agra, and Delhi",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Day 1: Drive from Delhi to Jaipur",
        desc: "Your journey begins with a private drive from Delhi to Jaipur, the Pink City. On arrival, check into your hotel and spend the evening at leisure, taking in your first glimpse of Rajasthan's vibrant culture.",
        overnight: "Jaipur",
      },
      {
        day: "Day 2",
        title: "Day 2: Jaipur Sightseeing",
        desc: "Spend the day exploring Jaipur's most celebrated landmarks, including Amber Palace, Hawa Mahal, Jal Mahal, Jantar Mantar, and City Palace. In the evening, explore the lively bazaars and old-city streets of this historic Rajasthani capital.",
        overnight: "Jaipur",
      },
      {
        day: "Day 3",
        title: "Day 3: Jaipur to Agra",
        desc: "Drive to Agra, home of the world-famous Taj Mahal. Visit this breathtaking monument along with the magnificent Agra Fort, exploring centuries of Mughal history and architecture.",
        overnight: "Agra",
      },
      {
        day: "Day 4",
        title: "Day 4: Drive to Delhi & Half-Day Delhi Tour",
        desc: "After breakfast, drive back to Delhi. Spend the afternoon on a half-day tour of Delhi, covering major landmarks such as India Gate, Rashtrapati Bhavan, Humayun's Tomb, and Qutub Minar, depending on time.",
        overnight: "Delhi",
      },
      {
        day: "Day 5",
        title: "Day 5: Old Delhi Half-Day Tour & Drive to Rishikesh",
        desc: "Begin the day with a half-day tour of Old Delhi, exploring Jama Masjid, Chandni Chowk, and the Red Fort, soaking in the energy of the old city's bustling lanes and markets. Afterward, drive to Rishikesh, arriving in the evening and settling into the calm, spiritual atmosphere of this Himalayan town on the banks of the Ganges.",
        overnight: "Rishikesh",
      },
      {
        day: "Day 6",
        title: "Day 6: Rishikesh Exploration",
        desc: "Spend a full day exploring Rishikesh, the world's yoga capital. Visit the iconic Laxman Jhula and Ram Jhula suspension bridges, explore ashrams along the Ganges, and take in the peaceful riverside atmosphere. Optional experiences include yoga sessions, meditation, white-water rafting, and attending the mesmerizing Ganga Aarti ceremony in the evening.",
        overnight: "Rishikesh",
      },
      {
        day: "Day 7",
        title: "Day 7: Drive to Delhi",
        desc: "After breakfast, check out and drive back to Delhi. Your 7-day Golden Triangle and Rishikesh tour concludes with drop-off at your hotel, the airport, or another location of your choice.",
        overnight: "Delhi Drop-off / Tour Concludes",
      },
    ],
    conclusion:
      "Looking for a delhi agra jaipur rishikesh tour package that goes beyond monuments into mindfulness and nature? This 7-day journey is ideal for international travelers seeking to pair India's royal heritage with an authentic, rejuvenating spiritual experience in the Himalayas.",
  },

  // 10. 4 Days Holy River Ganga Tour – Haridwar & Rishikesh
  {
    slug: "4-day-haridwar-rishikesh",
    title: "4 Days Holy River Ganga Tour – Haridwar & Rishikesh",
    days: 4,
    duration: "4 Days / 3 Nights",
    price: "On request",
    tag: "Spiritual",
    category: "Spiritual & Ganga",
    reg: "Uttarakhand",
    imgKey: "varanasi",
    overview:
      "Experience the spiritual heart of India on this 4-day haridwar rishikesh tour, taking you through Delhi, Haridwar, and Rishikesh along the sacred waters of the Ganges. This peaceful journey is designed for travelers seeking a genuine taste of India's culture and devotion, away from the typical monuments-only circuit.\n\nThis ganga tour haridwar rishikesh combines a day of Delhi sightseeing with time spent immersed in Haridwar's riverside rituals and Rishikesh's tranquil, spiritual atmosphere. For those interested in yoga, meditation, and wellness, it also works wonderfully as a rishikesh yoga tour package, offering both structured sightseeing and free time to relax by the Ganges.\n\nThis well-paced delhi haridwar rishikesh tour is ideal for travelers from India and abroad looking for a short, meaningful escape into the Himalayan foothills.\n\nTravel comfortably throughout in a private, air-conditioned vehicle with an experienced driver.",
    highlights: [
      "Delhi, Haridwar, and Rishikesh circuit along the sacred Ganges",
      "Delhi sightseeing – India Gate, Rashtrapati Bhavan, Humayun's Tomb, and Qutub Minar",
      "Haridwar ghats and riverside atmosphere en route to Rishikesh",
      "Laxman Jhula, Ram Jhula, and ashrams along the Ganges in Rishikesh",
      "Optional yoga, meditation, rafting, and Ganga Aarti in Rishikesh",
      "Private air-conditioned car with an experienced driver throughout",
      "Ideal short escape for a rishikesh yoga tour package",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Day 1: Delhi Sightseeing",
        desc: "Begin your tour with a day of sightseeing in Delhi, covering the city's most iconic landmarks such as India Gate, Rashtrapati Bhavan, Humayun's Tomb, Qutub Minar, and Jama Masjid, depending on time and interest. Return to your hotel in the evening.",
        overnight: "Delhi",
      },
      {
        day: "Day 2",
        title: "Day 2: Drive to Rishikesh via Haridwar",
        desc: "After breakfast, check out and drive toward Rishikesh. En route, stop in Haridwar, one of India's holiest cities on the banks of the Ganges. Explore the ghats and witness the vibrant atmosphere of this sacred town before continuing to Rishikesh. Arrive in the evening and settle into the calm, spiritual surroundings.",
        overnight: "Rishikesh",
      },
      {
        day: "Day 3",
        title: "Day 3: Rishikesh Experience",
        desc: "Spend a full day exploring Rishikesh, the world's yoga capital, nestled along the Ganges in the Himalayan foothills. Visit the iconic Laxman Jhula and Ram Jhula suspension bridges, explore ashrams along the riverbank, and enjoy the peaceful surroundings. Optional experiences include yoga sessions, meditation, white-water rafting, and the mesmerizing Ganga Aarti ceremony in the evening.",
        overnight: "Rishikesh",
      },
      {
        day: "Day 4",
        title: "Day 4: Drive to Delhi",
        desc: "After breakfast, check out and drive back to Delhi. Your 4-day Holy River Ganga tour concludes with drop-off at your hotel, the airport, or another location of your choice.",
        overnight: "Delhi Drop-off / Tour Concludes",
      },
    ],
    conclusion:
      "Looking for a peaceful, spiritually rich escape from Delhi? This delhi haridwar rishikesh tour is perfect for travelers wanting genuine immersion in Haridwar's rituals and Rishikesh's calm riverside charm, all in a well-paced 4-day journey along the Ganges.",
  },

  // 11. 7 Days Shimla Manali Tour – Himachal Hill Station Getaway
  {
    slug: "7-day-shimla-manali",
    title: "7 Days Shimla Manali Tour – Himachal Hill Station Getaway",
    days: 7,
    duration: "7 Days / 6 Nights",
    price: "On request",
    tag: "Adventure",
    category: "Himachal & Mountains",
    reg: "Himachal",
    imgKey: "manali",
    overview:
      "Escape to the mountains on this 7-day shimla manali tour, taking you through two of Himachal Pradesh's most beloved hill stations. This well-paced shimla manali tour package combines the colonial charm of Shimla with the scenic beauty and adventure of Manali, along with a relaxed stop in Chandigarh on the return journey.\n\nThis delhi shimla manali tour is designed for travelers looking to unwind amid pine forests, snow-capped peaks, and charming mountain towns, making it one of the most popular himachal tour package options for a refreshing getaway from the plains.\n\nTravel comfortably throughout in a private, air-conditioned vehicle with an experienced driver.",
    highlights: [
      "Complete Shimla, Manali, and Chandigarh circuit",
      "Shimla's Mall Road, Ridge, Christ Church, and Jakhoo Temple",
      "Old Manali, Hadimba Temple, and Manali's Mall Road",
      "Optional excursions to Solang Valley or Rohtang Pass",
      "Stopover in Chandigarh on the return journey",
      "Private air-conditioned car with an experienced driver throughout",
      "Ideal for a relaxed himachal tour package escape from the plains",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Day 1: Drive from Delhi to Shimla",
        desc: "Your journey begins with a private drive from Delhi to Shimla, the former summer capital of British India. On arrival, check into your hotel and spend the evening at leisure, taking in the cool mountain air and colonial charm of the town.",
        overnight: "Shimla",
      },
      {
        day: "Day 2",
        title: "Day 2: Shimla Sightseeing",
        desc: "Spend the day exploring Shimla's most popular attractions, including the Mall Road, Ridge, Christ Church, and Jakhoo Temple. Enjoy leisurely walks through the town's colonial-era streets and take in panoramic views of the surrounding hills.",
        overnight: "Shimla",
      },
      {
        day: "Day 3",
        title: "Day 3: Drive to Manali",
        desc: "After breakfast, check out and drive to Manali, passing through scenic valleys and riverside roads along the way. On arrival, check into your hotel and spend the evening relaxing amid the mountain surroundings.",
        overnight: "Manali",
      },
      {
        day: "Day 4",
        title: "Day 4: Manali Sightseeing",
        desc: "Spend the day exploring Manali's natural beauty and popular sights, including Hadimba Temple, Old Manali, and the Mall Road. Enjoy the town's laid-back atmosphere, cafes, and mountain views.",
        overnight: "Manali",
      },
      {
        day: "Day 5",
        title: "Day 5: Manali – Leisure Day / Excursions",
        desc: "Spend another day in Manali, with time for optional excursions such as Solang Valley or Rohtang Pass (subject to weather and road conditions), known for their adventure activities and stunning Himalayan scenery.",
        overnight: "Manali",
      },
      {
        day: "Day 6",
        title: "Day 6: Drive to Chandigarh",
        desc: "After breakfast, check out and drive to Chandigarh, India's well-planned city known for its modern architecture and greenery. Spend the evening at leisure exploring the city.",
        overnight: "Chandigarh",
      },
      {
        day: "Day 7",
        title: "Day 7: Drive Back to Delhi",
        desc: "After breakfast, check out and drive back to Delhi. Your 7-day Shimla Manali tour concludes with drop-off at your hotel, the airport, or another location of your choice.",
        overnight: "Delhi Drop-off / Tour Concludes",
      },
    ],
    conclusion:
      "Looking for a well-rounded shimla manali tour package to explore the best of Himachal Pradesh? This 7-day journey is ideal for travelers wanting a relaxed mix of colonial charm, mountain scenery, and adventure, all in one comfortable delhi shimla manali tour.",
  },

  // 12. 2-Day Taj Mahal & Delhi Tour
  {
    slug: "2-day-taj-mahal-delhi",
    title: "2-Day Taj Mahal & Delhi Tour",
    days: 2,
    duration: "2 Days / 1 Night",
    price: "₹8,500",
    tag: "Cultural",
    category: "Day Tours",
    reg: "Uttar Pradesh",
    imgKey: "taj",
    overview:
      "This customized 2-day tour combines the best of Delhi with an unforgettable Taj Mahal tour, giving you a quick yet complete introduction to two of India's most historic cities. Day one covers Delhi's most iconic landmarks before a comfortable private drive to Agra. Day two is dedicated to Agra's greatest treasures, including sunrise views of the Taj Mahal, followed by a relaxed return journey to Delhi.\n\nWhether you have limited time in India or simply want a focused short getaway, this agra city tour paired with Delhi sightseeing delivers maximum highlights in minimum days.",
    highlights: [
      "Private 2-day Taj Mahal tour covering Delhi and Agra",
      "Full day of Delhi sightseeing on Day 1",
      "Comfortable private drive from Delhi to Agra",
      "Overnight stay in Agra",
      "Sunrise or early morning visit to the Taj Mahal",
      "Guided exploration of Agra Fort",
      "Private air-conditioned car with an experienced driver",
      "Local guides available in both Delhi and Agra",
      "Flexible pickup and drop-off options",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Day 1: Delhi Sightseeing & Drive to Agra",
        desc: "Your tour begins with pickup from your hotel, the airport, or another convenient location in Delhi. Spend the morning exploring Delhi's most iconic landmarks, including Rashtrapati Bhavan – the grand Presidential Palace, India Gate – Delhi's famous war memorial, and Qutub Minar – a UNESCO World Heritage site and the tallest brick minaret in the world. Depending on your available time, you may also explore additional sights across Old and New Delhi, or visit the tranquil Lotus Temple.\n\nOnce sightseeing wraps up, travel by private, air-conditioned car to Agra. The drive typically takes around 3 to 4 hours, depending on traffic conditions. On arrival in Agra, check into your hotel and enjoy a relaxed evening.",
        points: [
          "Rashtrapati Bhavan – the grand Presidential Palace",
          "India Gate – Delhi's famous war memorial",
          "Qutub Minar – tallest brick minaret in the world",
          "Scenic 3-4 hour drive to Agra via Yamuna Expressway",
        ],
        overnight: "Agra",
      },
      {
        day: "Day 2",
        title: "Day 2: Agra Sightseeing & Drive Back to Delhi",
        desc: "Begin the day with an early morning visit to the Taj Mahal, widely considered the most beautiful time to see this iconic monument. Explore the Taj Mahal and its surrounding gardens with a knowledgeable local guide, learning about its history and remarkable architecture. From there, continue to Agra Fort, an impressive Mughal-era fortress offering stunning views of the Taj Mahal along with a rich and fascinating history of its own.\n\nAfter your Agra sightseeing, enjoy lunch and some free time for local shopping before beginning your drive back to Delhi. Your 2-day Taj Mahal and Delhi tour concludes with drop-off at your hotel, the airport, or another location of your choice.",
        points: [
          "Sunrise visit to the iconic Taj Mahal with expert guide",
          "Agra Fort UNESCO fortress with panoramic Taj Mahal views",
          "Local lunch & marble handicrafts shopping",
          "Comfortable private drive back to Delhi hotel/airport",
        ],
        overnight: "Delhi Drop-off / Tour Concludes",
      },
    ],
    conclusion:
      "Short on time but don't want to miss India's must-see sights? This private Delhi and Agra tour is a perfect fit for travelers looking for a quick, well-paced escape to see the Taj Mahal without a long itinerary.",
  },

  // 13. 5-Day Golden Triangle Tour – Delhi, Agra & Jaipur
  {
    slug: "5-day-golden-triangle",
    title: "5-Day Golden Triangle Tour – Delhi, Agra & Jaipur",
    days: 5,
    duration: "5 Days / 4 Nights",
    price: "On request",
    tag: "Cultural",
    category: "Golden Triangle",
    reg: "Rajasthan",
    imgKey: "hawa",
    overview:
      "Experience the very best of North India with this private golden triangle tour delhi itinerary, taking you through three of the country's most iconic cities — Delhi, Agra, and Jaipur — over five relaxed days.\n\nThis journey is designed for travelers who want to explore India's rich Mughal heritage and royal Rajasthani culture at a comfortable pace, without the rush of a group itinerary. Walk through the grandeur of Fatehpur Sikri, stop at the striking Chand Baori stepwell in Abhaneri, stand before the timeless beauty of the Taj Mahal, and soak in the vibrant energy of Jaipur's Pink City streets.\n\nWith a private air-conditioned vehicle, an experienced driver, and knowledgeable local guides at every stop, this is one of our most comfortable and flexible golden triangle india tours.",
    highlights: [
      "Private Delhi, Agra & Jaipur tour",
      "Qutub Minar and Humayun's Tomb",
      "India Gate and Rashtrapati Bhavan",
      "Agra Fort and the Taj Mahal",
      "Optional Taj Mahal sunrise visit",
      "Fatehpur Sikri, the deserted Mughal city",
      "Chand Baori stepwell at Abhaneri",
      "Amber Palace and Jal Mahal",
      "City Palace and Jantar Mantar",
      "Jaipur's Pink City walking or rickshaw experience",
      "Private air-conditioned car with an experienced driver",
      "Local guides available in Delhi, Agra, and Jaipur",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Day 1: Arrival & Delhi Sightseeing",
        desc: "Your Golden Triangle journey begins in Delhi, India's capital and a city layered with centuries of history. Depending on your arrival time and interests, your day may include visits to Rashtrapati Bhavan, India Gate, Humayun's Tomb, Qutub Minar, Jama Masjid, and Raj Ghat. Travelers can also choose to explore the winding lanes of Old Delhi or visit the serene Lotus Temple, depending on time and preference. Return to your hotel in the evening to rest before the next leg of your journey.",
        overnight: "Delhi",
      },
      {
        day: "Day 2",
        title: "Day 2: Delhi to Agra – City of the Taj Mahal",
        desc: "After breakfast, travel by private, air-conditioned car from Delhi to Agra. On arrival, begin sightseeing at the magnificent Agra Fort, a UNESCO-listed red sandstone fortress and one of the finest surviving examples of Mughal military and residential architecture. Next, visit the world-famous Taj Mahal, spending time to admire its marble domes, intricate inlay work, and manicured gardens. An optional local guide can walk you through the monument's fascinating history and architectural details. Check into your hotel in the evening and unwind.",
        overnight: "Agra",
      },
      {
        day: "Day 3",
        title: "Day 3: Agra – Fatehpur Sikri – Abhaneri – Jaipur",
        desc: "For early risers, an optional Taj Mahal sunrise visit offers a magical, softer view of the monument bathed in morning light. After breakfast, check out and drive toward Jaipur. Along the way, stop at Fatehpur Sikri, the abandoned Mughal capital known for its striking red sandstone architecture and monumental gateways. Continue to Abhaneri, home to the stunning Chand Baori stepwell, one of India's deepest and most photogenic stepwells, before proceeding to Jaipur and checking into your hotel.",
        overnight: "Jaipur",
      },
      {
        day: "Day 4",
        title: "Day 4: Jaipur Sightseeing",
        desc: "Discover the highlights of Jaipur, the famous Pink City, during your tour of the day. Visit Amber Palace and Hawa Mahal, then take a photo stop at Jal Mahal, the striking palace at the center of Man Sagar Lake. Continue to Jantar Mantar and City Palace, located in the heart of the old city. Afterward, explore the vibrant streets of the Pink City on foot or by classic rickshaw, taking in local markets, architecture, and everyday life beyond the monuments.",
        overnight: "Jaipur",
      },
      {
        day: "Day 5",
        title: "Day 5: Jaipur to Delhi – Tour Concludes",
        desc: "Check out of your hotel after breakfast and begin your private drive back to Delhi. Your 5-day Golden Triangle tour concludes upon arrival at your hotel, the airport, or another location of your choice in Delhi.",
        overnight: "Delhi Drop-off / Tour Concludes",
      },
    ],
    conclusion:
      "Looking for a fully customizable golden triangle private tour? This 5-day journey is one of our most complete golden triangle tour india packages, ideal for travelers wanting a relaxed, well-paced introduction to India's most iconic monuments and royal heritage.",
  },
].map((p) => ({
  ...p,
  img: img(p.imgKey || "taj", 900),
  hero: img(p.imgKey || "taj", 1800),
}));

// Curated 4 Special Offer Packages featured on homepage
export const featured = [
  "2-day-taj-mahal-delhi",
  "7-day-golden-triangle-jungle",
  "old-new-delhi-day-tour",
  "12-day-himachal-amritsar",
].map((s) => packages.find((p) => p.slug === s));

