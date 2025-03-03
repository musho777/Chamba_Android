import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  Dimensions,
  FlatList,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Image,
  Alert,
} from 'react-native';
import QuillEditor, { QuillToolbar } from 'react-native-cn-quill';

import { useDispatch, useSelector } from 'react-redux';
import { GetCatalogAction } from '../../store/action/action';
import { Styles } from '../../styles/Styles';
import { t } from '../../components/lang';
import { ClearCreatPost } from '../../store/action/clearAction';
import { AddImage, CloseSvg1 } from '../../assets/svg/Svgs';
import { Status } from './component/status';
import { AppColors } from '../../styles/AppColors';
import { CommonActions, useFocusEffect } from '@react-navigation/native';
import { openPicker } from '@baronha/react-native-multiple-image-picker';
import FastImage from 'react-native-fast-image';
import { Header } from './component/header';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RenderHtml from 'react-native-render-html';



const windowWidth = Dimensions.get('window').width;


export const AddImg = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [descriptionColor, setDescriptionColor] = useState("white")
  const [descriptionFontFamily, setDescriptionFontFamily] = useState()
  const user = useSelector((st) => st.userData)

  // const [keyboardVisible, setKeyboardVisible] = useState(false);
  const ref = useRef()
  // useEffect(() => {
  //   const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
  //     setKeyboardVisible(true);
  //   });

  //   const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
  //     setKeyboardVisible(false);
  //   });

  //   // Cleanup listeners on unmount
  //   return () => {
  //     keyboardDidHideListener.remove();
  //     keyboardDidShowListener.remove();
  //   };
  // }, []);

  const fontFamily = [
    "Montserrat-Regular",
    "PlaywriteGBS-Regular",
    'RussoOne-Regular',
    'Agdasima-Regular',
    'Caveat-Regular',
    'Comfortaa-Regular',
    'CormorantGaramond-Regular',
    'Jost-Regular',
    'Lobster-Regular',
    'NotoSansHK-Regular',
    'Pacifico-Regular',
    'Tiny5-Regular',
    "AdventPro_Expanded-Regular",
    "Alice-Regular",
    "AmaticSC-Regular",
    "BadScript-Regular",
    "DelaGothicOne-Regular",
    "Geologica_Auto-Regular",
    "PlayfairDisplaySC-Regular",
    "RubikMonoOne-Regular",
    "Unbounded-Regular",
    "YanoneKaffeesatz-Regular",
    "AlegreyaSansSC-Regular",
    "BalsamiqSans-Regular",
    "CormorantInfant-Regular",
    "DaysOne-Regular",
    "MarckScript-Regular",
    "Pattaya-Regular",
    "ProstoOne-Regular",
    "RubikSprayPaint-Regular",
    "SofiaSansExtraCondensed-Regular",


    "RubikLines-Regular",
    "RubikDoodleTriangles-Regular",
    "RubikBrokenFax-Regular",
    "RubikBeastly-Regular",
    "Monomakh-Regular",

    "RubikPuddles-Regular",
    "RubikPixels-Regular",
    "RubikMicrobe-Regular",
    "RubikMaze-Regular",
    "RubikMaps-Regular",
    "RubikLines-Regular",
    "RubikGemstones-Regular",
    "RubikDoodleTriangles-Regular",
    "RubikDistressed-Regular",
    "RubikBurned-Regular",
    "RubikBrokenFax-Regular",
    "RubikBeastly-Regular",
    "Oi-Regular",
    "AlumniSansCollegiateOne-Regular",
  ]

  const color = [
    // { title: '#000000', id: 1 },
    { title: '#808080', id: 3 },
    { title: '#FF5733', id: 4 },
    { title: '#1E90FF', id: 6 },
    { title: '#4682B4', id: 7 },
    { title: '#4CAF50', id: 8 },
    { title: '#FFD700', id: 9 },
    { title: '#FF69B4', id: 10 },
    { title: '#800080', id: 11 },
    { title: '#8B0000', id: 12 },

    { title: '#FFA500', id: 13 },
    { title: '#87CEEB', id: 14 },
    { title: '#FF4500', id: 16 },
    { title: '#32CD32', id: 17 },
    { title: '#DA70D6', id: 18 },
    { title: '#708090', id: 19 },
    { title: '#221b63', id: 20 },

    { title: '#147558', id: 21 },
    { title: '#147558', id: 22 },
    { title: '#753414', id: 23 },
    { title: '#753414', id: 24 },
    { title: '#5d1475', id: 25 },


  ]


  const mainData = useSelector(st => st.mainData);
  const [uri, setUri] = useState([]);
  const [description, setDescription] = useState([]);
  const createPost = useSelector(st => st.createPost);
  const staticData = useSelector(st => st.static);
  const [selectedCatalog, setSelectedCatalog] = useState([])
  const [active, setActive] = useState(0)
  const flatListRef = useRef(null);

  const [localheight, setLocalHeight] = useState([])

  const [showError, setShowError] = useState(false)
  const _editor = React.createRef();

  const [error, setError] = useState('')
  const [first, setFirst] = useState(false)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(GetCatalogAction(staticData.token))
  }, []);


  useFocusEffect(
    useCallback(() => {
      _editor?.current?.setPlaceholder("Добавить описание");
      setError('')
      setShowError(false)
      dispatch(ClearCreatPost())
      setSelectedCatalog([])
      setUri([])
      addPhoto([], 0)
      setActive(0)
    }, [])
  );


  useFocusEffect(
    useCallback(() => {
      StatusBar.setTranslucent = true
      StatusBar.setBackgroundColor("black")
      StatusBar.setBarStyle('light-content');
      return () => {
        StatusBar.setBackgroundColor("white")
        StatusBar.setBarStyle('dark-content');
      };
    }, [])
  );



  useEffect(() => {
    if (createPost.status) {
      dispatch(ClearCreatPost())
      setUri([])
      setDescription([])
    }
  }, [createPost.status]);

  const addPhoto = async (data, i) => {
    _editor?.current?.setPlaceholder("Добавить описание");
    const options = {
      maxSelectedAssets: 10,
      doneTitle: "Добавить",
      usedCameraButton: false,
      isPreview: false,
      mediaType: "image",
    }
    try {
      const response = await openPicker(options);
      let item = [...data]
      if (response.didCancel) {
        if (uri.length == 0) {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'TabNavigation' }],
            })
          );
          setFirst(false)
        }
      }
      else if (!response.didCancel && !response.error) {
        if (response.length) {
          setFirst(true)
        }
        response?.map((elm, i) => {
          if (item.length <= 10) {
            item.push({ uri: elm.path, mime: elm.mime });
          }
        })
        setUri(item);
      }
    }
    catch (error) {
      Close()
      setFirst(false)
      navigation.navigate('TabNavigation')
    }

  }

  const isHTML = (str) => {
    const htmlPattern = /<\/?[a-z][\s\S]*>/i;
    return htmlPattern.test(str);
  };

  const delateFoto = index => {
    let item = [...uri];
    let temp = [...description]
    temp.splice(index, 1);
    item.splice(index, 1);
    let newIndex = 0
    if (index == uri.length - 1) {
      newIndex = index > 0 ? index - 1 : 0;
    }
    else if (index > 0) {
      newIndex = index - 1;
    }
    if (item.length == 0) {
      addPhoto([], 0)
    }
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
    }
    setUri(item);
    setDescription(temp)
  }


  const addDescription = (e, i) => {
    let item = [...description]
    item[i] = e
    setDescription(item)
  }

  const handleMomentumScrollEnd = (event) => {
    const index = Math.floor(
      Math.floor(event.nativeEvent.contentOffset.x) /
      Math.floor(event.nativeEvent.layoutMeasurement.width)
    );
    setActive(index);
  };


  const Close = () => {
    setFirst(false)
    setUri([])
  }

  const fullOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    // ['blockquote', 'code-block'],
    // [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown

    // [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    [{ direction: 'rtl' }], // text direction

    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    // [{ font: [] }],
    // [{ align: [] }],
    // ['image', 'video'],
    // ["clean"], // remove formatting button
  ];


  const renderItem = ({ item, index }) => {
    let modifiedContent = description[active];
    if (!modifiedContent?.includes('color:')) {
      // Add a default white color to the body if no color is specified
      modifiedContent = `<div style="color: white;">${modifiedContent}</div>`;
    } else {
      // If color is defined, ensure all color: black is replaced with white
      modifiedContent = modifiedContent?.replace(/color:\s*(black|#000000|#000)/g, 'color: white');
    }

    function canParseJSON(jsonString) {
      try {
        JSON.parse(jsonString);
        return <Text style={[Styles.whiteSemiBold14, { color: JSON.parse(jsonString)?.color?.title ? JSON.parse(jsonString)?.color?.title : "black", fontFamily: JSON.parse(jsonString)?.font, marginTop: -2 }]}>{JSON.parse(jsonString).name}</Text>
      } catch (error) {
        return <Text style={[Styles.whiteSemiBold14, { marginTop: -2 }]}>{jsonString}</Text>
      }
    }


    return <View>
      <View keyboardShouldPersistTaps='handled' style={(localheight[index]?.height - localheight[index]?.width) >= 0 ? { maxHeight: 525 } : { maxHeight: 393 }}>
        <TouchableOpacity activeOpacity={1} onPress={() => {
          _editor.current?.blur();
        }}>
          <View style={styles.hover} >
            <View
              activeOpacity={1}
              style={[Styles.flexAlignItems]}>
              <View>
                <Image style={styles.userImg}
                  source={{ uri: `https://chambaonline.pro/uploads/${user.avatar}` }} />
              </View>
              <View style={styles.nameBlock}>
                <View style={[Styles.flexAlignItems, { width: '100%', gap: 8 }]}>
                  {canParseJSON(user?.name)}
                </View>
              </View>
            </View>
          </View>
          <FastImage
            style={[styles.img, (localheight[index]?.height - localheight[index]?.width) >= 0 ? { maxHeight: 525 } : { maxHeight: 393 }]}
            source={{ uri: item.uri }}
            onLoad={(event) => {
              const { width, height } = event.nativeEvent;
              let item = [...localheight]
              item.push({ width: width, height: height })
              setLocalHeight(item)
            }}
          />
        </TouchableOpacity>
        {isHTML(description[active]) && description[active]?.length > 0 && <View
          style={{ position: 'absolute', top: 60, left: 10, paddingRight: 60, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 10, paddingHorizontal: 10 }}>
          <RenderHtml
            contentWidth={1}
            source={{ html: modifiedContent }}
          />
        </View>
        }
        <TouchableOpacity onPress={() => { delateFoto(index) }} style={{ position: 'absolute', top: 60, right: 10 }}>
          <CloseSvg1 />
        </TouchableOpacity>
        <TouchableOpacity style={{ position: 'absolute', top: 90, right: 10 }} onPress={() => addPhoto(uri, 1)}>
          <AddImage />
        </TouchableOpacity>
      </View>
    </View >
  }


  if (first)
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1, backgroundColor: 'black' }}
      >
        <ScrollView style={[{ backgroundColor: 'black' }, insets.top ? { paddingTop: insets.top } : Styles.statusBar]}>
          <Status setShowError={(e) => setShowError(e)} showError={showError} error={error} />
          <Header
            uri={uri}
            selectedCatalog={selectedCatalog}
            description={description}
            color={descriptionColor}
            font_family={descriptionFontFamily}
            setSelectedCatalog={(e) => setSelectedCatalog(e)}
            error={error}
            setFirst={(e) => setFirst(e)}
            Close={() => Close()}
          />
          <Text style={[Styles.whiteMedium9, { textAlign: 'center', marginTop: 10, zIndex: 99999, color: '#FFC24B', borderWidth: 1, borderColor: 'white', paddingHorizontal: 5 }]}>{t(mainData.lang).Yourcontent}</Text>
          {/* <Text style={[Styles.whiteMedium9, { textAlign: 'center', marginTop: 10, zIndex: 99999, color: '#FFC24B', borderWidth: 1, borderColor: 'white', paddingHorizontal: 5 }]}>{t(mainData.lang).Yourcontent}</Text> */}
          <View style={styles.centeredView}>
            <View style={styles.selectImage}>
              <FlatList
                horizontal
                pagingEnabled
                ref={flatListRef}
                showsHorizontalScrollIndicator={true}
                decelerationRate="normal"
                data={uri}
                windowSize={5}
                onScroll={handleMomentumScrollEnd}
                initialNumToRender={5}
                maxToRenderPerBatch={10}
                renderItem={renderItem}
              />
            </View>
            {uri?.length > 1 && <View style={styles.paginationWrapper}>
              {uri?.length > 1 && uri?.map((elm, i) => (
                <View key={i} style={[styles.pagination, i === active && { backgroundColor: AppColors.GoldenTainoi_Color, borderRadius: 50 }]}></View>
              ))}
            </View>}
          </View>
        </ScrollView >
        {active == 0 && < View style={{ width: '100%', height: 120, marginBottom: 20 }}>
          <View style={{ height: 60, width: '100%' }}>
            <QuillEditor
              style={[styles.input, { color: descriptionColor, fontFamily: descriptionFontFamily }]}
              ref={_editor}
              onHtmlChange={({ html }) => addDescription(html, 0)}
              initialHtml={description[0]}
            />
          </View>
          <QuillToolbar
            editor={_editor}
            options={'full'}
            theme="light"

          />
        </View>}
        {active == 1 && < View style={{ width: '100%', height: 120, marginBottom: 20 }}>
          <View style={{ height: 60, width: '100%' }}>
            <QuillEditor
              style={[styles.input, { color: descriptionColor, fontFamily: descriptionFontFamily }]}
              ref={_editor}
              onHtmlChange={({ html }) => addDescription(html, 1)}
              initialHtml={description[1]}
            />
          </View>
          <QuillToolbar
            editor={_editor}
            options={'full'}
            theme="light"
          />
        </View>}
        {active == 2 && < View style={{ width: '100%', height: 120, marginBottom: 20 }}>
          <View style={{ height: 60, width: '100%' }}>
            <QuillEditor
              style={[styles.input, { color: descriptionColor, fontFamily: descriptionFontFamily }]}
              ref={_editor}
              onHtmlChange={({ html }) => addDescription(html, 2)}
              initialHtml={description[2]}
            />
          </View>
          <QuillToolbar
            editor={_editor}
            options="full"
            theme="light"
          />
        </View>}
        {active == 3 && < View style={{ width: '100%', height: 120, marginBottom: 20 }}>
          <View style={{ height: 60, width: '100%' }}>
            <QuillEditor
              style={[styles.input, { color: descriptionColor, fontFamily: descriptionFontFamily }]}
              ref={_editor}
              onHtmlChange={({ html }) => addDescription(html, 3)}
              initialHtml={description[2]}
            />
          </View>
          <QuillToolbar
            editor={_editor}
            options="full"
            theme="light"
          />
        </View>}
        {active == 4 && < View style={{ width: '100%', height: 120, marginBottom: 20 }}>
          <View style={{ height: 60, width: '100%' }}>
            <QuillEditor
              style={[styles.input, { color: descriptionColor, fontFamily: descriptionFontFamily }]}
              ref={_editor}
              onHtmlChange={({ html }) => addDescription(html, 4)}
              initialHtml={description[2]}
            />
          </View>
          <QuillToolbar
            editor={_editor}
            options="full"
            theme="light"
          />
        </View>}
        {active == 5 && < View style={{ width: '100%', height: 120, marginBottom: 20 }}>
          <View style={{ height: 60, width: '100%' }}>
            <QuillEditor
              style={[styles.input, { color: descriptionColor, fontFamily: descriptionFontFamily }]}
              ref={_editor}
              onHtmlChange={({ html }) => addDescription(html, 5)}
              initialHtml={description[2]}
            />
          </View>
          <QuillToolbar
            editor={_editor}
            options="full"
            theme="light"
          />
        </View>}
        {active == 6 && < View style={{ width: '100%', height: 120, marginBottom: 20 }}>
          <View style={{ height: 60, width: '100%' }}>
            <QuillEditor
              style={[styles.input, { color: descriptionColor, fontFamily: descriptionFontFamily }]}
              ref={_editor}
              onHtmlChange={({ html }) => addDescription(html, 6)}

              initialHtml={description[2]}
            />
          </View>
          <QuillToolbar
            editor={_editor}
            options="full"
            theme="light"
          />
        </View>}
        {active == 7 && < View style={{ width: '100%', height: 120, marginBottom: 20 }}>
          <View style={{ height: 60, width: '100%' }}>
            <QuillEditor
              style={[styles.input, { color: descriptionColor, fontFamily: descriptionFontFamily }]}
              ref={_editor}
              onHtmlChange={({ html }) => addDescription(html, 7)}

              initialHtml={description[2]}
            />
          </View>
          <QuillToolbar
            editor={_editor}
            options="full"
            theme="light"
          />
        </View>}
        {active == 8 && < View style={{ width: '100%', height: 120, marginBottom: 20 }}>
          <View style={{ height: 60, width: '100%' }}>
            <QuillEditor
              style={[styles.input, { color: descriptionColor, fontFamily: descriptionFontFamily }]}
              ref={_editor}
              onHtmlChange={({ html }) => addDescription(html, 8)}

              initialHtml={description[2]}
            />
          </View>
          <QuillToolbar
            editor={_editor}
            options="full"
            theme="light"
          />
        </View>}
        {active == 9 && < View style={{ width: '100%', height: 120, marginBottom: 20 }}>
          <View style={{ height: 60, width: '100%' }}>
            <QuillEditor
              style={[styles.input, { color: descriptionColor, fontFamily: descriptionFontFamily }]}
              ref={_editor}
              onHtmlChange={({ html }) => addDescription(html, 9)}
              initialHtml={description[2]}
            />
          </View>
          <QuillToolbar
            editor={_editor}
            options="full"
            theme="light"
          />

        </View>}
      </KeyboardAvoidingView >
    );
  else {
    return
  }
};


