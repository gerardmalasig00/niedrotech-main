const homePageConfig = {
  sliderContent: {
    slides: [
      {
        imageLayer: "assets/images/slider/banner-1-1.jpg",
        bgImage: "/assets/images/slider/shape-1.png",
        icon: "/assets/images/slider/Icon-white.png",
        subText: "Elevate Your Business",
        heading: "Tech for Tomorrow",
        buttonText: "Discover More",
        buttonLink: "#",
      },
      {
        imageLayer: "assets/images/slider/banner-1-2.jpg",
        bgImage: "/assets/images/slider/shape-1.png",
        icon: "/assets/images/slider/icon-white.png",
        subText: "Seamless Integration",
        heading: "Advanced Tech Solutions",
        buttonText: "Discover More",
        buttonLink: "#",
      },
      {
        imageLayer: "assets/images/slider/banner-1-3.jpg",
        bgImage: "/assets/images/slider/shape-1.png",
        icon: "/assets/images/slider/icon-white.png",
        subText: "Driving Innovation",
        heading: "Future proof Technology",
        buttonText: "Discover More",
        buttonLink: "#",
      },
    ],
  },
  services1: {
    sectionTitle: {
      smallTitle: "What We Offer",
      mainTitle: "Key Features for Your Business",
    },
    description:
      "Unlock potential with state-of-the-art tools and services designed to transform your business landscape.",
    services: [
      {
        step: "1",
        title: "Innovative Development Solutions",
        description: "Tailored systems to scale your business effectively.",
        readMore: "Learn More",
      },
      {
        step: "2",
        title: "Dedicated Tech Support Team",
        description: "Always available to solve your challenges.",
        readMore: "Learn More",
      },
      {
        step: "3",
        title: "Future-Ready Digital Tools",
        description: "Enhance productivity and drive innovation.",
        readMore: "Learn More",
      },
    ],
  },
  about1: {
    title: "We’re a Trusted and Professional Tech Company",
    caption: "About Us",
    imgPerson: "/assets/images/about/about-1.png",
    tabs: [
      {
        title: "About Us",
        content:
          "Empowering businesses with cutting-edge technology solutions to thrive in the digital era.",
        attributes: [
          "Innovative Tech Solutions",
          "Trusted & Experienced Team",
          "Dedicated Support & Expertise",
        ],
      },
      {
        title: "Mission",
        content:
          "To revolutionize the tech world with groundbreaking solutions.",
        attributes: ["To provide unparalleled tech services"],
      },
      {
        title: "Vision",
        content: "To be the global leader in tech innovation.",
        attributes: ["To drive digital transformation worldwide"],
      },
    ],
  },
  service2: {
    sectionTitle: "Niedrotech Popular Services",
    sectionSubtitle: "Amazing Insurance Services",
    sectionBanner: "/assets/images/shape/wave-pattern-2.png",
    services: [
      {
        name: "Cloud Computing",
        description: "Secure and scalable cloud infrastructure.",
        readMore: "Learn More",
        iconClass: "fas fa-cloud",
      },
      {
        name: "AI & Machine Learning",
        description: "Smart solutions powered by artificial intelligence.",
        readMore: "Learn More",
        iconClass: "fas fa-brain",
      },
      {
        name: "Cybersecurity",
        description: "Comprehensive protection for your digital assets.",
        readMore: "Learn More",
        iconClass: "fas fa-shield-alt",
      },
      {
        name: "Software Development",
        description: "Custom applications tailored to your needs.",
        readMore: "Learn More",
        iconClass: "fas fa-code",
      },
      {
        name: "Data Analytics",
        description: "Transform raw data into actionable insights.",
        readMore: "Learn More",
        iconClass: "fas fa-chart-line",
      },
      {
        name: "IoT Solutions",
        description: "Connect and manage smart devices efficiently.",
        readMore: "Learn More",
        iconClass: "fas fa-network-wired",
      },
    ],
  },
  faq1: {
    sectionTitle: "Tech Solutions FAQs",
    sectionSubtitle: "Your Questions, Answered",
    sectionDescription:
      "Find answers to common questions about our technology services and solutions.",
    faqs: [
      {
        question: "What Tech Services Do You Offer?",
        answer:
          "We provide a range of services including cloud computing, AI solutions, and software development.",
        iconClass: "fi-rs-arrow-small-right",
      },
      {
        question: "How Can You Support My Business?",
        answer:
          "We specialize in scalable and secure technology solutions tailored to your unique needs.",
        iconClass: "fi-rs-arrow-small-right",
      },
      {
        question: "What is Your Team's Expertise?",
        answer:
          "Our team has extensive experience in delivering high-quality tech solutions for various industries.",
        iconClass: "fi-rs-arrow-small-right",
      },
    ],
    images: {
      left: [
        { src: "assets/images/about/about-2-1.jpg", alt: "About Image 1" },
        { src: "assets/images/about/about-2-3.jpg", alt: "About Image 2" },
      ],
      right: { src: "assets/images/about/about-2-2.jpg", alt: "About Image 3" },
    },
  },
  funFact1: [
    {
      iconClass: "flaticon-satisfaction",
      count: 8569,
      unit: "+",
      label: "Satisfied Clients",
    },
    {
      iconClass: "flaticon-business-people",
      count: 263,
      unit: "+",
      label: "Tech Experts",
    },
    {
      iconClass: "flaticon-reviews",
      count: 100,
      unit: "%",
      label: "Customer Satisfaction",
    },
    {
      iconClass: "flaticon-trophy",
      count: 863,
      unit: "+",
      label: "Awards Won",
    },
  ],
  form1: {
    sectionTitle: "Get In Touch",
    sectionSubtitleTop: "Get Started with Our",
    sectionSubtitleBottom: "Tech Solutions",
    formDetails: [
      {
        id: 1,
        title: "Custom Software Development",
        fields: [
          {
            label: "Your Full Name",
            name: "name",
            type: "text",
            placeholder: "John Doe",
            required: true,
          },
          {
            label: "Phone",
            name: "phone",
            type: "text",
            placeholder: "+123 (456) 7890",
          },
          {
            label: "Email Address",
            name: "email",
            type: "email",
            placeholder: "youremail@techcompany.com",
            required: true,
          },
          {
            label: "Service Type",
            name: "serviceType",
            type: "select",
            options: [
              "Cloud Computing",
              "AI Solutions",
              "Cybersecurity",
              "Software Development",
              "Data Analytics",
              "IoT Solutions",
            ],
          },
          {
            label: "Limit Of Balance",
            name: "range",
            type: "range",
            min: 0,
            max: 8560,
            step: 1,
            hint: "Selected Value: 4000",
          },
        ],
      },
    ],
  },
  testimonial1: {
    banner: "/assets/images/testimonial/testimonial-image-1.jpg",
    data: [
      {
        image: "/assets/images/team/team-5.png",
        rating: 5,
        comment: "Outstanding service and support for our tech projects.",
        name: "Alex Johnson",
        role: "CTO, Tech Innovators",
      },
      {
        image: "/assets/images/team/team-7.png",
        rating: 4,
        comment: "Efficient and reliable solutions that exceeded expectations.",
        name: "Emma Wilson",
        role: "Product Manager, InnovateX",
      },
      {
        image: "/assets/images/team/team-6.png",
        rating: 5,
        comment: "Their expertise transformed our business operations.",
        name: "Michael Smith",
        role: "CEO, Digital Solutions",
      },
    ],
  },
  client1: {
    spacingTop: 90,
    spacingBottom: 90,
    title: {
      smTitle: "Our Clients",
      mainTitle: "Trusted by 1500+ Businesses Worldwide",
      description:
        "We are proud to collaborate with leading businesses across industries, providing innovative solutions to meet their unique needs.",
    },
    button: {
      label: "Become a Partner",
      link: "#",
    },
    clients: [
      {
        id: 1,
        image: "/assets/images/client-1.png",
        alt: "Client 1",
        link: "#",
      },
      {
        id: 2,
        image: "/assets/images/client-2.png",
        alt: "Client 2",
        link: "#",
      },
      {
        id: 3,
        image: "/assets/images/client-3.png",
        alt: "Client 3",
        link: "#",
      },
      {
        id: 4,
        image: "/assets/images/client-4.png",
        alt: "Client 4",
        link: "#",
      },
      {
        id: 5,
        image: "/assets/images/client-5.png",
        alt: "Client 5",
        link: "#",
      },
      {
        id: 6,
        image: "/assets/images/client-6.png",
        alt: "Client 6",
        link: "#",
      },
    ],
  },
  blog1: {
    sectionClass: "blog-section position-relative bg_light_1",
    backgroundImageLeft: "/assets/images/bg-1.png",
    title: {
      smTitle: "Latest News Blog",
      mainTitle: "Read Our Latest Articles",
    },
    blogPosts: [
      {
        image: "/assets/images/blog/blog-9-min.png",
        date: "Jan 3, 2024",
        author: "Bradley R Grady",
        title: "The Rise of AI in Modern Web Development",
        description:
          "Explore how artificial intelligence is revolutionizing the way we design and build web applications…",
        authorImage: "/assets/images/gavatar.png",
        readMoreLink: "/blog",
        commentLink: "/blog#respond",
      },
      {
        image: "/assets/images/blog/blog-8-min.png",
        date: "Jan 3, 2024",
        author: "Jason P Laforce",
        title: "Top JavaScript Frameworks for 2024",
        description:
          "Dive into the latest JavaScript frameworks that are set to dominate web development in 2024…",
        authorImage: "/assets/images/gavatar.png",
        readMoreLink: "/blog",
        commentLink: "/blog#respond",
      },
      {
        image: "/assets/images/blog/blog-7-min.png",
        date: "Jan 3, 2024",
        author: "Bradley R Grady",
        title: "Leveraging Machine Learning in Web Applications",
        description:
          "Learn how machine learning is being used to enhance user experiences and optimize performance…",
        authorImage: "/assets/images/gavatar.png",
        readMoreLink: "/blog",
        commentLink: "/blog#respond",
      },
    ],
    backgroundImageRight: "/assets/images/line.png",
  },
};

export default homePageConfig;
