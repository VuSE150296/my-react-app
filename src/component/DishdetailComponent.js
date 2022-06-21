import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    renderDish(dish) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    renderComments(comments) {
        if (comments != null)
            return (
                <div className='text-left col-12 col-md-5 m-2'>
                    <h3 className='mb-3'>Comments</h3>
                    <div>
                        {comments.map((item) => {
                            var date = new Date(item.date);
                            return (
                                <div key={item.id} className='mb-3 font-weight-bold'>
                                    <CardText>{item.comment}</CardText>
                                    <span>
                                        --{item.author}, {date.toDateString()}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

    render() {
        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;