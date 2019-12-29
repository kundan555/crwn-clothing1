import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectonPreview =({title,items}) =>(
    <div className='collection-preview'>
    <h1 className='titlr'>{title.toUpperCase()}</h1>
    <div className='preview'>
{
    items.filter((id,idx) => idx<4).map(({id ,...otherSectionProps}) =>(
        <CollectionItem key={id} {...otherSectionProps}/>
    ))
}
    </div>
    </div>
)

export default CollectonPreview;