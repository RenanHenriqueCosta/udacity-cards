import { AsyncStorage } from 'react-native'

// export const getState = async () => {
//     try{
//         await AsyncStorage.getItem('@udacicards:state')
//     } catch (error) {
//         console.log(error)
//     }
// }

export async function getState(){
    var state = AsyncStorage.getItem('@udacicards:state').then( state => JSON.parse(state))
    return await state
}

export const setState = (key, state) => {

    console.log('state',state)
    try{
        return AsyncStorage.setItem(key , JSON.stringify(state))
    } catch (error) {
        console.log(error)
    }
}