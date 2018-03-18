import { colors, metrics } from '../../styles/index'

export default styles = {
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:colors.lighter,
  },
  card:{    
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:colors.lighter,
    borderColor:colors.light,
    borderWidth:1,
    borderRadius:10,
    paddingVertical:170,
    marginHorizontal:metrics.normal * 3,
    marginBottom:25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
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
  },
  input:{
    backgroundColor: colors.lighter,
    height: 44,
    width:300
  },
  line:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  textTitleForm:{
    fontSize:30,
    fontWeight:'bold',
    color:colors.darker,
    paddingBottom:metrics.normal
  }
}