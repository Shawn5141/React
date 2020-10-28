import React from 'react'
import {connect} from 'react-redux'
import {handleAddTweet} from '../actions/tweetAction'
import {withRouter} from 'react-router-dom'
class NewTweet extends React.Component{
    state = {
        text:''
    }
    //use React Component state to change UI (submit button)
    handleChange = (e)=>{
        const text = e.target.value
        this.setState(()=>({
            text
        }))
    }
    handleSubmit =(e)=>{
        e.preventDefault()
        const {text} = this.state
        const {dispatch,id} = this.props
        // Add tweet to store
        dispatch(handleAddTweet(text,id))
        this.setState(()=>({
            text:''
        }))
        this.props.history.push('/');
        
    }
    render(){
        const {text} = this.state
        const tweetLeft = 280 -text.length
        return(
            <div>
                <h3 className='center'>Compose new tweet</h3>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder="What's happening"
                        value={text}
                        onChange={this.handleChange}
                        className='textarea'
                        maxLength={280}
                    />
                    {tweetLeft <=100 && (<div>
                        {tweetLeft}
                    </div>)}
                    <button className='btn'
                            type='submit'
                            disabled={text===''}>

                    Submit</button>
                </form>
                
            </div>
        )
    }
}

// function mapStateToProps({}){

// }
export default withRouter(connect()(NewTweet))