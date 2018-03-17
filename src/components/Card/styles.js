import { colors, metrics } from '../../styles/index'

export default styles = {
  card:{    
    paddingVertical:metrics.normalDouble,
    backgroundColor:colors.lighter,
    borderBottomColor:colors.light,
    borderBottomWidth: 1,
    justifyContent:'center',
    alignItems:'center'
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
  },
  line:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
}
