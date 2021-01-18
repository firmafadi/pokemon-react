import { Component } from 'react';
// import Modal from 'react-modal';

class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            imageUrl:''
        }
    }
    componentDidMount(){
        var url = this.props.url
        fetch(url)
        .then(response => response.json())
        .then(response =>{
            this.setState({imageUrl : response.sprites.front_default})
        })
    }
    render(){
        const mystyle = {
            margin:"2%"
          }
      return(
        // <div>
            <div class="col-sm-2" style={mystyle}> 
        <div class="card">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <i class="icon-pencil primary font-large-2 float-left"></i>
                </div>
                <div class="media-body text-right">
                  <h3>278</h3>
                  <span>New Posts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        // </div>
      );
    }
  }

  export default Card;
  