import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3080/api/user_details/${this.props.match.params.id}`).then(res => {
            this.setState({
                user: res.data
            })
        })
    }

    render() {
        console.log(this.state);
        return(
            <div className='details-main-display-parent' >
                <div className='user-title' >
                    {this.state.user.title}
                    &nbsp;
                    {this.state.user.givenname}
                    &nbsp;
                    {this.state.user.middleinitial}
                    &nbsp;
                    {this.state.user.surname}
                </div>
                <div className='details-main-display' >
                    <div className='item-description' >
                        ID:&nbsp;
                    </div>
                    <div>{this.state.user.id}</div>                    
                    <div className='item-description' >
                        Gender:&nbsp;
                    </div>
                    <div>{this.state.user.gender}</div>                    
                    <div className='item-description' >
                        Name Set:&nbsp;
                    </div>
                    <div>{this.state.user.nameset}</div>                    
                    <div className='item-description' >
                        Street Address:&nbsp;
                    </div>
                    <div>{this.state.user.streetaddress}</div>                    
                    <div className='item-description' >
                        City:&nbsp;
                    </div>
                    <div>{this.state.user.city}</div>                    
                    <div className='item-description' >
                        State:&nbsp;
                    </div>
                    <div>{this.state.user.state}</div>                    
                    <div className='item-description' >
                        State Full:&nbsp;
                    </div>
                    <div>{this.state.user.statefull}</div>                    
                    <div className='item-description' >
                        Zipcode:&nbsp;
                    </div>
                    <div>{this.state.user.zipcode}</div>                    
                    <div className='item-description' >
                        Country:&nbsp;
                    </div>
                    <div>{this.state.user.country}</div>                    
                    <div className='item-description' >
                        Country Full:&nbsp;
                    </div>
                    <div>{this.state.user.countryfull}</div>                    
                    <div className='item-description' >
                        Email Address:&nbsp;
                    </div>
                    <div>{this.state.user.emailaddress}</div>                    
                    <div className='item-description' >
                        Username:&nbsp;
                    </div>
                    <div>{this.state.user.username}</div>                    
                    <div className='item-description' >
                        Password:&nbsp;
                    </div>
                    <div>{this.state.user.password}</div>                    
                    <div className='item-description' >
                        Browser User Agent:&nbsp;
                    </div>
                    <div>{this.state.user.browseruseragent}</div>                    
                    <div className='item-description' >
                        Telephone Number:&nbsp;
                    </div>
                    <div>{this.state.user.telephonenumber}</div>                    
                    <div className='item-description' >
                        Telephone Country Code:&nbsp;
                    </div>
                    <div>{this.state.user.telephonecountrycode}</div>                    
                    <div className='item-description' >
                        Mothers Maiden:&nbsp;
                    </div>
                    <div>{this.state.user.mothersmaiden}</div>                    
                    <div className='item-description' >
                        Birthday:&nbsp;
                    </div>
                    <div>{this.state.user.birthday}</div>                    
                    <div className='item-description' >
                        Age:&nbsp;
                    </div>
                    <div>{this.state.user.age}</div>                    
                    <div className='item-description' >
                        CC Type:&nbsp;
                    </div>
                    <div>{this.state.user.cctype}</div>                    
                    <div className='item-description' >
                        CC Number:&nbsp;
                    </div>
                    <div>{this.state.user.ccnumber}</div>                    
                    <div className='item-description' >
                        CVV2:&nbsp;
                    </div>
                    <div>{this.state.user.cvv2}</div>                    
                    <div className='item-description' >
                        CC Expires:&nbsp;
                    </div>
                    <div>{this.state.user.ccexpires}</div>                    
                    <div className='item-description' >
                        National ID:&nbsp;
                    </div>
                    <div>{this.state.user.nationalid}</div>                    
                    <div className='item-description' >
                        UPS:&nbsp;
                    </div>
                    <div>{this.state.user.ups}</div>                    
                    <div className='item-description' >
                        Western Union MTCN:&nbsp;
                    </div>
                    <div>{this.state.user.westernunionmtcn}</div>                    
                    <div className='item-description' >
                        MoneyGram MTCN:&nbsp;
                    </div>
                    <div>{this.state.user.moneygrammtcn}</div>                    
                    <div className='item-description' >
                        Color:&nbsp;
                    </div>
                    <div>{this.state.user.color}</div>                    
                    <div className='item-description' >
                        Occupation:&nbsp;
                    </div>
                    <div>{this.state.user.occupation}</div>                    
                    <div className='item-description' >
                        Company:&nbsp;
                    </div>
                    <div>{this.state.user.company}</div>                    
                    <div className='item-description' >
                        Vehicle:&nbsp;
                    </div>
                    <div>{this.state.user.vehicle}</div>                    
                    <div className='item-description' >
                        Domain:&nbsp;
                    </div>
                    <div>{this.state.user.domain}</div>                    
                    <div className='item-description' >
                        Guid:&nbsp;
                    </div>
                    <div>{this.state.user.guid}</div>                    
                    <div className='item-description' >
                        Latitude:&nbsp;
                    </div>
                    <div>{this.state.user.latitude}</div>                    
                    <div className='item-description' >
                        Longitude:&nbsp;
                    </div>
                    <div>{this.state.user.longitude}</div>                    
                </div>
                <Link to='/' >
                    <div className='submit' >
                        BACK TO LIST
                    </div>
                </Link>
            </div>
        )
    }
}
export default Details;