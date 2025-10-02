import physiotheraphy from "../assets/img/physiotherapy.png";
import chiropracticCare from "../assets/img/Chiropractic Care.jpeg";
import massage from "../assets/img/massage.webp";
import acupuncture from "../assets/img/acupuncture.webp";
import {
  Leaf,
  Heart,
  Timer as Relax,
  Bone,
  Activity,
  Dumbbell,
  UserCheck,
  Zap,
  BookOpen,
  Repeat,
  Repeat2,
  Smile,
  Moon,
  Battery,
} from "lucide-react";

export const servicesData = [
  {
    title: "Physiotherapy",
    image: physiotheraphy,
    url: "physiotherapy",
    desc: [
      "Physiotherapy, also known as physical therapy, is a healthcare profession that helps individuals restore, maintain, and improve their physical function and mobility. Using evidence‑based techniques such as targeted exercises, manual therapy, and specialized equipment, physiotherapists work to reduce pain, enhance strength, and improve movement patterns. It is widely used for injury recovery, post‑surgical rehabilitation, and managing conditions like arthritis, sports injuries, and neurological disorders.",
      "Beyond treating injuries, physiotherapy plays an important role in preventing future problems and promoting long‑term health. Regular sessions can help improve posture, increase flexibility, and build endurance, making daily activities easier and more comfortable. Many patients also experience reduced reliance on medications and faster recovery times when physiotherapy is integrated into their treatment plan. By focusing on personalized care and active participation, physiotherapy empowers individuals to take control of their well‑being and lead more active, pain‑free lives",
    ],
  },
  {
    title: "Chiropractic Care",
    image: chiropracticCare,
    url: "chiropractic",
    desc: [
      "Chiropractic care is a health discipline focused on diagnosing, treating, and preventing disorders of the musculoskeletal system, particularly those related to the spine. Chiropractors use hands‑on techniques—most commonly spinal adjustments or manipulations—to correct misalignments, improve joint mobility, and support the body’s natural ability to heal itself. This approach is non‑invasive and drug‑free, making it a popular option for people seeking relief from back pain, neck pain, headaches, and posture‑related issues",
      "Beyond pain relief, regular chiropractic care can enhance overall function and well‑being. By improving spinal alignment and nervous system communication, chiropractic adjustments may help reduce muscle tension, boost range of motion, and even improve energy levels. Many patients also find that consistent care helps prevent future injuries and supports better posture in daily life. Incorporating chiropractic treatment into a wellness plan can be a powerful step toward maintaining a healthier, more active lifestyle",
    ],
  },
  {
    title: "Massage Therapy",
    image: massage,
    url: "massage",
    desc: [
      "Massage therapy is a hands‑on treatment that focuses on manipulating the body’s soft tissues—such as muscles, tendons, and ligaments—to promote physical and mental well‑being. It is widely recognized for its ability to relieve tension, improve circulation, and support the body’s natural healing process. Whether performed as a gentle relaxation technique or a targeted therapeutic approach, massage therapy helps release stress, reduce pain, and restore balance in the body",
      "Beyond relaxation, regular massage sessions can contribute to long‑term health benefits. They can ease chronic pain conditions, improve flexibility, and enhance recovery after injuries or intense physical activity. Many people also experience emotional benefits, such as reduced anxiety and better sleep quality, thanks to the calming effect massage has on the nervous system. By integrating massage therapy into a wellness routine, individuals can enjoy a more energized, focused, and balanced life.",
    ],
  },
  {
    title: "Acupuncture",
    image: acupuncture,
    url: "acupuncture",
    desc: [
      "Acupuncture is an ancient healing practice rooted in Traditional Chinese Medicine that involves inserting very fine, sterile needles into specific points on the body. These points are believed to lie along energy pathways, known as meridians, which help regulate the flow of “qi” or vital energy. By stimulating these points, acupuncture aims to restore balance within the body, reduce pain, and promote natural healing. It is commonly used to address conditions such as chronic pain, migraines, stress, and digestive disorders.",
      "Beyond its role in pain management, acupuncture is valued for its holistic benefits. Many people experience improved sleep, reduced anxiety, and enhanced overall well‑being after regular treatments. The therapy encourages the body’s self‑healing mechanisms, supporting immune function and reducing inflammation without the use of medications. Whether used as a standalone treatment or alongside other therapies, acupuncture offers a gentle, effective approach to achieving better health and balance in daily life.",
    ],
  },
];

export const serviceNames = [
  "Physiotherapy",
  "Chiropractic Care",
  "Massage Therapy",
  "Acupuncture",
];

export const serviceTypes = [
  "Clinic-Based Practice",
  "Home-Based Practice",
  "Mobile Practitioner",
];

