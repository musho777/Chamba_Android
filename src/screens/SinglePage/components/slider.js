import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  Text,
  PixelRatio,
} from 'react-native';
import { AppColors } from '../../../styles/AppColors';
import { VidioComponent } from '../../../components/post/Vidio/VidioComponent';
import { Styles } from '../../../styles/Styles';
import FastImage from 'react-native-fast-image';


const windowWidth = Dimensions.get('window').width;

const dpi = PixelRatio.get() * 160;


export const Slider = ({ photo, music_name, description, setActiveImage, save, setVertical }) => {
  const [active, setActive] = useState(0);
  const [D, setD] = useState(description)
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  const videoRef = useRef(null);
  // const [showSlider, setShowSlider] = useState(true)


  const handleMomentumScrollEnd = (event) => {
    const index = Math.floor(
      Math.floor(event.nativeEvent.contentOffset.x) /
      Math.floor(event.nativeEvent.layoutMeasurement.width)
    );
    setActive(index);
    setActiveImage(index)
  };

  useEffect(() => {
    let desc = description
    if (description && description[0] == '[') {
      desc = JSON.parse(description)
    }
    setD(desc)
  }, [description])

  const CurrentTimeSet = (i, e) => {
    let item = [...currentTime]
    item[i] = e
    setCurrentTime(item)
  }


  const onSeek = (value) => {
    let item = [...currentTime]
    item[active] = value
    setCurrentTime(item)
    console.log(value, 'value')
    videoRef?.current?.seek(value);
  };


  return (
    <View style={{ height: "90%", }}>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        data={photo}
        onScroll={() => {
          // setShowSlider(false)
        }}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        renderItem={({ item, index }) => {
          let height = 565
          if (item.height < 650) {
            height = 320
            // setHeights(500)
            setVertical(false)
          }
          else {
            height = 565
            setVertical(true)
          }
          return (
            <View style={styles.img}>
              {!item.video ?
                <View >
                  <View style={{ justifyContent: 'center', }}>
                    <FastImage
                      style={[{ width: '100%', height: height, }]}
                      source={{
                        uri: `https://chambaonline.pro/uploads/${item.photo}`,
                        priority: FastImage.priority.high,
                        cache: FastImage.cacheControl.immutable
                      }}
                      fallback={false}
                      resizeMode={FastImage.resizeMode.cover}
                    />
                  </View>
                  {(description && D[index]) &&
                    <Text style={[[Styles.whiteSemiBold12, { paddingHorizontal: 10, marginTop: 10, marginBottom: 10, height: 'auto' }]]}>
                      {D[index]}
                    </Text>}
                </View>
                : (
                  <View>
                    <VidioComponent
                      active={active == index}
                      music={music_name}
                      item={item}
                      currentTime={currentTime[active]}
                      setCurrentTime={(e) => CurrentTimeSet(index, e)}
                      setDuration={(e) => setDuration(e)}
                      duration={duration}
                      onSeek={() => onSeek()}
                      ref={videoRef}
                      big={true}
                    />
                    <View style={{ zIndex: 9999 }}>
                      {(description && D[index]) && <Text style={[[Styles.whiteSemiBold12, { paddingHorizontal: 10, marginTop: 10, marginBottom: 10 }]]}>
                        {D[index]}
                      </Text>}
                    </View>
                  </View>
                )}
            </View>
          );
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 5,
        }}>
        {photo?.length > 1 &&
          photo?.map((elm, i) => (
            <View
              key={i}
              style={[
                styles.pagination,
                i === active && {
                  backgroundColor: AppColors.GoldenTainoi_Color,
                  borderRadius: 50,
                },
              ]}></View>
          ))}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: windowWidth,
    flexShrink: 0,
    justifyContent: 'center',
    position: 'relative',
  },
  pagination: {
    width: 6,
    height: 6,
    backgroundColor: '#CCD6DF',
    marginHorizontal: 5,
    borderRadius: 50,
  },
  slider: {
    bottom: 50,
    position: 'absolute',
    zIndex: 99999,
    width: '100%',
    height: 10,
  }
});
