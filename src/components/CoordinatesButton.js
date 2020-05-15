// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component{

handleCoordinates = (e) => {
   let x = e.clientX
   let y = e.clientY
   let array = []
   array.push(x)
   array.push(y)

   this.props.onReceiveCoordinates(array)
}
    render(){
        return ( 
            <div>
            <button onClick ={this.handleCoordinates} >Coordinates</button>
            </div>
        )
    }
}
// export default CoordinatesButton

// import React, {Component} from 'react'

// export default class CoordinatesButton extends Component {
 
//     handleCoordinates = (e) => {
//         let x = e.clientX
//         let y = e.clientY
//         let array = []
//         array.push(x)
//         array.push(y)

//         this.props.onReceiveCoordinates(array)
//     }
 
//     render(){
//         return (
//             <div>
//             <button onClick={this.handleCoordinates} >Coordinates</button>
//             </div>
//         )
//     }
// }