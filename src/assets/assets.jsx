import t1 from "./images/transformation/transformation1.webp";
import t2 from "./images/transformation/transformation2.webp";
import t3 from "./images/transformation/transformation3.webp";
import t4 from "./images/transformation/transformation4.webp";
import t5 from "./images/transformation/transformation5.webp";
import t6 from "./images/transformation/transformation6.webp";
import t7 from "./images/transformation/transformation7.webp";
import t8 from "./images/transformation/transformation8.webp";

export const transformations = [t1, t2, t3, t4, t5, t6, t7, t8];

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCrown,
  FaStar,
  FaRunning,
  FaBolt,
  FaUtensils,
} from "react-icons/fa";

export const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Programs", path: "/programs" },
    { name: "Booking", path: "/booking" },
    { name: "Contact", path: "/contact" },
  ];

export const plans = [
  {
    name: "Basic",
    color: "from-green-50 to-white",
    monthly: 999,
    yearly: 9990,
    description: "Perfect for beginners starting their fitness journey.",
    features: [
      "Customized Workout Plan",
      "Basic Nutrition Guidance",
      "Email Support",
    ],
    icon: <FaStar className="text-yellow-400 text-3xl" />,
  },
  {
    name: "Pro",
    color: "from-green-100 to-green-50",
    monthly: 2499,
    yearly: 24990,
    description: "Great for fitness lovers seeking faster, visible results.",
    features: [
      "Advanced Training Plan",
      "Personalized Nutrition Coaching",
      "Weekly Progress Tracking",
      "Priority Chat Support",
    ],
    popular: true,
    icon: <FaCrown className="text-yellow-400 text-3xl" />,
  },
  {
    name: "Elite",
    color: "from-green-50 to-white",
    monthly: 4999,
    yearly: 49990,
    description: "Designed for pros aiming for peak performance and balance.",
    features: [
      "1-on-1 Video Coaching",
      "Comprehensive Meal Planning",
      "Daily Accountability Check-ins",
      "Exclusive Fitness Resources",
    ],
    icon: <FaCrown className="text-yellow-500 text-3xl" />,
  },
];

// src/data/servicesData.js
import { FaDumbbell, FaLeaf, FaAppleAlt } from "react-icons/fa";

export const offers = [
  {
    title: "Personal Training",
    description:
      "Customized one-on-one workouts that accelerate progress and ensure measurable fitness results.",
    icon: <FaDumbbell className="text-green-500 text-4xl" />,
  },
  {
    title: "Yoga & Mindfulness",
    description:
      "Harmonize your body and mind through expert-led yoga sessions and mindful breathing practices.",
    icon: <FaLeaf className="text-green-500 text-4xl" />,
  },
  {
    title: "Nutrition Plans",
    description:
      "Personalized meal strategies to fuel performance, recovery, and long-term wellness.",
    icon: <FaAppleAlt className="text-green-500 text-4xl" />,
  },
];

import tes1 from "./images/testimonials/testimonials1.webp";
import tes2 from "./images/testimonials/testimonials2.webp";
import tes3 from "./images/testimonials/testimonials3.webp";
import tes4 from "./images/testimonials/testimonials4.webp";

export const testimonials = [
  {
    name: "Olivia Perry",
    designation: "Marketing – London, UK",
    feedback: "World-class training! I feel more confident and energetic.",
    image: tes1,
    rating: 5,
  },
  {
    name: "James Carter",
    designation: "Engineer – Toronto, CA",
    feedback: "Perfectly structured sessions with visible strength gains.",
    image: tes2,
    rating: 5,
  },
  {
    name: "Sofia Müller",
    designation: "Director – Berlin, DE",
    feedback: "Personalized workouts that keep me motivated to improve.",
    image: tes3,
    rating: 4,
  },
  {
    name: "Ethan Brown",
    designation: "Consultant – NY, US",
    feedback: "Amazing guidance and support! I feel fit and confident now.",
    image: tes4,
    rating: 5,
  },
];

export const faqs = [
  {
    question: "How do online fitness coaching sessions work?",
    answer:
      "Sessions happen via video or chat, with custom plans, progress tracking, and regular check-ins.",
  },
  {
    question: "Can I follow the plan with a busy schedule?",
    answer:
      "Absolutely! Plans are tailored around your daily routine to keep workouts flexible and practical.",
  },
  {
    question: "Do I need access to a gym?",
    answer:
      "No, home or gym options are available. You can start with bodyweight or basic resistance bands.",
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "Most clients notice progress in 4–6 weeks — stronger, leaner, and more energetic with consistency.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply reach out via the contact form to book your consultation and start your transformation.",
  },
];

export const mvData = [
  {
    title: "MISSION",
    heading: "Helping People Build Lasting Fitness",
    desc: "Our mission is to help individuals build lasting wellness through structured training, balanced nutrition, and consistent motivation — enabling strength, discipline, and a healthier, more confident life.",
    delay: "0",
  },
  {
    title: "VISION",
    heading: "Inspiring Lifelong Health and Balance",
    desc: "Our vision is to create a global community that treats fitness as a lifestyle — where progress is valued, health is prioritized, and individuals find long-term balance in both physical and mental well-being.",
    delay: "150",
  },
];