export const clientReviewData = [
  {
    quote: "bg-primary",
    desc: `
      <p>Amazing massage!!</p>
      <p>
        I went for the first time today. I have been having hip pain for several weeks that wasn’t going away. 
        Dana managed to massage my hip and it feels so much better! I haven’t felt this pain-free or relaxed 
        in a long time!
      </p>
      <p>
        I’ll definitely be back!
      </p>
    `,
    name: "Andy Anthony",
  },
  {
    quote: "bg-primary",
    desc: `
      <p>
        I’ve been coming to Atinama for the past seven months, and I’ve consistently had wonderful experiences. 
        Every massage I’ve received has been not only relaxing but also highly beneficial. 
      </p>
      <p>
        I especially appreciate that the staff take the time to understand your needs — they listen attentively, 
        offer personalized recommendations, and check in throughout the session to ensure everything is going well. 
      </p>
    `,
    name: "Sebastian Botero",
  },
  {
    quote: "bg-purple",
    desc: `
      <p>
        Good place for a nice massage... Would recommend a different and relaxing massage
        with lots of stretching and pulse point acupuncture.  
      </p>
      <p>
        The ambience is nice and calming. Loved the epsom salt given at the end of it, 
        and the lemongrass tea was also a lovely touch.
      </p>
    `,
    name: "Shaurya Ratna",
  },
  {
    quote: "bg-seegreen",
    desc: `
      <p>
        My husband brought me for a couples massage for my birthday, and I think this is the 
        best massage I’ve ever had!  
      </p>
      <p>
        It was such a relaxing experience. I will definitely return. Thank you!  
      </p>
    `,
    name: "Tara K",
  },
  {
    quote: "bg-danger",
    desc: `
      <p>
        I was skeptical about seeing a Chiropractor but I'm thankful I finally gave in.  
        Dr. Moh was knowledgeable, professional & reassuring.  
      </p>
      <p>
        I would highly recommend Dr. Moh if you are looking for a Chiropractor.  
      </p>
    `,
    name: "Robyn Court",
  },
  {
    quote: "bg-purple",
    desc: `
      <p>
        Good place for a nice massage... Would recommend a different and relaxing massage
        with lots of stretching and pulse point acupuncture.  
      </p>
      <p>
        The ambience is nice and calming. Loved the epsom salt given at the end of it, 
        and the lemongrass tea was also a lovely touch.
      </p>
    `,
    name: "Shaurya Ratna",
  },
  {
    quote: "bg-seegreen",
    desc: `
      <p>
        My husband brought me for a couples massage for my birthday, and I think this is the 
        best massage I’ve ever had!  
      </p>
      <p>
        It was such a relaxing experience. I will definitely return. Thank you!  
      </p>
    `,
    name: "Tara K",
  },
  {
    quote: "bg-danger",
    desc: `
      <p>
        I was skeptical about seeing a Chiropractor but I'm thankful I finally gave in.  
        Dr. Moh was knowledgeable, professional & reassuring.  
      </p>
      <p>
        I would highly recommend Dr. Moh if you are looking for a Chiropractor.  
      </p>
    `,
    name: "Robyn Court",
  },
];

export const physiotherapyBenefits = [
  {
    icon: Activity,
    title: "Improved Mobility",
    desc: "Restores movement and function, helping you regain independence and daily activity performance.",
  },
  {
    icon: Heart,
    title: "Pain Management",
    desc: "Reduces pain from injuries, surgeries, or chronic conditions through targeted exercises and treatments.",
  },
  {
    icon: Dumbbell,
    title: "Muscle Strengthening",
    desc: "Enhances strength, balance, and coordination to prevent future injuries.",
  },
  {
    icon: UserCheck,
    title: "Better Posture",
    desc: "Corrects alignment issues, reducing strain on muscles and joints.",
  },
  {
    icon: Zap,
    title: "Faster Recovery",
    desc: "Accelerates healing after injury or surgery using specialized rehabilitation programs.",
  },
  {
    icon: BookOpen,
    title: "Injury Prevention",
    desc: "Educates patients on body mechanics and exercises to prevent recurring injuries.",
  },
];

export const massageBenefits = [
  {
    icon: Relax,
    title: "Stress Reduction",
    desc: "Calms the nervous system, reducing anxiety and promoting relaxation.",
  },
  {
    icon: Heart,
    title: "Pain Relief",
    desc: "Relieves muscle soreness, tension, and chronic pain conditions.",
  },
  {
    icon: Repeat,
    title: "Improved Circulation",
    desc: "Enhances blood flow, supporting healing and nutrient delivery.",
  },
  {
    icon: Repeat2,
    title: "Increased Flexibility",
    desc: "Loosens tight muscles and connective tissues for better range of motion.",
  },
  {
    icon: Activity,
    title: "Immune Support",
    desc: "Reduces stress hormones, boosting the body's immune function.",
  },
  {
    icon: Smile,
    title: "Enhanced Mood",
    desc: "Promotes relaxation and increases endorphins, improving emotional well-being.",
  },
];

export const acupunctureBenefits = [
  {
    icon: Leaf,
    title: "Chronic Pain Relief",
    desc: "Helps alleviate pain from conditions like arthritis, back pain, and migraines.",
  },
  {
    icon: Heart,
    title: "Stress Reduction",
    desc: "Balances the body's energy, reducing anxiety and promoting relaxation.",
  },
  {
    icon: Moon,
    title: "Better Sleep",
    desc: "Regulates sleep patterns, aiding in restorative and uninterrupted sleep.",
  },
  {
    icon: Activity,
    title: "Boosted Immunity",
    desc: "Stimulates the body's natural healing mechanisms, strengthening immune response.",
  },
  {
    icon: Zap,
    title: "Improved Digestion",
    desc: "Supports healthy digestive function by balancing internal organ systems.",
  },
  {
    icon: Battery,
    title: "Enhanced Energy",
    desc: "Restores energy balance, reducing fatigue and improving vitality.",
  },
];

export const chiropracticBenefits = [
  {
    icon: Bone,
    title: "Spinal Alignment",
    desc: "Corrects misalignments, reducing nerve irritation and improving posture.",
  },
  {
    icon: Heart,
    title: "Pain Relief",
    desc: "Alleviates back, neck, and joint pain without surgery or medication.",
  },
  {
    icon: Repeat,
    title: "Increased Mobility",
    desc: "Restores joint range of motion and flexibility.",
  },
  {
    icon: Activity,
    title: "Nervous System Health",
    desc: "Supports optimal nerve function by aligning the spine.",
  },
  {
    icon: Zap,
    title: "Headache Relief",
    desc: "Reduces tension and migraine-related headaches.",
  },
  {
    icon: Smile,
    title: "Overall Wellness",
    desc: "Promotes holistic health and supports physical and mental well-being.",
  },
];
