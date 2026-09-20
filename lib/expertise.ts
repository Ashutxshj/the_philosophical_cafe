export type Inquiry = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  points: string[];
  video?: string;
};

export const inquiries: Inquiry[] = [
  {
    slug: "career-transitions",
    title: "Career transitions & midlife",
    short: "Feeling stuck or unfulfilled, even when everything looks fine on paper.",
    intro:
      "Everything may look right from the outside - the job, the growth, the stability - and still something inside refuses to settle. This is one of the most common, and most quietly painful, places people arrive with.",
    points: [
      "The feeling of being stuck without a visible reason",
      "Questioning a path chosen years ago",
      "The gap between who you planned to be and who you are",
      "Deciding whether to change directions, or tostay and rethink",
    ],
  },
  {
    slug: "existential-anxiety",
    title: "Existential anxiety",
    short: "When the worry runs deeper than circumstances and distraction doesn't reach it.",
    intro:
      "Some anxiety is not about a situation at all - it is about the questions underneath: freedom, responsibility, uncertainty, the limits of control. Distraction quiets it for a while; examination helps it settle for good.",
    points: [
      "Worry that survives good news and quiet weeks",
      "A sense of standing on nothing stable",
      "Questions about control, choice and chance",
      "Unease that no practical fix seems to touch",
    ],
  },
  {
    slug: "moral-ethical-dilemmas",
    title: "Moral & ethical dilemmas",
    short: "Caught between what you want, what you should, and what you believe is right.",
    intro:
      "The hardest decisions are rarely between good and bad. They sit between two rights, or between what you owe yourself and what you owe others. These conversations take such dilemmas seriously instead of rushing to a verdict.",
    points: [
      "Two duties pulling in opposite directions",
      "A choice you cannot share with those around you",
      "Working out what you actually believe to be right",
      "Living with the weight of a decision already made",
    ],
  },
  {
    slug: "identity-self-doubt",
    title: "Identity & self-doubt",
    short: "Recurring patterns in how you think, relate, and choose - and where they begin.",
    intro:
      "The same knot keeps appearing - in work, in relationships, in the way you talk to yourself. The pattern itself is the question: where it began, what it protects, and whether it still serves you.",
    points: [
      "Repeating cycles you can name but not break",
      "A harsh inner voice that sounds like it came from somewhere",
      "Doubting your own worth against imaginary standards",
      "Unlearning beliefs you absorbed long ago",
    ],
  },
  {
    slug: "grief-loss-relationships",
    title: "Grief, loss & relationships",
    short: "Breakups, endings and the difficult questions that linger after them.",
    intro:
      "An ending asks questions that ordinary conversation has no room for - what that relationship meant, who you were inside it, and who you are now that it has changed shape. Grief is thinking with no outlet; here it gets one.",
    points: [
      "A breakup that has rearranged your sense of self",
      "Grief that needs meaning, not just sympathy",
      "Questions left unfinished by an ending",
      "Rebuilding a life after something significant",
    ],
  },
  {
    slug: "meaning-meaninglessness",
    title: "Meaning & meaninglessness",
    short: "When achievement stops feeling like enough, and you can't say why.",
    intro:
      "Perhaps you have done everything expected of you, and arrived somewhere that feels strangely hollow. Perhaps nothing is wrong, and that is the confusing part. This is quiet work with one of philosophy's oldest questions.",
    points: [
      "Success that stopped feeling like enough",
      "A restlessness you cannot attribute to anything",
      "Asking what would actually feel meaningful",
      "Untangling meaning from achievement",
    ],
  },
  {
    slug: "fear-of-death",
    title: "Fear of death",
    short: "Quiet questions about mortality, met with philosophical frameworks instead of platitudes.",
    intro:
      "Few conversations have a home for the fear of death. It is not treated here as morbid - it is treated as one of the most human questions there is, with a long line of thinkers who have sat with it before you.",
    points: [
      "Fear that arrives quietly and refuses to leave",
      "Thoughts of mortality narrowing how you live",
      "Questions about meaning in the face of endings",
      "Frameworks for making peace, not bypassing",
    ],
  },
  {
    slug: "self-exploration",
    title: "Self-exploration",
    short: "Who you are, what you value, and how you actually want to live.",
    intro:
      "Sometimes the question is not a problem - it is simply a person wanting to understand themselves honestly. What do I believe? What do I value? What do I want my life to be built around?",
    points: [
      "Examining borrowed beliefs against your own experience",
      "Understanding what you actually value",
      "Getting clear on how you want to live",
      "Thinking freely, with someone carefully listening",
    ],
  },
  {
    slug: "personal-growth",
    title: "Personal growth & decisions",
    short: "Structured thinking around the choices that shape your life and sense of self.",
    intro:
      "Big decisions deserve better thinking than advice. Here, decisions are examined for what they actually involve - your beliefs, your wants, your fears - and the path tends to become visible on its own.",
    points: [
      "A decision you keep circling without landing",
      "Understanding what a choice will cost and give",
      "Distinguishing your desire from borrowed desire",
      "Growing through thinking, not through checklists",
    ],
  },
];

export const inquiryBySlug = (slug: string) =>
  inquiries.find((i) => i.slug === slug);
