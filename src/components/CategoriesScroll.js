
import CategoriesScrollItems from './CategoriesScrollItems'
import CategoriesScrollDesktop from './CategoriesScrollDesktop'
import {CategoriesScrollData,CategoriesScrollData_Desktop} from '../data/Categories-Scroll-data'

const CategoriesScroll = () => {
    
    console.log(CategoriesScrollData)
    return (
        <div>
            <ul className='card_wrapper'>
                {
                    CategoriesScrollData.map((catlog)=>(
                        
                        <CategoriesScrollItems key={catlog.id} catloglist={catlog}/>
                    ))
                }
            </ul>
            <ul className='card_wrapper-desktop'>
                {
                    CategoriesScrollData_Desktop.map((catlog)=>(
                        
                        <CategoriesScrollDesktop key={catlog.id} catloglist={catlog}/>
                    ))
                }
            </ul>

        </div>

    )
}

export default CategoriesScroll