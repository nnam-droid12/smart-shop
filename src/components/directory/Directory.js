import React, { Component} from 'react';
import MenuItem from '../menu-item/Menu-Item';
import './Directory.scss';

class Directory extends Component{

    constructor(){
        super();
        this.state = {
           sections: [{
               title: 'hats',
               imageUrl: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF0fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
               id: 1
           },
           {
            title: 'jackets',
            imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/down-jackets-2021-lead-1632405194.jpg?crop=1.00xw:0.892xh;0,0&resize=1200:*',
            id: 2
        },
        {
            title: 'sneakers',
            imageUrl: 'https://pictures-nigeria.jijistatic.com/82247907_MTgwLTI0MC0yNjVmZWY0MzJk.jpg',
            id: 3
        },
        {
            title: 'mens',
            imageUrl: 'https://assetscdn1.paytm.com/images/catalog/view_item/706682/1611049519292.jpg',
            id: 4
        },
        {
            title: 'womens',
            imageUrl: 'https://www.theirishstore.com/media/wysiwyg/sweaters-women.jpg',
            id: 5
        },
        {
            title: 'watch',
            imageUrl: 'https://lagmall.com.ng/wp-content/uploads/2021/05/IMG-20210525-WA0056.jpg',
            id: 6
        },
        {
            title: 'bag',
            imageUrl: 'https://m.media-amazon.com/images/I/812x12xg60L._SX679_.jpg',
            id: 7
        },
        {
            title: 'ear pod',
            imageUrl: 'https://sc04.alicdn.com/kf/H937a75a931c84245b14a48b9c848c93dF.jpg_350x350xz.jpg',
            id: 8
        },
        {
            title: 'cars',
            imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/maxresdefault-1-1567422858.jpg',
            id: 9
        },
        {
            title: 'phones',
            imageUrl: 'https://oasis.opstatics.com/content/dam/oasis/page/2021/operation/1217/homepage/mo/02-OnePlus-9.jpg',
            size: 'large',
            id: 10
        },
        {
            title: 'chargers',
            imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/car-charger-1633540683.jpg?crop=0.502xw:1.00xh;0.232xw,0&resize=640:*',
            size: 'large',
            id: 11
        }
           ]
        }
    }
    render(){
        return(
            <div className='directory-menu'>
            {
                this.state.sections.map(({ title, id, imageUrl, size }) => (
                 <MenuItem key={id} title={title} 
                 imageUrl={imageUrl} size={size} />
                ))
            }    
            </div>
        );
    }
}

export default Directory;