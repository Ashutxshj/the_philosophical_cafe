export type Voice = {
  text: string;
  name: string;
  note?: string;
};

/**
 * The six long testimonials collected so far.
 * Shorter remarks live in marqueeQuotes below.
 */
export const voices: Voice[] = [
  {
    text: "After talking to you, I got relief from this very problem. I am feeling light, as if a burden has been lifted from my mind. Some points became clear that were already inside me, but I had never paid attention to them. You helped me notice them. This is truly a very noble work.",
    name: "Jyoti Jha",
  },
  {
    text: "I felt heard and understood rather than judged. I was quite anxious before the session, but felt much calmer afterwards. Thank you for creating a safe space where I could talk openly.",
    name: "A client",
    note: "referred by a friend",
  },
  {
    text: "Your sessions have helped me understand the full loop of what I am going through. I feel calm and peaceful, because tangled things find clear answers here.",
    name: "A client",
    note: "in ongoing sessions",
  },
  {
    text: "Your support helped me understand my emotional pain and recognize my unhealthy thought patterns. The pattern-breaking exercises were especially helpful, allowing me to view my thoughts differently.",
    name: "A client",
    note: "five sessions",
  },
  {
    text: "She really understood me and my work. She helped me identify the areas I needed to work on, while remaining supportive throughout. After the session I felt more encouraged, confident and prepared.",
    name: "Ayush",
    note: "PhD interview preparation",
  },
  {
    text: "Chetna creates a comfortable space to share thoughts openly. Her calm approach, understanding and guidance have been genuinely helpful. I am starting to feel better, gradually and consistently.",
    name: "Akshay",
    note: "three sessions",
  },
];

export const marqueeQuotes: string[] = [
  "Maybe I was never broken at all. I was just carrying other people\u2019s definitions of me.",
  "At night I used to sit with my laptop just staring at it. Today, yes, I had my answer with me.",
  "I got relief from this problem. I am feeling light, as if a burden has been lifted.",
  "Most people say just ignore these things and move ahead. You listen. And you encourage.",
  "Sleep eluded me due to the stress of my career. I am now going forward with positivity.",
  "Some points became clear that were already inside me \u2014 you helped me notice them.",
  "After the session I felt more encouraged, confident and prepared.",
  "I was quite anxious before the session, but felt much calmer afterwards.",
  "You helped me look at my own thoughts instead of only complaining about others.",
];
