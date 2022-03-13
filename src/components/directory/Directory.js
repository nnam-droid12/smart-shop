
import MenuItem from '../menu-item/Menu-Item';
import './Directory.scss';




const Directory = ({ filterItem }) => {
        return (
            <div className='directory-menu'>
            {                 
                filterItem.map(
                (value, i) => 
                 <MenuItem 
                 key={i}
                 title={filterItem[i].title} 
                 imageUrl={filterItem[i].imageUrl}
                 id={filterItem[i].id}
                 linkUrl={filterItem[i].linkUrl}
                  />
                )
                } 
            </div>
        );
}

export default Directory;