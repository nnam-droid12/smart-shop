import './SearchBox.scss';
import SearchIcon from '@mui/icons-material/Search';


const SearchBox = ({ searchitem }) => {
    return(
        <div className='search'>
          <div className='searchInputs'>
          <input  type='search'
          placeholder='search store'
          onChange={searchitem} />
          <div className='searchIcon'><SearchIcon /></div>
        </div>
        </div>
    );
}

export default SearchBox;