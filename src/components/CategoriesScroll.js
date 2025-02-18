import CategoriesScrollItems from './CategoriesScrollItems';
import CategoriesScrollDesktop from './CategoriesScrollDesktop';
import { CategoriesScrollData, CategoriesScrollData_Desktop } from '../data/Categories-Scroll-data';
import { useRef } from 'react';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight'; 

const CategoriesScroll = () => {
    const scrollContainerRef = useRef(null);

    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += 300;
        }
    };

    return (
        <div>
            <div style={{ position: "relative" }}>
                <ul className='card_wrapper' ref={scrollContainerRef}>
                    {CategoriesScrollData.map((catlog) => (
                        <CategoriesScrollItems key={catlog.id} catloglist={catlog} />
                    ))}
                </ul>
            </div>
            <div style={{ position: "relative" }}>
                <ul className='card_wrapper-desktop' ref={scrollContainerRef}>
                    {CategoriesScrollData_Desktop.map((catlog) => (
                        <CategoriesScrollDesktop key={catlog.id} catloglist={catlog} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CategoriesScroll;
