import React from 'react';
import './CollectionPreview.scss';
import CollectionItem from '../collection-item/CollectionItem';

const CollectionPreview = ({title, items}) => {
    return(
        <div className='collection-preview'>
           <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
              {
                 items.filter((item,idx) => idx <4).map(({ id, ...OtherItemProps }) => (
                    <CollectionItem key={id} {...OtherItemProps} />
                 ))
              }
              
            </div>
        </div>
    );
}

export default CollectionPreview;