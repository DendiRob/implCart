import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc'
import {menuLoaded, menuRequested,addedToCart} from '../../actions'

import './menu-list.scss';
import Spinner from '../spinner';

class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested();

        const {RestoService,menuLoaded} = this.props;
        RestoService.getMenuItems()
        .then(res => menuLoaded(res))
    }
    render() {
        const {menuItems,loading,addedToCart} = this.props;


        if(loading){
            return <Spinner />
        }

        return (
            <ul className="menu__list">

                {
                    menuItems.map(menuItem => {
                        return <MenuListItem 
                        key={menuItem.id} 
                        menuItem={menuItem}
                        onAddToCart={() => addedToCart(menuItem.id,menuItem.price)}/>
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading
    }
}
const mapDispatchToProps = {
        menuLoaded,
        menuRequested,
        addedToCart
};
export default  WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));