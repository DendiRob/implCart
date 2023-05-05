import React from 'react';
import './cart-table.scss';
import { connect } from 'react-redux';
import { deleteFromCart } from '../../actions';

const CartTable = ({items,deleteFromCart}) => {

    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {items.map(item => {
                    const {title,url,id,sumPrices,amount} = item

                    return (
                        <div key={id} className="cart__item">
                            <img src={url} className="cart__item-img" alt={title}></img>
                            <div className="cart__item-title">{title}</div>
                            <div className="cart__item-price">{sumPrices}$</div>
                            <div 
                            className="cart__close"
                            onClick={() => deleteFromCart(id,sumPrices)}
                            >&times;</div>
                            <div className='sumAllItems'>{amount}</div>
                        </div>
                    )
                })}
                
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return {
        items
    }
}
const mapDispatchToProps = {
    deleteFromCart
};

export default connect(mapStateToProps,mapDispatchToProps)(CartTable);