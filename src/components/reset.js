import React, {  Component } from 'react'

export default class Reset extends Component {
    constructor(props){
        super(props);
        this.state ={
        email: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit(e){
        e.preventDefault();
        const { email } = this.state;
        console.log(email );
       
        fetch("https://studentyt.onrender.com/forgot-password", {

            method:"POST",
            crossDomain:true,
            headers:{
              "Content-Type":"application/json",
              Accept:"application/json",
              "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
              email,
              
            }), 
        }).then((res)=>res.json())
    .then((data)=>{
      console.log(data, "userRegister");
      alert(data.status);
      
    });
    
    }

    render(){
        return (
            <div className="auth-wrapper">
      <div className="auth-inner">
            <form className="contact-form" onSubmit={this.handleSubmit}>
                <h3>Forget Password</h3>
                
                <div className='mb-3'>
                    <label>Email address</label>
                    <br />
                    <input
                    type="email"
                    className='from-control'
                    
                    placeholder='Enter email'
                    onChange={(e) => this.setState({email: e.target.value})}
                    />
                </div>

                <div className='d-grid'>
                    <button type='submit' className="btn btn-primary">
                        Submit
                    </button>
                </div>
                <p className='forgot-password text-right'>
                    <a href='/signup'>Sign Up</a>
                </p>

            </form>
            </div>
    </div>
        )
    }
}