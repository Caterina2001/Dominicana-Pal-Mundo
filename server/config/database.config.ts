import {connect} from 'mongoose'

export default () => {
    connect(process.env.DATABASE!.toString(), ()=>{
        console.log("Database connected")
    })
}