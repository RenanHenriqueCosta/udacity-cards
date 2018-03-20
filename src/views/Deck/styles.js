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
  text:{
    fontSize:30,
    fontWeight:'bold',
    color:colors.darker
  },
  subText:{
    color:colors.gray,
    fontSize:16,
    fontWeight:'bold',
  },
  title:{
    alignItems:'center',
    marginVertical:45
  },
  flipCard:{
    flex:1,
  },
  input:{
    backgroundColor: colors.lighter,
    height: 44,
    width:300
  },
  textTitleForm:{
    fontSize:30,
    fontWeight:'bold',
    color:colors.darker,
    paddingBottom:metrics.normal
  }
}