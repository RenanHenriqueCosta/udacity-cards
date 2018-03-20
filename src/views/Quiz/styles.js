import { colors, metrics } from '../../styles/index'
import { Dimensions } from 'react-native'

export default styles = {
  container:{
    flex: 1, 
    justifyContent:'center', 
    alignSelf:'center', 
    width:Dimensions.get('window').width - 30, 
  },
  flipCard:{
    flex:1,
  },
  card:{
    height: Dimensions.get('window').height/2, 
    alignItems:'center', 
    justifyContent:'center'
  },
  progress:{
    width:Dimensions.get('window').width - 30,
    marginTop:25,
  },
  progressLocation:{
    alignSelf:'center'
  },
  buttonsSpace:{
    flexDirection:'row', 
    width: Dimensions.get('window').width - 30, 
    justifyContent:'space-around'
  },
  text:{
    fontSize:30,
    fontWeight:'bold',
    color:colors.darker,
    textAlign:'center'
  },
  subText:{
    fontSize:26,
    fontWeight:'bold',
    color:colors.gray,
    marginHorizontal:5,
    textAlign:'center'
  },
  numberCardsView:{
    marginTop:20,
    textAlign:'center',
    alignItems:'center'
  },
  numberCardsText:{
    fontSize:26,
    fontWeight:'bold',
    color:colors.gray,
  }

}