import React,{useContext, useEffect} from 'react'
import { BottomTabBarProps, BottomTabParamsList } from '../types'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import { OrderContext } from '../context/ordercontext'
import Card from '../components/Card'
import { useIsFocused } from '@react-navigation/native';


const ActiveOrders:React.FC<BottomTabBarProps<BottomTabParamsList,"ActiveOrders">>= ({route, navigation}) => {
  const {state, dispatch} = useContext(OrderContext)
  const isFocused = useIsFocused();

  // console.log(navigation.getState)
  useEffect(()=>{
    dispatch?.("pending");
  },[isFocused])
  return (
    <View style={styles.container}>
    <Card>
      {
      (style)=>(
    <View style={style}>
      <FlatList
      style={styles.flatList}
  data={state}
  renderItem={
    ({item}) => (
      <View style={styles.listItem}>
        <Text>{item.customerId.substring(0,8)}</Text>
        <Text style={{color: "green"}}>{item.orderStatus}</Text>
      </View>
    )
  }
  keyExtractor={item => item.orderId}
/>
    </View>
      )}
    </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignSelf:"center",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    // flex:1,
    flexDirection:'row'
  },
  flatList:{
    width:"100%"
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    width: "70%"
  }
})

export default ActiveOrders