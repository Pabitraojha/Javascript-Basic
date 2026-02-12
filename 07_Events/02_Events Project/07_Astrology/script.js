const zodiacSigns = [
  "Capricorn",
  "Aquarious",
  "Pisces",
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpia",
  "Sagittarius",
];
//based on the Date, size 31
const compliments = [
  "You have a great sense of humor.",
  "Your smile lights up the room.",
  "You bring out the best in people.",
  "you are an incredibly thoughtful person.",
  "You have a heart of gold.",
  "Your creditiviy is inspiring.",
  "You are a fantastic problem sover.",
  "Your kindness is contageous.",
  "You have an amazing ability to connect with others.",
  "You are so knowledgeable about so many things.",
  "Your ditermination is admirable.",
  "You are a great listener.",
  "You make the world a better place.",
  "Your positivity is infectious.",
  "You have an eye for details.",
  "You inspire everyone around you.",
  "Your creativity knows no bound.",
  "You have a remarkable work ethic.",
  "Your optimism is truly contagious",
  "You are an exceptional problem solver.",
  "Your passion shines through everything you do.",
  "You have a gift for making people feel valued.",
  "Your intelligence is incredily impressive.",
  "You are a beacon of positivity.",
  "Your dedication is truely inspiring.",
  "You possess an amazing talent for leadership.",
  "Your enthusiasm makes every project exciting.",
  "You are a master of innovative thinking.",
  "Your generosity touches everyone's heart.",
  "Your resilience is admirable.",
  "Your vision for the future is inspiring.",
];
//size 22
const victimCardCompliment = [
  "You always do good for others but they don't appreciate it.",
  "You give so much, but rarely get anything in return.",
  "You deserve to be loved, not just tolerated.",
  "Your worth isn't defined by how much you give.",
  "You are stronger than you think you are.",
  "Your feelings are valid, don't ignore them.",
  "You are enough, just as you are.",
  "Don't dim your light to make others comfortable.",
  "You are worthy of love, care, and respect.",
  "It's okay to say no, it's not selfish.",
  "Your needs matter, prioritize them.",
  "Don't settle for less than you deserve.",
  "You are not responsible for others' happiness.",
  "Your voice matters, don't be afraid to speak up.",
  "You are doing the best you can, and that's enough.",
  "Don't let anyone make you feel small.",
  "You are capable of achieving greatness.",
  "Your emotions are a part of who you are.",
  "Take care of yourself, you matter.",
  "Don't apologize for taking space.",
  "You are not alone, reach out for help.",
  "Your dreams are worth chasing, go for.",
];
// size is 30
const recommendation = [
  "Feed a street dog and spread kindness.",
  "Plant a tree and nurture it.",
  "Volunteer ar a local shelter or community center.",
  "Consult your birth chart for life guidance.",
  "Wear gemstones matching your ruling planet.",
  "Practice moon phase meditation for clarity.",
  "Align your activities with planetary transits.",
  "Chant mantras for planetary peace.",
  "Use essential oils for planetary balance.",
  "Consult an astrologer for personalized advice.",
  "Practice gratitude on Thursdays for Jupiter blessings.",
  "Donate to charity on Saturdays for Saturn relief.",
  "Keep a dream journal for subconscious insights.",
  "Perform rituals during full moon for manifestation.",
  "Wear colors that match your zodiac element.",
  "Meditate on your rising sign's qualities.",
  "Balance your energies with yoga and planets.",
  "Use crystals to amplify planetary energies.",
  "Avoid major decisions during Mercury retrograde.",
  "Connect with nature for grounding.",
  "Practice moon gowing for emotional balance.",
  "Read horoscopes for daily guidance.",
  "Align goals with favorable planetary periods.",
  "Practice affirmations matching your zodiac sign.",
  "Use planetary hours for optimal timing.",
  "Consult nakshatra positions for auspicious timing.",
  "Practice pranayama for planetary balance.",
  "Keep spaces clean for positive energies.",
  "Honor ancestors for guidance and support.",
  "Balance your doshas with astrological remedies.",
];
//size is 20
const prediction = [
  "You will become a crorepati",
  "Success is just around the center for you.",
  "Your dream job is closer than you think.",
  "Expect the unexpected great things are coming.",
  "You will travel the world in the next few years.",
  "A big opportunity will knock on your soon.",
  "The cosmos signals a sudden wealth surge for you.",
  "Your next project will earn you legendary status.",
  "A planetary alignment brings unexpected career luck.",
  "You will unlock a secret talent that changes your life.",
  "Fortune will favor your entrepreneurial spirit soon.",
  "An auspicious transit opens doors to global recognition.",
  "Your financial graph will spike after a celestial event.",
  "A hidden opportunity will turn into massive success.",
  "The stars bless you with a life‑changing partnership.",
  "You are destined for a breakthrough innovation.",
  "Abundance will flow when you follow planetary guidance.",
  "A lucky zodiac aspect will boost your income dramatically.",
  "Your ambitions will align with cosmic rewards.",
  "The universe prepares a surprise promotion for you.",
];
const form = document.getElementById("Astroform");

form.addEventListener("submit", (e) => {
    e.preventDefault();
  const name = document.getElementById("f-name").value;
  const surname = document.getElementById("s-name").value;
  const day = document.getElementById("DOB").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

    const text= `Namskar ${name} ${surname}, Your Zodiac sign is ${zodiacSigns[month-1]} ${compliments[day-1]} ${victimCardCompliment[year%22]} ${recommendation[(day*month)%month]} ${prediction[(name.length*surname.length)%20]}`;

    document.getElementById('result').textContent=text;
    console.log(text)
    form.reset();
});
