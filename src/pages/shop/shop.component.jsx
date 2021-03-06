import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectShopCollections } from '../../redux/shop/shop.selectors';

const ShopPage = ({collections}) => (
  <div className='shop-page'>
    {
      collections.map(({id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))
    }
  </div>
);

const mapsStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapsStateToProps)(ShopPage);
