import { colors, metrics } from '../../styles/index'

export default styles = {
  card:{
    marginHorizontal:metrics.normal,
    paddingVertical:metrics.normal,
    backgroundColor:colors.lighter,
    borderRadius:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
  },
  text:{
    fontSize:30,
    fontWeight:'bold',
    paddingBottom:30,
    color:colors.darker
  },
  title:{
    alignItems:'center',
  },
  line:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  input:{
    backgroundColor: colors.lighter,
    height: 44,
    paddingHorizontal: 10,
  }
}
