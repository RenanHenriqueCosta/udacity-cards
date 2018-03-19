import { colors, metrics } from '../../styles/index'
import { Dimensions } from 'react-native'

export default styles = {
  container:{
    flex: 1, 
    justifyContent:'center', 
    alignSelf:'center', 
    width:Dimensions.get('window').width - 30, 
  },
  progress:{
    width:Dimensions.get('window').width - 30,
    marginTop:25,
  },
  buttonsSpace:{
    marginHorizontal:10
  },
  text:{
    fontSize:30,
    fontWeight:'bold',
    color:colors.darker
  },
}