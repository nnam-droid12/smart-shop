import React from 'react';
import SHOP_DATA from './ShopData';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

class ShopePage extends React.Component {
    constructor(){
        super();
        this.state ={
            collections: SHOP_DATA
    }
  }


  render() {
      const {collections} = this.state;
      return(
          <div className='shope-page'>
        {
            collections.map(({ id, ...OthercollectionProps }) => (
                <CollectionPreview key={id} {...OthercollectionProps} />
            ))
        }
          </div>
      );
  }
}

export default ShopePage;