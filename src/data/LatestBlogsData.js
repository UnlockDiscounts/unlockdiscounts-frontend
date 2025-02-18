import image from '../assets/LatestBlog.png';
import writerImage from '../assets/Writter-image.png';
import { v4 as uuidv4 } from 'uuid';

const generateContent = () => {
    return Array(40).fill(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ).join(" ");
};

const LatestBlogsData = [
    {   
        id: uuidv4(),
        BlogId: 1,
        images: [image],  
        title: "A Horse: A Powerful Story",
        description: "From cozy couches to stylish tables, find the furniture that turns your house into a home. Discover the art of comfort.",
        time: "9 Min",
        content: generateContent(),
        writer: {
            writer_image: writerImage,
            writer_name: 'Arience McCoy'
        },
        tags: ["Nature", "Agriculture", "Travel"]  // New tags added
    },
    {   
        id: uuidv4(),
        BlogId: 2,
        images: [image],
        title: "The Power of Minimalism",
        description: "Minimalist design creates peace and clarity in your home. Learn how to embrace simplicity and make the most of your space.",
        time: "7 Min",
        content: generateContent(),
        writer: {
            writer_image: writerImage,
            writer_name: 'Sophia Carter'
        },
        tags: ["Technology", "Fashion & Beauty", "Home Decor"]  // New tags added
    },
    {   
        id: uuidv4(),
        BlogId: 3,
        images: [image],
        title: "Revamp Your Workspace",
        description: "A well-organized workspace enhances productivity. Explore the best practices to design an inspiring and efficient work environment.",
        time: "6 Min",
        content: generateContent(),
        writer: {
            writer_image: writerImage,
            writer_name: 'Daniel Matthews'
        },
        tags: ["Technology", "ECommerce", "Productivity"]  // New tags added
    },
    {   
        id: uuidv4(),
        BlogId: 4,
        images: [image],
        title: "Sustainable Living: The Future of Homes",
        description: "Explore eco-friendly ways to make your home sustainable and energy-efficient for a greener future.",
        time: "8 Min",
        content: generateContent(),
        writer: {
            writer_image: writerImage,
            writer_name: 'Liam Anderson'
        },
        tags: ["Nature", "Sustainability", "Health Care"]  // New tags added
    },
    {   
        id: uuidv4(),
        BlogId: 5,
        images: [image],
        title: "The Psychology of Color in Home Décor",
        description: "Learn how different colors affect mood and energy levels, and discover the perfect color palette for your home.",
        time: "5 Min",
        content: generateContent(),
        writer: {
            writer_image: writerImage,
            writer_name: 'Emily Brown'
        },
        tags: ["Fashion & Beauty", "Home Decor", "Psychology"]  // New tags added
    },
    {   
        id: uuidv4(),
        BlogId: 6,
        images: [image],
        title: "Design Trends for Modern Homes",
        description: "Stay ahead of the curve with the latest trends in interior design. Discover what's new and stylish in home décor.",
        time: "10 Min",
        content: generateContent(),
        writer: {
            writer_image: writerImage,
            writer_name: 'Noah Wilson'
        },
        tags: ["Fashion & Beauty", "Home Decor", "Design Trends"]  // New tags added
    },
    {   
        id: uuidv4(),
        BlogId: 7,
        images: [image],
        title: "Small Spaces, Big Impact",
        description: "Transform small spaces into functional and beautiful areas. Get expert tips on maximizing space with smart design choices.",
        time: "7 Min",
        content: generateContent(),
        writer: {
            writer_image: writerImage,
            writer_name: 'Ava Richardson'
        },
        tags: ["Home Decor", "Space Optimization", "Interior Design"]  // New tags added
    },
    {   
        id: uuidv4(),
        BlogId: 8,
        images: [image],
        title: "Bringing Nature Indoors",
        description: "Indoor plants not only enhance aesthetics but also improve air quality. Find out how to create a lush, green indoor space.",
        time: "6 Min",
        content: generateContent(),
        writer: {
            writer_image: writerImage,
            writer_name: 'Oliver Thompson'
        },
        tags: ["Nature", "Health Care", "Home Decor"]  // New tags added
    }
];

export default LatestBlogsData;