const styles = StyleSheet.create({
  pagination: {
    width: 6,
    height: 6,
    backgroundColor: '#CCD6DF',
    marginHorizontal: 5,
    borderRadius: 50,
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 2,
    zIndex: 9999,
  },
  paginationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    height: 20,
    width: '100%',
  },
  centeredView: {
    alignItems: 'center',
    backgroundColor: 'black',
    // height: '100%',
    height: 550,
    borderColor: 'red'
  },
  editItem: {
    backgroundColor: '#D9D9D9',
    width: 60,
    height: 60,
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 5,
  },
  img: {
    height: 550,
    width: windowWidth,
    borderRadius: 11,
  },
  Vidio: {
    height: 550,
    width: windowWidth,
    borderRadius: 11,
  },
  input: {
    borderColor: 'red',
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.7)',
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 12,
    color: 'white'
  },
  selectImage: {
    height: 'auto',
    width: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  addPhoto: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    borderRadius: 7,
    width: 220,
    height: 30,
    marginTop: 10,
    backgroundColor: '#FFD953',
  },
  editor: {
    flex: 1,
    padding: 0,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 5,
    fontSize: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  hover: {
    padding: 5,
    paddingLeft: 7,
    position: 'relative',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "rgba(0,0,0,0.2)",
    position: 'absolute',
    zIndex: 999999,
    height: 50,
  },
  userImg: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 50,
  },
  nameBlock: {
    // gap: 2,
    width: '75%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 40
  },
});
