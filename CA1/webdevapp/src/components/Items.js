import React, {Component} from 'react';
import ItemItem from './ItemItem';
import PropTypes from 'prop-types';

class Items extends Component {
bought = () => {}

  render(){
      return this.props.items.map((item) => (
        <ItemItem key={item.id} item={item} isBought={this.props.isBought} delItem={this.props.delItem} />
      ));
  }
}

// PropTypes
Items.propTypes = {
  items: PropTypes.array.isRequired,
  isBought: PropTypes.func.isRequired,
  delItem: PropTypes.func.isRequired
}

export default Items;