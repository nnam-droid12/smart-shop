import React from 'react';
import './HomePage.scss';
import Directory from '../../components/directory/Directory';
import sections from '../../components/sections-data/SectionData';
import SearchBox from '../../components/searchbox/SearchBox';


class HomePage extends React.Component {
     constructor(){
       super()
       this.state = {
         sections: sections,
         searchfield: ''
       }
     }

     handleFilter = (e) =>{
      this.setState({searchfield: e.target.value})
  }
  render() {
    const { sections, searchfield } = this.state;
    const filteredItem = sections.filter(section => 
        section.title.toLowerCase().includes(searchfield.toLowerCase()))
    return(
      <div className="homepage">
      <SearchBox searchitem={this.handleFilter} /> 
         <Directory filterItem={filteredItem} />
         
      </div>
     );
  }

}

export default HomePage;