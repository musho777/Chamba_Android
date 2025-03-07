import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { CheckMarkUserSvg } from "../../../../assets/svg/Svgs"
import { Styles } from "../../../../styles/Styles";
import { useNavigation } from "@react-navigation/native";
// import { useEffect, useState } from "react";

export const HeaderInfo = ({ user, data }) => {
  const navigation = useNavigation()
  const mounth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
  // const [day, setDay] = useState('')

  function canParseJSON(jsonString) {
    try {
      JSON.parse(jsonString);
      return <Text style={[Styles.whiteSemiBold14, { color: JSON.parse(jsonString)?.color?.title ? JSON.parse(jsonString)?.color?.title : "black", fontFamily: JSON.parse(jsonString)?.font }]}>{JSON.parse(jsonString).name}</Text>
    } catch (error) {
      return <Text style={[Styles.whiteSemiBold14]}>{jsonString}</Text>
    }
  }


  // useEffect(() => {
  //   const currentDate = new Date(data?.created_at);
  //   let dayOfMonth = currentDate.getDate();
  //   let hour = currentDate.getHours();
  //   let minute = currentDate.getMinutes();
  //   const Mounth = currentDate.getMonth()
  //   if (minute <= 9) {
  //     minute = `0${minute}`
  //   }
  //   if (hour <= 9) {
  //     hour = `0${hour}`
  //   }
  //   if (dayOfMonth <= 9) {
  //     dayOfMonth = `0${dayOfMonth}`
  //   }
  //   setDay(`${dayOfMonth} ${mounth[Mounth]} в ${hour}:${minute}`)
  // }, [data?.created_at])

  const formatDate = (dateString) => {
    const currentDate = new Date(dateString);
    const dayOfMonth = String(currentDate.getDate()).padStart(2, '0');
    const hour = String(currentDate.getHours()).padStart(2, '0');
    const minute = String(currentDate.getMinutes()).padStart(2, '0');
    const month = mounth[currentDate.getMonth()];
    return `${dayOfMonth} ${month} в ${hour}:${minute}`;
  };


  return <TouchableOpacity
    activeOpacity={1}
    onPress={() =>
      user?.data?.id != data?.user?.id ? navigation.push('SearchProfil', { screen: "SearchProfils", params: { id: data?.user?.id, post_id: data?.id } }) :
        navigation.navigate('TabNavigation', { screen: "ProfileNavigation" })
    } style={[Styles.flexAlignItems]}>
    <View>
      <Image style={styles.userImg}
        source={{ uri: `https://chambaonline.pro/uploads/${data?.user?.avatar}` }} />
    </View>
    <View style={styles.nameBlock}>
      <View style={[Styles.flexAlignItems, { width: '100%', gap: 2 }]}>
        {canParseJSON(data?.user?.name)}
        {data?.user.star > 0 && <CheckMarkUserSvg />}
      </View>
      {/* <Text style={[Styles.whiteMedium9]}>{day} </Text> */}
      <Text style={[Styles.whiteMedium9]}>{formatDate(data?.created_at)}</Text>
    </View>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  userImg: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 50,
  },
  nameBlock: {
    gap: 2,
    width: '75%',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 40,
    marginBottom: 2
  },
  infoBlock: {
    position: 'absolute',
    right: 20,
    top: 50,
    elevation: 5,
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    zIndex: 1
  },
});