export const contactItems = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Our Office",
    value: "123 Fitness Street, Mumbai, India",
    delay: "0",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+91 98765 43210",
    delay: "150",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "info@fitnesspro.com",
    delay: "250",
  },
];

export const bookServices = [
  "Personal Training",
  "Weight Loss Program",
  "Muscle Gain Program",
  "Online Coaching",
  "Home Workout Session",
  "Diet & Nutrition Plan",
  "Strength & Conditioning",
  "Yoga Training",
  "HIIT Session",
  "Crossfit Training",
];

export const stepsData = [
  {
    step: "Step 01",
    title: "Goal Assessment",
    points: [
      "Lifestyle & baseline review",
      "Goal clarity & expectations",
      "Performance profiling",
    ],
  },
  {
    step: "Step 02",
    title: "Program Design",
    points: [
      "Weekly training structure",
      "Nutrition & habit protocols",
      "Personalized plan hand-off",
    ],
  },
  {
    step: "Step 03",
    title: "Progress Monitoring",
    points: [
      "Weekly check-ins",
      "Performance trend tracking",
      "Consistency score analysis",
    ],
  },
  {
    step: "Step 04",
    title: "Optimizations",
    points: [
      "Plan recalibration",
      "Load progression updates",
      "Nutrition + routines",
    ],
  },
];

export const programsData = [
  {
    icon: <FaDumbbell size={28} />,
    title: "Strength & Muscle ",
    desc: "Build strength, muscle, and perfect lifting form.",
    features: ["Progressive Overload", "Form Focus", "Weekly Muscle Tracking"],
  },
  {
    icon: <FaRunning size={28} />,
    title: "Fat Loss & Endurance ",
    desc: "Burn fat, boost stamina, and enhance metabolism.",
    features: [
      "HIIT + LISS Protocols",
      "Fat-Loss Nutrition Guide",
      "Mindset Consistency Tools",
    ],
  },
  {
    icon: <FaLeaf size={28} />,
    title: "Mobility & Alignment ",
    desc: "Improve flexibility, posture, and joint stability.",
    features: [
      "Spine & Hips Focus",
      "Breath-Work Included",
      "Pain-Free Movement Goals",
    ],
  },
  {
    icon: <FaBolt size={28} />,
    title: "Athletic Performance ",
    desc: "Increase speed, power, and athletic performance.",
    features: ["Plyometrics", "Sprint Work", "Agility Drills"],
  },
];

export const serviceData = [
  {
    icon: <FaDumbbell />,
    title: "Strength Build",
    desc: "Boost power and endurance with tailored, progressive strength programs.",
  },
  {
    icon: <FaLeaf />,
    title: "Yoga Flow",
    desc: "Enhance posture and flexibility through mindful body-balancing sessions.",
  },
  {
    icon: <FaUtensils />,
    title: "Smart Nutrition",
    desc: "Fuel your body with personalized, results-driven nutrition strategies.",
  },
  {
    icon: <FaRunning />,
    title: "HIIT Cardio",
    desc: "Short, intense workouts to burn fat, build stamina, and stay energized.",
  },
];

export const serviceProcess = [
  {
    step: "01",
    title: "Assess & Set Goals",
    desc: "Evaluate fitness levels and define clear, achievable objectives.",
  },
  {
    step: "02",
    title: "Personalized Plan",
    desc: "Receive a tailored training and nutrition plan suited to your lifestyle.",
  },
  {
    step: "03",
    title: "Track & Improve",
    desc: "Measure progress, adjust routines, and stay consistent with expert guidance.",
  },
  {
    step: "04",
    title: "Achieve & Sustain",
    desc: "Reach your goals and maintain long-term fitness with ongoing support.",
  },
];

export const serviceTestimonials = [
  {
    quote:
      "The coaching is outstanding — I’ve achieved results I couldn’t even imagine. Each session feels meaningful and motivating.",
    author: "Riya Sharma",
  },
  {
    quote:
      "I’ve tried multiple trainers, but this approach stands out for its personalization, structure, and genuine accountability.",
    author: "Ankit Verma",
  },
  {
    quote:
      "The online guidance is top-notch. I learned proper nutrition, built strength, and gained confidence — all from home.",
    author: "Simran Kaur",
  },
];



export const contactInfo = [
  {
    icon: <FaEnvelope  />,
    text: "info@fitnesspro.com",
  },
  {
    icon: <FaPhoneAlt  />,
    text: "+91 123 456 7890",
  },
  {
    icon: <FaMapMarkerAlt  />,
    text: (
      <>
        123 Fitness Street,<br /> Mumbai, India
      </>
    ),
  },
];


export const footerLinks = [
  { name: "FAQs", url: "#" },
  { name: "Membership", url: "#" },
  { name: "Privacy Policy", url: "#" },
  { name: "Terms & Conditions", url: "#" },
  { name: "Support Center", url: "#" },
];
