import { colors, metrics } from '../../styles/index'

export default styles = {
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:colors.lighter,
  },
  card:{    
    alignItems:'center',
    backgroundColor:colors.lighter,
    borderColor:colors.light,
    borderWidth:1,
    borderRadius:10,
    paddingVertical:100,
    marginHorizontal:metrics.normal * 3,
    marginBottom:25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
  },
}