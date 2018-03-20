import { colors, metrics } from '../../styles/index'
import { Dimensions } from 'react-native'

export default styles = {
  container:{
    flex: 1, 
    justifyContent:'center', 
    alignSelf:'center', 
    width:Dimensions.get('window').width - 30,
    backgroundColor:colors.lighter
  },
}
