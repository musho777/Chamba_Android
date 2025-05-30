import { useState, forwardRef } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  Eye,
  SearchInputSvg,
  SendMsgSvg,
} from '../assets/svg/Svgs';
import { AppColors } from '../styles/AppColors';
import { Styles } from '../styles/Styles';

export const Input = forwardRef(
  ({
    marginBottom,
    marginTop,
    marginV,
    marginH,
    width = '100%',
    placeholder,
    error,
    data,
    pass = false,
    onChange,
    search,
    msg,
    send,
    disable,
    onFocus,
    onBlur,
    autoFocus,
    sendMsg,
    value,
    sendCom,
    pdR,
    clearText,
    clear,
    fontSize = 15,
  }, ref) => {
    const [securyty, setSecuryty] = useState(pass);
    return (
      <View
        style={{
          width: width,
          marginBottom: marginBottom,
          marginTop: marginTop,
          marginVertical: marginV,
          marginHorizontal: marginH,
        }}>
        <TextInput
          ref={ref}
          autoFocus={autoFocus}
          editable={disable}
          onFocus={onFocus}
          onBlur={onBlur}

          style={[
            styles.Input,
            { fontSize: fontSize },
            { paddingRight: send ? 50 : 50 },
            { paddingRight: pdR },
            { paddingRight: pass ? 50 : 50 },
            (msg || send) && { paddingRight: 50 },
          ]}
          multiline={msg || send}
          placeholder={placeholder}
          placeholderTextColor={"#4C5A69"}
          secureTextEntry={pass && securyty}
          onChangeText={e => onChange(e)}
          value={value ? value : data}
        />
        {pass && (
          <TouchableOpacity
            accessibilityLabel="Tap me!"
            style={[styles.eye]}
            onPress={() => setSecuryty(!securyty)}>
            <Eye />
          </TouchableOpacity>
        )}
        {search && (
          <TouchableOpacity
            accessibilityLabel="Tap me!"
            style={styles.eye}
            onPress={() => setSecuryty(!securyty)}>
            <SearchInputSvg />
          </TouchableOpacity>
        )}
        {msg && (
          <View style={[Styles.flexAlignItems, styles.eye, { height: '100%' }]}>
            {data?.length > 0 &&
              <TouchableOpacity
                accessibilityLabel="Tap me!"
                onPress={sendMsg} style={{ marginLeft: 10 }}>
                <SendMsgSvg />
              </TouchableOpacity>
            }
          </View>
        )}
        {send && (
          <View style={[Styles.flexAlignItems, styles.eye, { height: '100%' }]}>
            <TouchableOpacity
              accessibilityLabel="Tap me!"
              onPress={sendCom}>
              <SendMsgSvg />
            </TouchableOpacity>
          </View>
        )}

        {!msg && !send && (
          <Text style={[[Styles.tomatoMedium10, { marginBottom: 5 }]]}>
            {error}
          </Text>
        )}
        {/* {clear && (
          <View style={[Styles.flexAlignItems, styles.clear]}>
            <TouchableOpacity onPress={clearText} style={styles.clearText}>
              <Text style={{ fontSize: 17 }}>x</Text>
            </TouchableOpacity>
          </View>
        )} */}
      </View>

    );
  });

const styles = StyleSheet.create({
  Input: {
    backgroundColor: AppColors.AliceBlue_Color,
    borderRadius: 50,
    padding: 7,
    paddingHorizontal: 20,
    paddingRight: 50,
    color: AppColors.Blcak_Color,
    position: 'relative',
    height: 48,
  },
  eye: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
    height: 48,
    width: 48
  },
  clear: {
    position: 'absolute',
    right: 0,
    top: -2,
    bottom: 0,
    margin: 'auto',
    height: 48,
    width: 48,
  },
  clearText: {
    height: '100%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
