export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Membership", href: "#membership" },
  { label: "Trainers", href: "#trainers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: 2400, suffix: "+", label: "Active Members" },
  { value: 18, suffix: "", label: "Elite Trainers" },
  { value: 12, suffix: " yrs", label: "Experience" },
  { value: 98, suffix: "%", label: "Success Rate" },
];

export const PROGRAMS = [
  {
    id: 1,
    title: "Strength & Power",
    description: "Build raw strength with periodized programming designed by world-class powerlifting coaches.",
    icon: "FaDumbbell",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
  },
  {
    id: 2,
    title: "HIIT & Cardio",
    description: "High-intensity interval training that torches fat and builds cardiovascular endurance.",
    icon: "FaFire",
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=600&q=80",
  },
  {
    id: 3,
    title: "MMA & Combat",
    description: "Mixed martial arts training for all levels — from beginners to competitive fighters.",
    icon: "FaHandRock",
    image: "https://images.unsplash.com/photo-1549476464-37392f717541?w=600&q=80",
  },
  {
    id: 4,
    title: "Olympic Lifting",
    description: "Master the snatch and clean & jerk under the guidance of certified Olympic coaches.",
    icon: "FaTrophy",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80",
  },
  {
    id: 5,
    title: "Functional Fitness",
    description: "Move better, live better. Programming focused on real-world strength and mobility.",
    icon: "FaRunning",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
  },
  {
    id: 6,
    title: "Recovery & Wellness",
    description: "Ice baths, sauna, physiotherapy and guided recovery sessions to keep you at peak performance.",
    icon: "FaSpa",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
  },
];

export const MEMBERSHIP_PLANS = [
  {
    id: 1,
    name: "Warrior",
    price: 2999,
    period: "month",
    description: "The essentials to begin your transformation.",
    features: [
      "Gym Floor Access (6am–10pm)",
      "Locker & Shower",
      "2 Group Classes / Week",
      "Fitness Assessment",
      "Mobile App Access",
    ],
    notIncluded: ["Personal Training", "Recovery Suite", "Nutrition Coaching"],
    cta: "Start Now",
    highlighted: false,
    badge: null,
  },
  {
    id: 2,
    name: "Titan",
    price: 4999,
    period: "month",
    description: "Our most popular plan — everything you need to excel.",
    features: [
      "24/7 Gym Access",
      "Unlimited Group Classes",
      "4 PT Sessions / Month",
      "Recovery Suite Access",
      "Nutrition Guidance",
      "Priority Booking",
      "Guest Pass (2/month)",
    ],
    notIncluded: [],
    cta: "Go Titan",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: 3,
    name: "Legend",
    price: 8999,
    period: "month",
    description: "Unlimited access. Elite concierge service.",
    features: [
      "Everything in Titan",
      "Unlimited PT Sessions",
      "Dedicated Coach",
      "Body Composition Analysis",
      "Monthly Meal Plan",
      "VIP Lounge Access",
      "Unlimited Guest Passes",
    ],
    notIncluded: [],
    cta: "Go Legend",
    highlighted: false,
    badge: "Elite",
  },
];

export const TRAINERS = [
  {
    id: 1,
    name: "Marcus Reid",
    role: "Head Strength Coach",
    specialty: "Powerlifting · Olympic Lifting",
    experience: "12 Years",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80",
    instagram: "#",
    twitter: "#",
  },
  {
    id: 2,
    name: "Aisha Patel",
    role: "Performance Coach",
    specialty: "HIIT · Functional Fitness",
    experience: "8 Years",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80",
    instagram: "#",
    twitter: "#",
  },
  {
    id: 3,
    name: "Dmitri Volkov",
    role: "MMA & Combat Coach",
    specialty: "Boxing · Muay Thai · BJJ",
    experience: "15 Years",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80",
    instagram: "#",
    twitter: "#",
  },
  {
    id: 4,
    name: "Sofia Chen",
    role: "Wellness & Recovery",
    specialty: "Mobility · Yoga · Physio",
    experience: "10 Years",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&q=80",
    instagram: "#",
    twitter: "#",
  },
];

export const GALLERY_IMAGES = [
  { id: 1, src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", alt: "Weight room floor", span: "col-span-2" },
  { id: 2, src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&q=80", alt: "Olympic lifting platform" },
  { id: 3, src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80", alt: "CrossFit area" },
  { id: 4, src: "https://images.unsplash.com/photo-1549476464-37392f717541?w=400&q=80", alt: "Boxing ring" },
  { id: 5, src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", alt: "Cardio machines" },
  { id: 6, src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80", alt: "Recovery area", span: "col-span-2" },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Member since 2022",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    review: "IRONFORGE completely changed my life. I lost 22kg in 8 months with the Titan plan. The coaches genuinely care about your progress — it's not just another gym.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Menon",
    role: "Member since 2021",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&q=80",
    review: "The facility is world-class, the programming is intelligent, and the community is incredible. Worth every rupee. Aisha is a phenomenal coach.",
    rating: 5,
  },
  {
    id: 3,
    name: "Arjun Kapoor",
    role: "Legend Member",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    review: "As a competitive athlete, I've trained in gyms across the world. IRONFORGE ranks in the top tier — the equipment, the expertise, the culture. Elite.",
    rating: 5,
  },
  {
    id: 4,
    name: "Neha Gupta",
    role: "Warrior Member",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    review: "I was terrified walking in as a beginner. Now I deadlift twice my bodyweight. IRONFORGE is the most welcoming yet results-driven gym I've ever seen.",
    rating: 5,
  },
];

export const FAQ_ITEMS = [
  {
    id: 1,
    question: "Do I need prior gym experience to join?",
    answer: "Absolutely not. IRONFORGE welcomes all fitness levels. Every new member receives a comprehensive fitness assessment and onboarding session with a coach to build your personal roadmap.",
  },
  {
    id: 2,
    question: "What are the gym opening hours?",
    answer: "Warrior members have access from 6am–10pm daily. Titan and Legend members enjoy 24/7 access using their biometric key fob.",
  },
  {
    id: 3,
    question: "Can I freeze or cancel my membership?",
    answer: "Yes. Memberships can be frozen for up to 2 months per year at no charge. Cancellations require 30 days' notice with no penalty fees.",
  },
  {
    id: 4,
    question: "Is personal training included in membership?",
    answer: "Personal training sessions are included in the Titan (4/month) and Legend (unlimited) plans. Warrior members can add-on PT sessions at preferential rates.",
  },
  {
    id: 5,
    question: "Do you offer trial passes?",
    answer: "We offer a 3-day trial pass for ₹499 so you can experience IRONFORGE before committing. Contact us or visit in person to claim yours.",
  },
  {
    id: 6,
    question: "What equipment do you have?",
    answer: "Over 200 pieces of premium equipment: Eleiko barbells & plates, Technogym cardio, cable systems, turf, boxing ring, Olympic platforms, recovery suite with ice baths and sauna.",
  },
];
