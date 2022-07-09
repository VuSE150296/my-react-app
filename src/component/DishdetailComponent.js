import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { BsPencilFill } from "react-icons/bs";

// class DishDetail extends Component {
//     renderDish(dish) {
//         return (
//             <div className="col-12 col-md-5 m-1">
//                 <Card>
//                     <CardImg top src={dish.image} alt={dish.name} />
//                     <CardBody>
//                         <CardTitle>{dish.name}</CardTitle>
//                         <CardText>{dish.description}</CardText>
//                     </CardBody>
//                 </Card>
//             </div>
//         );
//     }
//     renderComments(comments) {
//         if (comments != null)
//             return (
//                 <div className='text-left col-12 col-md-5 m-2'>
//                     <h3 className='mb-3'>Comments</h3>
//                     <div>
//                         {comments.map((item) => {
//                             var date = new Date(item.date);
//                             return (
//                                 <div key={item.id} className='mb-3 font-weight-bold'>
//                                     <CardText>{item.comment}</CardText>
//                                     <span>
//                                         --{item.author}, {date.toDateString()}
//                                     </span>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             );
//         else
//             return (
//                 <div></div>
//             );
//     }

//     render() {
//         if (this.props.dish != null) {
//             return (
//                 <div className="container">
//                     <div className="row">
//                         {this.renderDish(this.props.dish)}
//                         {this.renderComments(this.props.dish.comments)}
//                     </div>
//                 </div>
//             );
//         }
//         else {
//             return (
//                 <div></div>
//             );
//         }
//     }
// }

// export default DishDetail;

export function RenderDish({ dish }) {
  return (
    <div>
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

export function RenderComments({ comments }) {
  const comment = comments.map((item) => {
    var date = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(new Date(Date.parse(item.date)));
    return (
      <div key={item.id}>
        <p>{item.comment}</p>
        <p>
          -- {item.author}, {date.toString()}
        </p>
      </div>
    );
  });
  return (
    <div>
      <h2>Comments</h2>
      {comment}
    </div>
  );
}

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} />
            <Button>
              <BsPencilFill /> Submit Comment
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
