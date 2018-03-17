import { colors, metrics } from '../../styles/index'

export default styles = {
  card:{
    paddingVertical:metrics.normal,
  },
  currentCard:{
    paddingVertical:metrics.normal,
    height:44,
    alignItems:'center',
    justifyContent:'center'
  },
  cardCreation:{
    height:44,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:colors.light
  },
  cardCreationText:{
    fontWeight:'bold',
    fontSize:30,
    color:colors.indigo,
  },
  text:{
    fontWeight:'bold',
    fontSize:30,
    color:colors.indigo,
  },
  disabled:{
    fontWeight:'bold',
    fontSize:30,
    color:colors.darker,
  }
}

