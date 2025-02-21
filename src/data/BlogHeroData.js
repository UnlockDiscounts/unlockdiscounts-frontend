import image from '../assets/TopBlogs.png';
import writerImage from '../assets/Writter-image.png';
import { v4 as uuidv4 } from 'uuid';

const generateContent = () => {
    return Array(40).fill(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ).join(" ");
};

const BlogHeroData = [
    {
        id: uuidv4(),
        BlogId: 1,
        images: [image],
        title: "A Horse and a Powerful Story",
        description: "From cozy couches to stylish tables, find the furniture that turns your house into a home. Discover the art of comfort.",
        time: "9 Min",
        content: generateContent(),
        writer: {
            writer_image: writerImage,
            writer_name: 'Arience McCoy'
        },
        tags: ["Nature", "Agriculture", "Travel"]  // New tag attribute
    }
];

export default BlogHeroData;
