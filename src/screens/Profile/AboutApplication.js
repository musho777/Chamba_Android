import { ScrollView, StyleSheet, Text, View } from "react-native"
import { Styles } from "../../styles/Styles"

export const AboutApplication = () => {


  return <ScrollView contentContainerStyle={{ paddingHorizontal: 15 }} showsVerticalScrollIndicator={false}>
    <View style={{ gap: 15, marginBottom: 10, }}>
      <Text style={Styles.balihaiMedium13}>Chamba – это приложение для любителей снимать крутые фото и короткие видео событий,
        <View>
          <Text style={styles.line}>
            происходящих не с нами, а вокруг нас!
          </Text>
        </View>
      </Text>
      <Text style={Styles.balihaiMedium13}>
        Представляем приложение, которое перевернет Вашу  ленту и заставит Вас увидеть мир по-новому!
      </Text>
      <View style={{ justifyContent: 'center', alignContent: 'center', flexDirection: 'row', marginTop: 0, marginBottom: 0 }}>
        <Text style={[[{ fontSize: 16, textAlign: 'center', width: 'auto' }, styles.line]]}>
          Вот то, что мы приготовили для Вас:
        </Text>
      </View>
      <Text style={Styles.balihaiMedium13} >
        <Text style={styles.line}>
          Персональная лента:
          {"\n"}
        </Text>
        После быстрой регистрации, Вы выбираете любимые рубрики, а их более 35, и получаете контент, подходящий именно Вам!
      </Text>
    </View>
    <View style={{ gap: 15, marginBottom: 20 }}>
      <Text style={Styles.balihaiMedium13}>
        <Text style={[styles.line, { borderBottomWidth: 0 }]}>
          Попутный контент: {"\n"}
        </Text>
        <Text style={{ textDecorationLine: "underline" }}>
          Любите путешествовать?
        </Text>
        Выбрав эту рубрику, к красочному контенту будут предложены такие рубрики как фрукты, овощи, еда и напитки, города и страны, активный отдых, экстрим, развлечения, природа, времена года, охота и рыбалка, и релакс.{"\n"}
        <Text style={{ textDecorationLine: "underline" }}>
          Интересуетесь недвижимостью?
        </Text>
        Мы предложим Вам не только крутой контент о новостройках, но и попутно идеи для строительства и даже информацию о строительных инструментах!
      </Text>
      <Text style={Styles.balihaiMedium13}>
        <Text style={[styles.line, { borderBottomWidth: 0 }]}>
          Автоматическая категоризация:
          {"\n"}
        </Text>
        <Text style={{ textDecorationLine: 'underline' }}>
          Обожаете свою любимую собачку?
        </Text>
        Мы сразу предложим загрузить ее в рубрику “Животные” и покажем тем людям, которые любят маленьких пушистиков!{"\n"}
        <Text style={{ textDecorationLine: 'underline' }}>
          Вы балдеете от своей спортивной машины?
        </Text>
        Загрузив ее в рубрику “Транспорт”, Ваш контент направится точно тем людям, которые выбрали эту рубрику.
      </Text>

      <Text style={Styles.balihaiMedium13}>
        <Text style={[styles.line, { borderBottomWidth: 0 }]}>
          Локальный контент:{"\n"}
        </Text>
        Получайте контент в первую очередь со своего города! интересные места, природные явления и многое другое - все это в Вашей ленте!
      </Text>

      <Text style={Styles.balihaiMedium13}>
        <Text style={[styles.line, { borderBottomWidth: 0 }]}>
          Информация о коллегах по сфере/отрасли:{"\n"}
        </Text>
        Вы риэлтор, строитель, блогер, бармен, шеф-повар или предоставляете товары и услуги? Мы аккуратно предложим Вам контент от Ваших коллег по отрасли, как работают другие специалисты, и будьте в курсе последних трендов!
      </Text>

      <Text style={Styles.balihaiMedium13}>
        <Text style={[styles.line, { borderBottomWidth: 0 }]}>
          Скоростная работа:{"\n"}
        </Text>
        Смотрите контент и выкладывайте свои фото в мгновение ока!
      </Text>
      <Text style={Styles.balihaiMedium13}>
        <Text style={[styles.line, { borderBottomWidth: 0 }]}>
          Уникальный контент:{"\n"}
        </Text>
        Мы покажем Вам все самое свежее и интересное, никаких групп, сообществ, фотофильтров и повторяющегося контента!
      </Text>
      <Text style={Styles.balihaiMedium13}>
        <Text style={[styles.line, { borderBottomWidth: 0 }]}>
          Разнообразие контента:{"\n"}
        </Text>
        От спокойных пейзажей до захватывающих событий, у нас найдется что-то для каждого!
      </Text>
      <Text style={Styles.balihaiMedium13}>
        <Text style={[styles.line, { borderBottomWidth: 0 }]}>
          Активность просмотров:{"\n"}
        </Text>
        Каждый пользователь может посмотреть подробную статистику по загруженной публикации.{"\n"}
        Не тратьте время на скучную ленту! Скачайте приложение и окунитесь в мир интересных открытий!
      </Text>
      <Text style={Styles.balihaiMedium13}>
        Не прячьте красивые кадры в галерее телефона.
      </Text>

    </View>
    <View style={{ marginBottom: 55 }}>
      <Text style={[Styles.balihaiMedium13, styles.line, { borderBottomWidth: 0 }]}>Рекомендации</Text>
      <Text style={Styles.balihaiMedium13}>Автор канала не выкладывает:</Text>
      <Text style={[Styles.balihaiMedium13,]}>- Контент с собой.</Text>
      <Text style={[Styles.balihaiMedium13,]}>- Чужой и запрещённый контент.</Text>
    </View>
  </ScrollView>
}

const styles = StyleSheet.create({
  line: {
    color: "#000",
    fontWeight: "700",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  }
})